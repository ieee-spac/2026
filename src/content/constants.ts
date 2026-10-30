import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6'

export const EVENT_YEAR = 2026

export const METADATA = {
  title: `IEEE SPAC ${EVENT_YEAR}`,
  description: `Official Website of the IEEE Student Professional Awareness Conference ${EVENT_YEAR}, hosted in Ottawa, Ontario.`,
}

export const LINKS = {
  DOMAIN: 'ieeespac.ca',
  GALLERY: 'https://www.hgmedias.ca/ieee-spac-2025',
  PATRONAGE_PACKAGE:
    'https://www.canva.com/design/DAGm9tsOucg/neaqO-lvIVJiQMIKE8r-HQ/view?utm_content=DAGm9tsOucg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7a71b5f6d5#1',
  SPAC_TICKETS: 'https://events.vtools.ieee.org/m/584396',
  SPAC_PLUS_AGM_TICKETS: 'https://events.vtools.ieee.org/m/435598',
  AGENDA:
    'https://moving-alone-78842782.figma.site/',
  LOCATION: 'https://maps.app.goo.gl/wk5vdFH7StaCvsJf7',
  INSTAGRAM: 'https://www.instagram.com/ieeespac/',
  LINKEDIN: 'https://www.linkedin.com/company/ieeespac/',
  FACEBOOK: 'https://www.facebook.com/ieeespacottawa/',
  GITHUB: 'https://github.com/ieee-spac/2026',
  STORYBOOK: 'https://main--665264891b6bc70eded9109a.chromatic.com',
  FIGMA:
    'https://www.figma.com/community/file/1417704325784085062/ieee-spac-2024-twilight-design-system',
  CHROMATIC:
    'https://www.chromatic.com/library?appId=665264891b6bc70eded9109a&branch=main',
}

export const SHINY_BUTTONS = [
  {
    text: 'Become a Patron',
    href: LINKS.PATRONAGE_PACKAGE,
  },
  {
    text: 'Registration (SPAC)',
    href: LINKS.SPAC_TICKETS,
  },
  {
    text: 'Registration (SPAC+AGM)',
    href: LINKS.SPAC_PLUS_AGM_TICKETS,
  },
]

// -----------------  HEADER ------------------
export const HEADER = {
  IMAGE_URL:
    '/assets/twilight-design-system/ieee_spac_logo_vertical_no_year.svg',
  NAV_LINKS: [
    // { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Patrons', path: '#patrons' },
    { name: 'Program', path: '#program' },
    { name: 'Speakers', path: '#speakers' },
    /* { name: 'Previous Patrons', path: '#previouspatrons' }, */
    { name: 'Team', path: '#team' },
    { name: 'Contact', path: '#contact' },
  ],
}

// -----------------  HERO ------------------
export const HERO = {
  IMAGE_ALT_TEXT: 'Main SPAC logo with year and stars',
  TITLE: 'IEEE Student Professional Awareness Conference',
  DATE: 'November 13',
  DATE_ENDING: 'th',
  LOCATION: 'Brookstreet Hotel',
  TIME: '12 - 5 PM',
  LOCATION_LINK: LINKS.LOCATION,
}

