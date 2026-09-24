# Antonio Fabrizio: Portfolio

Multi-page React portfolio. Black and Temple cherry, styled like a collegiate esports broadcast.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

## Deploy

**Vercel (recommended):** import the repo, framework preset "Vite". `vercel.json` already rewrites every route to `index.html`, so links like `/projects/pet-adoption` work on refresh.

**Netlify:** build command `npm run build`, publish directory `dist`. `public/_redirects` handles routing.

**GitHub Pages:** Pages can't rewrite routes, so build with hash routing:
1. In `vite.config.js` add `base: '/<repo-name>/'`
2. Build with `VITE_ROUTER=hash npm run build` and deploy `dist/`

## Where to edit things

| What | File |
| --- | --- |
| Email, links, resume date | `src/data/site.js` |
| Projects and slideshow slides | `src/data/projects.js` |
| Jobs, bullets, photos | `src/data/experience.js` |
| Keyboard skills | `src/data/skills.js` |
| About / esports copy | `src/pages/About.jsx` |
| Colors and fonts | top of `src/styles/base.css` |

### Adding project screenshots

Slides without an image show a styled wireframe. To use a real screenshot:

```js
// src/data/projects.js
import checkout from '../assets/projects/activestays/checkout.png'
// ...
{ title: 'Checkout', caption: '...', layout: 'form', path: '/checkout', image: checkout },
```

16:10 images (e.g. 1600x1000) fit the frame best.

### Adding Excellis photos

Add entries to `photos` for the Excellis job in `src/data/experience.js` (same shape as Suitable's). The red panel only shows when there are no photos.

### Updating the resume

Replace `public/Antonio_Fabrizio_Resume.pdf` and `.docx`, then regenerate the preview image:

```bash
pdftoppm -jpeg -r 110 -singlefile public/Antonio_Fabrizio_Resume.pdf src/assets/photos/resume-preview
```

### Contact form

The form opens the visitor's email app with the message pre-filled. To receive messages directly instead, create a free form at formspree.io and replace the `submit` function in `src/pages/Contact.jsx` with a `fetch` POST to your Formspree endpoint.

## Stack

React 19, Vite, React Router, Motion (animation), Embla Carousel (slideshows), React Icons, Fontsource (self-hosted Big Shoulders Display and Schibsted Grotesk).
