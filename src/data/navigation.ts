import { hasCertificates } from './certificates';

const allNavItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

/** Sections shown in the nav. Certificates appear only once at least one is filled in. */
export const navItems = allNavItems.filter((item) => item.id !== 'certificates' || hasCertificates);

// 'home' is tracked too so no link is highlighted while the hero is in view.
export const sectionIds = ['home', ...navItems.map((item) => item.id)];

/** Two-digit section number ("01", "02", …) based on the visible nav order. */
export function sectionIndex(id: string): string {
  return String(navItems.findIndex((item) => item.id === id) + 1).padStart(2, '0');
}
