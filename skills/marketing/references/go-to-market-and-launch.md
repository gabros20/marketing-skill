# Go-to-Market and Launch

Purpose: Pick the GTM motion the product's buyer and economics actually support, then run launch as
a repeatable marketing-owned event — distinct from deploy and release — instead of a single day
gambled on a leaderboard.

Read when:
- Choosing or auditing a GTM motion (self-serve, sales-led, community-led, partner-led) for a
  product or a stage transition.
- Planning a launch — Product Hunt, a keynote, a changelog post, a silent rollout to existing users.
- Launch is getting conflated with the deploy/release sequence in planning.
- A past launch underperformed and the retro needs a framework, not a vibe check.

Skip when:
- The question is what code ships and how (canary, flag, rollback) → `operate`'s
  release-and-rollout.
- The question is which playbook applies once the motion is chosen → `surface-selfserve-saas`,
  `surface-b2b-sales-assisted`, `surface-developer-tool`, `surface-zero-audience`.
- The question is landing-page requirements for the launch page itself →
  [landing-pages-and-conversion](landing-pages-and-conversion.md).
- The question is the positioning/category framing that precedes the GTM choice →
  `positioning-and-messaging`.

Inputs:
- Buyer type (individual, team, enterprise) and deal size/complexity.
- Current release cadence and whether the shipped change is major, minor, or silent.
- Prior launch history, if any — channel used, what happened.

Produces:
- A named GTM motion, with the dead-zone risk stated if the product sits between two motions.
- A launch plan kept separate from the deploy/release decision, with a tier and an owner.
- A launch-channel plan checked against enforceable platform rules, not folklore.

