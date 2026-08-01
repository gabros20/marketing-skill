# GitHub research — SEO tooling + structured data + GEO/llms.txt + email deliverability tooling

Worker: mkt-github (worker 3). Research date: 2026-07-31/08-01. Read-only, `gh api`/`gh search`
only (no WebSearch calls consumed — budget preserved at 0/15). Clones avoided; all data pulled via
API/contents endpoints into scratchpad (no clone needed).

---

## PART A — SEO + structured data

### SOURCE: schemaorg/schemaorg
https://github.com/schemaorg/schemaorg — the Schema.org vocabulary repo itself (schemas + release
tooling). 6187★, pushed 2026-07-23, **license file `LICENSE`, Apache-2.0**.
WHAT IT TEACHES: This is the actual vocabulary source of truth (not a wrapper) — the type
hierarchy (Article, Product, Organization, BreadcrumbList, SoftwareApplication, LocalBusiness,
Person, Recipe, etc.) originates here, versioned by release. RELEVANCE: primary-source anchor for
any structured-data reference the pack ships — cite this repo, not a blog paraphrase, for "does
type X exist in the vocabulary." BOUNDARY: vocabulary existence ≠ Google rich-result eligibility
(see below) — marketing owns "which types to use for which intent," implementation of the JSON-LD
itself is frontend/backend. CREDIBILITY: rung 1 (primary open-source spec repo, real adoption —
6.1k★, active 2026).

