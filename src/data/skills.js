import {
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiSass, SiReact, SiAngular, SiIonic, SiDotnet,
  SiRedux, SiNodedotjs, SiCypress, SiJest, SiCircleci, SiPostman, SiGit, SiVercel, SiFigma, SiClaude, SiCursor,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa6'
import { TbBrandCSharp, TbSql, TbApi, TbUsersGroup, TbGitMerge, TbBug } from 'react-icons/tb'

export const skillGroups = [
  { id: 'lang', label: 'Languages' },
  { id: 'fw', label: 'Frameworks' },
  { id: 'test', label: 'Testing and CI' },
  { id: 'tools', label: 'Cloud and tools' },
  { id: 'ai', label: 'AI tooling' },
  { id: 'team', label: 'How I work' },
]

// Rows are laid out like a keyboard. `w` is key width in units (1 = standard key).
export const keyboard = [
  [
    { name: 'JavaScript', icon: SiJavascript, group: 'lang', used: 'Suitable, Excellis, Movie Review Site' },
    { name: 'TypeScript', icon: SiTypescript, group: 'lang', used: 'Angular and Ionic apps at Excellis' },
    { name: 'C#', icon: TbBrandCSharp, group: 'lang', used: '.NET APIs at Excellis, ActiveStaysPlanned, Pet Adoption App' },
    { name: 'Java', icon: FaJava, group: 'lang', used: 'Temple coursework in data structures and program design' },
    { name: 'Python', icon: SiPython, group: 'lang', used: 'Temple coursework and scripting' },
    { name: 'SQL', icon: TbSql, group: 'lang', used: 'CRM data models at Excellis, Pet Adoption database' },
    { name: 'HTML', icon: SiHtml5, group: 'lang', used: 'Every front end I have shipped' },
    { name: 'CSS / Sass', icon: SiSass, group: 'lang', used: 'Responsive UI at Excellis and Suitable', w: 1.5 },
  ],
  [
    { name: 'React', icon: SiReact, group: 'fw', used: 'Angular-to-React migration at Suitable, this portfolio', w: 1.25 },
    { name: 'Angular', icon: SiAngular, group: 'fw', used: 'CRM front ends at Excellis', w: 1.25 },
    { name: 'Ionic', icon: SiIonic, group: 'fw', used: 'Cross-platform mobile apps at Excellis' },
    { name: '.NET', icon: SiDotnet, group: 'fw', used: 'Backend APIs at Excellis' },
    { name: 'ASP.NET Core MVC', icon: SiDotnet, group: 'fw', used: 'ActiveStaysPlanned migration', w: 2 },
    { name: 'Redux', icon: SiRedux, group: 'fw', used: 'State management in React apps' },
    { name: 'Node.js', icon: SiNodedotjs, group: 'fw', used: 'Build tooling and scripts' },
  ],
  [
    { name: 'Cypress', icon: SiCypress, group: 'test', used: 'End-to-end coverage of critical flows at Suitable', w: 1.25 },
    { name: 'Jest', icon: SiJest, group: 'test', used: 'Unit tests across the Suitable platform' },
    { name: 'CircleCI', icon: SiCircleci, group: 'test', used: 'Pipelines and the automated test rerun system at Suitable', w: 1.25 },
    { name: 'Postman', icon: SiPostman, group: 'test', used: 'Testing and documenting REST APIs at Suitable' },
    { name: 'AWS', icon: FaAws, group: 'tools', used: 'Automated cleanup of unused resources at Suitable' },
    { name: 'Git', icon: SiGit, group: 'tools', used: 'Daily, everywhere' },
    { name: 'REST APIs', icon: TbApi, group: 'tools', used: 'Designed at Excellis, built at Suitable', w: 1.5 },
  ],
  [
    { name: 'Figma', icon: SiFigma, group: 'tools', used: 'Turning designs into Angular UI at Excellis' },
    { name: 'Vercel', icon: SiVercel, group: 'tools', used: 'Design handoff and prototypes at Excellis' },
    { name: 'Claude Code', icon: SiClaude, group: 'ai', used: 'Building AI skills that draft and review BRDs at Excellis', w: 1.5 },
    { name: 'Cursor', icon: SiCursor, group: 'ai', used: 'Day-to-day AI-assisted development' },
    { name: 'Agile sprints', icon: TbUsersGroup, group: 'team', used: 'Sprint planning and standups at Excellis and Suitable', w: 1.5 },
    { name: 'Code review', icon: TbGitMerge, group: 'team', used: 'Daily reviews with senior devs at Suitable, peers at Excellis', w: 1.5 },
    { name: 'Prod support', icon: TbBug, group: 'team', used: 'Six legacy codebases at Excellis', w: 1.5 },
  ],
]
