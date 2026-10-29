import { sectionIndex } from '../../data/navigation';
import { ArrowUpRight, Download, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import { isSet } from '../../lib/placeholder';
import { ButtonLink } from '../ui/Button';
import { getSocialLinks } from '../ui/SocialLinks';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';
import { ContactForm } from './ContactForm';

export function Contact() {
  const links = getSocialLinks();

  return (
    <Section id="contact" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]"
      />

      <SectionHeading
        id="contact"
        index={sectionIndex('contact')}
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <span className="text-gradient">great together</span>
          </>
        }
        description="I'm currently looking for software development opportunities. Whether you have a role in mind or just want to connect, my inbox is open."
      />

      <div className="relative grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
        <Reveal>
          <div className="space-y-3">
            {links.map(({ label, href, value, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-ink-900/60 p-3.5 transition hover:-translate-y-0.5 hover:border-violet-400/30"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-500/10 text-violet-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">{label}</span>
                  <span className="block truncate text-sm font-medium text-slate-100">
                    {value.replace(/^https?:\/\/(www\.)?/, '')}
                  </span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  aria-hidden="true"
                />
              </a>
            ))}

            {isSet(profile.location) && (
              <p className="flex items-center gap-2 px-1 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-violet-300" aria-hidden="true" />
                {profile.location}
              </p>
            )}

            <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-5">
              <p className="text-sm font-semibold text-white">Prefer the details on paper?</p>
              <p className="mt-1 text-sm text-slate-400">Grab a copy of my resume.</p>
              <ButtonLink
                href={profile.resume.url}
                download={profile.resume.fileName}
                variant="secondary"
                size="sm"
                className="mt-4"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume (PDF)
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
