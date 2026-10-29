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
  { icon: BookOpen, title: 'Always learning', text: 'Pursuing an MCA while building real-world projects.' },
];

function Portrait() {
  if (isSet(profile.photo)) {
    return (
      <img
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        width={480}
        height={560}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    );
  }
  // Tasteful monogram fallback until a photo is added.
  return (
    <div className="relative grid h-full w-full place-items-center bg-gradient-to-br from-violet-600/25 via-ink-800 to-blue-600/25">
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      <span className="relative font-mono text-7xl font-semibold tracking-tight text-white/90">{profile.initials}</span>
      <DevHint className="absolute bottom-4 left-4 right-4 justify-center">Add photo → profile.ts “photo”</DevHint>
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

      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/20 to-blue-500/20 blur-2xl"
            />
            <div className="relative aspect-[6/7] overflow-hidden rounded-3xl border border-white/10">
              <Portrait />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={80}>
            <div className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <dl
              className={cn(
                'mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07]',
                facts.length === 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3',
              )}
            >
              {facts.map((fact) => (
                <div key={fact.label} className="bg-ink-900 px-4 py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-100">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <li key={title}>
                <Reveal delay={180 + i * 60} className="h-full">
                  <div className="group flex h-full gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-violet-400/25 hover:bg-white/[0.035]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/15">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{text}</p>
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
