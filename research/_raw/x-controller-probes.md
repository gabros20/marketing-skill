# X channel — sub-orchestrator's own probes and bookmark-cache sweep

Author: mkt-x sub-orchestrator. Date of collection: 2026-07-31/2026-08-01.
These are the calibration probes I ran before partitioning, plus a sweep of the LOCAL bookmark
cache (`xrelay bookmarks`) — a source none of the four workers was assigned. Kept per the charter's
"nothing is lost" rule.

---

## 1. Channel calibration (method finding, not a content finding)

Three probe patterns were tested against the same topics.

- **Generic topical query + `--product Top`** — e.g. `incrementality test geo lift holdout marketing`,
  `AI Overviews organic traffic drop`, `positioning messaging B2B SaaS min_faves:100 -filter:replies`.
  Roughly 7 of 10 returned rows were zero-engagement vendor advertising, unrelated dev-Twitter, or
  bare `t.co` links with no text. Engagement floors (`min_faves:`) did **not** fix this — the
  `positioning messaging B2B SaaS min_faves:100` probe returned almost entirely off-topic
  developer-audience posts that merely contained the string "B2B SaaS".
- **`from:<named practitioner>`** — e.g. `from:eric_seufert incrementality` returned ten consecutive
  on-topic, substantive posts, most in the 3–50 like range. Best-performing pattern of the run.
- **Jargon-dense query** — e.g. `email deliverability DMARC Gmail bulk sender min_faves:50` returned
  real material (a practitioner's deliverability field notes, Rand Fishkin on cold-email domain
  reputation, Josh Comeau on DMARC catching domain spoofing). Technical vocabulary self-filters:
  the slop-producing accounts do not use the words.

**Implication for the pack and for future runs:** on X, authority routing beats topical search in
any domain where the ads are the subject matter. All four worker briefs were built on this.

## 2. Bookmark-cache sweep (local, offline; cache of 4,881 posts, synced 2026-07-03)

Queried `positioning`, `attribution incrementality`, `SEO AI search`, `deliverability email`.
**Verdict: near-zero marketing signal.** The cache is an AI/developer-tooling archive; the marketing
matches were overwhelmingly AI-tool launch posts that happened to contain the keyword. Recorded here
so the controller does not spend budget re-running this channel.

One exception, below, which is materially important.

## 3. COMPETITIVE INTELLIGENCE — an incumbent marketing skill pack exists

- **SOURCE:** https://x.com/coreyhainesco/status/2056713294149517373 — @coreyhainesco, 2026-05-19.
  Corroborating posts from the same author:
  https://x.com/coreyhainesco/status/2028825363074482657 (2026-03-03),
  https://x.com/coreyhainesco/status/2047786611610685575 (2026-04-24),
  https://x.com/coreyhainesco/status/2060700511318511802 (2026-05-30).
- **SPECIMEN or EVIDENCE:** the posts are **specimens** (they are product launch announcements, i.e.
  marketing). But the *existence and shape* of the artifact they announce is **evidence**, and it is
  checkable at the named repo.
- **WHAT IT TEACHES:** `coreyhaines31/marketingskills` is a free, open-source, Agent-Skills-spec
  marketing skill collection, installable via `npx skills add coreyhaines31/marketingskills`. As of
  2026-05-19 it advertises **40 skills and 83 tool integrations**; as of 2026-03-03 it claimed
  **10,000+ GitHub stars**. Its skill surface overlaps our candidate job list heavily and in places
  exceeds it: `/ai-seo`, `/schema-markup`, `/site-architecture`, `/social-content`, `/ad-creative`,
  `/directory-submissions`, `/image`, `/video`, plus `/revops` and `/sales-enablement` (which our
  family assigns to `sales`, not `marketing`). It takes community PRs.
