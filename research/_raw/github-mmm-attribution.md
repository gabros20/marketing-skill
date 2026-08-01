# GitHub research — MMM, incrementality, multi-touch attribution, analytics/marketing-automation stack

Worker: mkt-github (worker 2). Scope: charter §A–D (open-source measurement seam). Read charter.md in full;
did not read controller-canon.md (independence). All clones/fetches read-only via `gh api`/WebFetch; no
clone was actually needed — README/docs-level reading via `gh api repos/<o>/<r>/contents/<path>` sufficed
for every source below. Nothing written under scratchpad/mkt-github/ because no local clone was required.
As-of date for all star counts / push dates / license snapshots: **2026-07-31** (session date at capture;
one source captured 2026-08-01, marked inline).

---

## A. Media/marketing mix modeling (MMM)

NOTE: google/meridian and facebookexperimental/Robyn are covered here only at README/methodology-index
depth per instruction — a sibling worker is doing the deep clone-and-walk. Depth budget spent on
pymc-marketing and mmm-eval instead, which no one else is covering.

### SOURCE: google/meridian
https://github.com/google/meridian — `README.md`
WHAT IT TEACHES: Meridian is Google's current MMM framework, explicitly built on "Bayesian causal
inference" (README links `docs/causal-inference/bayesian-inference`), handles geo-level data
preferentially over national-level, and supports "calibration of MMM with experiments and other prior
information" plus reach/frequency-based ad-frequency optimization. README states MMM "is privacy-safe
and does not use any cookie or user-level information" — a positioning claim, re-expressed not quoted.
VERBATIM-WORTH-KEEPING: none taken (light-touch pass; Apache-2.0 permits quoting but budget reserved for
deep sources).
RELEVANCE TO PACK JOBS: attribution-and-measurement (flagship candidate); paid-acquisition (budget
optimization).
CREDIBILITY NOTE: primary source (repo with real adoption, current Google product). pushed 2026-07-31,
1472★, Apache-2.0 (`LICENSE` file, confirmed via `gh api repos/google/meridian/license`).

### SOURCE: facebookexperimental/Robyn
https://github.com/facebookexperimental/Robyn — `README.md`
WHAT IT TEACHES: Meta's semi-automated MMM package: ridge regression + multi-objective evolutionary
hyperparameter search (Nevergrad) + time-series decomposition for trend/season + gradient-based budget
optimization + clustering; explores "adstock rates and saturation curves." Python version is explicitly
flagged in-README as "a LLM-translated Beta version and might encounter bugs," rewritten "from Robyn's R
package version 3.11.1... by utilizing various LLMs and AI workflows like Llama."
STALENESS FINDING (per charter instruction to assess): last push 2026-01-26 — a ~6-month gap as of
2026-07-31, versus google/meridian and pymc-labs/pymc-marketing both pushed the same day as this capture
(2026-07-31). Corroborating signal: mutinex/mmm-eval (see below), a 2026-07-28 evaluation-framework repo
explicitly built to standardize MMM benchmarking, states "Multi-framework support: Evaluate PyMC-Marketing
and Google Meridian models" — it does not mention Robyn at all. Read together, this is evidence (not
proof) that ecosystem tooling is consolidating around Meridian/pymc-marketing rather than Robyn.
UNVERIFIED: whether Robyn's Facebook/Meta group or CRAN cadence show separate recent activity outside the
GitHub main branch — would need `gh api repos/facebookexperimental/Robyn/commits` on non-main branches or
the CRAN page, not checked here.
RELEVANCE TO PACK JOBS: attribution-and-measurement; flags a risk for whichever pack reference cites Robyn
as "the" open MMM tool — the pack should hedge with "actively used, less actively maintained as of
mid-2026" language.
CREDIBILITY NOTE: primary source, but staleness lowers currency; MIT (`LICENSE`), 1498★.

### SOURCE: google/lightweight_mmm
https://github.com/google/lightweight_mmm — `README.md`
WHAT IT TEACHES: DEPRECATION IS EXPLICIT AND DATED. README top section, dated "As of 29 Jan 2025": "Google
has released a new official Bayesian MMM version called **Meridian**... Note that LMMM is not supported
anymore, so we **highly** recommend you switch to Meridian." Meridian's own README reciprocally links a
"migration guide" for LightweightMMM users. Methodology it still documents: national vs. geo-level
hierarchical Bayesian MMM built on NumPyro/JAX, KPI = intercept + trend + seasonality + media channels
(saturation/lag-transformed) + other factors — a textbook MMM decomposition worth re-expressing as the
pack's baseline MMM equation.
VERBATIM-WORTH-KEEPING: "Note that LMMM is not supported anymore, so we highly recommend you switch to
Meridian." (17 words, attributed, Apache-2.0 permits).
RELEVANCE TO PACK JOBS: attribution-and-measurement — this is a clean, dated, primary-source deprecation
notice the pack can cite directly instead of guessing MMM tool currency.
CREDIBILITY NOTE: primary source; Apache-2.0 (`LICENSE`); pushed 2025-06-17 (stale relative to Meridian,
consistent with its own deprecation notice), 1051★.

