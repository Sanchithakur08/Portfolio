import { sectionIndex } from '../../data/navigation';
import { skillGroups } from '../../data/skills';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';

export function Skills() {
  return (
    <Section id="skills" className="bg-gradient-to-b from-transparent via-ink-900/40 to-transparent">
      <SectionHeading
        id="skills"
        index={sectionIndex('skills')}
        eyebrow="Skills"
        title="Technologies I work with"
        description="A practical toolkit for building complete applications — from the interface down to the database."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, description, icon: Icon, skills }, i) => (
          <Reveal key={title} delay={i * 80} className="h-full">
            <article className="group h-full rounded-2xl border border-white/[0.07] bg-ink-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:shadow-[0_20px_50px_-20px_rgb(124_58_237/0.35)]">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-200 transition group-hover:border-violet-400/30">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-0.5 text-[13px] leading-snug text-slate-400">{description}</p>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${title} skills`}>
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-200 transition hover:border-blue-400/30 hover:text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
