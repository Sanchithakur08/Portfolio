import type { MouseEvent } from 'react';
import { ArrowUpRight, CircleCheck } from 'lucide-react';
import type { Accent, Project } from '../../data/projects';
import { cn } from '../../lib/cn';
import { isSet } from '../../lib/placeholder';
import { GitHubIcon } from '../ui/BrandIcons';
import { ButtonLink } from '../ui/Button';
import { DevHint } from '../ui/DevHint';
import { Reveal } from '../ui/Reveal';
import { Tag } from '../ui/Tag';

const accents: Record<Accent, { glow: string; icon: string; text: string }> = {
  violet: { glow: 'from-violet-600/30 via-violet-500/5', icon: 'text-violet-200 bg-violet-500/15', text: 'text-violet-300' },
  blue: { glow: 'from-blue-600/30 via-blue-500/5', icon: 'text-blue-200 bg-blue-500/15', text: 'text-blue-300' },
  cyan: { glow: 'from-cyan-500/25 via-sky-500/5', icon: 'text-cyan-200 bg-cyan-500/15', text: 'text-cyan-300' },
  rose: { glow: 'from-pink-500/25 via-rose-500/5', icon: 'text-pink-200 bg-pink-500/15', text: 'text-pink-300' },
  emerald: { glow: 'from-emerald-500/25 via-teal-500/5', icon: 'text-emerald-200 bg-emerald-500/15', text: 'text-emerald-300' },
};

function trackSpotlight(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
}

function ProjectMedia({ project }: { project: Project }) {
  const accent = accents[project.accent];
  const Icon = project.icon;

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-850">
      {isSet(project.image) ? (
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        // Styled browser-window mock shown until a screenshot is added.
        <div aria-hidden="true" className="absolute inset-0">
          <div className={cn('absolute inset-0 bg-gradient-to-br to-transparent', accent.glow)} />
          <div className="bg-grid absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="absolute inset-x-[8%] top-[12%] bottom-0 overflow-hidden rounded-t-xl border border-b-0 border-white/10 bg-ink-900/90 shadow-2xl transition duration-700 ease-out group-hover:-translate-y-1.5">
            <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2.5">
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="ml-3 h-3.5 w-1/3 rounded bg-white/[0.06]" />
            </div>
            <div className="grid grid-cols-[1fr_3fr] gap-3 p-3 sm:gap-4 sm:p-4">
              <div className="space-y-2">
                {[0, 1, 2, 3].map((n) => (
                  <div key={n} className="h-2.5 rounded bg-white/[0.06]" />
                ))}
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={cn('grid h-9 w-9 place-items-center rounded-lg', accent.icon)}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-white/90">{project.title}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((n) => (
                    <div key={n} className="h-10 rounded-lg border border-white/[0.05] bg-white/[0.03] sm:h-14" />
                  ))}
                </div>
                <div className="h-2.5 w-4/5 rounded bg-white/[0.06]" />
                <div className="h-2.5 w-3/5 rounded bg-white/[0.05]" />
              </div>
            </div>
          </div>
        </div>
      )}
      {!isSet(project.image) && (
        <DevHint className="absolute bottom-3 left-3">Add screenshot → /images/projects/{project.id}.webp</DevHint>
      )}
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = accents[project.accent];
  const reversed = index % 2 === 1;
  const hasGithub = isSet(project.github);
  const hasLive = isSet(project.live);

  return (
    <Reveal>
      <article
        onMouseMove={trackSpotlight}
        aria-labelledby={`project-${project.id}`}
        className="spotlight group grid items-center gap-8 rounded-3xl border border-white/[0.07] bg-ink-900/50 p-4 transition-colors duration-300 hover:border-white/[0.12] sm:p-6 lg:grid-cols-12 lg:gap-10 lg:p-8"
      >
        <div className={cn('lg:col-span-7', reversed && 'lg:order-last')}>
          <ProjectMedia project={project} />
        </div>

        <div className="px-1 pb-2 sm:px-0 lg:col-span-5 lg:pb-0">
          <p className={cn('font-mono text-xs uppercase tracking-[0.18em]', accent.text)}>
            {String(index + 1).padStart(2, '0')} · {project.tagline}
          </p>
          <h3 id={`project-${project.id}`} className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-slate-400">{project.description}</p>

          <ul className="mt-6 space-y-2.5">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <CircleCheck className={cn('mt-0.5 h-4 w-4 shrink-0', accent.text)} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tech.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>

          {(hasGithub || hasLive) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {hasLive && (
                <ButtonLink href={project.live} target="_blank" rel="noopener noreferrer" size="sm">
                  Live demo
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </ButtonLink>
              )}
              {hasGithub && (
                <ButtonLink href={project.github} target="_blank" rel="noopener noreferrer" size="sm" variant="secondary">
                  <GitHubIcon className="h-4 w-4" />
                  Source code
                  <span className="sr-only">(opens in a new tab)</span>
                </ButtonLink>
              )}
            </div>
          )}
          {!hasGithub && !hasLive && (
            <DevHint className="mt-6">Add github / live URLs in projects.ts (only if public)</DevHint>
          )}
        </div>
      </article>
    </Reveal>
  );
}