// --- About Section ---
export const ABOUT = {
  TITLE: 'About Us',
  PARAGRAPHS: [
    'First hosted in 1979, SPAC has manifested itself as an event where future professionals receive exposure to the world of employment which complements their ongoing studies.',
    'The IEEE Student Professional Awareness Conference (SPAC) is a formal networking event that serves esteemed professionals and allows them to engage with engineering and computer science students within their fields.',
  ],
  STAT_BUBBLES: [
    {
      number: 100,
      label: 'Companies',
      className: 'bobbing-animation-1 absolute left-0 top-[18%] z-0',
      color: ['#FFD100', '#DE9403'],
      size: 'clamp(10rem, 19vw, 15rem)',
    },
    {
      number: 300,
      label: 'Attendees',
      className:
        'bobbing-animation-4 absolute bottom-[5%] left-[39%] z-10',
      color: ['#03A6DE', '#027AB3'],
      size: 'clamp(8rem, 15vw, 12rem)',
    },
    {
      number: 200,
      label: 'Students',
      className:
        'bobbing-animation-2 absolute right-[10%] top-[6%] z-20',
      color: ['#77DD77', '#03A63C'],
      size: 'clamp(7rem, 12vw, 9.5rem)',
    },
    {
      number: 9,
      label: 'Years',
      className:
        'bobbing-animation-3 absolute bottom-[12%] right-0 z-30',
      color: ['#FFA500', '#DE6003'],
      size: 'clamp(5.5rem, 9vw, 7rem)',
    },
  ],
  SUBTITLE: 'A typical SPAC...',
  SECTIONS: [
    {
      title: 'Professional 1:1',
      description:
        'Engage in personalized discussions with industry professionals tailored to your career interests.',
      imgSrc: '/assets/twilight-design-system/professional_1_on_1_image.svg',
      imgAlt: 'Professional Conversation',
    },
    {
      title: 'Exclusive Masterclass',
      description:
        'Interactive sessions with experts to deepen your knowledge and enhance your skills.',
      imgSrc: '/assets/twilight-design-system/exclusive_masterclass_image.svg',
      imgAlt: 'Masterclass',
    },
    {
      title: 'Workshops',
      description:
        'Hands-on workshops designed to showcase practical skills and industry insights.',
      imgSrc: '/assets/twilight-design-system/workshops_image.svg',
      imgAlt: 'Workshops',
    },
    {
      title: 'Networking Booths',
      description:
        'Explore potential career paths and company cultures directly from the insiders.',
      imgSrc: '/assets/twilight-design-system/networking_booths_image.svg',
      imgAlt: 'Networking',
    },
    // {
    //   title: 'Send your resume to Blackberry QNX',
    //   description:
    //     'Upon ticket registration, all attendees will get an email to upload their resume to be sent to our Platinum Sponsor, Blackberry QNX.',
    //   imgSrc: '/assets/twilight-design-system/resume_image.png',
    //   imgAlt: 'Networking',
    // },
  ],
  BUTTONS: [
    { text: 'SPAC Tickets', href: LINKS.SPAC_TICKETS },
    { text: 'SPAC+AGM Tickets', href: LINKS.SPAC_PLUS_AGM_TICKETS },
  ],
}

// -----------------  PATRONS ------------------
export enum TIER_NAME {
  PLATINUM = 'Platinum',
  GOLD = 'Gold',
  SILVER = 'Silver',
  BRONZE = 'Bronze',
}

export interface ITIER_LOGO {
  name: string
  src: string
  /** Only set when the organization publishes its own version for dark backgrounds. */
  darkSrc?: string
  width: number
  height: number
  url: string
  /** Optical size tweak for marks that read small or large at a shared height. */
  scale?: number
}

export const TIER_PROPERTIES: Record<TIER_NAME, { titleColor: string, gradientClass: string, logoHeight: number }> = {
  [TIER_NAME.PLATINUM]: {
    titleColor: 'text-warning',
    gradientClass: 'from-warning to-background',
    logoHeight: 8,
  },
  [TIER_NAME.GOLD]: {
    titleColor: 'text-tertiary',
    gradientClass: 'from-tertiary to-background',
    logoHeight: 5,
  },
  [TIER_NAME.SILVER]: {
    titleColor: 'text-slate-400',
    gradientClass: 'from-slate-400 to-background',
    logoHeight: 3.5,
  },
  [TIER_NAME.BRONZE]: {
    titleColor: 'text-amber-800',
    gradientClass: 'from-amber-800 to-background',
    logoHeight: 2.75,
  },
}

