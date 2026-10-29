# Sanchi Thakur — Developer Portfolio

A fast, accessible, single-page portfolio built with **React 18, TypeScript, Vite 5 and Tailwind CSS 3**.

## Quick start

```bash
npm install        # install dependencies
npm run dev        # start the dev server → http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

Requires Node.js 18+.

## Project structure

```
├── index.html                  SEO meta, Open Graph, JSON-LD, fonts
├── public/
│   ├── favicon.svg
│   ├── robots.txt / sitemap.xml
│   ├── resume/Sanchi_Thakur_Resume.pdf   ← placeholder, replace
│   └── images/projects/        ← project screenshots go here
└── src/
    ├── data/                   ← ALL content lives here
    │   ├── profile.ts          name, intro, bio, email, socials, photo, resume
    │   ├── projects.ts         project cards (features, tech, links, images)
    │   ├── experience.ts       timeline entries
    │   ├── education.ts        degrees
    │   ├── skills.ts           skill groups
    │   └── navigation.ts       nav items / section ids
    ├── components/
    │   ├── layout/             Navbar, Footer, DevChecklist (dev only)
    │   ├── sections/           Hero, About, Skills, Projects, Experience, Education, Contact
    │   └── ui/                 Button, Section, Reveal, Tag, SocialLinks, DevHint, BrandIcons
    ├── hooks/                  useInView, useActiveSection, useScrolled
    └── lib/                    cn(), isSet() placeholder detection
```

## How placeholders work

Values that still contain template text (`your-…`, `example.com`, `YYYY`, `Your University Name`) are treated as
**not set**:

- In `npm run dev` they show as dashed amber hints, and a **“N to fill in”** checklist sits in the bottom-left corner.
- In production builds, unset links and details are **hidden automatically**. Hints and the checklist are never shipped.

## Contact form

The form validates input and submits in one of two ways:

1. **Formspree (recommended).** Create a free form at <https://formspree.io>, copy `.env.example` to `.env`, set
   `VITE_FORMSPREE_FORM_ID=<your id>`, and restart the dev server. Add the same variable in your hosting provider’s
   environment settings. Messages arrive in your inbox.
2. **Fallback.** Without a form ID, submitting opens the visitor’s email app with the message pre-filled and addressed
   to `profile.email`.

It also includes a hidden honeypot field to filter basic spam bots.

## Deploying

Any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages): build command `npm run build`, output
directory `dist`. After deploying, replace `https://your-domain.com` in `index.html`, `public/robots.txt` and
`public/sitemap.xml`.
