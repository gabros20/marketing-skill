# Landing Pages and Conversion

Purpose: Write the requirements brief a landing page must satisfy — the one goal, the claims, the
proof, the objections — and hand it to design for composition. Marketing does not lay out the page.

Read when:
- Briefing a new landing or campaign page, or auditing an existing one against its stated goal.
- Deciding what proof a claim needs, or where an objection must be answered.
- An ad or campaign's promise doesn't match what the landing page actually says.
- A pricing page needs its message (not its tiers) written.

Skip when:
- The question is page composition, layout, or the section sequence itself →
  `design`'s eight-beat landing-page anatomy (`surface-website.md`) — cite it, never restate it.
- The question is the price, the tier structure, or the decoy tier → `product`.
- The question is which A/B variant of a brief-satisfying page wins → `growth`.
- The question is Core Web Vitals or crawl/rich-result eligibility → `quality`.
- The question is the launch channel plan that drives traffic to this page →
  [go-to-market-and-launch](go-to-market-and-launch.md).

Inputs:
- The segment(s) the page must convert, and the one action each segment should take.
- The ad, email, or channel promise that sent the visitor here (for message-match).
- Available proof: named customers, numbers, case studies, credentials, press.

Produces:
- A requirements brief: one goal, the claim each beat must make, the proof each claim carries, the
  objections to answer and where.
- A message-match check between the inbound promise and the page's headline claim.
- A pricing-page message brief (message only — tiers and the decoy stay with product).

