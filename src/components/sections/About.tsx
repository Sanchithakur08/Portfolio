import { sectionIndex } from '../../data/navigation';
import { BookOpen, Code2, Layers, ShieldCheck, type LucideIcon } from 'lucide-react';
import { profile } from '../../data/profile';
import { cn } from '../../lib/cn';
import { isSet } from '../../lib/placeholder';
import { DevHint } from '../ui/DevHint';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';

const highlights: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Layers, title: 'Full-stack mindset', text: 'Comfortable across UI, APIs and the database layer.' },
  { icon: Code2, title: 'Clean, typed code', text: 'TypeScript, clear structure and readable components.' },
  { icon: ShieldCheck, title: 'Quality-focused', text: 'Automated browser testing and disciplined Git workflows.' },
  { icon: BookOpen, title: 'Always learning', text: 'Pursuing an MCA in AI/ML alongside full-time work.' },
];

function Portrait() {
  if (isSet(profile.photo)) {
    return (
      <img
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        width={240}
        height={240}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    );
  }
  // Tasteful monogram fallback until a photo is added.
  return (
    <div className="relative grid h-full w-full place-items-center bg-gradient-to-br from-violet-600/25 via-ink-800 to-blue-600/25">
      <span className="font-mono text-4xl font-semibold tracking-tight text-white/90">{profile.initials}</span>
      <DevHint className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">Add photo</DevHint>
    </div>
  );
}

export function About() {
  const facts = [
    { label: 'Role', value: profile.role },
    { label: 'Focus', value: 'Full-stack web' },
    { label: 'Education', value: 'BCA · MCA (pursuing)' },
    ...(isSet(profile.location) ? [{ label: 'Location', value: profile.location }] : []),
  ];

  return (
    <Section id="about">
      <SectionHeading id="about" index={sectionIndex('about')} eyebrow="About" title="A developer who cares about the whole product" />

      <div className="grid items-start gap-8 md:grid-cols-[200px_minmax(0,1fr)] lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
        <Reveal className="mx-auto w-full max-w-[180px] md:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-violet-500/25 to-blue-500/25 blur-2xl"
            />
            {/* Gradient ring around a circular portrait */}
            <div className="relative rounded-full bg-gradient-to-br from-violet-400 via-indigo-400 to-sky-400 p-[3px]">
              <div className="aspect-square overflow-hidden rounded-full bg-ink-900">
                <Portrait />
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={80}>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <dl
              className={cn(
                'mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07]',
                facts.length === 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3',
              )}
            >
              {facts.map((fact) => (
                <div key={fact.label} className="bg-ink-900 px-4 py-3">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-100">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <li key={title}>
                <Reveal delay={180 + i * 60} className="h-full">
                  <div className="group flex h-full gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-violet-400/25 hover:bg-white/[0.035]">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/15">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{title}</h3>
                      <p className="mt-0.5 text-[13px] leading-snug text-slate-400">{text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
