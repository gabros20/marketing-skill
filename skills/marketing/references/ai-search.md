# AI search (AEO/GEO)

Purpose: Decide what, if anything, to do about visibility inside AI answer engines —
ChatGPT, Perplexity, Google AI Overviews/AI Mode, Copilot — as distinct from classic SEO, and hold
the platform divergence and the anti-staleness discipline this domain demands more than any other
reference in the pack.

Read when:
- Deciding whether to publish `llms.txt`, block or allow specific AI crawlers, or invest in
  "GEO/AEO" tactics.
- Someone claims a platform requires special AI-visibility optimization, or cites an AI Overview
  coverage/CTR percentage as settled fact.
- Evaluating a vendor's GEO tooling or a competitor pack's AI-search claims.

Skip when:
- The question is classic ranking, structured data, or the FAQ/HowTo removal →
  [seo-strategy](seo-strategy.md).
- The question is what content to write, not how AI engines find it →
  [content-strategy](content-strategy.md).

Inputs:
- The site's current robots.txt and whether AI crawlers are already allowed/blocked.
- Whatever AI-visibility claim or vendor pitch triggered the question — trace it to its
  underlying study before repeating its number.

Produces:
- A crawler-access decision per bot (allow/block/live-fetch-only), a llms.txt/OKF publish
  decision framed by verified payoff, and a dated re-verify note on every volatile claim carried
  forward.

## Contents
- The anti-staleness invariant — read this first
- The platform divergence: Bing vs Google
- The crawler matrix
- llms.txt and OKF: falsified, not folklore-adjacent
- ai.robots.txt: the self-verifying alternative
- The one peer-reviewed GEO anchor — and its limits
- How AI answers actually pick sources
- Citability vs. surfacing
- Validation
- Failure modes and handoff

## The anti-staleness invariant — read this first

This domain moves faster than any other in the pack. AI Overview coverage percentages, crawler
policies, and even which spec version a tool ships against can be stale within months — the
market-leading competitor pack in this space shipped "Open Knowledge Format v0.1" in its own
`SKILL.md` after the spec had already moved to v0.2, a verified, dated instance of exactly this
failure. Read that instance as evidence of how fast this domain moves — any pack, including this
one, will drift the same way without a re-verify habit — not as a criticism of that maintainer.
**Teach the check, not the list.** Every volatile fact below carries its as-of date and
what to re-verify before repeating it. When in doubt, prefer citing the mechanism (a platform
publishes a bot-IP allowlist; a spec has a version file) over a specific number, because the
mechanism outlives the number.

## The platform divergence: Bing vs Google

