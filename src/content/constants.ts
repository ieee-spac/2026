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
  SPAC_TICKETS: 'https://www.eventbrite.com/e/student-professional-awareness-conference-2025-tickets-1661438470189?utm_experiment=test_share_listing&sg=46bac6f1b1abfbd58224fb8e29a196e19e7dd4a112e84e17e4a90a27dd5125890e38d4c589f3ec78c4d3a2fb06fc258d4e9213a81710f6600a1e5ce02061d0b6cd2095bc6b53e5cdd80f7a78a0f2',
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
    // { name: 'Patrons', path: '#patrons' },
    /* { name: 'Previous Patrons', path: '#previouspatrons' }, */
    // { name: 'Agenda', path: '#agenda' },
    { name: 'Team', path: '#team' },
    { name: 'Contact', path: '#contact' },
  ],
}

// -----------------  HERO ------------------
export const HERO = {
  IMAGE_ALT_TEXT: 'Main SPAC logo with year and stars',
  TITLE: 'IEEE Student Professional Awareness Conference',
  DATE: 'November 13',
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

export enum TIER_NAME {
  PLATINUM = 'Platinum/Title',
  GOLD = 'Gold',
  SILVER = 'Silver',
  BRONZE = 'Bronze',
  HOSTED = 'Hosted By',
}

export interface ITIER_LOGO {
  light: string
  dark: string
  alt: string
  url: string
}

export const TIER_PROPERTIES = {
  [TIER_NAME.PLATINUM]: {
    titleColor: 'text-warning',
    gradientClass: 'from-warning to-background',
  },
  [TIER_NAME.GOLD]: {
    titleColor: 'text-tertiary',
    gradientClass: 'from-tertiary to-background',
  },
  [TIER_NAME.SILVER]: {
    titleColor: 'text-slate-400',
    gradientClass: 'from-slate-400 to-background',
  },
  [TIER_NAME.BRONZE]: {
    titleColor: 'text-amber-800',
    gradientClass: 'from-amber-800 to-background',
  },
  [TIER_NAME.HOSTED]: {
    titleColor: 'text-cyan-400',
    gradientClass: 'from-cyan-400 to-background',
  },
}

export const PATRONS_DATA: Record<TIER_NAME, ITIER_LOGO[]> = {
  [TIER_NAME.PLATINUM]: [
    {
      light: '/assets/patron-logos/QNX-Logo-BLACK-RGB (2).svg',
      dark: '/assets/patron-logos/QNX-Logo-QNX-CORAL-RGB.svg',
      alt: 'QNX logo',
      url: 'https://blackberry.qnx.com',
    },
  ],
  [TIER_NAME.GOLD]: [

    {
      light: '/assets/patron-logos/redbull_logo.png',
      dark: '/assets/patron-logos/redbull_logo.png',
      alt: 'Redbull logo',
      url: 'https://www.redbull.com/ca-en',
    },
    {
      light: '/assets/patron-logos/lumentum_logo_light.png',
      dark: '/assets/patron-logos/lumentum_logo_dark.png',
      alt: 'Lumentum logo',
      url: 'https://www.lumentum.com/en',
    },
  ],
  [TIER_NAME.SILVER]: [
    {
      light: '/assets/patron-logos/ieee_life_members_logo.png',
      dark: '/assets/patron-logos/ieee_life_members_logo.png',
      alt: 'IEEE Life Members Affinity Groups Logo',
      url: 'https://life.ieee.org',
    },
    {
      light: '/assets/patron-logos/CGI_logo.png',
      dark: '/assets/patron-logos/CGI_logo.png',
      alt: 'CGI Logo',
      url: 'https://www.cgi.com/canada/en-ca',
    },
    {
      light: '/assets/patron-logos/nordion_logo_light.svg',
      dark: '/assets/patron-logos/nordion_logo_dark.svg',
      alt: 'Nordion Logo',
      url: 'https://www.nordion.com',
    },
  ],
  [TIER_NAME.BRONZE]: [
    {
      light: '/assets/patron-logos/NAVCANADA_logo.png',
      dark: '/assets/patron-logos/NAVCANADA_logo.png',
      alt: 'Nav Canada Logo',
      url: 'https://www.navcanada.ca/en/',
    },
  ],
  [TIER_NAME.HOSTED]: [
    {
      light: '/assets/patron-logos/ieee_uottawa_logo_light.svg',
      dark: '/assets/patron-logos/ieee_uottawa_logo_dark.svg',
      alt: 'uOttawa IEEE Logo',
      url: 'https://ieeeuottawa.ca',
    },
    {
      light: '/assets/patron-logos/carleton_university_logo_light.svg',
      dark: '/assets/patron-logos/carleton_university_logo_dark.svg',
      alt: 'Carleton University Logo',
      url: 'https://carleton.ca',
    },
    {
      light: '/assets/patron-logos/algonquin_college_logo_green.png',
      dark: '/assets/patron-logos/algonquin_college_logo_green.png',
      alt: 'Algonquin College Logo',
      url: 'https://www.algonquincollege.com',
    },

  ],
}

export const PATRONS = {
  TITLE: 'Our Patrons',
  ID: 'patrons',
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
    name: 'Meltem Selin',
    image: '/assets/team-member-headshots/meltem-selin.jpg',
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
