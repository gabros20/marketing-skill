# Channel A — Agent-skills ecosystem report (marketing)

Sub-orchestrator: mkt-skills. Run date **2026-07-31/08-01**. Charter: `research/marketing/charter.md`.
Worker reports: `_raw/skills-registries.md`, `_raw/skills-github.md`, `_raw/skills-deepwalk.md`.

> Status legend: **[C]** = verified by the controller directly (tool output in this session).
> **[W]** = from a worker report, path cited. Volatile facts carry an as-of date per charter §5.

---

## 1. Verdict

**The channel is rich, and it is contested.** Marketing is not whitespace in the agent-skills
ecosystem — it is the single most commercially crowded non-engineering skill domain, and it has a
mature, well-engineered incumbent with roughly two orders of magnitude more installs than any
sibling domain our family has entered so far.

This is the first family build where a *structural peer* already exists. The wedge cannot be
"nobody has done marketing skills." It has to be a defect in *what the existing packs teach* and
*where they draw their boundaries*.

---

## 2. The incumbent: `coreyhaines31/marketingskills` [C]

The dominant find, by a wide margin. Every structural fact below was pulled by the controller from
the GitHub API tree (`repos/coreyhaines31/marketingskills/git/trees/HEAD?recursive=1`, 579 paths,
as-of 2026-08-01).

| Fact | Value | As-of |
|---|---|---|
| Stars | 42,544 | 2026-08-01 |
| License | **MIT**, file present at repo root `LICENSE` | 2026-08-01 |
| Last push | 2026-07-29 | 2026-08-01 |
| Skills (`skills/*/SKILL.md`) | **49** | 2026-08-01 |
| Skills shipping `evals/evals.json` | **47 of 49** | 2026-08-01 |
| Reference `.md` files under `skills/*/references/` | **150** | 2026-08-01 |
| Scripts inside `skills/` | **0** | 2026-08-01 |
| Node CLIs at `tools/clis/*.js` | **64** | 2026-08-01 |
| Files under `tools/integrations/` | **93** | 2026-08-01 |
| Install counts (skills.sh API) | seo-audit 175,410 · copywriting 165,978 · marketing-psychology 120,650 · content-strategy 116,043 · programmatic-seo 111,267 · marketing-ideas 108,001 · ai-seo 100,128 · ad-creative 90,132 · cold-email 88,099 · site-architecture 85,678 | 2026-07-31 |

Full skill list [C]: ab-testing, ad-creative, ads, ai-seo, analytics, aso, attribution,
churn-prevention, co-marketing, cold-email, community-marketing, competitor-profiling, competitors,
content-strategy, copy-editing, copywriting, cro, customer-research, directory-submissions, emails,
free-tools, image, influencer-marketing, launch, lead-magnets, marketing-council, marketing-ideas,
marketing-loops, marketing-plan, marketing-psychology, offers, onboarding, paywalls, popups,
pricing, product-marketing, programmatic-seo, prospecting, public-relations, referrals, revops,
sales-enablement, schema, seo-audit, signup, site-architecture, sms, social, video.

Reference-count leaders [C]: marketing-council (14), marketing-plan (13), ads (10), social (8),
ad-creative (8), offers (7), prospecting (6), marketing-loops (5), cold-email (5), aso (5),
ai-seo (5).

### 2.1 What it does that we must not underrate

- **Same architecture as ours.** `SKILL.md` + `references/` + per-skill `evals/`. The "thin router
  plus on-demand references" shape is *not* an unoccupied design in marketing. [C]
- **A shared-context spine.** `README.md` states the `product-marketing` skill is the foundation
  that every other skill reads first, to load product, audience, and positioning before acting.
  This is a genuinely good pattern — a single context artifact that prevents 49 skills from each
  re-interviewing the user. Source: `README.md`, "How Skills Work Together". [C]
- **Release engineering.** Two-layer versioning (repo `x.y.z` in `.claude-plugin/plugin.json` plus a
  per-skill `metadata.version` mirrored in `VERSIONS.md`), documented bump rules, PR templates,
  a `validate-skill.yml` CI workflow, and a plugin marketplace manifest. Source: `AGENTS.md`. [C]
- **Live tool integration.** 64 zero-dependency Node CLIs wrapping real vendor APIs (ahrefs,
  amplitude, apollo, beehiiv, brevo, buffer, clay, clearbit, customer-io, dataforseo, dub, exa …)
  plus a Composio layer and 93 integration guides. Our family packs are doc-only; this one *acts*. [C]

### 2.2 Where it is weak — the wedge candidates [C]

- **Boundary sprawl is measurable.** Of the 49 skills, a large block sits outside marketing under
  our family's declared seams: `pricing`, `paywalls`, `offers`, `signup`, `onboarding`, `cro`,
  `ab-testing`, `churn-prevention`, `referrals`, `free-tools` (→ `product` / `growth` / `success`),
  and `revops`, `prospecting`, `sales-enablement`, `cold-email` (→ `sales`). The pack's own README
  groups these under "CRO", "Growth & Retention", and "Sales & GTM" columns — it is explicitly a
  *revenue* pack, not a marketing pack. That is a positioning opening for a pack with honest seams,
  and it is also a warning: users evidently want the bundle.
