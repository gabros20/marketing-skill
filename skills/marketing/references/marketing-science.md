# Marketing Science

Purpose: Grade every brand-growth and buying-behavior claim by its evidence tier and state exactly
where that evidence stops applying — then use the graded laws to discipline downstream measurement
and channel decisions instead of leaving them as decoration. This file is the pack's adjudication
layer; every other reference that invokes "the laws" cites this file rather than re-deriving tiers.

Read when:
- A positioning, segmentation, channel, or budget-split claim invokes "brand science," Byron Sharp,
  Ehrenberg-Bass, or a named statistic (95-5, 60/40, ESOV) and its evidence tier is unstated.
- A measurement or targeting recommendation (heavy-buyer focus, loyalty-program ROI, an attribution
  read) needs to be checked against penetration-vs-loyalty or category entry points before shipping.
- The audience is zero-audience, pre-launch, or n=1 — the domain-boundary section applies directly.

Skip when:
- The question is Dunford's positioning method or category framing as craft →
  [positioning-and-messaging.md](positioning-and-messaging.md).
- The question is which segment or ICP stage to target → [audience-and-segmentation.md](audience-and-segmentation.md).
- The question is a specific attribution method's own validity (MMM floors, lift-test power) →
  attribution-and-measurement.md.

Inputs: the specific claim or number in question, its cited source, and the population it is being
applied to (FMCG panel, B2B replication, or zero-audience founder).
Produces: an evidence-tier verdict for the claim, its domain boundary stated explicitly, and — where
relevant — the connection between the law and the measurement or channel decision it should discipline.

## Contents
- The evidence ladder
- The laws, tiered
- The 95-5 rule: a disclaimed derivation, not a measurement
- Binet & Field and the B2B split: an awards-corpus, not a panel
- Category entry points: the best-evidenced B2B finding
- The Thomaz dispute
- The boundary that matters most: no SaaS dataset, n=1 outside all data
- The connection duty (the wedge)
- Validation
- Failure modes and handoff

## The evidence ladder

Three tiers; most claims in this domain sit on a lower rung than their citation pattern implies:

- **(a) Well-evidenced in its original domain** — decades of replication on FMCG/CPG repeat-purchase
  consumer panels, many countries, peer-reviewed.
- **(b) Plausibly transferable to B2B, thinner** — real institute replications exist (banking,
  insurance, concrete, aviation fuel), direction of effect holds, but smaller and younger than (a); **no
  B2B SaaS/subscription dataset has been located in any open-access institute publication**.
- **(c) Folklore extrapolation** — applying (a) or (b) to zero-audience, pre-launch, n=1. Every dataset
  behind these laws requires an existing, measurable buyer population with repeat-purchase behavior —
  the opposite of a pre-launch founder.

## The laws, tiered

| Law | Tier | What it says | Domain boundary |
|---|---|---|---|
| **Double jeopardy** (Ehrenberg 1959; Ehrenberg, Goodhardt & Barwise 1990, *J. Marketing*) | (a) peer-reviewed, decades-replicated | Smaller brands have fewer buyers who are also less loyal — a compounding penalty; loyalty programs can't buy their way out of it. | (b) replicates in B2B banking, insurance, concrete, aviation fuel (Romaniuk, Dawes & Faghidno, May 2021) — no sample sizes disclosed, no SaaS category tested. |
| **Duplication of purchase** (Ehrenberg & Uncles 1990; Romaniuk 2021 B2B extension) | (a)/(b) | Buyers split purchases across competitors roughly in proportion to competitor size — you don't just lose share to your nearest rival. | Tested against 3 B2B datasets (US business insurance 2019, UK business banking 2019, 1990 aviation-fuel data); the institute frames these as "observational patterns," not controlled experiments. |
| **Mental availability / distinctive assets** (Sharp 2010, *How Brands Grow*) | (a) underlying panel findings; the book's own framing is contested | Growth comes from being easily brought to mind in buying situations, built via distinctive assets (colors, logos, sonic cues), more than from differentiated messaging. | Cite the underlying institute reports, not the book's rhetoric uncritically — see the Thomaz dispute below. No SaaS panel exists. |
| **Physical availability** | (b) | Ease of finding and buying explains growth alongside mental availability; in B2B, "being where B2B buying happens" (Nenycz-Thiel & Romaniuk, Nov 2025). | Recent report; full text and sample size not independently confirmed — directionally sound, not a disclosed dataset. |
| **Pareto ~60/20, not 80/20** (Sharp & Romaniuk 2007) | (a), secondary-sourced | The heaviest 20% of buyers deliver roughly half of sales, not 80% — light and infrequent buyers matter far more than 80/20 folklore implies. | Original report and SSRN mirror unreachable in this research pass (403s) — treat ~60/20 as secondary, not primary-verified. |

