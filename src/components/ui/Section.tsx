import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('relative py-24 sm:py-32', className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}

export function SectionHeading({ id, index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 max-w-2xl sm:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-violet-300/90">
        <span className="text-slate-500">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-violet-400/70 to-transparent" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>}
    </Reveal>
  );
}