### SOURCE: Google rich-result deprecations (found via GitHub code search across independent
practitioner/skill repos — NOT Google's own docs; treat as secondary, converging evidence)
Repos: zubair-trabzada/geo-seo-claude (`agents/geo-schema.md`, 9180★, MIT, pushed 2026-05-27),
borghei/Claude-Skills (`marketing/schema-markup/SKILL.md`, 439★, license NOASSERTION — re-express
only), wishfy-ai/google-seo-geo-aeo-audit-skill (`README.md`, 8★, MIT), imageforward-git/
marketing51 (`docs/site-migration/MICHAEL-REPORT.md`, 0★, no license → re-express only).
WHAT THEY CONVERGE ON (independent authors, same facts): **FAQPage rich results RESTRICTED since
Aug 2023** — geo-seo-claude's table: "only shown for well-known government and health authority
sites... schema is ignored for rich results" for everyone else. **HowTo rich results REMOVED as of
Sep 2023** (incl. "How-to with video"), confirmed by 3 independent repos. **SpecialAnnouncement**
(COVID-era) and **CourseInfo** also marked deprecated/replaced in the same table.
A SEPARATE, more recent claim from 2 independent repos (marketing51, and doronavni122/avni-guy
`notes/temp/seo-audit-july2026/audit-merged-july2026.md`) asserts **FAQ rich result fully
deprecated/stopped showing entirely as of May 7 2026** — this reads as an escalation from the 2023
"restricted to gov/health" state to full removal, but I could not find this specific date in any
primary Google source in this pass.
CREDIBILITY NOTE: all four are practitioner-authored SEO/GEO "skill" packs or audit notes, not
Google Search Central itself — rung 4 (vendor/practitioner content) despite multi-source
convergence on the 2023 dates. **UNVERIFIED: the May 7 2026 full-FAQ-removal date — needs
confirmation against developers.google.com/search/blog or Search Central changelog directly**
(recommend mkt-web verify with its larger WebSearch/WebFetch budget). The 2023 HowTo/FAQ-restriction
dates are corroborated by 3+ independent authors and are lower-risk to carry forward as-of
2026-07-31, still flagged as secondary-sourced.
RELEVANCE: this is exactly the kind of "documented deprecation" the mandate asked to hunt for — a
volatile, checkable fact set (which schema types still earn a SERP rich result vs. which are
inert/AEO-only) that a seo-strategy job reference should carry with dates, not folklore ("just add
FAQ schema" is stale advice for non-gov/health sites since 2023).
BOUNDARY: this is marketing's territory (SEO/GEO strategy: which schema to invest in) vs.
frontend's (how to emit the JSON-LD).

### SOURCE: zubair-trabzada/geo-seo-claude (competitive-landscape flag)
https://github.com/zubair-trabzada/geo-seo-claude — 9180★, MIT, pushed 2026-05-27. A published
Claude Code "skill" for GEO/SEO auditing (citability scoring, AI crawler analysis, schema markup,
entity-graph scoring). Its own repo description points readers to a paid "skool community" —
mixed signal (real technique content + funnel bait). WHAT IT TEACHES (re-expressed, MIT permits
more but staying within quote cap): the `sameAs` property on Organization/Person schema is framed
as "the single most important property for GEO" — cross-linking entity profiles (LinkedIn,
Wikipedia, etc.) so AI models can resolve one entity across platforms; also documents a scoring
rubric weighting Organization+sameAs (20pts), Article/author schema (15pts), speakable (10pts),
BreadcrumbList (5pts) — i.e. a candidate priority order for structured-data investment. RELEVANCE:
directly usable teaching material for the seo-strategy / GEO facet of the pack, AND a direct
competitor artifact — flagging for mkt-skills to assess as a competing skill, not re-litigating
here. CREDIBILITY: rung 4 (practitioner tool with funnel-adjacent monetization), but the schema
priority table is checkable against schemaorg's actual vocabulary and is internally consistent.

### SOURCE: SEO/structured-data tool + framework survey (breadth pass, license-verified)
- **iamvishnusankar/next-sitemap** (3743★, MIT, pushed 2026-07-28) — sitemap+robots.txt generator
  for Next.js; implementation-side (frontend), cited only as evidence of what "sitemap correctness"
  concretely means (static/dynamic/SSR page coverage).
- **StJudeWasHere/seonaut** (746★, license file `LICENSE`, MIT, pushed 2026-07-31) — open-source
  self-hosted SEO audit tool (crawl-based issue detection). Implementation/quality-boundary tool,
  not a strategy source, but its issue taxonomy (what it checks for) is a decent proxy for "what
  technical SEO issues are checkable" — quality-channel territory more than marketing's.
- **StanGirard/seo-audits-toolkit** (803★, no license file found via API → **NO LICENSE FOUND**,
  facts only, zero verbatim) — Lighthouse+security-headers+sitemap/keyword/image extraction
  toolkit; same boundary note as seonaut.
- **garmeeh/next-seo** (8496★, MIT, pushed 2026-07-29) and **harlan-zw/nuxt-seo** (1417★, MIT,
  pushed 2026-07-22) — framework SEO metadata packages. WHAT THEY TEACH: by their own config
  surface, they encode the metadata set the ecosystem treats as load-bearing: title/description,
  Open Graph, Twitter Card, canonical, robots meta, and (nuxt-seo specifically) an explicit
  AEO/"AI search" module — i.e. a maintained, widely-adopted package already treats AEO metadata as
  a first-class SEO concern in 2026, not a fringe idea. RELEVANCE: useful as evidence for what
  "the metadata that actually matters" consists of, feeding a keyword-intent/on-page checklist;
  implementation itself is frontend's.
- **jonasmerlin/astro-seo** (1364★, MIT) — same category, Astro ecosystem.
- Competitive-landscape note (flag for mkt-skills, not pursued further here): a cluster of
  **published agent/Claude-Code "SEO audit skills"** surfaced repeatedly in searches —
  `JeffLi1993/seo-audit-skill` (625★, MIT), `seo-skills/seo-audit-skill` (336★, MIT, "108 audit
  rules / 12 categories"), `unifapi-agent/agents` (532★, MIT, bundles SEO+GEO+local-SEO+KOL-pricing
  agents), `Eronred/aso-skills` (1696★, MIT, ASO-specific) — these are direct or adjacent
  competitors to the marketing pack's seo-strategy and app-store-optimization jobs and star counts
  suggest real pull; I did not deep-read them (out of my mandate's depth budget).
- Programmatic-SEO repos found (`agamm/pseo-next`, `agonist/contentbit`, etc.) are all
  implementation templates (Next.js/Astro page-generation patterns), <65★ each, no license on
  several — thin, not strategy-teaching; noted only as confirmation that "programmatic SEO" in the
  wild means templated page generation at scale, which is the concept marketing's seo-strategy job
  should define the *intent/quality bar* for (frontend implements).

CREDIBILITY across this cluster: rung 1 for schemaorg only; next-seo/nuxt-seo/next-sitemap are
rung "open-source repos with real adoption" (top of the ladder's OSS clause) for *what metadata the
ecosystem treats as load-bearing*, not for strategic claims; audit tools and skill-packs are rung 4.

---

## PART B — GEO / AI-search / llms.txt: evidence-based verdict

**VERDICT: no evidence of consumption found; treat GEO/llms.txt tooling as folklore-adjacent
infrastructure with real production activity but unverified payoff.**

Method: read all 50+ open/closed issues on AnswerDotAI/llms-txt (`gh api
repos/AnswerDotAI/llms-txt/issues?state=all`) and filtered bodies for consumption-evidence
keywords (openai/anthropic/perplexity/google/"doesn't fetch"/"ignor"/"actually use"). Findings:

1. **Zero issues assert that any AI search engine or crawler fetches/consumes llms.txt.** The
   closest hit, issue #47 ("Community Adoption in README"), only lists *producer*-side adoption
   (Anthropic and modelcontextprotocol.io publish llms.txt files) — publishing ≠ consumption by a
   crawler or retrieval system. UNVERIFIED: whether Anthropic's, or any other, crawler/RAG system
   actually reads its own or others' llms.txt at inference or indexing time — nothing in this repo
   answers that.
2. **A commenter on the repo's own issue #91 ("Merge into AGENTS.md 'standard'?") voices exactly
   this skepticism**, unprompted: "not sure how a single file on a website will help agents
   nowadays... they probably have some kind of sanitisation step when downloading a webpage content
   to filter out unnecessary things before it even goes into the context" — i.e. a llms-txt
   ecosystem participant questioning the premise, on the spec's own tracker
   (github.com/AnswerDotAI/llms-txt/issues/91).
3. Issue volume is dominated by **directory-submission spam and validator/tool announcements**
   (issues #100–143 are almost entirely "Add my site/tool to the list" or "Resource submission:
   [name] — free AI-visibility checker"), i.e. the ecosystem's growth signal is largely
   self-promotional tooling, not adoption evidence.
4. **Competing/adjacent standard tension is visible in-repo**: issue #91 and #98 both raise merging
   into or aligning with `openai/agents.md` (a *codebase*-agent convention), suggesting even
   participants aren't sure llms.txt (a *website*-content convention) has settled scope.

**Adoption counts (real numbers, dated 2026-07-31/08-01):**
- **thedaviddias/llms-txt-hub** (885★, license file `LICENCE` — GitHub flags "other" but the file
  text is standard MIT boilerplate, confirmed by reading it) — `data/websites.json` contains
  **1,405 entries** (counted via `jq length` on the fetched JSON, 651991 bytes).
- **SecretiveShell/Awesome-llms-txt** (105★, MIT) — README is a flat link list, **764 markdown
  list-items** (grep count), roughly 400–500 unique domains once `(full)` llms-full.txt duplicate
  entries per domain are discounted (spot-checked: many domains appear twice, once for llms.txt,
  once for llms-full.txt).
- **ai-robots-txt/ai.robots.txt** (4022★, license file `LICENSE`, MIT, pushed 2026-07-31 — actively
  maintained) — this is the **stronger, checkable fact set** the mandate flagged: a maintained,
  well-adopted list of AI crawler user-agents (GPTBot, ClaudeBot, PerplexityBot, etc.) plus a ready
  `robots.txt` block to block them. Unlike llms.txt, this repo's premise (crawlers exist, they
  self-identify by user-agent, and site owners want to allow/block them) is independently
  verifiable — the user-agents are observed in server logs by definition, no "does it get consumed"
  question applies the same way.
- Other ecosystem repos, license-checked: **langchain-ai/mcpdoc** (1020★, MIT) — an MCP server that
  turns llms.txt files into a documentation-serving tool for coding agents (a real *consumption*
  mechanism, but agent-side/opt-in, not evidence of an AI *search engine* crawling llms.txt
  unprompted); **delucis/starlight-llms-txt** (107★, MIT) and **dotenvx/llmstxt** (146★,
  BSD-3-Clause) are doc-site generators (producer tooling); **firecrawl/llmstxt-generator** (534★,
  no license field → NO LICENSE FOUND) and **krish-adi/llmstxt-site** (225★, no license field →
  NO LICENSE FOUND) are generator/hosting tools, producer-side only.

RELEVANCE TO PACK JOBS: this bears directly on whether the pack's seo-strategy (GEO facet) job
should recommend "publish an llms.txt" as a checkable tactic or flag it explicitly as *unverified
payoff, real cost* — I recommend the latter framing, with ai.robots.txt-style crawler-blocking
(and *not* llms.txt) presented as the credibility-backed AI-crawler action.
"Generative engine optimization"/"answer engine optimization"/"AI search visibility" as search
terms surfaced the same tool cluster already covered in Part A's competitive-landscape note
(citability scorers, AI-visibility checkers) — assessed as thin, mostly marketing-tool shells
around the same 2-3 techniques (schema, sameAs, crawler access), consistent with the mandate's
prior expectation.

### ADDENDUM — Open Knowledge Format (OKF): flagged by peer worker mid-run, independently verified

A sibling worker in this channel surfaced Google's Open Knowledge Format while sweeping and asked me
to apply the same evidence standard I used for llms.txt. Verified directly via `gh api` against
GoogleCloudPlatform/knowledge-catalog (8130★, license file `LICENSE.md`, Apache-2.0, created
2026-05-04, pushed 2026-07-29 — actively maintained). Spec lives at `okf/SPEC.md` (fetched in full,
1003 lines). **Spec header confirms Version 0.2**, with §13 ("Changes from v0.1") documenting two
breaking field renames (`timestamp` → `generated.at`; body `# Citations` list → frontmatter
`sources`) plus several additive fields.

**Consumption verdict — SAME as llms.txt, if anything more explicit: no evidence of consumption,
and the project's own tracker admits the blind spot.** Issue #254 on the repo itself, "Telemetry on
corpus usage," states plainly: *"There is no telemetry on the consumption of the corpus... Usage
data does not resolve which [concepts are redundant vs. essential], but without it you cannot even
ask."* (github.com/GoogleCloudPlatform/knowledge-catalog/issues/254). This is a first-party
admission — not my inference — that nobody, including the maintainers, currently measures whether
any agent or AI search system reads OKF bundles. Separately, issue #231 ("Do you have any plans to
have authoritative site for OKF?") notes squatted/copycat sites already being "assumed by agents as
a legitimate" index, which is evidence of ecosystem confusion, not evidence of genuine consumption.
UNVERIFIED: whether any Google product (Vertex AI, AI Overviews, Gemini) or third-party agent
actually ingests OKF bundles at retrieval or indexing time — no repo evidence either way.

**Relationship to llms.txt — the spec itself says nothing.** I grepped the full `SPEC.md` and
`okf/README.md` for "llms" (case-insensitive): **zero matches in either file.** The "llms.txt as
signpost, OKF as the library" stacking framing is a third-party interpretation, not something OKF's
own spec asserts — treat it as UNVERIFIED-by-primary-source framing, re-express with that caveat if
carried into synthesis.

**Provenance caveat on the Google Cloud blog announcement**: I did not independently fetch
cloud.google.com (outside my GitHub-only mandate for this pass); the 2026-06-12 blog date and
"introduced by Google Cloud" framing came from a third-party repo
(coreyhaines31/marketingskills — see below), not from Google directly. The knowledge-catalog repo
itself carries no first-person "we announced this on X date" text in SPEC.md or README.md that I
found; it does carry Google's standard OSS disclaimer boilerplate (not verified verbatim here,
re-expressed: the repo is not positioned as an official supported Google product). Recommend
mkt-web confirm the blog post directly.

**Live staleness example (exactly what the peer asked me to nail down with dates)**: the single
most-starred GitHub artifact touching this pack's whole domain,
**coreyhaines31/marketingskills (42,545★, MIT, pushed 2026-07-29)** — a general marketing skills
collection with dedicated `ai-seo`, `schema`, and `seo-audit` skills — ships a
`skills/ai-seo/references/okf.md` reference and a `SKILL.md` line reading **"`/okf/` — Open
Knowledge Format bundle (Google-backed, v0.1)"**, and its own `VERSIONS.md` changelog entry
(added in its 2.1.0 bump) explicitly calls OKF "a v0.1 markdown spec" — both citations are now
stale against the real spec's v0.2, confirmed by my direct read of `SPEC.md` above. This is a
verified, dated (their own pushed_at 2026-07-29, vs. OKF's v0.2 already current as of the same
window) instance of exactly the volatility problem the charter warns about: a 42.5k-star,
actively-maintained competitor pack already shipped a frozen version number for a spec that moved
out from under it. Worth noting in the same repo: its own honest-framing language on OKF today —
"what it does for AI search today (nothing immediate; protocol-layer registration like early
schema.org adoption)" — independently converges with my own no-evidence-of-consumption finding,
from a source with every incentive to oversell the tactic.
RECOMMENDATION for pack synthesis: any OKF reference the marketing pack ships should (a) name the
version as of the writing date and instruct a re-verify against
github.com/GoogleCloudPlatform/knowledge-catalog rather than freezing "v0.1" or "v0.2" as fact, and
(b) frame OKF adoption identically to llms.txt — a publishing convention with no verified AI-side
consumer as of 2026-08-01, not a confirmed ranking or citation mechanism.
CREDIBILITY: knowledge-catalog repo itself rung 1 (primary spec source, real Apache-2.0 license,
Google-org-hosted); coreyhaines31/marketingskills rung 4 (practitioner/vendor content, despite huge
star count — it is a course-adjacent SEO/marketing skill pack, specimen of the genre and also
competitive-landscape evidence, not an authority on OKF's actual status).
Ecosystem repos around OKF (peer-reported, not independently re-verified by me — flagging
provenance): scaccogatto/okf-skills (205★, MIT) · coleam00/cole-medin-ai-coding (111★, no license)
· OWOX/models (85★, Apache-2.0) · 0dust/OKFy (62★, MIT) · openknowledge-sh/openknowledge (33★,
Apache-2.0) · xSAVIKx/okf-skills (29★, Apache-2.0) · jkroepke/okf-crossplane-v2 (24★, Apache-2.0) ·
linyiru/awesome-okf (7★, CC0-1.0) — small compared to llms.txt's directories (1405/764 entries),
consistent with OKF being ~2 months old (created 2026-05-04) vs. llms.txt's longer runway.

---

## PART C — Email deliverability tooling

### SOURCE: domainaware/parsedmarc
https://github.com/domainaware/parsedmarc — 1270★, **license file `LICENSE`, Apache-2.0**, pushed
2026-07-28 (actively maintained). Python package/CLI for parsing DMARC aggregate + forensic
reports. WHAT IT TEACHES: by necessity of parsing real reports, the repo's data model encodes the
actual DMARC alignment mechanics — SPF alignment (envelope-from domain vs. From: header domain),
DKIM alignment (d= signature domain vs. From: header domain), and the three `p=` policy values
(`none` = monitor-only, `quarantine` = spam-folder, `reject` = hard-block) that every mailing
program has to choose between when moving up the enforcement ladder. RELEVANCE: primary engineering
constraint for the lifecycle-and-email job — "start at p=none, prove alignment via reports, then
escalate" is the standard safe-rollout sequence this tool exists to support. CREDIBILITY: rung 1
(OSS with real adoption, actively maintained).
Also found: **dmarcguardhq/dmarcguard** (181★, Apache-2.0, self-hosted Go/Vue dashboard, explicitly
"RFC 7489 compliant" per its own description — cites the governing RFC), and a long tail of
smaller/abandoned parsers (techsneeze/dmarcts-report-parser 244★ GPL-3.0, solarissmoke/php-dmarc
69★ license "other" — not opened, treat as unlicensed for verbatim purposes).

### SOURCE: postalsys/mailauth
https://github.com/postalsys/mailauth — 142★, license file `LICENSE.txt` (GitHub flags NOASSERTION;
file text read directly is a standard MIT-style permissive grant, missing only the "MIT License"
title line — treated as facts-only, no verbatim lift given the ambiguity), pushed 2026-05-14. A
Node.js library/CLI implementing SPF, DKIM, DMARC, ARC, **and BIMI/MTA-STS** validation in one
place. RELEVANCE: useful single reference point for the full mechanics stack (SPF+DKIM+DMARC+ARC+
BIMI+MTA-STS) rather than needing five separate sources; good candidate citation for a lifecycle/
email reference's "sender authentication" section. CREDIBILITY: rung "open-source with real
adoption" though smaller (142★) — cross-check specific claims against RFC text before citing as
fact.

### SOURCE: Snawoot/postfix-mta-sts-resolver
https://github.com/Snawoot/postfix-mta-sts-resolver — 126★, MIT, pushed 2025-10-10. Confirms
MTA-STS (RFC 8461) as an operational, implemented-against standard (Postfix integration daemon),
not just a paper spec. BOUNDARY: this is mail-transport/ops territory (arguably operate/backend
adjacent), marketing's interest is limited to "MTA-STS exists and affects deliverability," not the
daemon implementation.

### SOURCE: RFC 8058 / one-click list-unsubscribe
No dedicated high-quality OSS repo found for one-click unsubscribe specifically (search noise was
dominated by unrelated privacy-policy-boilerplate repos and a Thunderbird UI addon,
`Amunak/thunderbird-list-unsubscribe-addon` — client-side, not sender-side, low relevance).
UNVERIFIED via GitHub in this pass: I did not find a repo that documents the RFC 8058 mechanics
(List-Unsubscribe-Post header + one-click POST) directly — **recommend mkt-web verify this against
Gmail/Yahoo sender guidelines directly** (the charter's primary-source tier), since this is a
2024-era Gmail/Yahoo bulk-sender requirement (one-click unsubscribe became mandatory for high-volume
senders) better sourced from platform docs than GitHub.

### SOURCE: mjmlio/mjml, foundation/foundation-emails, maizzle/maizzle — email-HTML rendering
constraint (the "1990s rendering target" the mandate names)
- **mjmlio/mjml** (18177★, MIT, pushed 2026-07-22) — dominant email-templating framework; its
  entire premise (a custom markup language that *compiles down* to table-based HTML) is itself the
  proof of the constraint: modern flexbox/grid CSS is not reliable in email clients, so the
  ecosystem's most-starred tool exists specifically to abstract table-layout+inlined-CSS
  generation away from authors.
- **foundation/foundation-emails** (7791★, MIT, pushed 2026-03-13) — same constraint, older
  framework, explicit description: "Even Outlook" — i.e. the Word-rendering-engine problem in
  Outlook desktop is treated as the headline compatibility target, not an edge case.
- **maizzle/maizzle** (2839★, **no LICENSE file found via API → NO LICENSE FOUND**, pushed
  2026-06-16) — newer Tailwind-based email framework; same rendering-constraint premise. Facts
  re-expressed only, no verbatim, per NO LICENSE FOUND rule.
RELEVANCE: these three tools, purely by what they had to be built to do, constitute checkable
evidence for the lifecycle-and-email job's hard constraint list: table-based layout, CSS inlining,
Outlook/Word engine quirks, and (in mjml/maizzle's newer feature sets) dark-mode handling as an
active, unsolved-enough problem that frameworks still ship dedicated tooling for it in 2026.

### SOURCE: BIMI
No standalone high-quality BIMI *tooling* repo surfaced beyond postalsys/mailauth's validator
support (above) and a handful of <15★ "BIMI logo" asset repos (SVG-Tiny-PS logo prep, not
protocol tooling) — not worth citing individually. BIMI's mechanics are adequately covered via
mailauth; UNVERIFIED beyond that here.

---

## SOURCES TABLE

| URL | License file seen | Stars | Last push | Credibility rung |
|---|---|---|---|---|
| github.com/schemaorg/schemaorg | LICENSE — Apache-2.0 | 6187 | 2026-07-23 | 1 (primary spec) |
| github.com/zubair-trabzada/geo-seo-claude | LICENSE — MIT | 9180 | 2026-05-27 | 4 (practitioner, funnel-adjacent) |
| github.com/borghei/Claude-Skills | NOASSERTION (not opened) | 439 | 2026-07-21 | 4 |
| github.com/wishfy-ai/google-seo-geo-aeo-audit-skill | LICENSE — MIT | 8 | 2026-05-17 | 4 |
| github.com/imageforward-git/marketing51 | none found | 0 | 2026-07-31 | 4 (specimen, not evidence) |
| github.com/doronavni122/avni-guy | not checked | n/a | n/a | 4 (specimen) |
| github.com/iamvishnusankar/next-sitemap | LICENSE — MIT | 3743 | 2026-07-28 | OSS/real-adoption |
| github.com/StJudeWasHere/seonaut | LICENSE — MIT | 746 | 2026-07-31 | OSS/real-adoption |
| github.com/StanGirard/seo-audits-toolkit | NO LICENSE FOUND | 803 | 2026-07-31 | OSS, facts-only |
| github.com/garmeeh/next-seo | MIT (gh search field) | 8496 | 2026-07-29 | OSS/real-adoption |
| github.com/harlan-zw/nuxt-seo | MIT (gh search field) | 1417 | 2026-07-22 | OSS/real-adoption |
| github.com/jonasmerlin/astro-seo | MIT (gh search field) | 1364 | 2026-07-31 | OSS/real-adoption |
| github.com/AnswerDotAI/llms-txt | Apache-2.0 (per charter) | 2541 | n/a | 1 (primary spec repo, issues mined) |
| github.com/thedaviddias/llms-txt-hub | LICENCE — MIT (opened; GH flags "other") | 885 | 2026-07-31 | OSS, directory (1405 entries) |
| github.com/SecretiveShell/Awesome-llms-txt | MIT | 105 | 2026-07-03 | OSS, directory (764 links) |
| github.com/ai-robots-txt/ai.robots.txt | LICENSE — MIT | 4022 | 2026-07-31 | 1 (checkable, self-verifying premise) |
| github.com/GoogleCloudPlatform/knowledge-catalog (OKF spec) | LICENSE.md — Apache-2.0 | 8130 | 2026-07-29 | 1 (primary spec, issues mined, self-admits no consumption telemetry) |
| github.com/coreyhaines31/marketingskills | MIT (per repo search) | 42545 | 2026-07-29 | 4 (dominant practitioner marketing-skill pack; specimen + competitive-landscape; caught citing OKF as stale v0.1) |
| github.com/scaccogatto/okf-skills (peer-reported, not independently re-verified) | MIT | 205 | n/a | OSS, unverified by me |
| github.com/coleam00/cole-medin-ai-coding (peer-reported) | none found | 111 | n/a | OSS, facts-only |
| github.com/OWOX/models (peer-reported) | Apache-2.0 | 85 | n/a | OSS, unverified by me |
| github.com/0dust/OKFy (peer-reported) | MIT | 62 | n/a | OSS, unverified by me |
| github.com/openknowledge-sh/openknowledge (peer-reported) | Apache-2.0 | 33 | n/a | OSS, unverified by me |
| github.com/xSAVIKx/okf-skills (peer-reported) | Apache-2.0 | 29 | n/a | OSS, unverified by me |
| github.com/jkroepke/okf-crossplane-v2 (peer-reported) | Apache-2.0 | 24 | n/a | OSS, unverified by me |
| github.com/linyiru/awesome-okf (peer-reported) | CC0-1.0 | 7 | n/a | OSS, unverified by me |
| github.com/langchain-ai/mcpdoc | MIT | 1020 | 2026-07-17 | OSS/real-adoption |
| github.com/delucis/starlight-llms-txt | MIT | 107 | 2026-07-21 | OSS |
| github.com/dotenvx/llmstxt | BSD-3-Clause | 146 | 2026-03-05 | OSS |
| github.com/firecrawl/llmstxt-generator | NO LICENSE FOUND | 534 | 2025-06-17 (stale, ~13mo) | OSS, facts-only |
| github.com/krish-adi/llmstxt-site | NO LICENSE FOUND | 225 | 2025-06-15 (stale) | OSS, facts-only |
| github.com/domainaware/parsedmarc | LICENSE — Apache-2.0 | 1270 | 2026-07-28 | 1 (OSS, real adoption) |
| github.com/dmarcguardhq/dmarcguard | Apache-2.0 (gh search field) | 181 | 2026-07-31 | OSS/real-adoption |
| github.com/postalsys/mailauth | LICENSE.txt (NOASSERTION; MIT-style text) | 142 | 2026-05-14 | OSS |
| github.com/Snawoot/postfix-mta-sts-resolver | MIT | 126 | 2025-10-10 | OSS |
| github.com/mjmlio/mjml | MIT | 18177 | 2026-07-22 | 1 (OSS, dominant adoption) |
| github.com/foundation/foundation-emails | MIT | 7791 | 2026-03-13 | OSS/real-adoption |
| github.com/maizzle/maizzle | NO LICENSE FOUND | 2839 | 2026-06-16 | OSS, facts-only |

---

## CONTROLLER VERIFICATION (added by the channel-C sub-orchestrator, 2026-08-01)

Worker 3 flagged the FAQ rich-result removal date as `UNVERIFIED` and recommended handing it to
the web channel. I resolved it directly against the primary source instead (WebFetch on Google
Search Central — no WebSearch budget consumed). **The claim is CONFIRMED and now sits on rung 1.**

1. **FAQ rich results are fully removed, not merely restricted.**
   Source: `https://developers.google.com/search/docs/appearance/structured-data/faqpage`
   (fetched 2026-08-01). The page states the FAQ rich result feature is no longer shown in Google
   Search, per a **May 2026 changelog entry**, with the feature ceasing to appear **starting
   2026-05-07**; a deprecation notice was added 2026-05-08 and the FAQ documentation was removed
   2026-06-15. No site category — including the government/health authority sites that retained it
   under the August 2023 restriction — is exempted. Worker 3's practitioner-sourced "May 7 2026"
   date was **correct**.

2. **Independent corroboration that both FAQ and HowTo are gone.**
   Source: `https://developers.google.com/search/docs/appearance/structured-data/search-gallery`
   (fetched 2026-08-01). Google's current supported-rich-result gallery lists 25 types — Article,
   Breadcrumb, Carousel, Course list, Dataset, Discussion forum, Education Q&A, Employer aggregate
   rating, Event, Image metadata, Job posting, Local business, Math solver, Movie, Organization,
   Product, Profile page, Q&A, Recipe, Review snippet, Software app, Speakable,
   Subscription/paywalled content, Vacation rental, Video. **Neither FAQPage nor HowTo appears.**
   Absence from the current gallery is independent confirmation of both the 2023 HowTo removal and
   the 2026 FAQ removal, from the primary source rather than practitioner inference.

3. **Note the distinction the pack must preserve**: `Q&A` and `Education Q&A` remain supported and
   are *different types* from the removed `FAQPage`. Advice to "add Q&A schema" is not
   automatically stale; advice to "add FAQ schema for rich results" is now simply wrong.

**Why this matters beyond the fact itself.** Between August 2023 and May 2026, "add FAQ schema"
went from standard SEO advice, to restricted-to-gov/health, to producing no rich result at all.
Any pack reference that hardcodes a rich-result list will be wrong within a year. This is direct
evidence for shipping **the check** (consult the current search-gallery, dated) rather than **the
list**, and it is the second staleness specimen this channel produced — the first being the
market-leading competitor teaching OKF v0.1 when the spec had already reached v0.2 (see
`github-competitor-marketingskills.md`).

`UNVERIFIED` still: worker 3's finding that FAQ was *restricted to well-known government and
health authority sites* in **August 2023** rests on four practitioner repos, not Google's own
blog. I attempted `developers.google.com/search/blog/2023/08/howto-faq-changes` and the article
body did not render. The 2023 restriction is well-corroborated across independent authors and is
now moot given full removal, so I did not spend further budget on it.

---

## What I did NOT cover and why

- **Google Search Central primary docs** (rich-result eligibility, current schema requirements) —
  out of my GitHub-scoped mandate; the FAQ/HowTo deprecation dates I found are secondary/
  practitioner-sourced and explicitly flagged UNVERIFIED against Google's own docs — hand to
  mkt-web.
- **RFC 8058 mechanics and Gmail/Yahoo 2024 bulk-sender requirements** — no adequate GitHub repo
  found; primary source is platform docs, not code — hand to mkt-web.
- **Deep-read of AnswerDotAI/llms-txt spec text itself** — explicitly out of scope per instructions
  (sibling worker covers it); I covered issues/discussion only, not the README/spec prose.
  llms.txt directory/spam issues #94-143 were skimmed by title/keyword-filter, not individually
  read in full — 50+ issues, would exceed budget to read each in full; the keyword filter is a
  reasonable but imperfect net (a consumption claim phrased without any of my filter terms would be
  missed).
  - **serpapi/awesome-seo-tools, teles/awesome-seo, Suganthan-Mohanadasan/awesome-seo-tools,
  johnmurch/awesome-seo-scripts** — accepted charter's pre-verified stats as-is, did not re-verify
  or open their contents; these are curated link-lists (indexes), lower marginal value than
  primary/tool repos given budget.
- **Competitor marketing/SEO skill packs surfaced incidentally** (JeffLi1993/seo-audit-skill,
  seo-skills/seo-audit-skill, unifapi-agent/agents, Eronred/aso-skills, borghei/Claude-Skills) —
  named and star-counted but not deep-read; that assessment belongs to mkt-skills.
- **Keyword research / ASO / Amazon-listing tool cluster** — surfaced (respectlytics/respectaso,
  egebese/dataseo-mcp, chukhraiartur/seo-keyword-research-tool) but not deep-read; thin evidence
  they teach anything beyond "wrap a paid API," lower priority than the structured-data/GEO/email
  findings above given time budget.
