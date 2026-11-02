/**
 * Public site copy, drawn from the DiDev master brand and visual identity
 * (October 2026). Set contactEmail when a company mailbox is ready.
 *
 * Set pagesInDevelopment to false to show About, Academy, Consulting,
 * Network, and Contact again. Home always stays visible.
 */
export const pagesInDevelopment = false

export const contactEmail = ''

export const company = {
  name: 'DiDev',
  legal: 'Mailiana-DiDev LTD',
  founder: 'Miss Mailiana',
  tagline: 'Learn. Build. Transform.',
  positioning: 'Develop Digital Talent. Transform Businesses.',
  promise: 'Practical skills. Smarter systems. Meaningful impact.',
  location: 'Ghana',
  reach: 'Africa and beyond',
  delivery: 'Primarily online, with selected in-person programmes.',
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academy', href: '/academy' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'Network', href: '/network' },
  { label: 'Contact', href: '/contact' },
] as const

export const instagram = 'https://www.instagram.com/miss_mailiana/'

export const slides = [
  {
    id: 'company',
    index: '01',
    label: 'The company',
    kicker: 'Technology education and digital transformation',
    title: 'Develop digital talent. Transform businesses.',
    text: 'DiDev equips people with practical digital skills and helps organizations put technology, data and AI to work in ways that improve real outcomes.',
    primary: { label: 'Start a conversation', href: '/contact' },
    secondary: { label: 'About DiDev', href: '/about' },
  },
  {
    id: 'academy',
    index: '02',
    label: 'Academy',
    kicker: 'DiDev Academy',
    title: 'Build skills you can demonstrate.',
    text: 'Project-based pathways in data and digital work, with feedback and a portfolio. The Digital College continues as part of the DiDev journey.',
    primary: { label: 'View Academy', href: '/academy' },
    secondary: { label: 'Enquire about learning', href: '/contact?topic=academy' },
  },
  {
    id: 'consulting',
    index: '03',
    label: 'Consulting',
    kicker: 'DiDev Consulting',
    title: 'Make technology work for the organization.',
    text: 'Strategy, data systems, responsible AI adoption and workforce capability — scoped around the work that needs to change, not around tool hype.',
    primary: { label: 'View Consulting', href: '/consulting' },
    secondary: { label: 'Discuss a project', href: '/contact?topic=transformation' },
  },
] as const

export const highlights = [
  {
    icon: 'academy',
    title: 'Academy programmes',
    text: 'Practical data and digital pathways for learners and teams.',
    href: '/academy',
  },
  {
    icon: 'consulting',
    title: 'Consulting services',
    text: 'Diagnostics, implementation and capability building.',
    href: '/consulting',
  },
  {
    icon: 'network',
    title: 'DiDev Network',
    text: 'Events, peer learning and institutional partnerships.',
    href: '/network',
  },
  {
    icon: 'conversation',
    title: 'Start a conversation',
    text: 'Tell us the problem, the people and the outcome you need.',
    href: '/contact',
  },
] as const

export const ticker = [
  'Practical learning',
  'Data and decision intelligence',
  'Responsible AI',
  'Workforce capability',
  'Digital transformation',
  'African-founded',
  'Global standards',
] as const

export const challenges = [
  {
    number: '01',
    title: 'Technology without a clear strategy',
    text: 'Tools arrive before the work is understood. Investment then struggles to change how people actually operate.',
  },
  {
    number: '02',
    title: 'Skills without practical application',
    text: 'People can study digital subjects for months and still be unsure how to use them on a real task.',
  },
  {
    number: '03',
    title: 'Data without better decisions',
    text: 'Information sits in spreadsheets and reports, but it does not reliably inform action.',
  },
] as const

export const divisions = [
  {
    name: 'DiDev Academy',
    href: '/academy',
    logo: '/brand/logo-academy.png',
    kicker: 'Education',
    text: 'Data School and Digital Marketing School. Each programme has its own page, and The Digital College continues here.',
  },
  {
    name: 'DiDev Consulting',
    href: '/consulting',
    logo: '/brand/logo-consulting.png',
    kicker: 'Organizations',
    text: 'Advisory, implementation and training for businesses and institutions that need technology to change the work, not only the slide deck.',
  },
  {
    name: 'DiDev Network',
    href: '/network',
    logo: '/brand/logo-network.png',
    kicker: 'Community',
    text: 'Events, peer learning and partnerships. A place to connect talent, institutions and opportunity as the network grows.',
  },
] as const

