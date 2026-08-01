# Channel B report — X/Twitter practitioner knowledge (marketing deep research)

Sub-orchestrator: mkt-x. Collection window: 2026-07-31 → 2026-08-01. Charter:
`research/marketing/charter.md` (binding). Method: 4 sonnet workers on partitioned topics + my own
calibration probes, bookmark-cache sweep, and a gap-closing sweep. Workers did NOT read
`controller-canon.md`; I read it only to target gaps.

Raw files (all under `research/marketing/_raw/`):

| File | Partition | Finds |
|---|---|---|
| `x-positioning-gtm.md` | positioning, messaging, category framing, segmentation, brand science, GTM/launch | ~16 |
| `x-seo-geo-content.md` | SEO, AI-search shift/GEO, content strategy | ~40 |
| `x-attribution-paid.md` | attribution, incrementality, MMM, paid post-ATT | ~55 (+~70-row sources table) |
| `x-email-social-aso.md` | email/deliverability, social/community/DevRel, ASO, zero-audience | ~31 |
| `x-controller-probes.md` | my calibration, bookmark cache, competitor find, zero-audience gap-closing | 6 |

---

## 1. Verdict on channel quality

**Usable, but only under authority routing — and the retrieval method is itself the channel's main
finding.** The lead's hazard #1 is confirmed and is worse than a content-quality problem: it is a
*retrieval* problem. Generic topical search under `--product Top` returned roughly 7-in-10 rows of
zero-engagement vendor advertising or off-topic noise, and engagement floors did not fix it (a
`positioning messaging B2B SaaS min_faves:100` probe returned mostly unrelated developer posts that
merely contained the string "B2B SaaS"). Two patterns did work and carried the entire run:
`from:<named practitioner>` sweeps, and jargon-dense queries using vocabulary practitioners actually
type. Technical vocabulary self-filters, because the slop-producing accounts do not know the words.

The channel's value is **highly uneven by topic**, and the ranking is worth acting on:

- **Attribution/paid — the richest partition by a wide margin.** One anchor source (@eric_seufert)
  plus a measurement-vendor CMO (@oliviaakory) produced dated, mechanically specific material with
  real numbers. This is where the pack's honesty flagship should be sourced.
- **SEO/AI-search — rich but the most adversarial.** Highest primary-source density (Google's own
  accounts) *and* highest snake-oil density in the same partition.
- **Email/deliverability and ASO — solid.** Jargon queries worked as calibrated; named practitioners
  posted live, numbered experiments.
- **Positioning and brand science — thin on X, and this matters.** The evidence-based-marketing
  academics (Sharp, Binet, Field, Romaniuk) have no discoverable active X presence, and April
  Dunford's account is dormant by her own bio ("Not active on X"). **The single most likely flagship
  topic is the one X cannot source.** That is a routing instruction for the web/books channels, not a
  defect in this one.
- **Organic social/community/DevRel and zero-audience — thin.** DevRel and community vocabulary now
  collides with the AI-tooling hype cycle, which drowns it out even at high like floors.

**Specimen:evidence ratio observed:** roughly **35:65 specimen-to-evidence across the finds we kept**,
but that number is misleading on its own and should not be quoted without its denominator. It reflects
the *post-filter* corpus. In the *unfiltered* result stream the ratio inverts to roughly 75:25 or worse
— consistent with the lead's 75–85% prior. The filtering, not the platform, produced the good ratio.
Within kept finds it varies sharply by partition: attribution and email/ASO skewed evidence-leaning
(~60:40 evidence), while community and zero-audience skewed specimen (~60:40 specimen).

---

## 2. Top findings

Ordered by value to the synthesis gate, not by topic.

