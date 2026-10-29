import {
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiSass, SiReact, SiAngular, SiIonic, SiDotnet, SiLua,
  SiRedux, SiNodedotjs, SiCypress, SiJest, SiCircleci, SiPostman, SiGit, SiVercel, SiFigma, SiClaude, SiCursor, SiFramer, SiRoblox,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa6'
import { TbBrandCSharp, TbSql, TbApi, TbUsersGroup, TbGitMerge, TbBug } from 'react-icons/tb'

export const skillGroups = [
  { id: 'lang', label: 'Languages', color: '#ff3348' },
  { id: 'fw', label: 'Frameworks', color: '#ff7a3d' },
  { id: 'test', label: 'Testing and CI', color: '#ffc43d' },
  { id: 'tools', label: 'Cloud and tools', color: '#3dd6ff' },
  { id: 'ai', label: 'AI tooling', color: '#b86bff' },
  { id: 'team', label: 'How I work', color: '#6bff9c' },
]

// level: 1 to 5. since: the year I started using it. where: the places it shows up on this page.
export const skills = [
  { name: 'JavaScript', icon: SiJavascript, group: 'lang', level: 5, since: 2021, used: 'Suitable, Excellis, the Fairmount Dog Co. site, and this portfolio.', where: ['Suitable', 'Excellis', 'Fairmount Dog Co.'] },
  { name: 'TypeScript', icon: SiTypescript, group: 'lang', level: 4, since: 2023, used: 'Angular and Ionic apps at Excellis.', where: ['Excellis'] },
  { name: 'C#', icon: TbBrandCSharp, group: 'lang', level: 4, since: 2022, used: '.NET APIs at Excellis, ActiveStaysPlanned, and the Pet Adoption App.', where: ['Excellis', 'ActiveStaysPlanned', 'Pet Adoption App'] },
  { name: 'Luau', icon: SiLua, group: 'lang', level: 4, since: 2025, used: '46K+ lines across the client and server of Brainrot Brawl.', where: ['Brainrot Brawl'] },
  { name: 'SQL', icon: TbSql, group: 'lang', level: 4, since: 2022, used: 'CRM data models at Excellis, the Pet Adoption database, SQL Server for ActiveStaysPlanned.', where: ['Excellis', 'Pet Adoption App', 'ActiveStaysPlanned'] },
  { name: 'Java', icon: FaJava, group: 'lang', level: 3, since: 2021, used: 'Temple coursework in data structures and program design.', where: ['Temple University'] },
  { name: 'Python', icon: SiPython, group: 'lang', level: 3, since: 2021, used: 'Scripting, and the rbxmx sync tool that keeps Brainrot Brawl’s Lua in git.', where: ['Brainrot Brawl', 'Temple University'] },
  { name: 'HTML', icon: SiHtml5, group: 'lang', level: 5, since: 2020, used: 'Every front end I have shipped.', where: ['Everywhere'] },
  { name: 'CSS / Sass', icon: SiSass, group: 'lang', level: 5, since: 2020, used: 'Responsive UI at Excellis and Suitable. Design systems for the dog walking site and this one.', where: ['Excellis', 'Suitable', 'Fairmount Dog Co.'] },

  { name: 'React', icon: SiReact, group: 'fw', level: 4, since: 2023, used: 'Angular-to-React migration at Suitable, Fairmount Dog Co., and this portfolio.', where: ['Suitable', 'Fairmount Dog Co.'] },
  { name: 'Angular', icon: SiAngular, group: 'fw', level: 4, since: 2023, used: 'CRM front ends at Excellis, legacy components at Suitable.', where: ['Excellis', 'Suitable'] },
  { name: 'Ionic', icon: SiIonic, group: 'fw', level: 3, since: 2025, used: 'Cross-platform mobile apps at Excellis.', where: ['Excellis'] },
  { name: '.NET', icon: SiDotnet, group: 'fw', level: 4, since: 2022, used: 'Backend APIs at Excellis.', where: ['Excellis'] },
  { name: 'ASP.NET Core MVC', icon: SiDotnet, group: 'fw', level: 4, since: 2025, used: 'The ActiveStaysPlanned migration from Web Forms.', where: ['ActiveStaysPlanned'] },
  { name: 'Roblox engine', icon: SiRoblox, group: 'fw', level: 4, since: 2025, used: 'Client-server architecture, DataStores, MarketplaceService, and RemoteEvents for Brainrot Brawl.', where: ['Brainrot Brawl'] },
  { name: 'Motion', icon: SiFramer, group: 'fw', level: 4, since: 2025, used: 'Orchestrated animation on Fairmount Dog Co. and every reveal on this page.', where: ['Fairmount Dog Co.'] },
  { name: 'Redux', icon: SiRedux, group: 'fw', level: 3, since: 2023, used: 'State management in React apps at Suitable.', where: ['Suitable'] },
  { name: 'Node.js', icon: SiNodedotjs, group: 'fw', level: 3, since: 2022, used: 'Build tooling, scripts, and the Node version of the rbxmx sync tool.', where: ['Brainrot Brawl'] },

  { name: 'Cypress', icon: SiCypress, group: 'test', level: 4, since: 2023, used: 'End-to-end coverage of critical flows at Suitable.', where: ['Suitable'] },
  { name: 'Jest', icon: SiJest, group: 'test', level: 4, since: 2023, used: 'Unit tests across the Suitable platform.', where: ['Suitable'] },
  { name: 'CircleCI', icon: SiCircleci, group: 'test', level: 3, since: 2023, used: 'Pipelines and the automated test rerun system at Suitable.', where: ['Suitable'] },
  { name: 'Postman', icon: SiPostman, group: 'test', level: 4, since: 2023, used: 'Testing and documenting REST APIs at Suitable.', where: ['Suitable'] },

  { name: 'AWS', icon: FaAws, group: 'tools', level: 3, since: 2023, used: 'Automated cleanup of unused resources at Suitable.', where: ['Suitable'] },
  { name: 'Git', icon: SiGit, group: 'tools', level: 5, since: 2020, used: 'Daily, everywhere.', where: ['Everywhere'] },
  { name: 'REST APIs', icon: TbApi, group: 'tools', level: 4, since: 2023, used: 'Designed at Excellis, built at Suitable, consumed (Yelp) in ActiveStaysPlanned.', where: ['Excellis', 'Suitable'] },
  { name: 'Figma', icon: SiFigma, group: 'tools', level: 3, since: 2025, used: 'Turning designs into Angular UI at Excellis.', where: ['Excellis'] },
  { name: 'Vercel', icon: SiVercel, group: 'tools', level: 3, since: 2025, used: 'Design handoff and prototypes at Excellis. This site deploys there too.', where: ['Excellis'] },

  { name: 'Claude Code', icon: SiClaude, group: 'ai', level: 4, since: 2025, used: 'Building AI skills that draft and review BRDs at Excellis, and a daily pair on Brainrot Brawl.', where: ['Excellis', 'Brainrot Brawl'] },
  { name: 'Cursor', icon: SiCursor, group: 'ai', level: 4, since: 2025, used: 'Day-to-day AI-assisted development.', where: ['Excellis'] },

  { name: 'Agile sprints', icon: TbUsersGroup, group: 'team', level: 4, since: 2023, used: 'Sprint planning and standups at Excellis and Suitable.', where: ['Excellis', 'Suitable'] },
  { name: 'Code review', icon: TbGitMerge, group: 'team', level: 4, since: 2023, used: 'Daily reviews with senior devs at Suitable, peers at Excellis.', where: ['Excellis', 'Suitable'] },
  { name: 'Prod support', icon: TbBug, group: 'team', level: 4, since: 2025, used: 'Six legacy codebases at Excellis.', where: ['Excellis'] },
]

export const levelLabel = ['', 'Learning', 'Comfortable', 'Solid', 'Strong', 'Main pick']
