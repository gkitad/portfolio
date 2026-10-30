# Anthony Jaimez, Portfolio

My personal site: [www.anthonyjaimez.com](https://www.anthonyjaimez.com). I work in IT support and build AI tools that troubleshoot the way I do.

The page is styled like a filled-in IT change request: each section is a copy of a carbonless form set (white, canary, pink, goldenrod), printed in one blue. Every project links to a live demo and its source. Agent Ops Lab has its own page at `/agent-ops-lab`.

## Stack

- [Next.js](https://nextjs.org) (App Router), React, TypeScript
- CSS Modules
- Archivo, self-hosted via Fontsource
- `next/image` for the project screenshots in `src/assets/work` (each has a cropped version for the page and the full screen for the zoom view)
- Deployed on Vercel. The old `portfolio-eosin-delta-24.vercel.app` address redirects to the domain.

## Editing content

All copy lives in [`src/content.ts`](src/content.ts): profile, projects, experience and skills. Change it there and the pages update. `DESIGN.md` describes the colors, type and components.

## Visit counter

`src/components/Track.tsx` sends a small beacon to a visit counter running on my lab server (see [agent-ops-lab](https://github.com/gkitad/agent-ops-lab), `visits/`). It counts city, network name, time on page and outbound clicks. No cookies, and IP addresses aren't stored. Open the site once with `?notrack=1` to stop counting your own visits on that browser, and add `?r=name` to a link to tag where a visit came from.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
