export type Education = {
  degree: string;
  institution: string;
  /** Free-form period exactly as stated on the resume — avoids inventing dates. */
  period: string;
  /** Optional — the certification has no GPA. */
  honours?: string;
};

export const education: Education[] = [
  {
    degree: 'Full-Stack Web Development Certification',
    institution: 'Masai School',
    period: 'Sep 2021 – Apr 2022',
  },
  {
    degree: 'B.Tech, Mechanical Engineering',
    institution: 'SRKR Engineering College',
    period: '2018',
    honours: 'CGPA 8.37/10 — First Class with Distinction',
  },
];
