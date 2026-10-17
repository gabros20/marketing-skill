# Handoff

Purpose: Map every seam between `marketing` and the rest of the Digital Product Skills family from
marketing's side — what marketing produces for each sibling, what it consumes, and where a
practitioner's mental model (AARRR, most visibly) crosses boundaries this family draws
deliberately.

Read when:
- Downstream or upstream work is expected: a sibling pack will act on something marketing produced,
  or marketing needs an artifact a sibling pack owns.
- A request looks like it belongs partly to marketing and partly to another pack, and the boundary
  needs to be named rather than assumed.
- Someone reads this pack's job list and expects to see acquisition, activation, retention, and
  referral all inside it, per the AARRR model — see the note below before treating that as a gap.

Skip when:
- The request is fully inside one job with no downstream consumer in view — do the work in the
  relevant job reference and stop; a seam map nobody needs is clutter.

Inputs: whichever job produced the artifact in question, and which sibling pack (if any) is named
as the next consumer.

Produces: a named handoff — artifact, owner, and the specific boundary this pack does not cross —
not a restatement of the artifact itself.

## Contents

- [The seam map](#the-seam-map)
- [The AARRR note](#the-aarrr-note)
- [Failure modes](#failure-modes)

## The seam map

| Sibling | What marketing hands it | What marketing consumes from it | The line marketing does not cross |
|---|---|---|---|
| `product` | The narrative input for a launch — what shipped, for whom, why it matters — mirroring how `operate`'s release-and-rollout resolves the same split row | JTBD discovery output (marketing uses it for message-market fit); pricing tiers and structure; the decoy in a pricing page | Marketing does not set price or tier structure — it writes the page that presents them |
| `design` | Landing-page requirements (goal, claims, proof, objections), copy, E-E-A-T content requirements, structured-data requirements | Page composition, design's surface-website product-narrative question chain — the 8 beats — cited by name and never restated here, the copy-fidelity ladder, in-product voice/tone (design owns it; marketing owns the external voice) | Marketing does not compose the page or design the interaction; it supplies what the page must claim and prove |
| `frontend` | Structured-data requirement + entity map, with minimal illustrative JSON-LD examples per [seo-strategy.md](seo-strategy.md), and metadata/redirect/URL-structure requirements for SEO | Implemented site code, the actual metadata as shipped | Marketing writes no production code — see [surface-agentic.md](surface-agentic.md) and the pack's standing code policy: examples only, nothing production |
| `backend` | Rendering and crawlability requirements where they affect SEO (server-rendered vs. client-rendered content, sitemap generation needs) | Sitemaps, rendering behavior as actually implemented | Marketing does not implement rendering or sitemap generation |
| `data` | Attribution and measurement requirements — what needs to be tracked and why, per [attribution-and-measurement.md](attribution-and-measurement.md) ⭐ | The certified pipeline, the actual data the requirements produced | Marketing does not build or certify the pipeline; it writes the requirements spec |
| `growth` | A qualified hypothesis for a funnel experiment (e.g., "this landing page variant should convert better because...") | Experiment readouts and results | Marketing runs no experiment and calls it a result — a funnel change marketing wants tested is `growth`'s experiment to design and report on, not marketing's finding to claim |
| `sales` | Qualified demand — a defined fit-plus-intent signal on a named account or contact, per [surface-b2b-sales-assisted.md](surface-b2b-sales-assisted.md); the consent basis for any outbound AI-voice call list, per [lifecycle-and-email.md](lifecycle-and-email.md#outbound-ai-voice-calls-are-automated-calls) "Outbound AI-voice calls are automated calls" | Pipeline and close-rate signal that feeds positioning and message iteration | Revenue operations, sales enablement (battlecards, objection handling), and cold outbound/prospecting are `sales`'s, not marketing's — named explicitly in [surface-b2b-sales-assisted.md](surface-b2b-sales-assisted.md), because the incumbent genre routinely blends these into marketing and the family's seam is only real if stated |
| `success` | Acquisition-side lifecycle content (pre-signup nurture, the newsletter) and the narrative marketing used to acquire the user, for onboarding continuity | Retention and churn signal that feeds messaging and CEP work | Onboarding education and retention communication are `success`'s; marketing's lifecycle job stops at acquisition, per [surface-selfserve-saas.md](surface-selfserve-saas.md)'s seam-at-signup section |
| `quality` | Nothing produced for direct consumption — marketing's pages are a subject of quality's work, not an input to it | Crawl, performance, and accessibility audit results on marketing's own pages | Marketing does not audit its own pages for these properties — see [seo-strategy.md](seo-strategy.md) for where technical SEO crosses into `quality`'s and `frontend`'s territory |
| `operate` | The launch itself — `operate`'s own release-and-rollout boundary states deploy ≠ release ≠ launch, and assigns launch to marketing | Hosting and deploy status that gates when a launch can actually happen | Marketing does not deploy or host anything; it decides when and how what's already deployed gets announced |
| `automation` | Campaign workflow requirements (a sequence, a trigger condition) when a marketing process needs mechanical automation | The mechanics of a built workflow, including its reliability envelope if the workflow is agent-run (see [surface-agentic.md](surface-agentic.md)) | Marketing does not build or operate the automation itself |
| `ai` | Nothing produced for direct consumption on the cognition side | Agent and model choices when marketing content is agent-generated, and the guardrail split [surface-agentic.md](surface-agentic.md) draws against `ai`'s ground | Marketing does not own prompt design, retrieval, or evaluation of a model's own output — only the deterministic envelope around a marketing action a model takes |

## The AARRR note

AARRR spans three packs in this family, acquisition here, funnel-wide experiments in `growth`,
retention in `success` — see `SKILL.md`'s AARRR note for the full framing.

## Failure modes

- Treating a `growth` experiment result as marketing's own finding because marketing proposed the
  hypothesis — the experiment design and readout are `growth`'s regardless of who suggested testing
  it.
- Writing onboarding or retention copy inside a marketing deliverable instead of routing it to
  `success`, because the acquisition-to-activation line feels continuous from the writer's side.
- Reading this pack's absence of `activation`, `retention`, or `referral` jobs as an oversight
  instead of the AARRR seam stated above.
