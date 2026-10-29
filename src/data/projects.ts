import { Boxes, BrainCircuit, MessagesSquare, ShoppingBag, Users, type LucideIcon } from 'lucide-react';

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
    tagline: 'AI-powered recruitment platform',
    description:
      'A recruitment platform that applies AI to streamline hiring — bringing job postings, applications and candidate screening into one workflow for recruiters and applicants.',
    features: [
      'AI-assisted matching of candidates to job requirements',
      'Job posting and application management',
      'Separate experiences for recruiters and candidates',
      'REST API back end with relational data storage',
    ],
    tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
    icon: BrainCircuit,
    accent: 'violet',
    image: '',
    imageAlt: 'SmartHire recruiter dashboard',
    github: '',
    live: '',
  },
  {
    id: 'glowmart',
    title: 'GlowMart',
    tagline: 'Beauty & cosmetics e-commerce store',
    description:
      'A full-stack online store for beauty and cosmetic products, with a Java Spring Boot back end serving REST APIs to a responsive React and Tailwind CSS storefront.',
    features: [
      'Browsable cosmetics catalogue organised by category',
      'Product detail pages and shopping cart',
      'Spring Boot REST APIs for products, users and orders',
      'Responsive storefront styled with Tailwind CSS',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'Tailwind CSS', 'MySQL', 'REST APIs'],
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
    tagline: 'Asset management platform',
    description:
      'A platform for keeping track of organisational assets — what exists, who it is assigned to and what state it is in — replacing scattered spreadsheets with a single source of truth.',
    features: [
      'Central asset inventory with search and filtering',
      'Assign assets to people and track their status',
      'Role-based access for administrators and users',
      'Layered Spring Boot architecture backed by SQL',
    ],
    tech: ['React', 'Java', 'Spring Boot', 'MySQL', 'Maven'],
    icon: Boxes,
    accent: 'blue',
    image: '',
    imageAlt: 'AssetTrack asset inventory view',
    github: '',
    live: '',
  },
  {
    id: 'chatverse',
    title: 'Chatverse',
    tagline: 'Real-time messaging application',
    description:
      'A real-time chat application where messages are delivered instantly between users, with a clean, responsive interface that works across desktop and mobile.',
    features: [
      'Instant message delivery over persistent connections',
      'One-to-one conversations with message history',
      'User authentication and profiles',
      'Responsive, mobile-friendly chat interface',
    ],
    tech: ['React', 'JavaScript', 'Node.js', 'Express.js', 'WebSockets'],
    icon: MessagesSquare,
    accent: 'cyan',
    image: '',
    imageAlt: 'Chatverse conversation screen',
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