export const method = [
  {
    number: '01',
    title: 'Discover',
    text: 'Understand the priority, the constraints, who is involved and what a useful result would look like.',
  },
  {
    number: '02',
    title: 'Diagnose',
    text: 'Look at workflows, skills, data and systems. Establish a baseline where one can be measured.',
  },
  {
    number: '03',
    title: 'Design and execute',
    text: 'Agree a practical blueprint, then teach, build or implement the pieces that matter first.',
  },
  {
    number: '04',
    title: 'Review',
    text: 'Look at the agreed indicators, record what changed, and be clear about what is still unknown.',
  },
] as const

export const pathways = [
  {
    audience: 'Learners',
    title: 'A path from study to proof of skill.',
    text: 'For students, career changers and working professionals who want structured practice, feedback and a portfolio they can show.',
    points: ['Data foundations and applied tools', 'Project milestones', 'Portfolio review'],
    href: '/academy',
    label: 'Explore Academy',
  },
  {
    audience: 'Organizations',
    title: 'A path from ambition to a scoped engagement.',
    text: 'For owners, HR and L&D leads, and institutions that need a diagnosis before a tool, a dashboard or a training calendar.',
    points: ['Discovery conversation', 'Diagnostic and proposal', 'Training or implementation'],
    href: '/consulting',
    label: 'Explore Consulting',
  },
] as const

export const conversations = [
  {
    kicker: 'Keynotes and panels',
    title: 'Technology, AI and Africa’s digital future',
    text: 'Adoption, opportunity and responsible progress, discussed in practical terms.',
  },
  {
    kicker: 'Workshops',
    title: 'Data, capability and modern work',
    text: 'Sessions built around the tasks a team actually performs.',
  },
  {
    kicker: 'Facilitation',
    title: 'Hosting, moderation and dialogue',
    text: 'Rooms that help institutions and communities reach a clearer next step.',
  },
] as const

export const values = [
  { title: 'Practical excellence', text: 'Teach through application. Scope consulting carefully. Review the quality of the work.' },
  { title: 'Inclusion', text: 'Offer entry points for different skill levels and accessibility needs.' },
  { title: 'Innovation', text: 'Choose useful solutions because of the problem, not because of the hype.' },
  { title: 'Integrity', text: 'Publish verified claims, protect data and honour the scope that was agreed.' },
  { title: 'Collaboration', text: 'Co-design with learners, clients, instructors and partners.' },
  { title: 'Impact', text: 'Look for demonstrated competence and organizational improvement.' },
  { title: 'Growth', text: 'Use feedback to improve the next cohort, workshop and engagement.' },
] as const

export const differentiators = [
  { title: 'Practice before theory', text: 'Assignments, realistic data and work products people can explain.' },
  { title: 'Learning connected to outcomes', text: 'Portfolios, workflow improvements and observable progress.' },
  { title: 'African context, global standards', text: 'Local relevance with professional quality that travels.' },
  { title: 'People and organizations together', text: 'Talent development and institutional capability in one house.' },
  { title: 'Progress demonstrated', text: 'Documented outputs, defensible measures and stated limitations.' },
] as const

export const schools = [
  {
    name: 'Data School',
    text: 'Data programmes live here. A new data course joins this school, with its own page.',
    programmes: [
      {
        slug: 'data-foundation',
        title: 'Data Foundation',
        text: 'Excel, data analysis, SQL and Power BI, with projects and a portfolio review.',
      },
    ],
  },
  {
    name: 'Digital Marketing School',
    text: 'Marketing programmes live here. A new marketing course joins this school, with its own page.',
    programmes: [
      {
        slug: 'digital-marketing-incubator',
        title: 'Digital Marketing Incubator',
        text: 'A practical path for planning and running digital marketing work you can explain.',
      },
    ],
  },
] as const

