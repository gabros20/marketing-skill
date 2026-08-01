# github-competitor-marketingskills — controller-run extraction (channel C)

Run by the channel-C sub-orchestrator directly (not a worker), 2026-07-31/2026-08-01. This file
covers the single most consequential GitHub finding of the channel: an existing, dominant,
MIT-licensed marketing skill pack for AI agents. It is a **direct competitor to the pack we are
scoping**, and it materially changes the wedge question. Every fact below was read from a
`--depth 1` clone at
`/private/tmp/.../scratchpad/mkt-github-ctrl/marketingskills` or from `gh api`.

> **Ownership note (added after a controller course-correction).** The skills channel independently
> verified this repo's *structural* facts (star count, license, 49-skill tree walk) — see
> `research/marketing/_raw/skills-github.md`, which is authoritative for those. The structural
> section below was gathered before that was known; it is retained as **independent corroboration**
> (two channels, same numbers, arrived at separately) rather than as this file's contribution.
> **This file's marginal value is content-level**: what the incumbent's references actually teach
> (§"attribution reference is genuinely rigorous"), where the empirical canon is filed
> (§"persona theater"), the grep-based coverage/gap map, the OKF staleness specimen, and the
> family-seam comparison. Prefer those sections at synthesis; treat the metrics as a cross-check.

---

## SOURCE

- **Repo**: https://github.com/coreyhaines31/marketingskills
- **License FILE seen**: `LICENSE` (repo root), SPDX `MIT` — confirmed via
  `gh api repos/coreyhaines31/marketingskills/license --jq '.path, .license.spdx_id'`.
  MIT means facts AND prose are reusable with attribution; we still hold to the charter's 2-quote
  cap for report hygiene.
- **Metrics as of 2026-07-31**: 42,544 stars · 6,699 forks · 370 watchers · 86 open issues ·
  429 files · ~2.87 MB · created 2026-01-15 · last push 2026-07-29 (last commit 2026-07-27).
- **Author**: Corey Haines — a real, named practitioner (Swipe Files newsletter, Conversion
  Factory agency). Contributor split: 356 commits by `coreyhaines31`, then `claude` (4),
  `basseko` (3), `bensabic` (3), `Jiliac` (3) → effectively **single-maintainer** with a real
  outside-PR trickle.
- **Homepage**: marketing-skills.com. Ships a `.claude-plugin` manifest, `AGENTS.md`, `CLAUDE.md`,
  `VERSIONS.md`, and two validator scripts (`validate-skills.sh`,
  `validate-skills-official.sh`).

### Credibility rung + specimen/evidence tag (charter rules 4 and 8)

Rung: **named-practitioner content with a commercial funnel attached** — above agency content
marketing, below primary sources and peer-reviewed work. It is simultaneously:
- **Evidence** — several references are genuinely rigorous and correctly caveated (see below);
- **Specimen** — the repo is itself a marketing artifact. Every outbound link in the README
  carries `?ref=marketingskills` and points at the author's newsletter, agency, a paid "AI
  Marketing Training" offer, and *Magister*, a commercial "autonomous AI CMO" product built on
  these skills. A 42k-star open-source repo functioning as top-of-funnel for four paid offers is
  exactly the genre this pack must teach people to read critically. Tag accordingly when citing.

---

## WHAT IT TEACHES

### Architecture (shape is NOT our differentiator)

49 skills under `skills/<name>/`, each with `SKILL.md` + `evals/evals.json`, and most with a
`references/` directory. This is **the same faceted, progressive-disclosure shape our family
uses** — thin router-ish SKILL.md, on-demand references, behavioural evals. We cannot claim
structural novelty.

