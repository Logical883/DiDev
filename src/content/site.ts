/**
 * Public site copy, drawn from the DiDev master brand and visual identity
 * (October 2026). Set contactEmail when a company mailbox is ready.
 */
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
  { label: 'About', href: '/about' },
  { label: 'Academy', href: '/academy' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'Network', href: '/network' },
  { label: 'Contact', href: '/contact' },
] as const

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
    text: 'Courses, projects, portfolios and practical programmes. This is where The Digital College continues, with learning designed to be demonstrated.',
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

export const programmes = [
  {
    number: '01',
    title: 'Data Foundations',
    text: 'A guided pathway through Excel and data analysis, SQL and Power BI, with project milestones and a portfolio review.',
    outputs: ['Documented project', 'Skill demonstration', 'Feedback'],
    tags: ['Excel', 'SQL', 'Power BI', 'Portfolio'],
  },
  {
    number: '02',
    title: 'Professional skill sprints',
    text: 'Short, practical applications for people who are already in work and need a tool or method they can use immediately.',
    outputs: ['Reusable work artifact', 'Implementation notes'],
    tags: ['Workplace practice', 'Applied tools'],
  },
  {
    number: '03',
    title: 'Institutional cohorts',
    text: 'Tailored programmes for companies, universities and other institutions, including assessment and a follow-up on application.',
    outputs: ['Cohort curriculum', 'Assessment', 'Follow-up actions'],
    tags: ['Corporate training', 'Institutions'],
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
