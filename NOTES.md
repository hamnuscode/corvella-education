# Corvella Education: open items

## 1. Things I need from you (placeholders live on the site)

| What | Placeholder shown | Where it appears |
| --- | --- | --- |
| **WhatsApp number** | `[WHATSAPP NUMBER]` | Floating button, "Ask us a question", footer, every form |
| **Contact address** | `[NEW CONTACT ADDRESS]` | Contact page, footer |
| **Main website URL** | `[MAIN WEBSITE URL]` | Footer |
| ~~Course finder document~~ | **Received and live** | See section 3 |

All four live in `src/lib/site.ts` near the top.

**About the WhatsApp links:** every link works right now. The displayed text is the placeholder, but
the link itself uses `447700900412`, which is inside the range Ofcom reserves for drama and fiction,
so it can never reach a real person. Replace `site.contact.whatsapp.e164` with your real number in
international format, no plus sign and no spaces (for example `447700123456`), and change `display`
to how you want it written on the page.

**The course list is now real.** See section 3.

---

## 2. Still to verify before you publish

### Reviews
`src/lib/site.ts`, the `reviews` array. The six quotes are **written examples, not real students**.
The section is labelled "Sample reviews" on the page. UK law bans publishing invented reviews, so
please swap them for real, consented ones (keep the permission on file) or delete `<Reviews />`
from `src/app/page.tsx`.

The portraits are **monograms rather than photographs**, on purpose: a stock headshot beside a named
student implies that person supplied their picture.

### Success story
`src/components/sections/SuccessStory.tsx`. "Leah Mensah" is also a written example. Same rule.

### Company number and VAT number
`src/lib/site.ts`, `site.company`. Currently `14027318` and `421 8830 47`, both invented so the
footer reads properly. A company number that resolves to somebody else's company is a real problem,
so replace both or remove the line.

### Phone number
`020 7946 0412` is also from Ofcom's drama range. Safe, but it does not ring.

### Privacy policy
Now mentions that enquiries travel through WhatsApp, which is accurate. Still worth a legal read.
It is `noindex` until you are happy with it.

---

## 3. The course catalogue

**File:** `src/lib/courses.ts` (generated, do not hand edit)

Built from your course finder spreadsheet. All four course tabs were parsed: CertHE, Foundation
Degree, Undergraduate and Masters.

- **838 course offerings** across **18 universities** and 13 subject fields, after grouping the
  1,897 spreadsheet rows so one course running at six campuses is one card listing six campuses.
- Intake markers are read exactly as the sheet defines them in its own legend: **Y means running,
  X means unavailable, ! means subject to demand.** Only running and subject-to-demand months are
  shown, so nothing advertises a closed intake.
- Tuition fees are shown as written in the sheet.
- University and subject names were normalised where the sheet spelled them several ways, for
  example ULAW and University of Law, or "Hotel & Tourisom" and "Tourism Management".
- 204 rows had no subject field, so the subject was inferred from the course name.

`/courses` is now a real course finder: search plus filters for level, subject, study mode and
university, with Ask buttons that open WhatsApp prefilled with the course and university name.

**Two things I did not carry across.** The sheet's "Course Informations" column links to PDFs on
`crm.fbaukltd.com`, and you asked for all FBA material removed, so those links are not on the site.
The FBA TEAM CONTACT tab was skipped for the same reason. Say the word if you want the course PDFs
linked after all.

**To refresh:** re-export each tab as CSV and regenerate. The parser lives in the project history
rather than the repo, so ping me and I will rerun it.

---

## 4. What changed in this round

- **Home page** now opens with a four slide image carousel. It auto plays gently, pauses on hover
  and on keyboard focus, supports swipe, and has a progress bar on the active dot. The door scene
  has moved down the page to sit as the eligibility section.
- **Every page** has a photographic header banner with a heading and one line.
- **Blog** is fully unlinked: gone from the navigation, the footer, the sitemap, and set to
  `noindex, nofollow` with a `robots.txt` disallow. The pages and articles are still in the project
  at `/blog` if you ever want them back.
- **WhatsApp** is now the spine of contact: a floating button on every page, an "Ask us a question"
  button on the contact page and in the FAQ, and **every form opens WhatsApp with the details
  prefilled** instead of posting anywhere. The demo endpoint is gone, and so is `FORM_ENDPOINT`.
- **Eligibility check** is four questions and finishes with **Get started**, which opens the enquiry
  form in a popup. The answers travel into the WhatsApp message with the contact details.
- **Service two is now Interview practice.** The "what we do not do" section has been removed.
- **Stats counter removed.** No invented figures anywhere: the year established, student count and
  course count are all gone, and the Google and Trustpilot scores with them. The trust strip now
  carries three qualitative promises instead.
- **All FBA UK Ltd material removed**, including the logo files. Note this reverses an explicit
  requirement from the original brief, which asked for a line naming Corvella as a partner agency of
  FBA UK Ltd. Say the word if you want it back.
- **Footer rebuilt**: WhatsApp call to action, address and hours, two link columns, a contact column,
  and a main website link. "Become a consultant" is now "Refer a student".
- **Office hours** are Monday to Saturday, 9am to 8pm.
- **Form placeholder names** are now Emma Wilson.

---

## 5. Photography

43 photographs in `public/photos/`, **all CC0 (public domain)**: free for commercial use, no
attribution required, no copyright restrictions. Full list in `public/photos/CREDITS.md`.

**Every photograph is used in exactly one place.** Nothing repeats anywhere on the site.

**No photograph has anything laid over it.** Banners and the carousel are split layouts: the words
sit on solid ink, the picture sits beside them untouched. Cards show the photo clean, with the
accent carried by a thin bar and the icon badge rather than a colour wash.

The success story no longer carries a portrait at all, at your request.

Six of them are portraits of real people used on the review cards. They are CC0, so this is legal,
but please note the people in them did not give these testimonials. That is a second reason to swap
the reviews for real ones before launch (see section 2).

One limitation: the free sources only serve these at around 960 to 1400 pixels wide. That is why
the layouts render photos at moderate size rather than full bleed, which keeps them crisp. If you
buy stock photography later, drop replacements into `public/photos/` using the same filenames and
nothing else needs to change.

---

## 6. Launch checklist

- [ ] Real WhatsApp number in `site.contact.whatsapp`
- [ ] Real contact address
- [ ] Main website URL for the footer
- [ ] Replace or remove the sample reviews and the success story
- [ ] Real company number and VAT number
- [ ] Real phone number
- [ ] Legal read of the privacy policy, then drop its `noindex`
- [ ] Point `site.url` at the real domain