export const comingSchools = ['AI School', 'Transformation School'] as const

export const offers = [
  {
    slug: 'data-foundation',
    school: 'Data School',
    title: 'Data Foundation',
    lede: 'A guided start in Excel, data analysis, SQL and Power BI. You leave with work you can show and explain.',
    summary:
      'Data Foundation moves from The Digital College into DiDev Academy. It is the first programme in the Data School, and this page is the address a campaign can open.',
    practise: [
      'Excel and a dataset that needs cleaning',
      'SQL questions against a realistic table',
      'A Power BI view someone else can read',
      'A short portfolio review with feedback',
    ],
    forWhom: 'Students, career changers and working professionals who need a structured beginning rather than a pile of tutorials.',
    leavesWith: 'A documented project, feedback, and a way to explain what you did. DiDev does not promise a job, a salary or instant mastery.',
    enquire: '/contact?topic=data-foundation',
  },
  {
    slug: 'digital-marketing-incubator',
    school: 'Digital Marketing School',
    title: 'Digital Marketing Incubator',
    lede: 'A practical programme for people who want to plan, run and explain digital marketing work.',
    summary:
      'The Digital Marketing Incubator sits in the Digital Marketing School. Length, fee and the session plan are confirmed for each intake. This page is where an ad can land.',
    practise: [
      'A brief that names the audience and the offer',
      'A simple plan for a channel you can actually run',
      'Work you can show, not only a slide of tactics',
    ],
    forWhom: 'People moving from The Digital College, and anyone who wants marketing practice with feedback.',
    leavesWith: 'A piece of marketing work you can walk through. The intake details are confirmed before anyone enrols.',
    enquire: '/contact?topic=marketing-incubator',
  },
  {
    slug: '100-days-of-data',
    school: 'Insights and resources',
    title: '100 Days of Data',
    lede: 'A public practice series from The Digital College, now part of DiDev Academy.',
    summary:
      'One hundred days of beginner-friendly data practice, written for African learning contexts. The path runs through analysis, dashboards, responsible use of AI, and a capstone you can present. Teaching examples are fictional. They are not client results.',
    practise: [
      'An everyday situation before the technical idea',
      'Dashboards and business questions',
      'AI used as a draft that a person still checks',
      'A capstone you can explain',
    ],
    forWhom: 'Anyone building a data habit in public, including people who want the playlist and the daily path in one place.',
    leavesWith: 'A practice record and a capstone. Playlists are published with the series. This page is the stable address for the campaign.',
    enquire: '/contact?topic=hundred-days',
  },
] as const

export const liveSessions = [
  {
    when: '30 January 2027',
    access: 'Free',
    place: 'In person',
    text: 'Last Saturday of January. A free Data Foundation Live class.',
  },
  {
    when: '27 February 2027',
    access: 'Free',
    place: 'In person',
    text: 'Last Saturday of February. A free Data Foundation Live class.',
  },
  {
    when: 'March 2027',
    access: 'Paid',
    place: 'In person',
    text: 'A paid class. A certificate is issued at the end. The day is confirmed on this page before the session.',
  },
] as const

export const learnerAudiences = [
  { title: 'Students and graduates', text: 'A clear path, guided practice and a first credible portfolio.' },
  { title: 'Career changers', text: 'A structured beginning, with milestones and feedback rather than a pile of tutorials.' },
  { title: 'Working professionals', text: 'Excel, SQL, Power BI, AI literacy and other skills with direct workplace use.' },
  { title: 'Teams and institutions', text: 'Cohorts designed around roles, with reporting the sponsor can use.' },
] as const

export const pillars = [
  {
    name: 'Digital transformation and strategy',
    examine: 'Processes, tools, maturity, governance and readiness for change.',
    deliver: 'Readiness view, roadmap, process priorities and an adoption plan.',
    review: 'Cycle time, adoption and where friction actually reduced.',
  },
  {
    name: 'Data systems and decision infrastructure',
    examine: 'Data quality, reporting workflows and the KPIs leaders rely on.',
    deliver: 'KPI framework, reporting standards and dashboard or workbook solutions as scoped.',
    review: 'Reporting effort, data quality and how quickly a decision can be made.',
  },
  {
    name: 'Responsible AI adoption',
    examine: 'Suitable use cases, repetitive work, risk and the team’s current AI literacy.',
    deliver: 'Use-case assessment, guidelines, a controlled pilot and staff learning.',
    review: 'Time returned to the team, quality of the task and whether use stayed within the rules.',
  },
  {
    name: 'Workforce capability',
    examine: 'Skill gaps, role requirements and what people need to apply after the session.',
    deliver: 'Training needs analysis, tailored programmes, workshops and assessment.',
    review: 'Completion, skill change and evidence of workplace application.',
  },
] as const

