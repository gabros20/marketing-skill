# Attribution and measurement

Purpose: Teach what a given measurement method can and cannot tell you, why almost nobody can
run a valid lift test, and what a solo or small-spend builder should do instead of pretending
otherwise. This is the pack's flagship: every other channel reference assumes this honesty
hierarchy, not the platform dashboard, is the arbiter of "did it work."

Read when:
- Choosing how to measure a campaign, channel, or launch, or deciding whether a reported ROAS/CAC
  number is trustworthy enough to act on.
- Writing an attribution or measurement requirements spec (UTM taxonomy, event/conversion
  definitions, attribution window) for engineering to implement.
- A stakeholder wants a single reconciled "true" number across platforms that disagree.

Skip when:
- The question is which paid channel or campaign type to run — [paid-acquisition.md](paid-acquisition.md).
- The question is experiment design, sample-size planning, or a growth funnel test — that is
  `growth`'s territory; this file only tells you what attribution and MMM can support.
- The question is pipeline/warehouse mechanics for computing attribution — that is `data`'s;
  this file owns the requirements, not the SQL.

Inputs: a campaign or channel whose performance needs judging; whatever conversion data already
exists (platform dashboards, CRM, warehouse); an honest read of your spend and data-history scale.

Produces: a measurement-method choice matched to your scale, a documented confidence level for
any number you report upward, and — at n=1 — a pre-committed decision rule instead of a dashboard
metric.

## Contents

- 1. The honesty hierarchy
- 2. The gap is not marginal: eBay and StockX
- 3. Why almost nobody can run a valid lift test
- 4. The triangulation consensus and its scale gates
- 5. Grading your own homework: the vendor-aggregate caveat
- 6. The n=1 answer
- 7. Validate against brand science, not just conversions
- 8. A channel taxonomy that already exists

---

## 1. The honesty hierarchy

Every measurement method answers a narrower question than it is asked to answer. Rank them by
what they can actually support, not by how confidently they're reported:

| Method | Answers | Cannot answer | Cost |
|---|---|---|---|
| Platform-reported conversions | Which touchpoint fired last before a tracked conversion | Whether the conversion was incremental — would it have happened anyway | ~$0, built in |
| Multi-touch attribution (MTA) | A credit split across observed touchpoints (first/last/linear/position/time-decay/Markov/Shapley) | Causality; blind to unobserved, offline, or organic touchpoints; degrades under consent gating and ATT | Low–medium |
| Self-reported ("how did you hear about us") | Directional channel awareness, cheaply | Precision; recall and social-desirability bias | Very low |
| Holdout / conversion lift | The true incremental effect of exposure vs. a matched control | Needs real statistical power (§3) | Medium |
| Geo-lift | Incremental effect at the market level, survives ATT/cookie loss, no user tracking needed | Needs enough independent geo units and a stable outcome metric | Medium |
| MMM | Cross-channel, longer-run incremental contribution and diminishing-returns curves | Needs years of weekly data; not causal ground truth on its own (§4) | Medium–high |

**Platform-reported conversions answer "what fired," never "what was incremental."** That single
sentence is the load-bearing claim of this file — everything below is evidence for it, and §6 is
what to do because of it.

## 2. The gap is not marginal: eBay and StockX

eBay ran a large-scale paid-search field experiment (Blake, Nosko & Tadelis, *Econometrica*
83(1), 2015). Naive OLS estimation of paid-search ROI came in at **over 4,100% uncontrolled and
over 1,400% with time/geo controls**; the actual experiment — ads turned off in randomized
markets — measured **−63% ROI (95% CI: [−124%, −3%])**, rejecting the hypothesis of positive
return. Mechanism: people who click branded/high-intent search ads were mostly going to buy
anyway; the correlation between clicks and purchase intent is what observational methods mistake
for causation. Infrequent or new users showed some real incremental response; frequent high-intent
users, who generate most of the spend, showed near-zero.

That mechanism generalizes past search ads: it is the same reason **retargeting is the format
most likely to overstate its own incrementality** — it targets people who already clicked or
browsed, the exact population eBay's experiment found least responsive.

