# Chainuwat — Master Product & Implementation Specification

**Version:** 0.1 foundation draft · **Status:** approved product decisions consolidated; implementation in progress  
**Tagline:** Turning Ideas into Impact.  
**Document policy:** Single Source of Truth. Update this file as requirements change; do not create conflicting requirement documents.

## 1. Vision and audience

Build a bilingual Thai/English professional website integrating executive profile, portfolio, practical thought leadership and professional opportunities. Primary audience: clients and business partners. Positioning: **Integrated Management & Transformation Professional**, covering strategy, leadership, execution and AI. Voice: thoughtful, practical, evidence-based, not hard-sell. Relationship-led journey: Discover → Explore → Build Trust → Connect.

Primary CTA: **Explore My Work**. Secondary CTA: **Let's Connect**.

## 2. Brand and design

Master brand: **Chainuwat**. Visual: Executive × Modern Editorial; modern thought leader; ultra-minimal motion; authentic professional photography. Palette (starting tokens): Navy `#142D4E`, Off-white `#F9FAFC`, Muted Blue `#3B729B`, Slate `#475569`. Contemporary editorial typography supporting Thai and English; readable body text; ample whitespace. Components: SiteHeader, Navigation, Hero, SectionHeading, PortfolioCard, ArticleCard, RelatedContent, ContactCTA. Mobile-first, keyboard-accessible, reduced-motion-friendly.

## 3. Content strategy

Four balanced pillars: Strategy & Management; Leadership & People; Execution & Transformation; AI & Digital Innovation. Four formats: Professional Insights, Practical Guides, Case Studies, Research & Evidence. Editorial approach: adaptive structure with Key Takeaways, Reasoning & Evidence, Practical Implications. Publishing target: 1 bilingual article/month, 2–4 LinkedIn posts/month; portfolio updates as appropriate.

Content governance: Draft → Verify → Review → Publish → Maintain. Confirm factual claims and attributable contributions; distinguish personal, team and organization outcomes; protect employer and third-party confidentiality; obtain permissions for media; verify translations.

## 4. Information architecture and pages

Top navigation: **Home, About, Work, Insights, Contact**. Canonical language routes `/th/` and `/en/` with locale-matched page links and alternate-language counterparts. Homepage: Hero → Professional Introduction → Four Areas of Expertise → Selected Work & Impact → Featured Insights → Innovation & Resources → Contact. About: Identity → Career Journey → Leadership Philosophy → Expertise → Highlights → Resume PDF. Work: Executive Achievements, Strategic Case Studies, Leadership Experiences, Innovation Projects. Insights: Featured → Pillars → Latest → Article Details → Related. Contact: invitation, professional interests, email/LinkedIn and optional external form. Innovation Lab lives under Work; Resources under Insights in future releases.

Portfolio narrative: Context & Challenge → My Role & Responsibility → Strategy & Decisions → Execution & Collaboration → Outcomes & Evidence → Lessons Learned.

## 5. Release scope

**R1:** complete bilingual Home/About/Work/Insights/Contact, portfolio and article detail templates, 3 verified portfolio stories, 4 verified articles (each translated), professional profile, resume PDF, static related links, SEO, RSS, privacy notice, responsive and accessibility checks, GitHub Pages deployment.

**R2:** search, advanced filters and resources library.

**R3:** interactive tools, expanded Innovation Lab, newsletter where appropriate.

Do not represent suggested article titles or case studies as actual achievements without user-approved source content.

## 6. User stories and outcomes

- As a prospective partner, I can quickly understand the professional's expertise and reach relevant work within a few clicks.
- As a visitor, I can navigate from any page to a relevant article, work item or contact method.
- As a Thai/English reader, I can switch to the corresponding translation when available and receive a clear fallback when not.
- As a mobile visitor, I can read and navigate without horizontal overflow or unnecessary animation.
- As the content owner, I can publish or update Markdown without maintaining a database or backend.
- As a reviewer, I can identify the user's exact role and supporting evidence in every portfolio case study.

## 7. Technology decisions

Astro static site, regular CSS and Markdown; minimal JavaScript; no Tailwind, React, backend, database or headless CMS required for R1. Astro Content Collections with schema validation and modular directories for insights and work; reserve resources/innovation expansion for later. Static GitHub Pages hosting. GitHub Actions auto deploy on push to `main`; build must pass before deploy. No mandatory Pull Request or staging.

Repository starter: `src/pages/{th,en}`, `src/layouts`, `src/components`, `src/styles`, `src/i18n`, `src/content/{insights,work}/{th,en}`, `src/content.config.ts`, `public`, `.github/workflows`.

Content metadata: title, description, lang, translationKey, pillar, format, tags, publishedAt, updatedAt, draft, featured, related. Validate unique locale/translationKey pairs, related references, translation completeness and production draft exclusion in subsequent slices. Frontmatter and markdown files remain the source of truth.

