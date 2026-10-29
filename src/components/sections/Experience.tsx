import { sectionIndex } from '../../data/navigation';
import { Briefcase } from 'lucide-react';
import { experience } from '../../data/experience';
import { isDev } from '../../lib/placeholder';
import { cn } from '../../lib/cn';
import { DevHint } from '../ui/DevHint';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';
import { Tag } from '../ui/Tag';

export function Experience() {
  // Template entries are visible while developing and dropped from production builds.
  const items = experience.filter((item) => isDev || !item.placeholder);

  return (
    <Section id="experience" className="bg-gradient-to-b from-transparent via-ink-900/40 to-transparent">
      <SectionHeading
        id="experience"
        index={sectionIndex('experience')}
        eyebrow="Experience"
        title="Where I've been building"
        description="Hands-on engineering work, from designing data models and APIs to shipping polished user interfaces."
      />

      <ol className="relative ml-3 border-l border-white/[0.08] sm:ml-4">
        {items.map((item, i) => (
          <li key={`${item.role}-${item.organization}`} className="relative pb-6 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden="true"
              className="absolute -left-[13px] top-1 grid h-[26px] w-[26px] place-items-center rounded-full border border-violet-400/40 bg-ink-950 text-violet-300 shadow-[0_0_20px_-2px_rgb(139_92_246/0.6)]"
            >
              <Briefcase className="h-3 w-3" />
            </span>
            <Reveal delay={i * 80}>
              <article
                className={cn(
                  'rounded-2xl border border-white/[0.07] bg-ink-900/60 p-5 transition hover:border-violet-400/25 sm:p-6',
                  item.placeholder && 'border-dashed border-amber-400/30',
                )}
              >
                {item.placeholder && <DevHint className="mb-4">Template — edit or delete in experience.ts</DevHint>}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-violet-300/90">
                      {item.organization}
                      {item.location && <span className="font-normal text-slate-500"> · {item.location}</span>}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 font-mono text-xs text-slate-500 sm:flex-col sm:items-end sm:gap-1">
                    <span>{item.period}</span>
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-slate-400">{item.type}</span>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[13px] leading-snug text-slate-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {item.tech.map((t) => (
                    <li key={t}>
                      <Tag className="px-2.5 py-0.5 text-[11px]">{t}</Tag>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