export const servicesLede = 'Choose the service that matches the problem you already have.'

export const services = [
  {
    number: '01',
    title: 'Digital transformation audits',
    text: 'See where systems, processes and people are slowing progress, then turn that into a sequence the organization can actually run.',
    tags: ['Maturity', 'Workflow mapping', 'Change'],
  },
  {
    number: '02',
    title: 'Data and decision systems',
    text: 'Move from fragmented spreadsheets toward clearer KPIs, usable reporting and data a manager can trust.',
    tags: ['Excel', 'SQL', 'Power BI', 'KPI design'],
  },
  {
    number: '03',
    title: 'Practical AI adoption',
    text: 'Find appropriate uses, redesign the workflow around them and prepare people to use AI with judgment.',
    tags: ['AI literacy', 'Use cases', 'Governance'],
  },
  {
    number: '04',
    title: 'Capability building',
    text: 'Learning pathways for teams and institutions, including programmes delivered through DiDev Academy.',
    tags: ['Workshops', 'Curriculum', 'Assessment'],
  },
] as const

export const packages = [
  {
    featured: false,
    label: 'Focused assessment',
    title: 'Strategy and readiness audit',
    text: 'For leaders who need an independent view of current systems and a clear set of next steps.',
    points: ['Stakeholder discovery', 'Workflow and maturity review', 'Prioritised opportunity map', 'Executive recommendations'],
    href: '/contact?topic=transformation',
    action: 'Request a conversation',
  },
  {
    featured: true,
    label: 'End-to-end project',
    title: 'Transformation project',
    text: 'For teams ready to implement a defined data, digital or AI initiative with a written scope.',
    points: ['Diagnostic and scope', 'Solution blueprint', 'Implementation support', 'Adoption and review'],
    href: '/contact?topic=transformation',
    action: 'Discuss a project',
  },
  {
    featured: false,
    label: 'Ongoing partnership',
    title: 'Advisory retainer and workshops',
    text: 'For organizations that want continuity, leadership guidance or a practical upskilling rhythm.',
    points: ['Periodic advisory sessions', 'Roadmap reviews', 'Executive or team workshops', 'Capability support'],
    href: '/contact?topic=retainer',
    action: 'Explore a retainer',
  },
] as const

export const caseBlueprint = [
  { title: 'Engagement snapshot', text: 'Sector, timeline, type of work, tools and permission to publish.' },
  { title: 'The challenge', text: 'The operational problem, the starting point and the constraints.' },
  { title: 'The approach', text: 'Discovery, diagnosis, priorities and the sequence of work.' },
  { title: 'What was delivered', text: 'Systems, training, dashboards, workflows or guidance actually provided.' },
  { title: 'Outcomes', text: 'Measured change, the method, the period and what cannot be claimed.' },
  { title: 'Endorsement', text: 'A quote only with the person’s role, date and consent.' },
] as const

export const networkActivities = [
  {
    title: 'Events and conversations',
    text: 'Sessions that help practitioners, students and institutions talk about digital work with precision.',
  },
  {
    title: 'Peer learning',
    text: 'Spaces to practise, review projects and learn beside other people on the same path.',
  },
  {
    title: 'Partnerships',
    text: 'Collaboration with universities, companies, NGOs and community initiatives around a shared outcome.',
  },
  {
    title: 'Opportunity',
    text: 'A growing route between learning, useful work and organizations that need capable people.',
  },
] as const