A live, named example of the same reversal at channel granularity: StockX's Head of Growth, Alex
Turner (via Haus CMO Olivia Akory, [x.com/oliviaakory, 2026-03-04](https://x.com/oliviaakory/status/2029024535169630505))
reported that Meta Catalog Ads looked like roughly 75% of Q4 paid-social spend under MTA, while
incrementality testing showed almost no lift — triggering a rebuild toward brand creative — and
that YouTube looked like it drove almost zero conversions under MTA-only measurement, while
incrementality testing found it real enough to become the company's #2 acquisition channel after
doubling spend. Note the vendor adjacency: this reaches us through the measurement vendor whose
product ran the test. The *direction* of the reversal — MTA and incrementality disagreeing, in
both directions, on the same spend — is the teaching point; the specific channel split is one
company's report, not an audited study.

## 3. Why almost nobody can run a valid lift test

Lewis & Rao (*QJE* 130(4), 2015) analyzed 25 large field experiments at major US retailers and
brokerages and showed why platforms fall back on biased proxies instead of clean experiments: an
informative advertising experiment "can easily require more than 10 million person-weeks," because
baseline sales variance is large relative to plausible ad-driven lift. Concretely, the median
campaign in their dataset would need to be **9× larger to distinguish a genuine +50% ROI from
breakeven, and 62× larger to resolve a 10% ROI difference.** This is not a tooling problem — it is
a statistical-power problem baked into how noisy sales data is relative to realistic ad effects.
Most advertisers, including most large ones, never reach the scale a valid lift test requires.

## 4. The triangulation consensus and its scale gates

The field's answer to "attribution overclaims, and I can't run an experiment" is triangulation:
combine an observational model (MMM) with periodic incrementality experiments to calibrate it, and
treat MTA as directional, never as ground truth. That consensus is real, but it is gated by scale
on both open-source implementations:

- **Robyn** (Meta, MIT license): docs state a minimum of roughly **2 years of weekly data at a
  1:10 variable-to-observation ratio**. Hedge it on currency, not just data requirements: repo
  metadata shows a push in January 2026, but the last substantive commit predates it by roughly
  seven months, and the five most recent issues carry zero maintainer replies — treat Robyn as
  historically important and still technically valid, not as an actively evolving tool.
- **Meridian** (Google, Apache-2.0 license): docs say 2 years of weekly data for a geo-level model
  is **"too low to estimate the model reliably"** and recommend 3; a national-level model needs
  more still. Meridian's own docs are explicit about scope: it is **"designed for causal
  inference, not prediction"** and cannot forecast future outcomes.

Neither tool states a dollar-spend threshold — the gate is data history and channel variation, not
budget, which is why MMM is unreachable for a pre-launch or early-stage product regardless of ad
spend.

The strongest evidence for the triangulation consensus is that two companies with unrelated
codebases and no shared team independently built the same discipline. Both implement the identical
two-stage transform — adstock, then Hill-function saturation (Meridian:
`meridian/model/adstock_hill.py:304-328`; Robyn: `R/R/transformation.R` alpha/gamma). Both
concluded a single fixed decay rate is insufficient and shipped a second, richer decay family. And
both built machinery to force the model's channel-level estimate to agree with a real experiment
rather than trust the observational fit alone: Meridian folds a lift test in as an informative
Bayesian prior over the calibration window (`meridian/model/spec.py:114-137`); Robyn folds it in as
a loss-function penalty, `calibration_input` → `mape_lift` (`R/R/inputs.R:16-27`,
`R/R/calibration.R:632`). Two rival teams, two mechanisms, one conclusion: **uncalibrated MMM is
not trustworthy enough on its own.** Both also warn the calibration input must be the
point-estimate of the tested increment, not full channel spend — a 70%-holdout on $100k spend
implies a $30k point-estimate, not $70k.

## 5. Grading your own homework: the vendor-aggregate caveat

Aggregated incrementality numbers from measurement vendors (Haus, Triple Whale, and similar) are
the densest source of platform-vs-reality gap data available, and simultaneously vendors grading
the value of the exact product they sell. Use the *shape* of a finding — which channels or formats
platforms systematically over- or under-credit — as teaching material; footnote the vendor origin
every time a specific percentage is quoted, never present one as independently audited. This is
specimen-vs-evidence applied to measurement itself: a vendor aggregate is evidence about pattern
and simultaneously a specimen of the genre that sells incrementality testing as a service.

That caveat is also why a genuinely disinterested, third-party incrementality result is worth
naming as a gap, not assumed to exist: across an extensive search of practitioner and analyst
commentary, every credible "real experiment" report traced back either to a measurement vendor
citing its own book of business, or to a single practitioner's one-off test the poster themselves
immediately caveated for sample size. **No disinterested third-party incrementality result — with
no commercial stake in the outcome — was located.** Teach that absence explicitly rather than
letting a vendor number stand in for it.

## 6. The n=1 answer

Put §§2–5 together: platform attribution over-claims by construction, a valid lift test needs
scale almost nobody has (§3), and MMM is gated at two to three years of weekly multi-channel data
by its own vendors' documentation (§4). None of the three rigorous options are available. What
remains, in order of cheapness:

1. **UTM discipline.** Consistent, structured campaign tagging is what makes even directional
   self-reported and platform numbers legible at all — most of the ambiguity practitioners fight
   ("Direct" traffic that is really lost attribution, paid clicks under the wrong medium) is a
   tagging-discipline failure, not a platform limitation.
2. **Self-reported attribution.** A required "how did you hear about us" field is cheap and biased
   in a *known* direction — practitioners who instrument both report dramatically less paid/search
   share from self-reports than dashboards claim. Directional, not precise, worth having anyway.
3. **Geo-split lift, when geography allows.** The design that survives ATT and cookie loss —
   randomize non-overlapping geographic markets, run spend in treatment regions only, regress the
   outcome — needs enough independent geo units and spend to detect an effect. Real at small scale,
   not universal; run a power check before trusting a null result.
4. **Pre-committed decision rules.** Decide, before you see the number, what result would make you
   increase or cut spend — at n=1 there is no second person auditing whether you re-ran the
   analysis until it looked right. This is the same resolution `automation` reaches for the
   maker-checker problem it cannot staff: independence has to come from the source, the clock, or a
   rule committed to in advance, never from a second person who does not exist. Write the rule
   before the campaign runs, the way you'd write a reconciliation cadence before you needed it.

A practitioner put point 1 plainly: *"Unknown is honest. Direct is a claim"*
([@HaktanSuren, 2026-07-31](https://x.com/HaktanSuren/status/2083202272226398615)) — the discipline
that keeps point 4's rule honest.

## 7. Validate against brand science, not just conversions

A number can look incremental and still be the wrong thing to optimize. See
[marketing-science.md](marketing-science.md) for the full treatment of penetration-over-loyalty:
the strongest empirical base in marketing says growth comes overwhelmingly from acquiring new,
lightly-engaged buyers, not from extracting more from existing ones. A campaign that shows a clean
incrementality result while only harvesting buyers already in-market — the population the 95-5
heuristic describes as the minority "in market now" — has passed a measurement test without
answering the growth question. Read an incrementality result alongside "did this reach and convert
buyers new to the category," not instead of it; that connection between measurement mechanics and
brand-growth evidence is this pack's answer to a gap the wider genre leaves open.

## 8. A channel taxonomy that already exists

Before writing a bespoke UTM/channel taxonomy, start from one that is implemented, documented, and
already extends GA4's own reference categories: Plausible's `lib/plausible/ingestion/acquisition.ex`
classifies every visit into one of **17 acquisition channels** via a first-match-wins precedence
cascade (Cross-network, Paid Shopping, Paid Search, Paid Social, Paid Video, Display, Paid Other,
Organic Shopping, Organic Social, Organic Video, **AI Assistants**, Organic Search, Email,
Affiliates, Audio, SMS, Mobile Push, Referral, Direct as the true fallback). It adds a dedicated
**AI Assistants** channel — ChatGPT, Claude, Perplexity, Grok, Gemini, Copilot, Phind, DeepSeek —
that GA4 lacks, a real signal of where channel taxonomy is heading as AI-referred traffic grows.
It also encodes disambiguation rules practitioners rarely write down: a paid medium is detected by
regex (anything containing "cp", "ppc", or starting with "paid"), not an exact-match list, because
campaigns are routinely mislabeled; Google/Bing paid clicks are inferred from `gclid`/`msclkid`
specifically because, as the module's own comment puts it, *"Google is in a privileged position to
analyze paid traffic from within their own network"* — third-party tools cannot detect it from
UTM parameters alone.

## Validation

- Every measurement claim reported upward states its method from §1's hierarchy, not just a
  number — "platform-reported" and "incrementality-tested" are not interchangeable labels.
- Any MMM recommendation checks the data-history gate (§4) against what actually exists before
  proposing the tool.
- Any vendor-sourced incrementality figure carries its vendor footnote (§5) at the point of use,
  not only in a sources list.
- At n=1, a decision rule was written down before the result was seen, not after.

## Failure modes and handoff

- **A stakeholder wants one reconciled number across disagreeing platforms** — do not fabricate a
  single "true" figure. State that no source is objectively right, name the systematic bias in
  each, and pick one source of truth for reporting consistency while flagging it as directional.
- **The business has 2+ years of weekly multi-channel data and real spend variation** — MMM
  becomes viable; hand off the data-engineering and modeling build to `data`/`ai` as appropriate,
  keeping the calibration-experiment design and interpretation here.
- **The question turns into experiment design or sample-size planning for a growth test** — that
  decision belongs to `growth`; this file stops at "here is what your scale can support."
