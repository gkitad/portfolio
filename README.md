# Anthony Jaimez — Portfolio

Personal site for Anthony Jaimez, IT Support Specialist building software with AI.

A dark, single-page portfolio: a hero in a browser-window frame, project case cards with live product screenshots, and an about section with experience and skills.

## Stack

- [Next.js](https://nextjs.org) (App Router), React, TypeScript
- CSS Modules
- Instrument Sans and Instrument Serif, self-hosted via Fontsource
- `next/image` for the product screenshots in `src/assets/work`
- Deployed on Vercel

## Editing content

All copy lives in [`src/content.ts`](src/content.ts): profile, projects, experience, education and skills. Change it there and the page updates. Project screenshots live in `src/assets/work`.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
