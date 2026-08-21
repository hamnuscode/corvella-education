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
  // PLACEHOLDER: replace every contact detail below with the real ones.
  contact: {
    phone: "[020 0000 0000]",
    phoneHref: "tel:+442000000000",
    whatsapp: "[+44 7000 000000]",
    whatsappHref: "https://wa.me/440000000000",
    email: "[hello@corvella.example]",
    emailHref: "mailto:hello@corvella.example",
    referralEmail: "[referrals@corvella.example]",
    address: ["[Suite 00, Building Name]", "[Street]", "[London, E00 0XX]"],
    hours: "Monday to Friday, [10am to 6pm]",
  },
  company: {
    registration: "Corvella Education Ltd is registered in England & Wales, company number [00000000].",
    vat: "VAT [000000000]",
  },
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/services", label: "Services" },
  { href: "/funding", label: "Funding" },
  { href: "/partners", label: "Partners" },
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
      { href: "/partners", label: "University partners" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Corvella" },
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

export const audience = [
  {
    icon: "GraduationCap",
    title: "No formal qualifications",
    body: "You left school without A levels, or your grades are long behind you. There are recognised routes into a degree that do not need them.",
  },
  {
    icon: "Clock",
    title: "Working full time",
    body: "You have a job, a commute and bills. Part time, evening and blended courses are built for people in exactly that position.",
  },
  {
    icon: "Compass",
    title: "Changing career",
    body: "You want to move into law, healthcare, computing or business. We help you pick the course that actually leads there.",
  },
  {
    icon: "CalendarCheck",
    title: "Ready to start soon",
    body: "Intakes run more than once a year. If you want to start at the next one, we will tell you honestly whether it is realistic.",
  },
] as const;

/* --------------------------------------------------------------- services */

export const services = [
  {
    slug: "eligibility",
    icon: "ClipboardCheck",
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
/* PLACEHOLDER: every number here needs replacing with a real, verifiable figure. */

export const stats = [
  { value: 2021, suffix: "", label: "Year established", note: "PLACEHOLDER" },
  { value: 0, suffix: "+", label: "Students supported", note: "PLACEHOLDER: real figure needed", placeholder: "[X]" },
  { value: 0, suffix: "+", label: "Courses available", note: "PLACEHOLDER: real figure needed", placeholder: "[X]" },
  { value: 16, suffix: "", label: "Partner universities", note: "Counted from the FBA UK Ltd partner list" },
] as const;

/* ---------------------------------------------------------- testimonials */
/* PLACEHOLDER: sample quotes written for layout. Replace with real, consented quotes. */

export const testimonials = [
  {
    quote:
      "I had not been in a classroom for eleven years. Corvella went through my options properly and did not push me towards the first thing on the list.",
    name: "[Student name]",
    detail: "[Course], [University]",
  },
  {
    quote:
      "The student finance form was the part I was dreading. Someone sat on the phone with me and we did it in one go.",
    name: "[Student name]",
    detail: "[Course], [University]",
  },
  {
    quote:
      "I work nights, so I could only ever call in the evening. They always called back when they said they would.",
    name: "[Student name]",
    detail: "[Course], [University]",
  },
  {
    quote:
      "They told me I was not ready for the September intake and explained exactly what to fix. I started in January instead.",
    name: "[Student name]",
    detail: "[Course], [University]",
  },
] as const;

export const ratings = [
  { source: "Trustpilot", score: "[4.X]", note: "PLACEHOLDER" },
  { source: "Google", score: "[4.X]", note: "PLACEHOLDER" },
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
/* PLACEHOLDER: sample posts for layout. Replace with real articles. */

export const posts = [
  {
    slug: "going-to-university-without-a-levels",
    title: "Going to university without A levels: the routes that actually work",
    excerpt:
      "Three recognised ways into a UK degree when you do not have A levels, and how to tell which one fits you.",
    category: "Getting in",
    date: "2026-07-14",
    readingTime: "6 min read",
    featured: true,
  },
  {
    slug: "what-is-a-foundation-year",
    title: "What is a foundation year, and is it worth the extra year?",
    excerpt:
      "A foundation year adds twelve months to your degree. Here is what you do in it and who genuinely benefits.",
    category: "Getting in",
    date: "2026-06-28",
    readingTime: "5 min read",
  },
  {
    slug: "studying-while-working-full-time",
    title: "Studying while working full time: an honest look at the hours",
    excerpt:
      "What a part time degree really asks of your week, and the questions to answer before you enrol.",
    category: "Student life",
    date: "2026-06-09",
    readingTime: "7 min read",
  },
  {
    slug: "maintenance-loan-explained",
    title: "The maintenance loan, explained without the jargon",
    excerpt:
      "What it covers, what decides the amount, and the parts of the form people most often get wrong.",
    category: "Funding",
    date: "2026-05-22",
    readingTime: "6 min read",
  },
  {
    slug: "changing-career-in-your-thirties",
    title: "Changing career in your thirties: does a degree still pay off?",
    excerpt:
      "How to work out whether a degree is the right move for the field you want, or whether something shorter will do.",
    category: "Careers",
    date: "2026-05-05",
    readingTime: "8 min read",
  },
  {
    slug: "personal-statement-mature-students",
    title: "Writing a personal statement when your experience is not academic",
    excerpt:
      "Work history is an asset in a mature student application. Here is how to put it on the page.",
    category: "Getting in",
    date: "2026-04-18",
    readingTime: "5 min read",
  },
] as const;

export type Post = (typeof posts)[number];
