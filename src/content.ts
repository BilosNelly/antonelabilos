export const profile = {
  name: 'Antonela Bilos',
  role: 'Software Engineer',
  location: 'Zurich, Switzerland',
  email: 'bilosantonela1996@gmail.com',
  linkedin: 'https://linkedin.com/in/antonela-bilos',
  linkedinLabel: 'linkedin.com/in/antonela-bilos',
}

export const heroLede =
  'I build whatever is needed, with or without AI, once I understand the user behind it.'

export const heroMeta = ['AI & Software Engineer · Zurich, CH']

/* Bottom marquee */
export const roles = [
  'Software Engineer',
  'Product Designer',
  'Frontend Developer',
  'Sweats the details',
  'Customer Advocate',
  'Traveler',
  'Volunteer',
]

/* ---- Work ---- */

export const hackathonItem = {
  meta: 'Expedia Group · AI',
  title: 'Two-time runner-up, internal AI hackathon',
  desc: 'Placed second twice at Expedia’s internal AI hackathon, prototyping AI features for pricing intelligence and partner tooling.',
}

export const nelcoItem = {
  meta: 'Side project · AI',
  title: 'nelco.ai',
  desc: 'LLMs, RAG and agent workflows, built with Lovable.',
  problem:
    'Most people in the Balkans do not read English easily. The good tech and AI writing, the analysis and not just the headlines, is almost all in English, so it never reaches them. Local media mostly covers general news.',
  solution:
    'nelco.ai collects tech and AI stories from strong sources, pulls out the key insight, and translates it into local languages, so people can follow what is actually happening in tech in a language they think in.',
  href: 'https://nelco.ai',
}

/* ---- Case studies ---- */

export const caseStudy = {
  slug: '/work/revenue-management',
  title: 'Simplifying Revenue Management Through User Research',
  org: 'Expedia Group',
  role: 'Software Engineer · product and research lead',
  year: '2024',
  tags: ['User Research', 'Product Strategy', 'Data-informed Design', 'A/B Testing'],
  stats: [
    { num: '15 → 3', label: 'Features exposed on the page versus actions partners actually used' },
    { num: '30%+', label: 'Of users found the lighter version significantly more useful in an A/B test' },
    { num: '11M+', label: 'Partners supported by the improved experience' },
  ],
  sections: [
    {
      heading: 'Context',
      body: [
        'I joined a revenue management product that had already been in production for several years. It let accommodation partners view and adjust their prices for specific dates and events, compare those prices with competitors, and make decisions aimed at increasing revenue or occupancy.',
        'As I started exploring the product, I noticed that the data was not presented clearly. I had too many questions for someone who was expected to understand the product more deeply than the end user. That was the first signal that there might be a larger experience problem, though I did not yet have enough information to validate the assumption.',
      ],
    },
    {
      heading: 'Research',
      body: [
        'I began by analyzing click behavior across different user segments, from smaller accommodations to large hotel chains. I wanted to understand which actions were most valuable to each group and how their behavior differed.',
        'The results were surprising. The page exposed 15 features, roughly 10 of which were clickable, yet most users interacted with only three actions. The pattern was nearly identical for smaller accommodations and large hotel chains alike.',
        'I then reviewed industry examples, studied how other revenue management products approached similar problems, and researched relevant design best practices. In parallel, I gathered feedback from a representative group of users and accommodation partners.',
      ],
    },
    {
      heading: 'Approach',
      body: [
        'My goal was to create a structured plan with clearly defined features, reduce the noise created by low-usage functionality, and improve the overall experience. The product needed to give partners the information they actually used, presented in a way that supported confident decisions rather than creating confusion through unnecessary numbers.',
        'I presented the problem definition, supporting data, research findings, and proposed solution to leadership. After reviewing the analysis, leadership approved the implementation of a lighter version of the experience.',
      ],
    },
    {
      heading: 'Outcome',
      body: [
        'We later ran an A/B test, and more than 30 percent of users considered the new version significantly more useful than the previous one. The improved experience supported more than 11 million partners.',
      ],
    },
    {
      heading: 'Key takeaway',
      body: [
        'The most important insight was that the product did not need more features. It needed greater focus. By combining behavioral data, user feedback, industry research, and clear product direction, I was able to remove noise and make the most valuable information easier to understand and act on.',
      ],
    },
  ],
}

