export interface EducationItem {
  degree: string;
  short: string;
  institution: string;
  period: string;
  status: 'In progress' | 'Completed';
  details: string;
}

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    // TODO: replace with your university and years
    institution: 'Your University Name',
    period: 'YYYY — Present',
    status: 'In progress',
    details:
      'Postgraduate study in computer applications, deepening software engineering, data structures and application development.',
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    // TODO: replace with your college and years
    institution: 'Your College Name',
    period: 'YYYY — YYYY',
    status: 'Completed',
    details:
      'Undergraduate foundation in programming, databases, web technologies and computer science fundamentals.',
  },
];
