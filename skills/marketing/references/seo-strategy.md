# SEO strategy

Purpose: Decide what to rank for and why, structure the site's topical coverage so it earns
rankings, and separate what Google's own documentation actually says from the folklore that
still circulates as received wisdom.

Read when:
- Choosing keyword targets, mapping search intent to pages, or planning topic clusters and
  internal linking.
- Someone repeats an SEO claim ("Google penalizes AI content," "E-E-A-T is four equal factors")
  that needs checking against what Google's docs actually say.
- Specifying a structured-data requirement, planning a site migration, or evaluating a
  partnership/content-hub idea that touches domain authority.

Skip when:
- The task is writing the JSON-LD, sitemap, or robots.txt itself → `frontend` implements what
  this reference specifies.
- The task is auditing a live site's crawlability, rich-result eligibility, or Core Web
  Vitals → `quality`.
- The question is specifically about AI-answer-engine visibility (AEO/GEO, crawler blocking,
  llms.txt) → [ai-search](ai-search.md).
- The question is what a piece of content should say or how often to publish →
  [content-strategy](content-strategy.md).

Inputs:
- The product's category and the buyer's vocabulary for it (from
  [audience-and-segmentation](audience-and-segmentation.md)).
- Existing site IA and, for a rebuild/migration, the current ranking URL set.

Produces:
- A keyword-intent map by funnel stage, a topic-cluster plan, and a structured-data requirement
  (types + entity fields) handed to `frontend` for implementation and `quality` for verification.

## Contents
- Family ownership: SEO is a seam, not a solo job
- Search intent and keyword-intent mapping
- Topic clusters and internal linking as strategy
- Four myths Google's own docs kill — with dates
- Structured data: marketing specifies, frontend implements, quality verifies
- The FAQ/HowTo removal — a staleness parable
- Site-reputation-abuse: a partnership warning
- Zero-click reality
- Validation
- Failure modes and handoff

## Family ownership: SEO is a seam, not a solo job

Marketing owns strategy and outcome only: which intents to target, how pages cluster, what a
migration must preserve, what a page's structured-data must claim. It does not own the code.
`frontend` implements the JSON-LD, sitemap, and semantic markup this reference specifies;
`quality` audits crawlability and rich-result eligibility against it; `design` owns navigation
IA, heading hierarchy inside a page, and page composition. Marketing's interest in navigation is
narrow: that the nav actually exposes the pages SEO strategy requires — practice-area pages for a
law firm, service-area pages for a contractor, a resource hub for a content-first vertical — not
nav item counts or label doctrine, which is design's territory. State the requirement; don't
restate design's craft.

## Search intent and keyword-intent mapping

Map every target term to one of four intents — informational (learn), navigational (find a known
destination), commercial-investigation (compare before buying), transactional (buy/sign-up now)
— before assigning it a page. Intent mismatch is the most common self-inflicted SEO failure:
targeting a transactional keyword with an educational blog post, or an informational keyword with
a pricing page, ranks poorly because Google's own systems infer intent from the query and reward
pages that satisfy it. Build the map as one row per keyword: intent, funnel stage, existing page
(if any), gap. This map is the input to both the topic-cluster plan below and to
[content-strategy](content-strategy.md)'s brief template — content-strategy owns what a given
page says; this reference owns which intents the site's page set must cover.

## Topic clusters and internal linking as strategy

Structure topical coverage as a **pillar page** (broad, comprehensive, targets the head term) with
**cluster pages** (narrow, targets long-tail variants and sub-questions) linking back to the
pillar and to each other. The strategic decision is which pillars to build and which clusters
justify a dedicated page versus a section of an existing one — a decision driven by the
keyword-intent map, not by how much content a template can generate. Internal linking is the
mechanism that tells both crawlers and readers which pages are related and how important each one
is; treat link placement as part of the content brief (see
[content-strategy](content-strategy.md)), not an afterthought added after publish.

## Four myths Google's own docs kill — with dates

Practitioner content repeats these four claims routinely. Google's own documentation, dated,
settles all four:

1. **"Google penalizes content for being AI-generated."** False as stated. The spam-policies page
   (last updated **2026-05-15**) tests purpose, not authorship: *"Scaled content abuse is when
   many pages are generated for the primary purpose of manipulating search rankings and not
   helping users"* — generative AI is named as one instrument among several (including non-AI
   scraping), not a blanket ban on machine authorship. Re-verify: the spam-policies page's own
   "last updated" date, before citing this as current.
2. **"There's a separate helpful-content algorithm to satisfy."** False since March 2024. Per the
   ranking-systems guide (last updated **2025-12-10**): *"In March 2024, it evolved and became
   part of our core ranking systems."* The helpful-content system was folded into core ranking,
   not retained standalone — there is nothing separate left to optimize for.
3. **"A low score from a human Search Quality Rater will tank your rankings."** False. Raters do
   not score individual pages for live ranking; their aggregate feedback judges whether ranking
   experiments are working. From the Search Quality Rater Guidelines PDF itself (**General
   Guidelines, 2025-09-11, 182pp**): *"No single rating can directly impact how a particular
   webpage, website, or result appears in Google Search."*
