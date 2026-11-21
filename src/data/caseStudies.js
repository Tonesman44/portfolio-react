// Case studies shown under the project stack. Code blocks are trimmed excerpts of the real
// Movie Club Video source (apps/api and apps/web), not pseudo-code.

export const caseStudies = {
  'movie-club-video': {
    kicker: 'Case study',
    title: 'Movie Club Video, the hard parts',
    intro:
      'Club members sign in to rate films, leave reviews, and spin the wheel, so the site had to behave like a real product: real accounts, a key that never leaks, and a free-tier API that still feels fast. These are the three problems that took the most thought.',
    architecture: [
      { name: 'Browser', detail: 'Angular 22, standalone components' },
      { name: 'Netlify', detail: 'Static build, proxies /api/*' },
      { name: 'Render', detail: 'ASP.NET Core 10 API in Docker' },
      { name: 'Neon', detail: 'PostgreSQL 17 through EF Core' },
    ],
    sidecar: { name: 'TMDB', detail: 'Called only by the API' },
    parts: [
      {
        id: 'permissions',
        tab: 'Permission model',
        problem:
          'Guests, members, and admins all use the same pages. A guest can browse and spin, a member can rate and review, and an admin can edit collections and moderate comments. None of that can be decided in the browser, because anything in Angular can be edited by whoever is using it.',
        solution: [
          'ASP.NET Core Identity issues an HttpOnly session cookie. Every endpoint group declares one of three server-side policies: signed-in user, member with a confirmed email, or admin.',
          'Ownership always comes from the session’s user ID claim, never from an ID in the request body, so nobody can edit someone else’s review by changing a number.',
          'Writes need an antiforgery token that Angular echoes in a header. The cookie is SameSite=Strict, and sign-in is rate limited to 10 attempts a minute per IP.',
          'Admins can suspend a member, which also ends their existing sessions.',
        ],
        code: {
          lang: 'C#',
          file: 'apps/api/Features/Auth/AuthSetup.cs',
          text: `services.AddAuthorizationBuilder()
    .AddPolicy(Policies.RequireUser, p => p
        .RequireAuthenticatedUser()
        .RequireRole(Roles.User, Roles.Admin))
    .AddPolicy(Policies.RequireMember, p => p
        .RequireAuthenticatedUser()
        .RequireRole(Roles.User, Roles.Admin)
        .RequireClaim(AppClaims.EmailConfirmed, "true"))
    .AddPolicy(Policies.RequireAdmin, p => p
        .RequireAuthenticatedUser()
        .RequireRole(Roles.Admin));

// Every admin route inherits the policy from its group.
var admin = api.MapGroup("/admin")
    .RequireAuthorization(Policies.RequireAdmin);`,
        },
        result: 'Integration tests cover access control for each role, invitations, email confirmation, the sign-in rate limit, and suspended accounts.',
      },
      {
        id: 'tmdb',
        tab: 'Keeping the TMDB key secret',
        problem:
          'Posters, cast, trailers, and where-to-watch data come from TMDB, which needs an API key. Calling TMDB from Angular would ship that key to every visitor, and a slow or failing TMDB would take the shelves down with it.',
        solution: [
          'Only the API talks to TMDB, through one typed client. The token lives in Render’s environment and a git-ignored local file, never in the Angular app or the repo.',
          'The token goes in an Authorization header, and log messages scrub anything that looks like a key, so it never shows up in logs either.',
          'Requests have short timeouts and jittered retries, wait out a 429 using Retry-After, and never retry a 401 or 404.',
          'Film details are stored in Postgres and refreshed by a background service every few hours, so pages read from the database and TMDB being down never breaks a shelf.',
        ],
        code: {
          lang: 'C#',
          file: 'apps/api/Integrations/Tmdb/TmdbClient.cs',
          text: `// Credentials stay server-side: the token rides in a header.
request.Headers.Authorization =
    new AuthenticationHeaderValue("Bearer", options.ReadAccessToken);

if (status is HttpStatusCode.Unauthorized or HttpStatusCode.Forbidden)
{
    // Never retry bad credentials.
    throw new TmdbException("TMDB rejected the configured credentials.", status);
}

// 429 and 5xx: honour Retry-After, otherwise back off with jitter.
retryAfter = response.Headers.RetryAfter?.Delta;`,
        },
        result: 'The browser never sees the key. Shelves keep working on stored data while TMDB is slow, and stale details refresh on their own.',
      },
      {
        id: 'cold-start',
        tab: 'Cold starts on a free tier',
        problem:
          'The API runs on Render’s free plan, which puts it to sleep after about 15 minutes of no traffic. The first visitor after that would get errors for most of a minute while the container boots.',
        solution: [
          'An Angular HTTP interceptor catches the “asleep” responses (network error, 502, 503, 504) and retries with growing delays for up to about 80 seconds.',
          'It only retries GET requests. A write that timed out at the proxy might still have gone through, so retrying it could post a review twice.',
          'A shared signal shows a “Warming up the projector…” banner while any request is waiting, so the page explains itself instead of looking broken.',
          'Data protection keys are stored in Postgres, so restarts and redeploys don’t sign everyone out.',
        ],
        code: {
          lang: 'TypeScript',
          file: 'apps/web/src/app/core/api/wake.ts',
          text: `const ASLEEP = new Set([0, 502, 503, 504]);
const DELAYS_MS = [2000, 4000, 6000, 8000, 10000, /* … */]; // ~80 s

export const wakeInterceptor: HttpInterceptorFn = (req, next) => {
  // Only GETs: a write that timed out might still have happened.
  if (req.method !== 'GET' || !req.url.startsWith('/api/')) return next(req);
  const wake = inject(ServerWake);
  let flagged = false;
  return next(req).pipe(
    retry({
      count: DELAYS_MS.length,
      delay: (err: unknown, attempt) => {
        if (!(err instanceof HttpErrorResponse) || !ASLEEP.has(err.status)) throw err;
        if (!flagged) {
          flagged = true;
          wake.begin(); // shows "Warming up the projector…"
        }
        return timer(DELAYS_MS[attempt - 1]);
      },
    }),
    finalize(() => flagged && wake.end()),
  );
};`,
        },
        result: 'A cold visit now shows a themed loading banner and then the page, instead of an error screen, and writes are never duplicated.',
      },
    ],
    footer: [
      { n: '120+', label: 'xUnit integration tests against a throwaway Postgres in GitHub Actions' },
      { n: '17', label: 'EF Core migrations, applied by an explicit release step' },
      { n: '3', label: 'roles enforced on the server: guest, member, admin' },
    ],
  },
}