export const inquiryTopics = [
  { id: 'academy', label: 'Academy pathway or enrolment' },
  { id: 'data-foundation', label: 'Data Foundation' },
  { id: 'marketing-incubator', label: 'Digital Marketing Incubator' },
  { id: 'hundred-days', label: '100 Days of Data' },
  { id: 'network-live', label: 'Data Foundation Live' },
  { id: 'training', label: 'Corporate or institutional training' },
  { id: 'transformation', label: 'Digital transformation advisory' },
  { id: 'data', label: 'Data systems and decision intelligence' },
  { id: 'ai', label: 'Responsible AI adoption' },
  { id: 'retainer', label: 'Advisory retainer or workshop' },
  { id: 'network', label: 'Network or institutional partnership' },
  { id: 'speaking', label: 'Speaking, hosting or facilitation' },
  { id: 'other', label: 'Another inquiry' },
] as const

export const timelines = [
  'Not yet defined',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  'Exploring options',
] as const

export const filmChapters = [
  {
    id: 'learn',
    kicker: 'Chapter 01',
    title: 'Learn',
    text: 'Access to a course is not the same as capability. DiDev starts with practice: clear instruction, real tasks and feedback.',
  },
  {
    id: 'build',
    kicker: 'Chapter 02',
    title: 'Build',
    text: 'Learners leave with work they can show. Organizations leave with workflows, reporting and skills that fit the job.',
  },
  {
    id: 'transform',
    kicker: 'Chapter 03',
    title: 'Transform',
    text: 'Progress is people and systems moving together. That is the standard for a cohort, a workshop and a consulting engagement.',
  },
] as const

export const profile =
  'DiDev, operating under Mailiana-DiDev LTD, equips individuals with practical digital skills and helps businesses and institutions strengthen their digital capabilities. Through technology education, talent development, corporate training and digital transformation services, DiDev connects learning with practical application. Founded in Africa with a global outlook, the company exists to unlock potential through technology.'

export const founderQuote =
  'I am building DiDev so people move from learning to doing, from doing to creating value, and from value to transforming themselves and organizations.'

export const story =
  'DiDev grew from a direct observation: access to digital learning does not automatically create practical capability, just as access to technology does not automatically transform a business. The educational roots include 100 Days of Data, live Data Foundations teaching and The Digital College. The wider ambition joins project-based learning with the people, workflows and systems that help organizations improve.'


  /**
 * Academy structure (voice notes, Oct 2026). Fees, payment links, start
 * dates and the 100 Days playlist link are intentionally blank until
 * confirmed. Pages show "To be confirmed" for any empty value.
 */
export const tbc = 'To be confirmed'

export const academySchools = [
  {
    id: 'data',
    name: 'Data School',
    status: 'open',
    text: 'Practical data skills, from a free first step to a guided programme with project milestones.',
    programmes: [
      {
        title: 'Data Foundation',
        href: '/academy/data-foundation',
        text: 'A guided pathway through Excel, SQL and Power BI, with project milestones and a portfolio review.',
      },
      {
        title: '100 Days of Data',
        href: '/academy/100-days-of-data',
        text: 'The free way in, taught by Miss Mailiana. Start here if you are not sure where to begin.',
      },
    ],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing School',
    status: 'open',
    text: 'Applied digital marketing, learned by running real work rather than reading about it.',
    programmes: [
      {
        title: 'Digital Marketing Incubator',
        href: '/academy/digital-marketing-incubator',
        text: 'A hands-on programme for building a brand, a content plan and a campaign you can show.',
      },
    ],
  },
  {
    id: 'ai',
    name: 'AI School',
    status: 'planned',
    text: 'Planned. No programme is open yet.',
    programmes: [],
  },
  {
    id: 'transformation',
    name: 'Transformation School',
    status: 'planned',
    text: 'Planned. No programme is open yet.',
    programmes: [],
  },
] as const

export type ProgrammePage = {
  slug: string
  school: string
  title: string
  lede: string
  summary: string
  forWhom: readonly string[]
  learn: readonly string[]
  tags: readonly string[]
  facts: readonly { label: string; value: string }[]
  cta: { label: string; href: string }
  note: string
}

