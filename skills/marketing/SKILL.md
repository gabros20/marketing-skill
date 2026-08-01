---
name: marketing
description: >-
  Position the product and create, capture, and attribute market demand — positioning and
  messaging, launch and go-to-market, SEO and AI-search visibility, content, landing-page
  requirements, email and lifecycle campaigns, paid ads, organic social and community,
  partnerships and PR, app-store listings (ASO), and attribution: what actually happened and what
  you can know at your scale. Not the site's code (→ frontend), page composition (→ design),
  pricing tiers (→ product), funnel experiments (→ growth), sales pipeline or cold outbound
  (→ sales), onboarding and retention (→ success).
---

# Marketing

## Mission and boundary

**Position the product, then create, capture, and attribute demand for it.** What the product is
and who it's for, in words a buyer believes. The launch. Being found — in search, AI answers, an
app store, someone else's newsletter. The page that converts the visit. The email that arrives. The
ad budget, and whether it did anything.

The scope is the full external-demand surface — positioning, audience, launch, SEO, AI search,
content, landing pages, email and lifecycle, paid, social and community, partnerships and PR, app
store optimization, and measurement — across every place demand actually happens: search and AI
answer engines, inboxes, ad platforms, app stores, launch platforms, integration marketplaces.
Those platforms are the terrain, never the subject — the techniques are the same; the surfaces say
how each one reshapes.

**What makes this pack different: it grades its own evidence.** Marketing's canon mixes
decades-replicated empirical law with heuristics repeated until they sounded measured. So every
claim here carries its tier and the point where it stops applying, every
volatile platform fact carries an as-of date and the check that re-verifies it, and the flagship
job — [attribution-and-measurement](references/attribution-and-measurement.md) ⭐ — answers the
question the rest of the field avoids: *what actually happened, and what can you honestly know at
your scale?* Often it's "less than the dashboard claims" — and saying so is the job.

**The default reader is one person building a digital product**, with a small budget and no
analytics team — not a simplification of enterprise practice, but a change in the answers: platform
attribution over-claims by construction, a valid lift test needs scale almost nobody has, and
marketing-mix modelling needs years of weekly data. What remains at that scale is real, and this
pack teaches it instead of pretending the enterprise toolkit scales down.

`marketing` writes copy, requirements, briefs, plans, and measurement specs — **no production
code**; see "Not this skill" below.

Operate independently when invoked alone. When compatible upstream artifacts are provided, use them
without silently overriding established decisions. Recommend adjacent skills when useful; do not
invoke them automatically unless the user explicitly requested a composition workflow.

## Route before acting

1. Identify the **one primary job** and the **one base surface**. Read one of each. **If the request
   names no business model, do not stall** — assume the default surface (self-serve SaaS) and say
   which you assumed. Many questions (what to claim, which consent regime applies) are
   surface-independent.
2. Add **additive overlays on top of** a base surface, never instead of one:
   [surface-zero-audience](references/surface-zero-audience.md) when there is no list, following,
   or customer base yet, and [surface-agentic](references/surface-agentic.md) when a model authors
   or decides a marketing action at scale.
3. Read [marketing-science](references/marketing-science.md) whenever a claim invokes "brand
   science" or a named statistic — it grades the claim so the other references need not re-derive it.
4. **Re-verify anything volatile before using it.** Store limits, spam thresholds, crawler policies,
   rich-result support, platform guidelines and penalty amounts all move with no notice to you.
5. Read every selected reference completely before producing the affected artifact.
6. Do not load unrelated references.

### Jobs

