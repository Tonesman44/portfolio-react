// ─────────────────────────────────────────────────────────────
// Each project drives one card in the Projects section.
//   media.type = 'reel'   -> gameplay clips in public/video with poster frames
//   media.type = 'slides' -> screenshots (image) or rendered mock screens (mock)
// Drop new screenshots in src/assets/projects/<slug>/ and import them below.
// ─────────────────────────────────────────────────────────────
import brCover from '../assets/projects/brainrot/cover.jpg'
import br1a from '../assets/projects/brainrot/clip-1-a.jpg'
import br1b from '../assets/projects/brainrot/clip-1-b.jpg'
import br2a from '../assets/projects/brainrot/clip-2-a.jpg'
import br2c from '../assets/projects/brainrot/clip-2-c.jpg'
import br3b from '../assets/projects/brainrot/clip-3-b.jpg'
import br4a from '../assets/projects/brainrot/clip-4-a.jpg'
import br4b from '../assets/projects/brainrot/clip-4-b.jpg'

import fmHero from '../assets/projects/fairmount/hero.jpg'
import fmServices from '../assets/projects/fairmount/services.jpg'
import fmNeighborhood from '../assets/projects/fairmount/neighborhood.jpg'
import fmPack from '../assets/projects/fairmount/pack.jpg'
import fmAbout from '../assets/projects/fairmount/about.jpg'
import fmTestimonials from '../assets/projects/fairmount/testimonials.jpg'
import fmSchedule from '../assets/projects/fairmount/schedule.jpg'

import aspHome from '../assets/projects/activestays/home.jpg'
import aspHotels from '../assets/projects/activestays/hotels.jpg'
import aspFlights from '../assets/projects/activestays/flights.jpg'
import aspCars from '../assets/projects/activestays/cars.jpg'
import aspAnalytics from '../assets/projects/activestays/analytics.jpg'
import aspLogin from '../assets/projects/activestays/login.jpg'

import mcStorefront from '../assets/projects/movieclub/storefront.jpg'
import mcShelves from '../assets/projects/movieclub/shelves.jpg'
import mcWheel from '../assets/projects/movieclub/wheel.jpg'
import mcRankings from '../assets/projects/movieclub/rankings.jpg'
import mcDetail from '../assets/projects/movieclub/detail.jpg'
import mcTrailerTape from '../assets/projects/movieclub/trailer-tape.jpg'
import mcTrailerPlaying from '../assets/projects/movieclub/trailer-playing.jpg'
import mcReviews from '../assets/projects/movieclub/reviews.jpg'
import mcProfileRoom from '../assets/projects/movieclub/profile-room.jpg'
import mcProfileCardBack from '../assets/projects/movieclub/profile-card-back.jpg'
import mcProfileStickers from '../assets/projects/movieclub/profile-stickers.jpg'

const video = (n) => `${import.meta.env.BASE_URL}video/brainrot-${n}.mp4`

