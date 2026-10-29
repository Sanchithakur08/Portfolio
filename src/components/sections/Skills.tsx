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

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map(({ title, description, icon: Icon, skills }, i) => (
          <Reveal key={title} delay={i * 80} className="h-full">
            <article className="group h-full rounded-2xl border border-white/[0.07] bg-ink-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:shadow-[0_20px_50px_-20px_rgb(124_58_237/0.35)] sm:p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-200 transition group-hover:border-violet-400/30">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{description}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${title} skills`}>
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm font-medium text-slate-200 transition hover:border-blue-400/30 hover:text-white"
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