| User intent | Read | Contribution |
|---|---|---|
| **Judge whether a channel, campaign or launch actually worked — and what your scale can honestly support ⭐** | [attribution-and-measurement](references/attribution-and-measurement.md) | **Flagship.** The honesty hierarchy of measurement methods; why platform-reported ≠ incremental; why almost nobody can run a valid lift test; the n=1 answer — UTM discipline, self-reported attribution, geo-split lift, pre-committed decision rules |
| Say what the product is, who it's for, and why it beats the alternatives | [positioning-and-messaging](references/positioning-and-messaging.md) | The front-door job. Dunford's five components **as craft, never as science**; category and competitive framing; the messaging ladder; copywriting frameworks; the staged repositioning rollout and defensibility hierarchy |
| Decide who to market to, or challenge a persona that names no buying situation | [audience-and-segmentation](references/audience-and-segmentation.md) | Category entry points over persona theater; the JTBD seam with `product`; ICP as a funnel not a checkbox; light-buyer reality; the consent-regime checkpoint before any segment is emailed |
| Grade a "brand science" claim, a named statistic, or a budget-split rule of thumb | [marketing-science](references/marketing-science.md) | The adjudication layer. The evidence ladder; the laws with their domain boundaries; the 95-5 derivation and its disclaimer; the Thomaz dispute presented, not settled; **no SaaS dataset exists, and n=1 is outside all of them** |
| Choose a go-to-market motion, or plan and run a launch | [go-to-market-and-launch](references/go-to-market-and-launch.md) | Four motions and the brutal middle; **launch ≠ release ≠ deploy**; major/minor/silent launch tiers; Product Hunt's enforceable rules (never solicit upvotes); the failed-launch pattern; owned/rented/borrowed channels |
| Decide what to rank for, or check an SEO claim against what Google actually documents | [seo-strategy](references/seo-strategy.md) | Keyword-intent mapping; topic clusters; **four myths Google's own dated docs kill**; the structured-data requirement marketing specifies and `frontend` implements; the FAQ/HowTo removal as a staleness parable; zero-click reality |
| Decide what to do about visibility inside ChatGPT, Perplexity, AI Overviews or Copilot | [ai-search](references/ai-search.md) | The platform divergence (Bing formally adopts GEO; Google formally rejects it); the crawler matrix per bot; **llms.txt falsified by four independent evidence classes**; the one peer-reviewed GEO anchor and its limits; citability vs. surfacing |
| Decide what content to produce, brief a writer, or set an editorial cadence | [content-strategy](references/content-strategy.md) | Distribution beats production; what a brief must specify, including its information-gain claim; scaled-content abuse is purpose-tested, not authorship-tested; the traffic-collapse convergence; the copy-fidelity seam with `design` |
| Brief a landing, campaign or pricing page — the claims, the proof, the objections | [landing-pages-and-conversion](references/landing-pages-and-conversion.md) | The requirements brief marketing owns and `design` composes against; Attention Ratio and the one-goal doctrine; trust and proof devices with placement as the lever; message-match; **the ethics/dark-patterns table** |
| Get marketing email delivered, and decide whether a list is lawful to send to | [lifecycle-and-email](references/lifecycle-and-email.md) | Deliverability as engineering first; SPF/DKIM/DMARC and DMARC's supersession; provider divergence; **the four consent regimes and the jurisdiction decision rule**; stream separation; where lifecycle hands off to `success` |
| Decide whether to spend on ads, which format, and when it's premature | [paid-acquisition](references/paid-acquisition.md) | What ATT changed and didn't; black-box campaign types — documented controls, undocumented effect, **zero independent incrementality evidence**; when paid is premature; the format taxonomy; the standard-vs-incremental death-spiral rule |
| Choose between a brand account, a founder account, or an owned community | [organic-social-and-community](references/organic-social-and-community.md) | Brand-account reach is dying and founders aren't — stated at its real evidence tier; owned vs. rented; the Orbit model with its maintenance status; DevRel is not developer marketing; **an explicit list of what stays folklore here** |
| Earn distribution through someone else's audience — press, marketplaces, affiliates, co-marketing | [partnerships-pr-and-affiliates](references/partnerships-pr-and-affiliates.md) | The site-reputation-abuse warning that kills a class of partnership pitch; marketplace listings and their traction gates; affiliate mechanics; FTC disclosure; the liveness check before naming any journalist-query service |
| Get a mobile app found and installed — listing copy, keywords, store experiments | [app-store-optimization](references/app-store-optimization.md) | Also the pack's **mobile-surface authority**. Hard character limits per store; two different keyword-stuffing enforcement philosophies; Custom Product Pages ≠ Product Page Optimization; per-market localization; what stays unverified |
| Diagnose a decline — traffic, rankings, conversions or inbox placement fell and the cause isn't known | [seo-strategy](references/seo-strategy.md) → then the affected channel reference | Intent-and-coverage diagnosis before volume; the traffic-collapse convergence; what the available data cannot establish |

### Surfaces

| Surface | Read | When |
|---|---|---|
| Self-serve SaaS — anyone can sign up or trial without talking to a human | [surface-selfserve-saas](references/surface-selfserve-saas.md) | **Default** |
| B2B sales-assisted — a rep, demo, or procurement gates the deal | [surface-b2b-sales-assisted](references/surface-b2b-sales-assisted.md) | A human conversation closes it |
| Developer tool — the buyer evaluates through docs, an API, or source | [surface-developer-tool](references/surface-developer-tool.md) | The audience is developers |
| **Zero audience (additive overlay)** | [surface-zero-audience](references/surface-zero-audience.md) | **Stacks on a base surface.** No list, no following, no customers yet |
| **Agentic (additive overlay)** | [surface-agentic](references/surface-agentic.md) | **Stacks on a base surface.** A model authors at scale, or decides a spend or send |

Emitting for downstream work → [handoff](references/handoff.md).

## Not this skill

| Ask | Goes to |
|---|---|
| Production code of any kind — the site, the JSON-LD, the sitemap, the email template, the tracking pixel | `frontend` · `backend`. Marketing writes the requirement and the copy; it does not implement |
| **Page composition** — section order, layout, visual hierarchy, the landing page's beat sequence, in-product voice | `design`. Marketing supplies what the page must claim and prove; design's surface-website product-narrative question chain (the 8 beats) stays canonical there |
| The price, the tier structure, the decoy tier, the LTV/margin model, JTBD **discovery** | `product` |
| **Running an experiment and reading its result** — A/B tests, sample-size math, funnel and activation experiments | `growth`. Marketing proposes the hypothesis; it never reports a growth experiment as its own finding |
| Pipeline, CRM stages, revenue operations, sales enablement, **cold outbound and prospecting** | `sales`. The genre routinely absorbs these into "marketing"; this pack does not |
| Onboarding education, retention communication, in-product activation nudges | `success` |
| The analytics pipeline, the warehouse, or the SQL that computes attribution | `data`. Marketing owns the measurement **requirements**, not the implementation |
| Auditing a live site for crawlability, rich-result eligibility, performance, or accessibility | `quality` |
| Deploying or hosting anything; whether the release is safe to ship | `operate` · `quality` |
| A model's prompts, retrieval, or output evaluation | `ai`. The agentic overlay owns only the deterministic envelope around a marketing action |
| Building the campaign workflow itself — triggers, sequences, cross-system sync | `automation` |

