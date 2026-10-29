import type { ReactNode } from 'react';
import { isDev } from '../../lib/placeholder';
import { cn } from '../../lib/cn';

/**
 * A dashed amber note marking content you still need to fill in.
 * Rendered only during `npm run dev` — never in the production build.
 */
export function DevHint({ children, className }: { children: ReactNode; className?: string }) {
  if (!isDev) return null;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border border-dashed border-amber-400/50 bg-amber-400/[0.06] px-2 py-1 font-mono text-[11px] leading-snug text-amber-200/90',
        className,
      )}
    >
      <span aria-hidden="true">✎</span>
      {children}
    </span>
  );
}