- **Commercial funnel.** The README routes to the author's agency (Conversion Factory), newsletter
  (Swipe Files), a paid training product, and an "AI CMO" SaaS (Magister), all with `?ref=` tags.
  Per charter §4 this makes the repo a *named-practitioner* source (Corey Haines is real and
  credentialed) that is simultaneously a *specimen* of the marketing-funnel genre. Its claims need
  the same convergence tests as any practitioner content — adoption is not evidence of correctness.
- **Self-documentation already stale.** `AGENTS.md` says "51 tools" under `tools/clis/`; the tree
  contains 64 `.js` files. Minor, but it is direct evidence that a 49-skill surface outruns its own
  maintenance — relevant to our own scope decision. [C]

---

## 3. Pre-declared inheritances our pack must honor [C]

Both verified by the controller against the locally installed family packs. These are commitments
already shipped in public skills; the marketing pack must reciprocate them or the family contradicts
itself.

- **`operate` I1 — launch is marketing's.** `~/.claude/skills/operate/SKILL.md:98-99`:
  deploy ≠ release ≠ launch; "`quality` gates the release; `marketing` owns the launch."
  The reference table at `~/.claude/skills/operate/references/release-and-rollout.md:43-49` assigns
  **Launch → "Someone told the market this exists" → `marketing` / `product`**.
  ⚠️ **Inconsistency to resolve:** `SKILL.md:99` gives launch *solely* to marketing, while
  `release-and-rollout.md:49` splits it `marketing / product`. The marketing pack should settle this
  seam explicitly rather than inherit the ambiguity.
- **`design` — acquisition/SEO strategy is marketing's.** `~/.claude/skills/design/SKILL.md:10`
  (frontmatter) excludes "marketing or SEO strategy" from design's scope, and
  `~/.claude/skills/design/SKILL.md:22` names the owner as **`marketing-skill`** for
  "acquisition/SEO strategy". Note the naming: `design` says `marketing-skill`, `operate` says
  `marketing` — pick one and align.
- Adjacent seams already drawn by siblings, for reference: `design/SKILL.md:63` owns the marketing
  *website* surface as a design object; `quality/references/surface-web-app-and-site.md:4` owns
  verification of marketing sites and landing pages; `automation/SKILL.md:104` routes
  "customer-facing comms" authoring to `product` · `marketing` · `sales` · `success`.

---

## 4. Landscape map (controller peek, pre-worker) [C]

Verified repo metadata, `gh api repos/<r>`, as-of 2026-08-01. License column = **file-verified**
where noted; charter §3 requires naming the file, and the API's `spdx_id` alone is not sufficient.

| Repo | Stars | License | Last push | Note |
|---|---|---|---|---|
| coreyhaines31/marketingskills | 42,544 | MIT (`LICENSE` present) | 2026-07-29 | The incumbent |
| aaron-he-zhu/aaron-marketing-skills | 2,483 | Apache-2.0 | 2026-07-31 | ~120 skills, 7 disciplines |
| zubair-trabzada/ai-marketing-claude | 2,246 | MIT | 2026-03-02 | 15 skills, parallel subagents |
| wondelai/skills | 1,808 | MIT | 2026-07-22 | Frameworks from business books — IP posture worth checking |
| Eronred/aso-skills | 1,696 | MIT | 2026-07-27 | ASO specialist |
| refoundai/lenny-skills | 1,204 | MIT | 2026-07-16 | positioning-messaging, brand-storytelling |
| kostja94/marketing-skills | 793 | MIT | 2026-06-09 | 160+ skills |
| indranilbanerjee/digital-marketing-pro | 671 | MIT | 2026-07-29 | 158 skills, 25 agents |
| OpenClaudia/openclaudia-skills | 606 | MIT | 2026-07-30 | 34 marketing skills |
| Affitor/affiliate-skills | 581 | MIT | 2026-06-14 | Affiliate niche |
| aitytech/agentkits-marketing | 573 | MIT | 2026-07-15 | "Enterprise-grade" |
| minhnv0807/ai-business-skills | 513 | MIT | 2026-07-30 | Bilingual VN/Global |
| BrianRWagner/ai-marketing-claude-code-skills | 382 | **NO LICENSE FOUND** (full-tree search) | 2026-03-19 | Re-express only |
| gtmagents/gtm-agents | 358 | Apache-2.0 | 2026-04-03 | GTM agents |
| aaron-he-zhu/seo-geo-claude-skills | 125 | Apache-2.0 | 2026-07-13 | GEO/AI-search |
| github/awesome-copilot | 37,306 | MIT | 2026-07-31 | Has `gtm-*` prompts |
| anthropics/knowledge-work-plugins | 23,210 | Apache-2.0 | 2026-07-31 | Official; seo-audit, email-sequence, brand-* |
| anthropics/skills | 165,462 | **per-skill**; `skills/brand-guidelines/LICENSE.txt` = Apache-2.0 (read) | 2026-07-24 | No root LICENSE; root `THIRD_PARTY_NOTICES.md` |
| sanity-io/agent-toolkit | 171 | MIT | 2026-07-29 | seo-aeo-best-practices |
| resend/email-best-practices | 136 | **NO LICENSE FOUND** (full-tree search) | 2026-05-28 | Deliverability; re-express only |