**1. An incumbent competitor exists, and the marketing niche is NOT open.**
`coreyhaines31/marketingskills` — a free, open-source, Agent-Skills-spec marketing pack, `npx skills
add coreyhaines31/marketingskills`, advertising 40 skills and 83 tool integrations (as of 2026-05-19)
and claiming 10,000+ GitHub stars (as of 2026-03-03). Its surface overlaps our candidate job list
heavily and in places exceeds it, including `/revops` and `/sales-enablement`, which our family assigns
to `sales`. *Value:* unlike `architecture`, any wedge claim must now be argued against a large
incumbent. Encouragingly its axis is channel/deliverable tactics (generate an image, submit to
directories, emit schema) — not the evidence-and-honesty ground our hypotheses would occupy. Routed to
`mkt-github`/`mkt-skills`; star and skill counts are the author's own promotional claims and remain
UNVERIFIED here.

**2. llms.txt is not merely unproven — it appears falsified.** An SE Ranking study of ~300,000 domains
found no statistically significant correlation between having llms.txt and AI-citation frequency;
removing it from the predictive model *improved* accuracy. Server-log analysis across 137,000+ domains
found 97% of llms.txt files are never fetched by AI crawlers. Gary Illyes is on record that Google does
not support it. *Value:* a checkable, falsifiable debunk of one of the most repeated GEO tips — and it
directly contradicts the incumbent competitor's `/ai-seo` skill, which reframes llms.txt as something
assistants "reward." This is the clearest single demonstration that the wedge hypothesis (folklore
correction) is real.

**3. Zero-click has the channel's best-sourced statistic, and its author sells the thesis.** 68.01% of
Google searches ended without a click (Similarweb mobile+desktop panel, Jan–Apr 2026), with a public
self-correction to 232 clicks per 1,000 searches — @randfish, 2026-06-09. The same account actively
sells a book built on that thesis. *Value:* the single most load-bearing SEO statistic **and** a
textbook specimen/evidence separation the pack can teach from. The data does not become false because
the messenger profits; the pack must model holding both facts at once.

**4. Two independent evidence classes converge on the traffic collapse, without citing each other.**
Against the Similarweb panel above, @yongfook (Bannerbear founder, 2026-07-26) reported his own Google
referrals "basically halved this year," with weak signups downstream, concluding "just write content"
is losing efficacy. *Value:* **the strongest convergence in the channel** — a vendor panel and a single
operator's private analytics, different evidence classes, no shared source. Convergence across
non-citing literatures is exactly the wedge pattern this family has used before.

**5. Every credible incrementality result on X has a commercial stake — and that absence is the
finding.** Across the whole attribution corpus, genuine experiment write-ups came either from a
measurement vendor citing its own book of business (Haus, Triple Whale — real numbers, grading their
own homework) or from a single practitioner who immediately caveated their own sample size (a $400K
Meta conversion-lift test showing 1.84x incremental ROAS vs 2.33x platform-blended, with a same-day
walk-back on statistical power). *Value:* nobody published a disinterested third-party incrementality
result. The pack should state that plainly rather than pretend a clean citation exists.

**6. Platform-reported numbers over-claim in specific, nameable directions.** StockX found Meta Catalog
Ads looked like ~75% of Q4'24 paid-social spend under MTA but showed "almost no lift" under testing,
while YouTube looked near-zero under MTA and became its #2 channel after testing. Advantage+ reportedly
over-reports revenue by 12 percentage points vs manual campaigns. *Value:* directional, teachable
shapes — which channels platforms systematically over- and under-credit — with the vendor origin
footnoted every time a specific percentage is used.

**7. A mechanism-level, dated observation of how AI answers actually pick sources.** @lilyraynyc
(2026-07-31) documented ChatGPT running `site:`-scoped fan-out searches — Reddit for opinion queries,
`.gov` for legal/YMYL (all ~20 legal prompts she checked cited only `.gov`), and the dominant brand's
own domain for product queries — concentrating citations toward Reddit and already-trusted brands.
*Value:* the rare GEO finding that is mechanical, dated, and has a disclosed N, rather than a checklist.

