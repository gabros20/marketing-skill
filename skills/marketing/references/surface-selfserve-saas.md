# Surface: Self-Serve SaaS (Default)

Purpose: State how the marketing jobs reshape when a visitor can try or buy the product without
talking to a human — the **default** surface, because most of this pack's readers build this way.

Read when:
- Anyone can sign up, start a trial, or start using a free tier without a sales conversation.
- No surface has been chosen yet — this is where the router lands by default.
- A benchmark, a PLG statistic, or a "SaaS median" is about to be cited and needs a hygiene check
  before it ships.

Skip when:
- A human sales conversation gates the deal → [surface-b2b-sales-assisted](surface-b2b-sales-assisted.md).
- The buyer is a developer evaluating via docs/API before anyone signs up →
  [surface-developer-tool](surface-developer-tool.md) (the two overlap; developer-tool adds on top
  of this one when the audience is developers specifically).
- There is no audience yet to run a funnel against →
  [surface-zero-audience](surface-zero-audience.md).
- A model is deciding or triggering the marketing action → add
  [surface-agentic](surface-agentic.md) on top.

Inputs: the trial/free-tier mechanics already decided by product, and whichever job from
[SKILL.md](../SKILL.md)'s router is in scope for this request.

Produces: a funnel model with the product itself as the primary conversion asset, a benchmark
citation held to the sampling-hygiene bar below, and an explicit marketing/product handoff point
at signup.

## Contents

