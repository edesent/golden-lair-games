# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # next lint (ESLint, eslint-config-next)
```

There is no test suite.

## Stack

Next.js 15 (App Router) + React 19 + TypeScript, deployed to Vercel. Styling is **plain CSS** in `app/globals.css` — no Tailwind, CSS Modules, or styling library. Icons come from `lucide-react`. Images use `next/image` and live in `public/images/`.

## Architecture

This is a small single-page marketing site for a brick-and-mortar trading card game store in Lapeer, MI.

- **`app/page.tsx`** — the entire page. It is a server component built from data arrays declared at the top of the file (`navItems`, `games`, `schedule`, `hours`, `features`, `cardSteps`) which are then `.map()`-ed into JSX. **To change site content (events, hours, supported games, store contact info), edit these arrays rather than the markup.** Top-of-file constants also hold external links (`facebookUrl`, `mapUrl`, `phoneUrl`, etc.).
- **`app/components/LocationFinder.tsx`** — the one client component (`"use client"`), an interactive store locator. Store locations are a typed `locations: Location[]` array at the top of this file; add/edit stores there.
- **`app/layout.tsx`** — root layout and SEO `metadata` (title template, description, OpenGraph). Update the store description and games list here too when they change site-wide.
- **`app/globals.css`** — all styling. The brand system is driven by CSS custom properties under `:root` (the black/gold palette: `--black`, `--gold`, `--cream`, plus per-game accent colors `--red`/`--blue`/`--violet`/`--green`). Class names in the JSX map directly to selectors here.

## Conventions

- Brand identity is **black and gold**; preserve the existing palette, logo, and imagery when redesigning (per README intent).
- Content data and presentation are intentionally co-located in the page/component files via the arrays described above — keep that pattern instead of introducing a CMS or separate data files for small changes.
- Per-game schedule entries carry a `color` key that maps to the CSS accent variables; keep them consistent when adding games.
