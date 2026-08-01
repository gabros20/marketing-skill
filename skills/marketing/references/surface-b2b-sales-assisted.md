# Surface: B2B Sales-Assisted

Purpose: State how the marketing jobs reshape when a human sales conversation gates the deal — the
95-5 reality, the marketing/sales handoff, and where B2B-specific evidence runs out.

Read when:
- Deals close through a rep, a demo call, or a procurement process, even if a self-serve trial
  exists alongside it (see [surface-selfserve-saas](surface-selfserve-saas.md)'s "brutal middle"
  for the transition zone between the two).
- Account-based marketing, outbound, or a longer sales cycle is in scope.
- A reader is about to cite a B2B budget-split number (brand vs. activation) and needs the honesty
  ruling before shipping it.

Skip when:
- No sales conversation gates the purchase → [surface-selfserve-saas](surface-selfserve-saas.md).
- The buyer evaluates through docs/API before any conversation happens →
  [surface-developer-tool](surface-developer-tool.md).

Inputs: whichever job from [SKILL.md](../SKILL.md)'s router is in scope, and whether the account
list already exists (ABM requires one) or must be built.

Produces: demand-generation and qualified-lead output framed for a sales handoff, with the
attribution honesty this cycle length requires, and an explicit statement of which B2B numbers are
evidence-backed and which are not.

## Contents

- [The 95-5 reality](#the-95-5-reality)
- [The marketing→sales seam](#the-marketingsales-seam)
- [ABM-lite, honestly](#abm-lite-honestly)
- [Longer cycles change what attribution can answer](#longer-cycles-change-what-attribution-can-answer)
- [The B2B brand/activation split: what is and isn't known](#the-b2b-brandactivation-split-what-is-and-isnt-known)
- [Failure modes](#failure-modes)

## The 95-5 reality

[marketing-science.md](marketing-science.md) carries the full derivation and its disclaimer; the
consequence for this surface is practical. At any given quarter, most of a B2B category is not
actively evaluating a purchase — the heuristic derives from an assumed multi-year replacement cycle,
not a measurement of any specific market. That means most B2B marketing activity is necessarily
**memory-building for a future buying window, not capture of a buyer who is in-market today**, and a
demand-gen program judged purely on this-quarter pipeline will systematically undercount its own
value to the large majority of accounts not yet ready to talk to sales. Size the program's success metric
accordingly: category-entry-point presence and brand recall matter alongside pipeline-this-quarter,
and neither should be reported as if it were the other.

## The marketing→sales seam

Marketing's job on this surface ends at a qualified handoff — a defined signal (fit + intent) that a
named account or contact is ready for a sales conversation, not a name added to a list. Three
adjacent disciplines belong to `sales`, not to this pack, and should be named explicitly rather than
absorbed by default: **revenue operations, sales enablement (battlecards, objection handling,
pricing negotiation guidance), and cold outbound/prospecting.** A pack that blends these into
marketing content is repeating the incumbent genre's most common boundary failure — nearly every
surveyed competitor pack folds prospecting and cold-email into "marketing," and the family's
declared seam is a real differentiator only if it is drawn here explicitly, not assumed. Marketing
supplies the qualified-demand definition and the assets sales pulls from (case studies, competitive
positioning); it does not run the outbound sequence or own the CRM pipeline stage.

## ABM-lite, honestly

Account-based marketing at small scale — a handful of named target accounts, no dedicated ABM
platform — is legitimate practice, but it is craft, not evidence-backed method: no dataset located
in this pack's research tests ABM-lite's effectiveness at low account counts against a control. Use
it as a resourcing decision (concentrate content, outreach, and even paid spend on a short named
list instead of spreading thin) and say so plainly, rather than dressing a resourcing choice up as
a validated tactic.

## Longer cycles change what attribution can answer

A sales-assisted cycle spanning weeks or months breaks the touch-level attribution models built for
short, single-session purchases even more than a self-serve cycle does — by the time a deal closes,
the buyer's research trail spans channels, sessions, and often multiple people at the account, most
of it invisible to any pixel. [attribution-and-measurement.md](attribution-and-measurement.md) ⭐
carries the full argument for why neither platform attribution nor a valid lift test is available to
most builders; on this surface specifically, **self-reported attribution ("how did you hear about
us," asked at the point closest to the sales conversation) becomes proportionally more valuable**,
because it is one of the few signals that survives a multi-month, multi-touch cycle at all. Treat a
self-reported answer as directional and biased, not as ground truth — but on this surface, it is
often the best signal available, not a fallback.

## The B2B brand/activation split: what is and isn't known

Binet & Field's ~60/40 brand-building-to-activation budget split is a **B2C number**, drawn from the
IPA Databank — a self-submitted awards corpus, a structurally
selection-biased sample of agencies entering work they already believe won. A commonly repeated
claim holds that the B2B-filtered split reverses toward activation. **Never ship a specific B2B
split as fact.** Secondary sources repeat the claim, but no primary document was located, and it
does not appear in the LinkedIn B2B Institute's own research library. The honest position, and the
only one this pack ships: 60/40 is a B2C figure with known selection bias in its own source, B2B
differs from it in direction, and the exact ratio is unconfirmed — verify before quoting any
specific number, on either side of the split.

Two related B2B-specific findings do clear the bar and are safe to cite: **category entry points**
(Romaniuk, 2022) — B2B datasets with disclosed sample sizes (business insurance n=606, online-ad
decision-makers n=311, business banking n=609) show each additional CEP linked in memory lowers
defection probability by roughly 5%, holding across 16 of 17 products studied — and **double
jeopardy**, replicated in B2B categories including business banking, business insurance, concrete,
and aviation fuel, though without disclosed sample sizes in the located sources. Both are the
strongest B2B-specific evidence this pack found; the unconfirmed B2B brand/activation split above is
not in the same tier and should never be presented as if it were.

Two competitive-posture and segmentation framings from named practitioners are worth carrying into
this surface's positioning work: Jason Lemkin (@jasonlk, 2026-07-31; see
[positioning-and-messaging.md](positioning-and-messaging.md) for the framing in full) distinguishes
a market where you must actively displace an entrenched competitor from one where the real contest
is for a buyer's discretionary budget — the GTM motion and the sales hire profile should match which
situation is actually in play, not a generic "we're competitive" framing. And
[audience-and-segmentation.md](audience-and-segmentation.md)'s ICP-as-funnel model applies directly
here: channel choice is secondary to whether the funnel reaches and converts the right buyer at
every stage, not just at signature.

## Failure modes

- Judging a demand-gen program purely on this-quarter pipeline when most of the addressable
  category is provably not in-market this quarter — report memory-building contribution alongside
  pipeline, not instead of it.
- Absorbing cold outbound, sales enablement, or revops content into a marketing deliverable instead
  of naming them as `sales`'s and routing there.
- Shipping any specific B2B brand/activation split as settled — it is not; B2B differs from the
  B2C ratio, and the actual split is unconfirmed.
