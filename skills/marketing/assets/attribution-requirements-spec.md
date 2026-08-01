# Attribution Requirements Spec

Marketing owns the **requirements**; `data` owns the pipeline and the SQL. Fill this before traffic
arrives — a taxonomy retrofitted onto six months of inconsistent tags is not a taxonomy. Source:
[`references/attribution-and-measurement.md`](../references/attribution-and-measurement.md).

## 1. Method choice — pick by what your scale can support

| Method | Answers | Cannot answer | Available to us? |
|---|---|---|---|
| Platform-reported conversions | Which touchpoint fired last before a tracked conversion | Whether it was **incremental** | |
| Multi-touch attribution | A credit split across *observed* touchpoints | Causality; blind to offline/organic; degrades under consent gating and ATT | |
| Self-reported ("how did you hear about us") | Directional channel awareness, cheaply | Precision; recall and social-desirability bias | |
| Holdout / conversion lift | True incremental effect vs. a matched control | Needs real statistical power — most advertisers never reach it | |
| Geo-lift | Market-level incremental effect; survives ATT and cookie loss | Needs enough independent geo units and a stable outcome metric | |
| Marketing-mix modelling | Cross-channel contribution and diminishing returns | Needs years of weekly data; not causal ground truth alone | |

**Chosen method:** ______  **What it cannot answer, stated for whoever reads the result:** ______

Platform-reported conversions answer "what fired," never "what was incremental." Never let the two
be reported as the same fact.

## 2. UTM taxonomy — the cheapest thing that works

| Parameter | Allowed values | Rule |
|---|---|---|
| `utm_source` | | The specific property, never the company |
| `utm_medium` | | Fixed vocabulary — this is where taxonomies rot |
| `utm_campaign` | | Naming convention written down, not remembered |
| `utm_content` | | Creative or placement variant |
| `utm_term` | | Keyword, paid search only |

Rather than inventing a channel taxonomy, start from one already implemented and documented —
Plausible's acquisition module classifies every visit into 19 channels (as-of 2026-08-01 —
re-verify against lib/plausible/ingestion/acquisition.ex before citing an exact count) via a
first-match-wins precedence cascade, and adds an **AI Assistants** channel that GA4 lacks.

Two disambiguation rules worth copying: detect a paid medium by pattern (anything containing "cp",
"ppc", or starting with "paid"), not an exact-match list, because campaigns are routinely
mislabelled; and expect that Google and Bing paid clicks are inferred from click IDs, because
third-party tools cannot detect them from UTM parameters alone.

**"Unknown" is honest. "Direct" is a claim.** Do not let untagged traffic silently become a channel.

## 3. Conversion and event definitions

| Event | Definition (unambiguous) | Where it fires | Owner |
|---|---|---|---|
| | | | |

| Field | Value |
|---|---|
| Attribution window | |
| Lookback model | |
| Self-reported field — required at signup? | |
| Where the self-reported answer is stored and who reads it | |

Self-reported attribution is cheap and biased in a **known** direction. Directional, not precise,
worth having anyway — and on a long sales-assisted cycle it is often the best signal that survives
at all.

## 4. The pre-committed decision rule

Write this **before the campaign runs**. At n=1 there is no second person auditing whether you
re-ran the analysis until it looked right — independence has to come from the source, the clock, or
a rule committed to in advance.

| Field | Value |
|---|---|
| What we are spending, over what period | |
| The result that makes us **increase** spend | |
| The result that makes us **cut** spend | |
| The result that means "inconclusive" — and what we do then | |
| Date this rule was written (must precede the result) | |
| Where it is stored so it can't be quietly edited | |

## 5. Reporting honesty

- [ ] Every number reported upward names its method from §1, not just its value
- [ ] Any vendor-sourced incrementality figure carries its vendor footnote **at the point of use** —
      a vendor aggregate is evidence about a pattern and simultaneously a specimen of the genre that
      sells the service
- [ ] Retargeting and warm-audience results carry more scepticism than cold-audience ones, not less
- [ ] Where platforms disagree, no single "true" number is fabricated: name each source's systematic
      bias, pick one for reporting consistency, and flag it as directional
- [ ] If marketing-mix modelling was proposed, the data-history gate was checked against what
      actually exists first

## 6. Handoff to `data`

Artifact path: ______ · Requirements owner: ______ · What `data` builds: the pipeline, the joins, the
stored model. What marketing keeps: the method choice, the decision rule, and the interpretation.
