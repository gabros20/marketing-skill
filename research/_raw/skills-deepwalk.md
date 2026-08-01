# Deep walk — dedicated marketing skill packs (channel A worker: skills-deepwalk)

Scope: full `git clone --depth 1` + file-by-file read of 11 assigned repos into
`/private/tmp/claude-501/.../scratchpad/mkt-skills/`. Read-only; nothing committed/pushed;
no API keys touched. WebSearch budget: 0 calls used (clone+read sufficed).

**Scratchpad collision note (methodological, not a finding):** the scratchpad directory
`mkt-skills/` was shared with another agent also named `mkt-skills` that wrote its own
files there concurrently (`kwp/`, `alireza/`, `frontmatter/`, `brandvoice/`,
`awesome-copilot/`, `all_skills.json`, `corey-tree.txt`, loose `.md` files). All greps and
counts below are restricted to the 11 repo directories this worker cloned
(`marketingskills`, `aaron-marketing-skills`, `seo-geo-claude-skills`, `aso-skills`,
`marketing-skills`, `digital-marketing-pro`, `openclaudia-skills`, `gtm-agents`,
`ai-marketing-claude`, `affiliate-skills`, `ai-marketing-claude-code-skills`) — the other
agent's files are explicitly excluded from every count in this report. Also note: a tooling
gotcha wasted cycles here — this environment's `grep` is aliased to `ugrep`, which returns
false-zero hits when the search-path list is passed via an unquoted multi-word shell
variable in a loop; passing paths literally fixed it. Anyone re-running these counts should
pass directories literally, not via `$VAR`.

---

## (e) License per repo (read first — gates quote rights for everything below)

| Repo | License file seen | Verbatim quoting? |
|---|---|---|
| `coreyhaines31/marketingskills` | `marketingskills/LICENSE` — MIT, "Copyright (c) 2025 Corey Haines" | Yes, MIT — charter §6 caps still apply (≤2 quotes/source, <25 words, attributed) |
| `aaron-he-zhu/aaron-marketing-skills` | `aaron-marketing-skills/LICENSE` — Apache-2.0 | Yes, Apache-2.0, caps apply |
| `aaron-he-zhu/seo-geo-claude-skills` | `seo-geo-claude-skills/LICENSE` — Apache-2.0 (repo is now a deprecated signpost, see below) | Yes, but content has moved — cite the live copy in `aaron-marketing-skills` instead |
| `Eronred/aso-skills` | `aso-skills/LICENSE` — MIT, "Copyright (c) 2026 Erencan" | Yes, MIT, caps apply |
| `kostja94/marketing-skills` | `marketing-skills/LICENSE` — MIT, "Copyright (c) 2025 kostja94" | Yes, MIT, caps apply |
| `indranilbanerjee/digital-marketing-pro` | `digital-marketing-pro/LICENSE` — MIT, "Copyright (c) 2026 Digital Marketing Pro" | Yes, MIT, caps apply |
| `OpenClaudia/openclaudia-skills` | `openclaudia-skills/LICENSE` — MIT, "Copyright (c) 2026 OpenClaudia" | Yes, MIT, caps apply |
| `gtmagents/gtm-agents` | `gtm-agents/LICENSE` — Apache-2.0 | Yes, Apache-2.0, caps apply |
| `zubair-trabzada/ai-marketing-claude` | `ai-marketing-claude/LICENSE` — MIT, "Copyright (c) 2026 Zubair Trabzada" | Yes, MIT, caps apply |
| `Affitor/affiliate-skills` | `affiliate-skills/LICENSE` — MIT, "Copyright (c) 2026 Affitor" | Yes, MIT, caps apply |
| `BrianRWagner/ai-marketing-claude-code-skills` | **NO LICENSE FILE FOUND** — checked repo root, no `LICENSE`/`LICENSE.md`/`COPYING` | **No** — re-express facts only, zero verbatim lifting (confirms the brief's suspicion) |

All quotes below are short (<25 words), attributed by path, and each source is quoted at
most twice, per charter §6.

---

## (a) Structure inventory — patterns worth stealing and anti-patterns

### `coreyhaines31/marketingskills` — the incumbent, deepest treatment

**Shape:** flat pile of **49 skills** (not a thin router — no dispatcher skill exists; routing
happens entirely through detailed frontmatter `description` fields with explicit
"For X, see skill-y" cross-references, e.g. `skills/attribution/SKILL.md:3`). Each skill
is `SKILL.md` + `references/*.md` (150 reference files total, confirmed via
`find skills -name "SKILL.md" | wc -l` and `find skills -path "*/references/*" -type f | wc -l`)
+ `evals/evals.json`. **47/49 skills ship `evals/evals.json`** — only `offers` and
`public-relations` lack one (verified: `for d in skills/*/; do [ -f "$d/evals/evals.json" ] || echo "$d"; done`).
Zero `scripts/` directories anywhere in the repo — it is pure prompt/reference content, no
executable code.

**Evals schema** (`skills/ab-testing/evals/evals.json`, 7 cases; `skills/analytics/evals/evals.json`,
6 cases; `skills/aso/evals/evals.json`, 6 cases — all conform to one schema): each file is
`{"skill_name": str, "evals": [{"id": int, "prompt": str, "expected_output": str (prose),
"assertions": [str, ...], "files": []}]}`. These are real behavioral test specs, not
decoration — e.g. `skills/ab-testing/evals/evals.json` case 3 tests whether the model
catches the "peeking problem" when a user reports 3-day-early 95% confidence, with 5
named assertions including "Explain why early significance can be misleading (regression
to the mean, day-of-week effects, audience mix shifts)". No harness to *run* these evals
ships in the repo (no test-runner script found) — they read as a spec for manual/LLM-judge
grading, not a wired CI gate.

**Reference-file leaders** (file count under `references/`): `marketing-plan` (13),
`marketing-council` (13, one dossier per advisor + template), `ads` (10), `social` (8),
`ad-creative` (8), `offers` (7), `prospecting` (6).

**Versioning/update mechanism** (`marketingskills/AGENTS.md:48-91,212-234`): two version
layers — repo-wide `x.y.z` (x=restructure, y=new skill, z=content update to existing
skill) tracked in `.claude-plugin/plugin.json`/`marketplace.json`, plus per-skill
`metadata.version` mirrored in root `VERSIONS.md`. Claude-Code-specific instructions tell
the agent to fetch `VERSIONS.md` from GitHub once per session and offer `git pull` if 2+
skills have updates or any major bump — a genuine self-updating-skill-library pattern.

