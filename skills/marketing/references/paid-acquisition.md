# Paid acquisition

Purpose: Decide whether, when, and how to run paid acquisition in the post-signal-loss era —
what the black-box campaign types actually let you control, why paid amplifies whatever is
already true about your funnel, and the discipline for scaling spend without lying to yourself
about what caused the result.

Read when:
- Deciding whether to start paid acquisition at all, or whether it is premature for the product's
  current stage.
- Choosing between search, paid social, retargeting, or sponsorship spend and need the channel's
  real trade-offs, not a vendor's pitch.
- Setting up or auditing a Performance Max / Advantage+-style automated campaign and need to know
  what is and isn't controllable or measurable.

Skip when:
- The question is which measurement method to trust for a result — [attribution-and-measurement.md](attribution-and-measurement.md)
  owns the honesty hierarchy this file assumes.
- The channel is organic search or AI-search visibility — [seo-strategy.md](seo-strategy.md) /
  [ai-search.md](ai-search.md).
- The question is CAC-payback math itself (the LTV/margin model, not marketing's consumption of
  it) — that number belongs to `product`.

Inputs: the product's current conversion rate on the page paid traffic would land on; whatever CAC
or payback constraint the business has already set; the platform(s) under consideration.

Produces: a go/no-go on paid spend for the current stage, a channel choice with its named
trade-offs, and — if paid is live — a delivery-vs-judgment metric split that survives an
automated campaign's black box.

## Contents

- 1. What ATT actually changed, and what it didn't
- 2. Black-box campaign types: documented controls, undocumented internals
- 3. When paid is premature
- 4. A channel taxonomy by what each format actually does
- 5. Creative is the targeting — with a caveat
- 6. The death-spiral rule

---

## 1. What ATT actually changed, and what it didn't

iOS 14.5 gated IDFA behind an explicit permission prompt; without it, the identifier returns all
zeros. That is the real signal loss. What did **not** happen: SKAdNetwork has not been superseded.
AdAttributionKit (announced WWDC 2024) is additive and interoperable with SKAdNetwork, not a
replacement — Apple has announced no SKAdNetwork deprecation timeline. Treat any pack or vendor
claim that AdAttributionKit "replaced" SKAdNetwork as wrong, and re-verify both frameworks' current
state before citing a specific capability, since Apple revisits this framework release to release.

## 2. Black-box campaign types: documented controls, undocumented internals

Performance Max and Advantage+ both automate targeting, bidding, and placement across an
advertiser's full budget. Google documents PMax's advertiser-available controls precisely —
keywordless targeting inputs, final-URL expansion, search themes, negative keywords, brand
exclusions — and its reporting — asset-level performance, channel and placement reports. It is
equally precise about what is **not** exposed: individual search-term detail, specific bid amounts
or auction decisions, exactly which audiences the model targets, or the reasoning behind
creative/channel allocation. In Google's own words, PMax *"uses Google AI to optimize bids and
placements and drive conversions or conversion value for your goals"* — the mechanism is named,
the decisions inside it are not.

**Zero independent incrementality evidence exists for either PMax or Advantage+.** Google ships an
in-platform "Uplift experiments" tool for PMax — a vendor-provided self-measurement feature, not
third-party or academic evidence — and no peer-reviewed or independent study of either system's
incrementality was located. Every incrementality claim in circulation is either the platform's own
tool or an agency's single-case anecdote. Treat both as automation that is well-documented for
*control* and completely undocumented for *effect*.

## 3. When paid is premature

Paid acquisition amplifies whatever is already true about the funnel it points at. Sending paid
traffic to a page that doesn't yet convert organic or referred visitors does not fix the
conversion problem — it scales the cost of discovering it. The sequencing that follows: reach
message-market fit (the page converts *some* traffic without paid help) before paying to find out
whether it converts *more* traffic. CAC-payback — how many months of margin it takes to recover a
customer's acquisition cost — is the constraint that should gate a paid budget, but the underlying
LTV and margin model is `product`'s number, not marketing's to set. Marketing's job is to consume
that constraint honestly: don't scale spend past what the payback math allows because a
platform-reported ROAS looks healthy (§4 of [attribution-and-measurement.md](attribution-and-measurement.md)
explains why platform ROAS overstates by construction).