### SOURCE: pymc-labs/pymc-marketing
https://github.com/pymc-labs/pymc-marketing — `README.md`
DEPTH JUSTIFICATION: not covered by the sibling doing Meridian/Robyn; 1210★, Apache-2.0, pushed
**2026-07-31** (same day as capture — the most currently active MMM repo found in this run) with active
Discourse/Discord/Slack communities.
WHAT IT TEACHES: Bayesian toolbox spanning MMM, Customer Lifetime Value (CLV), and Customer Choice
Analysis. Its MMM API is explicitly built "on top of" Jin et al. 2017 ("Bayesian methods for media mix
modeling with carryover and shape effects"), extended by PyMC core developers. Concrete modeling
vocabulary documented: `GeometricAdstock` (carry-over transform), `LogisticSaturation` (diminishing-returns
curve) — both swappable/custom-implementable per the "mmm_components" doc; "Time-varying Intercept" and
"Time-varying Media Contribution" via Gaussian-process approximations for non-stationary baselines/media
efficiency; "Causal Identification" — input a business-driven DAG to select which variables to include for
valid causal conclusions (guide: `mmm_causal_identification.html`); "Experiment Calibration" — fine-tune
the model against empirical lift-test results (`mmm_lift_test.html`), with a named case study "Unobserved
Confounders, ROAS and Lift Tests" (`mmm_roas.html`) that directly addresses ROI-measurement bias; Budget
Optimization notebook for spend allocation under diminishing returns + carryover.
VERBATIM-WORTH-KEEPING: "Custom Priors and Likelihoods... Tailor your model to your specific business
needs by including domain knowledge via prior distributions." (paraphrased feature-table row, re-expressed
rather than quoted to stay well under cap). One direct quote: "Bayesian methods for media mix modeling
with carryover and shape effects" (the cited paper's own title, 9 words, attributed to Jin et al. 2017).
RELEVANCE TO PACK JOBS: attribution-and-measurement (flagship-grade methodology source — this is the most
teachable, most current, most concept-dense MMM repo in the whole search); paid-acquisition (budget
optimization); the causal-identification-via-DAG concept is directly reusable in the pack's "attribution
honesty" framing (a model is only as causally valid as the DAG backing it — an assumption, not a fact).
CREDIBILITY NOTE: primary source, real adoption (1210★, active as of capture date), backed by a named
commercial entity (PyMC Labs) that also sells consulting — flag per the arXiv-adjacent rule: PyMC Labs'
own blog posts cited in-README ("Bayesian Media Mix Modeling for Marketing Optimization," a HelloFresh
case study) are vendor engineering blog rung, not peer-reviewed, even though the underlying Jin et al.
paper is a Google Research publication (higher rung).

### SOURCE: mutinex/mmm-eval
https://github.com/mutinex/mmm-eval — `README.md`, `LICENSE`
WHAT IT TEACHES: A dedicated MMM evaluation methodology, independent of any one modeling framework —
"a standardized approach for evaluation and comparison of different MMM frameworks using a full suite of
validation tests including holdout accuracy, in-sample accuracy, cross-validated holdout accuracy, refresh
stability, perturbation, and placebo metrics." This is a rare, teachable list of what "is this MMM any
good" actually means operationally (holdout/in-sample/cross-validated accuracy = predictive fit under
different splits; refresh stability = does re-fitting on new data flip conclusions; perturbation and
placebo tests = robustness/false-positive checks, the MMM analogue of a placebo test in causal inference).
Explicitly supports "PyMC-Marketing and Google Meridian models" — no other framework named.
LICENSE NOTE: GitHub's API reports `NOASSERTION` for this repo, but the `LICENSE` file content is the full
Apache License 2.0 text and the README states outright: "This project is licensed under the Apache 2.0
License - see the LICENSE file for details." GitHub's license detector appears to have misclassified it;
treat as Apache-2.0 on the strength of the file content and the README's own claim.
VERBATIM-WORTH-KEEPING: "a standardized approach for evaluation and comparison of different MMM
frameworks" (12 words, attributed).
RELEVANCE TO PACK JOBS: attribution-and-measurement — gives the pack a vocabulary for "how do you know your
MMM is trustworthy" distinct from "how do you build one," which is exactly the kind of checkable,
primary-source-grade methodology the charter is fishing for.
CREDIBILITY NOTE: primary source, real (if young/small, 29★) adoption; company-backed (Mutinex, a
marketing-measurement vendor) — same vendor-credibility caveat as pymc-marketing; freshest MMM-adjacent
push found in this run (2026-07-28).

### SOURCE: sibylhe/mmm_stan
https://github.com/sibylhe/mmm_stan — `README.md` (description only; not deep-read — light touch)
WHAT IT TEACHES: Per repo description: "Python/STAN Implementation of Multiplicative Marketing Mix Model,
with deep dive into Adstock (carry-over effect), ROAS, and mROAS." Useful as a second, independent
confirmation that adstock/ROAS/mROAS are the standard MMM vocabulary triad (also present in
pymc-marketing and lightweight_mmm above) — triangulation, not new methodology.
RELEVANCE TO PACK JOBS: attribution-and-measurement (terminology confirmation only).
CREDIBILITY NOTE: MIT (`LICENSE`), 402★, pushed 2022-05-28 — stale, use only as terminology corroboration,
not as a currency claim.

### SOURCE: shakostats/Awesome-Marketing-Science (+ station-10/awesome-marketing-machine-learning)
https://github.com/shakostats/Awesome-Marketing-Science — `README.md`
WHAT IT TEACHES: Not itself methodology — a curated pointer list, useful for gap-scanning. Its "Start Here"
section independently corroborates several of this report's picks (GeoLift, PyMC MMM adstock/saturation
writeup) and surfaces adjacent primary literature this run did not deep-read: Google Research papers "A
Time-Based Regression Matched Markets Approach for Designing Geo Experiments" and "Trimmed Match Design for
Randomized Paired Geo Experiments" (both `research.google` — primary-source rung, un-fetched here), the
"Ghost Ads" incrementality paper (SSRN preprint) and DoorDash's production write-up applying it, and
Kohavi/Tang/Xu "Trustworthy Online Controlled Experiments" as the canonical A/B-testing reference — all
UNVERIFIED by direct read in this pass; flagging for the growth/attribution synthesis to fetch if wanted.
VERBATIM-WORTH-KEEPING: none (curation list, not original methodology).
RELEVANCE TO PACK JOBS: attribution-and-measurement — as a gap-finder/citation index, not as primary
evidence itself.
CREDIBILITY NOTE: MIT, 68★ — a practitioner-curated list (one named author, shakostats.com), rung: agency/
tool content marketing adjacent — cite the underlying primary sources it points to, not the list itself,
wherever the pack needs the claim.

---

## B. Incrementality / geo-lift / causal inference for marketing

