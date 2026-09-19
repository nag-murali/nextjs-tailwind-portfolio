# Portfolio — Nagendra Muralidhar Pulla

Personal portfolio site for a Frontend Engineer. Single-page scroll (Hero → About →
Experience → Projects → Contact) with a working contact form.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — CSS-first config, no `tailwind.config.ts`; tokens live in
  `src/app/globals.css`
- **shadcn/ui** on Radix primitives · **Motion** for animation · **next-themes** for dark mode
- **pnpm**, ESLint 9 (flat config), Prettier, Husky + lint-staged

## Getting started

```bash
pnpm install
cp .env.example .env.local   # then fill in the values below
pnpm dev
```

Open http://localhost:3000.

## Environment variables

| Variable                 | Required             | Purpose                                                                                                           |
| ------------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_RESUME_URL` | No                   | Target of the hero Resume button. Falls back to `public/resume.pdf`.                                              |
| `FORMCARRY_ENDPOINT`     | For the contact form | [Formcarry](https://formcarry.com) endpoint that `POST /api/contact` forwards to. The route returns 500 if unset. |

## Content

All site content is data, not markup — edit `src/data/` rather than the components:

| File                     | Holds                                 |
| ------------------------ | ------------------------------------- |
| `src/data/profile.ts`    | Name, title, tagline, bio, resume URL |
| `src/data/experience.ts` | Role and the project case studies     |
| `src/data/projects.ts`   | Featured work and earlier projects    |
| `src/data/skills.ts`     | Skill groups                          |
| `src/data/education.ts`  | Education                             |
| `src/data/social.ts`     | Email, phone, GitHub, LinkedIn        |

Tenure is computed from `startDate` via `formatTenure()` in `src/lib/utils.ts`, so it never
needs updating by hand.

The canonical source for this content is the LaTeX résumé in the sibling `latex-resume`
repo — keep the two in sync.

## Scripts

```bash
pnpm dev            # dev server
pnpm build          # production build
pnpm lint           # eslint
pnpm format         # prettier --write
pnpm format:check   # prettier --check
```

## Deployment

Deployed on Vercel via git integration — zero config, no `vercel.json`. Set both
environment variables in the Vercel project settings.
