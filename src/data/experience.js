import excellisLogo from '../assets/logos/excellis.png'
import suitableLogo from '../assets/logos/suitable.png'
import owlLogo from '../assets/logos/temple-esports.png'
import suitableTeam from '../assets/photos/suitable-team.jpg'
import suitableGroup from '../assets/photos/suitable-group.jpg'
import suitableBadge from '../assets/photos/suitable-badge.jpg'
import esportsLab from '../assets/photos/esports-lab.jpg'
import esportsDesk from '../assets/photos/esports-desk.jpg'
import esportsBroadcast from '../assets/photos/esports-broadcast.jpg'

export const experience = [
  {
    id: 'excellis',
    company: 'Excellis Interactive',
    role: 'Full stack engineer',
    dates: 'June 2025 to present',
    place: 'King of Prussia, PA',
    logo: excellisLogo,
    stack: ['.NET', 'Angular', 'Ionic', 'TypeScript', 'SQL', 'Claude Code'],
    bullets: [
      'Build and ship full-stack CRM applications end to end, turning BRDs and Figma or Vercel designs into .NET APIs and Angular front ends.',
      'Develop cross-platform web and mobile applications with Ionic and Angular on a .NET backend, from data model and API design through to the responsive UI.',
      'Own ongoing support for 6 legacy codebases: triaging fix requests, debugging production issues, and delivering changes without disrupting live users.',
      'Helped build a suite of AI skills that draft BRDs, review them for gaps, and generate development tickets, cutting the time from business request to sprint-ready work.',
      'Work directly with stakeholders, designers, and developers through sprint planning, code reviews, and daily standups to keep delivery predictable and quality high.',
    ],
    photos: [],
    // Shown when there are no photos yet
    panel: { big: '6', small: 'legacy codebases supported alongside new CRM builds' },
  },
  {
    id: 'suitable',
    company: 'Suitable',
    role: 'Software engineer intern',
    dates: 'April 2023 to August 2024',
    place: 'Philadelphia, PA',
    logo: suitableLogo,
    stack: ['React', 'Angular', 'Cypress', 'Jest', 'CircleCI', 'AWS'],
    bullets: [
      'Wrote Cypress end-to-end and Jest unit tests across the platform, expanding coverage of critical user flows and catching regressions before release.',
      'Converted legacy Angular components into modern React components while preserving existing functionality.',
      'Configured CircleCI pipelines, including an automated rerun system for failed tests that cut false failures.',
      'Built new REST APIs modeled on existing endpoints, testing and documenting them in Postman.',
      'Implemented a scheduler that automatically deletes unused AWS resources, reducing monthly cloud spend.',
    ],
    photos: [
      { src: suitableGroup, alt: 'The Suitable team posing together at a company event', span: 'wide' },
      { src: suitableTeam, alt: 'Suitable teammates talking poolside at a summer offsite' },
      { src: suitableBadge, alt: 'Antonio’s Suitable staff badge' },
    ],
  },
  {
    id: 'temple-esports',
    company: 'Temple University Esports',
    role: 'Head of competitive operations',
    dates: 'Student leadership and Marvel Rivals roster',
    place: 'Philadelphia, PA',
    logo: owlLogo,
    stack: ['Leadership', 'Event ops', 'Scheduling', 'Recruiting'],
    bullets: [
      'Directed competitive operations across multiple esports teams, overseeing team leads, player development, and program strategy.',
      'Organized and hosted a collegiate LAN tournament in Center City Philadelphia with teams from multiple schools.',
    ],
    photos: [
      { src: esportsLab, alt: 'Temple players competing side by side in the esports lab', span: 'wide' },
      { src: esportsDesk, alt: 'Two casters at the broadcast desk during a Temple match' },
      { src: esportsBroadcast, alt: 'Stream overlay for Temple Cherry versus Drexel Gold' },
    ],
    more: { to: '/about', label: 'Read the full esports story' },
  },
]