- **RELEVANCE TO PACK JOBS:** this is the single most consequential X finding for the synthesis gate.
  Unlike `architecture`, **the marketing niche is NOT open.** Any wedge claim must be made against a
  10k-star incumbent that already ships a broader surface than our candidate job list. It also shows
  the incumbent's chosen axis is *channel/deliverable tactics* (make an image, make a video, submit
  to directories, generate schema) — which is precisely the ground our evidence-based-marketing and
  attribution-honesty hypotheses would NOT compete on. That is a plausible differentiation seam, not
  a proven one.
- **CREDIBILITY NOTE:** author-promotional, so bottom rung *as argument*; but the factual claims are
  first-party and trivially checkable at the repo, which raises them once verified. **Not yet
  verified by me** — I did not open the repo (channel scope), and star counts and skill counts are
  volatile.
- `UNVERIFIED:` the 10,000+ star count, the 40-skill/83-integration counts, the license, and current
  version. Verified by opening github.com/coreyhaines31/marketingskills and reading its LICENSE file,
  README, and skill directory. **This belongs to the `mkt-skills` / `mkt-github` channels — flagged
  to the controller for routing so it is not dropped between channels.**
- **Volatile-fact dates:** v1.3.0 / "10,000+ stars" as of 2026-03-03; v1.9.0 / "40 skills, 52 tool
  integrations" as of 2026-04-24; v2.0.1 / "40 skills, 83 tool integrations" as of 2026-05-19.

## 4. Zero-audience gap-closing sweep (run by me, 2026-08-01, after workers finished)

Context: I ordered the email/social/ASO worker to abandon its in-flight `D_zeroaudience` batch so the
channel could close. That order — mine, not the worker's failure — is what created the sub-area D gap
in `_raw/x-email-social-aso.md`. Once the other three workers finished, the shared X account was no
longer contended, so I ran the worker's own prescribed remedy myself: `xrelay user-posts` (the endpoint
that stayed healthy throughout) against the five indie-hacker seed handles, serialized with 4s gaps.
All five resolved and returned 25 posts each.

**Headline result: the genre is not where it used to be.** Across 125 posts from the five canonical
zero-audience/indie-hacker accounts, essentially none were "first 100 users" playbooks. Their current
feeds are dominated by AI-disruption discourse. This is itself a finding — the charter's expected
"first-100-users playbook" genre was not live on these accounts as of 2026-08-01 — and it independently
corroborates the email/social worker's observation that this vocabulary now collides with AI-tooling
noise.

### D-1. A founder's own analytics showing organic search collapse (the best find of my sweep)
- **SOURCE:** https://x.com/yongfook/status/2081184546087944534 — @yongfook (Jon Yongfook, founder of
  Bannerbear), 2026-07-26. 940 likes / 502 bookmarks. Full text read from the capture, not truncated.
- **SPECIMEN or EVIDENCE:** **evidence** — first-party operator data about his own business, posted
  with a chart, including the bad news. Not a funnel post; there is nothing being sold.
- **WHAT IT TEACHES:** His Google referrals "basically halved" over 2026, and weak signups/conversions
  were downstream of that traffic loss. His stated conclusion: there is no short-term fix, he must
  explore other channels (YouTube, newsletter, creators), and — the load-bearing sentence for the pack
  — the strategy of "just write content" is losing its efficacy.
- **VERBATIM-WORTH-KEEPING:** "Our google referrals have basically halved this year." (attributed to
  @yongfook, 2026-07-26; 9 words.) And: "Current strategy of 'just write content' seems to be on the
  way out in terms of efficacy." (attributed likewise; 18 words.)
- **RELEVANCE TO PACK JOBS:** content-strategy-and-briefs, seo-strategy, go-to-market-and-launch, and
  the zero-audience overlay. **This is the channel's strongest convergence point:** it independently
  corroborates the SEO worker's zero-click findings (B6/B8 in `x-seo-geo-content.md`) from a completely
  different evidence class — a single operator's own analytics rather than a Similarweb panel — and
  neither source cites the other.