## The 95-5 rule: a disclaimed derivation, not a measurement

The single most-quoted number in B2B marketing content is not a measurement. John Dawes (Ehrenberg-
Bass, commissioned by the LinkedIn B2B Institute, May 2021) *derives* it arithmetically: assume an
average ~5-year replacement cycle for a category → roughly 20% of buyers are in-market in any given
year → roughly **5% in-market in any given quarter**. The source discloses no dataset, category list,
or sample size — only illustrative examples (payroll software, carpet, law firms). Dawes states this
himself: "The 95% figure is not meant to be a precise rule ... using it as a heuristic to get the idea
across" (Dawes, 2021, elided within his own sentence).

What survives the disclaimer is the *idea*: most of a category is not actively shopping at any one
time, so advertising's job is mostly to build memory for a future purchase, not to capture a current
one. What must not survive is presenting "95%" as a precise, universal constant — and the quarterly
window is not optional: strip it and "95% aren't buying" becomes a different, false claim.

## Binet & Field and the B2B split: an awards-corpus, not a panel

Binet & Field's ~60% brand-building / 40% activation split (*The Long and the Short of It*, IPA) comes
from the **IPA Databank**: a self-submitted awards corpus entered into the UK IPA Effectiveness
Awards. That is a structurally different evidence base from an Ehrenberg-Bass panel —
entrants are self-selecting agencies and brands who believe they won, skewed toward larger advertisers
with agency relationships and self-reported outcomes. Treat 60/40 as (a)-adjacent *within its own
corpus*, not as panel-grade evidence, and as a **B2C** number.

A B2B-filtered cut of the same databank is widely reported to reverse the ratio toward activation
(LinkedIn B2B Institute + Binet & Field, 2019), but **no primary PDF was located** for any specific
split, and none appears in the LinkedIn B2B Institute's own public research library — secondary
sources agree with each other, but agreement among secondary sources is not a primary source. Teach
this as *B2B differs from the B2C 60/40 ratio — verify the actual split before quoting one*, never
as a specific settled number. The ESOV → share-growth coefficient has the same problem one level worse: the
circulating figures conflict with each other and no primary source resolves which, if any, is
correct — **no ESOV coefficient exists at a primary source, so never ship one**, not even hedged.

## Category entry points: the best-evidenced B2B finding

Of everything surveyed, CEPs are the strongest B2B-specific evidence found — real disclosed sample
sizes, a named third-party co-sponsor, and a consistent effect direction:

| Dataset | n | Product/category count | Effect |
|---|---|---|---|
| US business insurance | 606 | 17 products | Each additional CEP linked to a brand in memory lowers defection probability ~5%, holding across 16 of 17 products |
| US online-advertising decision-makers | 311 | — | Consistent direction |
| UK business banking | 609 | — | Consistent direction |

(Romaniuk, "Category Entry Points in a Business-to-Business (B2B) World," Ehrenberg-Bass Institute,
July 2022.) In her own words: "for each additional CEP a customer has linked to the brand in memory,
probability of defection lowers by 5%" — with an honest caveat in the same report that the predictive
scale is imperfect. CEPs are the rigorous alternative to persona theater: segment by the buying
situations and cues that trigger retrieval, not by demographic profile — see [audience-and-
segmentation.md](audience-and-segmentation.md). Still no SaaS/subscription dataset among them.

