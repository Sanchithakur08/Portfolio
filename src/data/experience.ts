export interface ExperienceItem {
  role: string;
  organization: string;
  location?: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  tech: string[];
  /** Template entries: shown with a hint in dev, hidden in production. */
  placeholder?: boolean;
}

/**
 * Newest first, taken from the resume. Describe client work in general terms —
 * no confidential code, client names or internal data.
 */
export const experience: ExperienceItem[] = [
  {
    role: 'Junior Software Developer',
    organization: 'The Outsource Pro',
    location: 'Bengaluru, Karnataka',
    period: 'Feb 2026 — Present',
    type: 'Full-time',
    summary:
      'Full-stack developer on real-time enterprise applications for international (Australian) clients — building features end to end across React front ends and Java / Spring Boot back ends, alongside automation and production support.',
    highlights: [
      'Built SmartHire, an AI-powered HR screening platform for the company, with React, TypeScript, Spring Boot, Python FastAPI and MySQL.',
      'Develop full-stack features — responsive React + TypeScript interfaces, Spring Boot REST APIs and relational database logic.',
      'Maintain and extend existing Java-based application modules and business workflows.',
      'Handle enterprise automation processes and monitor scheduled executions.',
      'Debug issues, analyse logs and coordinate directly with clients to resolve production problems.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'REST APIs', 'MySQL', 'Python FastAPI', 'Automation'],
  },
  {
    role: 'Software Developer Intern',
    organization: 'The Outsource Pro',
    location: 'Bengaluru, Karnataka',
    period: 'Nov 2025 — Feb 2026',
    type: 'Internship',
    summary: 'Front-end development on client-facing web applications.',
    highlights: [
      'Worked on front-end development using React.js and JavaScript.',
      'Built responsive UI components and handled basic state management.',
      'Developed web pages using HTML, CSS, Bootstrap and modern JavaScript (ES6).',
      'Integrated front-end screens with back-end services and tested API responses.',
    ],
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'REST APIs'],
  },
  {
    role: 'Full-Stack Developer',
    organization: 'Personal projects',
    period: 'Ongoing',
    type: 'Self-directed',
    summary:
      'Designing and building complete web applications end to end — from database schema and APIs to the user interface.',
    highlights: [
      'Built GlowMart, a beauty & skincare e-commerce app, with React, Tailwind CSS, Spring Boot and MySQL.',
      'Built AssetTrack with React, Node.js, Express, PostgreSQL and Prisma — deployed and in daily use.',
      'Started with a desktop Employee Management System in Java Swing and JDBC (full CRUD).',
      'Used Git and GitHub for version control across all projects.',
    ],
    tech: ['React', 'TypeScript', 'Spring Boot', 'Node.js', 'MySQL', 'PostgreSQL', 'Git'],
  },
];
