# Content strategy

Purpose: Decide what content to produce, for whom, and how it earns distribution — and hold the
line against the two failure modes that dominate this domain: producing content nobody
distributes, and scaling content production past the point where it adds value.

Read when:
- Planning what to write, briefing a writer, or setting an editorial cadence.
- Deciding whether and how to scale content production (templated pages, AI-assisted drafting,
  repurposing across formats).
- A rewrite or migration needs to decide which existing copy, keywords, and intents must survive.

Skip when:
- The question is which keywords/intents the site's page set should cover →
  [seo-strategy](seo-strategy.md).
- The question is AI-answer-engine visibility rather than the content itself →
  [ai-search](ai-search.md).
- The question is landing-page composition or persuasion structure →
  [landing-pages-and-conversion](landing-pages-and-conversion.md).

Inputs:
- The keyword-intent map from [seo-strategy](seo-strategy.md), if the content is search-facing.
- The audience/segment this content targets (from
  [audience-and-segmentation](audience-and-segmentation.md)).

Produces:
- A content brief per piece, an editorial cadence stated as an operational commitment, and a
  scale/no-scale decision for any templated or AI-assisted content plan.

## Contents
- Content-market fit and distribution beats production
- The content brief: what it must specify
- Editorial cadence is operations, not strategy
- Information gain vs. scaled-content abuse
- The traffic-collapse convergence — teaching the pattern, not just the number
- Repurposing
- The copy-fidelity seam (design owns the ladder; marketing owns what must survive)
- Named counterpoints: "blog like it's 2005" and the zine model

## Content-market fit and distribution beats production

The old content-marketing playbook — find low-difficulty keywords, publish a fixed cadence,
watch traffic compound over six months — has stopped working reliably, for a stated, checkable
reason: traffic sources fractured across channels, search's share of attention declined, and AI
answer surfaces increasingly resolve the query before anyone clicks through. Ranking no longer
guarantees an outcome if the content doesn't also build something durable — a memorable brand,
a real distribution channel, a reason someone shares it. The strategic consequence: a content
plan is not finished when it lists topics. It must name, per piece, **where this gets
distributed** — an owned channel, a community, a partner, a specific person who will share it —
before production starts. Content without a distribution plan is a bet that search alone will
carry it, and that bet's odds have gotten worse, not better.

## The content brief: what it must specify

A brief is not a topic and a word count. Specify, per piece:
- **Goal and audience** — who this is for and what they should do or believe after reading it.
- **Search intent and target keyword**, if search-facing (from the keyword-intent map) — mismatch
  between the brief's angle and the term's actual intent is the most common cause of a
  well-written piece that still doesn't rank.
- **The information-gain claim** — what this piece says that the top-ranking or most-cited
  existing content does not; a brief with no answer to this question is a brief for a piece that
  duplicates something that already exists.
- **Proof and sourcing** — what evidence, data, or firsthand experience backs the claims (this is
  also the content-side half of `seo-strategy`'s E-E-A-T content requirements — see
  [seo-strategy](seo-strategy.md)).
- **Distribution plan** — the specific channel(s) this piece will be pushed into, not "we'll share
  it on social."

## Editorial cadence is operations, not strategy

A publishing schedule is a commitment to sustain a resourcing and review pipeline, not a
strategic decision in itself — treat "publish twice a week" as an operational capacity question
(who writes, who reviews, who distributes, on what recurring schedule) separate from the strategic
question of what's worth publishing at all. A cadence chosen for its own sake, without a
distribution plan or an information-gain bar behind each piece, produces exactly the scaled,
undifferentiated output the next section warns against.

## Information gain vs. scaled-content abuse

The durable rule for content volume is **information gain, not authorship method**. Google's own
spam policy (last updated 2026-05-15) tests purpose and value, not whether AI was involved:
*"Scaled content abuse is when many pages are generated for the primary purpose of manipulating
search rankings and not helping users."* Generative AI tooling is named as one instrument among
several — the policy nowhere prohibits AI-assisted authorship as such. The checkable question for
any scale decision is not "did a model write this" but "does each page add value a reader
couldn't get from the page next to it." A heuristic that operationalizes this well, from SEO
practitioner @patrickstox (2026-06-16): for a class of content that's easy to template
(competitor-comparison pages, for example), pick a handful and invest real depth in them rather
than templating the full set — "anything you plan to scale that is easy, just stop unless you can
truly add value" is a reasonable working rule, not a measured result. Pair this with the pattern
@Marie_Haynes (2026-07-16) reports observing across her own client sample: pages showing "crawled —
currently not indexed" in Search Console are usually a content-quality problem rather than a
technical one ("quality is usually the culprit") — an early warning signal for content scaled past
its value, not yet a measured industry-wide rate.

