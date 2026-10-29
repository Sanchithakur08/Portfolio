export interface EducationItem {
  degree: string;
  short: string;
  institution: string;
  period: string;
  status: 'In progress' | 'Completed';
  /** CGPA / percentage — leave '' to hide. */
  score: string;
  details: string;
}

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Lovely Professional University (LPU)',
    period: 'Pursuing',
    status: 'In progress',
    score: '',
    details: 'Specialisation in Artificial Intelligence & Machine Learning.',
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'BBK DAV College for Women',
    period: '2026',
    status: 'Completed',
    score: 'CGPA 8.00',
    details: 'Undergraduate foundation in programming, databases, web technologies and computer science fundamentals.',
  },
  {
    degree: 'Higher Secondary Education (12th)',
    short: 'XII',
    institution: 'BBK DAV College for Women',
    period: '2023',
    status: 'Completed',
    score: '82%',
    details: '',
  },
  {
    degree: 'Secondary Education (10th)',
    short: 'X',
    institution: 'Shri Ram Ashram Public School',
    period: '2021',
    status: 'Completed',
    score: '73%',
    details: '',
  },
];
