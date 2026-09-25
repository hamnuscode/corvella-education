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

Node 20 or newer. No environment variables and no backend: every form hands off to WhatsApp with
the details prefilled, so there is no endpoint to run or maintain.

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
                          CountUp, Accordion, ArchPanel, ArchDepth, Tilt3D
    EligibilityCheck.tsx  the four question flow used in the hero and on /apply
    EnquiryForm.tsx       one form, three variants (apply / contact / referral)
    Header.tsx Footer.tsx PageHeader.tsx
  lib/
    site.ts               all copy, nav, stats, FAQs, partners, posts. Start here.
    postContent.ts        blog article bodies
    submitForm.ts         composes form details into a WhatsApp message
    validate.ts           form validation rules
public/
  brand/                  logo files, icons and lockups
  photos/                 21 CC0 photographs, see CREDITS.md
  partners/               university logos, trimmed and converted to WebP
```

Almost all editable content lives in `src/lib/site.ts`.

## Design

The logo is a **C that is also a raven's head**: a thick ring opened on the right, the upper
terminal drawn out into a beak, one amber eye. Corvella comes from the corvids.

The layout signature is **the arch**: a doorway with a semicircular top and a flat base. It frames
the hero eligibility check, holds the success story portrait, and stands faintly behind every inner
page title. In the hero it is extruded: a stack of arch outlines pushed back along Z inside a
perspective container (`ArchDepth`), so you look down the depth of the doorway rather than at a
flat shape. `Tilt3D` gives the same treatment to the panel and the card grids. The site's argument is "the door you thought was closed", so the door is the shape
everything is built from.

The home page opens with a photographic carousel. The door scene sits further down, where the
eligibility check stands in the mouth of the extruded arch: four questions, then **Get started**
opens the enquiry form in a popup and hands it to WhatsApp.

| | |
| --- | --- |
| Display | Schibsted Grotesk, weights 600 to 800 |
| Body | Geist |
| Ink | `#101823` |
| Brand | `#2b5f92` (actions and links) |
| Steel | `#5e9bd6` (glows and accents on dark, never small text on light) |
| Focus | `#3e7bb8` (focus rings, clears 3:1 on both paper and ink) |
| Amber | `#f0a93c` (accent, the logo eye) |
| Paper | `#f5f7fa` |
| Mist | `#d4dce7` |

See `/brand` for the logo variants, palette, type specimens and downloadable files. That page is
`noindex, nofollow` and blocked in `robots.txt`.

## What still needs filling in

See **`NOTES.md`**. Every placeholder is listed there with the file it lives in.
