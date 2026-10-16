# Partnerships, PR, and Affiliates

Purpose: Earn distribution through other people's audiences — press, marketplace listings,
affiliates, and co-marketing — without renting your domain's authority or drifting into
undisclosed endorsement.

Read when:
- Planning a digital-PR or journalist-outreach push.
- Deciding whether a marketplace/integration directory (Slack, and its peers) is a viable
  acquisition channel at the current traction level.
- Setting up or auditing an affiliate program, including disclosure requirements.
- Evaluating a co-marketing or content-partnership proposal, including a "write for our blog"
  or "host our content" pitch.

Skip when:
- The ask is a launch-platform playbook (Product Hunt timing, relaunch rules) → `go-to-market-and-launch`.
- The ask is influencer/creator paid-media buying mechanics → `paid-acquisition`.
- The ask is building the actual tracking/attribution pipeline for affiliate links → `data`.

Inputs:
- Current traction signals (workspace/user counts, install base) if evaluating a marketplace listing.
- The proposed partner's audience-rental structure (do they host your content, or link to it?).
- Whether the program involves paid endorsers, reviewers, or affiliates who need disclosure.

Produces:
- A go/no-go on a marketplace listing given its traction gate.
- A partnership-risk read: legitimate co-marketing vs. domain-authority-rental anti-pattern.
- A disclosure requirement attached to any paid or incentivized endorsement.

## Contents