export const PATRONS_DATA: Record<TIER_NAME, ITIER_LOGO[]> = {
  [TIER_NAME.PLATINUM]: [
    {
      name: 'Marvell',
      src: '/assets/patron-logos/marvell_logo_light.svg',
      darkSrc: '/assets/patron-logos/marvell_logo_dark.svg',
      width: 1004,
      height: 288,
      url: 'https://www.marvell.com',
    },
  ],
  [TIER_NAME.GOLD]: [
    {
      name: 'CGI',
      src: '/assets/patron-logos/cgi_logo.png',
      width: 809,
      height: 377,
      url: 'https://www.cgi.com/canada/en-ca',
    },
    {
      name: 'Lumentum',
      src: '/assets/patron-logos/lumentum_logo_light.png',
      darkSrc: '/assets/patron-logos/lumentum_logo_dark.png',
      width: 1183,
      height: 242,
      url: 'https://www.lumentum.com/en',
    },
  ],
  [TIER_NAME.SILVER]: [
    {
      name: 'Mission Control Space Services',
      src: '/assets/patron-logos/mission_control_logo.png',
      width: 1600,
      height: 367,
      url: 'https://missioncontrolspace.com',
    },
    {
      name: 'Hydro Ottawa',
      src: '/assets/patron-logos/hydro_ottawa_logo.svg',
      width: 152,
      height: 67,
      url: 'https://hydroottawa.com/en',
    },
    {
      name: 'STL Engineering',
      src: '/assets/patron-logos/stl_engineering_logo.svg',
      width: 602,
      height: 516,
      url: 'https://www.stl-engineering.ca',
      scale: 1.2,
    },
  ],
  [TIER_NAME.BRONZE]: [
    {
      name: 'NAV CANADA',
      src: '/assets/patron-logos/NAVCANADA_logo.png',
      width: 1200,
      height: 866,
      url: 'https://www.navcanada.ca/en/',
      scale: 1.1,
    },
    {
      name: 'Professional Engineers Ontario',
      src: '/assets/patron-logos/peo_logo_light.png',
      darkSrc: '/assets/patron-logos/peo_logo_dark.png',
      width: 384,
      height: 88,
      url: 'https://www.peo.on.ca',
    },
    {
      name: 'IEEE Young Professionals',
      src: '/assets/ieee/young-professionals-30-color.png',
      darkSrc: '/assets/ieee/young-professionals-30-white.png',
      width: 6216,
      height: 2064,
      url: 'https://yp.ieee.org/',
    },
  ],
}

export const PATRONS = {
  TITLE: 'Our Patrons',
  ID: 'patrons',
}

// -----------------  PROGRAM ------------------
export const PROGRAM = {
  ID: 'program',
  TITLE: 'Program',
  INTRO: `Friday, November 13. Every room is inside the ${HERO.LOCATION}.`,
  OVERVIEW: [
    { time: '11:30 AM', endTime: '12:30 PM', title: 'Registration', room: 'GS Foyer' },
    { time: '12:00 PM', endTime: '1:00 PM', title: 'Opening Remarks & Networking', room: 'Newbridge II & III' },
    { time: '1:00 PM', endTime: '5:00 PM', title: 'Workshops & Speakers', room: 'Newbridge I & Signed (GS)', href: '#workshops' },
    { time: '1:00 PM', endTime: '5:00 PM', title: 'Networking', room: 'Sealed & Delivered (GS)' },
    { time: '5:00 PM', endTime: '6:30 PM', title: 'Reception', room: 'Newbridge Foyer' },
    { time: '8:00 PM', endTime: '10:00 PM', title: 'Ottawa Section AGM & Dinner', room: 'Newbridge II & III' },
  ],
  WORKSHOPS_TITLE: 'Workshops & Speakers',
  WORKSHOPS_DESCRIPTION: 'Two rooms run at the same time. Sessions last 30 to 90 minutes, so you can move between them.',
  /** Half-hour slots starting at 1:00 PM. */
  SLOT_LABELS: ['1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30'],
  ROOMS: ['Newbridge I', 'Signed (GS)'],
}

export type SESSION_KIND = 'workshop' | 'talk' | 'panel'

export interface ISESSION {
  title: string
  kind: SESSION_KIND
  room: number
  /** Index into PROGRAM.SLOT_LABELS. */
  start: number
  /** Number of half-hour slots. */
  span: number
  detail?: string
  href?: string
}

export const SESSIONS: ISESSION[] = [
  { title: 'CGI', kind: 'workshop', room: 0, start: 0, span: 1 },
  { title: 'Mission Control', kind: 'workshop', room: 0, start: 1, span: 1 },
  { title: 'IEEE YP Panel', detail: 'From Campus to Career', kind: 'panel', room: 0, start: 2, span: 3, href: '#speakers' },
  { title: 'Marvell', kind: 'workshop', room: 0, start: 5, span: 2 },
  { title: 'Prof. Yiwei Lu', detail: 'AI Safety', kind: 'talk', room: 1, start: 0, span: 1 },
  { title: 'Dr. Bushra Khan', detail: 'Leadership', kind: 'talk', room: 1, start: 1, span: 1 },
  { title: 'STL Engineering', kind: 'workshop', room: 1, start: 2, span: 1 },
  { title: 'Lumentum', kind: 'workshop', room: 1, start: 4, span: 2 },
  { title: 'Women in Tech Panel', kind: 'panel', room: 1, start: 7, span: 1 },
]

