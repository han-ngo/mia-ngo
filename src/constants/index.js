import {
  java,
  python,
  csharp,
  knockoutjs,
  backbonejs,
  postgresql,
  ruby,
  rails,
  javascript,
  typescript,
  html,
  css,
  sass,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  mysql,
  selenium,
  playwright,
} from "../assets";

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "ThreeJS",
    icon: threejs,
  },
  {
    name: "Selenium",
    icon: selenium,
  },
  {
    name: "Playwright",
    icon: playwright,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Rails",
    icon: rails,
  },
  {
    name: "KnockoutJS",
    icon: knockoutjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
];

const education = [
  {
    id: 0,
    icon: "icon-graduation",
    year: "June 2023 – Present",
    title: "UC Berkeley",
    link: "https://inst.eecs.berkeley.edu/~cs188/sp23/",
    subtitle: "Introduction to Artificial Intelligence",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
    points: [],
  },
  {
    id: 0,
    icon: "icon-graduation",
    year: "June 2023 – Present",
    title: "Coursera",
    link: "https://www.coursera.org/specializations/machine-learning-introduction",
    subtitle: "Machine Learning Specialization Certificate",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
    points: [],
  },
  {
    id: 2,
    icon: "icon-graduation",
    year: "August 2016 - May 2020",
    title: "University of Utah",
    link: "https://www.cs.utah.edu/",
    subtitle: "Bachelor's Degree in Computer Science",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
    points: [
      "Dean's List (Multiple Semesters)",
      "Phi Eta Sigma Honor Society",
      "Relevant Courses: Natural Language Processing, Operating System, Database, Web Software Architecture, Algorithms, Visualization for Data Science, Security, Networking, Computer Architecture, Linear Algebra, Calculus",
    ],
  },
];

const work = [
  {
    id: 0,
    icon: "icon-briefcase",
    year: "June 2020 – Present",
    title: "Oracle",
    link: "https://www.oracle.com/corporate/",
    subtitle: "Software Engineer",
    desc: "Content and Experience Cloud",
    points: [
      "Launched Site Plan features, enhancing workflow for multi-lingual websites; supported millions of pages across 39 languages and 10,000+ sites.",
      "Owned and developed <a className='text-[#FF4D61] dark:text-[#ff79c6] hover:text-[#fc9faa] dark:hover:text-[#ffbde3] font-medium' target='_blank' href='https://www.oracle.com/content-management/cx/video-content-creation-delivery/#content-calendaring'>Scheduled Publishing</a> features, led to a 35% increase in product revenue within six months of launch and boosted user productivity by 50% through job scheduling and management.",
      "Spearheaded the migration of a product-wide internal tool from MomentJS to DayJS, enhancing performance and standardization across the platform.",
    ],
  },
  {
    id: 1,
    icon: "icon-briefcase",
    year: "May 2019 – Aug 2019",
    title: "Goldman Sachs",
    link: "https://www.goldmansachs.com/",
    subtitle: "Software Engineer Intern",
    desc: "Risk Engineering",
    points: [
      "Led automation of internal credit limit system for GS counterparties, reducing errors and boosting efficiency by 85%.",
      "Worked directly with stakeholders to understand, document, and develop intuitive UI, leading to a 35% decrease in support ticket volumes and enhancing overall usability.",
    ],
  },
  {
    id: 2,
    icon: "icon-briefcase",
    year: "May 2018 – Aug 2018",
    title: "Instructure Inc.",
    link: "https://www.instructure.com/",
    subtitle: "Software Engineer Intern",
    desc: "Canvas Platform Team",
    points: [
      "Established and owned a REST endpoint for key creation, streamlining third-party integration configuration by 40%.",
      "Enhanced student data privacy by 75% by implementing robust authentication leveraging Consul.",
    ],
  },
];

export { technologies, education, work };
