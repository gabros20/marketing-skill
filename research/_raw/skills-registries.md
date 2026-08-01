# Registry / marketplace sweep — marketing agent-skills inventory (channel A, mkt-skills)

Method: skills.sh JSON search API (`https://skills.sh/api/search?q=<term>`, free, no WebSearch
spend) swept across all 74 charter terms + synonyms, de-duplicated to 2,586 raw hits, filtered to
marketing-relevant repos. Cross-checked with `gh api repos/<owner>/<repo>` for license/stars, and
`gh api .../git/trees/HEAD?recursive=1` for actual skill inventories. Also probed smithery.ai,
skills.volces.com, claudeskills.directory, and three GitHub awesome-lists per the mandate.
NOTE: another channel-C worker (`github-competitor-marketingskills.md`) already did a deep, repo-
cloned read of `coreyhaines31/marketingskills` (42,544 stars, MIT, single-maintainer) — I do not
duplicate that depth here, only place it in the inventory for completeness.

## Registries actually queryable

- **skills.sh** (`https://skills.sh/api/search?q=...`): WORKS, JSON, free, install counts included.
  This was the primary instrument below. No separate `.../api/skill?id=` detail endpoint was
  tested (breadth budget prioritized the search sweep over per-skill detail calls — a gap if the
  synthesis needs full skill bodies, not just names/descriptions).
- **smithery.ai**: returns HTTP 200 but is a client-rendered Next.js app; no JSON search endpoint
  found at `/api/search`. UNVERIFIED — did not debug further per charter's "don't debug flaky
  endpoints" rule.
- **skills.volces.com**: returns HTTP 200, content not parsed (no obvious JSON API, time-boxed).
  UNVERIFIED — needs a browser-driven pass if the synthesis wants ByteDance/Volces coverage.
- **claudeskills.directory**: unreachable (curl exit 28 / timeout, both `/` and `/?q=marketing`).
  Treated as dead per charter instruction to not debug flaky endpoints.
