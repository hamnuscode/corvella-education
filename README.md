# Corvella Education

Marketing site for Corvella Education, a UK university admissions and education consultancy and a
partner agency of FBA UK Ltd.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

Node 20 or newer. No environment variables are needed to run the site: forms are in demo mode until
you connect an endpoint (see `NOTES.md`).

## Stack

- **Next.js 16** (App Router) with TypeScript
- **Tailwind CSS v4**, tokens defined in `src/app/globals.css` under `@theme`
- **Framer Motion** for animation, with `prefers-reduced-motion` respected everywhere
- **lucide-react** for icons
- Fonts loaded through `next/font/google`, self hosted at build time

## Structure

```
src/
  app/                    one folder per route, plus icon/OG/sitemap/robots files
    globals.css           design tokens and the .arch signature class
  components/
    brand/Logo.tsx        the mark and the lockup, three variants each
    sections/             home page sections, reused across other pages
    ui/                   Button, Field, SelectMenu, Section, Backdrop, Reveal,
                          CountUp, Accordion, ArchPanel
    EligibilityCheck.tsx  the four question flow used in the hero and on /apply
    EnquiryForm.tsx       one form, three variants (apply / contact / referral)
    Header.tsx Footer.tsx PageHeader.tsx
  lib/
    site.ts               all copy, nav, stats, FAQs, partners, posts. Start here.
    postContent.ts        blog article bodies
    submitForm.ts         the form endpoint (currently a demo handler)
    validate.ts           form validation rules
public/
  brand/                  logo files and the FBA UK Ltd logo
  partners/               university logos, trimmed and converted to WebP
```

Almost all editable content lives in `src/lib/site.ts`.

## Design

The logo is a **C that is also a raven's head**: a thick ring opened on the right, the upper
terminal drawn out into a beak, one amber eye. Corvella comes from the corvids.

The layout signature is **the arch**: a doorway with a semicircular top and a flat base. It frames
the hero eligibility check, holds the success story portrait, and stands faintly behind every inner
page title. The site's argument is "the door you thought was closed", so the door is the shape
everything is built from.

The hero is not a headline plus a button. The hero **is** the first question of the eligibility
check, answered inline, because finding out you can actually go is the most characteristic moment
in this business.

| | |
| --- | --- |
| Display | Schibsted Grotesk, weights 600 to 800 |
| Body | Geist |
| Ink | `#0b2621` |
| Brand | `#0a6b5c` (actions and links) |
| Jade | `#17a98f` (glows and focus only, never small text on light) |
| Amber | `#f2a93b` (accent, the logo eye) |
| Paper | `#f7f7f4` |
| Mist | `#dedfd4` |

See `/brand` for the logo variants, palette, type specimens and downloadable files. That page is
`noindex, nofollow` and blocked in `robots.txt`.

## What still needs filling in

See **`NOTES.md`**. Every placeholder is listed there with the file it lives in.
