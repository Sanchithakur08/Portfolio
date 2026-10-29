import { ArrowRight, ChevronDown, Download, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { ButtonLink } from '../ui/Button';
import { SocialLinks } from '../ui/SocialLinks';
import { CodeCard } from './CodeCard';
import { HeroBackground } from './HeroBackground';

export function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      <HeroBackground />

      <div className="container-x relative grid items-center gap-14 py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="mb-6 inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5 text-xs font-medium text-emerald-200">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </p>

          <h1
            className="animate-fade-up text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            {profile.name}
            <span className="mt-3 block text-2xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
              <span className="text-gradient">{profile.role}</span>
              <span className="whitespace-nowrap text-slate-500"> · Full-Stack</span>
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-slate-400 sm:text-lg"
            style={{ animationDelay: '160ms' }}
          >
            {profile.intro}
          </p>

          <div className="mt-9 flex animate-fade-up flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
            <ButtonLink href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={profile.resume.url} download={profile.resume.fileName} variant="secondary">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </ButtonLink>
          </div>

          <SocialLinks className="mt-10 animate-fade-up [animation-delay:320ms]" />
        </div>

        <div className="hidden animate-fade-up lg:block" style={{ animationDelay: '200ms' }}>
          <CodeCard />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 p-2 text-slate-500 transition hover:border-violet-400/40 hover:text-white sm:block"
      >
        <ChevronDown className="h-4 w-4 motion-safe:animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