## The Thomaz dispute

Present, don't settle. Felipe Thomaz (Saïd Business School, Oxford) argues, on the record, that Sharp
built mental/physical availability by stripping differentiation out of Keller's 1993 brand-equity
model, that the terms are Sharp's own popularizations rather than established marketing-science
vocabulary, and that using Ehrenberg's originally static-market work to prescribe growth is a category
error. Quoted directly: "by removing differentiation, he's broken branding" (Thomaz, via
Contagious.com). Opposing it: the institute's own peer-reviewed evidence for "differentiation is
overrated" (Romaniuk, Sharp & Ehrenberg 2007, *Australasian Marketing Journal*) is authored by the
claim's own originators, in a journal that is not top-tier internationally — not independent
replication. Neither side settles it; presenting Sharp's laws as uncontested is wrong, and dismissing
them as unevidenced folklore is equally wrong.

## The boundary that matters most: no SaaS dataset, n=1 outside all data

State this explicitly wherever these laws get applied to this pack's default reader: **no open-access
Ehrenberg-Bass dataset — FMCG or any B2B replication — includes a SaaS or subscription-software
category**, and **the zero-audience, pre-launch, n=1 founder sits outside every dataset surveyed, in
both directions** — there is no evidence for applying these laws at that stage, and none against. That
is not a gap to paper over with a confident extrapolation; it is the honest answer, and it is the
answer nobody else in the genre gives.

## The connection duty (the wedge)

Across eleven surveyed marketing skill packs (~900+ files), the Ehrenberg-Bass canon appears in
exactly **one** file — a roleplay advisory-board persona dossier — and ESOV and the 95-5 rule appear
in **zero**. Attribution content, by contrast, is well distributed (60+ hits across independent packs).
**No pack anywhere connects the two**: nobody checks a measurement or targeting conclusion against
penetration-vs-loyalty or category entry points before shipping it. That connection is this pack's job:

- A loyalty-program ROI read that looks strong in isolation should be checked against double
  jeopardy — loyalty gains rarely offset a small brand's structural penetration deficit.
- A heavy-buyer or "best customer" targeting plan should be checked against the ~60/20 Pareto finding
  — the lighter 80% of buyers still deliver roughly half of volume, so excluding them caps growth.
- A channel or message plan built entirely around one positioning claim should be checked against CEPs
  — growth comes from linking to many buying-situation cues, not owning one.
- Any of the above, run on a zero-audience or pre-launch product, gets the boundary in the section
  above stated plainly instead of borrowed confidence from a panel that doesn't include it.

## Validation
- [ ] Every cited law or number carries its tier (a/b/c) and, if (b) or thinner, its domain boundary.
- [ ] 95-5 is never presented as a measured constant; the derivation and quarterly window travel with it.
- [ ] No B2B split is asserted as a bare fact — 60/40 is labeled B2C; a B2B figure is labeled "verify."
- [ ] The Thomaz dispute is presented, not resolved, wherever mental/physical availability is invoked
      as settled science.
- [ ] Any claim applied to a zero-audience or pre-launch reader states the no-SaaS-dataset, n=1-outside-
      all-data boundary rather than extrapolating silently.

## Failure modes and handoff
- A claim cites "brand science" with no tier and no boundary — stop and grade it against this file
  before it ships anywhere else in the pack.
- A measurement or channel recommendation is made without checking it against the law it touches —
  route back through the connection duty above before finalizing.
- The question turns out to be about applying positioning craft (Dunford) rather than grading an
  empirical claim → [positioning-and-messaging.md](positioning-and-messaging.md), which is craft, not
  science, and should never borrow this file's evidence tiers for itself.
- The question turns out to be about which attribution method to trust, not which brand law applies →
  attribution-and-measurement.md.