4. **"E-E-A-T is four co-equal ranking factors."** False. The same rater guidelines PDF: *"The most
   important member at the center of the E-E-A-T family is Trust."* Experience, Expertise, and
   Authoritativeness are framed as evidence *for* assessing Trust, and the required bar scales
   with stakes (YMYL content held to a higher standard than low-stakes entertainment). Treat
   E-E-A-T as **content requirements marketing specifies** — what the page must demonstrate and
   who must be named as its author — not a four-item checklist and not a ranking algorithm with a
   documented weight. Author-card layout is `design`'s craft; auditing whether a page actually
   demonstrates the claimed expertise is `quality`'s.

## Structured data: marketing specifies, frontend implements, quality verifies

Neither `frontend` nor `quality`'s shipped references cover this — it is a genuine gap this pack
fills. Marketing's deliverable is a **requirement + entity map**: which schema.org types a page
must emit and which visible fields each type's properties must match (an Organization type's
`name` and `logo` must match what's rendered, not a different brand name in the markup). Cite
[schema.org](https://schema.org) (Apache-2.0, the vocabulary's own source of truth) for type
existence; do not invent types. `frontend` writes the JSON-LD; `quality` verifies both that the
markup validates and that Google's current rich-result gallery actually rewards the type used
(see below — this list moves). Marketing must not drift into "how to add a script tag" — that is
implementation, not a requirement.

A minimal example illustrates the requirement's shape without becoming the implementation — two
schema.org types (schema.org, as-of 2026-08-01), kept tiny on purpose:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Acme Inc.",
  "url": "https://acme.example",
  "logo": "https://acme.example/logo.png"
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Acme Cut Deploy Time in Half",
  "author": { "@type": "Person", "name": "Jane Doe" },
  "datePublished": "2026-07-01"
}
```

`Article` is used here deliberately, not `FAQPage` — see below for why. The entity-map requirement
is the deliverable; these two blocks exist only to make the requirement concrete, not as a template
to hand `frontend` verbatim — the real markup must match the page's actual rendered fields.

## The FAQ/HowTo removal — a staleness parable

Between August 2023 and May 2026, FAQ structured-data advice went from standard, to restricted, to
worthless — a live demonstration of why this reference teaches the check, not a frozen list.
**HowTo rich results were removed in 2023.** FAQ rich results were first restricted to well-known
government and health-authority sites in August 2023, then **fully removed for every site
category**, effective **2026-05-07** (Google's FAQPage documentation itself was deleted
2026-06-15). As of this writing, Google's current supported rich-result gallery does not list
`FAQPage` or `HowTo` among its supported types. `Q&A` and `Education Q&A` are different types that remain supported —
"add Q&A schema" is not automatically stale advice; "add FAQ schema for a rich result" now is.
**Re-verify before shipping any structured-data recommendation**: consult Google's current
search-gallery page and date the check, rather than trusting any list — including this one — as
permanent. This is the pack's sharpest anti-staleness example (see
[ai-search](ai-search.md) for the invariant stated in full).

## Site-reputation-abuse: a partnership warning

Google's spam policy defines site-reputation abuse as third-party content published on a host
mainly to exploit that host's already-earned ranking signals — the "parasite SEO" pattern of
renting a trusted domain's authority. The policy dates to March 2024, enforcement began May 2024,
and scope expanded twice that year; reported casualties include major publishers' coupon and
affiliate subdirectories losing visibility or being deindexed. Google has not published a named
list of penalized sites — treat specific-company claims as reported, not Google-confirmed. The
strategic implication reaches beyond SEO: renting your domain's authority to a third-party
operator, or hosting someone else's content mainly for the ranking lift, is now a documented,
enforced anti-pattern. Flag this before greenlighting any "sponsored content hub" idea in
[partnerships-pr-and-affiliates](partnerships-pr-and-affiliates.md).

## Zero-click reality

The strongest evidence on AI Overviews' effect on clicks is Pew Research Center's observed-browsing
panel (~900 US adults, fielded March 2025): a traditional result was clicked on **8%** of searches
that showed an AI summary versus **15%** when none was present, and only **1%** of visits clicked
a link inside the summary itself. Cite Pew as the primary figure. Vendor studies (Ahrefs, Semrush,
Similarweb) point the same direction but are not mutually reconcilable — each defines
"AI-triggered query" differently and uses narrower or less-disclosed samples — treat their
specific percentages as directional corroboration, never as a citable number in place of Pew's.

## Validation
- [ ] Every target keyword is tagged with an intent and mapped to one page, not scattered across
      duplicates.
- [ ] The topic-cluster plan names pillars and their clusters, not just a keyword list.
- [ ] Any claim about what Google penalizes or rewards traces to a dated Google Search Central
      citation, not a repeated practitioner assumption.
- [ ] The structured-data requirement names types and entity fields; it does not contain markup.
- [ ] Any rich-result recommendation was checked against Google's *current* search-gallery page,
      dated at the time of the check.
- [ ] A migration plan states which keywords and intents must survive, not just that redirects
      exist (redirects alone do not carry ranking equity — the copy has to carry the intent; see
      [content-strategy](content-strategy.md)'s copy-fidelity seam).

## Failure modes and handoff
- The question is AI-answer-engine visibility specifically (crawler blocking, llms.txt, GEO
  tactics) → [ai-search](ai-search.md).
- The question is what a page's content should say → [content-strategy](content-strategy.md).
- The requirement is written but needs code → `frontend` implements; `quality` verifies rich-result
  eligibility and crawlability against it.
- The question is nav item counts, labels, or hierarchy rather than which pages must exist →
  `design`'s information architecture, not this reference.