// -----------------  SPEAKERS ------------------
export interface ISPEAKER {
  name: string
  title: string
  org: string
  image: string
  bio: string
}

export const SPEAKERS = {
  ID: 'speakers',
  TITLE: 'Speakers',
  INTRO: 'Industry professionals and researchers sharing how they made the move from school to work.',
  PANEL: {
    LABEL: 'IEEE Young Professionals Panel',
    TITLE: 'From Campus to Career: Practical Advice for Your Job Search and First Industry Role',
    WHEN: '2:00 – 3:30 PM',
    ROOM: 'Newbridge I',
    DESCRIPTION: 'A career beyond academia can open many paths, but the transition often raises questions about how to translate research skills into industry roles, navigate hiring expectations, and build a fulfilling career. This career-coaching panel brings together professionals with academic and industry experience to share practical advice, personal lessons, and perspectives on making that transition with confidence.',
    MODERATOR: {
      name: 'Afsoon Alidadi Shamsabadi',
      title: 'Manager, Non-Terrestrial Networks Lab, Carleton University',
      org: 'Carleton University',
      image: '/assets/speaker-headshots/afsoon-alidadi-shamsabadi.jpg',
      bio: 'Afsoon Alidadi Shamsabadi (She/Her) is the Manager of the Non-Terrestrial Networks Lab at Carleton University, Canada. She is also the Past Chair of IEEE Women in Engineering Ottawa, Vice-Chair of IEEE Young Professionals Ottawa, and a Committee Member of IEEE Canada Young Professionals. She holds a PhD from Carleton University and has also studied at Isfahan University of Technology and Sharif University of Technology. She has six years of industry experience at Huawei Technologies, where she served as a Solution Sales Manager specializing in end-to-end wireless network solutions. Her research at Carleton University focuses on non-terrestrial networks (NTN), particularly the integration of High Altitude Platform Stations (HAPS) with terrestrial wireless networks to enable next-generation connectivity. Afsoon is an IEEE Senior Member and is actively involved in the engineering community.',
    } satisfies ISPEAKER,
    PANELISTS: [
      {
        name: 'Dr. Nima Javanbakht',
        title: 'Senior RF Engineer, Sanmina | Adjunct Professor, Carleton University',
        org: 'Sanmina',
        image: '/assets/speaker-headshots/nima-javanbakht.jpg',
        bio: 'Dr. Nima Javanbakht (SM26, M10) is a senior RF engineer with Sanmina Corporation and an adjunct professor at Carleton University since 2021. He is a passionate volunteer and has been volunteering with IEEE for several years in different capacities. Nima is currently leading IEEE Region 7 Young Professionals, and is a committee member in YP MTTS, YP ComSoc, and IEEE Entrepreneurship. Nima received the Ph.D. degree in electrical engineering from Carleton University, Ottawa, ON, Canada, in 2021, which was one of his achievements in his twenties. He has authored and co-authored more than 70 technical papers. His research interests include antennas, wireless communications, miniaturized RF components, integrated RF modules, frequency synthesizers, optical pluggable modules, and microwave sensors.',
      },
      {
        name: 'Dr. Taimoor Abbas',
        title: 'Senior Member of Technical Staff, InterDigital',
        org: 'InterDigital',
        image: '/assets/speaker-headshots/taimoor-abbas.jpg',
        bio: 'Dr. Taimoor Abbas (Senior Member, IEEE) is a Senior Member of Technical Staff at InterDigital, Canada, with over 12 years of experience in the wireless communications industry. He received his Ph.D. (2014) and M.Sc. (2009) degrees in Electrical Engineering from Lund University, Sweden, and an M.Sc. in Electronics (2006) from Quaid-i-Azam University, Pakistan. Previously, he was the co-founder and CEO of ICV-TECH AB and held research and engineering positions at Volvo Cars and Huawei Technologies in Sweden. He actively contributes to 3GPP standardization and holds an extensive IP portfolio, with over 60 granted patents and more than 275 filed patent families. He has also authored four book chapters and more than 30 journal and conference publications. Dr. Abbas is the founder and Chair of the IEEE Vehicular Technology Society (VTS) Young Professionals Committee, promoting mentoring, professional development, and volunteer engagement. His research interests include 5G/6G wireless communications, Vehicle-to-Everything (V2X) technologies, mobile network architectures, MIMO systems, artificial intelligence, and machine learning.',
      },
      {
        name: 'Victoria Pimentel',
        title: 'Technical Customer Support Manager, Solace',
        org: 'Solace',
        image: '/assets/speaker-headshots/victoria.jpg',
        bio: 'Victoria is a Technical Customer Support Manager at Solace, leading a team of engineers dedicated to solving high-stakes, real-world issues where enterprise solutions meet the field. With a background in Computer Engineering and a Master’s in Computer Science, Victoria is an IEEE-published researcher who brings both deep technical rigour and battle-tested troubleshooting experience to the engineering workforce.',
      },
      {
        name: 'Dr. Yaser Eftekhari',
        title: 'Senior AI Engineer, Nokia',
        org: 'Nokia',
        image: '/assets/speaker-headshots/yaser-eftekhari.jpg',
        bio: 'Dr. Yaser Eftekhari understands the journey from academia to industry firsthand. After completing his PhD in Systems and Computer Engineering at Carleton University, focusing on Compressed Sensing and Information Theory, he explored software security as a postdoctoral fellow at Irdeto Canada. This experience sparked a decade-long career at Irdeto, where he tackled real-world challenges in secure payments, cutting-edge security research, and digital car keys. He’s worn many hats, from Cryptography Engineer to Principal Engineer, Lead Architect, Senior R&D Researcher, and Product Manager. Today, he’s a Senior AI Engineer at Nokia, proving that a strong academic foundation can lead to a dynamic and fulfilling industry career.',
      },
    ] satisfies ISPEAKER[],
  },
  TALKS: [
    { name: 'Prof. Yiwei Lu', topic: 'AI Safety', when: '1:00 – 1:30 PM', room: 'Signed (GS)' },
    { name: 'Dr. Bushra Khan', topic: 'Leadership', when: '1:30 – 2:00 PM', room: 'Signed (GS)' },
  ],
}