export const projects = [
  {
    slug: 'movie-club-video',
    title: 'Movie Club Video',
    caseStudy: true,
    kicker: 'Full stack web app, live now',
    context: 'Built for my friends’ movie club. Real members, real ratings',
    tagline: 'A neighborhood video store for our movie club: yearly shelves of VHS tapes, club rankings, a spin-the-reel picker, member cards, and reviews.',
    stack: ['Angular 22', 'TypeScript', 'ASP.NET Core 10', 'EF Core', 'PostgreSQL (Neon)', 'ASP.NET Identity', 'TMDB API', 'Netlify + Render + Docker'],
    summary:
      'Our club picks films every year and argues about them. Movie Club Video keeps all of it in one place: every pick from MC 22 to MC 26 on lit wooden shelves of 3D VHS cases, club-wide rankings, a wheel that picks your next unwatched film, and a page per movie with live TMDB metadata, the trailer, where to stream it, and member reviews. Members get a membership card that collects stickers, finishes, and seasonal cards as they watch.',
    framework: [
      'An Angular 22 front end with standalone components and SCSS talks to an ASP.NET Core 10 minimal API through a generated, type-checked OpenAPI client. EF Core 10 maps the domain to PostgreSQL on Neon, with 17 migrations so far. ASP.NET Core Identity handles cookie sessions, invitations, email confirmation, and a Guest, Member, and Admin permission model that is enforced on the server.',
      'All TMDB calls go through the backend, so the API key never reaches the browser. Netlify serves the Angular build and proxies /api to a Docker container on Render, which keeps cookies and CSRF first-party. xUnit integration tests run against a throwaway Postgres database in GitHub Actions.',
    ],
    highlights: [
      'Designed and built the full stack: data model, API, auth, the VHS-store UI, deployment, and CI',
      'Imported 148 real club picks and matched every one to TMDB, then layered on live metadata, trailers, and where-to-watch data',
      'Club rankings with a podium, Top Shelf rows of five, Most Divisive and Hidden Gems shelves, and personal scores',
      'Community features: reviews with spoilers and reactions, movie nights with RSVP and calendar files, ballots, daily trivia, an activity feed, and notifications',
      'Admin panel for collections, posters, comment moderation, invitations, members, and an audit log',
    ],
    stats: [
      { n: 148, label: 'club picks on the shelves' },
      { n: 5, label: 'club years, MC 22 to MC 26' },
      { n: 59, suffix: 'K', label: 'lines of C#, TS, HTML, SCSS' },
      { n: 120, suffix: '+', label: 'API integration tests' },
    ],
    links: [
      { label: 'Visit the live site', href: 'https://movieclubvideo.netlify.app/' },
    ],
    media: {
      type: 'slides',
      host: 'movieclubvideo.netlify.app',
      note: 'The API runs on a free tier and sleeps when idle, so the live site can take up to a minute to wake up.',
      slides: [
        { title: 'The storefront', caption: 'Movie of the week up front, with the trailer one click away.', image: mcStorefront, path: '/' },
        { title: 'The club shelves', caption: 'Every pick for the year on lit wooden shelves, in the order the club chose them.', image: mcShelves, path: '/?year=2026' },
        { title: 'Movie details', caption: 'Each tape gets a page: the club score next to TMDB and IMDb, runtime, genres, and the synopsis.', image: mcDetail, path: '/movies/wild-horse-nine' },
        { title: 'Trailer: the tape goes in', caption: 'Hit Watch trailer and a labeled VHS tape slides into a wood-grain TV’s VCR.', image: mcTrailerTape, path: '/movies/wild-horse-nine' },
        { title: 'Trailer: now playing', caption: 'The VCR clicks to PLAY and the YouTube trailer runs on the CRT screen.', image: mcTrailerPlaying, path: '/movies/wild-horse-nine' },
        { title: 'Reviews and where to watch', caption: 'Live streaming data from JustWatch, then member reviews with spoiler covers and reactions.', image: mcReviews, path: '/movies/wild-horse-nine' },
        { title: 'My membership room', caption: 'Each member gets a room: a membership card, a top-5 tape stack, and a CRT TV that flips through their Watch Later tapes.', image: mcProfileRoom, path: '/membership' },
        { title: 'Back of the card', caption: 'Flip the card for a drawn signature, a favorite-genre stamp, and a hole punch for each club year.', image: mcProfileCardBack, path: '/membership' },
        { title: 'Sticker book', caption: '58 stickers earned by watching and rating films, each marked Rare or Legendary by how few members own it.', image: mcProfileStickers, path: '/membership' },
        { title: 'The Wheel', caption: 'Spin the reel for your next watch. Signed-in members only spin films they have not seen.', image: mcWheel, path: '/wheel' },
        { title: 'Rankings', caption: 'The all-time podium and the full ranked table from member ratings.', image: mcRankings, path: '/rankings' },
      ],
    },
  },
  {
    slug: 'brainrot-brawl',
    title: 'Brainrot Brawl',
    kicker: 'Roblox arena fighter, live now',
    context: 'Solo project. Published on Roblox',
    tagline: 'A chaotic three-stock arena fighter with 15 fighters, six hazard-filled maps, and a full coin and Robux economy.',
    stack: ['Luau', 'Roblox Studio', 'Client / server model', 'DataStoreService', 'MarketplaceService', 'Python + Node tooling'],
    summary:
      'Players pick a fighter, vote on a map and mode, and fight until one is left standing. Every fighter has a click combo, two specials, and an ultimate that charges as you land hits. Between rounds there is a lobby with shops, daily missions, capsule rolls, a parkour tower, and a Hall of Champions.',
    framework: [
      'Built in Roblox Studio with Luau on Roblox’s client-server model. ModuleScripts in ReplicatedStorage hold the data: fighters, maps, skins, shops, missions. Scripts in ServerScriptService own matches, combat, bots, map hazards, the economy, and DataStore saves. LocalScripts in StarterPlayerScripts run the HUD, camera, input, shops, and effects.',
      'Clients and the server talk over RemoteEvents and RemoteFunctions, and the server validates every hit, purchase, and roll. The source lives in git as plain .lua files, kept in sync with the .rbxmx model by a Python and Node tool I wrote for the repo.',
    ],
    highlights: [
      '15 fighters, each with a combo, two specials, an ultimate, alternate skins, and variant finishes',
      'Six arenas with scripted hazards: lava eruptions, a vanishing halo, a giant phone that swipes you off, a haunted house that eats you, and a midnight pizzeria',
      'Server-authoritative combat with percent damage, knockback, stocks, parries, projectiles, and bots that fight back',
      'Coins, daily missions, case-opening capsules, Game Passes and Robux purchases through MarketplaceService, all persisted with DataStore',
      'Map and mode voting, teams, spectating, mobile touch controls, and an MVP showcase after every round',
    ],
    stats: [
      { n: 15, label: 'playable fighters' },
      { n: 6, label: 'arenas with live hazards' },
      { n: 46, suffix: 'K+', label: 'lines of Luau' },
      { n: 75, suffix: '+', label: 'scripts, client and server' },
    ],
    links: [
      { label: 'Play on Roblox', href: 'https://www.roblox.com/games/112271785167848/Brainrot-Brawl' },
      { label: 'Browse my GitHub', href: 'https://github.com/Tonesman44?tab=repositories' },
    ],
    media: {
      type: 'reel',
      cover: brCover,
      clips: [
        { src: video(1), poster: br1a, title: 'Fighter select into Monster Manor', caption: 'Pick a fighter and an intro emote, lock in, and spawn into the haunted house.' },
        { src: video(2), poster: br2c, title: 'The lobby and Hall of Champions', caption: 'Every fighter stands on a lit pedestal with its name and role. Shops are down the street.' },
        { src: video(3), poster: br3b, title: 'Eight-player free-for-all', caption: 'Percent damage, stocks, ultimates charging, and a Titan Spill landing mid-fight.' },
        { src: video(4), poster: br4a, title: 'The manor gets hungry', caption: 'Monster Manor’s mouth drags everyone across the floor. Jump it or get eaten.' },
      ],
      stills: [
        { src: brCover, alt: 'Brainrot Brawl cover art' },
        { src: br2a, alt: 'The lobby with fighters on pedestals' },
        { src: br1b, alt: 'Spawning into Monster Manor' },
        { src: br4b, alt: 'Monster Manor’s mouth glowing red' },
      ],
    },
  },
  {
    slug: 'fairmount-dog-co',
    title: 'Fairmount Dog Co.',
    kicker: 'Client site, shipped',
    context: 'Built for a friend’s dog walking business in Fairmount, Philadelphia',
    tagline: 'A single-page marketing site for Jack Cherubini’s dog walking service, from the color system to the Netlify deploy.',
    stack: ['React 19', 'Vite', 'Framer Motion', 'CSS', 'Netlify'],
    summary:
      'Jack walks dogs around the Art Museum and the Schuylkill River Trail and needed a site that felt as friendly as the walks. I designed and built it solo: a green and parchment look, a dog that trots along a dotted trail in the hero, services and rates, a neighborhood map, client reviews, and a booking form that opens a pre-filled email so he can run everything from his phone with no backend.',
    highlights: [
      'Designed the whole thing: type, color tokens, layout, and copy structure',
      'Hero animation that moves a dog along a dotted trail path with Framer Motion',
      'Interactive pixel-art pack: hand-built 8x8 pixel dogs you can click, with a belly-rub counter saved in localStorage',
      'Booking form assembles a mailto request, so Jack gets walk requests with zero backend to maintain',
      'Static Vite build deployed on Netlify',
    ],
    links: [
      { label: 'Visit the live site', href: 'https://jackcherubini.netlify.app/' },
      { label: 'See the code', href: 'https://github.com/Tonesman44/Jack-Website' },
    ],
    media: {
      type: 'slides',
      host: 'jackcherubini.netlify.app',
      slides: [
        { title: 'Hero', caption: 'Dotted trail, a trotting dog, and a live “currently walking” badge.', image: fmHero, path: '/' },
        { title: 'Services and rates', caption: 'Pack walks, solo adventures, puppy check-ins, and drop-in sitting.', image: fmServices, path: '/#services' },
        { title: 'Neighborhood', caption: 'A stylized map of Jack’s radius around the Art Museum.', image: fmNeighborhood, path: '/#neighborhood' },
        { title: 'The pixel pack', caption: 'Click a dog for a belly rub. The counter sticks around in localStorage.', image: fmPack, path: '/#pack' },
        { title: 'About Jack', caption: 'Who he is and how he works, with room for real photos.', image: fmAbout, path: '/#about' },
        { title: 'Reviews', caption: 'Client quotes with their dogs’ names.', image: fmTestimonials, path: '/#testimonials' },
        { title: 'Request a walk', caption: 'The booking form. Submit opens an email with everything filled in.', image: fmSchedule, path: '/#schedule' },
      ],
    },
  },
  {
    slug: 'activestaysplanned',
    title: 'ActiveStaysPlanned',
    kicker: 'Travel booking, full stack',
    context: 'Temple University, team of two',
    tagline: 'A travel booking app in the spirit of Expedia: hotels, flights, cars, and events in one trip, with a working checkout.',
    stack: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Razor', 'Bootstrap', 'Yelp API'],
    summary:
      'People pick a city and dates, then build a trip from hotels, flights, rental cars, and events before paying in one checkout. My partner and I started from an ASP.NET Web Forms build and migrated the whole thing to ASP.NET Core MVC, adding a Yelp-powered restaurant finder and an analytics dashboard along the way under strict requirements and a tight timeline.',
    highlights: [
      'Migrated a Web Forms codebase to ASP.NET Core MVC without losing functionality',
      'Built the end-to-end trip builder and checkout as a working proof of concept',
      'Added a Yelp API restaurant finder and a site-wide analytics dashboard',
      'Shipped new features on a fixed academic deadline',
    ],
    links: [
      { label: 'Open the live build', href: 'https://cis-iis2.temple.edu/Fall2025/CIS3342_tup84860/TermProject/Home' },
      { label: 'Browse my GitHub', href: 'https://github.com/Tonesman44?tab=repositories' },
    ],
    media: {
      type: 'slides',
      host: 'activestaysplanned.app',
      slides: [
        { title: 'Plan a trip', caption: 'Start with a city and dates, then pick a category to search.', image: aspHome, path: '/Home' },
        { title: 'Compare stays', caption: 'Hotel results for the city with ratings, photos, and availability.', image: aspHotels, path: '/SearchHotels' },
        { title: 'Flights', caption: 'Filter by origin, destination, and airline. Booking is gated behind login.', image: aspFlights, path: '/SearchFlights' },
        { title: 'Rental cars', caption: 'Rental companies per city with their available fleet.', image: aspCars, path: '/SearchCars' },
        { title: 'Checkout', caption: 'Traveler details and payment in one validated form beside the trip summary. Rendered mock of the signed-in flow.', mock: 'asp-checkout', path: '/Checkout' },
        { title: 'Booking confirmed', caption: 'Confirmation with the full itinerary the traveler can come back to. Rendered mock.', mock: 'asp-confirm', path: '/Checkout/Confirmed' },
        { title: 'Analytics dashboard', caption: 'Bookings by city, product mix, and trip durations across all users.', image: aspAnalytics, path: '/Analytics' },
        { title: 'Sign in', caption: 'Local accounts or Google sign-in.', image: aspLogin, path: '/Account/Login' },
      ],
    },
  },
]