- [The funnel inverts: product is the demo](#the-funnel-inverts-product-is-the-demo)
- [The profit-odds stat, and how to cite it](#the-profit-odds-stat-and-how-to-cite-it)
- [Benchmark hygiene: the OpenView gap](#benchmark-hygiene-the-openview-gap)
- [The seam at signup](#the-seam-at-signup)
- [Website as the primary channel](#website-as-the-primary-channel)
- [Job-by-job reshape](#job-by-job-reshape)
- [Failure modes](#failure-modes)

## The funnel inverts: product is the demo

On a sales-assisted motion, marketing's job is to earn a conversation; on self-serve, marketing's
job is to earn a signup, and the *product* takes over persuasion from there. This changes what
"good marketing" produces: not a lead handed to someone else, but a visitor who reaches the
product's own moment of value with as little friction as possible. Every job in this pack reads
differently once the reader accepts that the highest-leverage page on the site is often the
pricing/signup page, not a lead-gen form.

The edge of this surface is a real failure mode, not a hypothetical: Brian Balfour (@bbalfour,
2026-06-04) names a **"brutal middle"** between pure self-serve at the individual-user level and a
fully sales-assisted, forward-deployed motion built to clear enterprise adoption gates — everything
attempted in between the two is structurally difficult. Read that as a warning against half-committing:
a self-serve site trying to also carry enterprise messaging usually serves neither well. If the
product is genuinely moving toward enterprise, that is a deliberate surface change to
[surface-b2b-sales-assisted](surface-b2b-sales-assisted.md), argued explicitly, not a page added to
this one.

## The profit-odds stat, and how to cite it

ProductLed's *State of B2B SaaS 2025* report is cited across the PLG world for a claim in this
shape: companies with self-serve revenue are meaningfully more likely to be profitable than those
without (secondhand citation via @tomxecom, 2025-03-31, citing @wes_bush/ProductLed). Use the
direction — self-serve correlates with profitability — as a legitimate business-case point. Do not
repeat the report's precise percentages as settled fact: the underlying survey's sample size and
methodology are not disclosed in any source this pack located, a secondhand citation is not the
primary report, and a newer edition may already supersede the "2025" dataset. This is
specimen-versus-evidence in miniature — the stat is a specimen of the genre's best available
evidence, not proof; if you need the exact figures, pull them from ProductLed's primary report
yourself and date-stamp them rather than propagating a number of unknown provenance.

## Benchmark hygiene: the OpenView gap

Every "median SaaS company" statistic in circulation traces back, directly or indirectly, to
OpenView's SaaS Benchmarks report — which **wound down in December 2023**. Its 2023 report page is
still live and still gets cited as if current. The tradition continues, but fragmented: Kyle
Poyar's *Growth Unhinged* (with High Alpha and Paddle), ChartMogul's reports, and BVP's Atlas are
the visible successors, and **every one of them is a self-selected convenience sample** — customers
of the reporting vendor, or a newsletter's subscriber base — with no disclosed sampling
methodology. Teach the check, not a list: before citing any "median SaaS company does X," name the
report, its as-of date, and who was in the sample. A benchmark with an unstated population is a
specimen of what one vendor's customers reported, not a population statistic.

## The seam at signup

Marketing's self-serve job ends at the signup or trial start — what happens after is not
marketing's to author:

- **Signup flow, in-product activation, empty states, onboarding checklists** — `design` and
  `frontend` own the experience; marketing writes the requirements and claims that got the visitor
  there, not the flow itself (per the family's code-policy boundary — this pack ships no
  production code).
- **Activation metrics, retention, and experiment readouts on the funnel** — `growth` owns the
  measurement and the experiment; marketing does not run its own funnel experiment and report a
  result as marketing's finding.
- **Trial-to-paid nudges and win-back once someone is a user** — `success` owns onboarding
  education and retention communication; marketing owns the acquisition-side lifecycle (the
  newsletter, the pre-signup nurture) — see [handoff](handoff.md).

## Website as the primary channel

Because the product is the demo, the site itself becomes the highest-leverage marketing surface
rather than one channel among several: pricing-page clarity, comparison pages, and the site's own
search visibility carry proportionally more weight than they would on a sales-assisted motion where
a rep can compensate for a weak page. Concretely: [seo-strategy](seo-strategy.md)'s intent-mapping
matters most on commercial and transactional queries pointed at the site itself;
[landing-pages-and-conversion](landing-pages-and-conversion.md)'s trust/proof requirements apply to
the pricing page as much as any campaign landing page; and [content-strategy](content-strategy.md)'s
comparison and alternative-to content is doing acquisition work a sales team would otherwise do by
hand. Page composition itself stays design's — cite design's surface-website product-narrative question
chain (the 8 beats) by name, never restate a rival sequence.

## Job-by-job reshape

| Job | How self-serve reshapes it |
|---|---|
| [positioning-and-messaging](positioning-and-messaging.md) | Message must work with zero human present to clarify it — the page carries the whole pitch |
| [audience-and-segmentation](audience-and-segmentation.md) | Segment by product-usage signal (free-tier behavior) as much as firmographic data |
| [go-to-market-and-launch](go-to-market-and-launch.md) | Launch success is measurable in signups, not just pipeline created |
| [seo-strategy](seo-strategy.md) / [ai-search](ai-search.md) | Disproportionately load-bearing — often the largest self-serve acquisition channel |
| [content-strategy](content-strategy.md) | Comparison/alternative-to content substitutes for a sales rep's competitive pitch |
| [landing-pages-and-conversion](landing-pages-and-conversion.md) | The pricing/signup page is the conversion event, not a form fill |
| [lifecycle-and-email](lifecycle-and-email.md) | Pre-signup nurture and free-tier upgrade nudges; post-signup activation crosses to `success` |
| [paid-acquisition](paid-acquisition.md) | Paid sends traffic to a self-persuading page — a weak product-led page makes paid look worse than it is |
| [organic-social-and-community](organic-social-and-community.md) | Founder-led distribution often outperforms brand accounts on this surface (practitioner consensus, weakly measured) |
| [partnerships-pr-and-affiliates](partnerships-pr-and-affiliates.md) | Integration marketplaces are a real self-serve acquisition channel, gated by traction (see [surface-zero-audience](surface-zero-audience.md)) |
| [app-store-optimization](app-store-optimization.md) | Applies only if the product itself is a listed app; otherwise not this surface's concern |
| [attribution-and-measurement](attribution-and-measurement.md) ⭐ | Self-reported attribution and UTM discipline carry more weight than on any other surface — the flagship's honest-limits argument applies directly |

## Failure modes

- Citing the ProductLed self-serve/profitability split, or any OpenView-successor benchmark, as a
  settled population fact instead of a self-selected sample with a date on it.
- Building enterprise-facing messaging onto a self-serve site instead of naming the surface change
  explicitly and routing to [surface-b2b-sales-assisted](surface-b2b-sales-assisted.md).
- Treating activation and retention as marketing's to claim credit for, rather than `growth`'s and
  `success`'s per the seam above.