export const CONTACT_FORM = {
  TITLE: 'Contact Us',
  SUBTITLE: 'Get in Touch',
  DESCRIPTION:
    'Questions or feedback? Drop us a message, and we\'ll get back to you soon.',
  FIELDS: {
    NAME: {
      label: 'Full Name',
      placeholder: 'Your Full Name*',
      errorMessage: 'To whom do we speak to? :/',
    },
    EMAIL: {
      label: 'Email',
      placeholder: 'Your Email*',
      errorMessage:
        'Without a valid email, how are we going to send you our newsletter full of cat memes? :/',
    },
    SUBJECT: {
      label: 'Subject',
      placeholder: 'Subject*',
      errorMessage: 'A subject helps us pretend we\'re organized. :/ ',
    },
    MESSAGE: {
      label: 'Message',
      placeholder: 'Your Message*',
      errorMessage:
        'A message without content is like a sandwich without filling. :/',
    },
  },
  SUBMIT_BUTTON_TEXT: 'Submit',
}

export const FOOTER = {
  LOGO: '/assets/twilight-design-system/ieee_spac_logo_combined_horizontal.svg',
  COPYRIGHT_TEXT: `Copyright © ${EVENT_YEAR} IEEE - All rights reserved.`,
  SOCIAL_MEDIA: [
    {
      name: 'Instagram',
      url: LINKS.INSTAGRAM,
      Icon: FaInstagram,
      className: 'text-rose-500',
    },
    {
      name: 'LinkedIn',
      url: LINKS.LINKEDIN,
      Icon: FaLinkedinIn,
      className: 'text-sky-700',
    },
    {
      name: 'Facebook',
      url: LINKS.FACEBOOK,
      Icon: FaFacebookF,
      className: 'text-blue-600',
    },
    {
      name: 'GitHub',
      url: LINKS.GITHUB,
      Icon: FaGithub,
      className: 'text-green-500',
    },
  ],
}

interface Institution {
  name: string
  imageUrl: string
  url: string
}

