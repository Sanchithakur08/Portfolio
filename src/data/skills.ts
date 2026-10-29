import { Database, LayoutTemplate, Server, Wrench, type LucideIcon } from 'lucide-react';

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Responsive, accessible interfaces with a typed, component-driven approach.',
    icon: LayoutTemplate,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    description: 'Server-side applications and clean, well-structured APIs.',
    icon: Server,
    skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    description: 'Relational data modelling and SQL for reliable persistence.',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Tools & Testing',
    description: 'Version control, builds and automated browser testing.',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Maven', 'Selenium'],
  },
];
