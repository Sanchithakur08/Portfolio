import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'sm';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 ease-out disabled:pointer-events-none disabled:opacity-60';

const sizes: Record<Size, string> = {
  md: 'px-5 py-3 text-sm',
  sm: 'px-4 py-2 text-sm',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-[0_8px_30px_-10px_rgb(124_58_237/0.7)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_40px_-8px_rgb(99_102_241/0.7)]',
  secondary:
    'border border-white/10 bg-white/[0.04] text-slate-100 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/[0.07]',
  ghost: 'text-slate-300 hover:bg-white/5 hover:text-white',
};

interface StyleProps {
  variant?: Variant;
  size?: Size;
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & StyleProps) {
  return <a className={cn(base, sizes[size], variants[variant], className)} {...props} />;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & StyleProps) {
  return (
    <button type={type} className={cn(base, sizes[size], variants[variant], className)} {...props} />
  );
}
