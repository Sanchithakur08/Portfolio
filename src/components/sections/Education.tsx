import { sectionIndex } from '../../data/navigation';
import { GraduationCap } from 'lucide-react';
import { education } from '../../data/education';
import { cn } from '../../lib/cn';
import { isSet } from '../../lib/placeholder';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';

export function Education() {
  return (
    <Section id="education">
      <SectionHeading id="education" index={sectionIndex('education')} eyebrow="Education" title="Academic foundation" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {education.map((item, i) => {
          const inProgress = item.status === 'In progress';
          return (
            <Reveal key={item.short} delay={i * 80} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/25">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -top-6 font-mono text-6xl font-bold text-white/[0.03] transition group-hover:text-violet-400/[0.06]"
                >
                  {item.short}
                </span>
                <div className="flex items-center justify-between gap-4">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-200">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span
                    className={cn(
                      'rounded-full border px-2.5 py-1 text-xs font-medium',
                      inProgress
                        ? 'border-blue-400/30 bg-blue-400/10 text-blue-200'
                        : 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200',
                    )}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-4 text-[15px] font-semibold leading-snug text-white">
                  {item.degree} <span className="text-slate-500">({item.short})</span>
                </h3>
                {(isSet(item.institution) || isSet(item.period)) && (
                  <p className="mt-1 text-sm text-violet-300/90">
                    {[item.institution, item.period].filter(isSet).join(' · ')}
                  </p>
                )}
                {isSet(item.score) && (
                  <p className="mt-3 inline-flex rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs font-medium text-slate-200">
                    {item.score}
                  </p>
                )}
                {item.details && <p className="mt-3 text-[13px] leading-snug text-slate-400">{item.details}</p>}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
