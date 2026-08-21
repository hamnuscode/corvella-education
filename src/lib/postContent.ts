type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

const sample: Block[] = [
  {
    type: "p",
    text: "This is sample article content, written so you can see how a real post sits in the layout. Replace it with your own writing.",
  },
  { type: "h2", text: "A section heading" },
  {
    type: "p",
    text: "Body copy runs at a comfortable measure so it stays readable on a phone and on a wide screen. Keep paragraphs short and answer the question in the title early.",
  },
  {
    type: "ul",
    items: [
      "Lists work well for routes, requirements and deadlines",
      "Keep each item to one idea",
      "Link out to the relevant page on the site",
    ],
  },
  {
    type: "p",
    text: "Close with a clear next step. On this site that is almost always the eligibility check.",
  },
];

const written: Record<string, Block[]> = {
  "going-to-university-without-a-levels": [
    {
      type: "p",
      text: "If you did not take A levels, or you took them a long time ago and they did not go well, you have probably assumed university is closed to you. It usually is not. UK universities accept adult applicants through several routes, and most of them do not involve going back to sixth form.",
    },
    {
      type: "p",
      text: "Here are the three that come up most often, and how to tell which one is yours.",
    },
    { type: "h2", text: "1. A foundation year" },
    {
      type: "p",
      text: "A foundation year is an extra year attached to the front of a degree. You apply once, you study the foundation year, and then you continue straight into the first year without applying again. It is designed for people who do not meet the standard entry requirements, and it is the most common route for the students we work with.",
    },
    {
      type: "p",
      text: "It adds a year and a year of fees, which is a real cost. What you get for it is a place, a structured reintroduction to studying, and a much lower chance of struggling in year one.",
    },
    { type: "h2", text: "2. An Access to Higher Education diploma" },
    {
      type: "p",
      text: "An Access to HE diploma is a one year qualification built specifically for adults returning to education. It is widely recognised by UK universities and you can often study it part time at a local college, sometimes in the evenings.",
    },
    {
      type: "p",
      text: "It suits people who want to be certain they can handle academic study before committing to a full degree, and people who want to keep their options open across several universities.",
    },
    { type: "h2", text: "3. Entry on work experience" },
    {
      type: "p",
      text: "Some courses will consider significant, relevant professional experience in place of formal qualifications. This is more common in business, health and social care, and management subjects. You may be asked for a personal statement, an interview, or a short piece of written work.",
    },
    {
      type: "quote",
      text: "Nine years running a shop floor is evidence of exactly the things a business degree asks for. It just has to be written down in the right way.",
    },
    { type: "h2", text: "Which one is yours?" },
    {
      type: "ul",
      items: [
        "You want to start as soon as possible and go straight through: look at a foundation year",
        "You want to test yourself first, or keep several universities open: look at Access to HE",
        "You have years of relevant work behind you and a clear subject: ask about experience entry",
      ],
    },
    {
      type: "p",
      text: "If you are not sure, run the eligibility check. It takes about a minute and it will tell you which of these three is realistic for your situation.",
    },
  ],
};

export function getPostBody(slug: string): { blocks: Block[]; isSample: boolean } {
  const blocks = written[slug];
  return blocks ? { blocks, isSample: false } : { blocks: sample, isSample: true };
}

export type { Block };
