# Corvella Education: open items

## 1. Things I need from you (placeholders live on the site)

| What | Placeholder shown | Where it appears |
| --- | --- | --- |
| **WhatsApp number** | `[WHATSAPP NUMBER]` | Floating button, "Ask us a question", footer, every form |
| **Contact address** | `[NEW CONTACT ADDRESS]` | Contact page, footer |
| **Main website URL** | `[MAIN WEBSITE URL]` | Footer |
| **Course finder document** | Temporary subject list | Courses page and the home courses section |

All four live in `src/lib/site.ts` near the top.

**About the WhatsApp links:** every link works right now. The displayed text is the placeholder, but
the link itself uses `447700900412`, which is inside the range Ofcom reserves for drama and fiction,
so it can never reach a real person. Replace `site.contact.whatsapp.e164` with your real number in
international format, no plus sign and no spaces (for example `447700123456`), and change `display`
to how you want it written on the page.

**About the course list:** the six subject groups on `/courses` and the home page are a temporary
placeholder, and the page says so in a visible note. Send the course finder document and I will
replace them with your real courses, grouped by level and subject, and remove that note.

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

## 3. What changed in this round

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

## 4. Photography

42 photographs in `public/photos/`, **all CC0 (public domain)**: free for commercial use, no
attribution required, no copyright restrictions. Full list in `public/photos/CREDITS.md`.

**Every photograph is used in exactly one place.** Nothing repeats anywhere on the site.

**No photograph has anything laid over it.** Banners and the carousel are split layouts: the words
sit on solid ink, the picture sits beside them untouched. Cards show the photo clean, with the
accent carried by a thin bar and the icon badge rather than a colour wash.

Six of them are portraits of real people used on the review cards. They are CC0, so this is legal,
but please note the people in them did not give these testimonials. That is a second reason to swap
the reviews for real ones before launch (see section 2).

One limitation: the free sources only serve these at around 960 to 1400 pixels wide. That is why
the layouts render photos at moderate size rather than full bleed, which keeps them crisp. If you
buy stock photography later, drop replacements into `public/photos/` using the same filenames and
nothing else needs to change.

---

## 5. Launch checklist

- [ ] Real WhatsApp number in `site.contact.whatsapp`
- [ ] Real contact address
- [ ] Main website URL for the footer
- [ ] Course finder document so the real course list replaces the placeholder
- [ ] Replace or remove the sample reviews and the success story
- [ ] Real company number and VAT number
- [ ] Real phone number
- [ ] Legal read of the privacy policy, then drop its `noindex`
- [ ] Point `site.url` at the real domain
