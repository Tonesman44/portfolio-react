// ─────────────────────────────────────────────────────────────
// Adding real screenshots:
//   1. Drop images in src/assets/projects/<slug>/ (1600x1000 works well)
//   2. import them at the top of this file
//   3. add `image: myImport` to the matching slide
// Slides without an `image` render a styled wireframe of that screen,
// using `layout` (search | grid | list | detail | form | dashboard | table | confirm).
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'activestaysplanned',
    title: 'ActiveStaysPlanned',
    tagline: 'A travel booking app in the spirit of Expedia, with a working checkout.',
    context: 'Temple University, team of two',
    stack: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Razor'],
    summary:
      'A full travel booking site where people search destinations, compare stays and activities, and book through a complete checkout flow. My partner and I started from an ASP.NET Web Forms build and migrated the whole thing to ASP.NET Core MVC, adding new features along the way under strict requirements and a tight timeline.',
    highlights: [
      'Migrated a Web Forms codebase to ASP.NET Core MVC without losing functionality',
      'Built the end-to-end checkout as a working proof of concept',
      'Shipped new features on a fixed academic deadline',
    ],
    links: [
      { label: 'Open the live build', href: 'https://cis-iis2.temple.edu/Fall2025/CIS3342_tup84860/TermProject/Home' },
      { label: 'Browse my GitHub', href: 'https://github.com/Tonesman44?tab=repositories' },
    ],
    slides: [
      { title: 'Search destinations', caption: 'Start with a city and dates. Results pull hotels, cars, and activities together.', layout: 'search', path: '/search' },
      { title: 'Compare stays', caption: 'Filter and sort results by price, rating, and amenities.', layout: 'list', path: '/hotels?city=philadelphia' },
      { title: 'Hotel details', caption: 'Room options, photos, and pricing before adding to the trip.', layout: 'detail', path: '/hotels/412' },
      { title: 'Checkout', caption: 'Traveler info and payment in a single validated form.', layout: 'form', path: '/checkout' },
      { title: 'Booking confirmed', caption: 'Confirmation with a trip summary the traveler can come back to.', layout: 'confirm', path: '/checkout/confirmed' },
    ],
  },
  {
    slug: 'pet-adoption',
    title: 'Pet Adoption App',
    tagline: 'A C# application and relational database with separate customer and employee roles.',
    context: 'Temple University',
    stack: ['C#', 'SQL', 'Relational design', 'SMTP'],
    summary:
      'An adoption platform designed database-first. Customers create accounts, search breeds, view adoption statistics, and submit applications. Employees get their own toolset to manage records and users, approve or deny applications, and trigger automated confirmation emails.',
    highlights: [
      'Designed the relational schema around two distinct user roles',
      'Built employee tools for full record management and application review',
      'Automated confirmation emails on application decisions',
    ],
    links: [{ label: 'Browse my GitHub', href: 'https://github.com/Tonesman44?tab=repositories' }],
    slides: [
      { title: 'Sign in by role', caption: 'Customers and employees land in different experiences after login.', layout: 'form', path: '/login' },
      { title: 'Search breeds', caption: 'Browse available pets and filter by breed, age, and size.', layout: 'grid', path: '/pets' },
      { title: 'Apply to adopt', caption: 'Applications are tied to the customer account for tracking.', layout: 'form', path: '/apply' },
      { title: 'Employee dashboard', caption: 'Pending applications, adoption stats, and quick actions.', layout: 'dashboard', path: '/staff' },
      { title: 'Manage records', caption: 'Add, modify, and delete pets and users from one table.', layout: 'table', path: '/staff/records' },
    ],
  },
  {
    slug: 'movie-reviews',
    title: 'Movie Review Site',
    tagline: 'A responsive React app built on the TMDB API.',
    context: 'Temple University',
    stack: ['React', 'TMDB API', 'CSS'],
    summary:
      'A React front end that consumes the TMDB API to browse films and surface rating and review data. The focus was clean component structure, async data handling, and a layout that holds up from phone to desktop.',
    highlights: [
      'Structured the UI as small reusable React components',
      'Handled loading and empty states for live API data',
      'Responsive layout from mobile to widescreen',
    ],
    links: [{ label: 'Browse my GitHub', href: 'https://github.com/Tonesman44?tab=repositories' }],
    slides: [
      { title: 'Browse films', caption: 'Trending and popular titles pulled live from TMDB.', layout: 'grid', path: '/' },
      { title: 'Search', caption: 'Search across the TMDB catalog as you type.', layout: 'search', path: '/search?q=' },
      { title: 'Film details', caption: 'Ratings, reviews, and cast for each title.', layout: 'detail', path: '/movie/603' },
    ],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