## The traffic-collapse convergence — teaching the pattern, not just the number

Two entirely independent evidence classes, produced by people who don't cite each other, point the
same direction on organic-search decline — this convergence pattern is the thing worth teaching,
not either number in isolation. @randfish (2026-06-09) reports a Similarweb mobile+desktop panel
(Jan–Apr 2026) showing a large share of Google searches ending without a click, and publicly
self-corrected the exact figure days later — a methodological-transparency signal worth noting
alongside the number itself. Independently, @yongfook (2026-07-26), founder of a SaaS product,
posted his own site analytics showing Google referral traffic "basically halved this year," with
weak downstream signups, concluding that "just write content" was losing efficacy for his
product — first-party operator data, posted with the bad news included, with no commercial stake
in the claim. Neither source cites the other. When two different evidence classes — a third-party
panel and a single operator's own numbers — converge without coordination, that convergence is
stronger evidence than either alone, and it is a pattern worth recognizing generally, not just in
this one case. The same founder (@yongfook, 2026-07-30) later had to publicly correct amplifiers
who inflated "my referrals are down" into "SaaS is dead" — a reminder to trace
any circulating claim back to what its source actually said before repeating the amplified version.

## Repurposing

One well-briefed piece of content, built with real information gain, is worth adapting across
formats and channels rather than treated as a single-use asset — a long-form piece can seed a
thread, an email, a slide deck, or a short video without re-researching the underlying claim.
Repurposing is a distribution multiplier on content that already earned attention once; it is not
a substitute for the information-gain bar above, and templating repurposed content past the point
where each variant adds something for its specific channel collapses back into scaled-content
territory.

## The copy-fidelity seam (design owns the ladder; marketing owns what must survive)

`design`'s information architecture already ships a three-level copy-fidelity ladder for
re-authoring content during a rebuild — verbatim (faithful port, preserving SEO equity or
contractual IP), preserve-and-lightly-tighten (redesign that keeps the message), and rewrite
(repositioning). Marketing does not restate that ladder; cite it. Marketing's job at the seam is
narrower and specific: **which keywords and search intents must survive the migration, and how you
know they did.** Redirects alone do not carry ranking equity forward — the copy has to carry the
intent, which is exactly what the ladder's verbatim and preserve tiers exist to protect, and what a
rewrite's keyword-preservation clause exists to enforce even when the words themselves change. Feed
this requirement into the migration plan alongside [seo-strategy](seo-strategy.md)'s redirect-and-
equity guidance; don't duplicate the ladder itself.

## Named counterpoints: "blog like it's 2005" and the zine model

Two named practitioners argue a version of the production-still-matters counterpoint worth
carrying alongside the distribution-first framing above, not instead of it. @simonw (2024-08-01)
argues that publishing original long-form content on an owned domain has become rare enough among
developers that doing it *consistently* is itself a durable distribution advantage — "blog like
it's 2005." @b0rk (Julia Evans, 2024-06-03) runs a working counter-model to ad-funded content
marketing entirely: technical "zines," sold directly with no ad spend, growth driven by free
companion content that doubles as its own marketing — a real, disclosed-sales business (1,000+
zine sales at time of the cited post), not a funnel pitch. Both are evidence, not folklore, but both
are single
named practitioners' models, not measured studies — cite them as counterpoints to "distribution
beats production" worth holding in tension, not as a settled resolution.

## Validation
- [ ] Every brief states an information-gain claim, not just a topic.
- [ ] Every piece names a distribution channel before production starts.
- [ ] A scale/template decision states what value each individual page adds, not just the
      template's efficiency.
- [ ] Any zero-click or traffic-decline statistic cited names its source and as-of date; if two
      sources converge, both are named.
- [ ] A migration content plan states which keywords/intents must survive and cites, not repeats,
      design's copy-fidelity ladder.

## Failure modes and handoff
- The question is which keywords/intents to target at the site level, not what a specific piece
  says → [seo-strategy](seo-strategy.md).
- The question is machine discoverability (crawlers, llms.txt, GEO) rather than the content itself
  → [ai-search](ai-search.md).
- The question is how a landing page composes proof and persuasion, not editorial content →
  [landing-pages-and-conversion](landing-pages-and-conversion.md).
- The rebuild/migration question is about the fidelity ladder's mechanics themselves, not which
  keywords must survive → `design`'s information architecture, not this reference.