## 8. SEO, analytics and distribution

Unique titles/descriptions, canonical URLs, `hreflang` language alternates, sitemap, robots directives, Open Graph, appropriate structured data (Person/WebSite/Article), RSS and related content. Google Search Console and a privacy-conscious analytics provider to be selected; track aggregate traffic and contact-link interactions with data minimization. Privacy notice and consent behavior must match actual providers and applicable law. Brand scorecard: Content, Reach, Credibility & Relationships, Opportunities, each 25%; establish numeric targets after baseline. Visits/clicks are proxies, not proof of trust or conversion.

## 9. Accessibility and performance

Target WCAG 2.2 AA, keyboard navigation, visible focus, semantic landmarks, adequate contrast, meaningful alt text, reduced motion, touch targets approximately 44px or greater where practical. Core Web Vitals field targets at p75: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. Lab checks before launch, field verification when enough traffic is available. Avoid large JS bundles and optimize images.

## 10. Security, privacy and operations

Lean Executive Governance: GitHub 2FA, least-privilege Actions permissions, dependency review, no secrets committed, HTTPS, verify third-party scripts, privacy notice, permissioned content/media, Git history and recovery procedure. Per publish: build/content/links; monthly: dependencies, analytics, broken links; quarterly: privacy, accuracy, SEO, accessibility. GitHub Pages limits arbitrary custom HTTP response headers; do not claim protections not configured.

## 11. Implementation milestones

1. Foundation: Astro project, CSS tokens, bilingual shell, GitHub Actions.
2. Pages: full navigation and editorial sections, locale matching.
3. Content system: schema, templates, relations, draft/translation validation.
4. Content: verified profile, resume, 3 portfolio stories and 4 bilingual articles.
5. Discovery: SEO, sitemap, RSS, privacy and chosen analytics.
6. QA and launch: functional, content, responsive, accessibility, performance, security, deployment verification.

**Execution model:** Hybrid Milestone + Vertical Slice. Complete each slice through UI, content, SEO, tests and review before proceeding.

## 12. Acceptance criteria and definition of done

- Navigation works across five pages and two languages; locale switching maps to translated counterpart or offers an explicit fallback.
- Article and work detail pages render only approved published content; 3 case studies and 4 articles are available in both languages at launch.
- Resume PDF exists and downloads; contact channels are valid and functional.
- No material mobile horizontal overflow; keyboard navigation and screen reader checks performed; WCAG 2.2 AA issues assessed and fixed.
- Metadata, sitemap, canonical, hreflang and RSS verified; no draft URLs indexed.
- Static build succeeds; deployed site manually smoke-tested on GitHub Pages.
- Accuracy, attribution, confidentiality and privacy reviewed by content owner.

## 13. AI coding constraints

Treat this document as authoritative. Preserve Astro + CSS + Markdown, static output and GitHub Pages compatibility. Do not add unnecessary dependencies or backend services. Keep bilingual URL parity. No fabricated accomplishments, clients, metrics, endorsements, citations or contact information. Implement in small vertical slices and verify build. Record outstanding decisions explicitly rather than inventing details. Respect accessibility and performance goals.

## 14. Open decisions / blockers

- Actual GitHub repository name and production domain; set `SITE_URL` and `SITE_BASE` before deploy.
- Approved professional biography, resume PDF, 3 case studies, 4 articles and translations.
- Real email/LinkedIn destinations and approved photography.
- Privacy-conscious analytics vendor and exact consent/privacy configuration.
- Verify npm dependencies and build in a network-enabled environment; create and commit package lock.

## 15. Foundation status

The accompanying starter has bilingual navigation, a working homepage template and placeholder interior pages, initial CSS, content collection schema and auto-deploy workflow. **It is not a complete Release 1.** The build has not been verified due to unavailable npm registry connectivity during preparation. Replace placeholders with verified content and complete all milestone work before launch.


## Step 44 — Lean Editorial Design System (Confirmed)
- Global CSS variables define navy, blue, slate, paper, spacing, layout and radius.
- Scoped Astro CSS defines Hero, Introduction, Expertise, feature panels, and CTA.
- Home uses `/th/` and `/en/`, text-first 60/40 hero on desktop and stacked layout on mobile.
- Portrait is intentionally a typographic placeholder until the owner provides an approved photograph.
- Work and Insights panels explicitly say content is in preparation; no invented achievements or case studies.
- Official English title: Director of the Office of the Managing Director.
- GitHub User Pages origin: https://chainuwat.github.io/ and repo chainuwat/chainuwat.github.io.
- Step 45 validation pending: install dependencies, run Astro check/build, browser responsive and accessibility review.