## Contents
- [1. GTM motion and the brutal middle](#1-gtm-motion-and-the-brutal-middle)
- [2. Launch is not release is not deploy](#2-launch-is-not-release-is-not-deploy)
- [3. Launch tiers and repeatability](#3-launch-tiers-and-repeatability)
- [4. Product Hunt's enforceable rules](#4-product-hunts-enforceable-rules)
- [5. The failed-launch pattern](#5-the-failed-launch-pattern)
- [6. Two frameworks for structuring a launch](#6-two-frameworks-for-structuring-a-launch)

## 1. GTM motion and the brutal middle

Four named motions: **self-serve** (product-led — the buyer activates without a human in the loop),
**sales-led** (a rep-driven cycle for complex or high-ACV deals), **community-led** (adoption spreads
through an owned or rented community ahead of the purchase decision), **partner-led** (a channel or
integration partner originates the deal). The choice is not marketing-only — it reshapes
segmentation, packaging, content depth, and measurement together, which is why it has to be named
explicitly before any surface-specific playbook applies.

Reforge founder Brian Balfour states the failure mode for anything selling toward the enterprise:
*"Only things that were … pure PLG to an individual or full FDE motion to get through these gates.
The middle is brutal"* (@bbalfour, 2026-06-04; FDE = forward-deployed-engineer, an
embedded-implementation motion). Read literally: a product built to be self-serve enough for an
individual buyer and sales-assisted enough for an enterprise buyer at the same time usually clears
neither gate. Pick one motion per segment; treat "we do both" as a claim to interrogate, not a
default posture.

## 2. Launch is not release is not deploy

`operate` draws the line marketing must honor: deploy is code running somewhere (possibly dark,
possibly at 0% traffic); release is users receiving new behavior, gated by `quality`; **launch is
telling the market this exists, and that step belongs to marketing** (`operate`'s
release-and-rollout reference, invariant I1). Collapsing launch into release means a rollback also
retracts an announcement you already made; collapsing it into deploy means "shipped" and "announced"
become the same irreversible act.

Marketing does not originate the launch in a vacuum: `product` contributes the narrative input — what
shipped, for whom, and why it matters — and marketing turns that into the market-facing story, the
channel plan, and the timing decision. Keep the two contributions distinct: product supplies the
truth of what changed, marketing supplies the decision of how and when the market hears about it.

## 3. Launch tiers and repeatability

Not every shipped change earns the same launch weight. Three tiers, matched to whatever release
cadence `operate` is already running: a **major** launch (new capability, new pricing tier, a
positioning shift) gets the full channel plan below; a **minor** launch (a meaningful feature) gets a
changelog entry and an owned-channel post, no coordinated push; a **silent** rollout (an internal
improvement, a fix framed as a feature) gets no announcement at all. Deciding the tier is itself a
marketing call, made against the narrative input product supplies — not every release clears the bar
for a launch.

**Launch is repeatable, not a single moment.** Product Hunt's own community guidelines — self-dated
**11 April 2025** — state makers may launch again "as often as you have new significant product
iterations available." That is a platform explicitly sanctioning re-launch for real iterations, not
a growth-hack workaround. Treat a major version, a repositioning, or a new market segment as a
legitimate second launch on the same channels, not a one-shot opportunity spent the day the product
first shipped.

## 4. Product Hunt's enforceable rules

Product Hunt is the launch-platform primary source with the most checkable rules, and the
practitioner content circulating around it gets one rule wrong more than any other. From the
guidelines, verbatim: *"asking for upvotes, using bots, incentivizing upvotes, and any other form of
artificially increasing activity"* is prohibited (self-dated 2025-04-11). **You may ask people to
visit and comment; you may never ask them to upvote.** This is the single most-violated rule in
circulating launch checklists, and it is enforceable — product removal and account suspension are
the stated consequences. Self-promotion in comments and company accounts (as opposed to real
personal profiles) are separately banned.

Two more platform facts worth planning around, both primary and both killing a folklore rule: launch
timing is anchored to **12:01am Pacific**, the day-boundary moment named in Product Hunt's own launch
guide; and the platform explicitly declines to name a best weekday, which means "always launch
Tuesday" is practitioner folklore, not platform doctrine. The ranking algorithm itself is
**unpublished** — anyone asserting the exact weighting of upvotes, comments, and velocity is
guessing, including confident-sounding launch-consultant content. Re-verify all of the above against
Product Hunt's current guidelines before a launch; guideline pages change without a version number.

## 5. The failed-launch pattern

A recurring, checkable post-mortem shape: a launch stalls around a low upvote count, finishes behind
an unrelated product in that day's ranking, produces only a marginal signup bump, and the founder's
own diagnosis is that the team optimized for the leaderboard number instead of for feedback, usage,
and users who stick around (indiehackers.com/post/notes-from-a-failed-product-hunt-launch, 2026-08-01
fetch). The generalizable lesson: rank and upvote count are a vanity proxy visible only on launch
day; the metric that outlives the launch is activated users, and a launch plan that names rank as the
success criterion is optimizing for the wrong number by construction. Set the actual success
criterion — signups that activate, qualified conversations started, a specific inbound number — before
the launch, not after reading the leaderboard.

## 6. Two frameworks for structuring a launch

**ORB — Owned / Rented / Borrowed channels, plus a five-phase rollout** (Internal → Alpha → Beta →
Early Access → Full Launch), from `coreyhaines31/marketingskills`' launch skill (MIT-licensed,
credited). ORB is a useful lens for channel-plan completeness: owned (your list, your blog, your
changelog) never disappears under a platform's policy change; rented (Product Hunt, a subreddit, a
newsletter swap) converts attention faster but is borrowed on someone else's terms; borrowed (a
partner's audience, a guest slot) trades reach for relationship debt. The five phases give a
staged-exposure alternative to a single launch day — useful when the product needs real users before
the loudest channel push, not after it.

**A phase-based axis — pre-launch, launch, recurring** (adapted from `draftdev`'s startup-marketing
checklist, which structures the work by *when* rather than by channel). Its practical value: it
forces pre-launch work (waitlist, positioning, early-access users) to happen before the day itself,
and treats "recurring" as its own phase rather than letting the plan silently end at the launch-day
post. The source checklist is dated **2021** — treat its channel-specific advice as stale and
re-verify current platform mechanics elsewhere in this reference; the phase structure itself is
durable and worth keeping regardless of the source's age.

## Validation
- The GTM motion is named explicitly, with the dead-zone risk flagged if the product straddles two.
- Launch, release, and deploy are three separately owned decisions in the plan, not one event.
- The launch's tier (major/minor/silent) is decided before the channel plan is built.
- Any Product Hunt or platform-specific rule cited is checked against the platform's current
  guidelines, not assumed from this reference or from practitioner folklore.
- The launch's success criterion is a number that survives past launch day (activation, qualified
  conversations), not rank or upvote count.

## Failure modes and handoff
- **The plan blends self-serve and sales-assisted tactics for the same segment** → resolve to one
  motion per segment before continuing (§1); this is a design decision to interrogate, not a
  no-cost hedge.
- **A rollback is being treated as retracting an announcement, or vice versa** → re-read §2; deploy,
  release, and launch must stay independently reversible.
- **The request is for the launch page's copy and requirements** →
  [landing-pages-and-conversion](landing-pages-and-conversion.md).
- **The request is for the channel-execution detail of a specific tactic (email, social, paid,
  partnerships)** → the relevant channel reference; this file owns motion and launch structure, not
  channel mechanics.
- **The question is what counts as a successful launch experiment or funnel change post-launch** →
  `growth`.
