export const site = {
  name: 'Antonio Fabrizio',
  role: 'Full stack engineer',
  company: 'Excellis Interactive',
  email: 'antonioman44@gmail.com',
  location: 'Horsham, PA',
  linkedin: 'https://www.linkedin.com/in/antonio-fabrizio-746989248/',
  github: 'https://github.com/Tonesman44',
  resumePdf: `${import.meta.env.BASE_URL}Antonio_Fabrizio_Resume.pdf`,
  resumeDocx: `${import.meta.env.BASE_URL}Antonio_Fabrizio_Resume.docx`,
  resumeUpdated: 'September 2026',
  necc: 'https://liquipedia.net/marvelrivals/NECC/2026/Nationals/Division_II',
}

// One page, seven sections. `id` is the element id the nav scrolls to.
export const nav = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

// Broadcast ticker strips between sections.
export const ticker = [
  'Full stack engineer',
  'Excellis Interactive',
  '.NET + Angular + Ionic',
  'React + Vite',
  'Brainrot Brawl on Roblox',
  'NECC D2 national champion',
  'Temple University 2026',
  'Horsham, PA',
]
