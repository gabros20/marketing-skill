# GitHub sweep — awesome-lists + marketing curricula/education repos (worker: mkt-github)

As-of date for all stars/pushed-at facts below: 2026-07-31/08-01, gathered via `gh search repos`, `gh api repos/<o>/<r>`, `gh api repos/<o>/<r>/readme`, `gh api repos/<o>/<r>/license`. IMPORTANT METHOD NOTE: GitHub search API's `updatedAt` field reflects ANY repo metadata change (a star, a topic edit) and is NOT a reliable staleness signal — I use `pushed_at` (actual last commit) throughout below for currency judgments; where I only had `updatedAt` from a raw search dump I say so explicitly.

---

## SOURCE: marketingtoolslist/awesome-marketing
https://github.com/marketingtoolslist/awesome-marketing — README: https://github.com/marketingtoolslist/awesome-marketing/blob/main/README.md
**WHAT IT TEACHES:** A tool-directory taxonomy of the marketing discipline organized as: Marketing Strategy & Planning (Market Segmentation and Targeting, Campaign Planning, Budgeting and Forecasting, Competitor and Market Analysis, Marketing Mix Modeling) → SEO (Keyword Research, On-Page, Technical, Link Building, Local, SERP Tracking, Analytics) → Social Media Marketing → Content Marketing → Email Marketing → Marketing Automation → SEM → Analytics/Reporting (incl. CRO) → CRM → Advertising and Media Buying (Programmatic, Affiliate, Native) → Market Research and Competitor Analysis → Brand Management (Reputation, Monitoring, DAM). Each subsection lists 4-6 named commercial tools with one-line descriptions; sponsored by an affiliate marketing site (marketinguys.com) so tool picks skew toward vendors with affiliate deals — read the tool endorsements as advertising, not independent evaluation.
**VERBATIM-WORTH-KEEPING:** MIT-licensed (LICENSE file confirmed, verbatim reuse of facts/lists permitted). No quotes worth lifting — content is link-directory style, not prose argument.
**RELEVANCE TO PACK JOBS:** The section taxonomy itself is a clean 1:1 map onto candidate jobs: segmentation/targeting → audience-and-segmentation; competitor/market analysis → category-and-competitive-framing; SEO subsections → seo-strategy; content/social/email → content-strategy, organic-social, lifecycle-and-email; SEM/advertising/affiliate → paid-acquisition; brand management → partnerships-and-pr (reputation) adjacent.
**CREDIBILITY NOTE:** Agency/tool content-marketing tier (sponsored list) — useful for taxonomy convergence, not for tool endorsement or claims. Active/current: pushed 2026-07-27 (fresh).

---

