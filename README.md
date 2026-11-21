# Antonio Fabrizio: Portfolio

Single-page React portfolio. Black and Temple cherry, styled like a collegiate esports broadcast: the nav "cuts" between sections with a stinger wipe, project cards stack as you scroll, and the skills section is an interactive loadout.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

Requires Node 20.19+ (Vite 7).

## Deploy

**Vercel (recommended):** import the repo, framework preset "Vite". `vercel.json` rewrites every route to `index.html`, so deep links like `/#projects` keep working.

**Netlify:** build command `npm run build`, publish directory `dist`. `public/_redirects` handles routing.

**GitHub Pages:** add `base: '/<repo-name>/'` in `vite.config.js`, build, and deploy `dist/`.

### Link previews

`index.html` has Open Graph and Twitter tags, and `public/og-image.jpg` (1200x630) is the card LinkedIn, iMessage, Slack and Discord show. Those tags need absolute URLs, so the build fills in `%SITE_URL%`:

- On Vercel it uses the project's production domain automatically.
- For a custom domain, set the `SITE_URL` environment variable in Vercel (for example `https://antoniofabrizio.com`).

After deploying, paste the URL into LinkedIn's Post Inspector to refresh its cached preview.

### Analytics

The site uses Vercel Web Analytics, which sets no cookies and collects no personal data (`src/lib/analytics.js`). Turn it on in the Vercel dashboard: Project, Analytics, Enable. It does nothing in `npm run dev`.

Because the site is one page, it reports a page view the first time a visitor reaches each section (`/about`, `/projects`, ...) and each project card (`/projects/movie-club-video`, ...), so the Pages list in the dashboard shows which projects people actually look at. Clicks on project links, case study tabs, resume downloads and the contact form are also sent as custom events, which Vercel only shows on the Pro plan.

## How the page is put together

| Section | File |
| --- | --- |
| Hero, highlights board | `src/sections/Hero.jsx` |
| About and Temple Esports | `src/sections/About.jsx` |
| Projects (the stacking cards) | `src/sections/Projects.jsx` |
| Experience timeline | `src/sections/Experience.jsx` |
| Skills loadout | `src/sections/Skills.jsx` |
| Resume, Contact | `src/sections/Resume.jsx`, `src/sections/Contact.jsx` |

Shared pieces live in `src/components/`: `Cut.jsx` (the stinger cut used by every nav link), `Nav.jsx` (scroll spy and progress bar), `Section.jsx` (section heads with the word reveal), `Reveal.jsx` (scroll-in animations), `Ticker.jsx` (the marquee strips), `VideoReel.jsx` (gameplay clips), `Slideshow.jsx` (screenshot walkthroughs), `AppMock.jsx` (rendered mock screens), `Tilt.jsx` (3D hover), `Counter.jsx` (count-up numbers), `Spotlight.jsx` (the red glow that follows the pointer).

## Where to edit things

| What | File |
| --- | --- |
| Email, links, resume date, nav order, ticker text | `src/data/site.js` |
| Projects: copy, stack, clips, screenshots, mock screens | `src/data/projects.js` |
| Jobs, bullets, photos | `src/data/experience.js` |
| Skills: level, year started, where used | `src/data/skills.js` |
| About / esports copy | `src/sections/About.jsx` |
| Colors and fonts | top of `src/styles/base.css` |
| Mock screen content | `src/components/AppMock.jsx`, styles in `src/styles/mocks.css` |

### Project media

- **Gameplay clips** (Brainrot Brawl) are in `public/video/` as web-ready H.264 (1280x720, 30 fps). Poster frames and stills are in `src/assets/projects/brainrot/`. To add a clip, drop the mp4 in `public/video/`, a poster frame in the assets folder, and add an entry to the project's `media.clips` in `src/data/projects.js`.
- **Screenshots** are in `src/assets/projects/<slug>/` (1440x900 works best, 16:10 frame). Import them in `src/data/projects.js` and add a slide with `image`.
- **Mock screens** are React components in `src/components/AppMock.jsx`. A slide with `mock: 'pet-browse'` renders that screen inside the browser frame instead of an image.

### Updating the resume

Edit the `.docx` in Word, check it still fits on one page, and save it over `public/Antonio_Fabrizio_Resume.docx`. Export the PDF from Word (File, Save As, PDF) to `public/Antonio_Fabrizio_Resume.pdf`. Then regenerate the preview image `src/assets/photos/resume-preview.jpg` (about 1100 px wide), for example with:

```bash
pdftoppm -jpeg -r 130 -singlefile public/Antonio_Fabrizio_Resume.pdf src/assets/photos/resume-preview
```

Also bump `resumeUpdated` in `src/data/site.js`.

### Contact form

The form opens the visitor's email app with the message pre-filled. To receive messages directly instead, create a free form at formspree.io and replace the `submit` function in `src/sections/Contact.jsx` with a `fetch` POST to your Formspree endpoint.

## Stack

React 19, Vite, Motion (animation), Embla Carousel (slideshows), React Icons, Fontsource (self-hosted Big Shoulders Display and Schibsted Grotesk). No router: the page is one scroll, and the nav drives it.
