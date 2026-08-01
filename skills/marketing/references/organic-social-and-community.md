# Organic Social and Community

Purpose: Choose organic-reach channels honestly — brand-account reach is close to dead on most
platforms, and the evidence for what replaces it is thinner and more anecdotal than practitioner
confidence suggests. Say so rather than present folklore as a measured finding.

Read when:
- Deciding whether to invest in a brand social account, a founder/personal account, or an owned
  community (Slack, Discord, forum).
- Planning developer-audience distribution and the request conflates DevRel with marketing.
- Evaluating a community-building framework or deciding owned vs. rented channel investment.

Skip when:
- The question is short-video production or a repurposing pipeline → `content-strategy-and-briefs`.
- The question is paid social spend → `paid-acquisition`.
- The question is retention inside an existing community/product, not acquisition into it →
  `success` or `growth`.
- The question is a specific launch-day channel push → [go-to-market-and-launch](go-to-market-and-launch.md).

Inputs:
- Whether the audience is developers (DevRel applies) or a general buyer audience.
- Existing owned assets: a blog, a changelog, a Slack/Discord, a newsletter.
- Who is willing to post under their own name — this channel depends on an individual, not a brand.

Produces:
- A channel decision (owned vs. rented; brand account vs. founder-led) with the evidence tier stated.
- A DevRel/developer-marketing split, if the audience is developers.
- An explicit list of what remains folklore in this area, not dressed as a finding.

## Contents
- [1. Organic reach reality: brand accounts are dying, founders aren't](#1-organic-reach-reality-brand-accounts-are-dying-founders-arent)
- [2. Owned vs. rented, and the Orbit model](#2-owned-vs-rented-and-the-orbit-model)
- [3. DevRel is not developer marketing](#3-devrel-is-not-developer-marketing)
- [4. Company handbooks as primary sources](#4-company-handbooks-as-primary-sources)
- [5. Two counterpoints worth naming](#5-two-counterpoints-worth-naming)
- [6. What is still folklore here](#6-what-is-still-folklore-here)

## 1. Organic reach reality: brand accounts are dying, founders aren't

Practitioner consensus, weakly measured: organic reach for brand social accounts is near-zero on
most platforms, while founder and personal accounts outperform them. Treat this as directional, not
statistical — no aggregate, platform-level reach-decline dataset backs it in this research pass; what
exists is named-practitioner anecdote at the account level. A CMX-founding community veteran
describes the collapse directly: *"Got 5 likes on a post. That's pretty much viral for me on X at
this point"* (@DavidSpinks, 2025-03-05) — one account's experience, offered as a data point, not a
platform-wide statistic.

A separate, longer-horizon observation favors personal-brand consistency over reactivity: a
15-year comparison of two accounts with similar follower counts found the one that "HAD to tweet the
zinger" had a "middling career," while the one that "mostly stayed positive and built" had what its
author calls a monster career (@chrisalbon, 2026-07-28) — an n=2 anecdote from a credible source, not
a study. Use both as directional support for founder-led distribution, never as a cited statistic.

## 2. Owned vs. rented, and the Orbit model

The durable distinction: **owned** channels (your blog, your changelog, your Slack/Discord/forum)
persist under your control and don't disappear under a platform policy change; **rented** channels (X,
Reddit, a subreddit) convert attention faster but on someone else's terms and algorithm. Community-led
growth is high-cost and high-moat precisely because an owned community can't be rented into existence
overnight.

**Orbit** (gravity/reach/love) is the closest thing to a named, cross-cited framework for structuring
community investment: gravity pulls people toward the center, reach measures how far activity spreads,
love measures depth of member engagement (`orbit-love/orbit-model`, MIT-licensed, credited). Use it as
a lens for diagnosing where a community is thin — high reach with low love is a broadcast channel
wearing community's clothes — but note the project itself is **declared no longer developed**
(inactive as of a 2026-03-07 check); treat it as a stable, citable framework, not an actively
maintained tool or a source of current benchmarks.

## 3. DevRel is not developer marketing

Developers distrust marketing, and DevRel exists partly because of that distrust: it is
relationship-, content-, and enablement-first, explicitly not sales-first. A practitioner draws the
line plainly: *"DevRel is not about selling products to developers... it's all about building a good
relationship with developers"* (@Prathkum, 2022-01-31). Developer marketing is the demand-facing
counterpart to DevRel, not a synonym for it — conflating the two in a brief misreads the audience.
For a developer audience, the channels that work are the ones marketing doesn't usually own outright:
docs, tutorials, and open-source contribution function as distribution, not just as support surface.
DevRel itself sits between marketing and product, not fully inside either.

## 4. Company handbooks as primary sources

Rather than a course or an agency's synthesis, the strongest developer-marketing sources are
companies' own public handbooks: GitLab's, PostHog's, and Resend's marketing/DevRel processes are
published openly and function as primary-source playbooks for how a real company runs this
discipline (surfaced via `ronakganatra/awesome-developer-marketing`; re-express its facts, its own
license status is ambiguous — no verbatim lifts). Prefer a working company's own published process
over a secondhand summary of it whenever one exists.

## 5. Two counterpoints worth naming

Against "organic reach is dead," two named practitioners stand as evidence it still works if the
content itself carries the distribution:

- **"Blog like it's 2005."** Simon Willison argues that publishing original long-form content on an
  owned domain is now rare enough among developers that doing it consistently is itself a durable
  advantage: *"...one of the few people who DO publish fresh information online on your own web
  pages"* (@simonw, 2024-08-01) has outsized impact precisely because so few still do it.
- **The zine as the product, not the funnel.** Julia Evans (@b0rk) runs a real, ad-free, VC-free
  business selling technical "zines" (one-time purchase, plus posters) whose growth is driven by free
  companion comics posted publicly — the free content isn't marketing for a separate product, it is
  the same craft that produces the paid product, disclosed at 1,000+ sales at the point captured. It
  is the strongest available case for docs/tutorials-as-channel converging with DevRel (§3): the
  content that teaches is the same content that sells.

## 6. What is still folklore here

This area was the thinnest slice of the research this pack drew on — general queries collided with
unrelated AI-tooling promotional volume more than in any other channel. Name the gaps rather than
paper over them: short-video repurposing workflows, owned-vs-rented community sizing rules, and any
DevRel-impact-measurement claim with real numbers behind it were thin-to-absent in this pass. Where a
number circulates confidently in practitioner content with no traceable primary source behind it
(subscriber-growth claims, "ideal community size" heuristics, DevRel ROI figures), treat it as
folklore worth testing at your own scale, not as an established benchmark to cite.

## Validation
- The channel decision states its evidence tier (named-practitioner anecdote vs. measured finding),
  not just the recommendation.
- If the audience is developers, DevRel and developer-marketing are not used interchangeably in the
  plan.
- Any framework cited (Orbit) carries its maintenance status, not just its structure.
- No folklore number (reach-decline %, "ideal" community size, DevRel ROI) ships without being
  flagged as folklore.

## Failure modes and handoff
- **The request wants a brand-account content calendar as the primary organic channel** → flag §1
  first; a founder/personal account or an owned community is the better-evidenced bet.
- **The audience is developers and the plan reads as a sales pitch** → redirect to docs/tutorials/
  open-source per §3; DevRel corrects a sales-first instinct, it doesn't relabel it.
- **The request is for short-video or content-repurposing workflow detail** →
  `content-strategy-and-briefs`.
- **The question is measuring an existing community's engagement or retention** → `growth` or
  `success`, depending on whether it's acquisition or retention being measured.