export const programmePages: Record<string, ProgrammePage> = {
  'data-foundation': {
    slug: 'data-foundation',
    school: 'Data School',
    title: 'Data Foundation',
    lede: 'Learn the data tools people use at work, by using them on a real project from the first week.',
    summary:
      'A guided pathway through Excel and data analysis, SQL and Power BI. Each stage ends in a milestone, and the programme ends in a portfolio review with feedback.',
    forWhom: ['Students and graduates', 'Career changers', 'Working professionals who handle data'],
    learn: [
      'Clean and organise a dataset in Excel',
      'Write SQL queries to answer a question',
      'Build and explain a Power BI dashboard',
      'Present a documented project and take feedback on it',
    ],
    tags: ['Excel', 'SQL', 'Power BI', 'Portfolio'],
    facts: [
      { label: 'Format', value: 'Guided, online' },
      { label: 'Fee', value: tbc },
      { label: 'Next start', value: tbc },
    ],
    cta: { label: 'Enquire about Data Foundation', href: '/contact?topic=academy' },
    note: 'Enrolment details are being finalised. Send an enquiry and we will reply with the next steps.',
  },
  'digital-marketing-incubator': {
    slug: 'digital-marketing-incubator',
    school: 'Digital Marketing School',
    title: 'Digital Marketing Incubator',
    lede: 'Build a brand, a content plan and a campaign, with feedback at each step.',
    summary:
      'A practical programme where you work on your own brand or business, and finish with work you can show to a client or an employer.',
    forWhom: ['Founders and small business owners', 'Content creators', 'Students moving into marketing'],
    learn: [
      'Define a brand and the audience it serves',
      'Plan content that supports a goal',
      'Turn content into a campaign',
      'Review results and decide what to change',
    ],
    tags: ['Brand', 'Content plan', 'Campaigns'],
    facts: [
      { label: 'Format', value: 'Guided, online' },
      { label: 'Fee', value: tbc },
      { label: 'Next start', value: tbc },
    ],
    cta: { label: 'Enquire about the Incubator', href: '/contact?topic=academy' },
    note: 'Length and enrolment details are being finalised. Send an enquiry and we will reply with the next steps.',
  },
  '100-days-of-data': {
    slug: '100-days-of-data',
    school: 'Data School',
    title: '100 Days of Data',
    lede: 'A free way into data, taught by Miss Mailiana. Learn a little each day and see whether it suits you.',
    summary:
      'The free entry point to Data School. It is where DiDev’s teaching began, and it leads naturally into Data Foundation for people who want guidance and feedback.',
    forWhom: ['Complete beginners', 'Anyone curious about data work', 'People deciding on a first programme'],
    learn: [
      'Core data ideas in small daily steps',
      'The vocabulary used in data roles',
      'Whether Data Foundation is the right next step',
    ],
    tags: ['Free', 'Beginner'],
    facts: [
      { label: 'Cost', value: 'Free' },
      { label: 'Format', value: 'Self-paced playlist' },
      { label: 'Playlist link', value: tbc },
    ],
    cta: { label: 'Ask for the playlist', href: '/contact?topic=academy' },
    note: 'Automatic sign-up and delivery of the playlist is not live yet. For now, send us a message and we will respond.',
  },
}

export const networkProgramme = {
  name: 'Data Foundation Live',
  text: 'In-person classes that follow the online Data Foundation teaching, held on the last Saturday of the month, with live sessions on YouTube in between.',
  sessions: [
    {
      date: '30 January 2027',
      day: 'Last Saturday',
      kind: 'Free',
      text: 'An in-person class, open to everyone.',
      paid: false,
    },
    {
      date: '27 February 2027',
      day: 'Last Saturday',
      kind: 'Free',
      text: 'An in-person class, open to everyone.',
      paid: false,
    },
    {
      date: 'March 2027',
      day: 'Day to be confirmed',
      kind: 'Paid, with certificate',
      text: 'The paid in-person class. Participants receive a certificate at the end.',
      paid: true,
    },
  ],
  between: [
    { title: 'Live on YouTube', text: 'At least three live sessions every month.' },
    { title: 'Community', text: 'A community for learners to practise, ask questions and share work between the dates.' },
  ],
  note: 'Venue, fees and the March date will be published here once confirmed.',
} as const