## 4. A channel taxonomy by what each format actually does

- **Intent capture** (search) — the user states what they want; the ad meets a demand that
  already exists. Highest signal-to-noise, and the format eBay's field experiment tested directly
  (see [attribution-and-measurement.md](attribution-and-measurement.md) §2): even here, frequent
  high-intent searchers — who generate most of the spend — showed near-zero incremental response,
  because they were mostly going to convert anyway.
- **Demand generation** (paid social, display, video) — the ad creates or surfaces interest that
  didn't have a search query yet. Harder to measure because there's no intent signal to piggyback
  on; this is the format where creative quality, not targeting precision, does the most work (§5).
- **Retargeting** — targets people who already clicked, browsed, or abandoned a cart: structurally
  the same population eBay's experiment found least responsive to begin with. Treat any retargeting
  ROAS number with more skepticism than a cold-audience number, not less, because it is targeting
  exactly the warm population most likely to convert regardless of the ad.
- **Dark-funnel sponsorships** (newsletter, podcast, community placements) — reach that produces
  almost no clickable trail. Self-reported attribution (§6 of [attribution-and-measurement.md](attribution-and-measurement.md))
  is close to the only honest measurement available for this channel; don't force it through a
  last-click model that will attribute it to whatever channel the customer touched last instead.

## 5. Creative is the targeting — with a caveat

Under algorithmic delivery, the ad's own content increasingly *is* the targeting mechanism: broad
audience settings plus strong creative let the delivery algorithm find the right viewer, more than
a narrow manually-built audience does. That claim is real but incomplete — creative-driven
delivery still depends on the signal quality feeding the algorithm (event-match quality on
server-side conversion events, in Meta's ecosystem); weak signal gives the creative-selection
algorithm bad data to learn from regardless of creative quality. Automated creative generation also
fails in visible, checkable ways — a documented Advantage+ generation produced a bicycle ad with
two sets of handlebars — worth treating as a spot-check habit (review generated creative before it
ships), not evidence the whole system is unusable.

## 6. The death-spiral rule

Standard, platform-reported attribution and incremental attribution are different tools for
different jobs, and confusing them compounds error. A practitioner working ecommerce media buying
put the mechanics plainly: standard attribution credits a channel for any purchase from a user who
saw an ad inside the lookback window; incremental attribution credits it only for purchases that
statistically would not have happened without the exposure — the same ad account can show
**"6x ROAS on standard attribution and 0.8x ROAS on incremental"** once the warm-traffic pool a
channel was harvesting is exhausted at scale
([@antonioventre_, 2026-07-03](https://x.com/antonioventre_/status/2073170675901010025)). The rule
this produces: **optimize the delivery objective on standard, fast-signal attribution — the
algorithm needs dense signal to learn from — but judge scaling decisions on the incremental
column.** Optimizing delivery itself for incremental attribution starves the algorithm of signal
and degrades performance; using standard attribution to decide *whether to scale* is how a budget
quietly funds warm-audience harvesting that platform-reported ROAS will never flag as a problem.

## Validation

- Any PMax/Advantage+ recommendation states which controls are documented (§2) and does not imply
  incrementality evidence exists where none was found.
- A paid-spend recommendation checks message-market fit and the CAC-payback constraint (§3) before
  proposing a budget increase.
- A retargeting or warm-audience result is reported with the same skepticism this file assigns it,
  not the platform's face-value ROAS.
- The delivery-objective metric and the scaling-judgment metric are named separately (§6), never
  collapsed into one number.

## Failure modes and handoff

- **A stakeholder wants to scale spend off a standard-attribution ROAS number** — apply §6: name
  the delivery-vs-judgment split explicitly and route to
  [attribution-and-measurement.md](attribution-and-measurement.md) for what the incremental number
  would actually require to trust.
- **Paid is being proposed for a page with no organic or referred conversion evidence yet** — stop
  at §3; the fix is the page and the offer, not the channel.
- **The CAC-payback threshold itself is in question** — that decision belongs to `product`; this
  file only tells marketing how to consume the constraint, not how to set it.