## Contents
- [1. The requirements brief is marketing's artifact](#1-the-requirements-brief-is-marketings-artifact)
- [2. Attention Ratio and the one-goal doctrine](#2-attention-ratio-and-the-one-goal-doctrine)
- [3. Trust and proof devices](#3-trust-and-proof-devices)
- [4. Message-match](#4-message-match)
- [5. Messaging biases vs. interaction laws — the split](#5-messaging-biases-vs-interaction-laws--the-split)
- [6. Pricing-page message](#6-pricing-page-message)
- [7. Vertical playbooks, distilled](#7-vertical-playbooks-distilled)
- [8. The color-psychology myth](#8-the-color-psychology-myth)
- [9. The ethics table — a pack invariant](#9-the-ethics-table--a-pack-invariant)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. The requirements brief is marketing's artifact

Composition is design's job — the page's section order follows **design's product-narrative question
chain (the 8 beats)** in `surface-website.md`, which stays canonical there; cite it by name and read
it when the actual beat sequence matters, never restate it here. Marketing's job ends one step
earlier: write the brief design composes against. Per segment, the brief states:

- **The one goal** — the single action this page exists to produce (§2).
- **The claim each beat must make** — what the page asserts at Hook, at Proof, at Stakes.
- **The proof each claim carries** — which device from §3 backs it, and where it lives.
- **The objections to answer, and where** — placed at the point the doubt actually arises, each
  followed by a path back to the CTA, not buried below the decision point. Source them from real
  conversations (sales or discovery calls, support tickets, replies) rather than inventing them.
  Objections nobody has heard yet are guesses.
- **Who the page is not for** — the disqualifier that follows from positioning's best-fit
  customer. Naming who should leave makes the claim believable to the reader who should stay.

A brief without a stated proof source per claim is not finished — "trust us" is not a requirements
line design can build against.

## 2. Attention Ratio and the one-goal doctrine

**Attention Ratio = links-on-page ÷ intended actions.** A campaign or landing page should approach
**1:1** — one action, nothing else clickable; agency case studies report double-digit conversion
lifts from tightening toward it, but treat any specific percentage as an uncited, agency-sourced
figure, not a benchmark to promise. A homepage may legitimately carry a 1:many ratio because its job
is exploration, not conversion; conflating the two page types is the most common briefing error.
State explicitly, per page, which mode it is in.

## 3. Trust and proof devices

Three credibility layers, and a page needs all three, not the most convenient one: **visual**
(consistent design quality, real photography over stock — the reason for real imagery, stated without
leaning on any specific credibility statistic; the commonly repeated "users judge on design alone"
figure has unverified provenance and belongs to design's craft argument, not a marketing brief); **content**
(clarity, specificity, plain language, answers ordered the way questions arise); **social**
(third-party validation — the layer with the largest lift, and the one a brief most often
under-specifies).

Social-proof device taxonomy, with placement as the real lever:
- **Testimonials** — real quote, full name, role, company, headshot. A named initial ("Alex H.")
  reads as fabricated; specificity is what converts.
- **Logo wall** — recognizable customer logos outperform a generic "trusted by" bar.
- **Numbers** — usage counts, review counts, outcome metrics. Specific beats superlative always
  ("500+ transactions" over "trusted by many").
- **Case studies** — the strongest device for high-consideration buys. Anatomy: challenge → approach
  → measurable result, tied to a named, real client.
- **Trust badges** — security/compliance marks (SOC 2, HIPAA, GDPR), placed as both function and
  signal.

**Placement is the lever, not just presence**: put the strongest testimonial, rating, or guarantee
directly beside the CTA or form to neutralize last-minute hesitation; put logos and ratings on
pricing/contact pages; cluster testimonials rather than scattering them thinly. A fabricated or
stock-photo testimonial is both easy to detect and FTC-actionable — never brief one.

## 4. Message-match

The claim in the ad, email subject, or referring post is a promise; the landing page's headline is
the payoff. A mismatch — a discount-led ad landing on a page that never mentions the discount, or a
feature-specific ad landing on a generic homepage — spends the visitor's trust before the page has a
chance to make its case. Brief the headline claim to mirror the inbound promise's specific language,
not just its general topic, and require the imagery, palette, and framing arriving with the visitor
to carry through onto the page (a composition detail design executes, but a requirement marketing
must state).

## 5. Messaging biases vs. interaction laws — the split

Cognitive biases split cleanly by what they govern, and both sides get claimed if the split isn't
stated: **marketing owns the biases that shape what the page claims** — anchoring (show the
higher/original price first to set the frame), framing (the same fact stated as gain or loss —
"Save 30%" vs. "Don't pay full" — chosen deliberately, never to mislead on risk, health, or finance),
loss aversion (a free trial that lets a user build something of their own before the ask), von
Restorff (spend the page's one distinctive color exclusively on the primary CTA — distinctiveness
spent more than once per view stops working), scarcity (real deadlines and real stock only), and
social proof (§3). **Design owns the interaction laws that shape how a control behaves** — Hick's
law, Fitts's law, Zeigarnik, peak-end, working-memory load — because those govern flow and control
behavior, not what a page asserts. Draw this line explicitly in any brief; otherwise both sides
default to claiming all of it.

## 6. Pricing-page message

`product` owns the price, the tier structure, and the decoy tier — adding a dominated tier is a
packaging decision with revenue consequences, not a copy decision. Marketing owns the pricing
**page's** message: which tier's story leads, where the anchor sits (the higher tier shown first sets
the frame per §5), what proof sits next to which tier (a testimonial or logo relevant to that buyer
segment, not a generic one), and the objection-handling copy (refund terms, "no credit card
required," a comparison table) placed at the point of hesitation. Brief the message against tiers
product has already fixed; do not propose tier changes inside a landing-page brief.

## 7. Vertical playbooks, distilled

Each vertical implies a different primary proof device and a different proof burden. Sequencing a
page's sections is design's call, not marketing's — cite design's page-anatomy vocabulary for
structure; this table carries only what marketing must brief: who the page is for and what it must
prove.

| Vertical | Primary proof device | What it must prove |
|---|---|---|
| Architecture | Portfolio breadth + visible process | Depth of portfolio and a visible, credible process, not just polished outcomes |
| Interior design | Curated portfolio + trust bio | A curated body of work backed by a bio that establishes the designer as trustworthy, not just skilled |
| Creative agencies | Outcome-led value prop + case studies as decision tools | The value prop states an outcome with a metric; case studies function as decision tools, not highlight reels |
| Luxury/hospitality | Story before product | The story earns attention before the product is shown; conversion stays low-friction once it does |
| Photographers/artists | Curated best work + personal presence | The work itself carries the page; personal presence backs it without substituting for it |
| Law | Named outcomes with dollar figures | Every proof claim resolves to a named outcome with a dollar figure, not a general reputation claim |
| Finance/wealth | Credentials + fiduciary disclosure | Credentials and fiduciary standing are demonstrable (tenure, AUM, an explicit fiduciary statement), not asserted |
| Healthcare | Anxiety-reducing sequencing | Fit and scope are clear, and process expectations are set, before the page asks for a booking |
| Real estate | Search tooling + agent track record | Search/filter tooling actually works, and agent track record is evidenced, not just claimed |
| B2B SaaS | Multi-stakeholder proof + product visual | The page proves value to more than one stakeholder role, backed by a real product visual, not one persona's pitch |
| Professional services / consulting | Authority-led insight | Authority is demonstrated through the insight itself, not asserted through a credentials list |

## 8. The color-psychology myth

"Blue means trust, red means urgency" is folklore, not a briefable rule — the color-to-emotion
mapping repeated across marketing content lacks the controlled evidence to support prescribing a
specific hue for a specific effect. Brief **contrast and isolation** instead (the CTA's color should
be the page's most distinctive one, per von Restorff in §5) rather than a specific color-emotion
claim; color choice as a brand/visual decision stays with design.

## 9. The ethics table — a pack invariant

The same persuasion mechanism is ethical or a dark pattern depending only on whether the underlying
claim is true — this table is a pack-level invariant, not a landing-page-specific rule, because every
channel reference's persuasion techniques resolve to the same test.

| Mechanism | Ethical use | Dark pattern |
|---|---|---|
| Scarcity/urgency | Real deadline or real stock level | Fake or re-arming countdown timers, false "2 left" |
| Commitment | Honest progressive disclosure | Real cost hidden until a late step |
| Social proof | Real reviews under a real identity | Fabricated or stock-photo testimonials |
| Default / progress | Smart defaults, true progress state | Forced continuity, a gamified bar that never completes |
| Endowment | Personalizing a real free trial | Easy sign-up, deliberately hard cancellation |
| Confirmshaming | A neutral decline option | Guilt-trip copy on the opt-out |

The FTC's 2022→2025 enforcement pattern treats fake timers, false scarcity, hidden subscriptions, and
confirmshaming as material misrepresentations — not just bad taste, an actionable claim. The
governing test for any brief: honest persuasion reduces friction to a decision the visitor already
wants to make; a dark pattern manufactures a decision against their interest. When in doubt, the
mechanism is fine — verify the claim underneath it is true.

## Validation
- Every page has a stated goal and a 1:1 (campaign) or explicit 1:many (homepage) Attention Ratio.
- Every claim in the brief carries a named proof source and its placement.
- The page's headline claim mirrors the inbound ad/email promise, not just its general topic.
- Messaging-bias claims (anchoring, framing, scarcity, etc.) are checked against the ethics table in
  §9 before being briefed.
- The pricing-page brief accepts product's tier structure as given; it does not propose tier changes.

## Failure modes and handoff
- **The brief is being asked to specify section layout, spacing, or visual hierarchy** → that's
  composition; hand off to design against `surface-website.md`'s eight-beat anatomy.
- **A claim has no proof source attached** → the brief is not finished; get the proof or drop the
  claim, do not ship "trust us."
- **The request is to change a price or add a pricing tier** → `product`; marketing briefs the
  page's message around tiers product has already set.
- **A scarcity, urgency, or countdown mechanism is proposed without a real deadline behind it** → stop
  and flag against §9; do not brief a dark pattern.
- **The question is which variant of an already-compliant brief converts better** → `growth`.
