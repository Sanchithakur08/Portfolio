import { Mail } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { profile } from '../../data/profile';
import { isSet } from '../../lib/placeholder';
import { cn } from '../../lib/cn';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

interface LinkDef {
  label: string;
  href: string;
  value: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  external: boolean;
}

/** Social links that have been configured in profile.ts (placeholders are skipped). */
export function getSocialLinks(): LinkDef[] {
  const links: LinkDef[] = [
    { label: 'GitHub', href: profile.social.github, value: profile.social.github, icon: GitHubIcon, external: true },
    { label: 'LinkedIn', href: profile.social.linkedin, value: profile.social.linkedin, icon: LinkedInIcon, external: true },
    { label: 'Email', href: `mailto:${profile.email}`, value: profile.email, icon: Mail, external: false },
  ];
  return links.filter((l) => isSet(l.value));
}

export function SocialLinks({ className }: { className?: string }) {
  const links = getSocialLinks();
  if (links.length === 0) return null;

  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {links.map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
