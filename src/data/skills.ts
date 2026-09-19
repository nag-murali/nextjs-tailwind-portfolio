export type SkillCategory = {
  category: string;
  description: string;
  skills: string[];
  /** Maps to --chart-1..4, which are defined for both light and dark themes. */
  accent: string;
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages & Styling',
    description: 'Type-safe application code and the systems that style it',
    skills: [
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Styled-Components',
      'Emotion',
      'shadcn/ui',
      'Radix UI',
      'Material-UI',
      'Ant Design',
    ],
    accent: 'bg-chart-1',
  },
  {
    category: 'Frameworks & State',
    description: 'Rendering, routing, data fetching and client state',
    skills: [
      'React 19',
      'Next.js 16',
      'Zustand',
      'Redux Toolkit',
      'TanStack Query/Table',
      'React Hook Form',
      'Zod',
      'NextAuth',
      'Storybook',
    ],
    accent: 'bg-chart-2',
  },
  {
    category: 'Architecture & Testing',
    description: 'How the frontend meets its APIs, and how it stays correct',
    skills: [
      'Backend-for-Frontend',
      'REST',
      'Server-Sent Events',
      'OAuth/OIDC (Okta)',
      'Multi-tenant RBAC',
      'Accessibility (a11y)',
      'Vitest',
      'Jest',
      'React Testing Library',
      'Playwright',
    ],
    accent: 'bg-chart-3',
  },
  {
    category: 'Build & Delivery',
    description: 'Bundling, CI, content and observability',
    skills: [
      'Vite',
      'Turbopack',
      'Webpack',
      'pnpm',
      'Docker',
      'Jenkins',
      'GitHub Actions',
      'Contentful',
      'Azure',
      'Sentry',
      'SonarQube',
      'ESLint',
      'Prettier',
      'Husky',
    ],
    accent: 'bg-chart-4',
  },
];
