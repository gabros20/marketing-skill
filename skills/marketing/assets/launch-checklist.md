# Launch Checklist

Launch is a marketing-owned event and it is **repeatable** — not a single day gambled on a
leaderboard. Fill the decisions before the channel plan. Source:
[`references/go-to-market-and-launch.md`](../references/go-to-market-and-launch.md).

## The three decisions that are not one decision

| Decision | Owner | This launch |
|---|---|---|
| **Deploy** — code running somewhere, possibly dark, possibly 0% traffic | `operate` | |
| **Release** — users receiving new behaviour, gated by the ship decision | `operate` · `quality` | |
| **Launch** — telling the market this exists | **marketing** | |

Keep all three independently reversible. Collapse launch into release and a rollback retracts an
announcement you already made.

## Tier

- [ ] **Major** — new capability, new pricing tier, or a positioning shift → full channel plan below
- [ ] **Minor** — a meaningful feature → changelog entry and one owned-channel post, no coordinated push
- [ ] **Silent** — internal improvement or a fix → no announcement

Deciding the tier is a marketing call, made against the narrative input `product` supplies (what
shipped, for whom, why it matters). Not every release clears the bar for a launch.

## Success criterion — write this before launch day

| Field | Value |
|---|---|
| The number that defines success | |
| Why it survives past launch day | |

**Rank and upvote count are vanity proxies visible only on launch day.** The metric that outlives
the launch is activated users, qualified conversations started, or a specific inbound number. A plan
that names rank as its success criterion is optimising for the wrong thing by construction.

## Channel plan — owned / rented / borrowed

| Channel | O/R/B | Owner | Date | Asset needed |
|---|---|---|---|---|
| | | | | |

**Owned** (your list, blog, changelog) never disappears under a platform policy change · **rented**
(Product Hunt, a subreddit, a newsletter swap) converts faster but on someone else's terms ·
**borrowed** (a partner's audience, a guest slot) trades reach for relationship debt. A plan with no
owned channel has no floor.

## Phases — so the plan doesn't silently end on launch day

| Phase | What happens | Done |
|---|---|---|
| Pre-launch (waitlist, positioning, early-access users) | | |
| Launch | | |
| Recurring | | |

## Product Hunt — the enforceable rules

Re-verify against Product Hunt's current community guidelines before launching; guideline pages
change without a version number. As of the guidelines self-dated 2025-04-11:

- [ ] **We are asking for visits and comments — never upvotes.** Soliciting, incentivising, or
      botting upvotes is banned and enforced with product removal and account suspension. This is the
      single most-violated rule in circulating launch checklists
- [ ] No self-promotion in comments; posting from a real personal profile, not a company account
- [ ] Timing anchored to **12:01am Pacific**
- [ ] No "best weekday" assumed — the platform names none, and the ranking algorithm is unpublished.
      Anyone stating its exact weighting is guessing

## Relaunch

A major version, a repositioning, or a new market segment is a **legitimate second launch** on the
same channels — the platform explicitly sanctions relaunching for real product iterations. Launch is
not a one-shot opportunity spent the day the product first shipped.

| Prior launch | Date | What happened | What changes this time |
|---|---|---|---|
| | | | |

## Before launch day

- [ ] The GTM motion is named, with the dead-zone risk flagged if the product straddles two
- [ ] Deploy, release, and launch are three separately owned decisions in the plan
- [ ] Tier decided before the channel plan was built
- [ ] Success criterion written down and it is not rank
- [ ] Every platform rule cited was checked against that platform's **current** guidelines, dated
- [ ] The launch page has a requirements brief, not just a headline
      ([`landing-page-requirements-brief.md`](landing-page-requirements-brief.md))
- [ ] Attribution is instrumented before traffic arrives, not after
      ([`attribution-requirements-spec.md`](attribution-requirements-spec.md))
