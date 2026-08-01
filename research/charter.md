# Charter — marketing deep research (2026-07-31)

Shared brief for every agent in this run. Read fully before doing anything.

## What we are building

The next skill in the Digital Product Skills family: **`marketing`** — canonical mission
(lifecycle doc §4.11): *"Position the product and create, capture, and attribute market demand."*
A faceted-router skill pack (thin SKILL.md router + on-demand references), sibling to the ten
shipped packs (product, design, architecture, frontend, backend, data, ai, automation, quality,
operate). This research run feeds the synthesis gate that decides the pack's final shape.

## Family boundaries (binding — do not relitigate, DO flag evidence against them)

- `/marketing` = bring and capture demand · `/sales` = convert qualified buyers · `/growth` =
  improve funnels through controlled experiments · `/success` = onboard/educate/retain.
- Marketing owns: segmentation, category/competitive framing, positioning & messaging, GTM
  strategy, **launch planning**, SEO/ASO strategy and keyword-intent maps, content strategy,
  landing-page requirements + copy, lifecycle/email campaigns, social, paid, partnerships/PR,
  **campaign measurement and attribution requirements**.
- Marketing does NOT own: production site code (`frontend`), in-product content (`design`),
  analytics pipelines (`data`), experiment design/readout (`growth`), CRM/pipeline (`sales`),
  onboarding education (`success`), pricing decisions (`product`), site hosting (`operate`),
  crawl/perf audits (`quality`). SEO: marketing owns strategy/outcome only.
- Code policy: email markup, structured-data examples, campaign utilities, landing-page
  prototypes — nothing production.

## Report rules (non-negotiable)

1. **Nothing is lost.** Every finding carries its source: full URL, repo path + commit-less file
   path, or file:line. A finding without a source is worthless.
2. **Mark, don't guess.** Unverifiable claims are recorded as `UNVERIFIED:` with what would verify
   them. A marked gap is useful; an unmarked guess is a defect.
3. **License every mined repo/skill**: name the license FILE you saw (path), or `NO LICENSE FOUND`
   (= all rights reserved: facts may be re-expressed, nothing lifted verbatim).
4. **Tag specimen vs evidence.** In this domain, ads and funnel content ARE the subject matter. A
   course-seller thread can be a *specimen* of the genre without being *evidence* for its claims.
5. **Volatile facts get dates.** Prices, algorithm behaviors, platform policies, "latest model"
   claims: record the as-of date and the URL. Never trust a fetched page's claim about "current"
   without noting it could differ next quarter.
6. Quote caps: max 2 short verbatim quotes per source, <25 words each, always attributed. From
   unlicensed sources: re-express facts, never lift prose.
7. Worker reports: dense full sentences, no filler; structure = SOURCE / WHAT IT TEACHES /
   VERBATIM-WORTH-KEEPING (license permitting) / RELEVANCE TO PACK JOBS / CREDIBILITY NOTE.
8. Do not use any API key found in any file. Do not commit or push anything. Clones go to the
   scratchpad, never into this repo.

## Credibility ladder (use it in every credibility note)

Primary sources (platform docs: Google Search Central, Apple/Google store guidelines, Gmail/Yahoo
sender requirements, ad-platform policies; legal texts: GDPR/PECR, CAN-SPAM, CASL, FTC disclosure;
RFCs e.g. 8058; open-source repos with real adoption) > peer-reviewed / Ehrenberg-Bass Institute
publications > named-practitioner post-mortems with real numbers > vendor engineering blogs >
agency/tool content marketing > course-seller funnel content (specimen only). arXiv rule: check
for a companion paper promoting the author's own product before trusting solo-author preprints.

## Output layout (this repo)

- Workers → `research/marketing/_raw/<channel>-<topic>.md`
- Sub-orchestrators → `research/marketing/<channel>-report.md` (A–D) /
  `research/marketing/webdesign-extraction.md` (E)
- Channel report = synthesis + inventory of every worker finding worth keeping + a SOURCES table
  (url · license · credibility rung · as-of date) + explicit "what I did NOT cover and why".

## WebSearch budget (session-wide cap 200 — hard)

mkt-x ≤40 · mkt-web ≤80 · mkt-skills ≤15 · mkt-github ≤15 · mkt-webdesign 0. Prefer WebFetch on
constructed URLs, `gh api`, and `crwl <url> -o markdown` (Crawl4AI CLI, installed) — none consume
the budget. If `crwl` errors, fall back to WebFetch; do not debug it.

## Candidate pack shape (context, not a constraint — research may move it)

Jobs (~10–12): positioning-and-messaging ⭐ · audience-and-segmentation · category-and-competitive-
framing · go-to-market-and-launch · seo-strategy · content-strategy-and-briefs · lifecycle-and-
email · paid-acquisition · organic-social-and-community · partnerships-and-pr · app-store-
optimization · attribution-and-measurement. Surfaces: GTM motions (self-serve / sales-assisted /
developer-tool / mobile-app) + zero-audience and agentic overlays. Controller's prior knowledge:
`research/marketing/controller-canon.md` — workers should NOT read it (independence); sub-
orchestrators MAY read it only to avoid duplicating known ground and to target gaps.
