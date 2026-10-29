import { ArrowUpRight, Award } from 'lucide-react';
import { visibleCertificates } from '../../data/certificates';
import { sectionIndex } from '../../data/navigation';
import { cn } from '../../lib/cn';
import { isSet } from '../../lib/placeholder';
import { DevHint } from '../ui/DevHint';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';
import { Tag } from '../ui/Tag';

export function Certificates() {
  if (visibleCertificates.length === 0) return null;

  return (
    <Section id="certificates" className="bg-gradient-to-b from-transparent via-ink-900/40 to-transparent">
      <SectionHeading
        id="certificates"
        index={sectionIndex('certificates')}
        eyebrow="Certificates"
        title="Certifications & courses"
        description="Structured learning that backs up my hands-on project work."
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCertificates.map((cert, i) => {
          const verifiable = isSet(cert.credentialUrl);
          return (
            <li key={`${cert.title}-${i}`}>
              <Reveal delay={i * 70} className="h-full">
                <article
                  className={cn(
                    'group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-ink-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:shadow-[0_20px_50px_-20px_rgb(124_58_237/0.35)]',
                    cert.placeholder && 'border-dashed border-amber-400/30',
                  )}
                >
                  {cert.placeholder && <DevHint className="mb-4 self-start">Template — edit in certificates.ts</DevHint>}
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-200 transition group-hover:border-violet-400/30">
                      <Award className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {isSet(cert.date) && <span className="font-mono text-xs text-slate-500">{cert.date}</span>}
                  </div>

                  <h3 className="mt-5 font-semibold leading-snug text-white">{cert.title}</h3>
                  {isSet(cert.issuer) && <p className="mt-1 text-sm text-violet-300/90">{cert.issuer}</p>}
                  {(!isSet(cert.issuer) || !isSet(cert.date) || !verifiable) && (
                    <DevHint className="mt-2 self-start">Add issuer, date & verify link in certificates.ts</DevHint>
                  )}
                  {cert.credentialId && (
                    <p className="mt-1 font-mono text-[11px] text-slate-500">ID: {cert.credentialId}</p>
                  )}

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills covered">
                    {cert.skills.map((s) => (
                      <li key={s}>
                        <Tag>{s}</Tag>
                      </li>
                    ))}
                  </ul>

                  {verifiable && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-slate-200 transition hover:text-white"
                    >
                      Verify credential
                      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  )}
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
