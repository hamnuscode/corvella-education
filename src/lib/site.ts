export const site = {
  name: "Corvella Education",
  shortName: "Corvella",
  tagline: "Your route to a UK university starts here.",
  url: "https://corvella.vercel.app", // PLACEHOLDER: swap for the real domain
  // PLACEHOLDER: [MAIN WEBSITE URL] for the footer link
  mainWebsite: { label: "[MAIN WEBSITE URL]", href: "" },
  contact: {
    // PLACEHOLDER: [WHATSAPP NUMBER]. The e164 below is an Ofcom number reserved
    // for drama, so every WhatsApp link is safe to click until you replace it.
    whatsapp: { display: "[WHATSAPP NUMBER]", e164: "447700900412" },
    phone: "020 7946 0412",
    phoneHref: "tel:+442079460412",
    email: "hello@corvellaeducation.co.uk",
    emailHref: "mailto:hello@corvellaeducation.co.uk",
    referralEmail: "referrals@corvellaeducation.co.uk",
    address: ["[NEW CONTACT ADDRESS]"], // PLACEHOLDER
    hours: "Monday to Saturday, 9am to 8pm",
  },
  company: {
    registration:
      "Corvella Education Ltd is registered in England & Wales, company number 14027318.",
    vat: "VAT 421 8830 47",
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsapp.e164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/services", label: "Services" },
  { href: "/funding", label: "Funding" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  {
    title: "Study with us",
    links: [
      { href: "/courses", label: "Courses" },
      { href: "/apply", label: "Check your eligibility" },
      { href: "/funding", label: "Funding and student finance" },
      { href: "/#partners", label: "University partners" },
    ],
  },
  {
    title: "Corvella",
    links: [
      { href: "/#about", label: "About us" },
      { href: "/services", label: "Services" },
      { href: "/careers", label: "Refer a student" },
      { href: "/contact", label: "Contact" },
    ],
  },
] as const;

export const ACCENTS = ["brand", "sky", "ochre", "coral"] as const;
export type Accent = (typeof ACCENTS)[number];

/** Hex per accent, for inline --accent on cards. Keep in step with globals.css. */
export const accentHex: Record<Accent, string> = {
  brand: "#2b5f92",
  sky: "#0f7490",
  ochre: "#8a5f14",
  coral: "#b8442c",
};

/* --------------------------------------------------------------- photos */
/* All CC0. See public/photos/CREDITS.md. */

export const photo = {
  campusQuad: "/photos/campus-quad-hero.webp",
  campusPath: "/photos/campus-path.webp",
  campusAutumn: "/photos/campus-autumn.webp",
  ukCampus: "/photos/uk-campus-green.webp",
  gothic: "/photos/university-gothic.webp",
  library: "/photos/library-stacks.webp",
  lecture: "/photos/lecture-hall.webp",
  studentsTogether: "/photos/students-together.webp",
  studentsCollab: "/photos/students-collaborating.webp",
  teamTable: "/photos/team-table.webp",
  meeting: "/photos/meeting-discussion.webp",
  handshakeDesk: "/photos/handshake-desk.webp",
  handshakeClose: "/photos/handshake-close.webp",
  laptopDesk: "/photos/laptop-desk.webp",
  laptopCoffee: "/photos/laptop-coffee-flatlay.webp",
  studentLaptop: "/photos/student-laptop.webp",
  notebook: "/photos/notebook-planning.webp",
  deskFlatlay: "/photos/desk-flatlay.webp",
  openBook: "/photos/open-book.webp",
  readingBooks: "/photos/reading-books.webp",
  london: "/photos/london-westminster.webp",
} as const;

/* ------------------------------------------------------- home carousel */

export const slides = [
  {
    image: photo.campusQuad,
    eyebrow: "Welcome to Corvella",
    heading: "University is closer than you think",
    line: "You can study for a UK degree even if you do not have A levels or formal qualifications.",
    cta: { label: "Check your eligibility", href: "/apply" },
  },
  {
    image: photo.studentsTogether,
    eyebrow: "Start your journey",
    heading: "Begin where you are today",
    line: "Tell us where you are now and we will show you the route that fits your life.",
    cta: { label: "Explore courses", href: "/courses" },
  },
  {
    image: photo.handshakeDesk,
    eyebrow: "Advance your career",
    heading: "Build the future you want",
    line: "A degree can open doors in business, law, computing, healthcare and much more.",
    cta: { label: "See what we do", href: "/services" },
  },
  {
    image: photo.ukCampus,
    eyebrow: "Study in the UK",
    heading: "Real degrees from UK universities",
    line: "We work with established universities across the UK and support you at every step.",
    cta: { label: "Meet our partners", href: "/#partners" },
  },
] as const;

/* ------------------------------------------------------- page banners */

export const banners = {
  courses: {
    image: photo.library,
    eyebrow: "Courses",
    heading: "Find a course that fits your life",
    line: "Undergraduate, postgraduate, and flexible online study, all from UK universities.",
  },
  services: {
    image: photo.teamTable,
    eyebrow: "Services",
    heading: "Support from first question to first term",
    line: "Four things we do properly, and all of them are free for students.",
  },
  funding: {
    image: photo.laptopCoffee,
    eyebrow: "Funding",
    heading: "Student finance made simple",
    line: "Most eligible students pay nothing up front. We will walk you through it.",
  },
  apply: {
    image: photo.laptopDesk,
    eyebrow: "Apply now",
    heading: "Two easy steps to get going",
    line: "Answer four quick questions, then send your details and we will take it from there.",
  },
  contact: {
    image: photo.london,
    eyebrow: "Contact",
    heading: "We are glad to hear from you",
    line: "Message us on WhatsApp, call, or send the form. You will get a real answer.",
  },
  careers: {
    image: photo.handshakeClose,
    eyebrow: "Refer a student",
    heading: "Know someone ready to study?",
    line: "Introduce them to us and we will look after the rest.",
  },
  privacy: {
    image: photo.openBook,
    eyebrow: "Legal",
    heading: "Privacy policy",
    line: "How we look after the information you share with us.",
  },
  blog: {
    image: photo.readingBooks,
    eyebrow: "Blog",
    heading: "Guides and good advice",
    line: "Plain answers to the questions students ask us most.",
  },
} as const;

/* -------------------------------------------------------------- audience */

export const audience = [
  {
    icon: "Sparkles",
    image: photo.campusPath,
    title: "Starting fresh",
    body: "Many of the students we help once thought university was out of reach. We show them it is possible, and then we help them get there.",
  },
  {
    icon: "Clock",
    image: photo.studentLaptop,
    title: "Studying around work",
    body: "You have a job and a life. Part time, evening and online courses are built for exactly that, and we will find you one that fits.",
  },
  {
    icon: "Compass",
    image: photo.meeting,
    title: "Changing direction",
    body: "Our admissions team loves helping people move into something new. Tell us where you want to be and we will map the route.",
  },
  {
    icon: "CalendarCheck",
    image: photo.notebook,
    title: "Ready to begin",
    body: "Intakes run more than once a year, so there is usually a start date coming up sooner than you expect.",
  },
] as const;

/* --------------------------------------------------------------- services */

export const services = [
  {
    slug: "eligibility",
    icon: "ClipboardCheck",
    accent: "brand" as Accent,
    image: photo.notebook,
    title: "Free eligibility assessment",
    short: "A quick, friendly look at where you stand and what you can apply for.",
    body: "We look at your background, your work history and where you want to end up. Then we show you the courses that are genuinely open to you. It is free, it takes very little of your time, and there is no obligation to go further.",
    points: [
      "A clear answer about what you can apply for",
      "Course options matched to your goals",
      "Simple next steps you can act on straight away",
    ],
  },
  {
    slug: "interview-practice",
    icon: "MessagesSquare",
    accent: "sky" as Accent,
    image: photo.meeting,
    title: "Interview practice",
    short: "Walk into your university interview feeling ready and confident.",
    body: "Some courses invite you to an interview, and that is good news. It means they want to hear from you. We run practice sessions so you know what to expect, what to say about your experience, and how to settle your nerves before you go in.",
    points: [
      "A friendly mock interview with real questions",
      "Help turning your work experience into strong answers",
      "Clear feedback you can use right away",
      "Tips on nerves, timing and body language",
    ],
  },
  {
    slug: "funding",
    icon: "Wallet",
    accent: "ochre" as Accent,
    image: photo.laptopCoffee,
    title: "Student finance guidance",
    short: "Friendly help with tuition loans, maintenance loans and extra support.",
    body: "Most eligible UK students do not pay tuition up front. We explain how Student Finance England works in plain words, sit with you while you fill the form in, and keep an eye on the dates so nothing slips.",
    points: [
      "Step by step help with your application",
      "What the tuition and maintenance loans each cover",
      "Extra grants you may be able to claim",
      "A simple plan so you never miss a deadline",
    ],
  },
  {
    slug: "careers",
    icon: "Briefcase",
    accent: "coral" as Accent,
    image: photo.handshakeDesk,
    title: "Career and employability support",
    short: "Support that keeps going after you enrol, not just until you do.",
    body: "Getting in is the start of something good. We help you keep the momentum: balancing study with work, building a CV your degree strengthens, and talking about your experience with confidence.",
    points: [
      "CV and LinkedIn review",
      "Interview practice for jobs and placements",
      "Advice on balancing study, work and family",
      "Guidance on placements and graduate routes",
    ],
  },
] as const;

/* --------------------------------------------------------------- courses */
/* PLACEHOLDER: awaiting the course finder document. This is the temporary list. */

export const courseLevels = [
  {
    slug: "undergraduate",
    label: "Undergraduate",
    accent: "brand" as Accent,
    image: photo.gothic,
    title: "Bachelor's degrees and foundation years",
    body: "A full degree, usually three years, or four with a foundation year in front of it. The foundation year is the friendliest way in if you do not have A levels. It gets you ready and rolls straight into the degree.",
    meta: ["3 to 4 years", "Full time or part time", "Foundation entry available"],
  },
  {
    slug: "postgraduate",
    label: "Postgraduate",
    accent: "sky" as Accent,
    image: photo.lecture,
    title: "Master's degrees and top ups",
    body: "Already hold a degree or a diploma you could top up? A master's can move you into a new field or a bigger role. Some courses welcome strong professional experience too, and we will tell you if that is you.",
    meta: ["1 to 2 years", "Experience routes available", "January and September starts"],
  },
  {
    slug: "online",
    label: "Online and blended",
    accent: "ochre" as Accent,
    image: photo.studentLaptop,
    title: "Study around work and family",
    body: "Blended courses mix online learning with a small number of campus days. Fully online courses need no campus visits at all. Both give you the same degree, just on a timetable that fits your week.",
    meta: ["Evening and weekend study", "Low or no campus attendance", "Same award as on campus"],
  },
] as const;

export const subjectGroups = [
  {
    name: "Business and Management",
    accent: "brand" as Accent,
    image: photo.teamTable,
    examples: ["Business Management", "Accounting and Finance", "Project Management", "Supply Chain and Logistics", "Digital Marketing"],
  },
  {
    name: "Law and Criminology",
    accent: "sky" as Accent,
    image: photo.openBook,
    examples: ["LLB Law", "Criminology", "Policing and Criminal Investigation", "Criminology with Psychology"],
  },
  {
    name: "Computing and Technology",
    accent: "ochre" as Accent,
    image: photo.laptopDesk,
    examples: ["Computing", "Software Engineering", "Cyber Security", "Data Science"],
  },
  {
    name: "Health and Social Care",
    accent: "coral" as Accent,
    image: photo.studentsCollab,
    examples: ["Health and Social Care", "Healthcare Management", "Psychology and Counselling", "Nursing Studies"],
  },
  {
    name: "Education and Society",
    accent: "brand" as Accent,
    image: photo.library,
    examples: ["Education and Early Years", "Sociology", "Public Health", "Youth and Community Work"],
  },
  {
    name: "Creative and Media",
    accent: "sky" as Accent,
    image: photo.deskFlatlay,
    examples: ["Graphic Design", "Digital Media", "Hospitality and Tourism", "Sport and Exercise Science"],
  },
] as const;

/* -------------------------------------------------------------- partners */

export const partners = [
  { name: "London Metropolitan University", file: "london-metropolitan-university.webp" },
  { name: "Northumbria University", file: "northumbria-university.webp" },
  { name: "Ulster University", file: "ulster-university.webp" },
  { name: "University of Wales", file: "university-of-wales.webp" },
  { name: "University of Roehampton", file: "university-of-roehampton.webp" },
  { name: "University of South Wales", file: "university-of-south-wales.webp" },
  { name: "Middlesex University", file: "middlesex-university.webp" },
  { name: "University of Bolton", file: "university-of-bolton.webp" },
  { name: "Anglia Ruskin University", file: "anglia-ruskin-university.webp" },
  { name: "BPP University", file: "bpp-university.webp" },
  { name: "Bath Spa University", file: "bath-spa-university.webp" },
  { name: "Canterbury Christ Church University", file: "canterbury-christ-church-university.webp" },
  { name: "University of Central Lancashire, London", file: "university-of-central-lancashire-london.webp" },
  { name: "University of the West of Scotland", file: "university-of-the-west-of-scotland.webp" },
  { name: "The University of Law", file: "the-university-of-law.webp" },
  { name: "Demfront University", file: "demfront-university.webp" },
] as const;

/* --------------------------------------------------------------- reviews */
/* Sample reviews, written to show the layout. Swap for real, consented ones. */

export const reviews = [
  {
    quote: "They went through my options properly and helped me find a course that actually suits my week.",
    name: "Amara Okonkwo",
    course: "BSc Business Management",
    university: "London Metropolitan University",
    accent: "brand" as Accent,
  },
  {
    quote: "The student finance form felt huge until someone sat on the phone with me. We did it in one go.",
    name: "Daniel Whitfield",
    course: "LLB Law with Foundation Year",
    university: "The University of Law",
    accent: "sky" as Accent,
  },
  {
    quote: "I work nights, so I could only ever call in the evening. They always rang back when they said they would.",
    name: "Sofia Marchetti",
    course: "BSc Health and Social Care",
    university: "University of Bolton",
    accent: "ochre" as Accent,
  },
  {
    quote: "The practice interview made all the difference. I walked in knowing exactly what I wanted to say.",
    name: "Ryan Docherty",
    course: "BSc Computing",
    university: "University of the West of Scotland",
    accent: "coral" as Accent,
  },
  {
    quote: "Nobody in my family had been to university. My adviser explained everything kindly and never rushed me.",
    name: "Chloe Bennett",
    course: "BA Criminology",
    university: "Anglia Ruskin University",
    accent: "brand" as Accent,
  },
  {
    quote: "I applied from Lagos and they told me exactly what to send and in what order. It felt easy in the end.",
    name: "Tunde Adeyemi",
    course: "MSc Project Management",
    university: "Middlesex University",
    accent: "sky" as Accent,
  },
] as const;

/* ------------------------------------------------------------------- faq */

export const faqs = [
  {
    q: "What does Corvella Education do?",
    a: "We help you find a UK university course you can get on to, and then we support you through the whole application: your documents, your personal statement, interview practice and student finance. Our support is free for students.",
  },
  {
    q: "Can I study without A levels?",
    a: "Very often, yes. Universities welcome adult learners through foundation years, Access to Higher Education diplomas and relevant work experience. We will look at your background and show you which route suits you best.",
  },
  {
    q: "When do courses start?",
    a: "Most of our partner universities run more than one intake a year, commonly September and January, with some offering extra start dates. The earlier you get in touch, the more choice you have.",
  },
  {
    q: "Which universities can I apply to?",
    a: "We work with a network of established UK universities, and you can see them all on the home page. Which ones suit you depends on your subject, your background and the intake you are aiming for.",
  },
  {
    q: "How long does an application take?",
    a: "Once your documents are ready the application itself is quick. Offers usually come through in a few weeks, and student finance takes a little longer, so give yourself time before your chosen start date.",
  },
  {
    q: "Will I get help with the interview?",
    a: "Yes. If your course invites you to an interview we will run practice sessions with you, share the kinds of questions that come up, and help you talk about your experience with confidence.",
  },
  {
    q: "I have a full time job. Can I still study?",
    a: "Absolutely. Many of our students work full time. Part time, evening and online courses are designed for that, and we will be clear with you about the hours involved before you commit.",
  },
  {
    q: "Does Corvella charge students?",
    a: "No. Our advice, eligibility check and admissions support are free for students. We are funded by the universities we work with when a student enrols.",
  },
  {
    q: "Do you help international students?",
    a: "Yes. We support international applicants with course choice, entry requirements, English language evidence and the documents universities ask for.",
  },
] as const;

export const fundingFaqs = [
  {
    q: "When do I start repaying a student loan?",
    a: "Only after your course finishes, and only once you earn above the threshold the government sets. Until then you repay nothing.",
  },
  {
    q: "What if I do not earn above the threshold?",
    a: "Then you repay nothing in that period. Repayments follow your income, and any balance left after the set number of years is written off.",
  },
  {
    q: "How much comes out?",
    a: "A fixed percentage of what you earn above the threshold, not of your whole salary. If your income drops below it, repayments pause automatically.",
  },
  {
    q: "How is it collected?",
    a: "Through the PAYE system if you are employed, in the same way as tax, or through Self Assessment if you work for yourself.",
  },
  {
    q: "Will it affect my credit score?",
    a: "A student loan does not sit on your credit file the way commercial borrowing does. Lenders may count the repayment as an outgoing when you apply for a mortgage.",
  },
  {
    q: "Can I get funding if I studied before?",
    a: "Sometimes. Previous study can affect what you are entitled to, and there are exceptions. Tell us what you studied and we will look into it with you.",
  },
] as const;

/* ----------------------------------------------------------------- blog */
/* Kept in the project but unlinked from the navigation and the footer. */

export const posts = [
  { slug: "going-to-university-without-a-levels", title: "Going to university without A levels: the routes that actually work", excerpt: "Three recognised ways into a UK degree when you do not have A levels, and how to tell which one fits you.", category: "Getting in", date: "2026-07-14", readingTime: "6 min read", accent: "brand" as Accent, featured: true },
  { slug: "foundation-year-or-access-to-he", title: "Foundation year or Access to HE: how to actually choose", excerpt: "Both get you into a degree without A levels. They suit very different situations.", category: "Getting in", date: "2026-07-02", readingTime: "7 min read", accent: "sky" as Accent },
  { slug: "what-is-a-foundation-year", title: "What is a foundation year, and is it worth the extra year?", excerpt: "What you do in it and who genuinely benefits.", category: "Getting in", date: "2026-06-28", readingTime: "5 min read", accent: "ochre" as Accent },
  { slug: "studying-while-working-full-time", title: "Studying while working full time: an honest look at the hours", excerpt: "What a part time degree really asks of your week.", category: "Student life", date: "2026-06-09", readingTime: "7 min read", accent: "coral" as Accent },
  { slug: "maintenance-loan-explained", title: "The maintenance loan, explained without the jargon", excerpt: "What it covers and what decides the amount.", category: "Funding", date: "2026-05-22", readingTime: "6 min read", accent: "sky" as Accent },
  { slug: "student-loan-repayment-truth", title: "What repaying a student loan is actually like", excerpt: "It behaves far more like a graduate contribution than a debt.", category: "Funding", date: "2026-05-11", readingTime: "6 min read", accent: "ochre" as Accent },
  { slug: "changing-career-in-your-thirties", title: "Changing career in your thirties: does a degree still pay off?", excerpt: "How to work out whether a degree is the right move for the field you want.", category: "Careers", date: "2026-05-05", readingTime: "8 min read", accent: "coral" as Accent },
  { slug: "personal-statement-mature-students", title: "Writing a personal statement when your experience is not academic", excerpt: "How to get your work history onto the page.", category: "Getting in", date: "2026-04-18", readingTime: "6 min read", accent: "brand" as Accent },
  { slug: "what-universities-ask-mature-students", title: "What UK universities actually ask mature students for", excerpt: "The document list is shorter than people expect.", category: "Getting in", date: "2026-04-03", readingTime: "5 min read", accent: "sky" as Accent },
] as const;

export type Post = (typeof posts)[number];
