import { caseStudies, type CaseStudy } from './experience';

export type EarlierProject = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  /** Both optional — some of these never had a live deployment. */
  liveUrl?: string;
  githubUrl?: string;
};

/** Featured work re-uses the case studies defined alongside the role. */
export const featuredWork: CaseStudy[] = caseStudies;

export const earlierProjects: EarlierProject[] = [
  {
    id: 1,
    title: 'ZaraHome Clone',
    description:
      'Clone of the ZaraHome store for home textiles and decor, with shopping and cart functionality across both backend and frontend.',
    image: '/projects/zara_home.jpg',
    technologies: [
      'MongoDB',
      'Express.js',
      'Node.js',
      'JavaScript',
      'CSS',
      'HTML',
    ],
    githubUrl: 'https://github.com/nag-murali/ZaraHome-Backened',
  },
  {
    id: 2,
    title: 'Quora Clone',
    description:
      'Platform to ask questions and get answers, built with React and Material UI.',
    image: '/projects/quora.jpg',
    technologies: ['React', 'CSS', 'MongoDB', 'Express', 'Material UI'],
    githubUrl: 'https://github.com/nag-murali/quora-clone',
  },
  {
    id: 3,
    title: 'Weather App',
    description:
      'Current and weekly weather forecasts and maps for any city, using real-time weather data.',
    image: '/projects/weather_app.jpg',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Weather API'],
    liveUrl: 'https://weather123app.netlify.app/',
    githubUrl: 'https://github.com/nag-murali/weather_app',
  },
  {
    id: 4,
    title: 'Croma Clone',
    description:
      'Clone of the Croma online store for gadgets and home electronics, with a responsive layout.',
    image: '/projects/croma.jpg',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    liveUrl: 'https://clone-croma.netlify.app/',
    githubUrl: 'https://github.com/nag-murali/Clone-Croma',
  },
];
