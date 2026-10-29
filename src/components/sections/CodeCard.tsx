import type { ReactNode } from 'react';
import { profile } from '../../data/profile';

const K = ({ children }: { children: ReactNode }) => <span className="text-violet-300">{children}</span>;
const S = ({ children }: { children: ReactNode }) => <span className="text-emerald-300/90">{children}</span>;
const P = ({ children }: { children: ReactNode }) => <span className="text-sky-300">{children}</span>;
const C = ({ children }: { children: ReactNode }) => <span className="text-slate-500">{children}</span>;

const list = (items: string[]) =>
  items.map((item, i) => (
    <span key={item}>
      <S>'{item}'</S>
      {i < items.length - 1 && ', '}
    </span>
  ));

/** Editor-style card summarising the profile as a TypeScript object. Purely decorative. */
export function CodeCard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/40 via-transparent to-blue-500/40 opacity-60 blur-sm"
      />
      <figure className="surface relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
          <figcaption className="ml-3 font-mono text-xs text-slate-500">engineer.ts</figcaption>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-slate-300">
          <code>
            <C>// Hello, recruiter 👋</C>
            {'\n'}
            <K>const</K> <P>engineer</P> = {'{'}
            {'\n'}
            {'  '}name: <S>'{profile.name}'</S>,{'\n'}
            {'  '}role: <S>'{profile.role}'</S>,{'\n'}
            {'  '}frontend: [{list(['React', 'TypeScript', 'Tailwind'])}],{'\n'}
            {'  '}backend: [{list(['Java', 'Spring Boot', 'Node.js'])}],{'\n'}
            {'  '}data: [{list(['PostgreSQL', 'MySQL'])}],{'\n'}
            {'  '}education: <S>'BCA → MCA (in progress)'</S>,{'\n'}
            {'  '}openToWork: <K>true</K>,{'\n'}
            {'}'};
            {'\n'}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-violet-300/80" />
          </code>
        </pre>
      </figure>
    </div>
  );
}
