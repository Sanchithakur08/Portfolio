import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { navItems, sectionIds } from '../../data/navigation';
import { profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrolled } from '../../hooks/useScrolled';
import { cn } from '../../lib/cn';
import { ButtonLink } from '../ui/Button';

export function Navbar() {
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape or when resizing up to desktop, and lock page scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300',
        solid ? 'border-white/[0.06] bg-ink-950/80 backdrop-blur-xl' : 'border-transparent',
      )}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between gap-6">
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-blue-500/20 font-mono text-sm font-semibold text-white transition group-hover:border-violet-300/60">
            {profile.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  active === item.id ? 'text-white' : 'text-slate-400 hover:text-white',
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-violet-400 to-blue-400 transition-opacity duration-300',
                    active === item.id ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <ButtonLink
          href={profile.resume.url}
          download={profile.resume.fileName}
          variant="secondary"
          size="sm"
          className="hidden md:inline-flex"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Resume
        </ButtonLink>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-200 transition hover:bg-white/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] border-t border-white/[0.06] md:hidden">
          <ul className="container-x flex flex-col gap-1 py-6">
            {navItems.map((item, i) => (
              <li key={item.id} className="animate-fade-up" style={{ animationDelay: `${i * 40}ms` }}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={cn(
                    'flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors',
                    active === item.id ? 'bg-white/[0.05] text-white' : 'text-slate-300 hover:bg-white/[0.03]',
                  )}
                >
                  {item.label}
                  <span className="font-mono text-xs text-slate-600">0{i + 1}</span>
                </a>
              </li>
            ))}
            <li className="mt-4 px-1">
              <ButtonLink href={profile.resume.url} download={profile.resume.fileName} className="w-full">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </ButtonLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