export const INSTITUTIONS: Record<string, Institution> = {
  UNIVERSITY_OF_OTTAWA: {
    name: 'University of Ottawa',
    imageUrl: '/assets/institution-logos/university_of_ottawa.svg',
    url: 'https://www.uottawa.ca/en',
  },
  ALGONQUIN_COLLEGE: {
    name: 'Algonquin College',
    imageUrl: '/assets/institution-logos/algonquin_college.svg',
    url: 'https://www.algonquincollege.com',
  },
  CARLETON_UNIVERSITY: {
    name: 'Carleton University',
    imageUrl: '/assets/institution-logos/carleton_university.svg',
    url: 'https://carleton.ca',
  },
}

export interface IBASE_MEMBER_INFO {
  name: string
  image: string
  institution: Institution
  yearStanding?: string
  programName: string
}

export interface ICONTACT_INFO {
  email?: string
  linkedin?: string
  github?: string
  website?: string
  instagram?: string
}

export enum ROLE {
  LEAD = 'Lead',
  COLEAD = 'Co-Lead',
  UOTTAWA_COLEAD = 'uOttawa Co-Lead',
  CARLETON_COLEAD = 'Carleton Co-Lead',
  TREASURER = 'Treasurer',
  CU_CHAIR_TREASURER = 'IEEE Carleton Chair / Treasurer',
  UOTTAWA_CHAIR = 'IEEE uOttawa Chair',
  PATRONAGE_LEAD = 'Patronage Lead & Advisor',
  PATRONAGE_TEAM_MEMBER = 'Patronage',
  LOGISTICS_LEAD = 'Logistics Lead',
  LOGISTICS_TEAM = 'Logistics',
  UOTTAWA_VICE_CHAIR = 'IEEE uOttawa Vice-Chair',
  CARLETON_REP = 'Carleton Rep',
  AC_REP = 'AC Rep',
  SECRETARY = 'Secretary',
  IEEE_CHAIR = 'IEEE uOttawa Chair/Rep',
  TRANSLATION = 'Translation',
  MARKETING_LEAD = 'Marketing Lead',
  MARKETING_TEAM_MEMBER = 'Marketing',
  EQUITY = 'Equity',
  UI_UX_DESIGNER = 'Graphic Design',
  DEVELOPMENT = 'Development',
  WEBMASTER = 'Webmaster',
}

export interface ITEAM_MEMBER extends IBASE_MEMBER_INFO, ICONTACT_INFO {
  role: ROLE
  email?: string
}

export const ROLE_EMAIL_MAP: Record<ROLE, string> = {
  [ROLE.LEAD]: 'lead@ieeespac.ca',
  [ROLE.COLEAD]: 'lead@ieeespac.ca',
  [ROLE.UOTTAWA_COLEAD]: 'lead@ieeespac.ca',
  [ROLE.CARLETON_COLEAD]: 'lead@ieeespac.ca',
  [ROLE.TREASURER]: 'treasurer@ieeespac.ca',
  [ROLE.CU_CHAIR_TREASURER]: 'treasurer@ieeespac.ca',
  [ROLE.UOTTAWA_CHAIR]: '',
  [ROLE.PATRONAGE_LEAD]: 'patronage.lead@ieeespac.ca',
  [ROLE.PATRONAGE_TEAM_MEMBER]: 'patronage@ieeespac.ca',
  [ROLE.LOGISTICS_LEAD]: 'logistics@ieeespac.ca',
  [ROLE.LOGISTICS_TEAM]: 'logistics@ieeespac.ca',
  [ROLE.UOTTAWA_VICE_CHAIR]: '',
  [ROLE.CARLETON_REP]: '',
  [ROLE.AC_REP]: '',
  [ROLE.SECRETARY]: '',
  [ROLE.IEEE_CHAIR]: '',
  [ROLE.TRANSLATION]: '',
  [ROLE.MARKETING_LEAD]: 'marketing@ieeespac.ca',
  [ROLE.MARKETING_TEAM_MEMBER]: 'marketing@ieeespac.ca',
  [ROLE.EQUITY]: '',
  [ROLE.UI_UX_DESIGNER]: '',
  [ROLE.DEVELOPMENT]: 'development@ieeespac.ca',
  [ROLE.WEBMASTER]: 'development@ieeespac.ca',
}

