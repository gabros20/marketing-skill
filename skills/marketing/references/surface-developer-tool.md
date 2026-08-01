# Surface: Developer Tool

Purpose: State how the marketing jobs reshape when the buyer is a developer who evaluates through
docs and code before any marketing message lands — the surface with the strongest primary-source
backing in this pack, because the audience's own public artifacts are the evidence.

Read when:
- The user or buyer is a developer, and the evaluation path runs through documentation, a free
  tier/API, open source, or a changelog before (or instead of) a sales conversation.
- A launch is being planned on Hacker News, Product Hunt, or a technical changelog rather than a
  conventional press cycle.
- DevRel work is being scoped and needs to be distinguished from developer marketing.

Skip when:
- The buyer is not evaluating technically → the base surface is
  [surface-selfserve-saas](surface-selfserve-saas.md) or
  [surface-b2b-sales-assisted](surface-b2b-sales-assisted.md) instead.

Inputs: whichever job from [SKILL.md](../SKILL.md)'s router is in scope, and whether a public
engineering/marketing handbook already exists for this product (many developer-tool companies
publish one).

Produces: channel and content choices anchored to the ecosystem's own primary sources rather than
generic content-marketing advice, and an explicit DevRel/marketing boundary.

## Contents

- [Why this surface gets its own evidence base](#why-this-surface-gets-its-own-evidence-base)
- [The channels are the product's own artifacts](#the-channels-are-the-products-own-artifacts)
- [Company marketing handbooks as primary sources](#company-marketing-handbooks-as-primary-sources)
- [The B2D channel ecosystem](#the-b2d-channel-ecosystem)
- [DevRel is not developer marketing](#devrel-is-not-developer-marketing)
- [Launch surfaces differ here](#launch-surfaces-differ-here)
- [SEO shifts toward documentation](#seo-shifts-toward-documentation)
- [Failure modes](#failure-modes)

## Why this surface gets its own evidence base

Developers are the one audience segment where distrust of marketing is itself well-documented
practitioner consensus, not folklore — which makes this surface unusual: instead of teaching around
the folklore, the pack can point at primary artifacts the ecosystem already produces. Simon Willison
(@simonw, 2024-08-01) frames the underlying opportunity plainly: *"you can have an outsized impact on
the world by being one of the few people who DO publish fresh information online"* —
publishing original long-form content on an owned domain is rare enough among developers now that
doing it consistently is itself a durable distribution advantage, not a growth hack.

## The channels are the product's own artifacts

Docs, tutorials, open-source code, and community presence do not support developer marketing on this
surface — they *are* the channels. The clearest documented case is Julia Evans (@b0rk,
2024-06-03/2024-08-13): a developer-education business built entirely on free technical "zines" and
companion comics posted publicly, funding a paid product with **1,000+ disclosed sales** and no ad
spend — *"I know $12 USD is a lot of money for some people, so to celebrate 1000+ sales, I'm giving
away 1000 PDF copies."* This is one of the few specimens in this pack's whole research run with a
disclosed, checkable number behind a zero-paid-spend developer-audience claim; treat it as a strong
specimen, not a population-level result — n=1 practitioner, self-reported.

## Company marketing handbooks as primary sources

Several developer-tool companies publish their own marketing playbooks publicly — GitLab, PostHog,
and Resend each maintain a public handbook or public-facing marketing documentation. These function
as primary-source material this pack can point to directly, a resource type that does not exist for
most other surfaces (there is no equivalent public "how we do enterprise marketing" handbook from a
sales-led company at comparable depth). Use them as concrete worked examples of developer-tool
positioning and content practice, cited to the company's own handbook, not to a curator's summary of
it.

## The B2D channel ecosystem

Two independently maintained lists map developer-first distribution as its own discipline:
`ronakganatra/awesome-developer-marketing` links the GitLab/PostHog/Resend handbooks above and maps
the sub-discipline's channel landscape; `fmerian/awesome-developer-first-channels` independently
confirms developer-first distribution as a self-sustaining channel ecosystem distinct from consumer
or enterprise B2B channels. Both carry no license (all rights reserved) — their content is used here
as re-expressed fact, not verbatim, per the pack's licensing rulings. Together they corroborate the
`developer-tool` surface as evidence-backed rather than an assumed category.

## DevRel is not developer marketing

The two disciplines are adjacent, not identical, and conflating them is a common failure this pack
should not repeat. Prathkum (@Prathkum, 2022-01-31) states the distinction directly: *"DevRel is not
about selling products to developers... it's all about building a good relationship with
developers."* DevRel is relationship, content, and enablement-first and does not report to a
pipeline number the way demand generation does; developer marketing is the demand-facing counterpart
that does. See [organic-social-and-community.md](organic-social-and-community.md) for where DevRel's
community and content work is covered in full — this file only draws the boundary; it does not
re-teach the discipline.

## Launch surfaces differ here

A developer-tool launch runs through Hacker News, Product Hunt, and the product's own changelog more
than a conventional press cycle. Product Hunt's rules apply the same way they do on every surface
(see [go-to-market-and-launch.md](go-to-market-and-launch.md) for the full ruleset) — visits and
comments may be solicited, upvotes may never be; the platform sanctions relaunching for a genuine new
iteration rather than treating launch as a single unrepeatable moment, and names no best weekday.
Hacker News and a public changelog have no equivalent codified guideline set; both reward genuine
technical substance and penalize promotional framing more visibly than other channels do, per the
practitioner consensus this pack found (no primary HN policy document exists to cite for this the way
one exists for Product Hunt).

## SEO shifts toward documentation

On this surface, search intent skews toward documentation pages, comparison pages ("X vs Y"), and
integration guides rather than top-of-funnel blog content — a developer evaluating a tool is
frequently searching for how it works or how it compares, not what a category is. See
[seo-strategy.md](seo-strategy.md) for the intent taxonomy this maps onto; the reshape here is which
intent classes dominate the query mix, not a different SEO mechanism.

## Failure modes

- Treating DevRel headcount or activity as a marketing pipeline lever and measuring it on pipeline
  contributed — that conflation is the exact boundary this file exists to prevent.
- Quoting `ronakganatra/awesome-developer-marketing` or `fmerian/awesome-developer-first-channels`
  verbatim — both carry no license; re-express what they map, cite them as the source of the
  landscape, not as a text to lift from.
- Running a Product Hunt or Hacker News launch with a press-release register instead of the
  technical-substance framing this audience visibly rewards.
