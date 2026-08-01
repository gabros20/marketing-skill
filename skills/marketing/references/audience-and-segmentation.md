# Audience and Segmentation

Purpose: Decide who to market to and how to split them — by real buying-situation cues and funnel
stage, not by demographic persona theater — and hold the seam with `product`'s discovery JTBD work
cleanly rather than duplicating it.

Read when:
- Building or challenging a target-audience definition, ICP, or segmentation scheme.
- A persona document exists but nobody can say which buying situation or funnel stage it maps to.
- Deciding who a campaign, email list, or message variant should go to.

Skip when:
- The question is which empirical law backs a segmentation claim, or a light/non-buyer figure needs
  its evidence tier → [marketing-science.md](marketing-science.md).
- The question is how to phrase the positioning or claim once the audience is set →
  [positioning-and-messaging.md](positioning-and-messaging.md).
- The question is discovering the job a customer is hiring the product to do in the first place — that
  discovery work is `product`'s; this file only covers using an already-discovered job for
  message-market fit.
- The question is which consent regime governs a given list — pointer only here, mechanics live in
  [lifecycle-and-email.md](lifecycle-and-email.md).

Inputs: the product's real alternatives, any existing customer or prospect data, and — if available —
`product`'s JTBD discovery output.
Produces: a segmentation scheme keyed to buying situations or funnel stage, a stated readiness split
where a page or campaign needs to address more than one buyer state, and a named jurisdiction-
compliance checkpoint before any segment gets emailed.

## Contents
- CEP-based segmentation vs. persona theater
- The JTBD seam with product
- ICP as a funnel, not a checkbox
- Light-buyer and non-buyer reality
- Readiness segmentation within one audience
- Segmentation and jurisdiction compliance
- Validation
- Failure modes and handoff

## CEP-based segmentation vs. persona theater

A demographic persona ("Sarah, 34, marketing manager") describes a person; it doesn't describe when or
why they'd reach for this product. **Category entry points** — the buying situations and cues a buyer
uses to retrieve a brand from memory — are the better unit of segmentation, and they're the
best-evidenced B2B-specific finding located (real disclosed sample sizes across
three B2B datasets; see [marketing-science.md](marketing-science.md) for the tiering and the numbers).
Segmenting by CEP means asking "what situation makes someone reach for this" rather than "who is this
person," and it generalizes better across campaigns and channels because the same buyer can enter
through several different situational doors.

Persona documents aren't worthless — they're useful shorthand for a writing voice — but treat them as
a communication aid, not a targeting mechanism, and don't let a persona substitute for naming the
actual buying situation a piece of messaging or a campaign is aimed at.

## The JTBD seam with product

Jobs-to-be-done (Christensen, Klement, Moesta) segments by the job and the struggling moment that
triggers a purchase, rather than by demographics — a genuinely different axis from CEPs, and a natural
complement to them. The seam: **`product` owns JTBD discovery** — the research work of finding out what
job customers are actually hiring the product to do, typically through the switch-interview method.
**Marketing uses the discovered job for message-market fit** — turning "here's the job and the
struggling moment" into messaging that speaks to that moment, not into a new round of discovery
research. If the job hasn't been discovered yet, that's a `product` request, not a marketing one; this
pack's role starts once the job is known.

## ICP as a funnel, not a checkbox

Treating "ideal customer profile" as a static attribute checklist (company size, industry, tech stack)
misses that a real buyer moves through stages before they convert, and that different tactics apply at
each stage. A practitioner framing worth adopting: ICP fit is a five-stage funnel — **aware** → **
interested** (self-educating: demos, free signups, webinars, high-intent content) → **considering**
(sales- or product-qualified) → **chosen** → **enterprise-adopted**. The channel used to move a buyer
through those stages — PLG motion, outbound, SEO, paid, sales-assisted — is secondary to whether the
funnel actually reaches and converts the right profile at each stage; picking a channel before checking
that the funnel fits the profile at every stage gets the sequence backwards.

(Kyle Poyar, @poyark, 2024-07-25 — named-practitioner framework, third rung: an original synthesis, not
peer-reviewed or backed by disclosed data. Cite by name; treat the stage model as a useful lens, not an
evidence-graded law.)

## Light-buyer and non-buyer reality

The evidence-graded finding this segmentation choice should be checked against: the heaviest 20% of
buyers deliver roughly half of sales, not 80% — see the Pareto ~60/20 finding in
[marketing-science.md](marketing-science.md). Segmentation that concentrates entirely on "best customers" or heavy
users, at the expense of the much larger pool of light and non-buyers, caps growth against that
finding. A segmentation scheme should at minimum name where light buyers and category non-buyers sit,
even if the initial campaign targets a narrower slice deliberately — leaving them unaddressed by
omission is different from excluding them by decision.

## Readiness segmentation within one audience

The same audience isn't uniformly ready to act. Where a single page or campaign has to serve buyers at
different readiness levels — someone ready to evaluate deeply versus someone who wants a lighter first
step — write distinct calls to action for each readiness level (for example, a full evaluation path and
a lighter trial-or-demo path) rather than forcing one CTA to serve both. This is a messaging decision
about which readiness segments get addressed and how, not a page-layout decision — the layout itself is
design's call.

## Segmentation and jurisdiction compliance

Any segment that gets emailed also has to be partitioned by the consent regime that governs it — GDPR/
ePrivacy, UK PECR, CAN-SPAM, CASL, and other jurisdiction-specific rules differ enough in what counts as
valid consent that a single global send list, treated uniformly, is unlawful in at least one of those
jurisdictions. Segmentation work should flag this checkpoint explicitly rather than assume it's handled
elsewhere; the regime-by-regime mechanics (consent bases, opt-in/opt-out models, retention) live in
lifecycle-and-email.md — this file's job is only to make sure the checkpoint isn't skipped.

## Validation
- [ ] The segmentation scheme is keyed to a buying situation, funnel stage, or discovered job — not a
      bare demographic persona with no situational anchor.
- [ ] If a JTBD discovery gap exists, it's routed to `product`, not re-discovered here.
- [ ] Light buyers and category non-buyers are named in the scheme, even where a specific campaign
      targets a narrower slice on purpose.
- [ ] Any audience with more than one readiness state has more than one CTA path, not one CTA forced
      to serve both.
- [ ] Any segment slated for email carries a named consent-regime checkpoint before send.

## Failure modes and handoff
- The segmentation is a demographic persona with no stated buying situation or funnel stage attached —
  rebuild it around a CEP or funnel stage before it's used to target anything.
- A request arrives to "figure out what job customers are hiring us for" — that's discovery, and it's
  `product`'s job, not this pack's; hand it off rather than running an ad hoc interview process here.
- The scheme needs an evidence-graded claim about buyer concentration or loyalty →
  [marketing-science.md](marketing-science.md).
- The segments are set and the next question is how to phrase the message for each →
  [positioning-and-messaging.md](positioning-and-messaging.md).
- A segment is about to be emailed and its consent basis hasn't been checked → stop and route to
  [lifecycle-and-email.md](lifecycle-and-email.md) before sending.