**8. Deliverability and ASO both have checkable primary sources sitting under folklore.** One-click
List-Unsubscribe traces to RFC 2369/8058; DMARC `p=reject` (not mere SPF/DKIM presence) is the actual
enforcement lever, with a clean before/after case (20+ daily spoofed emails stopped). On ASO, Apple's
Product Page Optimization behaves very differently by app size — small apps see real screenshot-driven
conversion swings, large brand-search-heavy apps see almost none — and PPO data is unstable for its
first 2–3 days. *Value:* narrow strips where the pack can be *correct* rather than merely opinionated.

**9. A named attribution-bias pattern worth teaching directly.** @glenngabe (2026-07-31): sites blame
AI Overviews for traffic loss when the real cause was a core update or spam penalty, because "AIOs" is
a more palatable public explanation than a quality problem. *Value:* a diagnostic the pack can apply to
every self-reported "AI killed my traffic" post-mortem, including the ones in our own corpus.

---

## 3. SOURCES table

Per the charter (url · specimen/evidence · credibility rung · as-of date). This is the
sub-orchestrator-level table of load-bearing sources; each raw file carries its own complete
per-partition table (the attribution file alone lists ~70 rows).

**License note:** X posts are not licensed artifacts. No repo or skill was cloned in this channel, so
the charter's license-every-mined-repo rule has no subject here. The one repo surfaced
(`coreyhaines31/marketingskills`) was NOT opened by me; its license is unexamined and is
`mkt-github`/`mkt-skills`'s to record.