- [1. The site-reputation-abuse warning](#1-the-site-reputation-abuse-warning)
- [2. Marketplace listings as acquisition — with traction gates](#2-marketplace-listings-as-acquisition--with-traction-gates)
- [3. Affiliate mechanics](#3-affiliate-mechanics)
- [4. FTC disclosure](#4-ftc-disclosure)
- [5. Journalist-query services — liveness warning](#5-journalist-query-services--liveness-warning)
- [6. Co-marketing basics](#6-co-marketing-basics)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. The site-reputation-abuse warning

Renting your domain's authority to a third-party operator is a **documented, enforced
anti-pattern**, not a theoretical risk. Google's site-reputation-abuse manual actions began May
2024 and its scope expanded twice that year, with publicly reported casualties among major
publishers' coupon and affiliate subdirectories that had been leased to outside operators
publishing content mainly to exploit the host's established ranking signals — the "parasite SEO"
pattern. Google has never published a penalized-site list, so treat the enforcement pattern as
reported rather than self-confirmed by Google, but the effect on the affiliate/coupon-hub business
model was real and public.

This directly kills a whole class of "sponsored content hub" partnership pitches: hosting a
partner's content on your domain (or having your content hosted on theirs) purely to harvest each
other's authority, rather than because the content itself serves either audience, is the exact
shape of the enforced pattern. A legitimate co-marketing content swap (§6) is not the same thing —
the distinguishing question is whether the content would exist on its own editorial merits or only
exists to move ranking signal.

## 2. Marketplace listings as acquisition — with traction gates

"List in the marketplaces your users already use" is usually asserted as strategy with no
operational content. Marketplaces publish real gates, and they are not zero-audience channels.

**Slack Marketplace** (P, 2026-08-01, re-verify): requires **≥5 active workspaces and ≥10 weekly
active users before you may list** — private betas are ineligible. Beyond the traction floor, it
requires a publicly accessible landing page (not gated behind login, not a PDF or repo) with a
visible "Add to Slack" button, a support page reachable without an account, and a privacy policy
disclosing data collected/used/retained plus an access/deletion request path. Delisting happens
**without prior notice** for a broken install flow or an abandoned listing.

The generalizable lesson: B2B integration directories, not just consumer app stores, gate on
traction. Before recommending "get listed" as a pre-launch tactic, confirm the target directory's
actual minimum — don't assume a marketplace is available to a zero-audience product. (App-store
listing mechanics and limits live in `app-store-optimization`, which also carries the mobile
surface generally.)

## 3. Affiliate mechanics

An affiliate program's mechanics are stable and don't need a volatility gate: a unique tracked
link or code per affiliate, a cookie or first-party tracking window that attributes a later
purchase back to the referring link, a commission structure (flat per-conversion, percentage of
revenue, or tiered), and a payout cadence. The attribution chain that makes this work in practice
is a click event tied to a stable identifier, carried forward through a lead event and a sale
event — the same click-to-lead-to-sale join structure open-source link/attribution tooling
implements natively (Dub, AGPLv3 core with a proprietary enterprise carve-out) rather than
something a marketing team builds from scratch.

Program design decisions that matter more than the tooling: whether affiliates may bid on your own
branded search terms (a frequent source of channel conflict), whether self-referral is technically
blockable or only a terms-of-service prohibition, and whether the cookie window is long enough to
credit the actual buying cycle without over-crediting unrelated later purchases.

## 4. FTC disclosure

Any paid, free-product, or otherwise incentivized endorsement — affiliate links included — falls
under **16 CFR §255.5**: an undisclosed material connection between an endorser and a seller "that
might materially affect the weight or credibility of the endorsement" must be disclosed clearly and
conspicuously. This is the entire legal basis for #ad/#sponsored disclosure requirements on
affiliate and influencer content, and it applies regardless of platform.

Separately, **16 CFR Part 465** (the FTC's fake-reviews rule) exists and took effect **2024-10-21**
— it bans fake or AI-generated reviews, reviews bought conditioned on sentiment, undisclosed
insider reviews, review suppression, and fake indicators of social-media influence such as bought
followers. **Its per-violation penalty figure is not primary-verified** — a specific dollar amount
circulates widely in practitioner content but could not be confirmed against ftc.gov directly. Ship
the rule's existence and its effective date; do not repeat any penalty figure, including to
disclaim it — look the current amount up at ftc.gov if a client needs one.

**The free-pilot testimonial.** A common first testimonial (craft observation, not a measured
rate) is a quote given in return for a free pilot or audit. That is the textbook material
connection. §255.5(a) lists free or discounted products among the connections that can be
material, *"regardless of whether the advertiser requires an endorsement in return"*. It requires
disclosure when the audience would not reasonably expect the connection, and a page visitor would
not, so the page discloses it. Part 465 draws a second line. §465.4 bans incentives *"conditioned
expressly or by implication on"* a review expressing a particular sentiment. Ask for an honest
review, never a positive one. §465.1 defines a *consumer review* as one published to a site or
platform that displays reviews in whole or in part, so your own page's review section counts. It
defines a *consumer testimonial* separately, as a message in your own advertising. Check which one
you are asking for. (eCFR text, fetched 2026-10-17; re-verify.)

## 5. Journalist-query services — liveness warning

This category of service (query-and-response platforms connecting journalists to sources) churns
its branding and ownership repeatedly — the best-known predecessor changed hands and rebranded, and
even its current successor's own marketing site returned rate-limit and access errors on a routine
check. **Never name a specific journalist-query service in output without checking it's currently
live and operating under its current name first** — a dead or defunct recommendation is worse than
none, and this sub-domain of the PR tooling market is exactly where staleness bites hardest.

## 6. Co-marketing basics

A co-marketing partnership (joint webinar, shared case study, cross-promotion to each other's
audience, a guest post that exists on its own editorial merits) differs from the site-reputation-
abuse pattern in §1 by intent and content ownership: each party's content serves that party's own
audience and would be worth publishing regardless of the ranking-signal effect. Standard structure:
a written agreement on what each side promotes, to which audience, on what timeline, and who owns
any leads generated — verbal "let's cross-promote" agreements are the most common source of a
co-marketing partnership quietly fizzling with nothing shipped.

## Validation

- A marketplace listing recommendation states the traction gate and confirms the product currently
  clears it, or flags that it doesn't.
- Any paid, free-product, or affiliate relationship in an endorsement carries an explicit disclosure
  requirement, not an assumption that it's obvious.
- No journalist-query service is named without a same-session liveness check.
- Any content-hosting partnership is evaluated against the site-reputation-abuse pattern in §1
  before recommending it.

## Failure modes and handoff

- **A partnership pitch is "host their content on your domain" or vice versa, for authority, not
  audience fit** → flag the site-reputation-abuse risk in §1 explicitly rather than treating it as
  a routine content swap.
- **A pre-launch, zero-traction product wants a marketplace listing as its first channel** → state
  the traction gate; recommend the channel only once it's cleared, not before.
- **The affiliate program needs actual tracking infrastructure built** → `data` owns the pipeline;
  this reference owns the program design and disclosure requirements, not the implementation.
- **The question turns into launch-day platform mechanics (Product Hunt timing, relaunch rules)** →
  `go-to-market-and-launch`.
