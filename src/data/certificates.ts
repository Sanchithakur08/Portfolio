import { isDev } from '../lib/placeholder';

export interface Certificate {
  title: string;
  /** Issuing organisation. Leave '' to hide. */
  issuer: string;
  /** e.g. '2025'. Leave '' to hide. */
  date: string;
  /** One line on what the course covered. */
  description: string;
  /** Optional public verification link — the "Verify credential" link is hidden when ''. */
  credentialUrl: string;
  /** Optional credential ID shown under the title. */
  credentialId?: string;
  skills: string[];
  /** Template entries: shown with a hint in dev, hidden in production. */
  placeholder?: boolean;
}

export const certificates: Certificate[] = [
  {
    title: 'Java Full Stack Developer',
    issuer: 'MITS Academy',
    date: '2025',
    description: 'Core & Advanced Java back-end development along with front-end fundamentals.',
    credentialUrl: '',
    skills: ['Core Java', 'Advanced Java', 'Back-end', 'Front-end'],
  },
  {
    title: 'Python Programming — Basic',
    issuer: 'CACMS Institute',
    date: '2024',
    description: 'Fundamentals of Python including variables, data types, conditional statements, loops and functions.',
    credentialUrl: '',
    skills: ['Python', 'Programming Fundamentals'],
  },
  {
    title: 'Advanced Microsoft Excel',
    issuer: 'CACMS Institute',
    date: '2024',
    description: 'Excel functions, data analysis, PivotTables, VLOOKUP, charts and dashboard creation.',
    credentialUrl: '',
    skills: ['Excel', 'PivotTables', 'VLOOKUP', 'Dashboards'],
  },
];

export const visibleCertificates = certificates.filter((c) => isDev || !c.placeholder);
export const hasCertificates = visibleCertificates.length > 0;
