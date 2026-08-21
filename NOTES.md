# Corvella Education: what you need to fill in

Everything below is a placeholder. Nothing here is invented data pretending to be real.
Placeholders are written as `[square brackets]` on the page so they are obvious in the browser.

---

## 1. Contact details

**File:** `src/lib/site.ts` (the `site.contact` object)

| Field | Current placeholder | Used on |
| --- | --- | --- |
| `phone` / `phoneHref` | `[020 0000 0000]` | Footer, Contact |
| `whatsapp` / `whatsappHref` | `[+44 7000 000000]` | Footer, Contact, every CTA band |
| `email` / `emailHref` | `[hello@corvella.example]` | Footer, Contact |
| `referralEmail` | `[referrals@corvella.example]` | Careers |
| `address` | `[Suite 00, Building Name]` etc. | Contact |
| `hours` | `Monday to Friday, [10am to 6pm]` | Contact, About |

Also in the same file: `site.url` (currently `https://corvella.vercel.app`, the live Vercel URL)
drives canonical URLs, the sitemap and Open Graph. Change it the moment you point a real domain at
the site, otherwise Google will keep indexing the vercel.app address as canonical.

And `site.company.registration` / `site.company.vat` (footer legal line).

---

## 2. Statistics

**File:** `src/lib/site.ts` (the `stats` array)

| Stat | Status |
| --- | --- |
| Year established | Set to **2021**. Confirm this is correct. |
| Students supported | **`[X]`, needs a real figure.** Shown in yellow on the page. |
| Courses available | **`[X]`, needs a real figure.** Shown in yellow on the page. |
| Partner universities | Set to **16**, counted from the FBA UK Ltd partner list we downloaded. Update if the list changes. |

To turn a placeholder into a counting number, delete the `placeholder` key and set `value` and
`suffix`. The counter animation then runs automatically.

The paragraph under the stats explains why some numbers are blank. Delete it once they are filled.

---

## 3. Ratings

**File:** `src/lib/site.ts` (the `ratings` array)

Trustpilot and Google both show `[4.X]`. Put in your real scores, or delete the whole
`ratings` array and the trust strip block in `src/components/sections/TrustStrip.tsx` if you do
not have review profiles yet. Do not publish a score you cannot link to.

Also in `TrustStrip.tsx`: the line "Trusted by students since 2021". Change the year if needed.

---

## 4. Testimonials

**File:** `src/lib/site.ts` (the `testimonials` array)

Four sample quotes, all attributed to `[Student name]` and `[Course], [University]`. They are
labelled "Sample quotes" on the page and there is a note under the slider. Replace them with real,
consented quotes and delete that note in `src/components/sections/Testimonials.tsx`.

---

## 5. The success story

**File:** `src/components/sections/SuccessStory.tsx`

- Photo: the arch frame is currently a placeholder panel. Drop in a real photo (a `next/image`
  with `fill` inside the existing `.arch` container).
- Name, course, university and year are all `[bracketed]`.
- The four timeline steps describe a typical case. Rewrite them for the real student.
- Delete the sentence beginning "Swap the details below" once it is a real story.

---

## 6. Forms

**File:** `src/lib/submitForm.ts`

`FORM_ENDPOINT` is an empty string, which puts every form into **demo mode**: it validates, shows
the success state, logs the payload to the console in development, and sends nothing. A visible
notice says so on each form.

Set `FORM_ENDPOINT` to your endpoint (a Next route handler at `/api/enquiry`, Formspree, Resend,
HubSpot, your CRM) and the notices disappear automatically. The POST body is:

```json
{ "form": "application-enquiry", "firstName": "...", "lastName": "...", "email": "...", "phone": "...", "message": "...", "heard": "..." }
```

`form` is one of `application-enquiry`, `general-contact`, `consultant-referral`.

Also: the success messages say "within [X] working days". Set your real response time in
`src/components/EnquiryForm.tsx`.

---

## 7. Blog

**Files:** `src/lib/site.ts` (the `posts` array), `src/lib/postContent.ts` (article bodies)

Six sample posts. The featured one,
`going-to-university-without-a-levels`, has a full sample body so you can see a finished article.
The other five fall back to a short generic sample body and show a notice saying so.

Add real bodies by adding entries to the `written` map in `postContent.ts`, keyed by slug. Blocks
are `p`, `h2`, `ul` and `quote`.

Delete the placeholder notice at the bottom of `src/app/blog/page.tsx` when the posts are real.

---

## 8. Team

**File:** `src/app/about/page.tsx`

The team section speaks about the team collectively, which is honest with no real names. There is
a bracketed note in place telling you to add real profiles. Office hours are bracketed there too.

---

## 9. Referral terms

**File:** `src/app/careers/page.tsx`

"Paid per enrolment" says `[Confirm your terms here.]`. Add your real referral terms, payment
schedule and any compliance wording before this page goes live.

---

## 10. Privacy policy

**File:** `src/app/privacy/page.tsx`

Placeholder wording that covers the right ground: who we are, what we collect, why, who we share
it with, retention, rights, cookies. Bracketed gaps for lawful basis, processors, retention period
and cookies. **Have it reviewed by someone qualified.** The page is set to `noindex` until then.

---

## 11. Funding figures (deliberately absent)

**File:** `src/app/funding/page.tsx`

We have not published loan amounts, thresholds or repayment percentages anywhere. They are set by
government and change yearly, and a stale figure on a consultancy site is worse than none. The page
says this explicitly and points at GOV.UK. If you want live figures, add them here and put a review
date in your calendar.

---

## 12. Assets

- **Partner logos** live in `public/partners/` as trimmed, optimised WebP (16 files, 180 KB total).
- **One logo failed to download:** `Buckinghamshire-New-University.png` returns HTTP 422 from
  fbaukltd.com. It has been dropped from the wall. Re-add it by putting a file in `public/partners/`
  and adding a row to the `partners` array in `src/lib/site.ts`.
- **"Demfront University"** is included as supplied by FBA. Check the spelling is right before launch.
- **FBA UK Ltd logo** is white-on-transparent, so there are two versions: `public/brand/fba-uk-ltd.png`
  (white, for dark backgrounds) and `public/brand/fba-uk-ltd-ink.webp` (ink on white, for light ones).

---

## 13. Social preview image

`src/app/opengraph-image.png` and `src/app/twitter-image.png` are generated 1200x630 images using
the real brand fonts and palette. Regenerate them if the headline changes.

---

## 14. Before you launch

- [ ] Set `site.url` in `src/lib/site.ts` to your real domain (currently the vercel.app URL)
- [ ] Fill every `[bracketed]` value listed above
- [ ] Connect `FORM_ENDPOINT`
- [ ] Replace sample testimonials and the success story, or remove those sections
- [ ] Complete and legally review the privacy policy, then remove its `noindex`
- [ ] Decide whether `/brand` should stay published (it is `noindex, nofollow` and blocked in robots.txt)
- [ ] Add analytics if you want it, and mention it in the privacy policy
