# Corvella Education: what still needs your input

Everything on the site is now written and filled. Nothing renders as `[bracketed]` any more.

That does **not** mean everything is ready to publish. The list below splits into things that are
legally or factually consequential and must be verified, and things that are simply preferences.

---

## Must be verified before you publish

### 1. Testimonials

**File:** `src/lib/site.ts` (the `testimonials` array)

The six quotes are **written by me, not by real students**. The names, courses and universities are
invented, though the universities themselves are real partners.

Publishing invented testimonials as genuine is unlawful in the UK. The Digital Markets, Competition
and Consumers Act 2024 bans fake consumer reviews, and the CAP Code requires testimonials to be
genuine and held on file with the customer's permission. Please either:

- replace all six with real, consented quotes, keeping written permission on file, or
- delete the `<Testimonials />` line from `src/app/page.tsx` until you have them.

The avatars are **monograms, not photographs**, and that was deliberate: putting a stock headshot
next to a named student implies that person supplied their picture, which would be a second claim
the site cannot support. If you swap in real photos, do it in `src/components/ui/Avatar.tsx`.

### 2. The success story

**File:** `src/components/sections/SuccessStory.tsx`

"Leah Mensah" is likewise a written example, not a real student. Same rule as above.

### 3. Company number and VAT number

**File:** `src/lib/site.ts` (`site.company`)

Currently `14027318` and `421 8830 47`. These are plausible-format numbers I made up so the footer
reads correctly. **A company number that resolves to somebody else's company is a serious problem.**
Replace both with the real registered values, or remove the line entirely if Corvella Education Ltd
is not yet incorporated.

### 4. Review scores

**File:** `src/lib/site.ts` (the `ratings` array)

Trustpilot 4.8 and Google 4.9 are invented. Use your real scores, or delete the `ratings` array and
the block that renders it in `src/components/sections/TrustStrip.tsx`. A score you cannot link to is
the same problem as a fake review.

### 5. Statistics

**File:** `src/lib/site.ts` (the `stats` array)

Year established 2021, 1,400+ students supported, 45+ courses, 16 partner universities. Only the
last is derived from something real (the FBA UK Ltd partner list). Confirm the other three against
your own records.

### 6. Postal address

**File:** `src/lib/site.ts` (`site.contact.address`)

"Suite 214, Blackwall Studios, 34 Admirals Way, London E14 9UP" is invented. Replace it with your
real trading address.

### 7. Phone numbers

**File:** `src/lib/site.ts`

These are safe as they stand but they do not work. `020 7946 0412` and `07700 900412` come from the
ranges Ofcom reserves for drama and fiction, so they can never connect to a real person's line. Swap
them for your real numbers when you have them.

### 8. Privacy policy

**File:** `src/app/privacy/page.tsx`

Now a complete policy rather than a skeleton, and it describes how the site actually behaves today:
no analytics, no advertising cookies, enquiry data shared with FBA UK Ltd and the university. The
retention periods (two years, six years) and the lawful basis are reasonable defaults, not advice.
Have it checked by someone qualified, and update it the moment you add analytics or a CRM.

The page is `noindex` until you are happy with it. Remove that in the `metadata` export.

---

## Still to connect

### 9. Form endpoint

**File:** `src/lib/submitForm.ts`

`FORM_ENDPOINT` is empty, which puts all three forms in **demo mode**: they validate, show the
success state, log to the console in development, and send nothing. A visible notice says so on each
form and disappears automatically once you set the value.

```json
{ "form": "application-enquiry", "firstName": "...", "lastName": "...", "email": "...", "phone": "...", "message": "...", "heard": "..." }
```

`form` is one of `application-enquiry`, `general-contact`, `consultant-referral`.

The success messages promise a reply "within two working days". Change that in
`src/components/EnquiryForm.tsx` if it is not true.

### 10. Real domain

**File:** `src/lib/site.ts` (`site.url`)

Currently the Vercel URL, which is what drives canonicals, the sitemap and Open Graph. Change it the
moment a real domain points at the site, otherwise Google keeps the vercel.app address as canonical.

---

## Content you may simply want to change

### 11. Blog

**Files:** `src/lib/site.ts` (`posts`), `src/lib/postContent.ts` (bodies)

Nine articles, all fully written, all on subjects real applicants search for: entry routes without A
levels, foundation year versus Access to HE, the maintenance loan, what repayment is actually like,
studying while working, changing career, personal statements, and the document list.

They deliberately contain **no numbers that go stale**: no loan amounts, no thresholds, no repayment
percentages. Those are set by government and change yearly, so the articles explain the mechanism and
point at GOV.UK instead. Keep it that way, or accept a review date in your calendar.

Add posts by appending to `posts` and adding a body to the `written` map in `postContent.ts`. Blocks
are `p`, `h2`, `ul` and `quote`. A post with no body renders an empty article, so add both.

### 12. Referral terms

**File:** `src/app/careers/page.tsx`

Says referral fees are paid once a student has enrolled and passed the university's cooling off
period. Adjust to your actual terms.

### 13. Assets

- 16 partner logos in `public/partners/`, trimmed and converted to WebP, 180 KB total.
- **One never downloaded:** `Buckinghamshire-New-University.png` returns HTTP 422 from fbaukltd.com.
  Add a file to `public/partners/` and a row to `partners` in `src/lib/site.ts` to restore it.
- **"Demfront University"** is spelled as FBA supplied it. Worth checking.
- FBA's own logo is white on transparent, so there are two versions: `fba-uk-ltd.png` for dark
  backgrounds and `fba-uk-ltd-ink.webp` for light ones.

### 14. `/brand`

Logo variants, palette, type specimens and downloads. `noindex, nofollow` and blocked in
`robots.txt`. Delete `src/app/brand/` if you would rather it did not exist.

---

## Launch checklist

- [ ] Replace or remove the six testimonials and the success story
- [ ] Real company number and VAT number, or remove the footer line
- [ ] Real review scores, or remove the ratings block
- [ ] Verify the three invented statistics
- [ ] Real address and real phone numbers
- [ ] Legal review of the privacy policy, then drop its `noindex`
- [ ] Connect `FORM_ENDPOINT`
- [ ] Point `site.url` at the real domain
- [ ] Decide whether `/brand` stays