| URL | Tag | Rung | As-of |
|---|---|---|---|
| x.com/coreyhainesco/status/2056713294149517373 | specimen (artifact = evidence) | author-promotional; repo checkable | 2026-05-19 |
| x.com/coreyhainesco/status/2028825363074482657 | specimen | author-promotional | 2026-03-03 |
| x.com/googlesearchc/status/2057489654232834557 | evidence | **primary** (Google), corroborated vs status dashboard | 2026-05-21 |
| x.com/googlesearchc/status/1858923351915581518 | evidence | **primary** (Google) — site-reputation-abuse policy | 2024-11-19 |
| x.com/methode/status/1418979081782190089 | evidence | **primary** (Google employee) — CWV is not immunity | 2021-07-24 |
| x.com/methode/status/1417920011071537153 | evidence | **primary** (Google employee) — 301s ≥1 year; possibly superseded | 2021-07-21 |
| x.com/rmstein/status/1918036687298404788 | evidence | **primary** (Google VP Search) — AI Mode rollout | 2025-05-01 |
| x.com/randfish/status/2064243876051996965 | evidence | named practitioner + named panel (Similarweb) | 2026-06-09 |
| x.com/randfish/status/2083271017263444467 | **specimen** | same author selling the thesis — pair with the row above | 2026-07-31 |
| x.com/yongfook/status/2081184546087944534 | evidence | named founder, own analytics, against interest | 2026-07-26 |
| x.com/yongfook/status/2082681331436372319 | evidence (of claim inflation) | primary source correcting his amplifiers | 2026-07-30 |
| x.com/lilyraynyc/status/2083226098846830726 | evidence | named practitioner, mechanism-level, disclosed N≈20 | 2026-07-31 |
| x.com/lilyraynyc/status/2082120900590387355 | evidence | named practitioner — citation counts are gameable | 2026-07-28 |
| x.com/lilyraynyc/status/2082535760889283017 | specimen (parody of vendor overclaim) | named practitioner | 2026-07-29 |
| x.com/aleyda/status/2082418441508520417 | evidence | vendor research (Semrush) via named practitioner | 2026-07-29 |
| x.com/aleyda/status/2081810833722790355 | evidence | named practitioner, disclosed N=43,513 prompts | 2026-07-27 |
| x.com/glenngabe/status/2083162298596602047 | evidence | named post-mortem quoting John Mueller | 2026-07-31 |
| x.com/glenngabe/status/2083167405459603655 | evidence (pattern) | named practitioner | 2026-07-31 |
| x.com/Marie_Haynes/status/2080696283421896937 | **specimen** | self-promoted personal format (OKF), not a standard | 2026-07-24 |
| x.com/iPullRank/status/2083231240858313009 (+3) | **specimen** | agency funnel content, unsourced stats, ~0 engagement | 2026-07-22→31 |
| x.com/max_rosewater/status/1979780954626695618 (+ walk-back) | evidence | named practitioner, real holdout + self-correction | 2025-10-19 |
| x.com/oliviaakory/status/2029024535169630505 | evidence | practitioner (StockX) quoted via vendor | 2026-03-04 |
| x.com/oliviaakory/status/2005289236824473760 | evidence (vendor aggregate) | Haus grading its own homework | 2025-12-28 |
| x.com/oliviaakory/status/2031017904963985633 | evidence | vendor-adjacent, but a methodology-integrity point | 2026-02-25 |
| x.com/BryantGarvin/status/2031153287924429087 | evidence | named data partner (Triple Whale), dated | 2026-03-09 |
| x.com/eric_seufert/status/1820509617224302677 | evidence | primary analyst — black-box incentive to waste | 2024-08-05 |
| x.com/eric_seufert/status/1885797279379882371 | evidence, volatile | primary analyst — Meridian/Robyn status | 2025-02-01 |
| x.com/eric_seufert/status/1918701579131133993 | evidence, volatile | primary analyst — Apple self-preferencing | 2025-05-03 |
| x.com/eric_seufert/status/2067592357051044253 | evidence, volatile | primary analyst — SKAN/AAK state at WWDC 2026 | 2026-06-18 |
| x.com/avinash/status/1494345254157250562 | evidence | named practitioner — DDA $90 vs $1,034 incremental | 2022-02-17 |
| x.com/garjoh_canuck/status/1979162568443752584 | evidence, volatile | privacy researcher — Privacy Sandbox shutdown | 2025-10-17 |
| x.com/antonioventre_/status/2065828796284956873 (+2) | evidence | named practitioner — standard vs incremental attribution | 2026-06-13→07-03 |
| x.com/HaktanSuren/status/2083202272226398615 | evidence | practitioner — "Unknown is honest. Direct is a claim." | 2026-07-31 |
| x.com/zenorocha/status/1744740648283201989 | evidence | email-infra founder; RFC 2369/8058 are **primary** | 2024-01-09 |
| x.com/JoshWComeau/status/1781015586899660959 | evidence | named practitioner — DMARC p=reject before/after | 2024-04-18 |
| x.com/wesbos/status/2037180828933906863 | evidence | named practitioner — spoof passing SPF/DKIM | 2026-03-26 |
| x.com/draprints/status/2078828205893714083 | evidence-leaning, **all figures UNVERIFIED** | agency rung; consent-law fines need primary texts | 2026-07-19 |
| x.com/filippkowalski/status/1966107197747925246 | evidence | multi-practitioner synthesis, named co-authors (ASO/PPO) | 2025-09-11 |
| x.com/kedytcom/status/2081877300384276747 | evidence | named practitioner, live n=1 with country numbers | 2026-07-27 |
| x.com/kedytcom/status/2068634197124685880 | evidence, **UNVERIFIED** | Apple keyword-field NLP shift; no Apple source | 2026-06-21 |
| x.com/expo/status/2056732974050365774 | **specimen**, UNVERIFIED | vendor; 65–70% App-Store-search stat unsourced | 2026-05-19 |
| x.com/b0rk/status/1797605874581532828 | evidence | named practitioner disclosing own sales (1,000+ zines) | 2024-06-03 |
| x.com/simonw/status/1819047183217270846 | evidence (heuristic) | named, high-credibility technical source | 2024-08-01 |
| x.com/DavidSpinks/status/1897294067651973175 | evidence (anecdote) | credentialed community authority, n=1 reach decay | 2025-03-05 |
| x.com/EhrenbergBass/status/2081625393094922290 | evidence | **institute** — highest rung available on X here | 2026-07-27 |
| x.com/jasonlk/status/2083139361546146034 | evidence (heuristic) | named practitioner (SaaStr) | 2026-07-31 |
| x.com/bbalfour/status/2062586525276348763 | evidence | named practitioner; context-stripped reply | 2026-06-04 |
| x.com/poyark/status/1816452339315736669 | specimen-leaning evidence | named practitioner framework, no disclosed data | 2024-07-25 |
| x.com/rrhoover/status/2079974835761959422 | evidence, self-interested | platform owner (Product Hunt) | 2026-07-22 |
| x.com/levelsio/status/2082795824258359493 | **specimen** | third-hand relay, no data; 1,648 likes vs 940 for real data | 2026-07-30 |
| x.com/jurree/status/2082059924721619091 | **specimen**, UNVERIFIED | 32k organic users claim, substantiation behind unread link | 2026-07-28 |