### SOURCE: facebookincubator/GeoLift
https://github.com/facebookincubator/GeoLift — `README.md`
WHAT IT TEACHES: "An end-to-end solution to measure Lift at a Geo-level using the latest developments in
Synthetic Control Methods." Concretely: (1) data-driven market/geo selection for a geo-test via "a variety
of Power Calculators" (i.e., statistical power analysis to pick which markets can detect a given lift size
before running the test — a pre-registration discipline analogous to sample-size planning in classic A/B
tests); (2) synthetic-control-based counterfactual construction to estimate what would have happened
without the campaign; (3) a documented "Multi-Cell" walkthrough for testing more than one treatment
condition simultaneously; (4) a "Commuting Zones" feature to handle geographic spillover (adjacent markets
contaminating a "control" region because people commute between them) — a specific, teachable methodology
gotcha for anyone designing a geo-holdout test.
VERBATIM-WORTH-KEEPING: "an end-to-end solution to measure Lift at a Geo-level using the latest
developments in Synthetic Control Methods" (17 words, attributed).
RELEVANCE TO PACK JOBS: attribution-and-measurement — this is the strongest incrementality-methodology
source in the run: it teaches "prove causality, not correlation" concretely (power calculators, synthetic
control, commuting-zone spillover control) rather than as an abstract slogan.
CREDIBILITY NOTE: primary source (Meta-maintained, real production use), MIT (`LICENSE.md`), 261★, pushed
2026-06-30 (current), "Active" project-status badge in README.

### SOURCE: entropyx/murray
https://github.com/entropyx/murray — `README.md`
WHAT IT TEACHES: A smaller, actively-pushed (2026-07-01) Python geo-incrementality package. Teaches the
same synthetic-control family as GeoLift but foregrounds "Minimum Detectable Effect (MDE)" heatmapping
across "different configurations to optimize treatment selection" — i.e., before running a geo-lift test,
sweep candidate treatment-group sizes/durations and visualize which combinations can even detect a given
effect size, then choose accordingly. This operationalizes "don't run an underpowered incrementality test"
as a concrete pre-test step, complementary to GeoLift's power calculators.
RELEVANCE TO PACK JOBS: attribution-and-measurement — a second independent worked example of MDE-driven
geo-test design, reinforcing that this is a real methodological norm, not one vendor's idiosyncrasy.
CREDIBILITY NOTE: MIT (`LICENSE`), small (7★) but company-backed (Entropy, a measurement vendor) and
current (pushed 2026-07-01); treat as vendor-adjacent corroboration, not independent proof.

### SOURCE: google/CausalImpact
https://github.com/google/CausalImpact — `README.md`
WHAT IT TEACHES: "An R package for causal inference using Bayesian structural time-series models," used to
answer questions like "how many additional daily clicks were generated by an advertising campaign" without
a randomized experiment. Its own README is unusually candid about the method's limits — worth
re-expressing precisely: it "assumes that the outcome time series can be explained in terms of a set of
control time series that were themselves not affected by the intervention," and that "the relation between
treated series and control series is assumed to be stable during the post-intervention period" — i.e., it
is a quasi-experimental method resting on an unverifiable stability assumption, and the README explicitly
says "understanding and checking these assumptions... is critical for obtaining valid conclusions." This is
exactly the kind of documented methodological caveat the pack's "attribution honesty" framing needs.
VERBATIM-WORTH-KEEPING: "valid conclusions require strong assumptions" (6 words, attributed) — a
condensed, quotable version of the caveat above.
RELEVANCE TO PACK JOBS: attribution-and-measurement — teaches the difference between a designed experiment
(GeoLift/geo-holdout, higher confidence) and an observational/quasi-experimental read (CausalImpact, lower
confidence, assumption-dependent) — a distinction the pack should encode explicitly.
CREDIBILITY NOTE: primary source, backed by a peer-reviewed manuscript (Brodersen et al., Annals of Applied
Statistics, 2015 — linked from the README, `research.google` — higher credibility rung than most repos in
this report). Apache-2.0 (`LICENSE`), 1849★, pushed 2026-03-31.

