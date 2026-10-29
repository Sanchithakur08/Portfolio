import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300',
        className,
      )}
    >
      {children}
    </span>
  );
}