- **GitHub awesome-lists** (free via `gh api .../readme`): `VoltAgent/awesome-openclaw-skills`
  (5,199 skills indexed, has a dedicated **"Marketing & Sales" category, 106 skills** — see
  `categories/marketing-and-sales.md`) and `ComposioHQ/awesome-claude-skills` (has a "Business &
  Marketing" section) both fetched and grepped. `sickn33/agentic-awesome-skills` from the charter
  brief does not exist as typed; the equivalent repo is **`sickn33/antigravity-awesome-skills`**
  (44,239 stars, MIT, "1,987+ agentic skills" catalog/CLI) — confirmed via `gh api repos/sickn33/...`.

## Ranked inventory table (top repos by skill count / install signal)

| repo | skills.sh installs (top skill) | skill count found | license | stars | what it claims | pack-job mapping |
|---|---|---|---|---|---|---|
| coreyhaines31/marketingskills | 175,410 (seo-audit) | 60 (verified via tree) | MIT (`LICENSE`) | 42,544 | "CRO, copywriting, SEO, analytics, growth engineering" for Claude Code | spans nearly all 12 jobs + heavy bleed into sales/success/growth |
| aaron-he-zhu/aaron-marketing-skills | 8,868 | 120 (verified via tree) | Apache-2.0 (`LICENSE`) | 2,483 | "120 marketing skills across 7 disciplines (ad/email/influencer/launch/narrative/seo-geo/social) on one shared contract, 8 auditor gates" | paid-acquisition, lifecycle-and-email, partnerships-and-pr, go-to-market-and-launch, positioning-and-messaging, seo-strategy, organic-social — the most architecturally serious competitor found (phase-pattern: survey→implement/orchestrate→scale/activate→evaluate) |
| kostja94/marketing-skills | (26 installs on api hit) | 172 (verified via tree) | MIT (`LICENSE`) | 793 | "160+ skills for SEO, content, 40+ page types, paid ads, channels" | seo-strategy, content-strategy-and-briefs — but ~40% of the tree is landing-page/website **component and legal-page** skills (see boundary section) |
| guia-matthieu/clawfu-skills | 5,612 | 172 claimed (not tree-verified) | MIT | 143 | "172 expert marketing skills — ClawFu MCP Server" | broad, unverified depth |
| onewave-ai/claude-skills | 7,188 | 172 claimed, marketing is a subset | MIT | 235 | "172 production-ready skills for sales, marketing, design, engineering, and AI agent architecture" | explicit sales+marketing+design+engineering bundle in one repo name |
| agricidaniel/claude-seo | 98,557 (seo-audit is a different repo's skill; this repo's own name differs) | 25 core + 8 vendor-extension sub-skills (verified via tree) | MIT (`LICENSE`) | 12,956 | "Universal SEO skill... 25 sub-skills + 18 sub-agents: technical SEO, E-E-A-T, schema, GEO/AEO, backlinks, local, maps, semantic clustering, ecommerce SEO, i18n SEO" + optional DataForSEO/Firecrawl/Ahrefs/Bing/Profound extensions | seo-strategy only, but the deepest specialist treatment found |
| eronred/aso-skills | 7,274 | 38 (verified via tree) | MIT (`LICENSE`) | 1,696 | "AI agent skills for ASO and app marketing... keyword research, metadata optimization, competitor analysis, app growth" | app-store-optimization — the single deepest specialist repo for this one job (covers apple-search-ads, custom-product-pages, in-app-events, web-to-app-funnel, seasonal-aso, review-management) |
| arnabbagxd/brand-building-skills | 12,825 | 29 (verified via tree) | MIT (`LICENSE`) | 449 | "Brand building skills: strategy, naming, identity, voice, positioning, messaging, auditing, launch" | positioning-and-messaging (core), audience-and-segmentation (target-audience), partnerships-and-pr (brand-partnerships), paid (google-ads/meta-ads present here too) |
| manojbajaj95/claude-gtm-plugin | 7,085 | 38 (verified via tree) | MIT (`LICENSE`) | 78 | "Skills for GTM teams" | go-to-market-and-launch (core) but bundles crm-integration, customer-success-and-retention, pitch-deck-creation, growth-strategy, ab-test-setup — sales/success/growth bleed |
| zubair-trabzada/geo-seo-claude | 7,280 | 16 claimed | MIT | 9,180 (high stars for skill count — likely a GEO-hype-cycle breakout) | "GEO-first SEO skill... citability scoring, AI crawler analysis, brand authority" + monetized "skool community" upsell mentioned in repo description | seo-strategy (GEO/AEO sub-slice); CREDIBILITY NOTE: description explicitly funnels to a paid community — treat as specimen, verify claims independently |
| calm-north/seojuice-skills | 34,682 | 6 claimed | MIT (`LICENSE`) | 17 | "Deep SEO skills to run in Claude, Codex etc." | seo-strategy, small/low-adoption |
| resend/resend-skills | (part of 6,482 combined) | small (email API skill) | MIT (`LICENSE`) | 158 | "Agent Skills for working with Resend to send/receive emails" | lifecycle-and-email — PRIMARY-adjacent (vendor's own docs-as-skill, ESP with real deliverability authority) |
| resend/email-best-practices | (part of 7,058) | small | **license: null → NO LICENSE FOUND** | 136 | "Best practices for building and sending emails aided by agents" | lifecycle-and-email; deliverability content likely traces to RFC 8058/CAN-SPAM/GDPR primary sources — worth a primary-source cross-check, not verbatim lift given no license |
| aradotso/marketing-skills | 24,528 | 26 claimed | **NOASSERTION** (LICENSE file present but GitHub can't classify its text — treat as NO LICENSE FOUND until manually read) | 7 | "Auto-generated agent skills from trending marketing & growth repos" | meta-aggregator, itself a repackaging of other repos — low originality signal |
| rampstackco/claude-skills | (found via ComposioHQ awesome-list, not skills.sh) | 59 (partially verified via tree, `dist/pi/.agents/skills/...`) | MIT | 506 | "59-skill library covering the full website lifecycle: brand, design, content, SEO, dev, ops, growth, research... Ahrefs MCP-powered SEO audit" | boundary-violation flagship: marketing skills co-located with `frontend-component-build`, `design-system`, `incident-response`, `feature-flagging`, `backup-and-disaster-recovery`, `internationalization`, `data-warehouse-experimentation` under one repo |
| nexscope-ai/ecommerce-skills + amazon-skills | 5,049 / 4,459 | 9 + 7 | MIT | 546 / 474 | Amazon/Shopify/Etsy/TikTok Shop seller marketing — keyword research, listing audit, competitor analysis | seo-strategy + attribution-and-measurement slice for marketplace sellers, niche vertical |
| VoltAgent/awesome-openclaw-skills "Marketing & Sales" category | n/a (aggregator, not skills.sh) | 106 listed | mixed (community submissions, per-skill) | 5,199 skills repo-wide | Community-submitted single-purpose skills (CRM connectors, ad-platform API wrappers, cold-outreach generators, brand-voice tools) | Confirms the marketing+sales bundling pattern *at the taxonomy level* — the aggregator's own category is named "Marketing & Sales", not two categories. Quality highly uneven: alongside real skills sits crypto/prediction-market/forensics noise mis-tagged into the same category. |
| leonxlnx/taste-skill "brandkit" | 186,413 | 1 | UNVERIFIED | UNVERIFIED | Matched on "brand" term; appears to be a design-token/brand-asset generator, not marketing strategy — borderline, flagged not counted in marketing totals |
| microsoft/azure-skills "azure-messaging" | 481,196 | 1 | N/A | N/A | FALSE POSITIVE — Azure Service Bus messaging queue skill, matched purely on the term "messaging." Excluded from marketing totals. |

## Top 10 by installs (skills.sh, marketing-genuine only, false positives excluded)

1. seo-audit (coreyhaines31/marketingskills) — 175,410
2. copywriting (coreyhaines31/marketingskills) — 165,978
3. marketing-psychology (coreyhaines31/marketingskills) — 120,650
4. content-strategy (coreyhaines31/marketingskills) — 116,043
5. programmatic-seo (coreyhaines31/marketingskills) — 111,267
6. marketing-ideas (coreyhaines31/marketingskills) — 108,001
7. copy-editing (coreyhaines31/marketingskills) — 102,829
8. ai-seo (coreyhaines31/marketingskills) — 100,128
9. ad-creative (coreyhaines31/marketingskills) — 90,132
10. cold-email (coreyhaines31/marketingskills) — 88,099

CREDIBILITY NOTE on this list: it is dominated by a single repo (coreyhaines31/marketingskills)
because skills.sh install counters compound with time-in-index and that repo is the earliest/
most-starred generalist marketing pack; it is not evidence that its content is best-in-class, only
most-installed-via-this-one-registry. UNVERIFIED whether skills.sh install counts reflect actual
runtime usage vs. one-time `npx skills add` events.

## Whitespace analysis (candidate jobs with NO deep/dedicated treatment found)

- **attribution-and-measurement**: present ONLY as a single bolted-on skill inside larger packs
  (`coreyhaines31/marketingskills/skills/attribution`, `aaron-marketing-skills/ad/scale/
  attribution-reconciler`, `.../social/observe/dark-social-attributor`,
  `manojbajaj95/claude-gtm-plugin/skills/data-and-funnel-analytics`). No repo in this sweep treats
  attribution modeling / incrementality / MMM as a first-class discipline with its own multi-skill
  treatment the way SEO or ASO get. This is the clearest whitespace found.
- **category-and-competitive-framing**: same pattern — always a shallow "competitor-analysis" /
  "competitor-profiling" / "competitor-tracking" utility skill (found in ≥5 repos), never a deep
  strategic-framing treatment (category design, "category king" positioning theory). Real gap.
- **audience-and-segmentation**: always present as exactly one skill per repo
  (`customer-research`, `target-audience`, `audience-segment-builder`, `audience-belief-mapper`,
  `ad/research/audience-segment-builder`) — never its own specialist pack. Secondary/partial gap:
  present everywhere but nowhere deep.

## Saturated jobs (many independent deep treatments — low differentiation opportunity)

- **seo-strategy / GEO-AEO**: at least 6 dedicated specialist repos found
  (agricidaniel/claude-seo, aaron-he-zhu/seo-geo-claude-skills, calm-north/seojuice-skills,
  zubair-trabzada/geo-seo-claude, coreyhaines31's seo-audit/programmatic-seo/ai-seo/schema
  cluster, kostja94's seo/* subtree) plus dozens of single-skill entries in generalist packs.
- **app-store-optimization**: shallow in generalist packs but has one very deep specialist
  (eronred/aso-skills, 38 skills) — the job is "solved" by a third party at depth; a pack wedge
  here would need to out-execute a repo that already covers apple-search-ads, custom-product-pages,
  in-app-events, and web-to-app-funnels.
- **go-to-market-and-launch**: well covered (aaron's 16-skill `launch/*` cluster,
  coreyhaines31's launch-strategy/launch, manojbajaj95's go-to-market-strategy/product-hunt-launch,
  arnabbagxd's brand-launch).
- **organic-social-and-community**: well covered across nearly every generalist repo
  (coreyhaines31 social/community-marketing, aaron's `social/*` 12-skill cluster, arnabbagxd,
  kostja94's channels/community subtree).
- **lifecycle-and-email**: well covered, including primary-adjacent vendor sources
  (resend/resend-skills, resend/email-best-practices) plus aaron's 12-skill `email/*` cluster and
  coreyhaines31's cold-email/emails.

## Boundary-violation pattern — recorded with paths (per charter binding boundaries)

The charter says marketing does NOT own sales/CRM, growth experiments, pricing, onboarding/success,
or production code. Every generalist repo found in this sweep violates at least one of these:

1. `coreyhaines31/marketingskills` (`skills/churn-prevention`, `skills/onboarding`,
   `skills/revops`, `skills/sales-enablement`, `skills/prospecting`, `skills/pricing`,
   `skills/paywalls`, `skills/signup`, `skills/popups`) — success/sales/product/growth all folded
   into a "marketing" pack.
2. `manojbajaj95/claude-gtm-plugin` (`skills/crm-integration`, `skills/customer-success-and-
   retention`, `skills/pitch-deck-creation`, `skills/growth-strategy`, `skills/ab-test-setup`,
   `skills/pricing-strategy`) — CRM, success, growth-experiment, and pricing all present in a
   "GTM" pack labeled marketing.
3. `kostja94/marketing-skills` (`skills/pages/*` — 18 marketing-page + 10 content-page + 6 legal-
   page templates, `skills/components/{navigation,layout,conversion,branding}/*`) — production
   landing-page/website component code and legal-page copy inside a "marketing skills" repo; this
   is exactly the frontend/design boundary the charter draws.
4. `rampstackco/claude-skills` (`dist/pi/.agents/skills/frontend-component-build`,
   `.../design-system`, `.../incident-response`, `.../feature-flagging`, `.../backup-and-disaster-
   recovery`, `.../internationalization`, `.../data-warehouse-experimentation`) — a "full website
   lifecycle" pack blending marketing with frontend build, ops/SRE, and data/growth in one repo.
5. `aaron-he-zhu/aaron-marketing-skills` is comparatively disciplined but still has
   `launch/assemble/sales-enablement-kit` and `launch/assemble/pricing-packaging-planner` —
   sales-enablement and pricing bleed even in the most architecturally careful repo found.
6. **Registry-level evidence**: `VoltAgent/awesome-openclaw-skills` names its own top-level
   taxonomy category **"Marketing & Sales"** (106 skills, one bucket) — the bundling is not just a
   packaging accident inside individual repos, it is how at least one major aggregator classifies
   the domain by default.

## Findings outside all 12 candidate jobs (flag, per mandate)

- Skill-authoring/runtime tooling mis-caught by term overlap: `personamanagmentlayer/pcl`
  ("Persona Control Language") matched on "persona" but is a skill-packaging/compiler CLI, not
  audience-persona marketing content — false positive, noted so the synthesis doesn't double-count.
- Ecommerce marketplace-seller tooling (`nexscope-ai/ecommerce-skills`, `nexscope-ai/amazon-
  skills`) sits at the intersection of marketing (listing/keyword optimization) and what our
  charter calls out-of-scope for other packs (supply chain, business analytics) — flagged as a
  vertical (marketplace-seller) that may deserve its own overlay rather than a job.
- `refoundai/lenny-skills` (86 skills, MIT, 1,204 stars, "product management skills from Lenny's
  Podcast") surfaced on "market-research"/"positioning" terms but is a **product-management** pack
  (hiring, user research, strategy, shipping) — out of scope for marketing entirely, noted as a
  clean negative (term overlap, not a marketing competitor).

## Credibility notes (ladder application)

Everything in this report is agent-skill-marketplace content — by the charter's own ladder this
sits below "vendor engineering blogs" for authority (rung: "agency/tool content marketing" at best,
frequently "course-seller funnel content" — e.g. zubair-trabzada/geo-seo-claude's repo description
explicitly links to a paid "skool community"). The two exceptions with primary-adjacent standing
are `resend/resend-skills` and `resend/email-best-practices` (an ESP's own documentation-as-skill,
closer to a vendor engineering blog / platform-docs rung). None of this content should be treated
as evidence for marketing *facts* (e.g. "this SEO tactic works") — only as evidence for *what the
ecosystem already ships* and *how it is packaged*, which is what this mandate asked for.

## What I did NOT cover and why

- Did not open individual SKILL.md bodies (no `.../api/skill?id=` detail endpoint found; would
  require per-skill WebFetch at a cost disproportionate to a breadth mandate). Sub-orchestrator
  should have channel C's deep coreyhaines31 read as the one worked example of skill-body quality.
- Did not pursue smithery.ai / skills.volces.com JSON APIs past the initial 200-but-opaque
  response — flagged UNVERIFIED, would need a browser-driven (Chrome MCP) pass, out of budget here.
- claudeskills.directory is unreachable; not re-attempted per charter's "don't debug flaky
  endpoints" instruction.
- Did not verify guia-matthieu/clawfu-skills or onewave-ai/claude-skills skill counts by tree walk
  (relied on repo descriptions) — flagged UNVERIFIED in the table; low marginal value for breadth
  since both cluster into jobs already well-represented by verified repos.
- WebSearch: 0 of 4 budgeted calls used — skills.sh + gh api + WebFetch/curl covered the mandate.