export const frontendCaseStudy = {
  slug: '/work/frontend-architecture',
  title: 'Frontend architecture adopted by 15+ teams',
  org: 'Infobip',
  role: 'Software Engineer · frontend platform',
  year: '2019 — 2022',
  cardMeta: 'Infobip · Frontend platform',
  cardDesc:
    'Frontend teams each had their own setup, on their own versions. I built shared project archetypes and a packaged component library so every team started from the same point — and a company-wide change became a version bump instead of fifteen migrations.',
  tags: ['Frontend Platform', 'Design System', 'Component Library', 'Developer Experience'],
  stats: [
    { num: '15+', label: 'Engineering teams building on the shared frontend architecture' },
    { num: 'Day one', label: 'How quickly a new team could start building from an archetype' },
    { num: 'One version bump', label: 'What a company-wide design, behaviour or typography change usually cost' },
  ],
  sections: [
    {
      heading: 'Context',
      body: [
        'Frontend teams across the company were each solving the same setup problems on their own. Every team started from a slightly different place, on different versions and technologies, which made it harder than it should have been to share work or move between teams.',
      ],
    },
    {
      heading: 'Architecture archetypes',
      body: [
        'I built reusable project archetypes for frontend teams: a shared starting point, so that everyone in the company began from the same place and stayed on the same versions and technologies. Instead of assembling a stack from scratch, a team could take an archetype and start building.',
      ],
    },
    {
      heading: 'A packaged component library',
      body: [
        'After that, I began building the common components — reusable, and specific to the company. I shipped them as a package, so that a change to a design, a function or typography mostly meant just a version bump for the teams using them, instead of a hand migration in every codebase.',
      ],
    },
    {
      heading: 'Handover',
      body: [
        'Over time the teams took over extending the component library themselves. I had laid the foundations and set the archetypes for future development, and spent time helping the frontend teams grow into that way of working.',
      ],
    },
    {
      heading: 'Key takeaway',
      body: [
        'A shared starting point compounds. Getting the foundations, versions and packaging right once meant every team moved faster afterwards — and a single change could reach everyone through a version number instead of fifteen separate migrations.',
      ],
    },
  ],
}

/* ---- About ---- */

export const aboutParagraphs = [
  'My first computer arrived in 2005. It ran Windows, which did not bother me one bit at the time. I spent whole days playing games and poking at prehistoric tools, and somewhere in there a real love took hold: for the digital world, the internet, and the sheer number of things you could make it do.',
  'Choosing to study Informatics felt obvious. About halfway through my degree I joined Infobip, then the only Croatian unicorn, and a very large door of opportunity and challenge swung open. I did not have much programming experience yet, but I found my footing quickly and started building web applications used by millions of people. I was lucky to work alongside some of the best engineers and architects around, and I learned from all of them. I started in teams of four to six, and later moved into cross teams, helping them onboard onto what was then a brand new frontend ecosystem. My days were mostly React, JavaScript and Node.js, with some Java later on.',
  'Through every kind of challenge, the work I always reached for first was anything tied directly to users. I loved talking to them. Along the way I met colleagues from many offices and locations, and I grew a genuine love for user experience and for making it better, so I decided to shape my expertise in that direction.',
  'Then AI arrived. Just before AI and coding tools went mainstream, I enrolled in an MBA in Leadership, and finished first in my cohort two years later.',
  'After a lot of adventures, projects and wins, and more than six years in Croatia, I decided to try life beyond it and start a new chapter in Switzerland.',
]

export const aboutQuote =
  'Happy users are the only real recipe for a good business.'

export const timeline = [
  { year: '2005', text: 'First computer. Games, curiosity, and the start of everything.' },
  { year: '2017', text: 'Joined Infobip, Croatia’s only unicorn, building web apps for millions of users.' },
  { year: '2019', text: 'BSc in Computer Science, University of Pula.' },
  { year: '2023', text: 'Moved to Switzerland and joined Expedia Group as a Software Engineer.' },
  { year: '2025', text: 'MBA in Leadership, Algebra Bernays. Finished first in the cohort. Two-time runner-up at Expedia’s internal AI hackathon.' },
]