export const TEAM_MEMBERS: ITEAM_MEMBER[] = [
  {
    name: 'Asif Rahman',
    image: '/assets/team-member-headshots/asif-rahman.jpg',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.UOTTAWA_COLEAD,
    yearStanding: '3rd',
    programName: 'Computer Engineering',
    linkedin: 'https://www.linkedin.com/in/asif-rahman-ottawa/',
  },
  {
    name: 'Erika Langner',
    image: '/assets/team-member-headshots/erika-langner.jpg',
    institution: INSTITUTIONS.CARLETON_UNIVERSITY,
    role: ROLE.CARLETON_COLEAD,
    yearStanding: '4th',
    programName: 'Electrical Engineering',
    linkedin: 'https://www.linkedin.com/in/erika-langner/',
  },
  {
    name: 'Jordan Trach',
    image: '/assets/team-member-headshots/jordan-trach.jpg',
    institution: INSTITUTIONS.CARLETON_UNIVERSITY,
    role: ROLE.CU_CHAIR_TREASURER,
    yearStanding: '4th',
    programName: 'Computer Systems Engineering',
    linkedin: 'https://www.linkedin.com/in/jordan-trach/',
  },
  {
    name: 'Samuel Li',
    image: '/assets/team-member-headshots/samuel-li.jpg',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.UOTTAWA_CHAIR,
    yearStanding: '3rd',
    programName: 'Electrical Engineering and Computing Technology',
    linkedin: 'https://www.linkedin.com/in/sam-you-li/',
  },
  {
    name: 'Rory McCulloch',
    image: '/assets/team-member-headshots/rory-mcculloch.png',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.UOTTAWA_VICE_CHAIR,
    yearStanding: '3rd',
    programName: 'Electrical Engineering and Computing Technology',
    email: ROLE_EMAIL_MAP[ROLE.LEAD],
    linkedin: 'https://www.linkedin.com/in/rory-mcculloch/',
    github: '',
    website: '',
    instagram: '',
  },
  {
    name: 'Anna Hargraves',
    image: '/assets/team-member-headshots/anna-hargraves.jpg',
    institution: INSTITUTIONS.CARLETON_UNIVERSITY,
    role: ROLE.PATRONAGE_TEAM_MEMBER,
    yearStanding: '2nd',
    programName: 'Aerospace Engineering',
    linkedin: 'https://www.linkedin.com/in/anna-hargraves-27a1922b9/',
  },
  {
    name: 'Mateus DiGregorio',
    image: '/assets/team-member-headshots/mateus-digregorio.jpg',
    institution: INSTITUTIONS.CARLETON_UNIVERSITY,
    role: ROLE.PATRONAGE_TEAM_MEMBER,
    yearStanding: '3rd',
    programName: 'Civil Engineering',
    linkedin: 'https://www.linkedin.com/in/mateusdigregorio',
  },
  {
    name: 'David Afolabi-Daniels',
    image: '/assets/team-member-headshots/david-afolabi-daniels.jpg',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.PATRONAGE_TEAM_MEMBER,
    yearStanding: '2nd',
    programName: 'Electrical Engineering',
    linkedin: 'https://www.linkedin.com/in/david-afolabi-daniels/',
  },
  {
    name: 'Victoria Richard',
    image: '/assets/team-member-headshots/victoria-richard.jpg',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.LOGISTICS_LEAD,
    yearStanding: '4th',
    programName: 'Multidisciplinary Design Engineering',
    linkedin: 'https://www.linkedin.com/in/victoria-richard1/',
  },
  {
    name: 'Kashika Sharma',
    image: '/assets/team-member-headshots/kashika-sharma.png',
    institution: INSTITUTIONS.CARLETON_UNIVERSITY,
    role: ROLE.LOGISTICS_TEAM,
    yearStanding: '2nd',
    programName: 'Aerospace Engineering',
    linkedin: 'https://www.linkedin.com/in/sharmakashika/',
  },
  {
    name: 'Danella Nduwayo',
    image: '/assets/team-member-headshots/danella-nduwayo.jpg',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.LOGISTICS_TEAM,
    yearStanding: '3rd',
    programName: 'Multidisciplinary Design Engineering',
    linkedin: 'https://www.linkedin.com/in/danella-nduwayo/',
  },
  {
    name: 'Hannah Faller',
    image: '/assets/team-member-headshots/hannah-faller.jpg',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.LOGISTICS_TEAM,
    yearStanding: '2nd',
    programName: 'Multidisciplinary Design',
    linkedin: 'https://www.linkedin.com/in/hannah-faller-029a85392/',
  },
  {
    name: 'Sofia Farhangian Ghahferokhi',
    image: '',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.LOGISTICS_TEAM,
    yearStanding: '2nd',
    programName: 'Computer Engineering',
    linkedin: 'https://www.linkedin.com/in/sofia-farhangian-ghahferokhi-5463193b9/',
  },
  {
    name: 'Joed Gnansounou',
    image: '/assets/team-member-headshots/joed-gnansounou.jpeg',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.LOGISTICS_TEAM,
    yearStanding: '3rd',
    programName: 'Computer Engineering',
    linkedin: 'https://www.linkedin.com/in/joedgnansounou/',
  },
  {
    name: 'Vanshika Vanshika',
    image: '', // '/assets/team-member-headshots/vanshika.jpg',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.LOGISTICS_TEAM,
    yearStanding: '2nd',
    programName: 'Multidisciplinary Design, UX/UI Design and Project Management',
    linkedin: 'https://www.linkedin.com/in/vans0090/',
  },
  {
    name: 'Anique Ali',
    image: '/assets/team-member-headshots/anique-ali.png',
    institution: INSTITUTIONS.CARLETON_UNIVERSITY,
    role: ROLE.LOGISTICS_TEAM,
    yearStanding: '5th',
    programName: 'Software Engineering',
    linkedin: 'https://www.linkedin.com/in/anique-a-456b66175/',
  },
  {
    name: 'Emmanuel Eyito',
    image: '/assets/team-member-headshots/emmanuel-eyito.jpg',
    institution: INSTITUTIONS.ALGONQUIN_COLLEGE,
    role: ROLE.SECRETARY,
    yearStanding: '4th',
    programName: ' Optical Systems and Sensors',
    email: '',
    linkedin: 'https://www.linkedin.com/in/oritse-tsegbemi-eyito-aa58032a1/',
    github: '',
    website: '',
    instagram: '',
  },
  {
    name: 'Meltem Çetin',
    image: '/assets/team-member-headshots/meltem-cetin.jpg',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.MARKETING_LEAD,
    yearStanding: '3rd',
    programName: 'Physics and Electrical Engineering',
    linkedin: 'https://www.linkedin.com/in/meltem-%C3%A7etin-2603652b4/',
  },
  {
    name: 'Gulse Ongu',
    image: '/assets/team-member-headshots/gulse-ongu.jpg',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.MARKETING_TEAM_MEMBER,
    yearStanding: '3rd',
    programName: 'Electrical Engineering and Computing Technology',
    linkedin: 'https://www.linkedin.com/in/gulse-ongu-9355b9331/',
  },
  {
    name: 'Alex Cameron',
    image: '/assets/team-member-headshots/alex-cameron.png',
    institution: INSTITUTIONS.CARLETON_UNIVERSITY,
    role: ROLE.MARKETING_TEAM_MEMBER,
    yearStanding: '2nd',
    programName: 'Aerospace Engineering',
    linkedin: 'https://www.linkedin.com/in/alex-cameron-32295327b/',
  },
  {
    name: 'Steffen Zylstra',
    image: '/assets/team-member-headshots/steffen-zylstra.jpg',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.EQUITY,
    yearStanding: '4th',
    programName: 'Physics and Electrical Engineering',
    linkedin: 'https://www.linkedin.com/in/szyls/',
  },
  {
    name: 'Waaberi Ibrahim',
    image: '/assets/team-member-headshots/waaberi-ibrahim.png',
    institution: INSTITUTIONS.UNIVERSITY_OF_OTTAWA,
    role: ROLE.WEBMASTER,
    yearStanding: '2nd',
    programName: 'Software Engineering',
    linkedin: 'https://www.linkedin.com/in/waaberi/',
    github: 'https://github.com/waaberi',
    website: 'https://waaberi.dev/',
  },
]

export const CONTACT_FORM_EMAILS = {
  TEAM_EMAIL: 'lead@ieeespac.ca',
  FORM_SUBMISSION_EMAIL: 'formsubmission@ieeespac.ca',
}