**Tool-integration layer** (`marketingskills/tools/REGISTRY.md`, `tools/integrations/*.md`,
`tools/composio/`): ~40 named tool integration guides (GA4, Stripe, HubSpot, Salesforce,
Mailchimp, Rewardful, Tolt, RB2B, Supermetrics, etc.) referenced from skill bodies (e.g.
`skills/attribution/SKILL.md:201-214` links to 8 tools with an MCP-availability column),
plus a Composio layer for OAuth-heavy tools without native MCP servers.

**Shared-context convention:** every skill's "Before Starting" section checks for
`.agents/product-marketing.md` (created/maintained by the `product-marketing` skill,
`skills/product-marketing/SKILL.md`) — a single versioned, changelogged context document
(Document version + dated Changelog, never rewriting past entries) that all 48 other
skills read before asking the user anything. This is the single strongest structural
pattern in the whole 11-repo corpus and is explicitly the thing every other skill is
built to consume first.

**`marketing-council`** (`skills/marketing-council/SKILL.md`, 13 references under
`references/advisors/`): a 12-persona simulated advisory board (Godin, Ogilvy, Schwartz,
Hopkins, Halbert, Brunson, Hormozi, Dunford, Sutherland, **Byron Sharp**, Handley,
Vaynerchuk). Architecturally disciplined: mandatory "seat a dissenter" rule
(`SKILL.md:56`, a routing table mapping question-type → natural dissenter, e.g. "Positioning
/ messaging → Dunford, Godin, Schwartz | dissenter: Sharp"), anti-fabrication grounding
rules ("No fabricated quotes... no invented endorsements", `SKILL.md:97-100`), and an
explicit anti-pattern list including "The agreeing council" and "Quote soup"
(`SKILL.md:145-149`). This is the **only** place in all 49 skills where Ehrenberg-Bass /
Byron Sharp doctrine is operationalized (see §c).

**Anti-pattern:** despite the shared-context and cross-reference discipline, the 49-skill
flat list still has real scope bleed into sibling-pack territory under our family's seams
— see boundary-leakage analysis in §d.

### `aaron-he-zhu/aaron-marketing-skills` (Apache-2.0) — the most architecturally
sophisticated pack surveyed

**Shape:** 120 `SKILL.md` files across 8 "disciplines" (`ad/`, `email/`, `influencer/`,
`launch/`, `narrative/`, `protocol/`, `seo-geo/`, `social/`), each discipline itself
organized by a **lifecycle-phase taxonomy** — for `seo-geo/` specifically:
`survey/` (keyword-research, serp-analysis, competitor-analysis, content-gap-analysis) →
`implement/` (content-writer, geo-content-optimizer, page-play-builder,
serp-markup-builder) → `tune/` (content-quality-auditor, on-page-seo-checker,
site-structure-optimizer, technical-seo-checker) → `evaluate/` (domain-authority-auditor,
offsite-signal-analyzer, performance-monitor, rank-tracker). This is a genuinely different
router philosophy from marketingskills' flat pile: work-phase-first, not topic-first.

**Notable machinery** (all under shared `references/`, `protocol/`, `memory/`, `hooks/`):
- **Confidence labeling discipline** — every skill instructs: "Label every metric
  **Measured** (tool/export), **User-provided**, or **Estimated** (model inference); never
  present an estimate as measured; if a required metric is unavailable, mark it N/A — do
  not invent it" (`seo-geo/implement/geo-content-optimizer/SKILL.md:68`).
- **Citability vs. surfacing distinction** — explicit epistemic honesty about what GEO work
  can promise: "the changes this skill makes... move **citability** — testable in minutes...
  That is a *proxy*. Whether an engine then cites you *unprompted* (surfacing) is gated by
  its crawl/index refresh — week-scale and confounded, not minute-level. Do not conflate the
  two or promise fast surfacing." (`seo-geo/implement/geo-content-optimizer/SKILL.md:54`).
  This directly counters the fast-win GEO hype seen elsewhere in the corpus.
- **Entity/handoff schema + termination rules** — skills consult
  `memory/entities/<slug>.md` for canonical entity profiles and declare
  `DONE_WITH_CONCERNS` if stale >90 days (`geo-content-optimizer/SKILL.md:40`); a shared
  "Next Best Skill" handoff chain with an explicit max-depth-3 loop guard
  (`geo-content-optimizer/SKILL.md:102`).
- **`references/humanizer-slop.md`** — a pre-publish "slop self-check" every content skill
  runs before shipping, to strip AI-tell phrasing.

This is the single most "engineered as a real agent system" pack in the survey (memory
layer, entity registry, confidence typing, loop prevention) — worth studying as a structural
pattern regardless of marketing-domain content quality.

**GEO claims, checked for falsifiability** (`seo-geo/implement/geo-content-optimizer/references/ai-citation-patterns.md`):
factual claims are sourced per-row with links (e.g. row on ChatGPT crawler distinctions
cites `developers.openai.com/api/docs/bots` directly, line 19) rather than asserted loose
percentages — markedly more disciplined than the marketingskills `ai-seo` skill's inline
stat list (see §c).

### `aaron-he-zhu/seo-geo-claude-skills` — deprecated signpost, not live content

Confirmed via direct read: every file under `build/`, `optimize/`, `monitor/` etc. is now a
one-paragraph redirect stub (e.g. `seo-geo-claude-skills/build/geo-content-optimizer/SKILL.md`:
"`seo-geo-claude-skills` is now a **signpost** repo — its skills are no longer developed
here... Active version: `seo-geo/build/geo-content-optimizer` in the `aaron-marketing-skills`
bundle"). Treat this repo as **merged into `aaron-marketing-skills`**; all content citations
above point to the live location. The repo does still carry its own Apache-2.0 `LICENSE`.

### `Eronred/aso-skills` (MIT) — ASO-only pack, vendor-tied, over-decomposed

**Shape:** 40 skills, with a genuine **router** (`skills/aso-router/SKILL.md`) — the only
explicit single-entry-point dispatcher skill found in the whole 11-repo survey (everyone
else routes via frontmatter description matching). The router has a routing table by
intent/phrase, a disambiguation playbook (one clarifying question max), a "Routing
Anti-Patterns" section (`aso-router/SKILL.md:145-154`, e.g. "Do not route to `aso-audit`
for keyword discovery — use `keyword-research`"), and a "Multi-Skill Routing" table for
compound requests capped at 3 skills loaded at once.

**Vendor bias flag:** the README frames the whole pack around a commercial product —
"Powered by real App Store data via the [Appeeky API]" (`aso-skills/README.md`) — and its
`tools/integrations/appeeky*.md` files promote that same vendor's API/MCP. Per charter's
credibility ladder this sits at "agency/tool content marketing" rung, one below a neutral
practitioner pack; treat ASO facts from here as specimen-checkable but the tool
recommendations as commercially motivated.

**Scope creep:** of the 40 skills, a large share sit outside a narrow "ASO" job entirely —
`paywall-optimization`, `subscription-lifecycle`, `retention-optimization`,
`onboarding-optimization`, `monetization-strategy` are product/growth/success territory
under our family's seams, not app-store-optimization strategy.

### `kostja94/marketing-skills` (MIT) — deep nested taxonomy, clearest frontend boundary
violation found

**Shape:** 172 `SKILL.md` files in a multi-level directory taxonomy: `analytics/{seo,sources,tracking}`,
`channels/{community,distribution,owned,partnerships}`, `components/{branding,layout,
navigation,content,conversion,utility}`, `content/{article,copywriting,podcast,translation,
video,visual-content}`, `pages/{brand,content,legal,marketing,utility}`, `paid-ads/{formats,
platforms}`, `platforms/{github,grokipedia,linkedin,medium,pinterest,reddit,tiktok,x,youtube}`,
`seo/{content,entity-seo,local,off-page,on-page,parasite-seo,programmatic-seo,technical}`,
`strategies/{brand,commercial,launch,structure}`.

**Concrete anti-pattern (frontend/production-code boundary violation):** the
`components/` branch is literally UI-component-building content, not marketing strategy —
`skills/components/branding/{favicon,logo,hero,brand-visual}/SKILL.md`,
`skills/components/layout/{card,masonry,carousel,list,grid}/SKILL.md`,
`skills/components/navigation/{sidebar,footer,toc,navigation-menu,breadcrumb}/SKILL.md`,
`skills/components/conversion/{popup,testimonials,cta}/SKILL.md`. Under our family's
charter ("Marketing does NOT own... production site code (`frontend`)... nothing
production"), this entire branch belongs to `frontend`/`design`, not `marketing`. This is
the single clearest, most concrete cross-pack boundary-violation example found in the
survey.

**Gray-hat tactic taught as a first-class skill:** `skills/seo/parasite-seo/SKILL.md`
teaches "barnacle SEO" — publishing on high-authority third-party platforms (Medium,
Reddit, LinkedIn, Grokipedia) to "leverage their domain strength... bypassing the need to
build your own site's authority from scratch" (`parasite-seo/SKILL.md:10,18`). It does
disclose the risk in one table row — "Google Site Reputation Abuse (2024): Targets
manipulative third-party content" (`parasite-seo/SKILL.md:95`) — but frames the tactic
positively throughout ("Content can rank on page one within days rather than months").
This is a specimen of the genre (charter §4: ads/funnel content IS the subject matter
here), not evidence the tactic is safe or endorsed; flag it as a manipulation-adjacent
practice a rigorous pack should treat with more than a single risk-row caveat.

### `indranilbanerjee/digital-marketing-pro` (MIT) — largest and most sprawling pack
surveyed

**Shape:** 159 skills + 24 agent files (`agents/*.md` — `marketing-scientist.md`,
`seo-specialist.md`, `growth-engineer.md`, `crm-manager.md`, etc.) + a ~55-file
`skills/context-engine/` reference library, several files exceeding 10,000 words
(`context-engine/compliance-rules.md` = 10,397 words; `context-engine/industry-profiles.md`
= 10,139 words). This is the largest single pack surveyed by both skill count and total
reference-file wordage.

**Severe scope creep:** dozens of skills sit squarely in product/growth/success/sales/data
territory under our charter — `churn-risk`, `cohort-analysis`, `crm-sync`, `pipeline-update`,
`pricing-test`, `budget-optimizer`, `executive-dashboard`, `lead-import`,
`client-onboarding` — this is an "agency-in-a-box" system, not a marketing-scoped pack.

**Positive pattern worth stealing — `context-engine/stone-vs-opinion.md`:** a confidence-
tagging discipline for client intake. Every fact captured is tagged **Stone** ("What the
client knows for certain... independently verifiable", e.g. "Founded in 2018 (verifiable
from registration)") or **Opinion** ("What the client believes... not independently
validated", e.g. "We are known as the most affordable option in our category"). Only Stone
facts are treated as ground truth during "unbiased research" phases; Opinions become
research questions the agent must actively try to validate or contradict, then bring back
to the client as ACCEPT/REJECT/EDIT findings. Rationale stated directly: *"Without Stone vs
Opinion separation, client intake contaminates unbiased research... produces a
confirmatory analysis that just restates the client's belief."* This is a genuinely
transferable epistemic-discipline pattern for any research-heavy marketing skill
(positioning, competitive framing, customer research).

**`context-engine/marketing-science-guide.md`** — the single most technically deep
reference file on measurement rigor found anywhere in the survey: Bayesian MMM (adstock
transforms, Hill saturation curves, credible intervals), geo-lift/holdout/synthetic-
control/ghost-ads incrementality methods, causal inference (DiD, RDD, IV, PSM),
experimentation rigor (multiple-testing correction, sequential testing, guardrail
metrics). Genuinely strong content — **but** several numeric specifics are stated as flat
facts with no citation: "Typical decay rates: TV 0.7-0.9, digital display 0.3-0.5, search
0.1-0.2, social 0.3-0.6" and "Typical range: 5-20% of total marketing-driven revenue comes
from synergies... High-synergy brands... can reach 25-30%" (`marketing-science-guide.md:20,129`)
— plausible-sounding, precise-looking numbers with zero source. Mark these
**UNVERIFIED: no citation given; would need the underlying MMM literature or vendor
benchmark study to confirm** — this is exactly the "folklore dressed as science" pattern
the charter's quality-audit clause warns about, made more dangerous here because the
surrounding methodology (Bayesian priors, saturation curves) is genuinely correct and lends
false credibility to the uncited numbers sitting next to it.

### `OpenClaudia/openclaudia-skills` (MIT) — tool-integration-first pattern

**Shape:** 74 skills, heavier than any other pack on named-tool/platform wrappers rather
than strategy docs: `hubspot`, `google-ads`, `linkedin-ads`, `facebook-ads`, `apollo-outreach`,
`stripe-dispute`, `discord-bot`, `telegram-bot`, `slack-bot`, `feishu-lark`,
`similarweb-traffic`, `semrush-research`, `ahrefs-research`, `search-console`. Distinct
structural pattern from every other pack surveyed: this one leads with "which API do I
call" rather than "what's the strategic framework," blending genuine automation-skill
territory (bot wrappers) into a nominally "marketing" pack.

### `gtmagents/gtm-agents` (Apache-2.0) — largest total skill count, self-reported category
breakdown is the cleanest boundary-leakage evidence in the survey

**Shape:** 68 plugins, `skills-index.json` self-reports **263 total skills** across
categories: `marketing: 74` (28%), `sales: 33` (13%), `orchestration: 56` (21%, meta/plumbing
skills, not content), `analytics: 12`, `growth: 12`, `research: 12`, `industry: 24`
(vertical playbooks — b2b-saas, healthcare-marketing, financial-services, manufacturing-sales,
edtech-growth), `customer-success: 4`, `partnerships: 4`, `personalization: 3`, `data: 7`,
`examples: 19`, `general: 3`. **The repo's own taxonomy puts barely more than a quarter of
its content in "marketing"** — this is the cleanest available data point (self-labeled, not
my inference) for how much of a maximalist "GTM" pack is actually marketing's job under any
reasonable definition, load-bearing for the boundary-leakage question below.

### `zubair-trabzada/ai-marketing-claude` (MIT) — small, workmanlike

**Shape:** 13-14 skills, uniformly `market-*` named (`market-launch`, `market-emails`,
`market-audit`, `market-landing`, `market-copy`, `market-ads`, `market-report`, `market-seo`,
`market-report-pdf`, `market-funnel`, `market-proposal`, `market-social`, `market-brand`,
`market-competitors`). No evals, no references subdirectories seen — content lives directly
in each `SKILL.md`. Quality is solid and practical (`skills/market-copy/SKILL.md`: phased
workflow — discovery → scoring rubric (Clarity/Persuasion/Specificity/Emotion/Action, 0-10
each) → generation with mandatory before/after pairs → a `COPY-SUGGESTIONS.md` output
template) but shallow relative to the 900+-file packs. Notable shared-file convention:
skills cross-reference `BRAND-VOICE.md`, `MARKETING-AUDIT.md`, `COMPETITOR-REPORT.md` as
persistent context docs other skills read — same pattern as marketingskills'
`product-marketing.md`, independently arrived at.

### `Affitor/affiliate-skills` (MIT) — narrow niche pack (affiliate marketing only)

**Shape:** 54 skills organized by pipeline stage per `registry.json`: `research` (find/
evaluate affiliate programs) → `content` (viral social content) → `blog` (SEO articles) →
`landing` (affiliate landing pages) → `distribution` (link hubs, bio pages) → `analytics`.
Also ships its own `evals/` directory — echoes (independently or convergently) the
marketingskills eval-per-skill pattern. This pack is scoped to a specific monetization
model (affiliate marketing), not general marketing strategy — lower relevance to our
12-job candidate list except where it overlaps content/SEO/social tactics.

### `BrianRWagner/ai-marketing-claude-code-skills` (NO LICENSE)

**Shape:** 23 skills, solo-practitioner toolkit style — `positioning-basics`,
`homepage-audit`, `de-ai-ify`, `voice-extractor`, `testimonial-collector`,
`linkedin-authority-builder`, `linkedin-profile-optimizer`, `cold-outreach-sequence`,
`content-idea-generator`, `case-study-builder`. Genuinely disciplined content in
`positioning-basics/SKILL.md`: three modes (quick/standard/deep), a mandatory "Context
Loading Gates" checklist before any output, and a "Core 5 Questions (All Required — No
Skipping)" constraint with a falsifiability test per answer — e.g. the WHY answer must be
"an 'only we' claim that passes the 'could a competitor say this?' test"
(`positioning-basics/SKILL.md:37-38`), structurally similar to April Dunford's
competitive-alternatives positioning method though not attributed to her. Because there is
no license, this content must be **re-expressed only** in our pack, never lifted verbatim —
noted above already, repeated here as the binding constraint on this repo specifically.

---

## (b) Content inventory — frameworks/checklists/thresholds worth keeping (path-tagged)

- **AARRR-structured 13-section marketing plan** with funding-stage budget unlocks —
  `marketingskills/skills/marketing-plan/SKILL.md:63-79,117-139`. Concrete anchors: budget
  tiers by funding stage (pre-seed $0-2K/mo → Series B+ $150K+/mo,
  `SKILL.md:121-127`), two budget-setting formulas (revenue-based 5-40% of ARR;
  goal-based `[(New ARR/(ARPC×12))×CAC]/annual retention rate`, `SKILL.md:134-135`), the
  "3-3-2-2-2" ARR growth-multiple rule for Series A+ (`SKILL.md:139`), and an S-curve growth
  model (`$0-10K / $10K-100K / $100K-1M ARR` phases, `SKILL.md:145`). Output is
  8,000-12,000 words, Notion-paste-ready.
- **ORB channel framework** (Owned/Rented/Borrowed) for launch planning, with named case
  studies (Superhuman's invite-only onboarding, Notion's Twitter/Reddit virality funneled
  to owned email, TRMNL's unpaid influencer seeding that drove $500K in sales) —
  `marketingskills/skills/launch/SKILL.md:31-101`. Five-phase launch model (Internal →
  Alpha → Beta → Early Access → Full Launch) with per-phase actions, `SKILL.md:105-178`.
- **Attribution model taxonomy with honest failure modes for each model** (first-touch,
  last-touch, last-non-direct, linear, time-decay, position-based 40/40/20, data-driven/
  Shapley) — `marketingskills/skills/attribution/SKILL.md:48-56`. Explicit admission that
  "the sum of channel-reported conversions almost always exceeds real conversions, because
  every platform claims credit for the same sale" (`SKILL.md:40`) and a reconciliation
  framework (pick one source of truth, never sum across platforms, read directional
  agreement not absolute match, use self-reported as tiebreaker, "expect and budget for the
  gap," `SKILL.md:102-107`). Three measurement paradigms (MTA/MMM/incrementality) mapped to
  budget×cycle×channel-count decision table (detail in
  `references/measurement-paradigms.md`).
- **Bayesian MMM + causal inference primer** (adstock decay, Hill saturation curves,
  geo-lift/holdout/synthetic-control/ghost-ads, DiD/RDD/IV/PSM, sequential testing with
  O'Brien-Fleming/Pocock spending functions) —
  `digital-marketing-pro/skills/context-engine/marketing-science-guide.md` (full file,
  196 lines) — most technically complete measurement reference in the survey, with the
  uncited-numeric-specifics caveat noted in §a.
- **Stone vs Opinion confidence-tagging** for client/customer intake (fact vs. hypothesis,
  forces unbiased validation instead of confirmatory research) —
  `digital-marketing-pro/skills/context-engine/stone-vs-opinion.md` (full file).
- **ASO scoring rubric with brand-maturity tiering** (Dominant/Established/Challenger apps
  get different scoring adjustments — e.g. brand-only titles score 8+ for Dominant apps but
  are flagged for Challengers) — `marketingskills/skills/aso/SKILL.md:102-137`, weighted
  0-100 score across 6 dimensions (Title&Subtitle 20%, Description 15%, Visual Assets 25%,
  Ratings&Reviews 20%, Metadata&Freshness 10%, Conversion Signals 10%,
  `SKILL.md:152-163`).
- **App Store / Google Play primary-source specs with as-of dates** —
  `marketingskills/skills/aso/references/apple-specs.md` ("All data from developer.apple.com
  as of March 2026," full char-limit table, screenshot dims, CPP rules, PPO A/B-test rules,
  rejection-trigger guideline numbers 2.3.1-2.3.13) and
  `.../references/google-play-specs.md` ("as of March 2026," Android Vitals ranking
  thresholds: crash >1.09%, ANR >0.47%). See §c for a factual contradiction found against
  `aso-skills`.
- **GEO citability-vs-surfacing distinction and Measured/Estimated/User-provided metric
  labeling discipline** — `aaron-marketing-skills/seo-geo/implement/geo-content-optimizer/SKILL.md:54,68`.
- **AI-SEO three-pillar framework (Structure/Authority/Presence) + Princeton GEO study
  citation** (KDD 2024, ranked optimization methods by visibility boost: "Cite sources +40%,
  Add statistics +37%, Add quotations +30%," keyword stuffing **-10%**) —
  `marketingskills/skills/ai-seo/SKILL.md:174-222`. The KDD 2024 citation is to a real
  academic paper (Aggarwal et al., "GEO: Generative Engine Optimization") — legitimate
  primary-source citation, not folklore, though the paper studied Perplexity-style engines
  specifically and shouldn't be over-generalized to all AI search surfaces.
- **Content strategy prioritization rubric** (Customer Impact 40% / Content-Market Fit 30% /
  Search Potential 20% / Resources 10%, each 0-10 scored) —
  `marketingskills/skills/content-strategy/SKILL.md:283-316`. Buyer-stage keyword-modifier
  map (awareness "what is/how to" → consideration "best/vs/alternatives" → decision
  "pricing/reviews/demo" → implementation "templates/tutorial," `SKILL.md:166-201`).
- **~45 named cognitive-bias/mental-model entries with marketing applications** (anchoring,
  decoy effect, endowment effect, Zeigarnik effect, charm pricing/left-digit effect, rule of
  100, BJ Fogg Behavior Model, EAST framework, etc.) —
  `marketingskills/skills/marketing-psychology/SKILL.md` (full file). Good breadth, zero
  citations to the underlying behavioral-econ literature (Kahneman/Thaler/Cialdini not
  named) — treat as folklore-level pop-psychology unless independently verified against
  primary sources.
- **Positioning "5 required questions, no skipping" discipline** with a falsifiability test
  ("could a competitor say this?") — `ai-marketing-claude-code-skills/positioning-basics/SKILL.md:24-38`
  (NO LICENSE — re-express only).
- **Parasite/barnacle SEO tactic and platform-tier table** (Tier 1 GEO authority: Medium/
  Reddit/LinkedIn/Quora; Tier 2 technical: GitHub/Stack Overflow/Dev.to) —
  `marketing-skills/skills/seo/parasite-seo/SKILL.md:32-53` — specimen of aggressive-tactic
  genre, flagged in §c/§a, not endorsed.
- **Router anti-pattern list and disambiguation-question cap** (ask exactly one clarifying
  question, never more; never load more than 3 skills at once) —
  `aso-skills/skills/aso-router/SKILL.md:20,131-143` — a clean, stealable router-discipline
  pattern regardless of ASO domain.

---

## (c) Quality audit / the wedge

### The load-bearing grep (restricted to the 11 assigned repos only; re-run instructions
above under the collision note)

| Term | Files matched | Where |
|---|---|---|
| "ehrenberg" | 1 | `marketingskills/skills/marketing-council/references/advisors/byron-sharp.md` |
| "byron sharp" | 3 | same file + `marketing-council/SKILL.md` + `VERSIONS.md` (changelog mention) |
| "how brands grow" | 1 | same byron-sharp.md file |
| "binet" (Les/Peter Field co-author) | 3 | byron-sharp.md; `digital-marketing-pro/skills/context-engine/in-market-out-market.md` (cites the 60/40 brand:activation split, then notes Sharp calls it "very misleading"); `marketingskills/skills/directory-submissions/references/directory-list.md` (false-positive: "CabinetM" directory name substring match, not Binet) |
| "peter field" (exact phrase) | 0 | — |
| "excess share of voice" / ESOV | 0 | — |
| "physical availability" | 2 | byron-sharp.md; `marketing-council/SKILL.md` |
| "mental availability" | 1 | byron-sharp.md |
| "category entry point(s)" | 1 | byron-sharp.md |
| "95-5" (rule) | 0 | — |
| "double jeopardy" (law) | 1 | byron-sharp.md |
| "distinctiveness" | 6 | 1 is Sharp's doctrine (byron-sharp.md); the other 5 (`aso/references/scoring-criteria.md`, `aso-skills/skills/aso-audit/SKILL.md`, `marketing-skills/.../brand-visual/SKILL.md`, `digital-marketing-pro/skills/message-test/SKILL.md`, `ai-marketing-claude-code-skills/marketing-principles/SKILL.md`) use "distinctive" generically (distinctive screenshots, distinctive brand voice) with no connection to Sharp's distinctive-assets doctrine — confirmed by direct read, not just keyword match |
| "penetration" AND "loyalty" in the same file | **0** | confirmed via two-step grep (files matching "penetration" then filtered for "loyalty") — no file anywhere in the 11 repos besides the single byron-sharp.md advisor dossier discusses Sharp's central "growth comes from penetration not loyalty" claim |
| "incrementality" | 45 | concentrated in `marketingskills/skills/attribution/*` (5 files) + `aaron-marketing-skills/ad/*` (8 files) + `digital-marketing-pro/skills/{analytics-insights,paid-advertising,context-engine,funnel-architect}/*` (14 files) + scattered elsewhere |
| "geo-lift" | 8 | attribution/measurement-paradigms.md; digital-marketing-pro context-engine (4 files); aaron-marketing-skills evals |
| "geo holdout" | 4 | same cluster |
| "media mix model" | 4 | attribution + digital-marketing-pro context-engine |
| "over-claim" | 7 | attribution/SKILL.md; digital-marketing-pro (marketing-scientist agent, media-planning.md); aaron-marketing-skills (attribution-reconciler, roi-calculator, auto-routing references) |
| "overclaim" | 4 | subset of above |
| "over-report" | 0 | — |
| "over-count" | 2 | attribution/SKILL.md ("over-counts itself" re: ad platforms); one other |

**Reading of the grep, stated plainly:** the Ehrenberg-Bass/Byron Sharp brand-growth-science
canon (mental & physical availability, double jeopardy, distinctiveness-over-differentiation,
category entry points, penetration-over-loyalty) is **real and well-written** where it
appears — but it appears in **exactly one file** across all 11 repos and roughly 900+
skill/reference files: `marketingskills/skills/marketing-council/references/advisors/byron-sharp.md`,
a persona dossier for a roleplay "advisory board" skill, not an operational default. ESOV
and the 95-5 rule appear **nowhere** at all, not even in that one file. Meanwhile,
attribution-honesty concepts (incrementality, MMM, geo-lift/holdout, platforms
over-claiming conversions) are genuinely well distributed — 45+8+4+4+7 = well over 60 hits
across at least 4 of the 11 packs, with real methodological depth in two independent places
(`marketingskills/skills/attribution/` and `digital-marketing-pro/skills/context-engine/marketing-science-guide.md`).
**The wedge is therefore precise, not diffuse:** none of these packs connect the two — no
file anywhere argues that attribution/measurement work should be validated against
Sharp's penetration-vs-loyalty framing (e.g., "your MMM says retention campaigns have
great ROAS, but if 95% of category buyers are light/non-buyers, over-indexing there caps
growth") or against ESOV/share-of-voice discipline. A marketing pack that made this
connection explicit — rather than treating brand science as one persona's opinion in a
debate-simulator skill — would be doing something none of these 11 packs do.

**Quote (marketingskills, MIT, attributed, <25 words):** *"Growth is driven overwhelmingly
by acquiring more buyers — especially light and non-buyers"*
(`marketingskills/skills/marketing-council/references/advisors/byron-sharp.md`).

### Other quality findings

- **Cross-pack factual contradiction on a checkable primary-source fact (Apple's keyword
  field limit).** `marketingskills/skills/aso/references/apple-specs.md:11,21-23` correctly
  states "Keywords | 100 bytes" and explicitly warns "Keyword field is bytes not chars —
  Arabic/Chinese/Japanese/Korean use 2-3 bytes per character" (matches Apple's actual
  developer documentation). `aso-skills/skills/metadata-optimization/SKILL.md:28` states
  "Keyword Field | 100 chars" — **wrong**, and silently so (no byte/char caveat anywhere in
  that file). Two MIT-licensed, actively-maintained packs disagree on a primary-source-
  checkable Apple App Store fact; only one is correct. This is exactly the kind of
  concrete, path-cited contradiction the charter asks the quality audit to surface.
- **Uncited numeric precision presented as fact** (folklore-with-precision-illusion) —
  `digital-marketing-pro/skills/context-engine/marketing-science-guide.md:20,129`: specific
  adstock decay rates by channel and specific synergy-percentage ranges, no source. Mark
  **UNVERIFIED**.
- **Uncited platform-behavior statistics presented without an as-of URL** —
  `marketingskills/skills/ai-seo/SKILL.md:62-67`: "AI Overviews appear in ~45% of Google
  searches," "reduce clicks to websites by up to 58%," "Brands are 6.5x more likely to be
  cited via third-party sources." These read as real (and plausible) industry-research
  numbers but carry no inline citation/URL in the SKILL.md body itself (unlike the Apple/
  Google specs files, which do cite URLs) and no as-of date beyond the skill's own
  `metadata.version: 2.2.0` bump timestamp (2026-07-09 per `VERSIONS.md`). Charter rule 5
  applies: mark **UNVERIFIED: volatile platform-behavior stat, no inline source; would need
  the original study/report to confirm and date.**
- **Gray-hat tactic taught with a single risk caveat** —
  `marketing-skills/skills/seo/parasite-seo/SKILL.md` (see §a). Specimen of the genre, not
  evidence it's safe practice.
- **Frontend/production-code boundary violation** —
  `marketing-skills/skills/components/**/SKILL.md` (see §a) — the clearest concrete example
  of a "marketing" pack building actual UI components, which our family charter assigns to
  `frontend`/`design`.
- **Vendor/commercial bias** — `aso-skills` is built around and promotes the Appeeky
  product throughout (README, `tools/integrations/appeeky*.md`); per the credibility ladder
  this sits below a neutral practitioner source — treat its checkable Apple/Google facts as
  usable but its tool/workflow recommendations as commercially motivated.
- **No pack surveyed engages with incrementality-vs-platform-attribution in a way that
  changes recommended budget allocation by more than a sentence** — `attribution/SKILL.md`
  is the best of the 11 on this exact point (explicit reconciliation framework, "never sum
  across platforms," honest about the gap) — worth treating as a positive benchmark to
  meet or exceed, not just a competitor to differentiate from.
- **Duplication across packs, not just within one:** ASO alone is covered by a 5-reference
  skill in marketingskills AND a dedicated 40-skill repo (aso-skills) AND several
  ASO-adjacent skills in digital-marketing-pro (`asc-metrics`, `local-seo`) — genuinely
  redundant coverage of one job across the corpus, more evidence for the "whitespace is
  integration, not coverage" verdict in §d.

---

## (d) Coverage map against the 12 candidate jobs

| Job | Saturation | Evidence |
|---|---|---|
| positioning-and-messaging | **Saturated** | `product-marketing` (marketingskills, hub skill, versioned+changelogged context doc, JTBD Four Forces), `app-marketing-context` (aso-skills), `positioning-basics` (BrianRWagner, Dunford-style rigor), `four-core-documents` (digital-marketing-pro) |
| audience-and-segmentation | **Saturated** | folded into product-marketing's Personas/ICP section; `audience-intelligence`, `audience-profile`, `segment-audience` (digital-marketing-pro); `customer-research` (marketingskills, 1 reference) |
| category-and-competitive-framing | **Saturated but shallow** | `competitor-profiling`+`competitors` (marketingskills), `category-positioning` (aso-skills), `competitor-analysis` (aaron, openclaudia) — mostly template-driven profile docs; category-*design* theory (Dunford's category-creation-vs-leadership choice) is essentially absent outside one product-marketing field |
| go-to-market-and-launch | **Saturated, and genuinely good** | `launch` (marketingskills — ORB framework + 5-phase model + named case studies is the standout file for this job), `app-launch` (aso-skills), `product-launch-orchestration` (gtm-agents), `launch-plan` (digital-marketing-pro) |
| seo-strategy | **Most saturated job in the corpus** | marketingskills (seo-audit, ai-seo, programmatic-seo, schema — 4 skills, ~15 references); aaron-marketing-skills seo-geo discipline (16 skills, survey/implement/tune/evaluate lifecycle); openclaudia (6+ SEO/keyword skills); digital-marketing-pro (10+ seo-* skills) |
| content-strategy-and-briefs | **Saturated** | content-strategy, copywriting, copy-editing (marketingskills); content-writer (aaron); seo-content-brief (openclaudia); content-brief/content-calendar/content-engine (digital-marketing-pro) |
| lifecycle-and-email | **Saturated, but bleeds into sales/success** | emails, cold-email, sms (marketingskills — cold-email overlaps SDR/sales prospecting); email discipline (aaron); onboarding-email content overlaps the `success` pack's job |
| paid-acquisition | **Most saturated alongside SEO** | ads+ad-creative (marketingskills, 18 references combined — deepest single-topic treatment in the corpus); paid-advertising (digital-marketing-pro, incl. retail media/TikTok/programmatic); apple-search-ads/ua-campaign (aso-skills); google/facebook/linkedin-ads (openclaudia) |
| organic-social-and-community | **Saturated** | social, community-marketing, influencer-marketing (marketingskills); social discipline (aaron); reddit-marketing/bluesky/thread-writer (openclaudia); creator-ugc-marketing (aso-skills) |
| partnerships-and-pr | **Covered but thinnest of the "saturated" jobs** | co-marketing (0 evals, 0 references — thinnest skill in marketingskills), public-relations (0 evals, only 4 references); press-and-pr (aso-skills); pr-outreach agent (digital-marketing-pro) — real but shallower than every other saturated job above |
| app-store-optimization | **Over-saturated to the point of scope creep** | marketingskills/aso (tight, 5 refs, dated primary sources) vs. the entire 40-skill aso-skills repo (many of those 40 are product/growth territory, not ASO strategy) vs. digital-marketing-pro's app-adjacent skills — real primary-source contradiction found between two of them (§c) |
| attribution-and-measurement | **Well-covered on mechanics, missing the brand-science connection** | attribution+analytics+ab-testing (marketingskills — attribution/SKILL.md is the standout quality file in the entire survey); marketing-science-guide.md (digital-marketing-pro — deepest MMM/incrementality technical content, with uncited-numerics caveat); attribution-reconciler/dark-social-attributor (aaron) — but *none* connect measurement discipline back to what should be measured (penetration vs. loyalty, ESOV) — see §c wedge |

**Overall verdict:** across 11 packs and roughly 900+ skill/reference files, there is no
genuinely open *job* — every one of the 12 candidates is covered, several to the point of
redundant duplication (ASO, SEO, paid). The real whitespace is **integration, not
coverage**: (1) making Ehrenberg-Bass-grade brand-growth science an operating default
rather than one persona's opinion in a debate skill; (2) connecting that science to the
attribution-and-measurement job's genuinely strong mechanics (which exist, isolated, in 2
of the 11 packs); (3) drawing — and actually holding — the family boundary our charter
draws. Every single pack surveyed blends marketing with substantial product/growth/success/
sales/frontend content under our family's seams (gtm-agents self-reports only 28% of its
263 skills as "marketing"; kostja94 builds literal UI components; digital-marketing-pro
ships CRM sync and churn-risk scoring; aso-skills' 40 skills include paywall and retention
work). A pack that is *disciplined* about NOT doing onboarding, pricing, paywalls, CRM,
production UI, or crawl/perf audits — while still being this comprehensive on the 12 jobs
that are actually marketing's — would be structurally distinctive against all 11
competitors surveyed, none of which hold that line.

---

## Per-source summary (charter §7 schema)

**SOURCE:** `coreyhaines31/marketingskills` (MIT, github.com/coreyhaines31/marketingskills,
last `VERSIONS.md` entries through 2026-07-23; per peer-agent GitHub-API pull, stars 42,544
and last push 2026-07-29 — UNVERIFIED by this worker directly, attributed to peer `mkt-skills`).
**WHAT IT TEACHES:** 49-skill flat pile, thin-router-free (frontmatter-routed), with a
shared versioned context-doc convention, per-skill behavioral evals (47/49), a tool-
integration registry, and the single best file in the whole survey on attribution honesty.
**VERBATIM-WORTH-KEEPING:** "Attribution is directional, not truth" and "Growth comes from
penetration, not loyalty" (both <25 words, attributed above/inline). **RELEVANCE:** every
one of the 12 candidate jobs. **CREDIBILITY:** named practitioner (Corey Haines, Swipe
Files) — real-adoption open-source repo, one rung below primary-source platform docs on
the charter ladder; individual claims inside it range from primary-source-cited (ASO specs)
to uncited-stat (ai-seo) — graded per-claim in §c, not as a blanket rating.

**SOURCE:** `aaron-he-zhu/aaron-marketing-skills` + (merged) `seo-geo-claude-skills`
(Apache-2.0). **WHAT IT TEACHES:** lifecycle-phase (survey/implement/tune/evaluate) routing,
confidence-labeled metrics, entity/memory handoff schema, citability-vs-surfacing GEO
honesty. **VERBATIM:** none quoted (paraphrased only, well within cap). **RELEVANCE:**
seo-strategy, attribution-and-measurement (architecture pattern), organic-social. **CREDIBILITY:**
open-source repo with real adoption; individual GEO factual claims are sourced per-row to
platform docs — comparatively high discipline.

**SOURCE:** `Eronred/aso-skills` (MIT, vendor-tied to Appeeky). **WHAT IT TEACHES:** ASO
router pattern; contains a factual error on Apple's keyword-field limit (chars vs bytes).
**RELEVANCE:** app-store-optimization, router-design pattern. **CREDIBILITY:** agency/tool
content-marketing rung (vendor promotion throughout) — verify every checkable fact against
a primary source before reuse; this survey found one factual miss.

**SOURCE:** `kostja94/marketing-skills` (MIT). **WHAT IT TEACHES:** deep nested taxonomy;
concrete example of marketing/frontend boundary violation (UI-component skills); teaches
parasite/barnacle SEO as a named tactic. **RELEVANCE:** boundary-design evidence for our
charter; seo-strategy (as negative example). **CREDIBILITY:** open-source, unverified
author reputation — treat as anonymous-practitioner rung.

**SOURCE:** `indranilbanerjee/digital-marketing-pro` (MIT). **WHAT IT TEACHES:** largest
pack surveyed; "Stone vs Opinion" epistemic-discipline pattern (genuinely reusable); deepest
MMM/incrementality reference file in the survey, with uncited numeric specifics
(UNVERIFIED). **RELEVANCE:** attribution-and-measurement, customer-research methodology.
**CREDIBILITY:** anonymous-practitioner rung; individual technical claims mixed (correct
methodology, uncited magnitudes).

**SOURCE:** `OpenClaudia/openclaudia-skills` (MIT). **WHAT IT TEACHES:** tool-integration-
first pattern (platform/API wrappers as skills). **RELEVANCE:** structural pattern only
(anti-pattern for a strategy-first pack, since it blends `automation`-pack territory in).
**CREDIBILITY:** anonymous-practitioner rung.

**SOURCE:** `gtmagents/gtm-agents` (Apache-2.0). **WHAT IT TEACHES:** self-reported category
taxonomy proving most of a maximalist "GTM" pack (263 skills) is not marketing (only 28%
self-tagged as such). **RELEVANCE:** the strongest hard evidence in this survey for the
family-boundary argument. **CREDIBILITY:** anonymous-practitioner rung; the 28% figure is
the repo's own self-classification, not this worker's judgment — cite it as such.

**SOURCE:** `zubair-trabzada/ai-marketing-claude` (MIT). **WHAT IT TEACHES:** small,
workmanlike pack; independently-arrived-at shared-context-doc convention (BRAND-VOICE.md
etc.), confirming that pattern is a convergent good idea, not one repo's quirk.
**RELEVANCE:** copy/content jobs. **CREDIBILITY:** anonymous-practitioner rung.

**SOURCE:** `Affitor/affiliate-skills` (MIT). **WHAT IT TEACHES:** niche pipeline-stage
pack for affiliate marketing specifically. **RELEVANCE:** low direct overlap with our 12
jobs except content/SEO/social tactics. **CREDIBILITY:** anonymous-practitioner rung.

**SOURCE:** `BrianRWagner/ai-marketing-claude-code-skills` (**NO LICENSE FOUND**). **WHAT IT
TEACHES:** disciplined positioning-intake method (5 required questions, falsifiability
test) attributable in spirit to April Dunford's method though not cited as hers.
**RELEVANCE:** positioning-and-messaging. **CREDIBILITY:** anonymous-practitioner rung, AND
unlicensed — re-express only, confirmed by this worker's own license check (no LICENSE/
LICENSE.md/COPYING found at repo root).

---

## What I did NOT cover, and why

- Did not read every one of the ~900+ SKILL.md/reference files across all 11 repos
  verbatim — infeasible within budget. Prioritized per the brief: marketingskills got the
  deepest treatment (every SKILL.md frontmatter read, ~12 full SKILL.md bodies + 4 full
  reference files read in depth, evals/reference-count/license verified by direct
  file-system inspection); the other 10 repos got structural inventory (full directory
  trees, license checks, targeted grep) plus 2-4 representative file reads each, chosen for
  the highest-signal content per repo (GEO claims in aaron-marketing-skills; the router in
  aso-skills; the epistemic-discipline files in digital-marketing-pro; the boundary-
  violation evidence in kostja94's marketing-skills).
- Did not read the ~50 non-content-engine reference files in `aso-skills/reference/*.mdx`
  (Mintlify docs site source, likely duplicative of the `skills/*/SKILL.md` content) or the
  `aso-skills/guides/*.mdx` quickstart docs — lower priority than the actual skill bodies.
- Did not attempt to verify the peer-reported GitHub star count (42,544) or push date
  (2026-07-29) for marketingskills independently — flagged as UNVERIFIED/attributed above,
  since this worker's WebSearch budget was reserved and unused, and `gh api` was not
  invoked (out of scope for a clone-and-read mandate).
- Did not evaluate `digital-marketing-pro`'s `hooks/`, `commands/`, or `.mcp.json` runtime
  wiring in depth — read-only structural notice only; that's a code/architecture question
  more relevant to a "how do these packages actually execute" research thread than a
  content deep-walk.
- Zero WebSearch calls used (budget was ≤3); clone+read fully sufficed for this mandate.