export const experience = [
  {
    company: 'Expedia Group',
    role: 'Software Engineer L2',
    place: 'Geneva, Switzerland · Remote',
    period: 'Mar 2023 — Present',
  },
  {
    company: 'Infobip',
    role: 'Software Engineer',
    place: 'Vodnjan, Croatia · Remote',
    period: 'Nov 2017 — Mar 2023',
  },
]

export const skillGroups = [
  {
    label: 'Engineering',
    items: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'Java', 'Data pipelines', 'SQL', 'API design', 'System thinking'],
  },
  {
    label: 'AI',
    items: ['Generative AI', 'LLMs', 'Prompt engineering', 'RAG', 'AI agents', 'Agentic workflows', 'LLM evaluation', 'AI product integration'],
  },
  {
    label: 'Product & research',
    items: ['User research', 'A/B testing', 'Product strategy', 'Data-informed design', 'Product lifecycle', 'OKR planning'],
  },
  {
    label: 'Ways of working',
    items: ['Cross-functional leadership', 'Stakeholder communication', 'Mentoring', 'Agile / Scrum', 'Growth mindset'],
  },
]

export const certifications = [
  { title: 'MBA in Leadership', place: 'Algebra Bernays', year: '2025' },
  { title: 'BSc in Computer Science', place: 'University of Pula', year: '2019' },
  { title: 'B2B Sales Masterclass: People-Focused Selling', place: 'Udemy', year: '2026' },
  { title: 'AI Leadership Track: Gen AI & Agentic AI for Business Leaders', place: 'Udemy', year: '2026' },
  { title: 'The Complete Agentic AI Engineering Course', place: 'Udemy', year: '2025' },
  { title: 'LLM Engineering: Master AI, Large Language Models & Agents', place: 'Udemy', year: '2025' },
  { title: 'Communication Skills for the Global Workplace', place: 'Udemy', year: '2023' },
  { title: 'GraphQL with React: The Complete Developer’s Guide', place: 'Udemy', year: '2023' },
  { title: 'JavaScript (Basic) Certificate', place: 'HackerRank', year: '2022' },
  { title: 'JavaScript (Intermediate) Certificate', place: 'HackerRank', year: '2022' },
  { title: 'React Hooks', place: 'Udemy', year: '2021' },
  { title: 'The Complete JavaScript Course 2020: Build Real Projects', place: 'Udemy', year: '2020' },
  { title: 'Webpack 4: The Complete Tutorial for Beginners', place: 'Udemy', year: '2019' },
  { title: 'JavaScript, JSON and AJAX Explained', place: 'Udemy', year: '2018' },
]

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'German', level: 'B1' },
  { name: 'Croatian', level: 'Native' },
]

export const photos = {
  glasses: {
    src: '/photos/antonela-glasses.png',
    alt: 'Antonela wearing black glasses, looking to the side',
  },
  working: {
    src: '/photos/antonela-working.png',
    alt: 'Antonela working on a laptop',
  },
  networking: {
    src: '/photos/antonela-networking.jpg',
    alt: 'Antonela talking with a colleague at a work event',
  },
  jsconf: {
    src: '/photos/antonela-jsconf.jpg',
    alt: 'Antonela volunteering at Zurich JS Conf 2026',
    caption:
      'Volunteering at Zurich JS Conf. Did not plan the yellow shirt, but I will take the credit.',
  },
  sushi: {
    src: '/photos/antonela-sushi.jpg',
    alt: 'Antonela eating sushi at an outdoor table',
  },
  restaurant: {
    src: '/photos/antonela-restaurant.jpg',
    alt: 'Antonela at dinner, spreading something on bread',
    caption: 'If there is bread and something to put on it, I am busy for a while.',
  },
  babyCake: {
    src: '/photos/antonela-baby-cake.jpg',
    alt: 'Antonela as a baby in a red dress next to a birthday cake',
    caption:
      'First birthday. Already “completely” focused on the thing in front of me.',
  },
}