## SOURCE: ronakganatra/awesome-developer-marketing
https://github.com/ronakganatra/awesome-developer-marketing — README.md
**WHAT IT TEACHES:** The most complete curated map I found of the developer-marketing (B2D) sub-discipline: Basics (WTF-is primers), **Internal Handbooks** (links to GitLab's public Marketing Handbook, PostHog's Marketing Handbook, Resend's Handbook — i.e., real companies' actual public playbooks, not third-party commentary), Blogs/Books, "Developer Marketing Centric Resources" (30+ curated essays on why B2D marketing differs from B2C — audience skepticism, docs-as-marketing, content-not-marketing framing), Docs (14 API docs cited as marketing-quality benchmarks: Stripe, Twilio, Prisma, etc.), Case Studies (Snowflake, Stripe, Segment, Vercel, Notion, Novu, Lago — PLG/OSS growth stories), Community Marketing (cites the Orbit Model and "community-market fit"), Design Inspiration (30 dev-tool homepages), Newsletters, Influencers/Educators (named list of ~25 DevRel practitioners).
**VERBATIM-WORTH-KEEPING:** NO LICENSE FOUND (gh api 404 on both /license and no LICENSE file) → facts re-expressed only, nothing lifted verbatim.
**RELEVANCE TO PACK JOBS:** Directly informs the "developer-tool" GTM-motion surface named in the charter — this is the single best-organized primary map of what that surface actually requires (docs-as-marketing, community-market-fit, case-study patterns). Feeds category-and-competitive-framing (via "why B2D differs"), content-strategy (docs framing), partnerships-and-pr adjacent (community).
**CREDIBILITY NOTE:** Named-practitioner curation (co-builder of a "Developer Marketing Community"); the Internal Handbooks links are primary-source tier (companies' own public playbooks). pushed 2026-03-03 — actively maintained.

---

## SOURCE: goabstract/Marketing-for-Engineers (mirror of LisaDziuba/Marketing-for-Engineers)
https://github.com/goabstract/Marketing-for-Engineers — README.md
**WHAT IT TEACHES:** The original, most-starred "marketing for a technical audience" curriculum (13,196★ — by far the largest list found in this sweep). Taxonomy: User Research (personas, JTBD-adjacent discovery, Lean Startup/customer-discovery framing) → Market Research → Marketing without Budget (Paul Graham's "Do Things that Don't Scale," first-1000-users post-mortems) → Content Marketing (Personal Blog, Medium Marketing, Promotion) → Influencer Marketing → Product Hunt Launch (a full playbook: rules, timing, tools, curated checklists) → Social Media Marketing (Twitter, Facebook, Reddit, LinkedIn, Quora) → Lifecycle Email → Cold Email → Partnerships → Psychology in Marketing → Business Model/Pricing → Marketing Automation → SaaS transition. Written by the founders of an iOS tool (Flawless App) documenting their own 2-year self-taught marketing journey — first-person "here's exactly what worked for us" framing throughout, not theory.
**VERBATIM-WORTH-KEEPING:** License file path = "License" (CC-BY-SA-3.0, confirmed via `gh api .../contents/License`) — attribution-required reuse permitted, no verbatim lift needed since content is link-curation not original prose.
**RELEVANCE TO PACK JOBS:** Comprehensive precedent for audience-and-segmentation (persona/JTBD), go-to-market-and-launch (dedicated Product Hunt section is the earliest and most detailed of any list surveyed), content-strategy, organic-social-and-community, lifecycle-and-email, partnerships-and-pr.
**CREDIBILITY NOTE:** **DEAD LIST** — pushed_at 2020-10-27, over 5 years stale as of 2026. GitHub search API's "updatedAt" field showed 2026-07-30 for this repo, which is misleading (metadata churn, not content updates) — pushed_at is the true signal. Its Product Hunt / Twitter-automation tactics are pre-2021 and should be treated as historically informative rather than current best practice (algorithm/platform-policy volatility rule applies). Named-practitioner post-mortem tier for the case-study material; specimen for "what marketing-for-engineers curricula looked like in the 2017-2020 era."

---

## SOURCE: EdoStra/Marketing-for-Founders
https://github.com/EdoStra/Marketing-for-Founders — README.md
**WHAT IT TEACHES:** The freshest and best-organized "practical marketing for technical founders" list found (pushed 2026-07-13, i.e. weeks old at as-of date). Explicitly positions itself as the practical, non-VC-scale successor to Marketing-for-Engineers. Taxonomy: Places to Launch (launch platforms, software directories, lifetime-deal platforms, 25+ named subreddits with flair conventions) → Product Hunt Launch → Social Media (Building in Public, Social Listening) → Sales & Cold Outreach (ICP frameworks) → SEO → **LLM SEO, AEO, GEO** (a dedicated section — "getting recommended by ChatGPT/Claude/Perplexity/Gemini," citing Vercel's, PostHog's and Ahrefs' AEO material) → Marketing on Reddit → Email Marketing → Content Marketing → Ads → Influencer Marketing → Affiliates and Referrals → Free-Tool Marketing ("Engineering as Marketing") → Landing Pages/Messaging/Positioning → Pricing → CRO → Idea Validation → User Research (incl. named customer-interview scripts from Michele Hansen's "Deploy Empathy").
**VERBATIM-WORTH-KEEPING:** License file = LICENSE.md, confirmed present via `gh api .../license`; quote used below is a single short verbatim line under the 25-word/2-quote cap: "Your product delivers the value added to target customers; with pricing, we capture added value back to build a sustainable business." (attributed to the Pricing section, sourced from knowledge.gtmstrategist.com per the list's own citation).
**RELEVANCE TO PACK JOBS:** The single strongest convergence document for the charter's candidate job list — its sections map almost 1:1 onto go-to-market-and-launch, seo-strategy, content-strategy, lifecycle-and-email, paid-acquisition, organic-social-and-community, positioning-and-messaging. **Its "LLM SEO, AEO, GEO" section is a genuine gap-flag**: none of the charter's candidate jobs name AI-answer-engine optimization explicitly, but a live 2026 practitioner list treats it as a first-class discipline alongside classic SEO — worth a synthesis-gate decision on whether AEO/GEO is folded into seo-strategy or split out. Also confirms the zero-audience/pre-launch overlay is a recognized practitioner pattern (its own top section is literally "Places to Launch Your Startup").
**CREDIBILITY NOTE:** Curator-aggregated but sources named practitioners/companies consistently (PostHog founders blog, Elena Verna, Michele Hansen/Deploy Empathy, Lenny's Newsletter, MKT1, GTM Strategist, growthunhinged) — agency/practitioner-blog tier, several verging on named-practitioner-with-real-numbers tier (PostHog's own "how we got our first 1,000 users," Superhuman PMF case). Actively maintained (pushed 2026-07-13).

---

## SOURCE: mmccaff/PlacesToPostYourStartup
https://github.com/mmccaff/PlacesToPostYourStartup — README.md
**WHAT IT TEACHES:** A flat, alphabetized directory of ~100 startup-submission channels (subreddits + directory sites: AngelList, Product Hunt, G2, Capterra, Show HN, StartupBlink, etc.), sourced originally from two 2014-era Hacker News threads and continuously mirrored/updated since (mirrored live at placestopostyourstartup.com).
**VERBATIM-WORTH-KEEPING:** CC0 1.0 (explicit public-domain waiver stated in README, confirmed) — fully reusable verbatim, no attribution even required.
**RELEVANCE TO PACK JOBS:** Direct raw material for the zero-audience/pre-launch overlay and go-to-market-and-launch job (channel inventory for a launch checklist).
**CREDIBILITY NOTE:** Pure directory, no argument/claims to verify — credibility is not the axis; currency is: pushed 2026-02-14 (actively maintained), but several individual channel links are known to rot over multi-year periods (submission-site churn is itself a volatile fact worth flagging in the pack if this list is used as a reference).

---

## SOURCE: draftdev/startup-marketing-checklist
https://github.com/draftdev/startup-marketing-checklist — README.md + marketing-checklist.md
**WHAT IT TEACHES:** A **phase-based** (not channel-based) organizing structure that several other lists lack: Pre-Launch (Competitor Research, Customer Research, PR Preparations, Website/Email/Blog/Social Setup) → Post-Launch (Free Promotional Channels, Paid Promotional Channels) → Recurring (Blogging, Email, Social Media, PR, External Sites) → Optimizations. This pre-launch/post-launch/recurring/optimize split is a genuinely different and useful axis for structuring a go-to-market-and-launch job's checklist logic (temporal, not channel-based).
**VERBATIM-WORTH-KEEPING:** License stated in README body as MIT (Portable CTO LLC, 2021) — no separate LICENSE file registered with GitHub's license API (404 on the licenses endpoint), but the license text is explicit and unambiguous in-repo, so treat as MIT-confirmed via README rather than "NO LICENSE FOUND."
**RELEVANCE TO PACK JOBS:** Directly informs go-to-market-and-launch structure (phase taxonomy) and cross-cuts content-strategy/lifecycle-email/paid-acquisition/organic-social by placing each inside a temporal phase rather than a channel silo.
**CREDIBILITY NOTE:** **DEAD LIST** — pushed_at 2021-11-08, nearly 5 years stale; originated 2017 as "Side Project Marketing Checklist." Tool links (Bugsnag, Kissmetrics, etc.) and channel tactics should be treated as historically informative, not current. Author runs draft.dev (a technical-content agency) — agency-content tier.

---

## SOURCE: bmpi-dev/awesome-seo (formerly madawei2699/awesome-seo)
https://github.com/bmpi-dev/awesome-seo — README.md
**WHAT IT TEACHES:** An SEO-specific curated list built from one practitioner's self-documented "learned SEO systematically since 2019" journey, oriented toward monetized/affiliate "authority site" building rather than product marketing per se. Sections: Basic Concept → Tutorials (links Google's own Webmaster Guidelines and Moz's Beginner's Guide) → Books (The Art of SEO) → Article/Video (Ahrefs/Backlinko/Moz practitioner posts on content marketing, ranking factors, SEO writing) → Google Ads → Tools → Chrome Plugins → Blog/Twitter → Community → Traffic Monetization.
**VERBATIM-WORTH-KEEPING:** MIT (LICENSE file confirmed present) — no verbatim lifts taken, only facts re-expressed.
**RELEVANCE TO PACK JOBS:** Feeds seo-strategy; the "Traffic Monetization" framing is a useful negative signal — it shows SEO-as-affiliate-income-generation is a distinct (and largely out-of-scope) genre adjacent to product-marketing SEO, worth explicitly excluding in the pack's SEO job scope note.
**CREDIBILITY NOTE:** The Tutorials section correctly anchors on primary sources (Google Webmaster Guidelines) per the credibility ladder's top rung; the bulk of Article/Video links are agency-content tier (Ahrefs, Backlinko, Moz — all vendor blogs). Active (pushed 2026-04-02).

---

## SOURCE: station-10/awesome-marketing-machine-learning
https://github.com/station-10/awesome-marketing-machine-learning — README.md
**WHAT IT TEACHES:** A curated inventory of real, adopted open-source libraries for quantitative marketing measurement, organized by technique: Attribution (Markov-chain MTA, Google's `fractribution`), Causal Inference (Google's `CausalImpact`, Uber's `causalml`, Meta-adjacent `dowhy`), Churn/CLV (`lifetimes`, now folded into `pymc-marketing`), Data, Econometrics, **Geo Experimentation** (Google's `trimmed_match`, `matched_markets`; Meta's `GeoLift`), Media/Marketing Mix Models, Personalisation/Segmentation, Recommendation Systems, Time Series, Survival Analysis, Synthetic Control, Synthetic Data.
**VERBATIM-WORTH-KEEPING:** MIT (LICENSE confirmed). No prose to quote — pure library index.
**RELEVANCE TO PACK JOBS:** This is the single most concrete, technique-level map for attribution-and-measurement — names the actual open-source tools (many built and maintained by Google/Meta/Uber) that a data or growth counterpart would use to implement MMM/MTA/geo-lift, which is exactly the boundary the charter draws ("marketing owns campaign measurement REQUIREMENTS; data owns the pipeline").
**CREDIBILITY NOTE:** "Open-source repos with real adoption" is the charter's top-rung primary-source category, and every library here qualifies (star counts confirm real usage, several built by Google/Meta/Uber research teams). Moderately stale as a *list* — pushed 2024-05-01 (over 2 years) — though the underlying libraries themselves may still be current; verify individual tool status before citing as "current" in synthesis.

---

## SOURCE: shakostats/Awesome-Marketing-Science
https://github.com/shakostats/Awesome-Marketing-Science — README.md
**WHAT IT TEACHES:** The most rigorous measurement-science list found, curated by a practitioner (shakostats.com) with an explicit "Start Here / Must Read" onboarding path through Geo Incrementality & Matched Markets, Platform Incrementality & Ghost Ads, Measurement Strategy & MMM, A/B Testing & Experiment Quality, Causal Inference Foundations, Bayesian Modeling Foundations, and Marketing Science Breadth — then full sections of Open Source Libraries (overlapping station-10's list, cross-confirming those tools' centrality) and a **Key Researchers** section naming Byron Sharp (Ehrenberg-Bass Institute director, author of *How Brands Grow*), Peter Fader (Wharton, CLV), Susan Athey and Guido Imbens (Stanford, causal inference/ML — Imbens is a 2021 Nobel laureate), Garrett Johnson and Randall Lewis (co-authors of the foundational "Ghost Ads" paper, the latter now at Netflix).
**VERBATIM-WORTH-KEEPING:** MIT (LICENSE confirmed). Quote (1 of 2 permitted, <25 words): "Ghost Ads: Improving the Economics of Measuring Online Ad Effectiveness" is cited as "Foundational ghost ads paper" — descriptor, not lifted prose beyond the paper's own title.
**RELEVANCE TO PACK JOBS:** Directly and precisely confirms the charter's own credibility ladder — this list independently converges on Ehrenberg-Bass/Byron Sharp as the top academic authority for marketing science, exactly as the charter names it. Strongest single source for attribution-and-measurement's theoretical/academic backbone (geo-experiments, CUPED, ghost ads as the real-world proxy for incrementality when a proper holdout isn't possible).
**CREDIBILITY NOTE:** Top of the ladder for this domain — cites peer-reviewed/named-researcher primary sources (Google/Meta research papers, the original CUPED paper, Ehrenberg-Bass Institute) directly, not secondhand summaries. Active (pushed 2026-05-06).

---

## SOURCE: devrelcollective/awesome-devrel
https://github.com/devrelcollective/awesome-devrel — README.md
**WHAT IT TEACHES:** A DevRel-practitioner operational-tooling directory (not conceptual taxonomy): community forums, static-site generators, podcasting, workshop/training tools, virtual events, analytics/CRM, developer portals, video/streaming, CFP/speaking resources, plus a physical-hardware section (clickers, microphones, cameras, travel/luggage for conference-going advocates) and dedicated Community Building and Diversity/Equity/Inclusion sections.
**VERBATIM-WORTH-KEEPING:** CC-BY-SA-4.0 (LICENSE.MD confirmed) — attribution+share-alike reuse permitted; no prose quotes taken (pure tool index).
**RELEVANCE TO PACK JOBS:** Confirms DevRel/community as a distinct operational discipline with its own toolchain, feeding organic-social-and-community and partnerships-and-pr for the developer-tool GTM-motion surface; the hardware/travel sections are a reminder that DevRel has a physical-presence cost dimension a marketing pack should at least footnote (conference budget, travel) even if it doesn't own it.
**CREDIBILITY NOTE:** Community-sourced under a named collective (The DevRel Collective) — practitioner-community tier. Moderately stale as a list (pushed 2025-05-09, over a year).

---

## SOURCE: LeCoupa/awesome-bootstrappers
https://github.com/LeCoupa/awesome-bootstrappers — README.md + submodule files (e.g. marketing/framework/acquisition.md)
**WHAT IT TEACHES:** Organizes its Marketing section explicitly around the **AARRR ("Pirate Metrics") funnel** — Acquisition, Activation, Retention, Referral, Revenue — plus Resources (Mindset, Books, YouTube) and Skills (Sales, Social Media). The Acquisition sub-file itself is organized by channel (Google Ads, Facebook Ads/Lookalike Audiences, SEO, Email, Other Ad Networks, Kickstarter/Crowdfunding, Twitter), each with named case-study links.
**VERBATIM-WORTH-KEEPING:** MIT (confirmed via `gh api` license.key). No prose to quote — link index.
**RELEVANCE TO PACK JOBS:** The AARRR framing is a useful cross-cutting lens (acquisition/activation/retention/referral/revenue) that the charter deliberately splits across marketing (acquisition/paid/organic) vs. growth (experiments across the funnel) vs. success (retention/onboarding) — this repo is evidence that practitioners in the wild do NOT split AARRR the way the family boundaries do, which is worth flagging as a boundary-communication risk: the pack may need explicit "AARRR sits across marketing+growth+success" framing to avoid confusing users who know this funnel model.
**CREDIBILITY NOTE:** Curated but unattributed per-tactic (many dead/2017-2019-era links observed in the acquisition file, e.g. Facebook "Lookalike Audiences" guides that predate iOS14.5/ATT-era targeting changes — a volatile-facts flag: paid-social targeting mechanics changed materially since these were written). Stale: pushed 2023-09-16 (about 3 years).

---

## SOURCE: orbit-love/orbit-model
https://github.com/orbit-love/orbit-model — README.md
**WHAT IT TEACHES:** "The Orbit Model" — a named community-building framework (gravity, reach, love as core metrics; "Orbit Levels" for prioritizing which community members to invest time in) originally developed in 2014 by developer advocates, open-sourced 2019, sponsored by Orbit (a community-analytics company). Explicitly designed for product/developer communities, community-driven businesses, and open-source projects converting users into contributors.
**VERBATIM-WORTH-KEEPING:** MIT (LICENSE confirmed, Orbit Labs Inc. 2020 copyright). No verbatim quotes taken — model concepts (gravity/reach/love/orbit-levels) are re-expressed as named-concept references, not lifted prose.
**RELEVANCE TO PACK JOBS:** This is the single most independently-cited framework across the sweep — cited by name in ronakganatra/awesome-developer-marketing's Community Marketing section AND standing as its own repo — real convergence evidence that "Orbit Model" is the closest thing to a canonical developer-community-building framework, directly feeding organic-social-and-community.
**CREDIBILITY NOTE:** Self-declared "no longer under active development" (explicit in the README) — a **DEAD project** despite a live pushed_at of 2026-03-07 (likely a docs/site tweak, not content evolution). Vendor-sponsored (Orbit) origin — treat as practitioner-framework tier, not neutral research, though its multi-source citation elsewhere raises confidence it reflects real practice.

---

## SOURCE: johackim/awesome-indiehackers
https://github.com/johackim/awesome-indiehackers — README.md
**WHAT IT TEACHES:** A named-practitioner directory for the indie-hacker/bootstrapper niche: Indie Hackers (Pieter Levels, Arvid Kahl, Marc Lou, Danny Postma, Jakob Greenfeld — recognizable named operators), Blogs (marketingexamples.com recurs here as it did in EdoStra's list — cross-list convergence), Books (Rob Walling's *The SaaS Playbook*, Arvid Kahl's *Zero to Sold*, Rob Fitzpatrick's *The Mom Test*, Paul Jarvis's *Company of One*), Podcasts, Communities, **Courses** (Amy Hoy & Alex Hillman's 30x500 Academy, Justin Jackson's "Marketing for Developers," Corey Haines's "Refactoring Growth"), YouTube channels.
**VERBATIM-WORTH-KEEPING:** GPL-3.0 (LICENSE.txt confirmed, stated explicitly in README: "Free Software, Hell Yeah!"). No prose lifted — pure name/link directory.
**RELEVANCE TO PACK JOBS:** Confirms a stable canon of named practitioners/books recurring across at least 3 independently-authored lists in this sweep (marketingexamples.com, Rob Walling, PostHog's founder content) — this convergence is itself the evidence the charter asks to prioritize. Feeds positioning-and-messaging, go-to-market-and-launch, category-and-competitive-framing (bootstrapper-specific canon).
**CREDIBILITY NOTE:** Named-practitioner curation tier; some named individuals (Levels, Kahl, Postma) have real, disclosed revenue numbers behind their public teaching, qualifying as "named-practitioner post-mortems with real numbers" per the credibility ladder. Active (pushed 2026-03-27).

---

## SOURCE: fmerian/awesome-developer-first-channels
https://github.com/fmerian/awesome-developer-first-channels — README.md
**WHAT IT TEACHES:** A meta-list — a curated list of OTHER awesome-lists and channels specifically for developer-first product distribution (GitHub repo collections, Medium publications that accept dev-tool guest posts, developer newsletters like TLDR/Bytes/Console/Cooperpress, podcasts, subreddits, Slack communities, Twitter accounts, websites). Explicitly inspired by mmccaff/PlacesToPostYourStartup and cites a dozen sibling awesome-lists (awesome-developer-experience, awesome-dx by WorkOS, awesome-oss-saas, awesome-pricing, launchweek.dev).
**VERBATIM-WORTH-KEEPING:** NO LICENSE FOUND (404 on license API) → facts re-expressed, no verbatim lift.
**RELEVANCE TO PACK JOBS:** Strong confirmation that "developer-tool" is a recognized, self-sustaining GTM-motion surface with its own distribution-channel ecosystem distinct from general SaaS/consumer channels — directly validates the charter's named developer-tool surface.
**CREDIBILITY NOTE:** Meta-curation (list-of-lists) tier — useful for discovery, not itself an authority. Active (pushed 2026-07-17).

---

## Specimen note: "Marketing skills for AI agents" — a distinct, fast-growing genre (light-touch coverage; primary depth owned by the mkt-skills worker)

A `gh search repos --topic marketing` sweep surfaced a large, very recent wave of GitHub repos that package marketing playbooks as Claude Code / AI-agent "skills" rather than as human-readable awesome-lists. The scale is striking and worth flagging as evidence for the pack's agentic overlay, even though deep analysis of this genre belongs to the dedicated mkt-skills channel:
- **coreyhaines31/marketingskills** — 42,544★ (pushed 2026-07-29), MIT — "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering." This is the single most-referenced marketing-skills repo — cited by name inside EdoStra/Marketing-for-Founders' "Other resources" section, i.e. an independent human-curated list already treats it as canonical.
- **ericosiu/ai-marketing-skills** — 3,293★, MIT — growth experiments/sales pipeline/content ops/outbound/SEO/finance automation skills.
- **aaron-he-zhu/aaron-marketing-skills** — 2,483★, Apache-2.0 — "120 marketing skills + 8 commands... across 7 disciplines."
- **zubair-trabzada/ai-marketing-claude** — 2,246★, MIT — "15 marketing skills with parallel subagents."
- Several smaller/newer entrants (kostja94/marketing-skills 793★, OpenClaudia/openclaudia-skills 606★, irinabuht12-oss/marketing-skills 600★, guia-matthieu/clawfu-skills 143★, matteotitta/genesys-skills 19★) show this is an actively multiplying genre, not one dominant repo.
- **Gingiris/gingiris-opensource** and **Gingiris/gingiris-launch** (both ~150-240★, MIT, pushed 2026-05-07) deserve a **specimen, not evidence** flag per charter rule 4: both are simultaneously (a) genre-typical OSS-launch/GTM playbooks with real tactical content (student-developer-network activation, KOL activation, warm-network activation — genuine OSS-star-growth tactics, cross-confirmed by Novu/GetLago case studies cited elsewhere in this sweep) and (b) active lead-generation funnels for a paid consulting practice (Telegram-listed $150-$1,500 session/retainer pricing, crypto payment accepted, sold as an installable "ClawHub Skill"). Treat the tactical content as informative but the packaging itself as a specimen of how 2026-era growth playbooks are monetized and distributed as AI-agent skills.
- Smaller dedicated marketing-skill lists found via the charter's named starting points: **plushyta/Awesome-Marketing-Skills** (13★, aesthetic/"vibe designing" framing, no license found) and **About-Intelligence/awesome-marketing-skills** (7★, MIT, 52 "battle-tested skill prompts" funneling to a soku.ai SaaS) are minor and largely promotional; not worth deep synthesis weight relative to the four large repos above.

---

## Known starting points re-verified (per charter instructions)

- **ronakganatra/awesome-marketing** (400★, no license file — NO LICENSE FOUND, pushed 2025-02-24): a general (non-dev-specific) practitioner list with sections Blogs, Books, Case Studies, Content Marketing, CRM, Design Inspiration, Newsletters, Performance Marketing & Optimization, Podcasts, Product/Community/Developer Marketing, SEO, Startups & Getting Started, Marketing Strategy and Growth, **Teams/Leadership/Management**, Tools, Tweets, Others. The Teams/Leadership/Management section is out of the charter's marketing-pack scope (org design, not demand-creation) — noted as a boundary-adjacent section to explicitly exclude.
- **ninjasort/awesome-marketing** (234★, no license found, pushed 2026-06-11 — active): broad channel-based tool directory (Trends, SEO Research, Email Marketing, Lead Generation, Growth Engines, Affiliate Programs, Landing Pages, E-Commerce Tools, Analytics, Social, Content Marketing, Stock Resources) — converges with marketingtoolslist's taxonomy, reinforcing that channel-based organization is the majority pattern across general (non-dev) marketing awesome-lists.
- **vkoul/awesome-Marketing-Analytics** (70★, no license found) — **stale**: pushed 2025-06-17, over a year old at as-of date. Not read in full given lower star count and staleness relative to the two dedicated marketing-science lists (station-10, shakostats) which cover the same ground more rigorously and more currently.
- **station-10/awesome-marketing-machine-learning**, **shakostats/Awesome-Marketing-Science**, **plushyta/Awesome-Marketing-Skills**, **About-Intelligence/awesome-marketing-skills** — see full entries above.

---

## SOURCES table

| Repo URL | License file seen | Stars (as-of 2026-07-31) | Last push (pushed_at) | Credibility rung |
|---|---|---|---|---|
| github.com/marketingtoolslist/awesome-marketing | LICENSE (MIT) | 421 | 2026-07-27 | agency/tool content-marketing |
| github.com/ronakganatra/awesome-developer-marketing | NO LICENSE FOUND | 397 | 2026-03-03 | named-practitioner curation; Internal Handbooks links = primary source |
| github.com/goabstract/Marketing-for-Engineers | License (CC-BY-SA-3.0) | 13,196 | **2020-10-27 (dead list)** | named-practitioner post-mortem (case studies) / historical specimen |
| github.com/EdoStra/Marketing-for-Founders | LICENSE.md | 6,693 | 2026-07-13 | agency/practitioner-blog, several named-practitioner-with-numbers |
| github.com/mmccaff/PlacesToPostYourStartup | LICENSE (CC0-1.0) | 6,829 | 2026-02-14 | directory, not claims-bearing |
| github.com/draftdev/startup-marketing-checklist | MIT stated in README (no separate LICENSE file registered) | 5,635 | **2021-11-08 (dead list)** | agency content |
| github.com/bmpi-dev/awesome-seo | LICENSE (MIT) | 2,748 | 2026-04-02 | primary (Google guidelines) + agency-blog mix |
| github.com/station-10/awesome-marketing-machine-learning | LICENSE (MIT) | 144 | 2024-05-01 (list stale; libraries may still be current) | primary (OSS with real adoption) |
| github.com/shakostats/Awesome-Marketing-Science | LICENSE (MIT) | 68 | 2026-05-06 | primary (peer-reviewed/Ehrenberg-Bass/named researchers) — top rung |
| github.com/devrelcollective/awesome-devrel | LICENSE.MD (CC-BY-SA-4.0) | 759 | 2025-05-09 | practitioner-community tool directory |
| github.com/LeCoupa/awesome-bootstrappers | MIT (license.key confirmed) | 269 | **2023-09-16 (stale, ~3yr)** | curated but largely dead links (pre-ATT era paid-social guides) |
| github.com/orbit-love/orbit-model | LICENSE (MIT) | 1,015 | 2026-03-07 (site tweak; project explicitly "no longer under active development") | vendor-sponsored practitioner framework, multi-source-cited |
| github.com/Gingiris/gingiris-opensource | LICENSE (MIT) | 240 | 2026-05-07 | **specimen** (paid-consulting funnel) with genuine tactical content |
| github.com/Gingiris/gingiris-launch | LICENSE (MIT) | 190 | 2026-05-07 | **specimen** (paid-consulting funnel) |
| github.com/johackim/awesome-indiehackers | LICENSE.txt (GPL-3.0) | 642 | 2026-03-27 | named-practitioner curation |
| github.com/fmerian/awesome-developer-first-channels | NO LICENSE FOUND | 175 | 2026-07-17 | meta-curation (list-of-lists) |
| github.com/ronakganatra/awesome-marketing | NO LICENSE FOUND | 400 | 2025-02-24 | named-practitioner curation |
| github.com/ninjasort/awesome-marketing | NO LICENSE FOUND | 234 | 2026-06-11 | tool-directory, uncredited |
| github.com/vkoul/awesome-Marketing-Analytics | NO LICENSE FOUND | 70 | **2025-06-17 (stale)** | tool-directory, not read in full |
| github.com/plushyta/Awesome-Marketing-Skills | NO LICENSE FOUND | 13 | 2026-04-27 | minor/promotional (AI-skill genre) |
| github.com/About-Intelligence/awesome-marketing-skills | LICENSE (MIT, key present) | 7 | 2026-04-01 | minor/promotional (AI-skill genre, funnels to soku.ai) |
| github.com/coreyhaines31/marketingskills | MIT (license.key) | 42,544 | 2026-07-29 | **specimen** — largest AI-agent marketing-skill repo; cited independently by EdoStra's list |

---

## What I did NOT cover and why

- **Deep analysis of the "marketing skills for Claude Code / AI agents" genre** (coreyhaines31/marketingskills and ~15 similar repos surfaced by `topic:marketing`) — I confirmed scale, licenses, and cross-list citation as agentic-overlay evidence, but did not open their SKILL.md files or evaluate their internal frameworks in depth. This is explicitly the mkt-skills worker's mandate and duplicating it would waste the channel's shared budget.
- **The 1000UserGuide (naxiaoduo), and other Chinese-language channel directories** — found via `topic:marketing` (3,914★, no license, active) but not read in full; language and a China-specific channel list (Xiaohongshu, WeChat, etc.) place it outside this pack's primarily-English GTM surfaces, and I prioritized time on the English-language convergence set instead. Flagged here as `UNVERIFIED: whether its taxonomy diverges from the Western channel-based pattern` — would need a Chinese-reading pass to verify.
- **App Store Optimization (ASO) code-tool repos** (semihcihan/App-Store-Optimization-CLI, appreply-co/mcp-appstore, Eronred/aso-skills, etc.) — these are working tools/agent-skills, not curated-knowledge lists, so out of this worker's "awesome-lists + curricula" mandate; noted in passing during the `topic:aso` sweep but not read.
- **Landing-page template repos** (nordicgiant2/awesome-landing-page 3,815★, PaulleDemon/awesome-landing-pages 1,015★, VengeanceUI, etc.) — these are code/template collections, not curated marketing knowledge; explicitly out of scope per the mandate ("what matters is what these repos TEACH... not code") and per the charter's code-policy line (no production landing-page code as pack deliverables).
- **Deep read of ronakganatra/awesome-marketing, ninjasort/awesome-marketing, and vkoul/awesome-Marketing-Analytics beyond their table of contents** — table-of-contents-level extraction was sufficient to confirm taxonomy convergence with the more-substantive lists already fully read (marketingtoolslist, EdoStra, goabstract); going deeper would have been reading the same channel-tool pattern a fourth/fifth time.
- **CRM/marketing-automation SaaS repos surfaced incidentally** (twentyhq/twenty 53,963★, frappe/crm, panoratech/Panora) — these are open-source CRM/integration products, not curated knowledge or curricula; out of mandate, noted only where they appeared in `topic:marketing` output.
- **WebSearch use**: zero calls made against the 15-call budget — all research done via `gh search`, `gh api`, and direct file reads, leaving full WebSearch headroom for other workers per the shared session-wide cap.
