type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

const written: Record<string, Block[]> = {
  "going-to-university-without-a-levels": [
    { type: "p", text: "If you did not take A levels, or you took them a long time ago and they did not go well, you have probably assumed university is closed to you. It usually is not. UK universities accept adult applicants through several routes, and most of them do not involve going back to sixth form." },
    { type: "p", text: "Here are the three that come up most often, and how to tell which one is yours." },
    { type: "h2", text: "1. A foundation year" },
    { type: "p", text: "A foundation year is an extra year attached to the front of a degree. You apply once, you study the foundation year, and then you continue straight into the first year without applying again. It is designed for people who do not meet the standard entry requirements, and it is the most common route for the students we work with." },
    { type: "p", text: "It adds a year and a year of fees, which is a real cost. What you get for it is a place, a structured reintroduction to studying, and a much lower chance of struggling in year one." },
    { type: "h2", text: "2. An Access to Higher Education diploma" },
    { type: "p", text: "An Access to HE diploma is a one year qualification built specifically for adults returning to education. It is widely recognised by UK universities and you can often study it part time at a local college, sometimes in the evenings." },
    { type: "p", text: "It suits people who want to be certain they can handle academic study before committing to a full degree, and people who want to keep their options open across several universities." },
    { type: "h2", text: "3. Entry on work experience" },
    { type: "p", text: "Some courses will consider significant, relevant professional experience in place of formal qualifications. This is more common in business, health and social care, and management subjects. You may be asked for a personal statement, an interview, or a short piece of written work." },
    { type: "quote", text: "Nine years running a shop floor is evidence of exactly the things a business degree asks for. It just has to be written down in the right way." },
    { type: "h2", text: "Which one is yours?" },
    { type: "ul", items: [
      "You want to start as soon as possible and go straight through: look at a foundation year",
      "You want to test yourself first, or keep several universities open: look at Access to HE",
      "You have years of relevant work behind you and a clear subject: ask about experience entry",
    ]},
    { type: "p", text: "If you are not sure, run the eligibility check. It takes about a minute and it will tell you which of these three is realistic for your situation." },
  ],

  "foundation-year-or-access-to-he": [
    { type: "p", text: "These are the two main ways into a UK degree without A levels, and people often treat them as interchangeable. They are not. Choosing between them is mostly a question of how much risk you want to carry and how quickly you want to move." },
    { type: "h2", text: "The short version" },
    { type: "p", text: "A foundation year is part of a degree. You apply to one university, get one offer, and the foundation year rolls into year one at that same university. An Access to HE diploma is a standalone qualification. You study it at a college, come out with a diploma, and then apply to universities with it." },
    { type: "h2", text: "Where the foundation year wins" },
    { type: "ul", items: [
      "One application instead of two, and the university place is secured from the start",
      "You are a university student from day one, with the same library, support and student finance",
      "Teaching is aimed at the exact degree you are heading into",
      "Usually easier to fit around work if the university runs evening or blended delivery",
    ]},
    { type: "p", text: "The trade off is commitment. You are tied to that university and broadly to that subject area. If you change your mind in month four, changing course is harder than it would be on an Access diploma." },
    { type: "h2", text: "Where Access to HE wins" },
    { type: "ul", items: [
      "You finish with a recognised qualification you can take to any university",
      "You can test whether you actually enjoy studying before committing to three more years",
      "Often cheaper, and if you are 19 or over you may be able to use an Advanced Learner Loan",
      "Colleges are usually local, which matters if travel is the constraint",
    ]},
    { type: "p", text: "The trade off is uncertainty. Finishing an Access diploma does not guarantee a place anywhere. You still have to apply and compete, and some competitive courses will want specific grades from it." },
    { type: "h2", text: "A rough rule" },
    { type: "quote", text: "If you know what you want to study and you want the place locked in, take the foundation year. If you are still deciding, or you want a specific competitive university, take Access." },
    { type: "h2", text: "The thing people forget" },
    { type: "p", text: "Previous study affects student finance. If you have started a degree before, or already hold one, your funding entitlement may be reduced, and a foundation year counts towards that. This catches people out often enough that it is worth checking before you choose. Tell us what you have studied and we will look into it with you." },
  ],

  "what-is-a-foundation-year": [
    { type: "p", text: "A foundation year, sometimes called year zero or an integrated foundation year, is an extra year of study that sits in front of a degree. Four years instead of three. It exists for people who do not meet the standard entry requirements but can clearly do the work." },
    { type: "h2", text: "What you actually do in it" },
    { type: "p", text: "It is not a repeat of school. The year is built to close the gap between where you are and where first year starts, and roughly half of it is about how to study rather than what to study." },
    { type: "ul", items: [
      "Subject grounding: the core concepts your degree will assume you already have",
      "Academic writing: how to structure an argument and reference sources properly",
      "Research skills: finding sources, judging them, and not relying on the first search result",
      "Maths and data, if your subject needs it, taught from a genuinely low starting point",
    ]},
    { type: "h2", text: "Do you have to apply again afterwards?" },
    { type: "p", text: "No, and this is the main practical advantage. Passing the foundation year progresses you into year one of the degree at the same university. One application, one offer, one continuous course." },
    { type: "h2", text: "Is the extra year worth it?" },
    { type: "p", text: "It costs a year of your life and a year of tuition, which for most eligible students is covered by a tuition fee loan rather than paid up front. Whether that is worth it depends on the alternative." },
    { type: "quote", text: "If the alternative is not going at all, a foundation year is worth it. If the alternative is a one year Access diploma that would get you into the same degree, the maths is closer." },
    { type: "p", text: "It is most clearly worth it if you have been out of education for years, if your confidence rather than your ability is the barrier, or if you want the security of a confirmed university place before you give anything up." },
    { type: "h2", text: "Who tends to struggle with it" },
    { type: "p", text: "People who treat it as an easy year. It is assessed, you have to pass it, and the workload is real. It is also worth checking the progression requirement: some courses need more than a bare pass to move into year one. Ask what that threshold is before you enrol." },
  ],

  "studying-while-working-full-time": [
    { type: "p", text: "Plenty of people do it. It is also the thing most likely to go wrong, and it usually goes wrong for practical reasons rather than academic ones. Here is what the week actually looks like." },
    { type: "h2", text: "The hours" },
    { type: "p", text: "A part time degree is typically half the intensity of a full time one, which in practice means somewhere around fifteen to twenty hours a week including teaching, reading and assignments. That is not evenly spread. Assessment weeks are much heavier than teaching weeks." },
    { type: "p", text: "Add that to a full time job and you are looking at a long week. It is manageable, but only if the time genuinely exists rather than being borrowed from sleep." },
    { type: "h2", text: "Four questions to answer honestly first" },
    { type: "ul", items: [
      "When exactly will you study? Name the days and the hours, not a vague plan",
      "Can you get three or four days off across the year for assessment deadlines?",
      "Who else depends on your time, and have you actually spoken to them about it?",
      "What is your plan for the month everything lands at once, because it will",
    ]},
    { type: "h2", text: "What makes the difference" },
    { type: "p", text: "The people who finish tend to have three things in common. They study at the same times every week rather than whenever there is a gap. They tell their employer early, because a supportive manager makes a large difference and an ambushed one does not. And they start assignments in the first week they are set, not the last." },
    { type: "quote", text: "Nobody fails because the work is too hard. They fail because three deadlines land in the same fortnight as a stocktake." },
    { type: "h2", text: "Choose the delivery pattern deliberately" },
    { type: "p", text: "Some courses need one campus day a week. Some need one weekend a month. Some are fully online with no attendance at all. These are very different commitments and the difference matters more than the course content when you are working. Ask about the pattern before you ask about the modules." },
    { type: "h2", text: "It is fine to go slower" },
    { type: "p", text: "A degree taken over five or six years is still a degree. If the choice is between a slower route and no route, take the slower route." },
  ],

  "maintenance-loan-explained": [
    { type: "p", text: "The tuition fee loan covers your course. The maintenance loan is the separate one that helps with living: rent, travel, food, childcare costs that do not have their own scheme. It is paid to you, in instalments, usually three times a year at the start of each term." },
    { type: "h2", text: "What decides the amount" },
    { type: "p", text: "Three things, mostly." },
    { type: "ul", items: [
      "Where you live while studying, with London rates higher than the rest of the UK",
      "Whether you live with your parents, which reduces the amount",
      "Your household income, which for most mature students means your own income, and your partner's if you have one",
    ]},
    { type: "p", text: "We have deliberately not printed the rates here. They are set by government and change every year, and a stale number on a consultancy website helps nobody. Check the current figures on GOV.UK, or ask us and we will look them up with you." },
    { type: "h2", text: "The part people get wrong" },
    { type: "p", text: "If you are 25 or over, or you have supported yourself for long enough, you are usually assessed as an independent student. That means your parents' income is irrelevant, and you do not need to chase them for financial details." },
    { type: "quote", text: "A lot of mature applicants assume they have to ask a parent they may not be in contact with for payslips. In most cases they do not." },
    { type: "h2", text: "The four mistakes we see most" },
    { type: "ul", items: [
      "Applying too late. It can take weeks to process, and it is not tied to your university offer, so apply as soon as applications open",
      "Getting the course or university details slightly wrong, which stalls the whole application",
      "Missing the evidence request. Student Finance England will ask for documents and the clock does not stop while you ignore the email",
      "Not telling them when circumstances change, which causes over or under payment later",
    ]},
    { type: "h2", text: "Extra support that is not a loan" },
    { type: "p", text: "There are separate grants for students with children, adult dependants, or a disability or long term condition. These are not repaid and they are applied for separately. Ask specifically about them, because they are easy to miss." },
  ],

  "student-loan-repayment-truth": [
    { type: "p", text: "The word loan does a lot of damage here. A student loan does not behave like a credit card or a car finance agreement, and if you judge it by those it looks far more frightening than it is." },
    { type: "h2", text: "You repay nothing until two things are true" },
    { type: "p", text: "Your course has finished, and you are earning above the repayment threshold set by government. Until both are true, you repay nothing at all. Not a reduced amount, nothing." },
    { type: "h2", text: "You repay a share of what you earn, not a fixed bill" },
    { type: "p", text: "Repayments are a percentage of your income above the threshold, not a percentage of everything you earn. If your income falls back below the threshold, repayments stop automatically. There is no arrears process, no default, and no debt collector." },
    { type: "quote", text: "It behaves far more like a graduate contribution collected through the tax system than like borrowing money." },
    { type: "h2", text: "It comes out like tax" },
    { type: "p", text: "If you are employed, it is taken through PAYE alongside income tax and National Insurance, so you never have to make a payment yourself. If you are self employed it goes through your Self Assessment return." },
    { type: "h2", text: "It gets written off" },
    { type: "p", text: "Any balance remaining after the set number of years is cancelled. The exact period depends on which repayment plan you are on, which depends on when and where you started your course. Many people never repay the full amount, and that is how the system is designed to work." },
    { type: "h2", text: "What about my mortgage?" },
    { type: "p", text: "A student loan does not sit on your credit file in the way commercial borrowing does, so it does not damage your credit score. Lenders will, however, see the repayment coming out of your pay and count it as an outgoing when they work out affordability. It affects how much you can borrow, not whether you are approved." },
    { type: "h2", text: "The honest caveat" },
    { type: "p", text: "Rates, thresholds and write off periods are set by government and do change. We are not financial advisers and we cannot tell you what the terms will be in fifteen years. What we can do is make sure you understand the plan you are on and apply correctly." },
  ],

  "changing-career-in-your-thirties": [
    { type: "p", text: "The honest answer is that it depends on the field, and anyone who tells you otherwise is selling something. Here is how to work it out for your own situation rather than in general." },
    { type: "h2", text: "First, check whether the field is gated" },
    { type: "p", text: "Some careers legally require a specific qualification. Law, nursing, teaching, social work, psychology, architecture, and most of healthcare all have a required route, and there is no way around it. In those fields the question is not whether a degree pays off, it is which degree and how fast you can get there." },
    { type: "p", text: "Other fields are not gated at all. Marketing, sales, project delivery, most of tech, and a lot of operations work will hire on evidence rather than credentials. In those, a degree is one option among several." },
    { type: "h2", text: "Then work out what is actually stopping you" },
    { type: "ul", items: [
      "If you are being filtered out before interview, a qualification may be the thing unlocking the door",
      "If you get interviews and lose them, the gap is probably experience or interview technique, and a degree will not fix that",
      "If you cannot describe what the job involves day to day, do that research before spending three years on it",
    ]},
    { type: "quote", text: "A degree is very good at opening a door that is currently locked. It is much worse at fixing a door that is already open and you keep walking past." },
    { type: "h2", text: "The maths people forget" },
    { type: "p", text: "The cost of a degree is not only the fees, which for most eligible students are covered by a loan repaid as a share of income. It is the hours over three or four years and the earnings you might have made instead. Set that against a realistic salary in the field you want, not the top of the range." },
    { type: "p", text: "Also count the things that are hard to price. Some people want the qualification because it changes how they see themselves, and that is a legitimate reason, but it is worth naming it rather than dressing it up as a financial calculation." },
    { type: "h2", text: "Your thirties are not late" },
    { type: "p", text: "Mature students are a normal part of UK higher education, not an exception. You will not be the only person in the room who has had a job. In our experience the work history is usually the strongest thing in the application, once it is written down properly." },
    { type: "h2", text: "Before you commit" },
    { type: "p", text: "Speak to two people doing the job you want and ask them what actually got them in. It costs an afternoon and it is the highest value research you can do." },
  ],

  "personal-statement-mature-students": [
    { type: "p", text: "Most personal statement advice is written for eighteen year olds, so it tells you to talk about your A level subjects and the book that changed your life. If your last exam was fifteen years ago, that advice is useless. Here is how to write one from a working life instead." },
    { type: "h2", text: "Lead with the decision, not the biography" },
    { type: "p", text: "Admissions staff read hundreds of these. Open with why you are applying now, in one or two plain sentences. Not the whole story of your twenties, just the decision and what prompted it." },
    { type: "quote", text: "I have managed a care team for six years and I have gone as far as I can without a degree. I want the theory behind what I have been doing on instinct." },
    { type: "h2", text: "Translate work into the language of study" },
    { type: "p", text: "A degree assesses specific skills. Your job has almost certainly used them, just under different names. Make the translation explicit rather than hoping the reader does it for you." },
    { type: "ul", items: [
      "Writing a rota under conflicting constraints is problem solving and resource allocation",
      "Handling complaints is evidence gathering, judgement, and communicating a decision",
      "Training a new starter is explaining something complex to someone who does not have your context",
      "Any report, log or handover you have written is written communication under time pressure",
    ]},
    { type: "h2", text: "Be specific, then be brief" },
    { type: "p", text: "One concrete example is worth five claims. Name the thing, say what you did, say what happened. Two or three lines each. Vague praise about yourself reads as filler in any application, and it reads worse when you have real material to draw on." },
    { type: "h2", text: "Address the gap directly" },
    { type: "p", text: "If you have been away from education for a long time, say so and say why you are ready now. Do not apologise for it and do not hope nobody notices. A sentence about how you plan to manage study alongside work does more good than any amount of enthusiasm." },
    { type: "h2", text: "What to leave out" },
    { type: "ul", items: [
      "Dictionary definitions of your subject",
      "Quotes from famous people",
      "Claims you cannot back with an example",
      "Anything about being passionate, unless you immediately prove it with a fact",
    ]},
    { type: "h2", text: "Last pass" },
    { type: "p", text: "Read it aloud. If a sentence is hard to say, it is hard to read. Then give it to someone who does not work in your industry and ask them to tell you what job you do and why you want the course. If they cannot, it is not clear enough yet." },
  ],

  "what-universities-ask-mature-students": [
    { type: "p", text: "The document list is shorter than most people expect. Getting it together early is the single biggest thing you can do to keep an application moving, because almost every delay we see comes from the same two items." },
    { type: "h2", text: "The standard list" },
    { type: "ul", items: [
      "Photo identification, usually a passport, or a birth certificate with photo ID if you do not have one",
      "Proof of your address, normally something dated within the last three months",
      "Any qualifications you do hold, including GCSEs, however old",
      "A personal statement",
      "A reference, which for mature applicants can usually be from an employer rather than a teacher",
      "A CV, if you are applying partly on work experience",
      "English language evidence, if you are an international applicant",
    ]},
    { type: "h2", text: "The two that cause the delays" },
    { type: "p", text: "References and old certificates. References stall because people ask a busy manager at the last minute without warning them. Ask early, tell them the deadline, and tell them what the course is so they can write something relevant." },
    { type: "p", text: "Certificates stall because they are in a loft, or with a parent, or genuinely lost. If yours are lost, awarding bodies can usually issue a replacement, but it takes weeks and sometimes costs money. Start that now rather than in August." },
    { type: "quote", text: "If you think you might need a replacement certificate, order it before you do anything else in your application. It is the longest lead time item by a distance." },
    { type: "h2", text: "What they do not ask for" },
    { type: "p", text: "You do not usually need A levels, a recent qualification, or an unbroken education history. You do not need to explain every year since school. And for most courses you do not need a specific subject background, though some, particularly in health and computing, will want evidence of maths." },
    { type: "h2", text: "Names have to match" },
    { type: "p", text: "If your name has changed since your certificates were issued, you will need the document that shows the change, usually a marriage certificate or deed poll. Mismatched names are a common and entirely avoidable hold up." },
    { type: "h2", text: "Interviews" },
    { type: "p", text: "Most courses do not interview. Some do, particularly in health, social care and law, and for mature applicants it is often a conversation rather than a test. They want to know you understand the commitment and have thought about how you will manage it. Prepare for that question specifically." },
  ],
};

export function getPostBody(slug: string): { blocks: Block[]; isSample: boolean } {
  const blocks = written[slug];
  return blocks ? { blocks, isSample: false } : { blocks: [], isSample: true };
}

export type { Block };
