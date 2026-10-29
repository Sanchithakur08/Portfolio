import { isDev } from '../lib/placeholder';

export interface Certificate {
  title: string;
  /** Issuing organisation, e.g. 'Coursera', 'Udemy', 'NPTEL'. Leave '' to hide. */
  issuer: string;
  /** e.g. 'Mar 2025'. Leave '' to hide. */
  date: string;
  /** Public verification link. Leave '' if none — the "Verify credential" link is hidden. */
  credentialUrl: string;
  /** Optional credential ID shown under the title. */
  credentialId?: string;
  skills: string[];
  /** Template entries: shown with a hint in dev, hidden in production. */
  placeholder?: boolean;
}

/**
 * TODO: fill in issuer, date and credentialUrl for each certificate.
 * ⚠️ VERIFY the skill tags match what each course actually covered.
 */
export const certificates: Certificate[] = [
  {
    title: 'Java Full Stack Development',
    issuer: '',
    date: '',
    credentialUrl: '',
    skills: ['Java', 'Spring Boot', 'SQL', 'Web Development'],
  },
  {
    title: 'Python',
    issuer: '',
    date: '',
    credentialUrl: '',
    skills: ['Python', 'Programming Fundamentals'],
  },
  {
    title: 'Advanced Excel',
    issuer: '',
    date: '',
    credentialUrl: '',
    skills: ['Microsoft Excel', 'Formulas', 'Data Analysis'],
  },
];

export const visibleCertificates = certificates.filter((c) => isDev || !c.placeholder);
export const hasCertificates = visibleCertificates.length > 0;