Full skill list (`skills/`): ab-testing · ad-creative · ads · ai-seo · analytics · aso ·
attribution · churn-prevention · co-marketing · cold-email · community-marketing ·
competitor-profiling · competitors · content-strategy · copy-editing · copywriting · cro ·
customer-research · directory-submissions · emails · free-tools · image · influencer-marketing ·
launch · lead-magnets · marketing-council · marketing-ideas · marketing-loops · marketing-plan ·
marketing-psychology · offers · onboarding · paywalls · popups · pricing · product-marketing ·
programmatic-seo · prospecting · public-relations · referrals · revops · sales-enablement ·
schema · seo-audit · signup · site-architecture · sms · social · video.

Composition model, from `README.md`: `product-marketing` is declared the foundation skill that
every other skill reads first for product, audience, and positioning context; skills persist
shared context to `.agents/product-marketing.md` (with `.claude/product-marketing.md` and a
legacy `product-marketing-context.md` as fallbacks — read at
`skills/marketing-council/SKILL.md`). Cross-references are declared per skill in a "Related
Skills" section. Their README groups the 49 into seven clusters: SEO & Content · CRO · Content &
Copy · Paid & Measurement · Growth & Retention · Sales & GTM · Strategy.

### The attribution reference is genuinely rigorous — this kills a comfortable assumption

`skills/attribution/references/measurement-paradigms.md` sets out an MTA vs MMM vs
incrementality comparison table (approach, what it answers, granularity, data needed, reaction
speed, offline/brand handling, privacy durability, cost) and states the triangulation position
our controller canon expected to be *missing* from practitioner content. Specific correct claims
read at that path:

- MTA is described as structurally weakening because of ITP-style cookie limits, iOS ATT,
  consent gating, ad blockers, and ordinary cross-device behaviour — and explicitly as
  **"incomplete and directionally biased", not a clean lower bound**, because retargeting and
  branded numbers are often *over*-stated while untracked paths get dumped into direct.
- It notes that **Chrome's third-party-cookie deprecation was announced and then walked back**,
  so "cookies are going away" is no longer the clean story — a correctly-dated, correctly-hedged
  volatile fact, which is more care than most vendor content takes.
