export type Profile = {
  name: string;
  shortName: string;
  title: string;
  headingTitle: string;
  location: string;
  availability: string;
  tagline: string;
  bio: string[];
  aboutSubtitle: string;
  resumeUrl: string;
  photo: { hero: string; about: string };
};

export const profile: Profile = {
  name: 'Nagendra Muralidhar Pulla',
  shortName: 'Nagendra Pulla',
  title: 'Frontend Engineer',
  headingTitle: 'Frontend Engineer & Problem Solver',
  location: 'Bangalore, India',
  availability: 'Available for new opportunities',
  tagline:
    'I build production web platforms — marketing automation, digital advertising, and design tooling — with React and Next.js. I like owning features end to end and writing down the decisions behind them.',
  bio: [
    'Frontend Engineer building production web platforms across marketing automation, digital advertising, and design tooling. I have been a primary contributor on several products, including a published design-system CLI and an enterprise email automation platform.',
    'I care about architecture and documented decision-making — the reasoning behind a choice usually outlives the code. Most of my work is React, Next.js and TypeScript, with a lot of time spent on accessibility, state management, and the seams where a frontend meets its APIs.',
  ],
  aboutSubtitle:
    'Frontend engineer with a bias for clean architecture and decisions worth writing down',
  // Falls back to the PDF committed in public/ so the button works in every environment.
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || '/resume.pdf',
  photo: { hero: '/np_elegant.jpg', about: '/profile-pic.jpg' },
};
