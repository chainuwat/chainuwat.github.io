# Step 48 — GitHub Build → Live QA

## Current verification status
- Source repository is configured for GitHub User Pages: `chainuwat/chainuwat.github.io`.
- Astro build **NOT VERIFIED**: npm registry DNS returned EAI_AGAIN in this environment.
- GitHub Actions run **NOT VERIFIED**: no GitHub repository connection to push code or read CI logs.
- Live browser, WCAG, Core Web Vitals **NOT VERIFIED**.
- This package is a deploy candidate, not an accepted release.

## 1. Create or open GitHub repository
1. Sign in to GitHub account `chainuwat`.
2. Create a **public** repository named exactly `chainuwat.github.io` (if not already present). Do not add a README when uploading this prepared project into an empty repo.
3. Unzip the release package and upload the **contents of `chainuwat-starter/`**, including hidden `.github/workflows/deploy.yml`, to the root of the repo; commit to `main`. Do not upload the parent folder itself.
4. In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
5. In **Actions**, open **Build and deploy Astro to GitHub Pages** and check both jobs `build` and `deploy` are green. If the workflow has not run, choose **Run workflow**.
6. Open `https://chainuwat.github.io/` (root redirects to `/en/`), then verify `/en/` and `/th/`.

## 2. Build reliability
- This project currently lacks `package-lock.json`. Workflow therefore uses `npm install` instead of `npm ci` as a **temporary compromise**.
- Once a machine with npm registry access is available, run `npm install` in the project directory; commit the generated `package-lock.json`.
- Then change the workflow install step to `npm ci`, and enable npm cache in setup-node if desired. This is recommended before accepting release.
- `npm run build` invokes `astro check && astro build`. A failure blocks deployment.

## 3. Acceptance checklist — run on live site
- [ ] GitHub Actions `build` and `deploy` both successful (capture workflow URL).
- [ ] Root `/` resolves to English landing page; `/en/` and `/th/` return 200.
- [ ] Nav links Home/About/Work/Insights/Contact work in both languages.
- [ ] Language switch preserves equivalent page and no 404.
- [ ] Hero buttons lead to Work and Contact.
- [ ] iPhone-sized viewport 375px: no horizontal page overflow; readable typography; nav accessible.
- [ ] iPad-sized viewport 768px: no overlap; card grids and Hero flow appropriately.
- [ ] Desktop 1440px: 60/40 hero composition; no clipped headline.
- [ ] Keyboard-only: skip link, focus indicators, navigation, CTAs all usable.
- [ ] Contrast and screen reader labels manually checked; axe/Lighthouse audits reviewed.
- [ ] Metadata: canonical, alternate hreflang, title, description, OG fields.
- [ ] Portrait placeholder clearly temporary; replace with approved real photo before public launch.
- [ ] No unsupported claims or confidential portfolio evidence.
- [ ] Lighthouse mobile and desktop measured; p75 Core Web Vitals require real user data over time.

## 4. Gate decision
Homepage can only be accepted after successful CI/deployment and documented live visual/functional checks. If a failure occurs, copy the failing GitHub Actions step/log into the conversation for a targeted fix. No repository or deployment is claimed as created by this package.
