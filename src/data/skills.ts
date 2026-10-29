import { BrainCircuit, Code2, Database, LayoutTemplate, Server, Wrench, type LucideIcon } from 'lucide-react';

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    description: 'The languages I write day to day, from back-end services to scripts.',
    icon: Code2,
    skills: ['Java (Core, Servlets, JSP)', 'JavaScript', 'TypeScript', 'Python (basics)'],
  },
  {
    title: 'Frontend',
    description: 'Responsive, accessible interfaces with a typed, component-driven approach.',
    icon: LayoutTemplate,
    skills: ['React.js', 'TypeScript', 'TanStack Query', 'React Router', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    description: 'Server-side applications and clean, well-structured APIs.',
    icon: Server,
    skills: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'Spring Mail', 'Node.js', 'Express.js', 'REST APIs', 'JDBC'],
  },
  {
    title: 'Databases',
    description: 'Relational data modelling and SQL for reliable persistence.',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'Prisma', 'SQL'],
  },
  {
    title: 'AI / ML Tooling',
    description: 'Python services that bring speech, text and document AI into applications.',
    icon: BrainCircuit,
    skills: ['Python FastAPI', 'Whisper', 'Sentence Transformers', 'PDFPlumber', 'Uvicorn'],
  },
  {
    title: 'Tools & Testing',
    description: 'Version control, editors, builds and automated browser testing.',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Selenium', 'Maven'],
  },
];
