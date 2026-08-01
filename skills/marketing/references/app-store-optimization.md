# App Store Optimization

Purpose: Get a mobile app found and installed through store search and store-page conversion —
this reference is also the pack's mobile-surface authority; there is no separate mobile GTM
reference elsewhere.

Read when:
- Writing or auditing an App Store or Google Play listing (name, subtitle, keywords, description,
  screenshots, preview video).
- Deciding whether to run a store-listing experiment (Custom Product Pages, Product Page
  Optimization, or Play's store-listing experiments).
- Any mobile-app GTM question that isn't already routed to a dedicated surface reference — mobile
  has no `surface-*` reference of its own; this file carries that weight.

Skip when:
- The question is store-experiment statistical readout (sample size, significance, stopping rules)
  → `growth` owns experiment design once the store surface hands off a running test.
- The question is app-review-response handling as a support workflow → `success`.
- The question is paid user-acquisition bidding on Apple Search Ads / Google App Campaigns
  → `paid-acquisition`.

Inputs:
- Current listing copy and screenshots/preview video, if auditing.
- Approximate monthly download volume (this changes which store-experiment guidance applies).
- Target markets/locales.

Produces:
- A listing draft or audit within each store's hard character limits.
- A store-experiment recommendation scoped to the app's actual download volume.
- A localization plan if targeting non-US markets.

## Contents

- [1. Store limits](#1-store-limits)
- [2. Two different enforcement philosophies](#2-two-different-enforcement-philosophies)
- [3. Custom Product Pages ≠ Product Page Optimization](#3-custom-product-pages--product-page-optimization)
- [4. Screenshots as conversion assets](#4-screenshots-as-conversion-assets)
- [5. Keyword localization as a live experiment](#5-keyword-localization-as-a-live-experiment)
- [6. Ratings velocity — flagged unverified](#6-ratings-velocity--flagged-unverified)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. Store limits

Hard character limits, primary-verified (developer.apple.com/app-store/product-page/;
support.google.com/googleplay, 2026-08-01, re-verify at build time — these are exactly the kind of
number a store changes without much notice):

| Field | Apple App Store | Google Play |
|---|---|---|
| Name / title | 30 chars | 30 chars |
| Subtitle / short description | 30 chars | 80 chars |
| Promotional text / full description | 170 chars | 4,000 chars |
| Keyword field | 100 chars total, comma-separated, no spaces after commas | — (no dedicated field; keywords live in visible fields) |
| Screenshots | up to 10 | — |
| Preview video | up to 3, 30s each | — |

**On the keyword field specifically: the 100-character limit is confirmed from Apple's own
product-page documentation. Whether Apple enforces that limit in bytes or characters is contested —
App Store Connect Help is the authority on the enforcement unit, and this research could not
confirm it. Ship "100 characters per Apple's product-page doc; enforcement unit contested, verify
against App Store Connect Help" — never ship the byte-vs-character question as settled.**

## 2. Two different enforcement philosophies

Apple and Google police keyword stuffing through structurally different mechanisms, and conflating
them produces wrong advice:

- **Apple polices a dedicated, hidden keyword field.** App Review Guidelines §2.3.7 bans stuffing
  it with trademarked or irrelevant terms "just to game the system," and Apple may modify submitted
  keywords at any time. The field itself is invisible to users — it exists purely for search
  indexing.
- **Google polices keywords in visible fields.** Play's metadata policy states repetitive or
  irrelevant keywords in the title or description "will not impact ranking" and creates a bad user
  experience, treating stuffing as a policy violation with suspension risk rather than merely an
  ineffective tactic — and because the fields are user-visible, stuffing also degrades the listing's
  own readability.

Practical consequence: an Apple keyword strategy that hides density in a field users never see does
not transfer to Play, where the same density is visible and policed as spam.

## 3. Custom Product Pages ≠ Product Page Optimization

These are two different Apple tools for two different jobs — do not conflate them in a brief:

- **Custom Product Pages**: persistent, URL-addressable listing variants. Built to route different
  ad traffic (or different organic contexts) to a pitch tailored to that source — a paid-search
  variant, an influencer-campaign variant.
- **Product Page Optimization**: Apple's native A/B test. Shows a percentage of eligible users an
  alternate icon, screenshot set, or preview video and reports results in App Analytics.

Google Play's parallel is store-listing experiments (up to one default plus five localized
concurrent experiments) and custom store listings (URL-addressable variants targetable by country,
pre-registration status, inbound keyword, or inactivity) — functionally comparable to Apple's split,
under different names.

**The seam**: this reference owns *which* variant to build and what to test (the requirements
brief — claim, proof, audience). Running the experiment, reading its statistical result, and
deciding when to call a winner is `growth`'s territory once the test is live.

PPO's behavior is not uniform across app sizes — a practitioner-discussion synthesis naming a
specific case (Cal AI) reports small apps (under 10k downloads/month) see real conversion swings
from screenshot changes, while large apps with heavy brand-search or paid-UA traffic (100k+
downloads/month) see almost none, because those users already decided to install before reaching
the store page. The same discussion flags that **PPO data is unstable for its first 2–3 days** while
Apple's adaptive algorithm calibrates — an A/A/B test first is the recommended way to validate the
testing environment before trusting a real A/B result. Treat this as informed practitioner
synthesis, not a controlled study.

## 4. Screenshots as conversion assets

Screenshots and the preview video are the store page's actual conversion surface — the point where
a user who already searched or browsed decides to install. Treat the full asset bundle (icon,
screenshots, video, and where applicable the paywall/onboarding a screenshot implies) as something
to test continuously after launch, not something fixed at ship and forgotten; a stale asset set is
a silent, undiagnosed drag on conversion rather than a visible failure.

## 5. Keyword localization as a live experiment

The App Store functions as many small search markets, not one global one. A disclosed, in-progress
n=1 experiment (a named practitioner's own app) produced 399 total ranked keywords across 8
countries within days of launch, with the distribution skewed toward non-US markets — evidence that
non-US, lower-competition locales can out-rank a saturated US keyword set for the same term. This is
one operator's live result, not a benchmark: treat it as a specimen worth acting on directionally
(localize metadata per market rather than shipping English-only), not as a guaranteed multiplier.

Whether Apple's keyword-field matching has shifted from literal term-matching toward
intent/topic-clustering is a claimed, dated practitioner observation (2026-06) with no Apple primary
source confirming it. Treat store search-matching behavior as something to re-check against current
Apple guidance at build time, not a fixed mechanic — this is the anti-staleness pattern to teach
here: verify the current matching behavior, don't carry forward a frozen rule.

## 6. Ratings velocity — flagged unverified

The claim that the *rate* of new-rating accumulation (not just the average rating) independently
moves store-search ranking is common practitioner folklore. No primary Apple or Google documentation
confirming a ratings-velocity ranking factor was located in this research, and no controlled study
was found either. Ship this as an open, unverified claim if raised — not as a tactic to optimize
toward — until a primary source is located.

## Validation

- Listing copy fits every field's character limit for its target store, with the keyword-field
  byte-vs-character caveat carried forward rather than resolved as settled.
- A Custom-Product-Page/Custom-Store-Listing recommendation and a PPO/store-experiment
  recommendation are not presented as the same tool.
- Any store-experiment recommendation accounts for the app's approximate download volume (§3) and,
  for Apple, the first-2–3-day instability window.
- Localization guidance is framed as a per-market decision, not a uniform global keyword set.

## Failure modes and handoff

- **The app is small (well under 10k downloads/month) and a PPO test showed no signal within 2–3
  days.** Don't call it — that window is documented as unstable; extend before concluding.
- **A ranking-velocity or algorithm-behavior claim has no primary-source confirmation** → state it
  as unverified explicitly rather than shipping it as a rule (§5, §6).
- **The request moves from "what to test" to "read this experiment's result and decide"** →
  `growth`.
- **The request is app-store paid placement or search-ads bidding** → `paid-acquisition`.
