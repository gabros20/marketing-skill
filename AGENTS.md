# Agent guide — `marketing` (Marketing)

This repository is the released `marketing-skill`: an installable agent skill for positioning a
product and creating, capturing, and attributing market demand for it. The runtime skill lives
under `skills/marketing/`; the repository and Codex plugin use the `-skill` suffix. Read this
before editing.

## Ownership boundary (non-negotiable)

`marketing` positions the product, then creates, captures, and attributes demand across the full
external-demand surface — positioning and messaging, audience and segmentation, go-to-market
strategy and launch, SEO and AI-search visibility, content strategy, landing-page requirements,
email and lifecycle campaigns, paid acquisition, organic social and community, partnerships and
PR, app-store optimization, and attribution and measurement. It writes copy, requirements, briefs,
plans, and measurement specs — **no production code**. It does **not** own:

- the site's code, the JSON-LD, the sitemap, the email template, the tracking pixel → **frontend** /
  **backend** (`marketing` writes the requirement and the copy; it never implements)
- page composition — section order, layout, visual hierarchy, in-product voice → **design**
  (`marketing` supplies what the page must claim and prove; design's beat sequence stays canonical
  there)
- the price, the tier structure, the decoy tier, the LTV/margin model, JTBD **discovery** →
  **product**
- running an experiment and reading its result — A/B tests, sample-size math, funnel and
  activation experiments → **growth** (`marketing` proposes the hypothesis; it never reports a
  growth experiment as its own finding)
- pipeline, CRM stages, revenue operations, sales enablement, cold outbound and prospecting →
  **sales**
- onboarding education, retention communication, in-product activation nudges → **success**
- the analytics pipeline, the warehouse, or the SQL that computes attribution → **data**
  (`marketing` owns the measurement **requirements**, not the implementation)
- auditing a live site for crawlability, rich-result eligibility, performance, or accessibility →
  **quality**
- deploying or hosting anything; whether the release is safe to ship → **operate** / **quality**
- a model's prompts, retrieval, or output evaluation → **ai** (the agentic overlay owns only the
  deterministic envelope around a marketing action, not the model's reasoning)
- the campaign workflow itself — triggers, sequences, cross-system sync → **automation**

`growth`, `sales`, and `success` are shipped packs in this family; name them as installable
siblings when routing work across these seams.

`marketing` consumes upstream artifacts (a JTBD brief from `product`, an NFR budget from
`architecture`) when they exist, works standalone when they don't, recommends siblings for work it
doesn't own, and never silently invokes them.

## Non-negotiable invariants

1. **Grade the claim before you use it.** Every empirical claim carries its evidence tier —
   replicated law, craft, or folklore — and the population it was measured on. Marketing's canon
   mixes decades-replicated law, self-selected award-entry corpora, and disclaimed arithmetic
   heuristics; cite them differently.
2. **Platform-reported is not incremental.** A dashboard number answers "what fired last," never
   "would this have happened anyway." Never report the two as the same fact.
3. **Name the domain boundary, especially when it excludes the reader.** No open-access
   Ehrenberg-Bass dataset covers SaaS or subscription software, and a pre-launch n=1 founder sits
   outside every dataset in both directions. Say so instead of borrowing a panel's confidence.
4. **Date-stamp every volatile fact and ship the check that re-verifies it.** Store limits, spam
   thresholds, crawler policies, supported rich results, and platform guidelines change with no
   deploy on this pack's side.
5. **Specimen vs. evidence.** Name the interest of anyone selling what they measure, including when
   it makes their claim stronger. A vendor aggregate is evidence about a pattern and simultaneously
   a specimen of the genre that sells the service.
6. **Never name a number in order to forbid it.** A figure that failed verification (an ESOV
   coefficient, an unconfirmed B2B brand/activation split) is not repeated with a disclaimer
   attached; state the mechanism and point at the primary source.
7. **Segment by jurisdiction before any send.** A single global list treated uniformly is unlawful
   in at least one consent regime it touches. The consent basis is decided before the copy is
   written.
8. **The mechanism is fine; verify the claim underneath it.** Scarcity, anchoring, framing, and
   social proof are ethical or dark patterns depending only on whether the underlying claim is
   true.
9. **State what could not be verified.** An honest "nobody has measured this, and here is why" is a
   deliverable, not a failure to produce one.
10. **The wedge is adjudication and integration, not discovery — state it that way.** Almost every
    individual fact in this pack exists somewhere else in the marketing-skill ecosystem; what this
    pack adds is grading those facts and connecting them to each other. Never claim novelty for
    something a cited source (Dunford, Sharp, Binet & Field, Hohpe-adjacent GTM literature) already
    teaches — `SOURCES.md` §4 is the exhaustive list of what genuinely is this pack's own
    judgment.

## Required behavior

1. Run `scripts/check-sync` (and `scripts/count-skill-tokens`) before any release; never replace
   the generic gate with domain-only checks.
2. Keep runtime frontmatter to `name` and `description`. Versions/metadata live in
   `.codex-plugin/plugin.json`, `CHANGELOG.md`, tags, and releases — never in `SKILL.md`.
3. Keep `SKILL.md` the direct router: one primary job × one base surface (+ additive zero-audience
   and agentic overlays), plus the "Not this skill" decline table. References are flat, directly
   linked, self-describing, loaded only when their conditions apply.
4. Every reference begins with `Purpose / Read when / Skip when / Inputs / Produces`; add a
   `## Contents` when it exceeds ~100 lines.
5. Every volatile fact (platform limit, spam threshold, retention window, price, penalty, licence)
   carries a verification date and a re-verify pointer. This domain churns without a deploy on this
   pack's side.
6. Keep repository docs, eval fixtures, research, and site assets outside `skills/marketing/`.
7. Release through matching plugin version, changelog entry, tag, and GitHub Release; set the
   GitHub About area (family-style description, canonical site alias as homepage, base + domain
   topics).
8. Attribute quoted sources correctly under the five-clause licence posture in `SOURCES.md` §3:
   quotable-within-caps sources (≤2 quotations, under 25 words, attributed at point of use),
   facts-only sources (re-expressed, nothing lifted), thin-licence-on-thick-IP awareness (a
   compiler's MIT licence never relicenses the book it summarizes), copyleft awareness (concepts
   and file-level citations only, no code vendored), and liveness (archived or dormant sources are
   marked as such where cited).

Do not mark the repository complete because structural lint passes. Activation, traversal, and
output evaluations must show the skill changes agent behavior usefully.
