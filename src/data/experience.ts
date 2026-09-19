export type CaseStudy = {
  id: string;
  name: string;
  subtitle: string;
  /** One-line headline outcome, surfaced prominently on the card. */
  outcome: string;
  highlights: string[];
  technologies: string[];
  /** Only set where a public artifact genuinely exists. */
  url?: string;
  urlLabel?: string;
};

export type Experience = {
  id: number;
  company: string;
  role: string;
  location: string;
  type: string;
  /** ISO date — tenure is computed from this, never hardcoded. */
  startDate: string;
  startLabel: string;
  endLabel: string;
  companyUrl: string;
  description: string;
  caseStudies: CaseStudy[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'loom',
    name: 'Loom',
    subtitle: 'AI Design-to-Code Platform',
    outcome: 'Sole author of a published npm CLI, shipped across 4 releases',
    highlights: [
      'Sole author of @gale-org/loom-cli, a published npm package that installs design-system components from a registry — owned the full release lifecycle across 4 releases, including a non-blocking background update checker running on a detached worker, at a 1:1 source-to-test file ratio.',
      'Primary contributor to the platform frontend (+39.7K lines): implemented Server-Sent Events end to end — proxy route, reusable hooks, live progress UI — plus multi-tenant RBAC and Okta OIDC SSO on NextAuth v5.',
      'Authored 7 of the 8 architecture decision records, including an SSE snapshot bridge that reconciles streamed updates against cached state without race conditions, and a deferred account-switching design that eliminated cross-tenant errors.',
      'Built the architecture proof-of-concept establishing the registry contract — file convention, build step, output schema — since adopted by the production design-system repositories.',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'NextAuth v5',
      'Okta OIDC',
      'Server-Sent Events',
      'npm',
      'Vitest',
    ],
  },
  {
    id: 'weave',
    name: 'Weave',
    subtitle: 'Enterprise Email Automation Platform',
    outcome:
      'Cut manual QA effort by ~80% and production cycles from days to hours',
    highlights: [
      'Primary contributor on a greenfield build: delivered a 5-step Figma-to-HTML email workflow with gated progression, a dual-mode editor with live preview, and Salesforce Marketing Cloud export.',
      'Led the migration from a Vite + React Router SPA to Next.js 15 post-MVP, introducing server-side routing, NextAuth authentication, and 50+ typed API route handlers.',
      'Built the Content Reference File system with live Google Sheets sync, reducing manual QA effort by roughly 80% and cutting production cycles from days to hours with zero major production incidents.',
    ],
    technologies: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Vite',
      'Zustand',
      'NextAuth',
      'Salesforce Marketing Cloud',
    ],
  },
  {
    id: 'navigator',
    name: 'Navigator',
    subtitle: 'Multi-Platform Advertising Campaign Management',
    outcome:
      'Delivered 96 features and 115 fixes across a two-generation platform revamp',
    highlights: [
      'Delivered 96 features and 115 fixes through a full platform revamp spanning two stack generations — 508 commits across 1,913 files (+70.5K lines) — the longest-running engagement of the four.',
      'Built 19+ Google advertising workflows (Display, Search, YouTube, DV360) plus Meta and TikTok integrations.',
      'Designed the budget management system with real-time allocation sliders and multi-currency support, and an infinite-scroll table for large datasets.',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Material-UI',
      'TanStack Query',
      'Redux',
    ],
  },
  {
    id: 'honeybaked-ham',
    name: 'HoneyBaked Ham',
    subtitle: 'Website Re-platform',
    outcome: 'Owned the entire global navigation on a 1,166-commit monorepo',
    highlights: [
      'Owned the complete global navigation system for a legacy Backbone.js to Next.js re-platform — accessible header nav bar with hover and click-lock states, rewards hovercard, category panel, and mobile drawer with slidable sub-categories — as one of about 12 contributors on a 1,166-commit monorepo.',
      'Replaced hardcoded CTAs with a dynamic adapter that preserves accessibility attributes.',
      'Published Storybook as a static site to Azure Blob Storage and authored ADRs on breakpoints and design-token guidelines.',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Contentful',
      'Azure',
      'Storybook',
      'Accessibility',
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Gale Partners',
    role: 'Frontend Engineer',
    location: 'Bangalore, India',
    type: 'Hybrid',
    startDate: '2022-04-01',
    startLabel: 'April 2022',
    endLabel: 'Present',
    companyUrl: 'https://galepartners.com',
    description:
      'Building production web platforms across marketing automation, digital advertising, and design tooling — owning features end to end, from architecture decision records through to release.',
    caseStudies,
  },
];
