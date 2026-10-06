# AJ Technologies — AI Journey

Official portfolio website for AJ Technologies — AI Journey. Building intelligent technology across AI, machine learning, software, data, and creative services.

**Live:** [aj-technologies-portfolio.vercel.app](https://aj-technologies-portfolio.vercel.app/)

---

## About

AJ Technologies is a technology company focused on artificial intelligence, machine learning, software engineering, data analytics, and digital design. This repository contains the source for the company's portfolio website — a curated view of the work, services, and team behind the business.

The site is built around a single design language: light chrome (navbar and footer), dark content canvas, one brand blue, and structured motion. Every page shares the same typography scale, spacing system, and interaction patterns.

---

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, introduction, technology services, social media management, graphics design, capabilities, featured projects, principles, process, final CTA |
| `/projects` | Full portfolio — 10 projects with category filtering and case-study modals |
| `/team` | Leadership — the people behind AJ Technologies |
| `/contact` | Inquiry form, direct channels, and social links |

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16.3.5 (App Router, Turbopack) |
| UI Library | React 19.2.8 |
| Language | TypeScript 5 |
| Animation | Framer Motion 13 |
| Icons | Lucide React 1.46 |
| Forms | Formspree (`@formspree/react`) |
| Styling | Plain CSS with shared design tokens |

---

## Features

- **Cinematic intro curtain** — brand reveal on first visit per session
- **Scroll-triggered reveals** — masked text entrance, staggered card animations, viewport-once triggers
- **Category filter** on the projects page with animated layout transitions
- **Case-study modals** for every project — problem, solution, features, technology, purpose
- **Social media & graphics service modals** — full capability breakdown on the Home page
- **Contact form** with validation, sending state, and success confirmation
- **Smart navbar CTA** — swaps between "Start a Project" and "View Our Work" based on the current route
- **Footer contact popover** — quick access to Email and WhatsApp
- **Fully responsive** — desktop, laptop, tablet, mobile
- **Accessibility** — semantic HTML, descriptive alt text, labeled icon buttons, keyboard-navigable, `prefers-reduced-motion` support
- **Performance-conscious** — Next.js Image optimization, viewport-triggered animations, priority hints on LCP images

---

## Design System

### Color Palette

| Token | Value | Usage |
| --- | --- | --- |
| Brand Blue | `#087cff` | Primary actions, active states, brand accents |
| Brand Blue Light | `#1684ff` | Hover states, secondary accents |
| Deep Navy | `#030b18` | Primary content background |
| Elevated Navy | `#071223` | Alternate section backgrounds |
| Light Chrome | `#dde5f0` | Navbar and footer backgrounds |
| Chrome Deep | `#d3ddeb` | Navbar when menu is open |
| Text on Navy | `#a5b3c8` | Body copy on dark backgrounds |
| Text on Chrome | `#3f4f6b` | Body copy on light backgrounds |

### Typography

- **Hero headings:** `clamp(44px, 5vw, 76px)` with tight letter spacing
- **Section headings:** `clamp(36px, 4vw, 56px)`
- **Body copy:** `15.5px` at `1.75` line height
- **Labels / kickers:** `11.5px`, uppercase, `0.22em` letter spacing

### Motion

All animations use Framer Motion with a shared easing curve `[0.22, 1, 0.36, 1]`:

- Mask-based line reveals for headings
- Staggered child entrances for card grids
- Ambient loops (orbit spins, glow floats, scan lines, pulse dots)
- Micro-interactions (arrow nudges, card lifts, icon rotations)
- `prefers-reduced-motion` respected site-wide

---

## Project Structure

```
aj-technologies/
├── app/
│   ├── layout.tsx              Root layout (Navbar, Footer, IntroCurtain)
│   ├── globals.css             Shared design tokens and base styles
│   ├── page.tsx                Home page
│   ├── home.css
│   ├── projects/
│   │   ├── page.tsx
│   │   └── projects.css
│   ├── team/
│   │   ├── page.tsx
│   │   └── team.css
│   └── contact/
│       ├── page.tsx
│       └── contact.css
│
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   └── IntroCurtain/
│       ├── IntroCurtain.tsx
│       └── IntroCurtain.css
│
├── public/
│   ├── logo/
│   │   └── aj-technologies-logo.png
│   ├── images/
│   │   ├── hero-tech.png
│   │   ├── projects-hero.png
│   │   ├── team-hero.png
│   │   └── contact-hero.png
│   └── projects/
│       ├── see-and-hire.png
│       ├── nutra-ai.png
│       ├── tableop.png
│       ├── dental-dynamo.png
│       ├── mental-health.png
│       ├── job-salaries.png
│       ├── house-price.png
│       ├── story-generator.png
│       ├── social-media.png
│       └── graphics-design.png
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## Getting Started

### Requirements

- Node.js 18.18 or newer
- npm (or pnpm / yarn)

### Installation

```bash
git clone https://github.com/aatazaz-hussain/AJ_Technologies_Portfolio.git
cd AJ_Technologies_Portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Deployment

This project is deployed on Vercel with automatic continuous deployment from the `main` branch.

Every push to `main` triggers a new production build. Preview deployments are created automatically for pull requests.

---

## Contact

| Channel | Details |
| --- | --- |
| Email | [ajtechnologies.ai@gmail.com](mailto:ajtechnologies.ai@gmail.com) |
| WhatsApp | [+92 326 0666521](https://wa.me/923260666521) |
| LinkedIn | [AJ Technologies](https://www.linkedin.com/company/aj-technologies-official/) |
| Instagram | [@ajtechnologies45](https://www.instagram.com/ajtechnologies45?igsi=eDc1dmYwa2Z3ZGkw) |
| GitHub | [@aatazaz-hussain](https://github.com/aatazaz-hussain) |

---

## Author

**AJ Technologies — AI Journey**
Founder and CEO: Aqsa Fayyaz

---

## License

© 2026 AJ Technologies. All rights reserved.
```

---



**2.** Founder name: **Aqsa Fayyaz** — correct? Or should I remove the founder line entirely?

If both are fine → paste, save, push. 🎯
