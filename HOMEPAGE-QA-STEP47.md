# Chainuwat — Step 47 Homepage QA

## Verdict: NOT YET ACCEPTED

Reviewed on 2026-10-10. This is a source-level review, **not** a successful browser or production test.

### Verified from source
- Astro project has /th/ and /en/ homepage entrypoints and a root redirect to /en/.
- Homepage includes ExecutiveHero, ProfessionalIntro, ExpertiseGrid, three feature panels and ContactCTA.
- Official title reads **Director of the Office of the Managing Director** in English source.
- CSS includes a desktop two-column hero, mobile one-column hero, and reduced-motion override.
- Site configuration targets `https://chainuwat.github.io` with `base: '/'`.
- GitHub Actions workflow triggers on pushes to main, runs install/build, and uploads dist for GitHub Pages.
- JavaScript syntax checks passed for src/i18n/*.js and astro.config.mjs.

### Blockers / unverified
- `npm install` failed with EAI_AGAIN resolving registry.npmjs.org. Therefore `astro check`, `astro build`, deployment, screenshot comparison, browser navigation, keyboard/screen-reader testing, and Lighthouse could not be executed here.
- No `package-lock.json` is included; workflow currently uses `npm install`. For reproducibility, generate/commit a lockfile and switch to `npm ci` after a successful local install.
- Portrait is a placeholder; the approved actual portrait is not yet provided.
- Work and Insights landing pages are placeholders, not published portfolio or articles.
- Fonts load from Google Fonts; review privacy requirements, network dependency and fallback behavior before production.
- Analytics, privacy notice, social preview image and structured data need dedicated verification before production launch.
- Current mobile navigation is horizontally scrollable; usability must be tested on narrow screens with keyboard and touch.

### Required acceptance tests (run where npm and browser are available)
1. `npm install` then `npm run build` (commit package-lock.json afterward).
2. `npm run dev` and check `/`, `/th/`, `/en/` plus all five navigation routes.
3. Verify language switch preserves the page, correct canonical/hreflang, no broken links.
4. Check widths 320, 375, 768, 1024, 1440 px for overflow, portrait position, CTA visibility and nav usability.
5. Keyboard-only navigation and screen-reader headings/landmarks; inspect contrast and touch targets.
6. Lighthouse mobile/desktop and automated accessibility scan, then manual review.
7. Push to GitHub repository `chainuwat/chainuwat.github.io`, verify successful GitHub Pages deploy and live links.

**Gate decision:** Keep Homepage in QA; do not mark it accepted until runtime and visual checks pass.
