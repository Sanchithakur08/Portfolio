export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  tech: string[];
  /** Template entries: shown with a hint in dev, hidden in production. */
  placeholder?: boolean;
}

/**
 * List entries newest first. Only include roles you actually held, and describe
 * your work in general terms — no confidential code, client names or internal data.
 */
export const experience: ExperienceItem[] = [
  {
    // TODO: replace with your real role, or delete this entry if it doesn't apply.
    placeholder: true,
    role: 'Your Job Title (e.g. Software Engineer Intern)',
    organization: 'Your Company Name',
    period: 'Mon YYYY — Present',
    type: 'Full-time / Internship',
    summary: 'One sentence describing your team and responsibilities.',
    highlights: [
      'What you built or improved, in your own words.',
      'Technologies and practices you used day to day.',
    ],
    tech: ['Java', 'Spring Boot'],
  },
  {
    role: 'Full-Stack Developer',
    organization: 'Personal projects',
    period: 'Ongoing',
    type: 'Self-directed',
    summary:
      'Designing and building complete web applications end to end — from database schema and APIs to the user interface.',
    highlights: [
      'Built SmartHire, GlowMart, AssetTrack and Chatverse across React, Spring Boot and Node.js stacks.',
      'Started with a desktop Employee Management System in Java Swing and JDBC (full CRUD).',
      'Designed REST APIs and relational schemas with PostgreSQL and MySQL.',
      'Wrote automated browser tests with Selenium and managed builds with Maven.',
      'Used Git and GitHub for version control with focused, reviewable commits.',
    ],
    tech: ['React', 'TypeScript', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Git'],
  },
];
