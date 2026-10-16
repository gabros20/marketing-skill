# Organic Social and Community

Purpose: Choose organic-reach channels honestly — brand-account reach is close to dead on most
platforms, and the evidence for what replaces it is thinner and more anecdotal than practitioner
confidence suggests. Say so rather than present folklore as a measured finding.

Read when:
- Deciding whether to invest in a brand social account, a founder/personal account, or an owned
  community (Slack, Discord, forum).
- Planning developer-audience distribution and the request conflates DevRel with marketing.
- Evaluating a community-building framework or deciding owned vs. rented channel investment.
- Rewriting a founder's profile (bio, headline, pinned or featured slot), or planning a
  "comment KEYWORD and I'll DM you the asset" gate.

Skip when:
- The question is short-video production or a repurposing pipeline →
  [content-strategy](content-strategy.md).
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
- A founder-profile brief and, if a comment gate is planned, the count that will show whether it
  produced anything beyond replies.
- An explicit list of what remains folklore in this area, not dressed as a finding.

## Contents
- [1. Organic reach reality: brand accounts are dying, founders aren't](#1-organic-reach-reality-brand-accounts-are-dying-founders-arent)
- [2. Owned vs. rented, and the Orbit model](#2-owned-vs-rented-and-the-orbit-model)
- [3. DevRel is not developer marketing](#3-devrel-is-not-developer-marketing)
- [4. Company handbooks as primary sources](#4-company-handbooks-as-primary-sources)
- [5. Two counterpoints worth naming](#5-two-counterpoints-worth-naming)
- [6. The founder account: profile, gate, and what a reply measures](#6-the-founder-account-profile-gate-and-what-a-reply-measures)
- [7. What is still folklore here](#7-what-is-still-folklore-here)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

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

- **Publishing consistently is itself the advantage.** Simon Willison (@simonw, 2024-08-01) argues
  that publishing original long-form content on an owned domain is now rare enough among developers
  that doing it consistently is itself a durable distribution advantage — few people still publish
  fresh writing on their own pages, so the ones who do stand out precisely for that reason.
- **The zine as the product, not the funnel.** Julia Evans (@b0rk) runs a real, ad-free, VC-free
  business selling technical "zines" (one-time purchase, plus posters) whose growth is driven by free
  companion comics posted publicly — the free content isn't marketing for a separate product, it is
  the same craft that produces the paid product, disclosed at 1,000+ sales at the point captured. It
  is the strongest available case for docs/tutorials-as-channel converging with DevRel (§3): the
  content that teaches is the same content that sells.

## 6. The founder account: profile, gate, and what a reply measures

**The profile is the account's landing page.** The bio or headline is the positioning statement
compressed: who it's for and what it does, front-loaded before truncation. Where the platform cuts
varies by device, so check the rendered preview. The pinned slot is the one goal
([landing-pages-and-conversion](landing-pages-and-conversion.md#2-attention-ratio-and-the-one-goal-doctrine)).
Cut leftover identities and services you no longer sell. For one profile with several audiences,
apply positioning's one-surface rule
([positioning-and-messaging](positioning-and-messaging.md#messaging-architecture-and-laddering)).

**A comment gate measures engagement, not demand.** The gate (post a result, ask for a keyword
reply, DM the asset) draws big reply counts, but a reply costs nothing. A "drop your product
below" post draws replies with no buying intent. A "must follow" condition inflates followers the
same way: those followers measure the gate, not an audience. The DM sits on a rented platform, so the gate pays off only if it moves the person to
an owned channel: an email with a lawful consent basis
([lifecycle-and-email](lifecycle-and-email.md)). Gate a working slice of what you sell (§5: free
and paid are the same craft). Count what comes out: DMs sent → emails captured → people who used
it. Stars and forks on a free repo are interest, not use. Use shows in issues, replies, or a
finished build. Log it by hand, per the n=1 answer in
[attribution-and-measurement](attribution-and-measurement.md) ⭐.

**Platform policy on this mechanic varies and changes. Check before you automate it.** The nearest
documented stance: LinkedIn's feed announcement (2026-03-12, news.linkedin.com/2026/ImprovingTheFeed)
names *"'comment to agree' prompts"* as engagement bait it is reducing, and says it acts against
comment automation and pods. It does not mention keyword gates. X's automation rules returned a bot
challenge on a 2026-10-17 fetch and are unverified. Don't assume policies transfer.

## 7. What is still folklore here

This area was the thinnest slice of the research this pack drew on — general queries collided with
unrelated AI-tooling promotional volume more than in any other channel. Name the gaps rather than
paper over them: short-video repurposing workflows, owned-vs-rented community sizing rules, and any
DevRel-impact-measurement claim with real numbers behind it were thin-to-absent in this pass. Where a
number circulates confidently in practitioner content with no traceable primary source behind it
(subscriber-growth and "followers in N days" claims, "ideal community size" heuristics, DevRel ROI
figures, good/great/exceptional engagement-benchmark tables for a follower band, connection-count
visibility thresholds), treat it as
folklore worth testing at your own scale, not as an established benchmark to cite.

## Validation
- The channel decision states its evidence tier (named-practitioner anecdote vs. measured finding),
  not just the recommendation.
- If the audience is developers, DevRel and developer-marketing are not used interchangeably in the
  plan.
- Any framework cited (Orbit) carries its maintenance status, not just its structure.
- No folklore number (reach-decline %, "ideal" community size, DevRel ROI) ships without being
  flagged as folklore.
- A comment-gate plan names the owned channel the DM hands off to and the count past replies that
  decides whether it worked, and has checked the platform's current automation/engagement policy.

## Failure modes and handoff
- **The request wants a brand-account content calendar as the primary organic channel** → flag §1
  first; a founder/personal account or an owned community is the better-evidenced bet.
- **The audience is developers and the plan reads as a sales pitch** → redirect to docs/tutorials/
  open-source per §3; DevRel corrects a sales-first instinct, it doesn't relabel it.
- **A gate's reply count is being reported as leads** → §6; replies are engagement, and the number
  that matters is what reached an owned channel.
- **The request is for short-video or content-repurposing workflow detail** →
  [content-strategy](content-strategy.md).
- **The question is measuring an existing community's engagement or retention** → `growth` or
  `success`, depending on whether it's acquisition or retention being measured.
