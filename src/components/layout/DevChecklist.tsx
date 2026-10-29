import { useEffect, useMemo, useState } from 'react';
import { ClipboardList, X } from 'lucide-react';
import { certificates } from '../../data/certificates';
import { education } from '../../data/education';
import { experience } from '../../data/experience';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import { isSet } from '../../lib/placeholder';

/**
 * Dev-only panel listing every detail that still needs your input.
 * App.tsx only renders it when import.meta.env.DEV is true.
 */
export function DevChecklist() {
  const [open, setOpen] = useState(false);
  const [resumeIsPlaceholder, setResumeIsPlaceholder] = useState(false);

  // The bundled placeholder resume is tiny; a real resume PDF is far larger.
  useEffect(() => {
    fetch(profile.resume.url, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') ?? '';
        const size = Number(res.headers.get('content-length') ?? 0);
        setResumeIsPlaceholder(!res.ok || !type.includes('pdf') || size < 2000);
      })
      .catch(() => setResumeIsPlaceholder(true));
  }, []);

  const todos = useMemo(() => {
    const items: string[] = [];
    if (!isSet(profile.email)) items.push('profile.ts → email');
    if (!isSet(profile.social.github)) items.push('profile.ts → GitHub URL');
    if (!isSet(profile.social.linkedin)) items.push('profile.ts → LinkedIn URL');
    if (!isSet(profile.photo)) items.push('profile.ts → photo (public/images/profile.jpg)');
    if (resumeIsPlaceholder) items.push(`Replace public${profile.resume.url} with your real resume`);
    projects.forEach((p) => {
      if (!isSet(p.image)) items.push(`projects.ts → ${p.title} screenshot`);
      if (!isSet(p.github) && !isSet(p.live)) items.push(`projects.ts → ${p.title} GitHub / live link (if public)`);
    });
    items.push('projects.ts → verify every description, feature & tech stack');
    if (experience.some((e) => e.placeholder)) items.push('experience.ts → replace or delete the template role');
    certificates.forEach((c) => {
      if (!isSet(c.issuer) || !isSet(c.date)) items.push(`certificates.ts → ${c.title} issuer & date`);
    });
    education.forEach((e) => {
      if (!isSet(e.institution) || !isSet(e.period)) items.push(`education.ts → ${e.short} institution & years`);
    });
    if (!import.meta.env.VITE_FORMSPREE_FORM_ID) items.push('.env → VITE_FORMSPREE_FORM_ID (contact form)');
    return items;
  }, [resumeIsPlaceholder]);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-ink-900/90 px-3.5 py-2 font-mono text-xs text-amber-200 shadow-lg backdrop-blur transition hover:border-amber-300"
      >
        <ClipboardList className="h-4 w-4" aria-hidden="true" />
        {todos.length} to fill in
      </button>
    );
  }

  return (
    <aside
      aria-label="Setup checklist"
      className="fixed bottom-4 left-4 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-amber-400/30 bg-ink-900/95 p-4 font-mono text-xs text-slate-300 shadow-2xl backdrop-blur"
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="font-semibold text-amber-200">Setup checklist · dev only</p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close checklist"
          className="rounded p-1 text-slate-400 hover:bg-white/5 hover:text-white"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <ul className="max-h-72 space-y-1.5 overflow-y-auto pr-1">
        {todos.map((t) => (
          <li key={t} className="flex gap-2">
            <span className="text-amber-400" aria-hidden="true">○</span>
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-3 border-t border-white/5 pt-3 text-[11px] text-slate-500">
        Placeholder links are hidden automatically in production builds. This panel never ships.
      </p>
    </aside>
  );
}