---

## 4. What I did NOT cover, and why

1. **Positioning's canonical sources are absent from X, and this is the most consequential gap.**
   Byron Sharp, Les Binet, Peter Field and Jenni Romaniuk had no discoverable active accounts under
   the seed handles or plausible variants; April Dunford's account is dormant by her own bio. The
   Ehrenberg-Bass institute account was mined as a substitute and yielded only three usable, partly
   teaser-gated posts. **If positioning-and-messaging is the flagship, this channel cannot source it —
   route to web/books.**

2. **The jargon-query batches largely never executed.** The shared X account degraded specifically on
   the `search`/`batch` endpoint under sibling-agent contention (confirmed via `xrelay doctor`:
   15s timeout on `search` while `auth`, `thread` and `user-posts` stayed healthy; 11 concurrent
   xrelay processes observed at one point). The positioning worker's 28 jargon queries produced
   **zero** captured results; the SEO worker's 17-query sweep could not run; the attribution worker's
   second batch was abandoned. Everything above came from `from:` sweeps, which is a real methodological
   narrowing, not a cosmetic one — the open-net half of the design was never exercised.

3. **The zero-audience partition is thin, and the immediate cause was my own order.** I directed the
   email/social worker to abandon its in-flight `D_zeroaudience` batch so the channel could close.
   After the other workers finished I ran the remedy myself against the five indie-hacker handles;
   all resolved, but across 125 posts essentially none were "first 100 users" playbooks — their feeds
   are currently dominated by AI-disruption discourse. That absence is itself a finding. Still missing:
   waitlist conversion numbers, "do things that don't scale" material, first-paying-customer
   post-mortems. Closing it needs the 10-query batch re-run on an uncontended account.

4. **Not covered at all:** partnerships/PR/affiliates and FTC disclosure (no worker was assigned it —
   a partition design gap I own, not a platform limitation); short-video repurposing workflows;
   owned-vs-rented community with real retention numbers; DevRel impact measurement with numbers;
   ASO ratings velocity specifically.

5. **Not verified by me:** every claim I attribute above lives in a worker file with its own
   credibility note. I personally verified only the calibration probes, the bookmark sweep, the
   competitor posts, and the zero-audience sweep. In particular I did **not** open the competitor repo,
   fetch the Similarweb/Semrush/Haus underlying reports, read The Meta Report's 640-experiment
   findings, or check any consent-law fine figure against a primary legal text.

6. **Volatility warning for the synthesis gate.** A large share of this channel's most quotable
   material is platform behavior with a short half-life: AI Overview coverage percentages, AI Mode
   share, SKAdNetwork/AdAttributionKit state, Privacy Sandbox status, Apple's keyword-field parsing,
   Advantage+/PMax mechanics. Every one carries an as-of date in the raw files. Per the family's
   standing anti-staleness rule, the pack should teach the *mechanism and the check*, and treat every
   specific percentage as illustrative and re-verifiable — not as a shipped fact.