### SOURCE: WillianFuks/tfcausalimpact
https://github.com/WillianFuks/tfcausalimpact
WHAT IT TEACHES: Community Python port of CausalImpact using TensorFlow Probability; per google/
CausalImpact's own README, this port is the one Google's team explicitly recommends to Python users ("For
Python users we recommend the implementation in TFP CausalImpact") and is "designed to produce results
close to those of the R package," with the caveat that "some differences are expected given the nature of
randomized algorithms." (NOTE: google/CausalImpact's README links to `google/tfp-causalimpact` by that
name, while gh search surfaced `WillianFuks/tfcausalimpact` as the higher-star/more-active community
implementation — UNVERIFIED whether these are the same project under different current org homes or two
parallel Python ports; would need direct comparison of both repos' READMEs/commit graphs to resolve.)
RELEVANCE TO PACK JOBS: attribution-and-measurement (Python-ecosystem pointer only).
CREDIBILITY NOTE: Apache-2.0 (`LICENSE`), 674★, pushed 2025-01-13 (over a year stale relative to capture
date) — note staleness.

### SOURCE: uber/causalml
https://github.com/uber/causalml — `README.md` (description), `LICENSE`
WHAT IT TEACHES: General-purpose "uplift modeling and causal inference with machine learning algorithms" —
the largest, most-starred repo (5938★) surfaced anywhere in this search, and actively pushed the same day
as capture (2026-07-31). Scope is broader than marketing (Uber-originated, used across causal ML broadly);
relevant slice for this pack is uplift modeling — predicting which individual customers are *incrementally*
moved by a treatment (ad, promo, email) versus who would have converted anyway, the customer-level
complement to geo-level incrementality testing above.
LICENSE NOTE: `gh api .../license` reports `NOASSERTION`, but the `LICENSE` file content read directly is
a standard short-form Apache License 2.0 notice ("Copyright 2019 Uber Technology, Inc. Licensed under the
Apache License, Version 2.0..."). Treat as Apache-2.0; GitHub's detector likely failed on the short-form
text rather than the full boilerplate.
RELEVANCE TO PACK JOBS: attribution-and-measurement (individual-level incrementality, distinct from and
complementary to geo-level MMM/GeoLift methods — the pack should distinguish "which customers" uplift
modeling from "which geos/channels" MMM/geo-lift).
CREDIBILITY NOTE: primary source, very high real adoption, current push. Apache-2.0 (file-verified despite
API NOASSERTION label).

### SOURCE: py-why/dowhy
https://github.com/py-why/dowhy — `README.md` (description), `LICENSE`
WHAT IT TEACHES: General causal-inference Python library ("supports explicit modeling and testing of
causal assumptions," combining "causal graphical models and potential outcomes frameworks") — the
foundational library underneath a lot of marketing causal-inference tooling (e.g., cited alongside
pymc-marketing in a case-study repo found during search, ColtAllen/causal-marketing-case-study). Not
marketing-specific, but its core teaching point — causal claims require an explicit, falsifiable causal
graph plus assumption-testing, not just a fitted model — is the same "make your causal assumptions
checkable" thread as pymc-marketing's DAG-driven causal identification and CausalImpact's stability
assumption.
RELEVANCE TO PACK JOBS: attribution-and-measurement (foundational causal-inference reference, not a
marketing tool per se).
CREDIBILITY NOTE: primary source, very high adoption (8239★), MIT (`LICENSE`), pushed 2026-07-31 (current
as of capture).

### SOURCE: google-marketing-solutions/fractional_uplift
https://github.com/google-marketing-solutions/fractional_uplift — `README.md`
WHAT IT TEACHES: "Flexible uplift modelling with complex or constrained metrics" from Google's official
Marketing Solutions engineering org (README disclaimer: "This is not an official Google product," but org-
level provenance is still a first-party signal). Distinctive documented methodology: optimizing uplift
models directly for "complex metrics or metrics with constraints, which typically cannot be optimized with
regular uplift modelling solutions" — the worked example is optimizing "for a target RoI" where the cost
per customer varies (i.e., budget-constrained targeting, not just "who is most incremental"); and
"Knowledge Distillation" to compress a meta-learner ensemble into a single deployable model, citing Hinton
et al. 2015 (arXiv:1503.02531) — a from-first-principles methodological choice, not just an engineering
convenience, worth naming in the pack as "how uplift models actually get shipped to production."
VERBATIM-WORTH-KEEPING: "optimise for complex metrics or metrics with constraints, which typically cannot
be optimized with regular uplift modelling solutions" (18 words, attributed).
RELEVANCE TO PACK JOBS: attribution-and-measurement / paid-acquisition (RoI-constrained targeting).
CREDIBILITY NOTE: primary source (Google org-level), Apache-2.0 (`LICENSE`), smaller (41★) but recently
pushed (2026-01-12); the underlying Hinton et al. citation is peer-reviewed-adjacent (arXiv, but a
foundational, widely-cited ML paper, not a self-promotional preprint — no companion-product conflict
detected).

---

## C. Multi-touch attribution (MTA)

### SOURCE: eeghor/mta
https://github.com/eeghor/mta — `README.md`
WHAT IT TEACHES: The single most complete enumeration of MTA algorithms found in this search, in one
README: First Touch, Last Touch, Linear, Position-Based/U-Shaped ("customizable weights for first/last
touch with remaining credit distributed to middle touches"), Time Decay ("higher credit to more recent
touchpoints"), Markov Chain ("probabilistic model using transition matrices" — i.e., the removal-effect
method: model the customer journey as a Markov chain, then measure each channel's contribution by
comparing conversion probability with vs. without that channel present), Shapley Value ("game-theoretic
fair allocation based on marginal contributions" — treat each channel as a player in a cooperative game and
credit it by its average marginal contribution across all possible channel-removal orderings), Shao's
Model ("probabilistic Shapley-equivalent approach" — a computationally cheaper approximation), Logistic
Regression (ML-based ensemble attribution), and Additive Hazard (survival-analysis-based attribution). This
is a clean taxonomy the pack can lift near-directly as "the attribution-model menu."
VERBATIM-WORTH-KEEPING: "Game-theoretic fair allocation based on marginal contributions" (7 words,
attributed, describing Shapley Value).
RELEVANCE TO PACK JOBS: attribution-and-measurement (flagship-grade algorithm taxonomy).
CREDIBILITY NOTE: MIT (`LICENSE`), 129★, pushed 2026-06-18 (current). No post-cookie-deprecation/ATT
caveat is documented in this README — a gap (see TasmanAnalytics below, which does carry that caveat).

### SOURCE: DavideAltomare/ChannelAttribution
https://github.com/DavideAltomare/ChannelAttribution — `README.md`, `R/DESCRIPTION`
WHAT IT TEACHES: The original R/Python/C++ MTA package (per pychattr's own README, this is the canonical
implementation others port from). Its README carries the clearest heuristic-vs-probabilistic taxonomy
found in this run, worth re-expressing precisely: heuristic models (first-touch, last-touch, linear) are
"generally simpler and easier to implement," using "straightforward rules" for "transparency in the
decision-making process"; probabilistic models (its own k-order Markov-chain implementation) are "more
complex... as they involve analyzing large datasets," are more customizable to "specific business
requirements," and are "generally considered more accurate because they are data-driven and can adapt to
changes in consumer behavior over time" — at the cost of needing "more resources, both in terms of data
infrastructure and expertise." The package itself implements a k-order Markov representation plus the
three heuristics, in C++, explicitly positioned for "large-scale problems involving hundreds or thousands
of channels."
LICENSE NOTE: no root-level `LICENSE` file detected by the GitHub API (404 on `/license`). The R package's
own `DESCRIPTION` file states: `License: GPL-3 | file LICENSE` (an `R/LICENSE` file exists per the R/
subdirectory listing). Treat as GPL-3.0, sourced from `R/DESCRIPTION`, not a repo-root file.
VERBATIM-WORTH-KEEPING: "generally considered more accurate because they are data-driven and can adapt to
changes in consumer behavior over time" (16 words, attributed, re: probabilistic models).
RELEVANCE TO PACK JOBS: attribution-and-measurement — the heuristic-vs-probabilistic framing (simplicity/
transparency vs. accuracy/resource-cost trade-off) is a clean, teachable decision axis for the pack.
CREDIBILITY NOTE: primary source (author-maintained canonical implementation, real commercial homepage
channelattribution.io); GPL-3.0 via `R/DESCRIPTION`, not repo-root license.

### SOURCE: jmwoloso/pychattr
https://github.com/jmwoloso/pychattr — `README.md`
WHAT IT TEACHES: A community Python port of ChannelAttribution's Markov-model methodology (transition
matrix, k-order, simulation-based removal effect). Concrete methodology detail from the worked example: a
fitted Markov model outputs both a channel-level `attribution_model_` (total conversions credited per
channel) and a full `transition_matrix_` (channel-to-channel transition probabilities, including `(start)`
and `(conversion)` terminal states) — i.e., the Markov MTA method is fully auditable at the
transition-probability level, not a black box.
SELF-DOCUMENTED STALENESS/SUPERSESSION CAVEAT: the README states outright, in its own words: "the authors
of the original R library now also provide a python implementation of ChannelAttribution... which you
should probably use instead of my implementation since theirs has additional features not available in
this package." This is a rare case of an author explicitly flagging their own repo as the inferior/
superseded option — directly useful for the pack's "verify currency, don't assume the top search result is
the maintained one" discipline.
VERBATIM-WORTH-KEEPING: "which you should probably use instead of my implementation" (9 words, attributed
— the author's own self-deprecating currency note).
RELEVANCE TO PACK JOBS: attribution-and-measurement (Markov-method worked example; also a case study in
staleness-flagging discipline for the pack's own sourcing hygiene).
CREDIBILITY NOTE: GPL-3.0 (`LICENSE`), 59★; author-flagged as superseded by the official Python
ChannelAttribution package (PyPI) — treat pychattr as a teaching example, not a recommendation.

### SOURCE: TasmanAnalytics/tasman-dbt-mta
https://github.com/TasmanAnalytics/tasman-dbt-mta — `README.md`
WHAT IT TEACHES: A dbt package implementing MTA as SQL-warehouse transformations (Snowflake/BigQuery),
i.e., attribution computed inside the data-warehouse layer rather than in a Python/R notebook. Concrete
documented models: "positional and time-based attribution models" configured via "Boolean-algebra
rule-based configurations avoiding custom SQL requirements," CSV-seed-file configuration of attribution
rules/windows, and named example models (last-touch = "100% conversion credit... to the touch immediately
before the conversion event," first-touch, U-shaped = "40% conversion credit... to both first and last
touches, with the remaining 20% split across all others").
POST-ATT CAVEAT — directly on the charter's ask: the README states plainly: "Multi-touch attribution can be
cross-device, however with the increased privacy constraints introduced by Apple in iOS 14.5 and more
generally across the industry, deterministic methods of attribution such as those in this engine are
generally ineffective for mobile. For mobile attribution, we recommend checking Mobile Measurement
Partners (MMPs) with support for Apple's SKAdNetwork such as Appsflyer or Adjust." This is exactly the
"documented caveat about validity post-cookie-deprecation/ATT" the charter asks for, and it is dated to a
specific, named platform change (iOS 14.5 / ATT), making it checkable.
VERBATIM-WORTH-KEEPING: "deterministic methods of attribution... are generally ineffective for mobile"
(9 words, attributed).
FAMILY BOUNDARY FLAG: this repo sits squarely on the `data`/`marketing` seam per the charter's own
instruction — it is literally a dbt (data-transformation) package computing attribution requirement
outputs (`attributed_touches`, `attributed_conversions`) from warehouse tables. The MODELING/REQUIREMENTS
side (which attribution model, which window, which rules) is `marketing`'s; the dbt-pipeline mechanics
(materializations, warehouse selection, incremental models) are `data`'s. Flagging per charter §D
instruction, even though this repo is technically catalogued under §C.
RELEVANCE TO PACK JOBS: attribution-and-measurement (mobile-attribution caveat is directly reusable in a
mobile-app GTM surface); flags the data/marketing seam explicitly.
CREDIBILITY NOTE: GPL-3.0 (`LICENSE`), 20★, pushed 2026-06-15 (current), vendor-backed (Tasman Analytics,
a data consultancy) — named-practitioner-adjacent rung, real production package with documented
limitations section (self-reported "Current Limitations," a good-faith credibility signal).

---

## D. Open-source analytics + marketing-automation stack

Family boundary framing per charter: for every repo below, UTM/event/conversion-definition facts and
consent/compliance-as-a-feature facts are `marketing`'s (the requirements spec a marketer must write); the
underlying ingestion/warehouse/pipeline mechanics are `data`'s. Flagged inline per repo.

### SOURCE: PostHog/posthog
https://github.com/PostHog/posthog — `LICENSE`, `ee/LICENSE`, https://posthog.com/docs/privacy/gdpr-compliance
LICENSE — READ IN FULL PER CHARTER INSTRUCTION (NOASSERTION flagged): this IS a dual-license repo, exactly
the pattern the charter anticipated. Root `LICENSE`: "All content that resides under the 'ee/' directory of
this repository... is licensed under the license defined in 'ee/LICENSE'... Content outside of the above
mentioned directories... is available under the 'MIT Expat' license." `ee/LICENSE` ("The PostHog Enterprise
license"): usage in production requires agreeing to PostHog's "Subscription Terms of Service" or "a valid
PostHog Enterprise license for the correct number of user seats"; modification/patching is permitted, but
PostHog retains "all right, title and interest" in modifications, and re-distribution of modifications also
requires a valid Enterprise license. Net: MIT core + source-available-but-commercially-gated `ee/` add-ons.
WHAT IT TEACHES (docs, `posthog.com/docs/privacy/gdpr-compliance`): concrete, named GDPR mechanisms —
consent must be "clearly distinguishable" and in "clear and plain language" (burying it in T&Cs is called
out as insufficient); a documented "cookieless tracking" mode as an alternative to cookie-banner consent
flows (tutorial named "How to use PostHog without cookie banners"); "IP data capture is automatically
disabled by default" for PostHog Cloud EU specifically (not for US-hosted or self-hosted deployments, which
"require additional anonymization safeguards for EU users" per the same page); autocapture PII-masking
controls; real-time transformations to anonymize data pre-storage; EU hosting (Frankfurt) recommended
specifically for GDPR posture.
VERBATIM-WORTH-KEEPING: "stop all data capturing and processing" (6 words, re: opt-out obligation,
attributed to posthog.com/docs).
FAMILY BOUNDARY: the consent-mechanism/GDPR-feature facts above are `marketing`'s (what a campaign/
tracking-consent requirements spec must state); PostHog's underlying event-ingestion pipeline is `data`'s.
RELEVANCE TO PACK JOBS: attribution-and-measurement (event/conversion instrumentation baseline);
lifecycle-and-email overlaps if PostHog's marketing-automation features are in scope (not deep-read here —
scope was measurement, not full product survey).
CREDIBILITY NOTE: primary source (vendor docs = platform-docs rung per credibility ladder, though it is the
vendor's own product documentation, not a neutral standards body — treat GDPR "compliance" framing as
PostHog's own claim, not a legal certification). 37412★ (per charter's pre-verified count), MIT core.

### SOURCE: plausible/analytics
https://github.com/plausible/analytics — `LICENSE.md`, https://plausible.io/data-policy
WHAT IT TEACHES: Cookieless-tracking mechanism is specific and stated: daily-rotating unique visitor
identifiers computed as `hash(daily_salt + website_domain + ip_address + user_agent)`, salt rotating/
deleting every 24 hours, with raw IP and User-Agent never retained. The data-policy page's own framing:
"By using Plausible, you do not need cookie banners for analytics or to collect consent for tracking" —
i.e., the entire product's compliance pitch rests on not collecting persistent/personal identifiers rather
than on consent-gating. Data actually collected, per the same page: page URL (query params discarded except
campaign tags — i.e., UTM parameters ARE retained specifically), referrer, browser/OS/device (derived from
UA, not stored), geography (derived from IP, not stored). Explicitly excludes cross-device/cross-site
tracking and persistent identifiers.
VERBATIM-WORTH-KEEPING: "you do not need cookie banners for analytics or to collect consent for tracking"
(15 words, attributed to plausible.io/data-policy).
FAMILY BOUNDARY: the "what counts as personal data / what a consent-free tracking claim requires" facts are
`marketing`'s attribution-requirements-spec territory; Plausible's hashing/storage internals are `data`'s.
RELEVANCE TO PACK JOBS: attribution-and-measurement, seo-strategy overlap (UTM/campaign-tag retention
detail is directly relevant to a UTM taxonomy reference).
CREDIBILITY NOTE: vendor docs (own compliance claim, references an unlinked-detail "legal assessment... by
a data protection expert" — UNVERIFIED, no citation to the actual assessment given on the page fetched).
AGPL-3.0 (`LICENSE.md`), 28236★ (charter pre-verified count).

### SOURCE: matomo-org/matomo
https://github.com/matomo-org/matomo — `LICENSE`, https://matomo.org/gdpr/
WHAT IT TEACHES: A named checklist of GDPR features, more numerous/explicit than most peers surveyed:
IP anonymization; "100% Data Ownership" (self-hosted, so Matomo the company "will never use your data for
'own purposes'"); ability to "track visitors without a cookie consent screen" via anonymization; a "GDPR
Manager" admin tool bundling "Right to withdraw consent," "Supports 'Do Not Track'," "Right of access and
right to erasure," visitor opt-out, first-party cookies by default, visitor-log/profile disabling, and
historical-data anonymization. This is the most GDPR-feature-dense single source found in section D — a
good candidate for the pack's canonical "what a compliant analytics stack must expose" checklist.
VERBATIM-WORTH-KEEPING: "gives you full control of your website data" (8 words, attributed to matomo.org/
gdpr).
FAMILY BOUNDARY: the named GDPR-feature checklist is `marketing`'s requirements-spec material; Matomo's own
self-hosted-database mechanics are `data`'s/`operate`'s.
RELEVANCE TO PACK JOBS: attribution-and-measurement (compliance requirements checklist).
CREDIBILITY NOTE: vendor docs (own claim); GPL-3.0 (`LICENSE`), 21730★ (charter pre-verified count).

### SOURCE: umami-software/umami
https://github.com/umami-software/umami — `README.md`, `LICENSE`
WHAT IT TEACHES: Positions itself in its own README tagline as "a simple, fast, privacy-focused alternative
to Google Analytics" — this is the full extent of what the README itself documents about privacy; it does
not enumerate specific GDPR mechanisms the way Matomo/Plausible/PostHog do.
GAP: attempted to fetch `docs.umami.is/docs/gdpr` for mechanism-level detail (redirected correctly from
`umami.is/docs/gdpr`) but the page returned 404 at fetch time — UNVERIFIED what specific GDPR mechanisms
(if any) Umami documents beyond the README's positioning claim; would need a working fetch of Umami's
current docs site or a `gh api` read of its docs-source repo (not identified/located in this pass — Umami's
docs may live outside its main GitHub org or behind a doc-site-only path with no corresponding repo file).
RELEVANCE TO PACK JOBS: attribution-and-measurement (weak positive on privacy-by-design positioning only).
CREDIBILITY NOTE: vendor README claim, unverified beyond that. MIT (`LICENSE`), 37996★ (charter pre-verified
count) — the most-starred repo in section D, but the least-documented on the specific GDPR-mechanism axis
of any analytics tool surveyed here.

### SOURCE: mautic/mautic
https://github.com/mautic/mautic — `LICENSE.txt`, `mautic/user-documentation` repo:
`docs/contacts/preference_center.rst`, `docs/components/forms.rst`
LICENSE: `LICENSE.txt` root content is standard GPLv3 with a project-specific preamble: "Mautic is released
under the GPL v3. Mautic is a trademark of the Mautic project of the Open Source Collective." (GitHub's API
reported `NOASSERTION`, likely due to the non-standard preamble text preceding the license body — the body
itself is unmodified GPLv3.) Bundled third-party components carry their own separate licenses (Bootstrap,
Chart.js, jQuery, etc., all MIT/Apache-2.0, listed in the same file) — a multi-component-license pattern,
distinct from PostHog/Dub's dual-license-by-directory pattern.
WHAT IT TEACHES (from user-documentation, separate repo): a "Preference Center" per-Contact UI with three
tabs — Channels & Frequency (per-channel opt-in plus a pausable send-frequency setting), Categories (global
content-category opt-in/out), Segments (audience-membership visibility) — and a "Do Not Contact (DNC)
entry" mechanism scoped per-channel (e.g., a contact can DNC email while remaining reachable by SMS).
Forms component documents a "Checkbox Group" field type explicitly usable "to gain consent to use cookies
and send marketing Emails," with a worked example distinguishing the human-facing consent-checkbox label
("Yes I accept that I may receive Email communications from this Company") from the stored database value
("Yes" or "1") — i.e., Mautic explicitly documents consent-capture as a form-field pattern with a
label/stored-value split, useful as a concrete lifecycle-and-email consent-instrumentation example.
VERBATIM-WORTH-KEEPING: "Mautic is released under the GPL v3" (7 words, license fact, attributed).
FAMILY BOUNDARY: the consent-checkbox/DNC/preference-center taxonomy is `marketing`'s (lifecycle-and-email
requirements); Mautic's underlying campaign-execution engine is out of scope for this pack per family
boundaries (that's `automation`/`sales`-adjacent CRM territory, not measurement).
RELEVANCE TO PACK JOBS: lifecycle-and-email (primary fit — more than attribution-and-measurement).
CREDIBILITY NOTE: GPL-3.0 (file-verified despite API NOASSERTION label), 10275★ (charter pre-verified
count); user-documentation repo license not separately checked — UNVERIFIED, would need
`gh api repos/mautic/user-documentation/license`.

### SOURCE: knadh/listmonk
https://github.com/knadh/listmonk — `README.md`, `LICENSE`
WHAT IT TEACHES: Self-hosted newsletter/mailing-list manager, "fast, feature-rich, and packed into a single
binary," Postgres-backed. README does not itself document GDPR/consent mechanisms in the sections read (a
gap, same shape as Umami's) — this repo was read at README depth only, given time budget; its
subscription-preferences/unsubscribe mechanics (a marketing-relevant consent-requirement analogue to
Mautic's preference center) are UNVERIFIED here and would need a `docs/` fetch on listmonk.app/docs.
RELEVANCE TO PACK JOBS: lifecycle-and-email (weak — needs deeper doc read to be useful; flagging as
undercovered rather than asserting absence of features).
CREDIBILITY NOTE: AGPL-3.0 (`LICENSE`), 22563★ (charter pre-verified count).

### SOURCE: dubinc/dub (+ dubinc/docs)
https://github.com/dubinc/dub — `LICENSE.md`; https://github.com/dubinc/docs — `docs/concepts/
attribution.mdx`, `LICENSE`
LICENSE — dual pattern, same shape as PostHog: root `LICENSE.md` states content under
`apps/web/app/(ee)` (and a nested dashboard-ee path) is licensed separately per an `ee/LICENSE.md` file;
"Content outside of the above mentioned directories... is available under the 'AGPLv3' license." The
separate `dubinc/docs` repo (where the attribution methodology is documented) is itself AGPL-3.0
(`LICENSE`, file-verified).
WHAT IT TEACHES — the most directly on-topic, most concretely documented attribution methodology found in
section D, straight from `docs/concepts/attribution.mdx`: a three-stage click→lead→sale attribution flow.
Stage 1 (click): click is captured **server-side** before redirect specifically so it "cannot be blocked
by ad blockers"; captured data includes a unique click ID, timestamp, geo, device/browser/OS, referrer,
UTM parameters, and whether the click came from a QR code vs. a short link; the click ID is appended to the
destination URL as a `dub_id` query parameter and then persisted as a **first-party cookie** (documented
rationale: first-party cookies "persist across page navigation and sessions," are "not blocked by ad
blockers," and are positioned as more "compliant with privacy regulations" than third-party cookies) with a
documented default lifetime of **90 days** (`expiresInDays`, configurable). Stage 2 (lead): a qualifying
action is tracked via `dub.track.lead()`, keyed to `customerExternalId` + `eventName`, with documented
automatic deduplication on that key pair ("Only the first event for each combination is recorded"). Stage 3
(sale): `dub.track.sale()` closes the loop and auto-generates a partner commission record from configured
"reward rules." Two named, switchable attribution models are documented: **last-click** (default — "All
credit goes to the most recent partner link") and **first-click** ("All credit goes to the first partner
who introduced the customer, regardless of subsequent clicks") — with a documented behavioral difference
table for what happens to the cookie under each model when a customer clicks multiple partner links. The
"attribution window" concept is explicitly defined and tied 1:1 to cookie lifetime (`expiresInDays`) — a
clean, concrete definition the pack can lift almost verbatim as "what an attribution window actually is."
Also documents cross-domain attribution support and a troubleshooting table (missing `dub_id` cookie →
attribution fails; last-click model + multiple clicks → "wrong partner credited," suggesting first-click as
the fix) that doubles as a debugging checklist for anyone building a link-attribution requirements spec.
VERBATIM-WORTH-KEEPING: (1) "All credit goes to the most recent partner link the customer clicked before
converting" (14 words, attributed, re: last-click default). (2) "captures the click server-side before
redirecting... This happens automatically and cannot be blocked by ad blockers" (18 words, attributed).
FAMILY BOUNDARY: this is squarely `marketing`'s attribution-REQUIREMENTS-SPEC territory per the charter's
own framing (link-level UTM capture, attribution-model choice, attribution-window definition, dedup rules)
— Dub's underlying click-redirect infrastructure and database schema are `data`/`backend` territory.
RELEVANCE TO PACK JOBS: attribution-and-measurement (flagship-tier concrete methodology — arguably the
single most usable, most literally-reusable source in this entire report for writing an attribution
requirements-spec reference); partnerships-and-pr (affiliate/partner-commission attribution is a direct
partnerships-channel overlap).
CREDIBILITY NOTE: primary source (vendor's own product docs, but describing its own mechanism precisely and
technically, not a marketing claim) — vendor engineering-docs rung, high specificity/checkability (every
claim is tied to a named parameter, e.g. `expiresInDays`, `customerExternalId`, `data-attribution-model`).
24199★ (charter pre-verified count for dubinc/dub), AGPL-3.0 core + `ee/` commercial carve-out.

---

## SOURCES table

| URL | License file seen | Stars | Last push | Credibility rung |
|---|---|---|---|---|
| github.com/google/meridian | `LICENSE` Apache-2.0 | 1472 | 2026-07-31 | Primary (Google, current) |
| github.com/facebookexperimental/Robyn | `LICENSE` MIT | 1498 | 2026-01-26 (stale, flagged) | Primary (Meta), currency-flagged |
| github.com/google/lightweight_mmm | `LICENSE` Apache-2.0 | 1051 | 2025-06-17 (deprecated per own README) | Primary, explicitly superseded |
| github.com/pymc-labs/pymc-marketing | `LICENSE` Apache-2.0 | 1210 | 2026-07-31 | Primary, vendor-backed (PyMC Labs) |
| github.com/mutinex/mmm-eval | `LICENSE` Apache-2.0 (API said NOASSERTION; file text is Apache-2.0) | 29 | 2026-07-28 | Primary, vendor-backed (Mutinex) |
| github.com/sibylhe/mmm_stan | `LICENSE` MIT | 402 | 2022-05-28 (stale) | Primary, terminology-corroboration only |
| github.com/shakostats/Awesome-Marketing-Science | `LICENSE` MIT | 68 | 2026-05-06 | Curated list, cite underlying sources not the list |
| github.com/facebookincubator/GeoLift | `LICENSE.md` MIT | 261 | 2026-06-30 | Primary (Meta), Active status |
| github.com/entropyx/murray | `LICENSE` MIT | 7 | 2026-07-01 | Primary, vendor-backed (Entropy) |
| github.com/google/CausalImpact | `LICENSE` Apache-2.0 | 1849 | 2026-03-31 | Primary + peer-reviewed manuscript (Brodersen et al. 2015) |
| github.com/WillianFuks/tfcausalimpact | `LICENSE` Apache-2.0 | 674 | 2025-01-13 (stale) | Community port, Google-README-endorsed |
| github.com/uber/causalml | `LICENSE` Apache-2.0 (API said NOASSERTION; file text is Apache-2.0) | 5938 | 2026-07-31 | Primary (Uber), broad causal-ML scope |
| github.com/py-why/dowhy | `LICENSE` MIT | 8239 | 2026-07-31 | Primary, foundational causal-inference library |
| github.com/google-marketing-solutions/fractional_uplift | `LICENSE` Apache-2.0 | 41 | 2026-01-12 | Primary (Google org-level) |
| github.com/eeghor/mta | `LICENSE` MIT | 129 | 2026-06-18 | Primary, no ATT caveat documented (gap) |
| github.com/DavideAltomare/ChannelAttribution | `R/DESCRIPTION` → GPL-3.0 (no repo-root LICENSE) | n/a (no stars field seen) | recent (CRAN v2.0.7, 2023-12-04 package date) | Primary, canonical implementation |
| github.com/jmwoloso/pychattr | `LICENSE` GPL-3.0 | 59 | 2022-09-05 | Primary, author-flagged as superseded |
| github.com/TasmanAnalytics/tasman-dbt-mta | `LICENSE` GPL-3.0 | 20 | 2026-06-15 | Primary, vendor-backed (Tasman), documents ATT caveat |
| github.com/PostHog/posthog | `LICENSE` MIT core + `ee/LICENSE` commercial | 37412 | (per charter, verified 2026-07-31) | Primary + vendor docs |
| github.com/plausible/analytics | `LICENSE.md` AGPL-3.0 | 28236 | (per charter) | Primary + vendor docs |
| github.com/matomo-org/matomo | `LICENSE` GPL-3.0 | 21730 | (per charter) | Primary + vendor docs |
| github.com/umami-software/umami | `LICENSE` MIT | 37996 | (per charter) | Primary, GDPR-mechanism doc unverified (404) |
| github.com/mautic/mautic | `LICENSE.txt` GPL-3.0 (API said NOASSERTION; file text is GPLv3) | 10275 | (per charter) | Primary + community docs (separate repo) |
| github.com/knadh/listmonk | `LICENSE` AGPL-3.0 | 22563 | (per charter) | Primary, GDPR/consent doc-depth unverified |
| github.com/dubinc/dub | `LICENSE.md` AGPLv3 core + `ee/LICENSE.md` commercial | 24199 | (per charter) | Primary + vendor engineering docs (high specificity) |
| github.com/dubinc/docs | `LICENSE` AGPL-3.0 | n/a | n/a | Primary, source of attribution.mdx methodology |

---

## What I did NOT cover and why

- **Deep-clone read of google/meridian and facebookexperimental/Robyn source code, notebooks, or full docs
  site** — explicitly assigned to a sibling worker per instruction; I stayed at README/methodology-index
  depth to avoid duplication.
- **Geo-experiment design papers cited only by the Awesome-Marketing-Science list** (Google Research's
  matched-markets and trimmed-match papers, the Ghost Ads SSRN paper, DoorDash's ghost-ads write-up,
  Kohavi/Tang/Xu's "Trustworthy Online Controlled Experiments") — surfaced but not fetched; these are
  arguably `growth`'s experiment-design territory more than `marketing`'s attribution territory, and time
  budget went to the marketing-specific repos instead. Flagging for whoever owns the growth/experimentation
  synthesis.
- **Umami's and listmonk's specific GDPR/consent mechanism documentation** — attempted and gapped (Umami's
  GDPR doc page 404'd at fetch time despite a working redirect; listmonk's docs site was not fetched at
  all given time budget). Both flagged UNVERIFIED rather than asserted as absent.
- **Mautic's user-documentation repo license** — not separately checked; assumed compatible with the
  GPL-3.0 core project but not file-verified.
- **Snowplow, RudderStack, Jitsu, Keila, OpenReplay, Countly** — charter said "only if marketing-relevant";
  a quick mental triage suggested these skew data-pipeline/session-replay/product-analytics rather than
  marketing-attribution-specific, and none surfaced organically in the section A–C searches, so none were
  pulled in given the time budget. Worth a targeted look if the `data` boundary synthesis wants a
  cross-check on where these actually sit.
- **Full ChannelAttribution CRAN/PyPI Python package (the official one, not pychattr)** — pychattr's README
  names it as the superior/current option but I did not independently fetch its docs; UNVERIFIED beyond
  the pychattr README's own claim.
- **A live check of whether google/tfp-causalimpact and WillianFuks/tfcausalimpact are the same or
  different projects** — flagged UNVERIFIED inline in section B rather than resolved, given time budget.
- WebSearch budget used: 0 of 15 allotted (gh api / gh search / WebFetch on constructed and
  redirect-resolved URLs covered everything needed).
