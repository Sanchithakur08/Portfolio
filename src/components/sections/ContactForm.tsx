import { useId, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react';
import { profile } from '../../data/profile';
import { cn } from '../../lib/cn';
import { isSet } from '../../lib/placeholder';
import { Button } from '../ui/Button';
import { DevHint } from '../ui/DevHint';

/**
 * Submission strategy
 * 1. If VITE_FORMSPREE_FORM_ID is set (see .env.example) the message is POSTed to Formspree,
 *    which forwards it to your inbox — no backend required.
 * 2. Otherwise the form opens the visitor's email app with the message pre-filled,
 *    addressed to profile.email.
 */
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim();

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success'; text: string }
  | { kind: 'error'; text: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = 'Please enter a valid email address.';
  if (fields.message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.';
  return errors;
}

export function ContactForm() {
  const uid = useId();
  const [fields, setFields] = useState<Fields>({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const canMailto = isSet(profile.email);
  const configured = Boolean(FORMSPREE_ID) || canMailto;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof Fields]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }

    // Bots fill hidden fields; quietly pretend success.
    if (honeypot) {
      setStatus({ kind: 'success', text: 'Thanks! Your message has been sent.' });
      return;
    }

    if (FORMSPREE_ID) {
      setStatus({ kind: 'submitting' });
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...fields, _subject: `Portfolio message from ${fields.name}` }),
        });
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        setFields({ name: '', email: '', message: '' });
        setStatus({ kind: 'success', text: "Thanks! Your message has been sent — I'll get back to you soon." });
      } catch {
        setStatus({
          kind: 'error',
          text: canMailto
            ? `Something went wrong sending your message. Please try again or email ${profile.email} directly.`
            : 'Something went wrong sending your message. Please try again later.',
        });
      }
      return;
    }

    if (canMailto) {
      const subject = encodeURIComponent(`Portfolio message from ${fields.name}`);
      const body = encodeURIComponent(`${fields.message}\n\n— ${fields.name} (${fields.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({ kind: 'success', text: 'Your email app should now open with the message ready to send.' });
      return;
    }

    setStatus({ kind: 'error', text: 'The contact form is not configured yet.' });
  }

  const submitting = status.kind === 'submitting';

  return (
    <form noValidate onSubmit={onSubmit} className="surface relative rounded-2xl p-5 sm:p-6">
      {!configured && (
        <DevHint className="mb-5">Set VITE_FORMSPREE_FORM_ID in .env, or a real email in profile.ts</DevHint>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={`${uid}-name`} label="Name" error={errors.name}>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={onChange}
            placeholder="Jane Doe"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${uid}-name-error` : undefined}
            className={inputClass(errors.name)}
          />
        </Field>
        <Field id={`${uid}-email`} label="Email" error={errors.email}>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={fields.email}
            onChange={onChange}
            placeholder="jane@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${uid}-email-error` : undefined}
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <Field id={`${uid}-message`} label="Message" error={errors.message} className="mt-4">
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          value={fields.message}
          onChange={onChange}
          placeholder="Tell me about the role or project…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${uid}-message-error` : undefined}
          className={cn(inputClass(errors.message), 'resize-y')}
        />
      </Field>

      {/* Honeypot field — hidden from people, tempting for bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${uid}-company`}>Company</label>
        <input
          id={`${uid}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? (
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          {submitting ? 'Sending…' : 'Send message'}
        </Button>
        {!FORMSPREE_ID && canMailto && (
          <p className="text-xs text-slate-500">Opens your email app to send.</p>
        )}
      </div>

      <div id={`${uid}-status`} role="status" aria-live="polite" className="empty:hidden mt-5">
        {status.kind === 'success' && (
          <p className="flex items-start gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.07] px-4 py-3 text-sm text-emerald-200">
            <CircleCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {status.text}
          </p>
        )}
        {status.kind === 'error' && (
          <p className="flex items-start gap-2 rounded-xl border border-rose-400/25 bg-rose-400/[0.07] px-4 py-3 text-sm text-rose-200">
            <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {status.text}
          </p>
        )}
      </div>
    </form>
  );
}

function inputClass(error?: string) {
  return cn(
    'block w-full rounded-xl border bg-ink-950/60 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 transition',
    'focus:outline-none focus:ring-2',
    error
      ? 'border-rose-400/50 focus:border-rose-400/60 focus:ring-rose-400/20'
      : 'border-white/10 hover:border-white/20 focus:border-violet-400/60 focus:ring-violet-400/20',
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}

function Field({ id, label, error, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}