- MMM: needs 2–3 years of weekly data *and real spend variation* ("if you always spend the same
  on Meta, the model can't learn Meta's effect"), is correlational and slow, is
  specification-sensitive, and names Robyn and Meridian as the modern open-source options.
- It closes the loop the way the literature does: **validate MMM coefficients with
  incrementality tests** — MMM says a channel contributed X, a holdout proves whether that is
  causal.

The eval assertions are equally sharp. `skills/attribution/evals/evals.json` eval #1 poses the
"Google says 50, Meta says 40, GA4 says 60, CRM says 35" problem and asserts the model must state
no source is objectively right, **explicitly warn against summing conversions across platforms**,
pick one source of truth for the count, explain the systematic bias of at least three sources,
and "not fabricate a single reconciled number as if it were truth."

**Implication for our pack: "attribution honesty" is NOT an open wedge.** The strongest
competitor already teaches the triangulation consensus, with dated caveats and behavioural evals.
Any attribution-as-flagship hypothesis has to be re-argued against this file specifically.

### The empirical marketing-science canon is present but confined to persona theater

Grep across `--include='*.md'` (as-of 2026-07-31) for the rigorous canon returns very few files:
Ehrenberg 1 · Byron Sharp 3 · *How Brands Grow* 1 · Binet 2 · double jeopardy 1 · mental
availability 1 · category entry point 1 · April Dunford 3 · *Obviously Awesome* 1. Terms absent
entirely (0 files): **"share of voice", "95-5", "Crossing the Chasm", "category design"**.

Where the canon actually lives: `skills/marketing-council/references/advisors/`, a roster of 12
persona files — `alex-hormozi.md`, `ann-handley.md`, `april-dunford.md`, `byron-sharp.md`,
`claude-hopkins.md`, `david-ogilvy.md`, `eugene-schwartz.md`, `gary-halbert.md`,
`gary-vaynerchuk.md`, `rory-sutherland.md`, `russell-brunson.md`, `seth-godin.md`. The owning
skill (`skills/marketing-council/SKILL.md`) frames these as a "simulated board of advisors",
labels the output as simulation, and requires each take be grounded in what the advisor actually
wrote.

Two honest observations, in tension:

1. **Structurally, this is canon-as-roleplay.** Byron Sharp's replicated empirical laws sit in
   the same rack, at the same weight, as Russell Brunson (funnel course-selling) and Gary
   Vaynerchuk. The organising principle is *whose voice do you want*, not *what does the evidence
   support*. Nothing in the pack adjudicates between a law that replicates across categories and
   decades and a personality's heuristic. **That is the opening for an evidence-graded pack.**
2. **But the individual file is well made and it corrects our own canon.**
   `skills/marketing-council/references/advisors/byron-sharp.md` states each framework with its
   source book and year (mental/physical availability, double jeopardy crediting McPhee/Ehrenberg,
   distinctiveness over differentiation, penetration over loyalty, duplication of purchase,
   category entry points with Romaniuk), and then records Sharp's *documented positions* —
   including that **Sharp calls Binet & Field's 60:40 rule "very misleading", built on unsound
   awards data (Mi3, 2022)**, and that he dismisses attention metrics. Our own
   `controller-canon.md` §2 presents Binet & Field's 60/40 heuristic without that dispute. This
   competitor is more nuanced than our prior on that specific point, and we must carry the
   dispute forward rather than shipping 60/40 flat.

### Coverage map — grep counts by file (as-of 2026-07-31, `--include='*.md'`)

Well covered: GEO 41 · positioning (as a word) 47 · affiliate 27 · segmentation 25 · GDPR 19 ·
Product Hunt 19 · Gmail 10 · AI Overviews 9 · FTC 9 · CAN-SPAM 8 · CASL 6 · llms.txt 5 ·
E-E-A-T 4.

**Thin or absent — these are the concrete gaps:**

| Probe | Files | Reading |
|---|---|---|
| `list-unsubscribe` | **0** | RFC 8058 one-click unsubscribe entirely absent |
| `RFC 8058` | **0** | ditto |
| `spam rate` | **0** | the Gmail/Yahoo <0.3% complaint threshold is absent |
| SPF / DKIM / DMARC | **2 each** | authentication barely touched |
| `App Store Review Guidelines` | **0** | an `aso` skill exists that never cites Apple's primary source |
| `Search Central` | **1** | Google's primary SEO documentation cited once across 429 files |
| `category design` | **0** | no category-creation strategy at all |

There is **no `positioning` skill directory, no `segmentation` skill, no `brand` skill**. The
`product-marketing` skill that the whole pack is built on top of has **no `references/`
directory at all** — just `SKILL.md` and `evals/`. So the foundation the other 48 skills read
from is the shallowest artifact in the repo.

### Scope: it is a monolith that crosses our declared family seams

Against the charter's family boundaries, this pack absorbs work our family assigns elsewhere:
`ab-testing` (→ growth) · `pricing` (→ product) · `revops`, `sales-enablement`, `prospecting`,
`cold-email` (→ sales) · `onboarding`, `churn-prevention` (→ success) · `schema`,
`site-architecture`, `signup`, `popups`, `paywalls` (→ frontend/design). This is not a criticism
of their product — a standalone pack has no siblings to defer to. It is, however, a genuine
structural difference: **ours is a member of an eleven-pack family with pre-declared seams and
inheritance; theirs is a self-contained monolith.** Whether users value that is an open question
the synthesis gate must answer honestly, not assume.

---

## VERBATIM-WORTH-KEEPING (MIT-licensed; charter 2-quote cap observed)

1. On MTA, from `skills/attribution/references/measurement-paradigms.md`: MTA is
   "**incomplete and directionally biased**" — not a clean lower bound. (attributed: Corey
   Haines, marketingskills, MIT)
2. From the same file, on MMM's data requirement: "**if you always spend the same on Meta, the
   model can't learn Meta's effect**". (same attribution)

---

## RELEVANCE TO PACK JOBS

- **attribution-and-measurement** — contested and well-served. Re-argue or drop as flagship.
- **positioning-and-messaging** — competitor has no dedicated skill and its foundation skill has
  zero references. **Our flagship hypothesis survives, and this is the clearest depth opening.**
- **lifecycle-and-email** — deliverability engineering (SPF/DKIM/DMARC alignment, RFC 8058
  one-click unsubscribe, the <0.3% spam-rate threshold, Gmail/Yahoo bulk-sender rules) is
  effectively absent. **Checkable, primary-source-grade, and unoccupied.**
- **seo-strategy / ASO** — competitor covers the topics but barely cites the primary sources
  (Search Central once; Apple's review guidelines never). Primary-source anchoring is an opening
  even where topic coverage is not.
- **category-and-competitive-framing** — "category design" appears zero times.
- **audience-and-segmentation** — no owning skill.
- Everything else (paid, content, social, community, PR, launch, GEO/ai-seo) is covered, several
  of them well. Assume contested until proven otherwise.

---

## The niche is CONTESTED — derivative repos confirm active competition

Non-fork reuploads/adaptations, all created after coreyhaines31/marketingskills (2026-01-15):

| Repo | Stars | Created | License |
|---|---|---|---|
| Eronred/aso-skills | 1,696 | 2026-02-27 | MIT |
| mikiarlo3/ai-copywriter | 994 | 2026-07-24 | MIT |
| boraoztunc/skills | 219 | 2026-03-30 | Apache-2.0 |
| Cesarjoquin/Marketing-Skills | 155 | 2026-06-26 | MIT |
| davidpc007/openclaw-marketing-skills | 146 | 2026-07-03 | NOASSERTION |

`Cesarjoquin/Marketing-Skills` carries a description nearly identical to the original ("AI agent
Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, …") while not being a
GitHub fork — a reupload pattern. `UNVERIFIED:` whether these are literal content copies or
independent works; verifying would require diffing their `skills/` trees against the original,
which I did not do.

---

## CREDIBILITY NOTE

Adoption looks organic rather than manufactured: 42.5k stars against 6,699 forks (a 0.157
fork:star ratio, high — consistent with a template repo people actually copy), 370 watchers, 86
open issues, and outside contributors landing PRs. Growth of 42.5k stars in ~6.5 months is steep
but the author had a pre-existing marketing audience, which is a sufficient non-fraudulent
explanation. `UNVERIFIED:` I did not run a star-burstiness/fake-star forensic pass
(`ghrelay health` would do it via the ClickHouse WatchEvent histogram); the fork ratio and issue
activity were enough for a plausibility judgement, not a proof.

Volatility: all star/fork/issue counts and every grep count above are **as of 2026-07-31**. The
repo pushed 5 times in the week before that snapshot; treat coverage gaps as perishable —
list-unsubscribe could land tomorrow.

---

## A live staleness specimen: OKF v0.1 vs v0.2

Their `skills/ai-seo/references/okf.md` teaches the **Open Knowledge Format**, describing it as
"Google's v0.1 markdown spec" introduced on the Google Cloud blog on 2026-06-12 and shipped
inside Knowledge Catalog. I verified the primary source directly:
**https://github.com/GoogleCloudPlatform/knowledge-catalog** — 8,130 stars, license file
`LICENSE.md` (Apache-2.0), created 2026-05-04, last pushed 2026-07-29, with the spec at
`okf/SPEC.md` (37.5 KB) alongside `okf/README.md`, `okf/bundles/`, `okf/samples/`, `okf/src/`,
`okf/tests/`.

**The spec's own header reads "Version 0.2", with a §13 summarising changes from v0.1.** The
market-leading marketing pack is therefore teaching a superseded version of a spec that moved
within weeks. This is a concrete, citable demonstration — not a hypothetical — that
AI-search/agent-readable-format guidance decays on a scale of weeks, and it argues for our pack
carrying a **re-verify instruction rather than a frozen version number** anywhere it touches this
area.

Substance of the spec, read from `okf/SPEC.md`: a directory of markdown files with YAML
frontmatter; no schema registry, no central authority, no required tooling; designed to be
readable by humans without tooling, parseable by agents without bespoke SDKs, and diffable in
version control. It positions itself explicitly against the proliferation of incompatible
agent-knowledge conventions.

`UNVERIFIED:` the 2026-06-12 Google Cloud blog date and the "Google-backed" framing come from the
competitor's file, not from Google directly; the repo also carries Google's standard "not an
official Google product" boilerplate, so *Google-originated* is defensible and *Google-endorsed
standard* is not. Verifying requires fetching the Google Cloud blog post itself. Routed to the
channel's SEO/GEO worker.

An OKF ecosystem already exists on GitHub (all as of 2026-07-31): scaccogatto/okf-skills (205★,
MIT) · coleam00/cole-medin-ai-coding (111★, NO LICENSE FOUND) · OWOX/models (85★, Apache-2.0) ·
0dust/OKFy (62★, MIT) · openknowledge-sh/openknowledge (33★, Apache-2.0) · xSAVIKx/okf-skills
(29★, Apache-2.0) · jkroepke/okf-crossplane-v2 (24★, Apache-2.0) · linyiru/awesome-okf (7★,
CC0-1.0).

Note also that `skills/ai-seo/SKILL.md:85` asserts AI systems "parse `llms.txt` … when present"
without a source. Whether any AI system verifiably consumes llms.txt is the exact question the
channel's SEO/GEO worker was tasked to answer with evidence. If the answer is "no verifiable
consumer", the dominant pack is teaching an unsourced claim — which would be a direct,
demonstrable wedge.

## Adjacent agent-skill competitors (the niche is crowded beyond the leader)

Beyond the derivatives table above: `Eronred/aso-skills` (1,696★, MIT, created 2026-02-27) ships
the same scaffolding pattern (`.claude-plugin`, `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md`,
`validate-skills.sh`) plus a docs site, aimed purely at ASO — meaning even our narrowest
candidate job has a dedicated 1.7k-star competitor. Also `yoanbernabeu/producthunt-skills` (15★,
MIT — 31 skills for Product Hunt launches) and `Gingiris/gingiris-skills` (23★, MIT — SEO/GEO
patrol), both 2026-07. `Gingiris/gingiris-launch` (190★, MIT) is a Product Hunt launch playbook.

## Where GitHub has nothing: the channel's honest negative result

Controller sweeps for `positioning messaging framework`, `public relations press`, and
`brand guidelines` returned **no substantive knowledge repos** — the brand-guidelines hits are all
individual companies' logo asset repos (WalletConnect, MetaMask, ReVanced, AsyncAPI), not
teaching material. `startup launch checklist` returned only trivial repos (top hit 2★). GitHub is
therefore a strong channel for measurement, SEO/GEO infrastructure, deliverability tooling, and
competitor packs — and a **near-empty channel for positioning, category framing, brand narrative,
and PR**, which must be sourced from the web/X/book channels instead. That absence is itself
evidence for where our pack's depth cannot be borrowed from open source.

## What I did NOT cover and why

- Did not read all 49 `SKILL.md` files (~93k words in SKILL.md alone). I sampled `attribution`,
  `marketing-council`, and `product-marketing` structurally, and used grep probes for the rest.
  A full quality audit of their SEO/ads/social content remains undone.
- Did not diff the derivative repos against the original to prove copying.
- Did not evaluate `marketing-skills.com` or the *Magister* product — out of channel scope
  (web channel).
- Did not assess their `evals.json` suite as a whole (only eval #1 of `attribution`), so I cannot
  say how rigorous their behavioural testing is on average.
