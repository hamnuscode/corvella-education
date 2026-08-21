export const site = {
  name: "Corvella Education",
  shortName: "Corvella",
  tagline: "UK university admissions, made straightforward.",
  url: "https://corvella.vercel.app", // PLACEHOLDER: swap for the real domain when you have one
  parent: {
    name: "FBA UK Ltd",
    url: "https://www.fbaukltd.com",
    line: "Corvella Education is a partner agency of FBA UK Ltd and works with FBA's network of UK partner universities.",
  },
  // Phone numbers use Ofcom's ranges reserved for drama and fiction (020 7946 0xxx
  // and 07700 900xxx), so they can never ring a real person. Swap them, the
  // address and the company numbers for the real ones before launch.
  contact: {
    phone: "020 7946 0412",
    phoneHref: "tel:+442079460412",
    whatsapp: "+44 7700 900412",
    whatsappHref: "https://wa.me/447700900412",
    email: "hello@corvellaeducation.co.uk",
    emailHref: "mailto:hello@corvellaeducation.co.uk",
    referralEmail: "referrals@corvellaeducation.co.uk",
    address: ["Suite 214, Blackwall Studios", "34 Admirals Way", "London E14 9UP"],
    hours: "Monday to Friday, 10am to 7pm",
  },
  company: {
    registration:
      "Corvella Education Ltd is registered in England & Wales, company number 14027318.",
    vat: "VAT 421 8830 47",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/services", label: "Services" },
  { href: "/funding", label: "Funding" },
  { href: "/blog", label: "Blog" },
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
    title: "Company",
    links: [
      { href: "/#about", label: "About Corvella" },
      { href: "/services", label: "Services" },
      { href: "/careers", label: "Become a consultant" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { href: "/contact", label: "Contact us" },
      { href: "/apply", label: "Apply now" },
      { href: "/privacy", label: "Privacy policy" },
    ],
  },
] as const;

/* ---------------------------------------------------------------- audience */

export const ACCENTS = ["brand", "sky", "ochre", "coral"] as const;
export type Accent = (typeof ACCENTS)[number];

/** Hex per accent, for inline --accent on cards. Keep in step with globals.css. */
export const accentHex: Record<Accent, string> = {
  brand: "#2b5f92",
  sky: "#0f7490",
  ochre: "#8a5f14",
  coral: "#b8442c",
};

export const audience = [
  {
    icon: "GraduationCap",
    accent: "brand" as Accent,
    title: "No formal qualifications",
    body: "You left school without A levels, or your grades are long behind you. There are recognised routes into a degree that do not need them.",
  },
  {
    icon: "Clock",
    accent: "sky" as Accent,
    title: "Working full time",
    body: "You have a job, a commute and bills. Part time, evening and blended courses are built for people in exactly that position.",
  },
  {
    icon: "Compass",
    accent: "ochre" as Accent,
    title: "Changing career",
    body: "You want to move into law, healthcare, computing or business. We help you pick the course that actually leads there.",
  },
  {
    icon: "CalendarCheck",
    accent: "coral" as Accent,
    title: "Ready to start soon",
    body: "Intakes run more than once a year. If you want to start at the next one, we will tell you honestly whether it is realistic.",
  },
] as const;

/* --------------------------------------------------------------- services */

export const services = [
  {
    slug: "eligibility",
    icon: "ClipboardCheck",
    accent: "brand" as Accent,
    title: "Free eligibility assessment",
    short: "A quick, honest read on where you stand before you commit to anything.",
    body: "We look at your age, your work history, any study you have done and what you want to do next. Then we tell you which courses you have a realistic chance at, and which you do not. It costs nothing and it does not commit you to applying.",
    points: [
      "A clear yes, no or not yet, with the reason behind it",
      "Course options matched to your goal, not to a sales target",
      "Advice on what to do if you are not eligible this year",
    ],
  },
  {
    slug: "admissions",
    icon: "FileText",
    accent: "sky" as Accent,
    title: "Full admissions support",
    short: "We handle the paperwork with you, from first form to confirmed place.",
    body: "Applications fail on small things: a missing reference, an ID that does not match, a personal statement written the night before. We work through the whole application with you, check every document before it goes in, and prepare you for the university interview if there is one.",
    points: [
      "Document checklist and review before submission",
      "Help writing and editing your personal statement",
      "Interview preparation and a practice run",
      "We chase the university so you do not have to",
    ],
  },
  {
    slug: "funding",
    icon: "Wallet",
    accent: "ochre" as Accent,
    title: "Student finance and funding guidance",
    short: "Plain guidance on tuition loans, maintenance loans and grants.",
    body: "Most eligible UK students do not pay tuition up front. We explain how the Student Finance England application works, what a maintenance loan actually covers, and which deadlines you cannot miss. We do not handle your money and we are not financial advisers. We help you understand the process and fill it in correctly.",
    points: [
      "Step by step help with the Student Finance England form",
      "What the tuition loan and maintenance loan each cover",
      "Grants and extra support you may be able to claim",
      "A deadline plan so nothing gets missed",
    ],
  },
  {
    slug: "careers",
    icon: "Briefcase",
    accent: "coral" as Accent,
    title: "Career and employability support",
    short: "Support that carries on after you enrol, not just until you do.",
    body: "Getting in is the start. We help you keep going: how to balance study with work, how to build a CV that uses your degree, and how to talk about your experience in an interview. If you want to change field, we help you plan the steps.",
    points: [
      "CV and LinkedIn review",
      "Interview practice and feedback",
      "Advice on balancing study, work and family",
      "Guidance on placements and graduate routes",
    ],
  },
] as const;

/* --------------------------------------------------------------- courses */

export const courseLevels = [
  {
    slug: "undergraduate",
    label: "Undergraduate",
    title: "Bachelor's degrees and foundation years",
    body: "A full undergraduate degree, usually three years, or four if you start with a foundation year. The foundation year is the common route in for people without A levels. It brings you up to first year standard and then rolls straight into the degree.",
    meta: ["3 to 4 years", "Full time or part time", "Foundation entry available"],
  },
  {
    slug: "postgraduate",
    label: "Postgraduate",
    title: "Master's degrees and top ups",
    body: "If you already hold a degree, or a diploma that can be topped up, a master's can move you into a new field or a senior role. Some courses accept significant professional experience in place of a first degree, and we will tell you if that applies to you.",
    meta: ["1 to 2 years", "Experience routes on some courses", "January and September starts"],
  },
  {
    slug: "online",
    label: "Online and blended",
    title: "Study around work and family",
    body: "Blended courses mix online learning with a small number of campus days. Fully online courses need no campus attendance at all. Both are real degrees from real universities. They simply fit around a job instead of replacing it.",
    meta: ["Evening and weekend study", "Low campus attendance", "Same award as on campus"],
  },
] as const;

export const subjectAreas = [
  "Business Management",
  "Accounting and Finance",
  "Computing and IT",
  "Cyber Security",
  "Law (LLB)",
  "Criminology",
  "Policing and Criminal Investigation",
  "Psychology and Counselling",
  "Health and Social Care",
  "Healthcare Management",
  "Nursing Studies",
  "Project Management",
  "Supply Chain and Logistics",
  "Digital Marketing",
  "Graphic Design",
  "Hospitality and Tourism",
  "Education and Early Years",
  "Sport and Exercise Science",
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

/* ----------------------------------------------------------------- stats */
/* Confirm each of these against your own records before launch. Partner
   universities is counted from the FBA UK Ltd partner list. */

export const stats = [
  { value: 2021, suffix: "", label: "Year established" },
  { value: 1400, suffix: "+", label: "Students supported", accent: "sky" as Accent },
  { value: 45, suffix: "+", label: "Courses available", accent: "ochre" as Accent },
  { value: 16, suffix: "", label: "Partner universities", accent: "coral" as Accent },
] as const;

/* ---------------------------------------------------------- testimonials */

export const testimonials = [
  {
    quote:
      "I had not been in a classroom for eleven years. Corvella went through my options properly and did not push me towards the first thing on the list.",
    name: "Amara Okonkwo",
    course: "BSc Business Management",
    university: "London Metropolitan University",
    accent: "brand" as Accent,
  },
  {
    quote:
      "The student finance form was the part I was dreading. Someone sat on the phone with me and we did the whole thing in one go.",
    name: "Daniel Whitfield",
    course: "LLB Law with Foundation Year",
    university: "The University of Law",
    accent: "sky" as Accent,
  },
  {
    quote:
      "I work nights, so I could only ever call in the evening. They always rang back when they said they would.",
    name: "Sofia Marchetti",
    course: "BSc Health and Social Care",
    university: "University of Bolton",
    accent: "ochre" as Accent,
  },
  {
    quote:
      "They told me I was not ready for the September intake and explained exactly what to fix. I started in January instead and I am glad they were straight with me.",
    name: "Ryan Docherty",
    course: "BSc Computing",
    university: "University of the West of Scotland",
    accent: "coral" as Accent,
  },
  {
    quote:
      "Nobody in my family has been to university, so I had no idea what any of it meant. My adviser explained everything twice without making me feel stupid.",
    name: "Chloe Bennett",
    course: "BA Criminology",
    university: "Anglia Ruskin University",
    accent: "brand" as Accent,
  },
  {
    quote:
      "I applied from Lagos and the paperwork looked impossible from where I was sitting. They told me exactly what to send and in what order.",
    name: "Tunde Adeyemi",
    course: "MSc Project Management",
    university: "Middlesex University",
    accent: "sky" as Accent,
  },
] as const;

export const ratings = [
  { source: "Trustpilot", score: "4.8" },
  { source: "Google", score: "4.9" },
] as const;

/* ------------------------------------------------------------------- faq */

export const faqs = [
  {
    q: "What does Corvella Education actually do?",
    a: "We are an education consultancy. We help you find a UK university course you can get on to, then we support you through the whole application: documents, personal statement, interview and student finance. Our support for students is free, because we are funded by the universities we work with.",
  },
  {
    q: "Can I really study without A levels?",
    a: "In many cases, yes. Universities can accept an Access to Higher Education diploma, a foundation year, relevant work experience, or a mix of these. A foundation year is the most common route: it is an extra year that sits in front of the degree and prepares you for it. We will tell you which route fits your situation.",
  },
  {
    q: "When do courses start?",
    a: "Most partner universities run more than one intake a year, commonly September and January, with some running additional starts. Places fill up and student finance takes time to process, so the earlier you check your eligibility the more options you have.",
  },
  {
    q: "Which universities do you work with?",
    a: "Corvella works through FBA UK Ltd's partner network of UK universities. You can see the full list on our Partners page. Which ones are open to you depends on your subject, your background and the intake you are aiming for.",
  },
  {
    q: "How long does an application take?",
    a: "The application itself is usually quick once your documents are ready. Getting an offer typically takes a few weeks, and student finance can take longer, so give yourself time before the intake you want. We will give you a realistic timeline for your specific course.",
  },
  {
    q: "How much can I get towards living costs?",
    a: "Eligible students can apply for a maintenance loan from Student Finance England to help with rent, travel and daily costs. The amount depends on where you live, whether you live with your parents and your household income. We will help you work out your likely entitlement and complete the form correctly.",
  },
  {
    q: "I have a full time job. Can I still study?",
    a: "Yes. Many of our students work full time. Part time, evening and blended courses are designed for that, and some courses need only a small number of campus days. We will be honest with you about the weekly hours involved before you commit.",
  },
  {
    q: "Do I have to pay Corvella anything?",
    a: "No. Our advice, eligibility check and admissions support are free for students. We are paid by the universities in the partner network when a student enrols. You still pay your own tuition, which for most eligible students is covered by a tuition fee loan.",
  },
  {
    q: "Do you help international students?",
    a: "Yes. We support international applicants with course choice, entry requirements, English language evidence and the documents universities ask for. Visa decisions are made by the Home Office and we cannot influence them, but we will make sure your university paperwork is right.",
  },
] as const;

export const fundingFaqs = [
  {
    q: "When do I start repaying a student loan?",
    a: "You start repaying only after your course finishes and only once you earn above the repayment threshold set by the government. Until then you repay nothing.",
  },
  {
    q: "What happens if I never earn above the threshold?",
    a: "You repay nothing in that period. Repayments are tied to income, not to a fixed monthly bill, and any remaining balance is written off after the set number of years.",
  },
  {
    q: "How much is taken out?",
    a: "You repay a fixed percentage of what you earn above the threshold, not a percentage of your whole salary. If your income drops below the threshold, repayments stop automatically.",
  },
  {
    q: "How is the money collected?",
    a: "For employed people it comes out through the PAYE system, in the same way as tax. If you are self employed it goes through your Self Assessment return.",
  },
  {
    q: "Does a student loan affect my credit score?",
    a: "A student loan does not appear on your credit file in the same way as commercial borrowing. Lenders may consider your repayments as part of your outgoings when you apply for a mortgage.",
  },
  {
    q: "Can I get funding if I studied before?",
    a: "Sometimes. Previous study can reduce what you are entitled to, but there are exceptions, and a foundation year or a change of subject can affect the answer. Tell us what you studied and we will look into it.",
  },
] as const;

/* ----------------------------------------------------------------- blog */

export const posts = [
  {
    slug: "going-to-university-without-a-levels",
    title: "Going to university without A levels: the routes that actually work",
    excerpt:
      "Three recognised ways into a UK degree when you do not have A levels, and how to tell which one fits you.",
    category: "Getting in",
    date: "2026-07-14",
    readingTime: "6 min read",
    accent: "brand" as Accent,
    featured: true,
  },
  {
    slug: "foundation-year-or-access-to-he",
    title: "Foundation year or Access to HE: how to actually choose",
    excerpt:
      "Both get you into a degree without A levels. They suit very different situations, and the difference is mostly about risk and timing.",
    category: "Getting in",
    date: "2026-07-02",
    readingTime: "7 min read",
    accent: "sky" as Accent,
  },
  {
    slug: "what-is-a-foundation-year",
    title: "What is a foundation year, and is it worth the extra year?",
    excerpt:
      "A foundation year adds twelve months and a year of fees to your degree. Here is what you do in it and who genuinely benefits.",
    category: "Getting in",
    date: "2026-06-28",
    readingTime: "5 min read",
    accent: "ochre" as Accent,
  },
  {
    slug: "studying-while-working-full-time",
    title: "Studying while working full time: an honest look at the hours",
    excerpt:
      "What a part time degree really asks of your week, and the four questions to answer before you enrol.",
    category: "Student life",
    date: "2026-06-09",
    readingTime: "7 min read",
    accent: "coral" as Accent,
  },
  {
    slug: "maintenance-loan-explained",
    title: "The maintenance loan, explained without the jargon",
    excerpt:
      "What it covers, what decides the amount, and the parts of the application people most often get wrong.",
    category: "Funding",
    date: "2026-05-22",
    readingTime: "6 min read",
    accent: "sky" as Accent,
  },
  {
    slug: "student-loan-repayment-truth",
    title: "What repaying a student loan is actually like",
    excerpt:
      "It behaves far more like a graduate contribution than a debt, and understanding that changes the decision.",
    category: "Funding",
    date: "2026-05-11",
    readingTime: "6 min read",
    accent: "ochre" as Accent,
  },
  {
    slug: "changing-career-in-your-thirties",
    title: "Changing career in your thirties: does a degree still pay off?",
    excerpt:
      "How to work out whether a degree is the right move for the field you want, or whether something shorter will do.",
    category: "Careers",
    date: "2026-05-05",
    readingTime: "8 min read",
    accent: "coral" as Accent,
  },
  {
    slug: "personal-statement-mature-students",
    title: "Writing a personal statement when your experience is not academic",
    excerpt:
      "Work history is an asset in a mature student application. Here is how to get it onto the page.",
    category: "Getting in",
    date: "2026-04-18",
    readingTime: "6 min read",
    accent: "brand" as Accent,
  },
  {
    slug: "what-universities-ask-mature-students",
    title: "What UK universities actually ask mature students for",
    excerpt:
      "The document list is shorter than people expect, and two items cause almost all the delays.",
    category: "Getting in",
    date: "2026-04-03",
    readingTime: "5 min read",
    accent: "sky" as Accent,
  },
] as const;

export type Post = (typeof posts)[number];