Do not flatten this into one "AI search optimization" story — the two dominant platforms take
opposite official positions. **Google states no special optimization exists**: per its AI-features
documentation (updated 2025-12-10), *"There are no additional requirements to appear in AI
Overviews or AI Mode, nor other special optimizations necessary."* AI features draw from the same
index via standard indexing eligibility. Search Console blends AI-feature traffic into the "Web"
search type — it cannot be isolated, which is itself a measurement gap worth flagging to
`attribution-and-measurement`. **Bing formally adopted the opposite position**: its guidelines
rewrite (reported 2026-02-27, re-verify against Bing's own webmaster guidelines directly since this
pack's research could not retrieve readable primary text) formally names "Generative Engine Optimization (GEO)"
as an official guideline concept, documents `NOARCHIVE` as blocking Copilot grounding results
specifically, and softens its AI-content stance toward Google's purpose-not-method framing
(targeting large-scale, unreviewed generation, not machine authorship per se). Treat "GEO" as a
platform-specific discipline on Bing/Copilot and an explicitly rejected one on Google — write both,
never one universal answer.

## The crawler matrix

Each provider ships multiple, separately-controllable bots with different purposes — "block AI
bots" is not one setting. Verified against each provider's own docs:

| Provider | Bot | Purpose | robots.txt respected? |
|---|---|---|---|
| OpenAI | GPTBot | Foundation-model training | Yes — disallow opts content out of training |
| OpenAI | OAI-SearchBot | Powers ChatGPT search | Yes for search inclusion; opted-out pages "can still appear as navigational links" |
| OpenAI | ChatGPT-User | Live, user-triggered fetch | **No** — doc states "robots.txt rules may not apply" for a human-requested fetch |
| Anthropic | ClaudeBot | Training-data collection | Yes, independently disallowable |
| Anthropic | Claude-SearchBot | Indexes for Claude's search results | Yes, independently disallowable |
| Anthropic | Claude-User | Live fetch on a user's direct question | Independently controllable; IP-blocking explicitly discouraged as unreliable — use robots.txt |
| Perplexity | PerplexityBot | Search-result surfacing; **explicitly not used for foundation-model training** | Yes |
| Perplexity | Perplexity-User | Live, user-triggered fetch | **No** — doc states it "generally ignores robots.txt" |

Anthropic's docs were last updated **2026-04-07**; OpenAI's and Perplexity's carry no page-level
date at time of research — re-verify all three before relying on the "respected?" column, since a
provider can change this without any deploy on your side. The pattern that generalizes: the
*training* and *indexed-search* bots respect robots.txt; the *live user-fetch* bots generally do
not, because a human explicitly asked for that page in the moment. A robots.txt block reliably
keeps you out of training data and indexed search; it does not reliably prevent a live fetch
someone's chat session specifically requested.

## llms.txt and OKF: falsified, not folklore-adjacent

`llms.txt` is not merely unproven — it is actively falsified by four independent, non-citing
evidence classes, as of 2026-08-01:
1. **The spec's own text** never claims any AI system automatically fetches the file; its stated
   use case is a human explicitly invoking it, and its own verification script asks a site owner
   to fetch and paste the file manually.
2. **Every major provider's own crawler documentation** (OpenAI, Anthropic, Perplexity, Google) is
   silent on consuming it — none list it as an input to training, indexing, or live retrieval.
3. **An SE Ranking study (2026)** found no statistically significant correlation between having an
   `llms.txt` file and AI-citation frequency; removing the feature from a predictive citation model
   *improved* the model's accuracy. Re-verify the sample size before citing it — this pack traced
   it to a secondhand summary, not the primary report.
4. **A 2026 server-log analysis** (publisher not independently confirmed by this pack's sourcing —
   re-verify before citing) found the large majority of `llms.txt` files it observed were never
   fetched by any AI crawler.

The claim this falsifies is not hypothetical folklore floating in the ecosystem — it appears
undefended in a competitor pack itself: `coreyhaines31/marketingskills`' `skills/ai-seo/SKILL.md:85`
asserts that AI systems parse `llms.txt` when present, with no evidence cited for the claim
(verified against the live file 2026-08-01; re-check the line before repeating the citation). Treat
that line as a specimen of the genre's uncited-claim pattern, not as a counter-source to weigh
against the falsification evidence above.

Ship this as: *publishing `llms.txt` is cheap, low-risk, and of unverified payoff* — never as a
recommended AI-visibility tactic, and never with a specific consumption percentage presented as
confirmed. **OKF (Open Knowledge Format)** sits in the same class by the same standard: the
maintainers' own issue tracker states plainly there is *"no telemetry on the consumption of the
corpus"* — a first-party admission that nobody, including the spec's authors, currently measures
whether anything reads it. Verify the current version (it moves) against
`github.com/GoogleCloudPlatform/knowledge-catalog` before citing a version number at all; do not
freeze one.

## ai.robots.txt: the self-verifying alternative

Unlike `llms.txt`, blocking or allowing named AI crawlers by user-agent is **self-verifying** — the
premise requires no trust in an unobserved consumption claim, because user-agents are directly
observable in your own server logs. `ai.robots.txt` (MIT, actively maintained) is a maintained,
well-adopted list of AI crawler user-agents plus a ready-to-use `robots.txt` block. Recommend this
as the credibility-backed AI-crawler action, in contrast to `llms.txt`/OKF publishing, which is
cheap but unverified.

## The one peer-reviewed GEO anchor — and its limits

Exactly one credible peer-reviewed anchor exists for "Generative Engine Optimization" as a
discipline: Aggarwal et al., accepted at **KDD 2024** (arXiv 2311.09735). It benchmarks a
black-box optimization framework against a constructed query set and reports "up to 40%" visibility
improvement in generative-engine responses. Two limits the pack must preserve: the paper's own
authors caveat that *"efficacy... varies across domains, underscoring the need for domain-specific
optimization methods"* — the 40% is a best-case, domain-varying result, not a general expectation —
and the benchmark is scoped to Perplexity-style generative engines specifically, not a universal
claim about every AI answer surface. The vast majority of "GEO/AEO tactics" content circulating in
2026 is not derived from this paper's method; it is vendor content borrowing the paper's
credibility. Cite the paper narrowly (some generative-engine-visibility optimization has been
formally studied) and treat checklist-style "10 GEO tactics" content as folklore unless
independently sourced.

## How AI answers actually pick sources

The one mechanism-level, dated, disclosed-sample finding in this run worth citing directly:
@lilyraynyc (2026-07-31) observed that ChatGPT runs `site:`-scoped fan-out
searches whose target domain depends on query category — Reddit for opinion/consumer queries,
`.gov` domains for legal/YMYL queries (all ~20 legal-space prompts sampled cited only `.gov`
sources), and the single most-established brand's own domain for product/pricing queries. Net
effect: citation concentrates toward Reddit and already-trusted brands, away from smaller sites —
regardless of on-page GEO tactics. Treat the mechanism (category-dependent source-domain targeting)
as the durable lesson; treat the specific N≈20 sample as illustrative, not a benchmark.

## Citability vs. surfacing

The sharpest available distinction between what GEO work can promise and what it cannot, credited
to `aaron-marketing-skills` (Apache-2.0): on-page changes can move **citability** — testable in
minutes, a proxy for whether an engine *could* cite you — but whether an engine actually cites you
*unprompted* is **surfacing**, gated by that engine's crawl/index refresh cycle, week-scale and
confounded by everything else on the page. Do not conflate the two, and do not promise fast
surfacing on the strength of a citability test. This distinction is the pack's answer to the
"citation count" vendor metric problem generally: citation data is easy to make tell a favorable
story, and what a source was cited *for* — agreement, disagreement, a passing mention — matters
more than whether it was cited at all.

## Validation
- [ ] Every AI-visibility recommendation states whether it targets Google (no special
      optimization, per Google's own docs) or Bing/Copilot (formal GEO adoption) — never both
      under one unqualified claim.
- [ ] Any crawler-blocking recommendation names the specific bot and states whether it's a
      training/search bot (robots.txt-respecting) or a live-fetch bot (may not respect it).
- [ ] `llms.txt`/OKF are framed as cheap-and-unverified, never as a confirmed AI-visibility lever.
- [ ] Any GEO percentage carries its source, its as-of date, and (if from the KDD paper) the
      domain-scoping caveat.
- [ ] A volatile claim carried forward from this reference states its own re-verify check, not
      just its number.

## Failure modes and handoff
- The question is classic ranking, structured data, or SEO myths → [seo-strategy](seo-strategy.md).
- The question is content quality/depth rather than machine discoverability →
  [content-strategy](content-strategy.md).
- A claim in this reference is more than a few months old at read time → re-verify against the
  named primary source before repeating it; do not assume the number still holds.