- **CREDIBILITY NOTE:** Named practitioner with a long public track record, reporting his own numbers
  against his own interest. Third rung, but unusually clean for this channel because there is no
  commercial stake in the claim. `UNVERIFIED:` the chart itself was an image I did not OCR, so
  "halved" is his characterization of his own data; verified by his own analytics, which are private.

### D-2. The same author correcting his amplifiers (a discipline specimen worth keeping)
- **SOURCE:** https://x.com/yongfook/status/2082681331436372319 — @yongfook, 2026-07-30.
- **SPECIMEN or EVIDENCE:** evidence about the *distortion process*, and a specimen of how a modest
  first-party claim mutates as it spreads.
- **WHAT IT TEACHES:** Within four days, his "my Google referrals are down, I need new channels" post
  had been reframed by others into "SaaS is dead" and "indie hacking is dead." He publicly pushed back:
  his video was only him saying he needs to try new marketing channels. A precise, dated, self-contained
  case of claim inflation — the exact mechanism that makes this channel hazardous.
- **VERBATIM-WORTH-KEEPING:** "I don't get how people are concluding 'SaaS is dead' ... from me saying
  my google referrals are decreasing." (attributed to @yongfook, 2026-07-30; 19 words.)
- **RELEVANCE TO PACK JOBS:** directly supports an anti-folklore/verification invariant — trace a claim
  to its origin, because the amplified version routinely overstates the original.
- **CREDIBILITY NOTE:** The primary source correcting the record about his own claim — the highest
  available confidence for this kind of item.

### D-3. The classic indie-hacking playbook, named and declared obsolete (relayed)
- **SOURCE:** https://x.com/levelsio/status/2082795824258359493 — @levelsio, 2026-07-30. 1,648 likes /
  1,155 bookmarks.
- **SPECIMEN or EVIDENCE:** **specimen** — levelsio is summarizing someone else's video (@fireship_dev),
  not reporting his own data. Useful for what it names, not as proof of what it claims.
- **WHAT IT TEACHES:** It states the canonical zero-audience playbook explicitly — learn to code, find a
  niche, ship a micro-SaaS, build in public, post MRR screenshots, repeat — and argues each leg is
  eroding: execution is now cheap, building in public makes the roadmap copyable, and the space is
  crowded. Its closing note is the marketing-relevant one: the survivors are those who master
  distribution, branding, or proprietary data.
- **RELEVANCE TO PACK JOBS:** go-to-market-and-launch and the zero-audience overlay — it gives the pack
  the incumbent playbook in the genre's own words, plus a live argument for why a marketing pack's
  distribution/positioning emphasis is the durable part.
- **CREDIBILITY NOTE:** Third-hand (levelsio relaying Fireship relaying a thesis), no data. `UNVERIFIED:`
  every causal claim in it. Value is as a named artifact of what the genre currently believes, nothing
  more. Note the engagement (1,648 likes) vastly exceeds D-1's (940) despite D-1 carrying real data and
  this carrying none — a clean in-corpus demonstration of the charter's "engagement is not credibility."

### Residual D gap after my sweep
The 10-query `D_zeroaudience` jargon batch still never completed (its orphaned process was still
running at 00:49 and never wrote `D_zero_corpus.json`). So waitlist-conversion numbers, "do things that
don't scale" material, and first-paying-customer post-mortems remain uncovered. Closing it needs that
batch re-run on an uncontended account.

### Secondary observation from the same author's posts

His `/ai-seo` update (2026-05-19) reframes `llms.txt` as, in his words, something Google does not
require but that other assistants "reward" — a claim about AI-search behavior with no cited evidence.
`UNVERIFIED:` and a good example of the GEO-folklore hazard entering even well-starred tooling.
Verified by finding a controlled study of assistant crawl/citation behavior with and without
`llms.txt`. Assigned to the SEO/GEO worker's remit.
