# Surface: Zero Audience (Additive Overlay)

Purpose: State what is actually known, what is repeated folklore, and what is genuinely unknowable
about marketing at n=1 — pre-launch, no list, no following, no existing customers. This is the
pack's honest frontier, and the thinness of what qualifies as evidence here **is** the content, not
a gap to paper over.

Read when:
- There is no existing audience, waitlist, or customer base to run any of the other jobs against.
- A "first 100 users" or "build in public" playbook is about to be cited and needs a credibility
  check before it ships.
- A base surface ([surface-selfserve-saas](surface-selfserve-saas.md),
  [surface-b2b-sales-assisted](surface-b2b-sales-assisted.md), or
  [surface-developer-tool](surface-developer-tool.md)) is chosen but the audience genuinely does
  not exist yet — this overlay stacks on top of it.

Skip when:
- Any real customer base, list, or usage data already exists — the base surface alone is enough,
  and folklore aimed at zero-audience founders will mislead a reader with actual signal to work
  from.

Inputs: confirmation that no measurable audience exists yet, and which base surface this overlay
stacks on.

Produces: a small set of checkable actions (marketplace gates, platform launch rules) separated
explicitly from unfalsifiable folklore, and honest acknowledgment of what this pack could not
verify at this scale.

## Contents

- [What is known](#what-is-known)
- [What is folklore](#what-is-folklore)
- [What is unknowable — and why that's stated, not hidden](#what-is-unknowable--and-why-thats-stated-not-hidden)
- [Failure modes](#failure-modes)

## What is known

**Marketplace listing is a post-traction channel, not a zero-audience one.** The Slack Marketplace
requires a minimum of **≥5 active workspaces and ≥10 weekly active users before an app may list**
(Slack developer documentation, as-of 2026-08-01 — re-verify the threshold before build time). "List
in the marketplaces your users already use" is routinely pitched to pre-launch founders as an early
channel; the platform's own gate makes it structurally unavailable until traction exists elsewhere
first. Treat any integration-marketplace listing as a channel to plan for *after* the zero-audience
phase, not during it.

**Product Hunt's rules are enumerated and enforceable**, and they are the closest thing to a codified
zero-audience launch primary source this pack found (community guidelines, self-dated 2025-04-11):
soliciting upvotes, using bots, or incentivizing upvotes is banned and enforced (visits and comments
may be asked for; upvotes may not); relaunching for a genuinely new iteration is explicitly
sanctioned, not penalized; the platform names no best weekday and launches at 12:01am Pacific; and
the ranking algorithm itself is unpublished — anyone claiming to know its weighting is guessing.

**Founder-distribution evidence exists, but is anecdote-tier by construction.** The strongest
disclosed-numbers case this pack located anywhere in the developer/founder space is Julia Evans'
(@b0rk) technical-zine business — 1,000+ disclosed sales, zero ad spend, built on free companion
content (see [surface-developer-tool.md](surface-developer-tool.md) for the full case). That is one
practitioner, self-reporting her own numbers, in one niche. Set against it, the genre's more typical
shape: a claim of a large number of organic app users acquired in one week for $0 (@jurree,
2026-07-28), posted by a 2,700-follower account with its supporting detail behind an unread external
link — a
compelling headline with no verifiable mechanism, which is precisely the hazard this overlay exists
to flag. Both exist in this pack's research; only the first has a checkable number attached to it.

**No marketing-science dataset covers a zero-audience founder, in either direction.** Every
Ehrenberg-Bass dataset this pack located — the double-jeopardy and category-entry-point research
covered in [marketing-science.md](marketing-science.md) — requires an existing, measurable buyer
population with repeat-purchase behavior. A pre-launch, n=1 founder is structurally outside that
requirement, not a small instance of it. This means the rigorous marketing-science canon offers
**no evidence for and no evidence against** any specific zero-audience tactic — it is silent, not
disproving.

**The measurement answer at zero scale is the same one that applies at small scale, sharper.**
[attribution-and-measurement.md](attribution-and-measurement.md) ⭐ carries the full argument for why
neither platform attribution nor a valid lift test is available to most builders; at zero audience,
that argument's premises are even more clearly true (there is no existing traffic to split, no
existing baseline to compare against). What remains at this scale is smaller still: track what
brought each of the first handful of users in a plain log, and self-reported answers from the people
who do show up — not a dashboard.

## What is folklore

**First-100-users playbooks, as a genre, are the pack's clearest specimen-not-evidence case.** A
dedicated research pass on this topic (ten targeted searches for "first 100 users," "build in
public," waitlist conversion, zero-audience launches) collided so heavily with unrelated AI-tooling
promotional content that the search was abandoned mid-run without usable results (as-of 2026-07-31 —
this itself is a dated finding, not a permanent property of the platform: the indie-founder
discourse space that once hosted these playbooks appears to have been substantially displaced by
AI-product launch content by this date, and should be re-checked rather than assumed unchanged).
Where results did surface, they matched the pattern above: headline numbers, no disclosed mechanism,
posted by accounts with an incentive to build their own following off the claim. Treat any specific
"first 100 users" playbook as a specimen of what this genre currently produces, not as a validated
method.

**"Do things that don't scale" (Paul Graham) is a named piece of practitioner craft, not an
empirical finding.** It belongs in this pack's vocabulary as a named heuristic — manually recruit
early users, do the unscalable thing personally rather than automate it before there's anything to
automate — but it carries no measurement behind it in anything this pack's research located. Cite it
as craft, in the same register [positioning-and-messaging.md](positioning-and-messaging.md) uses for
Dunford's positioning method: well-regarded, widely practiced, not evidence-backed.

## What is unknowable — and why that's stated, not hidden

This pack's research explicitly could not close the zero-audience gap, and the honest move is to say
so rather than pad the file with restated folklore to look complete. No social-platform search, no
GitHub research pass, and no general web search located a disinterested, methodologically disclosed study of
zero-audience acquisition tactics — the entire genre self-selects for people telling their own
success story. That absence is itself informative: **it means nothing in this pack's evidence base
can rank one zero-audience tactic above another**, and a reader should treat every specific
first-100-users tactic as a bet informed by the checkable rules above (marketplace gates, Product
Hunt's actual policy) plus judgment, not as a choice backed by evidence this pack can point to.

## Failure modes

- Pitching integration-marketplace listing as an early-stage channel without naming the traction
  gate that makes it unavailable until later.
- Citing a headline growth number (any "$0 to $X" or "N users in a week" claim) without checking
  whether a disclosed mechanism exists behind it, per the b0rk-vs-jurree contrast above.
- Padding this file with restated general marketing advice to make the zero-audience surface look
  as substantial as the others — the thinness is the finding; do not disguise it.
