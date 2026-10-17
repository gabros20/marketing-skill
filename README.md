# marketing — Marketing

**Family hub:** [digital-product-skill.vercel.app](https://digital-product-skill.vercel.app) — the 15-skill Digital Product family and its composer.

Position the product, then create, capture, and attribute demand for it: what it is and who it's
for, in words a buyer believes; the launch; being found in search and in AI answers; the page that
converts the visit; the email that arrives; the ad budget, and whether it did anything.

It spans positioning and messaging, audience and segmentation, go-to-market strategy and launch
planning, SEO and AI-search visibility, content strategy, landing-page requirements and copy,
email and lifecycle campaigns, paid ads, organic social and community, partnerships and PR,
app-store optimization, and attribution and measurement — across every place demand actually
happens: Google Search and the AI answer engines (ChatGPT, Perplexity, Copilot, AI Overviews),
Gmail/Yahoo inboxes and their deliverability rules, Meta and Google ad platforms, the App Store and
Google Play, launch platforms like Product Hunt, and integration marketplaces. Those platforms are
named once, as scope — this pack teaches the decisions, not a vendor's button layout.

What makes it different: `marketing`'s canon mixes decades-replicated empirical law with heuristics
repeated until they sounded measured, and almost nothing separates the two anywhere else in the
genre — so every claim here carries an evidence tier (law, craft, or folklore, stated as such), and
every volatile platform fact (a store limit, a spam threshold, a penalty amount) ships with an
as-of date and the primary source that re-verifies it. The flagship answers the question the rest
of the field routes around: **what actually happened, and what can you honestly know at your
scale?** Often the honest answer is *less than the dashboard claims* — and saying so, with a method
matched to a solo builder's real data and budget rather than an enterprise analytics team's, is the
job. Family-boundary detail is at the bottom of this document, not the top.

## Install

```bash
npx skills add gabros20/marketing-skill -g -y
```

Or use it in Codex with `$marketing`. Manual copy also works — see
[docs/installation.md](docs/installation.md) for every client target.

## Examples

```text
$marketing write the positioning for my SaaS product against three named competitors

$marketing plan a Product Hunt launch and tell me what will get the post penalized

$marketing our AI Overviews traffic collapsed last month and I don't know why

$marketing brief a landing page for our new pricing tier — claims, proof, objections

$marketing our welcome email is landing in spam and I don't know which record is wrong

$marketing did last month's ad spend actually cause any of these signups, or would they have
converted anyway
```

## What it does

A **faceted router**: pick one primary job × one base surface, then stack an additive overlay when
it applies.

**Primary jobs** — **attribution-and-measurement ⭐** · positioning-and-messaging ·
audience-and-segmentation · marketing-science · go-to-market-and-launch · seo-strategy · ai-search ·
content-strategy · landing-pages-and-conversion · lifecycle-and-email · paid-acquisition ·
organic-social-and-community · partnerships-pr-and-affiliates · app-store-optimization.

**Surfaces** — self-serve SaaS (default) · B2B sales-assisted · developer tool ·
**zero audience (additive)** · **agentic (additive)**.

## Route by job

| User intent | Reads | Contribution |
|---|---|---|
| **Judge whether a channel, campaign or launch actually worked — and what your scale can honestly support ⭐** | [attribution-and-measurement](skills/marketing/references/attribution-and-measurement.md) | **Flagship.** The honesty hierarchy of measurement methods; why platform-reported ≠ incremental; why almost nobody can run a valid lift test; the n=1 answer — UTM discipline, self-reported attribution, geo-split lift, pre-committed decision rules |
| Say what the product is, who it's for, and why it beats the alternatives | [positioning-and-messaging](skills/marketing/references/positioning-and-messaging.md) | The front-door job. Dunford's five components as craft, never as science; category and competitive framing; the messaging ladder; copywriting frameworks; the staged repositioning rollout |
| Decide who to market to, or challenge a persona that names no buying situation | [audience-and-segmentation](skills/marketing/references/audience-and-segmentation.md) | Category entry points over persona theater; the JTBD seam with `product`; ICP as a funnel not a checkbox; the consent-regime checkpoint before any segment is emailed |
| Grade a "brand science" claim, a named statistic, or a budget-split rule of thumb | [marketing-science](skills/marketing/references/marketing-science.md) | The adjudication layer. The evidence ladder; the laws with their domain boundaries; the 95-5 derivation and its disclaimer; no SaaS dataset exists, and n=1 is outside all of them |
| Choose a go-to-market motion, or plan and run a launch | [go-to-market-and-launch](skills/marketing/references/go-to-market-and-launch.md) | Four motions and the brutal middle; launch ≠ release ≠ deploy; major/minor/silent launch tiers; Product Hunt's enforceable rules; owned/rented/borrowed channels |
| Decide what to rank for, or check an SEO claim against what Google actually documents | [seo-strategy](skills/marketing/references/seo-strategy.md) | Keyword-intent mapping; topic clusters; four myths Google's own dated docs kill; the structured-data requirement marketing specifies and `frontend` implements |
| Decide what to do about visibility inside ChatGPT, Perplexity, AI Overviews or Copilot | [ai-search](skills/marketing/references/ai-search.md) | The platform divergence (Bing formally adopts GEO; Google formally rejects it); the crawler matrix per bot; llms.txt falsified by four independent evidence classes |
| Decide what content to produce, brief a writer, or set an editorial cadence | [content-strategy](skills/marketing/references/content-strategy.md) | Distribution beats production; what a brief must specify, including its information-gain claim; scaled-content abuse is purpose-tested, not authorship-tested |
| Brief a landing, campaign or pricing page — the claims, the proof, the objections | [landing-pages-and-conversion](skills/marketing/references/landing-pages-and-conversion.md) | The requirements brief marketing owns and `design` composes against; Attention Ratio and the one-goal doctrine; the ethics/dark-patterns table |
| Get marketing email delivered, and decide whether a list is lawful to send to | [lifecycle-and-email](skills/marketing/references/lifecycle-and-email.md) | Deliverability as engineering first; SPF/DKIM/DMARC; the four consent regimes and the jurisdiction decision rule; where lifecycle hands off to `success` |
| Decide whether to spend on ads, which format, and when it's premature | [paid-acquisition](skills/marketing/references/paid-acquisition.md) | What ATT changed and didn't; black-box campaign types with zero independent incrementality evidence; when paid is premature |
| Choose between a brand account, a founder account, or an owned community | [organic-social-and-community](skills/marketing/references/organic-social-and-community.md) | Brand-account reach is dying and founders aren't, stated at its real evidence tier; the Orbit model with its maintenance status; an explicit list of what stays folklore |
| Earn distribution through someone else's audience — press, marketplaces, affiliates, co-marketing | [partnerships-pr-and-affiliates](skills/marketing/references/partnerships-pr-and-affiliates.md) | The site-reputation-abuse warning that kills a class of partnership pitch; marketplace listings and traction gates; FTC disclosure |
| Get a mobile app found and installed — listing copy, keywords, store experiments | [app-store-optimization](skills/marketing/references/app-store-optimization.md) | Also the pack's mobile-surface authority. Hard character limits per store; two keyword-stuffing enforcement philosophies; per-market localization |

## Surfaces

| Surface | Reads | When |
|---|---|---|
| Self-serve SaaS — anyone can sign up or trial without talking to a human | [surface-selfserve-saas](skills/marketing/references/surface-selfserve-saas.md) | **Default** |
| B2B sales-assisted — a rep, demo, or procurement gates the deal | [surface-b2b-sales-assisted](skills/marketing/references/surface-b2b-sales-assisted.md) | A human conversation closes it |
| Developer tool — the buyer evaluates through docs, an API, or source | [surface-developer-tool](skills/marketing/references/surface-developer-tool.md) | The audience is developers |
| **Zero audience (additive overlay)** | [surface-zero-audience](skills/marketing/references/surface-zero-audience.md) | **Stacks on a base surface.** No list, no following, no customers yet |
| **Agentic (additive overlay)** | [surface-agentic](skills/marketing/references/surface-agentic.md) | **Stacks on a base surface.** A model authors at scale, or decides a spend or send |

Plus [handoff](skills/marketing/references/handoff.md) — the seam map to the rest of the family, for
when a sibling pack will act on what marketing produced, or marketing needs an artifact a sibling
owns.

## What this pack does differently

**It grades its own evidence, in a genre that mostly doesn't.** Across eleven cloned competitor
packs (~900+ files) surveyed during research, the Ehrenberg-Bass canon appears in exactly one file
— never connected to attribution mechanics — and no ESOV coefficient or ESOV-attribution link
appears at all. This pack makes evidence-grading an operating default
([marketing-science.md](skills/marketing/references/marketing-science.md)) and connects brand
science to measurement rather than shipping them as unrelated chapters.

**It says what a solo builder cannot measure, where the rest of the field is silent about it.** A
valid incrementality lift test needs statistical power almost nobody has; marketing-mix modeling
needs two-plus years of weekly multi-channel data by its own open-source vendors' documentation;
platform-reported conversions answer "what fired," never "what was incremental." No open-access
Ehrenberg-Bass dataset covers SaaS, and a pre-launch founder sits outside every brand-science
dataset in both directions. Nobody else in the surveyed genre states the ceiling this plainly.

**The flagship is a method, not a term.** [attribution-and-measurement.md](skills/marketing/references/attribution-and-measurement.md)
ranks every measurement option by what it can actually support, walks a real published gap between
naive and experimental ad-ROI estimates (eBay's field experiment measured −63% ROI against a naive
observational estimate of over 4,100%), and lands on the n=1 answer: UTM discipline, self-reported
attribution, geo-split lift where geography allows, and a decision rule written down *before* the
result exists — not after.

**Every volatile fact carries an as-of date and a re-verify check, never a permanent-sounding
number.** Store limits, spam thresholds, crawler policies, rich-result support, and penalty amounts
change with no deploy on your side. A figure that failed verification (an ESOV coefficient, a
locatable B2B brand/activation split) is never repeated with a disclaimer attached — the pack names
the mechanism and points at the primary source instead.

**Seams are declared, not assumed.** All eleven surveyed competitor packs blend marketing with
sales, growth, success, or frontend implementation; one ships literal UI components. This pack
draws the line explicitly in [handoff.md](skills/marketing/references/handoff.md) and the AARRR
note in [SKILL.md](skills/marketing/SKILL.md) — acquisition is this pack's letter; activation
through referral belong to siblings that don't exist yet as much as ones that do.

## Outputs

A marketing artifact carries: the audience and the buying situation it addresses · the one goal ·
every claim with a named proof source · the evidence tier and domain boundary of any law or
statistic it cites · an as-of date and re-verify pointer on every volatile platform fact · the
consent basis, if anything gets sent · the measurement method and what that method cannot answer ·
and the sibling packs it hands to or depends on.

Copy is delivered as copy, requirements as requirements — never as production code.

## Digital Product lifecycle

`marketing` sits at the **Launch** stage of the Digital Product Skills family: the peer that turns
what got shaped, built, verified, and shipped into market demand. It does not own the site's code
or the tracking pixel (`frontend`/`backend`), page composition or in-product voice (`design`),
pricing tiers or JTBD discovery (`product`), the analytics pipeline or the warehouse (`data`),
running an experiment and reading its result (`growth`), pipeline and cold outbound (`sales`),
onboarding and retention (`success`), a model's
prompts or evals (`ai`), the campaign workflow's triggers and sync mechanics (`automation`),
auditing a live site (`quality`), or deploying anything (`operate`). It consumes upstream artifacts
— a JTBD brief from `product`, an NFR budget from `architecture` — when they're supplied, works
standalone when they aren't, and hands off a compact artifact, typically to `design` and `frontend`
to build the page, `data` to instrument the measurement, or `growth` to test a hypothesis it
proposed.

## The family

| Skill | Stage | Repository |
|---|---|---|
| `product` | Shape | [gabros20/product-skill](https://github.com/gabros20/product-skill) |
| `design` | Shape | [gabros20/design-skill](https://github.com/gabros20/design-skill) |
| `architecture` | Shape | [gabros20/architecture-skill](https://github.com/gabros20/architecture-skill) |
| `frontend` | Build | [gabros20/frontend-skill](https://github.com/gabros20/frontend-skill) |
| `backend` | Build | [gabros20/backend-skill](https://github.com/gabros20/backend-skill) |
| `data` | Build | [gabros20/data-skill](https://github.com/gabros20/data-skill) |
| `ai` | Build | [gabros20/ai-skill](https://github.com/gabros20/ai-skill) |
| `automation` | Build | [gabros20/automation-skill](https://github.com/gabros20/automation-skill) |
| `quality` | Verify | [gabros20/quality-skill](https://github.com/gabros20/quality-skill) |
| `operate` | Run | [gabros20/operate-skill](https://github.com/gabros20/operate-skill) |
| `marketing` | Launch | this repository |

## Reference and asset library

20 references under `skills/marketing/references/` (14 primary jobs, 3 base surfaces, 2 additive
overlays, 1 handoff contract) and 5 fillable assets under `skills/marketing/assets/`:

- **Assets:** `positioning-canvas.md` · `landing-page-requirements-brief.md` ·
  `launch-checklist.md` · `attribution-requirements-spec.md` · `email-compliance-checklist.md`

## Repository layout

```text
skills/marketing/   runtime skill (SKILL.md + 20 references + 5 assets + agents/openai.yaml)
evals/               activation · traversal · output · compression-ablation fixtures
research/            multi-channel research corpora + build-gate synthesis
docs/                installation, usage, and recipes
```

## Documentation & releases

- [docs/installation.md](docs/installation.md) · [docs/usage.md](docs/usage.md) ·
  [docs/recipes.md](docs/recipes.md)
- [CHANGELOG.md](CHANGELOG.md) — release history (current: v0.1.0)
- [SOURCES.md](skills/marketing/SOURCES.md) — source attribution and license posture, including the
  five-clause licensing rule this skill follows and the numbers it refuses to ship
- [CONTRIBUTING.md](CONTRIBUTING.md) — local validation (`scripts/check-sync`, `scripts/count-skill-tokens`)

## License

MIT — see [LICENSE](LICENSE).