**Licensing trap worth carrying forward [C]:** `anthropics/skills` reports no license at repo root
via the GitHub API, but licenses **per skill** — `skills/brand-guidelines/LICENSE.txt` is Apache-2.0
(controller fetched and read the text). Concluding "unlicensed" from `.license.spdx_id` would have
been wrong. Conversely `resend/email-best-practices` and
`BrianRWagner/ai-marketing-claude-code-skills` have **no license file anywhere** in their recursive
trees — all rights reserved, facts may be re-expressed but no prose lifted.

### 4.1 Is our exact shape taken? [C]

A GitHub code search for marketing skills using the `references/` router pattern
(`search/code?q="references/"+positioning+extension:md+path:skills`, 7,088 total hits) surfaced only
small players in our shape: `octavehq/lfgtm` (★11, MIT — a vendor plugin for Octave's GTM SaaS,
with `skills/<job>/SKILL.md` + `references/`), `magnus919/hermes-profiles` (★70),
`Kaminoikari/product-playbook` (★23), `mohamedameen-io/StartupKit` (★157).

**Conclusion:** the faceted-router shape is occupied in marketing only by the incumbent at scale and
by hobby-scale repos otherwise. Shape is not the differentiator; *content rigor and seams* are.

---

## 5. The wedge, stated precisely

Three workers converged on the same conclusion from different directions: **there is no open
*job* in marketing — every one of the 12 candidates is already covered, several redundantly. The
whitespace is integration and discipline, not coverage.**

### 5.1 The load-bearing grep [W: `_raw/skills-deepwalk.md` §c]

Run across 11 cloned marketing packs (~900+ skill/reference files), restricted to those repos:

| Term | Files matched | Where |
|---|---|---|
| "ehrenberg" | **1** | `marketingskills/skills/marketing-council/references/advisors/byron-sharp.md` |
| "how brands grow" | **1** | same file |
| "mental availability" | **1** | same file |
| "category entry point(s)" | **1** | same file |
| "double jeopardy" | **1** | same file |
| "physical availability" | 2 | same file + `marketing-council/SKILL.md` |
| "byron sharp" | 3 | same file + `marketing-council/SKILL.md` + `VERSIONS.md` |
| "excess share of voice" / ESOV | **0** | — |
| "95-5" rule | **0** | — |
| "peter field" | **0** | — |
| "penetration" AND "loyalty" in one file | **0** (outside byron-sharp.md) | two-step grep |
| — versus — | | |
| "incrementality" | **45** | attribution/*, aaron ad/*, digital-marketing-pro (4 clusters) |
| "geo-lift" | 8 | attribution + digital-marketing-pro |
| "media mix model" | 4 | attribution + digital-marketing-pro |
| "over-claim" / "overclaim" | 11 | attribution/SKILL.md + 3 packs |

**The reading:** the Ehrenberg-Bass brand-growth canon exists in *exactly one file* in the entire
corpus — and that file is a **persona dossier for a roleplay advisory-board skill**, not an
operating default. ESOV and the 95-5 rule appear **nowhere at all**. Meanwhile attribution honesty
is genuinely well distributed (60+ hits, real methodological depth in two independent packs).

**Nobody connects the two.** No file in 11 packs argues that measurement work should be validated
against penetration-vs-loyalty or ESOV — e.g. "your MMM says retention campaigns have great ROAS,
but if 95% of category buyers are light or out-of-market, over-indexing there caps growth." That
connection is the wedge, and it is narrow, specific, and verifiable.

### 5.2 Resolving a contradiction between my own workers

`_raw/skills-registries.md` calls attribution-and-measurement "the clearest whitespace found";
`_raw/skills-deepwalk.md` calls `marketingskills/skills/attribution/SKILL.md` "the standout quality
file in the entire survey." **Both are correct and the distinction matters.** The registries worker
measured *breadth* (no repo treats attribution as a first-class multi-skill discipline the way SEO
or ASO get 16–40 skills); the deep-walk measured *depth* (one excellent file exists). The honest
synthesis: attribution is **well-taught in isolated files, undeveloped as a discipline, and
disconnected from brand science**. Our pack should treat `attribution/SKILL.md` as a benchmark to
meet or exceed, not a gap to fill — the differentiator is the connection, not the mechanics.

### 5.3 Boundary discipline as the second wedge

Every one of the 11 packs blends marketing with product/growth/success/sales/frontend content under
our family's seams. Hardest evidence, in order of strength:

- **`gtmagents/gtm-agents` self-reports it** — its own `skills-index.json` tags only **74 of 263
  skills (28%) as "marketing"** (sales 33, orchestration 56, industry 24, growth 12, analytics 12).
  This is the repo's own classification, not our inference. [W: deepwalk]
- **`kostja94/marketing-skills` builds literal UI components** — `skills/components/branding/
  {favicon,logo,hero}`, `components/layout/{card,masonry,carousel,grid}`, `components/navigation/
  {sidebar,footer,breadcrumb}`, `components/conversion/{popup,testimonials,cta}`. Production
  frontend code inside a "marketing" pack. The single clearest boundary violation found. [W: deepwalk]
- **The incumbent** — roughly 10–12 of its 49 skills (pricing, paywalls, signup, onboarding, cro,
  ab-testing, churn-prevention, revops, sales-enablement, prospecting) sit outside marketing under
  our seams. Its own README groups them as "CRO / Growth & Retention / Sales & GTM" — it is
  explicitly a *revenue* pack. [C + W]
- **Registry-level**: `VoltAgent/awesome-openclaw-skills` names its top-level category
  **"Marketing & Sales"** — one bucket, 106 skills. The bundling is how at least one major
  aggregator classifies the domain by default. [W: registries]

A pack that is *disciplined* about not doing onboarding, pricing, paywalls, CRM, production UI, or
crawl/perf audits — while still being comprehensive on the 12 jobs that genuinely are marketing's —
would be structurally distinctive against all 11 competitors. **None of them hold that line.**

### 5.4 Anti-staleness: verified factual errors in high-adoption packs [C]

I verified the volatile platform facts the workers could only flag as UNVERIFIED. Results:

| Fact | Primary source (fetched 2026-08-01) | Community pack claim | Verdict |
|---|---|---|---|
| Gmail bulk-sender threshold | >5,000 msg/day to Gmail | — | ✅ adds precision none of the packs state |
| Gmail auth | SPF **and** DKIM **and** DMARC (`p=none` OK) | Resend: same | ✅ confirmed |
| Gmail spam rate | **<0.30%**, target **<0.10%** | Resend: <0.30% | ✅ confirmed; the 0.10% target is missing from the packs |
| One-click unsubscribe | `List-Unsubscribe` + `List-Unsubscribe-Post: List-Unsubscribe=One-Click` | Resend: same | ✅ confirmed |
| Gmail enforcement date | **February 1, 2024** | Resend: "Feb 2024" | ✅ confirmed |
| Apple app name / subtitle / promo text | 30 / 30 / 170 | alirezarezvani: 30 / 30 / 170 | ✅ confirmed |
| Apple keyword field | "100 characters" per developer.apple.com | marketingskills: **100 bytes** (CJK caveat); aso-skills: 100 chars | ⚠️ **CONTESTED** — see below |
| Apple description limit | **No limit stated** by Apple | packs assert 4,000 | ⚠️ unsupported by the cited page |
| Google Play name | **30** | alirezarezvani: **50** | ❌ **WRONG in the pack** |
| Google Play short / full description | 80 / 4,000 | alirezarezvani: 80 / 4,000 | ✅ confirmed |

Sources: `support.google.com/a/answer/81126`; `developer.apple.com/app-store/product-page/`;
`support.google.com/googleplay/android-developer/answer/9859152`. All fetched 2026-08-01.

Two findings worth carrying into the build:

1. **A live factual error in the most-starred community pack.** `alirezarezvani/claude-skills`
   (23,563 stars) asserts a 50-character Google Play title limit. Google's own docs say **30**.
   Play reduced the title from 50 to 30 several years ago — this is a *stale* fact sitting in a
   very high-adoption pack. This is the anti-staleness invariant earning its keep, with a
   citable example.
2. **I must correct my own deep-walk worker.** It reported that marketingskills' "100 bytes" is
   correct and "matches Apple's actual developer documentation," and that `aso-skills`' "100 chars"
   is wrong. But Apple's own product-page documentation, which I fetched directly, says **"limited
   to 100 characters."** The bytes claim is a practitioner refinement (App Store Connect's
   enforcement behavior), not what Apple's cited doc says. **Record this as CONTESTED and verify
   against App Store Connect Help before the pack asserts either number** — do not ship the
   worker's confident verdict. `UNVERIFIED: whether the field enforces 100 bytes or 100 characters;
   App Store Connect Help is the authority, not the product-page marketing doc.`

### 5.5 Structural patterns worth stealing

- **A shared, versioned context document.** The incumbent's `product-marketing` skill maintains
  `.agents/product-marketing.md` with a document version and a dated, append-only changelog; all 48
  other skills read it before asking the user anything. `zubair-trabzada/ai-marketing-claude`
  (`BRAND-VOICE.md`, `COMPETITOR-REPORT.md`) and `boraoztunc/skills`
  (`.claude/product-marketing-context.md`) arrived at the same convention independently —
  **convergent design across three unrelated packs**, the strongest structural signal in the channel.
- **Per-skill behavioral evals.** 47/49 incumbent skills ship `evals/evals.json`:
  `{skill_name, evals:[{id, prompt, expected_output, assertions[], files[]}]}`. Real specs — e.g.
  ab-testing case 3 tests whether the model catches the peeking problem on an early-significance
  claim. No runner ships, so it is a grading spec, not a CI gate. [W: deepwalk]
- **Epistemic-discipline patterns**, three independent variants worth merging:
  - **Stone vs Opinion** (`digital-marketing-pro/skills/context-engine/stone-vs-opinion.md`) — tag
    every intake fact as independently verifiable (Stone) or client belief (Opinion); only Stone is
    ground truth, Opinions become research questions. Stated rationale: without the split, client
    intake contaminates research into confirmatory analysis.
  - **Measured / User-provided / Estimated** metric labeling, never present an estimate as measured,
    mark N/A rather than invent (`aaron-marketing-skills/seo-geo/implement/geo-content-optimizer/SKILL.md:68`).
  - **Fact / Inference / Assumption** per-claim labeling with a source URL
    (`deanpeters/product-manager-skills`, battle-card-builder + market-landscape-scan). [W: github]
- **Citability vs surfacing** — the sharpest anti-hype line found in the corpus:
  `aaron-marketing-skills/.../geo-content-optimizer/SKILL.md:54` distinguishes what GEO work can
  test in minutes (citability, a proxy) from unprompted surfacing (crawl/index-gated, week-scale,
  confounded) and forbids conflating them. Directly counters the GEO snake oil the charter predicted.
- **Router discipline** — `aso-skills/skills/aso-router/SKILL.md` is the only true dispatcher in the
  11-repo corpus: routing table by intent, one clarifying question maximum, never load more than 3
  skills at once, and an explicit routing anti-pattern list.
- **A weighted source-credibility rubric** — `anthropics/knowledge-work-plugins/partner-built/
  brand-voice/discover-brand/references/source-ranking.md` (MIT, Tribe AI): five source categories
  with trust weights (authoritative 1.0 → stale 0.1), five ranking factors with percentage weights,
  a composite formula, hard recency cutoffs, and an adaptive mode that reweights when no
  authoritative source exists. Rare and portable. [W: github]
- **The marketing-council dissent mechanism** — a 12-persona board with a *mandatory* dissenter
  seating table (positioning questions seat Sharp as the dissenter against Dunford/Godin/Schwartz),
  anti-fabrication rules forbidding invented quotes, and named anti-patterns ("the agreeing
  council," "quote soup"). Notable that the one place Sharp appears in the corpus is structurally
  designed to *disagree*. [W: deepwalk]

### 5.6 The AI-search (GEO/AEO) shift — corroborated four ways

Independently surfaced by `sanity-io/agent-toolkit` (seo-aeo-best-practices),
`refoundai/lenny-skills` (seo-strategy folds in AI-driven discovery),
`alirezarezvani/claude-skills` (a dedicated `aeo` skill with a SEO-vs-AEO comparison table and a
pre-flight robots.txt check for GPTBot/PerplexityBot/ClaudeBot/Google-Extended), and
`aaron-marketing-skills` (`seo-geo` discipline, 16 skills). Plus a **real academic anchor**:
`marketingskills/skills/ai-seo/SKILL.md:174-222` cites the Princeton GEO paper (Aggarwal et al.,
KDD 2024) with ranked optimization methods (cite sources +40%, add statistics +37%, add quotations
+30%, keyword stuffing −10%). That citation is legitimate — but the paper studied Perplexity-style
engines specifically and must not be over-generalized. Recommend AEO/GEO become an explicit facet
of `seo-strategy` rather than folklore.

⚠️ Counter-example in the same file: `ai-seo/SKILL.md:62-67` asserts "AI Overviews appear in ~45%
of Google searches," "reduce clicks by up to 58%," "brands 6.5x more likely to be cited via
third-party sources" — **no inline citation, no as-of date**. `UNVERIFIED`.

---

## 6. Inventory of finds worth keeping

Beyond §2 (incumbent) and §5, ranked by value to the build:

1. **`anthropics/knowledge-work-plugins/marketing/`** — 8 official Anthropic skills, Apache-2.0,
   117–392 lines each, aimed at exactly our jobs: `seo-audit`, `campaign-plan`, `competitive-brief`,
   `content-creation`+`draft-content`, `email-sequence`, `performance-report`, `brand-review`. The
   highest-credibility find in the channel. `performance-report` (392 lines) carries a 6-model
   attribution table with best-for/limitation columns; `competitive-brief` carries the
   `For [audience], [product] is the [category] that [benefit] because [reason to believe]`
   positioning template and a full battlecard structure. Note the `content-creation`
   (`user-invocable: false`, a knowledge base) + `draft-content` (the user-facing command) pairing —
   a clean router pattern. ⚠️ Its benchmark tables (email open rates, budget percentages) are
   uncited vendor-illustrative numbers — `UNVERIFIED`. [W: github]
2. **`github/awesome-copilot` `gtm-*` skills** (MIT, authored by Smit Patel, mirrored from
   `beingsmit/technical-product-gtm`) — 9 skills, 310–570 lines. `gtm-positioning-strategy` (438
   lines) is the strongest single positioning find: a **Crawl-Walk-Run repositioning rollout** with
   go/no-go thresholds, and a **defensibility hierarchy** (structural advantage > market position >
   product feature) with a 4-question test per claim. `gtm-0-to-1-launch` carries a "press ≠ growth"
   post-mortem with real funnel numbers. ⚠️ Most outcomes are qualitative ("3–5x better") — treat as
   anecdote, not benchmark. [W: github]
3. **`digital-marketing-pro/skills/context-engine/marketing-science-guide.md`** — the deepest
   measurement-rigor reference in the corpus: Bayesian MMM (adstock, Hill saturation, credible
   intervals), geo-lift/holdout/synthetic-control/ghost-ads, DiD/RDD/IV/PSM, sequential testing.
   ⚠️ **The danger case**: correct methodology sitting next to precise uncited numbers ("TV adstock
   decay 0.7–0.9", "5–20% of revenue from synergies") — the surrounding rigor lends false
   credibility to unsourced magnitudes. Exactly the folklore-with-precision-illusion pattern.
4. **`marketingskills/skills/launch/SKILL.md`** — ORB (Owned/Rented/Borrowed) channel framework +
   a five-phase launch model (Internal → Alpha → Beta → Early Access → Full Launch) with named case
   studies. The best file for `go-to-market-and-launch`, and it connects directly to `operate` I1.
5. **`resend/email-best-practices`** (⚠️ **NO LICENSE FOUND** — re-express only) — SPF/DKIM/DMARC
   with a `p=none → quarantine;pct=25 → reject` rollout path, IP-warming ramp, bounce/complaint
   thresholds, and a CAN-SPAM/GDPR/CASL/Australia/UK/Brazil compliance table. Its Gmail claims are
   now **primary-source confirmed** by me (§5.4); its **penalty figures remain UNVERIFIED** —
   ftc.gov returned 403 and `crwl` is broken.

Also worth noting as clean negatives: `anthropics/skills/brand-guidelines` is a brand-token
*application* skill (applies Anthropic's own colors/fonts to artifacts), not marketing strategy;
`github/awesome-copilot`'s `email-drafter` is 1:1 correspondence, not lifecycle email — both are
naming false positives. `aaron-he-zhu/seo-geo-claude-skills` is now a **deprecated signpost repo**;
its content moved into `aaron-marketing-skills` — cite the live location.

---

## 7. SOURCES

Consolidated across all three workers plus controller verification. Credibility rungs are the
charter's ladder. "License file seen" names the actual file per charter §3 — **not** the GitHub
API's `spdx_id`, which is wrong or absent for several rows here.

### 7.1 Primary sources (platform/legal docs — the only rows that are evidence for *facts*)

| URL | License | Credibility rung | As-of |
|---|---|---|---|
| support.google.com/a/answer/81126 (Gmail bulk-sender requirements) | Google docs, n/a | **Primary** (platform docs) | fetched 2026-08-01 [C] |
| developer.apple.com/app-store/product-page/ (App Store field limits) | Apple docs, n/a | **Primary** (platform docs) | fetched 2026-08-01 [C] |
| support.google.com/googleplay/android-developer/answer/9859152 (Play listing limits) | Google docs, n/a | **Primary** (platform docs) | fetched 2026-08-01 [C] |
| Aggarwal et al., "GEO: Generative Engine Optimization", KDD 2024 — cited inside `marketingskills/skills/ai-seo/SKILL.md:174-222` | academic paper | **Peer-reviewed** (scope: Perplexity-style engines; do not over-generalize) | citation seen 2026-08-01 |
| ftc.gov CAN-SPAM compliance guide | — | **Primary**, but **NOT RETRIEVED** (HTTP 403; `crwl` broken) | ⚠️ UNVERIFIED |

### 7.2 Official / vendor skill repos

| URL | License file seen | Credibility rung | As-of |
|---|---|---|---|
| github.com/anthropics/knowledge-work-plugins (`marketing/` plugin, 8 skills) | root `LICENSE` + `marketing/LICENSE` — Apache-2.0 | **Official/primary** (Anthropic-authored) | pushed 2026-07-31 [C] |
| github.com/anthropics/skills (`skills/brand-guidelines/`) | **per-skill** `skills/brand-guidelines/LICENSE.txt` — Apache-2.0 (no root LICENSE; root `THIRD_PARTY_NOTICES.md`) | **Official/primary** | pushed 2026-07-24 [C] |
| github.com/anthropics/knowledge-work-plugins (`partner-built/brand-voice/`) | `partner-built/brand-voice/LICENSE` — MIT, Tribe AI | Vendor/partner (catalog inclusion ≠ authorship) | 2026-07-31 |
| github.com/resend/email-best-practices | **NO LICENSE FOUND** (full recursive tree searched) [C] | Vendor docs, primary-source-*adjacent* | pushed 2026-05-28 [C] |
| github.com/resend/resend-skills | root `LICENSE` — MIT | Vendor docs | not dated in-file |
| github.com/sanity-io/agent-toolkit (`seo-aeo-best-practices`) | root `LICENSE` — MIT | Vendor engineering | pushed 2026-07-29 [C] |
| github.com/cloudflare/skills · apify/agent-skills · getsentry/skills · auth0/agent-skills · forcedotcom/sf-skills | Apache-2.0 / NONE / Apache-2.0 / Apache-2.0 / Apache-2.0 | Checked — negligible marketing content | 2026-07-31 |

### 7.3 Dedicated marketing packs (deep-walked / cloned)

| URL | License file seen | Credibility rung | As-of |
|---|---|---|---|
| github.com/coreyhaines31/marketingskills | `LICENSE` — MIT, "Copyright (c) 2025 Corey Haines" | **Named practitioner** (Corey Haines / Swipe Files) — *also a specimen*: README funnels to his agency, newsletter, paid training, and SaaS via `?ref=` | 42,544★, pushed 2026-07-29 [C] |
| github.com/aaron-he-zhu/aaron-marketing-skills | `LICENSE` — Apache-2.0 | Open-source, real adoption; GEO claims sourced per-row | 2,483★, pushed 2026-07-31 [C] |
| github.com/aaron-he-zhu/seo-geo-claude-skills | `LICENSE` — Apache-2.0 | **Deprecated signpost** — content merged into the repo above | 125★, pushed 2026-07-13 [C] |
| github.com/Eronred/aso-skills | `LICENSE` — MIT, "Copyright (c) 2026 Erencan" | Agency/tool content marketing (vendor-tied to Appeeky throughout) | 1,696★, pushed 2026-07-27 [C] |
| github.com/kostja94/marketing-skills | `LICENSE` — MIT | Anonymous practitioner; teaches parasite/barnacle SEO; ships UI components | 793★, pushed 2026-06-09 [C] |
| github.com/indranilbanerjee/digital-marketing-pro | `LICENSE` — MIT | Anonymous practitioner; correct MMM methodology, uncited magnitudes | 671★, pushed 2026-07-29 [C] |
| github.com/OpenClaudia/openclaudia-skills | `LICENSE` — MIT | Anonymous practitioner; tool-wrapper-first | 606★, pushed 2026-07-30 [C] |
| github.com/gtmagents/gtm-agents | `LICENSE` — Apache-2.0 | Anonymous practitioner; **its own `skills-index.json` self-reports 28% marketing** | 358★, pushed 2026-04-03 [C] |
| github.com/zubair-trabzada/ai-marketing-claude | `LICENSE` — MIT | Anonymous practitioner | 2,246★, pushed 2026-03-02 [C] |
| github.com/Affitor/affiliate-skills | `LICENSE` — MIT | Anonymous practitioner, affiliate niche | 581★, pushed 2026-06-14 [C] |
| github.com/BrianRWagner/ai-marketing-claude-code-skills | **NO LICENSE FOUND** (root + full-tree checked) [C] | Anonymous practitioner — **re-express only** | 382★, pushed 2026-03-19 [C] |
| github.com/alirezarezvani/claude-skills (`marketing-skill/`, 30+ sub-skills) | root `LICENSE` — MIT | Community mega-collection; **contains a verified stale fact** (Play title 50 vs actual 30) | 23,563★ |
| github.com/aitytech/agentkits-marketing · minhnv0807/ai-business-skills | MIT / MIT | Community, not deep-read | pushed 2026-07-15 / 2026-07-30 [C] |

### 7.4 Curated / book-derived / PM-adjacent

| URL | License file seen | Credibility rung | As-of |
|---|---|---|---|
| github.com/github/awesome-copilot (`gtm-*`, 9 skills) | root MIT; per-file frontmatter `license: MIT`, author Smit Patel, source `beingsmit/technical-product-gtm` | **Named practitioner**; outcomes qualitative, not benchmarks | 37,306★, pushed 2026-07-31 [C] |
| github.com/refoundai/lenny-skills | root `LICENSE` — MIT | Named-source aggregate (Lenny's Podcast guests; compiler wrote the text) | 1,204★, pushed 2026-07-16 [C] |
| github.com/wondelai/skills | root `LICENSE` — MIT (compiler only) | Book-compilation — ⚠️ **IP caution**, see below | 1,808★, pushed 2026-07-22 [C] |
| github.com/boraoztunc/skills (`ogilvy`) | Apache-2.0 root **+ per-file overrides** (`ogilvy` frontmatter = MIT; also `LICENSE-hyperframes`, `LICENSE-liamgvchi`, `LICENSE-mengto-skills`) | Mixed; book-derived — ⚠️ IP caution | not dated |
| github.com/deanpeters/product-manager-skills | LICENSE present but **NOASSERTION** — unclassifiable | ⚠️ **UNVERIFIED license** — do not assume reuse rights | not dated |
| github.com/phuryn/pm-skills | root `LICENSE` — MIT | Community, thin/prompt-only | not dated |
| github.com/affaan-m/ECC | root `LICENSE` — MIT | Community collection, not deep-read | — |
| github.com/aradotso/marketing-skills | **NOASSERTION** | ⚠️ UNVERIFIED license; auto-generated repackaging of other repos | — |

### 7.5 Registries and aggregators (instruments, not sources)

| URL | Status | Note | As-of |
|---|---|---|---|
| skills.sh `/api/search?q=` | **Works**, JSON, free, install counts | Primary instrument for the sweep; began returning empty under concurrent load mid-run | 2026-07-31 [C] |
| github.com/VoltAgent/awesome-openclaw-skills | Readable | 5,199 skills; names its own category **"Marketing & Sales"** (106 skills, one bucket) | — |
| github.com/ComposioHQ/awesome-claude-skills | Readable | "Business & Marketing" section; `composio-skills/*` are tool wrappers with no teaching content | — |
| github.com/sickn33/antigravity-awesome-skills | Readable | 44,239★ (the charter's `sickn33/agentic-awesome-skills` does not exist as typed) | — |
| smithery.ai · skills.volces.com | HTTP 200, **no JSON search endpoint found** | ⚠️ UNVERIFIED — needs a browser pass | 2026-08-01 |
| claudeskills.directory | **Unreachable** (timeout) | Not retried, per charter | 2026-08-01 |

Repo metadata marked [C] is controller-verified via `gh api` on 2026-08-01. Worker-level sourcing,
with per-file paths and per-claim credibility grading, lives in the three `_raw/` reports.

**Credibility ladder placement for this channel as a whole:** essentially all of it sits at
"agency/tool content marketing" or below on the charter's ladder, with three exceptions that rank
higher — `anthropics/knowledge-work-plugins` (official, Apache-2.0), `resend/email-best-practices`
(vendor implementing the requirement it documents), and the Princeton GEO/KDD 2024 citation inside
`ai-seo`. **None of this content is evidence for marketing *facts*.** It is evidence for what the
ecosystem ships and how it is packaged — which is what this channel was asked for. Every checkable
claim it makes must be verified against a primary source before our pack asserts it; §5.4 shows
what happens when you do.

**License summary:** MIT dominates. Verbatim quoting is permitted (charter §6 caps still apply) for
coreyhaines31/marketingskills, Eronred/aso-skills, kostja94, indranilbanerjee, OpenClaudia,
zubair-trabzada, Affitor, github/awesome-copilot, wondelai, refoundai, sanity-io, alirezarezvani,
affaan-m, resend/resend-skills, and (Apache-2.0) aaron-marketing-skills, gtm-agents,
anthropics/knowledge-work-plugins, anthropics/skills/brand-guidelines.
**Re-express only (NO LICENSE FOUND):** `BrianRWagner/ai-marketing-claude-code-skills`,
`resend/email-best-practices`.
**Unverified license:** `deanpeters/product-manager-skills` (NOASSERTION),
`aradotso/marketing-skills` (NOASSERTION).
**IP caution beyond license:** `wondelai/skills` and `boraoztunc/skills/ogilvy` are MIT-licensed
*compilations of commercially published books* (Dunford, Hormozi, Miller, Moore, Ogilvy). The
compiler's MIT grant covers their arrangement only — it cannot license the underlying copyrighted
expression. Source the frameworks to the original books; do not lift the compilers' phrasing.

---

## 8. What I did NOT cover and why

- **No runtime/behavioral testing.** Nothing here was installed or executed; conclusions are from
  reading files and repo metadata. Whether these skills actually *work* when invoked is untested.
- **skills.sh install counts are an unvalidated proxy.** `UNVERIFIED` whether they reflect runtime
  usage or one-time `npx skills add` events. They also compound with time-in-index, which flatters
  the earliest pack — the top-10 list being ~100% one repo is partly an artifact of that.
- **Registries not fully swept:** smithery.ai and skills.volces.com return HTTP 200 but expose no
  JSON search endpoint (would need a browser-driven pass); claudeskills.directory was unreachable.
  Per charter, not debugged. The skills.sh API also began returning empty responses mid-run under
  concurrent load — my captured results predate that and stand, but a re-run may differ.
- **`crwl` is broken environment-wide** (litellm import chain failure), so one free fetch path the
  charter assumes was unavailable. Reported to the controller mid-run.
- **CAN-SPAM/GDPR/CASL penalty figures remain UNVERIFIED** — ftc.gov returned HTTP 403 to WebFetch.
  The widely repeated "$53k/email" is unconfirmed and must not ship unverified.
- **Not deep-read:** `alirezarezvani/claude-skills`' remaining ~26 marketing sub-skills (this repo
  alone warrants its own teardown — it is a full competing pack at 23.5k stars);
  ~8 general collections (jezweb, nexu-io, samber, claude-office-skills, warpdotdev, VoltAgent,
  sickn33, nicepkg) got a single tree-grep with zero marketing hits, not triple-checked;
  full bodies of refoundai/lenny-skills, phuryn/pm-skills, deanpeters, affaan-m/ECC.
- **Two worker claims I could not confirm and have flagged rather than propagated:** the registries
  worker's "60 skills" for the incumbent (**my direct tree count is 49** — mine is authoritative,
  three independent counts agree), and the deep-walk worker's verdict that Apple's keyword field is
  100 *bytes* (§5.4 — my primary-source fetch says characters; recorded as CONTESTED).
- **Scratchpad collision (methodological):** my controller files and the deep-walk worker's 11
  clones shared `scratchpad/mkt-skills/`. The worker excluded my files from every count by listing
  its 11 repo directories literally. No contamination of the grep results, but future runs should
  give each agent its own subdirectory. A second gotcha it surfaced: this environment's `grep` is
  aliased to `ugrep`, which returns **false-zero** hits when search paths are passed via an unquoted
  multi-word shell variable — pass paths literally when re-running the §5.1 counts.