**The AARRR note.** A practitioner who knows acquisition → activation → retention → referral →
revenue will notice this pack covers acquisition and stops — a deliberate seam, not a gap.
**AARRR spans three packs**: `marketing` owns acquisition, `growth` owns the experiments that
improve conversion across the funnel, `success` owns retention. Read the boundaries as where
responsibility for each letter moved, not as territory this pack failed to claim.

## Universal invariants

- **Grade the claim before you use it.** Every empirical claim carries its evidence tier and the
  population it was measured on. Marketing's canon mixes replicated law, self-selected award-entry
  corpora, and arithmetic heuristics with a disclaimer attached — cite them differently.
- **Name the domain boundary, especially when it excludes your reader.** No open-access
  Ehrenberg-Bass dataset covers SaaS or subscription software, and a pre-launch n=1 founder sits
  outside every dataset in both directions — no evidence for, none against. Say so instead of
  borrowing a panel's confidence.
- **Platform-reported is not incremental.** A dashboard number answers "what fired last," never
  "would this have happened anyway." Never let the two be reported as the same fact.
- **Date-stamp every volatile fact and ship the check that re-verifies it** — teach the check, not
  the list. Store limits, spam thresholds, crawler policies, supported rich results and platform
  guidelines change with no deploy on your side.
- **Specimen vs. evidence.** Name the interest of anyone selling what they measure, including when
  it makes their claim stronger. A vendor aggregate is evidence about a pattern and simultaneously a
  specimen of the genre that sells the service.
- **Never name a number in order to forbid it.** A figure that failed verification is not repeated
  with a disclaimer attached; state the mechanism and point at the primary source.
- **Segment by jurisdiction before any send.** A single global list treated uniformly is unlawful in
  at least one regime it touches. The consent basis is decided before the copy is written.
- **The mechanism is fine; verify the claim underneath it.** Scarcity, anchoring, framing and social
  proof are ethical or dark patterns depending only on whether the underlying claim is true.
- **State what you could not verify.** An honest "nobody has measured this, and here is why" is a
  deliverable, not a failure to produce one.

## Core workflow

1. Establish the one primary job and the base surface; add an overlay only if it applies. State any
   surface you assumed.
2. Name the audience by its buying situation, and the one thing this work should make happen.
3. Grade every claim, statistic, or "best practice" you rely on, and state where its evidence stops.
4. Re-verify every volatile platform fact against its primary source; carry the as-of date with it.
5. Produce the artifact — brief, plan, copy, or requirements spec — with a named proof source behind
   every claim.
6. Decide how you will know whether it worked, honestly at your actual scale, and **write the
   decision rule down before the result exists**.
7. Check every persuasion mechanism, and any agent-generated output, against the ethics table.
8. Emit a compact handoff when downstream work is expected.

## Artifact contract

A marketing artifact is incomplete unless it carries: the audience and the buying situation it
addresses · the one goal · every claim with a named proof source · the evidence tier and domain
boundary of any law or statistic it cites · an as-of date and re-verify pointer on every volatile
platform fact · the consent basis, if anything gets sent · the measurement method and what that
method **cannot** answer · and the sibling packs it hands to or depends on.

Copy is delivered as copy. Requirements are delivered as requirements. Neither is delivered as
production code.

## Completion and handoff

Before completion:

- Confirm every requested artifact exists and every claim in it has a proof source — "trust us" is
  not a finished line.
- Confirm no volatile fact travels without its date and its re-verify check.
- Distinguish what was verified against a live primary source from what is assumed, folklore, or one
  practitioner's self-reported result.
- State plainly what this work will and will not be able to prove.
- When downstream work is expected, provide artifact paths, owners, residual risk, and a recommended
  next skill — typically `design` and `frontend` to build the page, `data` to instrument the
  measurement, or `growth` to test a hypothesis marketing proposed.

## Resources

The routing tables above link all 20 references. Assets are compact, fill-in templates:
[positioning-canvas](assets/positioning-canvas.md) ·
[landing-page-requirements-brief](assets/landing-page-requirements-brief.md) ·
[launch-checklist](assets/launch-checklist.md) ·
[attribution-requirements-spec](assets/attribution-requirements-spec.md) ·
[email-compliance-checklist](assets/email-compliance-checklist.md)

Attribution, licences, and what this pack claims for itself — [SOURCES.md](SOURCES.md)
