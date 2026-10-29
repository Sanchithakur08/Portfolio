import { Boxes, BrainCircuit, ShoppingBag, Users, type LucideIcon } from 'lucide-react';

export type Accent = 'violet' | 'blue' | 'cyan' | 'rose' | 'emerald';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  icon: LucideIcon;
  accent: Accent;
  /** e.g. '/images/projects/smarthire.webp' — leave '' to show a styled placeholder. */
  image: string;
  imageAlt: string;
  /** Public repository URL — leave '' if the repo is private (the button is hidden). */
  github: string;
  /** Live demo URL — leave '' if there is no public deployment. */
  live: string;
}

/**
 * ⚠️ VERIFY BEFORE PUBLISHING
 * Descriptions, features and tech stacks below are written from the project
 * summaries you provided. Edit every line so it matches exactly what you built —
 * remove anything that isn't accurate, and never include confidential code,
 * internal data or credentials.
 */
export const projects: Project[] = [
  {
    id: 'smarthire',
    title: 'SmartHire',
    tagline: 'AI screening system',
    description:
      'An AI-powered HR screening platform that automates the first round of recruitment — it runs AI-based candidate interviews, analyses resumes and generates evaluation scores, so hiring teams only meet the candidates worth meeting.',
    features: [
      'AI interviews that record voice answers and convert speech to text with Whisper',
      'Resume analysis that matches candidate skills against interview responses',
      'Automatic evaluation scores and an HR dashboard for shortlisting',
      'Spring Boot back end with Python FastAPI AI services and MySQL storage',
    ],
    tech: ['React', 'TypeScript', 'TanStack Query', 'Spring Boot', 'Hibernate', 'Python FastAPI', 'Whisper', 'MySQL'],
    icon: BrainCircuit,
    accent: 'violet',
    image: '/images/projects/smarthire.png',
    imageAlt: 'SmartHire landing page with the AI screening dashboard showing candidates, shortlist count and average score',
    github: '',
    live: '',
  },
  {
    id: 'glowmart',
    title: 'GlowMart',
    tagline: 'Full-stack beauty & skincare e-commerce',
    description:
      'A full-stack e-commerce web application for beauty and skincare products, with a modern responsive storefront built from reusable React components and a scalable Spring Boot back end.',
    features: [
      'Category-based product browsing',
      'User authentication',
      'REST API integration between React front end and Spring Boot back end',
      'Reusable components and a clean project structure',
    ],
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Spring Boot', 'Java', 'MySQL', 'REST APIs'],
    icon: ShoppingBag,
    accent: 'rose',
    image: '',
    imageAlt: 'GlowMart storefront showing cosmetic products',
    github: '',
    live: '',
  },
  {
    id: 'assettrack',
    title: 'AssetTrack',
    tagline: 'Asset & tool management system · live',
    description:
      'A web application that tracks company assets — laptops, monitors, furniture and office equipment — across office locations, from purchase to handover to return. Deployed on Render and in daily use by 20+ employees.',
    features: [
      'QR code sticker on every asset — scan with a phone to view its details',
      'Room audit that counts a full room in minutes, even without internet',
      'Multi-company support: each company sees only its own data',
      'Separate access levels for admins and employees',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    icon: Boxes,
    accent: 'blue',
    image: '/images/projects/assettrack.png',
    imageAlt: 'AssetTrack dashboard showing asset totals by status, items needing attention, and assets by category and location',
    github: '',
    live: '',
  },
  {
    id: 'employee-management',
    title: 'Employee Management System',
    tagline: 'Desktop CRUD app · my first Java project',
    description:
      'The project where my Java full-stack journey began: a desktop application for managing employee records, built with a Java Swing interface connected to a relational database through JDBC.',
    features: [
      'Add, view, update and delete employee records (full CRUD)',
      'Java Swing forms and tables for a desktop GUI',
      'Database connectivity and SQL queries through JDBC',
      'Taught me OOP, event handling and database fundamentals',
    ],
    tech: ['Java', 'Java Swing', 'JDBC', 'MySQL', 'SQL'],
    icon: Users,
    accent: 'emerald',
    image: '',
    imageAlt: 'Employee Management System desktop window',
    github: '',
    live: '',
  },
];
