import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/profile';
import { SocialLinks } from '../ui/SocialLinks';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <a
            href="#home"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
