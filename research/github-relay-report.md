# Channel C — GitHub relay report (marketing deep research)

Sub-orchestrator: mkt-github. Run 2026-07-31 → 2026-08-01. Four workers (sonnet) plus controller-run
extraction. **WebSearch consumed: 0 of the channel's 15-call budget** — every finding came from
`gh api` / `gh search`, `git clone --depth 1`, or WebFetch on constructed URLs.

Worker artifacts:
- `research/marketing/_raw/github-mmm-attribution.md` (measurement seam, breadth)
- `research/marketing/_raw/github-seo-geo-email.md` (SEO/structured data, GEO/llms.txt/OKF, deliverability)
- `research/marketing/_raw/github-deep-extraction.md` (clone-and-walk of 6 repos)
- `research/marketing/_raw/github-awesome-lists.md` (curation, curricula, developer-marketing surface)
- `research/marketing/_raw/github-competitor-marketingskills.md` (controller-run: the competitive finding)

**Tooling note**: `crwl` (Crawl4AI CLI) is broken in this environment — it returned empty output on
first use here and channel D reproduced a litellm circular `ImportError` twice. Everything in this
channel used `gh api` / `gh search` / `git clone` / WebFetch instead. Do not spend time on `crwl`.

**Overlap note**: the skills channel separately verified `coreyhaines31/marketingskills`'s
structural facts (`research/marketing/_raw/skills-github.md` is authoritative for those). This
channel's contribution on that repo is **content-level** — what its references actually teach, where
the empirical canon sits, and its coverage gaps. The matching metrics from two independent channels
serve as a cross-check, not a duplicated claim.

---

## 1. Verdict on channel richness

**Rich, but not where we expected, and it carries one finding that should reset the synthesis.**

GitHub is a **primary-source channel for exactly four strips** of marketing: measurement
(MMM/incrementality/attribution), the analytics-and-channel-taxonomy layer, SEO structured data,
and email deliverability mechanics. In those strips the evidence is unusually good — running code,
documented assumptions, dated deprecations, and adversarial convergence between rival vendors.

It is a **near-empty channel for original teaching** on positioning, category framing, brand
narrative, segmentation, and PR. Controller sweeps for `positioning messaging framework`,
`public relations press`, and `brand guidelines` returned no substantive teaching repos at all (the
brand hits are companies' logo asset folders). Curated lists do *point* at that material — EdoStra's
list has a "Landing Pages/Messaging/Positioning" section — but they point **off GitHub**, at books
and practitioner blogs. Those jobs must be sourced from the web/X/book channels.

A third strip is stronger than expected: **curation for the developer-tool GTM motion**.
`ronakganatra/awesome-developer-marketing` maps the B2D sub-discipline and links companies' own
public marketing handbooks (GitLab, PostHog, Resend) — primary-source-tier documents that no other
channel surfaced. `fmerian/awesome-developer-first-channels` independently confirms developer-first
distribution as a self-sustaining channel ecosystem. Together these **validate the charter's
`developer-tool` surface with evidence rather than assumption**.

**The finding that changes the run: the niche is not open.** `coreyhaines31/marketingskills` —
42,544★, MIT, 6,699 forks, created 2026-01-15, pushed 2026-07-29 — is a 49-skill marketing pack for
AI agents with `references/` and `evals/` per skill, built by a real practitioner (Corey Haines,
Swipe Files / Conversion Factory). It uses **the same faceted, progressive-disclosure architecture
our family uses**, and its attribution content is genuinely rigorous rather than folklore.

Worse for us, it is not alone. The "marketing skills for AI agents" genre is multiplying fast:
`ericosiu/ai-marketing-skills` (3,293★, MIT) · `aaron-he-zhu/aaron-marketing-skills` (2,483★,
Apache-2.0, "120 marketing skills across 7 disciplines") · `zubair-trabzada/ai-marketing-claude`
(2,246★, MIT) · `Eronred/aso-skills` (1,696★, MIT — a dedicated competitor to a single one of our
candidate jobs) · `mikiarlo3/ai-copywriter` (994★) · plus a tail of 100–800★ entrants, and
near-verbatim reuploads of the leader (`Cesarjoquin/Marketing-Skills`, 45 of 49 identical skill
directory names, not a GitHub fork). Independent human-curated lists already treat the leader as
canonical — `EdoStra/Marketing-for-Founders` cites it by name.

Every previous pack in this family recorded an open or defensible wedge. **This one faces the most
contested niche the family has entered.** Details in §3 and §7.

---

## 2. Top repos, one line each

**Measurement — the strongest seam**

| Repo | Value |
|---|---|
| google/meridian | The richest primary source on GitHub for MMM mechanics; encodes experiment calibration as a Bayesian prior, not an afterthought |
| facebookexperimental/Robyn | Meta's rival MMM; its independent agreement with Meridian is the channel's strongest evidence — but it is effectively unmaintained (see §4) |
| pymc-labs/pymc-marketing | The most currently-active MMM repo found (pushed 2026-07-31); teaches causal identification via an explicit DAG |
| google/lightweight_mmm | A clean, dated, primary-source deprecation notice ("not supported anymore… switch to Meridian", 2025-01-29) |
| mutinex/mmm-eval | Rare: a vocabulary for *whether an MMM can be believed* (holdout, refresh stability, perturbation, placebo) — distinct from how to build one |
| facebookincubator/GeoLift | Best incrementality-methodology source; power calculators, synthetic control, and commuting-zone spillover as a named gotcha |
| google/CausalImpact | Backed by a peer-reviewed paper (Brodersen et al. 2015) and unusually candid that valid conclusions require strong, unverifiable assumptions |
| uber/causalml · py-why/dowhy | Individual-level uplift and the "make your causal assumptions falsifiable" foundation |
| eeghor/mta · DavideAltomare/ChannelAttribution | The full MTA algorithm menu, and the heuristic-vs-probabilistic trade-off written down plainly |
| TasmanAnalytics/tasman-dbt-mta | Carries the explicit post-ATT caveat: deterministic attribution is "generally ineffective for mobile" |

**Infrastructure that encodes marketing taxonomy**

| Repo | Value |
|---|---|
| plausible/analytics | **The channel's hidden gem.** `lib/plausible/ingestion/acquisition.ex` is a fully-commented 17-channel classification cascade — and it adds an **"AI Assistants" channel (ChatGPT, Claude, Perplexity, Grok, Gemini, Copilot, Phind, DeepSeek) that GA4 itself does not have** |
| dubinc/dub | Defines an attribution window as literally the click-cookie lifetime (90d default), and splits "a click" into four kinds: qr / link / pageview / deeplink |
| knadh/listmonk | The real mechanics of sending mail: bounce classification is an admitted heuristic, double opt-in is per-list, and RFC 8058 one-click unsubscribe is wired into the send path in code |
| mautic/mautic | Preference-center taxonomy: per-channel opt-in, Do-Not-Contact scoped per channel, consent-checkbox label vs stored value |
| PostHog/posthog · matomo-org/matomo | The densest named GDPR-mechanism checklists in the survey |

**SEO / structured data / GEO**

| Repo | Value |
|---|---|
| schemaorg/schemaorg | The vocabulary's actual source of truth — cite this, not a blog paraphrase |
| ai-robots-txt/ai.robots.txt | 4,022★, MIT, actively maintained; the one AI-crawler fact set whose premise is self-verifying (user-agents appear in your own logs) |
| AnswerDotAI/llms-txt | The spec — and, read carefully, the disproof of the folklore built on it (§3) |
| GoogleCloudPlatform/knowledge-catalog | OKF v0.2, Apache-2.0, 8,130★ — the newest entrant in agent-readable content, same unproven-consumption status as llms.txt |
| garmeeh/next-seo · harlan-zw/nuxt-seo | Evidence of which metadata the ecosystem treats as load-bearing; nuxt-seo ships an explicit AEO module |

**Deliverability**

`domainaware/parsedmarc` (Apache-2.0, 1,270★) for DMARC alignment and the `p=none → quarantine →
reject` escalation ladder; `postalsys/mailauth` for SPF/DKIM/DMARC/ARC/BIMI/MTA-STS in one place;
`mjmlio/mjml` (18,177★) whose entire existence proves the email-HTML constraint — a framework that
compiles down to table layout because modern CSS is not reliable in mail clients.

**Curation and curricula**

| Repo | Value |
|---|---|
| ronakganatra/awesome-developer-marketing | Best map of developer marketing as its own discipline; links GitLab's, PostHog's and Resend's **own public marketing handbooks** — primary-source playbooks |
| EdoStra/Marketing-for-Founders | 6,693★, pushed 2026-07-13 — the freshest practitioner taxonomy, and the one whose sections map most nearly 1:1 onto our candidate job list |
| shakostats/Awesome-Marketing-Science | Independently converges on Ehrenberg-Bass/Byron Sharp as the top authority — **corroborates the charter's own credibility ladder from outside it** |
| station-10/awesome-marketing-machine-learning | Technique-level index of the measurement libraries (list itself stale, 2024-05-01) |
| draftdev/startup-marketing-checklist | A **phase**-based axis (pre-launch → post-launch → recurring → optimise) instead of the usual channel silos — a different and useful structure for the launch job |
| goabstract/Marketing-for-Engineers | 13,196★ and the most-starred curriculum in the sweep — but **dead since 2020-10-27**; historical specimen, not current practice |
| mmccaff/PlacesToPostYourStartup | CC0, ~100 launch/submission channels — raw material for the zero-audience overlay |
| johackim/awesome-indiehackers · fmerian/awesome-developer-first-channels | Cross-list convergence on a stable named-practitioner canon and on developer-first distribution |
| orbit-love/orbit-model | The closest thing to a canonical community-building framework (gravity/reach/love), cited independently across lists — but the project itself declares it is no longer developed |

---

## 3. The findings that should drive synthesis

### 3.1 llms.txt and OKF have no verified consumer — and the market leader teaches otherwise

Two workers attacked this independently and agreed.

Reading the spec itself (`AnswerDotAI/llms-txt`, `nbs/index.qmd`, `nbs/ed.md`, `nbs/domains.md`):
**the authors never claim any AI system automatically fetches `/llms.txt`.** The stated expectation
is use "on demand when a user explicitly requests information"; the illustrative example is an
avowedly *hypothetical* editor command a human must invoke; the repo's own DIY verification script
asks a site owner to fetch their file manually and paste it into a chat. Reading all 50+ issues on
that tracker: **zero assert that any engine consumes it.** The closest, issue #47, lists only
*producer*-side adoption. A participant on issue #91 volunteers the skepticism unprompted.

The same standard applied to OKF gives the same answer, with a first-party admission: issue #254 on
`GoogleCloudPlatform/knowledge-catalog`, "Telemetry on corpus usage", states there is no telemetry
on consumption of the corpus. The maintainers themselves do not know whether anything reads it. A
full-text grep of `okf/SPEC.md` and `okf/README.md` for "llms" returns **zero matches** — the popular
"llms.txt is the signpost, OKF is the library" framing is third-party interpretation, not spec.

Against that, `coreyhaines31/marketingskills` asserts at `skills/ai-seo/SKILL.md:85` that AI systems
parse `llms.txt` when present — with no source. **The dominant pack in this space teaches an
unsourced claim that the primary sources do not support.** That is a demonstrable, checkable wedge,
and it is the cleanest one this channel produced.

Recommendation: the pack should present publishing `llms.txt`/OKF as **cheap, low-risk, and of
unverified payoff as of 2026-08-01**, and present AI-crawler access control (`ai.robots.txt`-style,
self-verifying via server logs) as the credibility-backed action. Never freeze a version number.

### 3.2 Two rival MMM implementations independently converge — and both say MMM alone is not enough

Meridian (Google, TensorFlow Probability, Bayesian MCMC) and Robyn (Meta, ridge regression +
Nevergrad evolutionary search) share no code, no team, and no math stack. They agree on:

1. the same two-stage transform — adstock (carryover) then saturation (diminishing returns), per channel;
2. the **Hill function** as a first-class saturation form (`adstock_hill.py:304-328` / Robyn's alpha-gamma);
3. that a single fixed decay rate is insufficient — both shipped a second, richer decay family
   (Meridian binomial, Robyn Weibull, where only the PDF variant permits a *lagged* peak);
4. that **incrementality experiments must anchor the model** — Meridian via `roi_calibration_period`
   as an informative Bayesian prior (`spec.py:114-137`), Robyn via `calibration_input` folded into
   the loss as `mape_lift`. Mechanically different, identically motivated;
5. that calibration input must be the **point-estimate of the tested increment**, not full channel
   spend (Robyn spells out: a 70% holdout on $100k implies $30k, not $70k);
6. that neither claims uncalibrated MMM resolves causal identification. Meridian's docs say
   directly that validating causal-inference quality is difficult absent a designed experiment.

**Independent teams at rival companies both concluded MMM without experiment calibration is not
trustworthy, and both built explicit machinery for it.** For a pack whose hypothesised wedge is
"the rigorous literature contradicts the folklore", this is the strongest evidence in the run — and
it is checkable in source code rather than argued from authority.

Meridian also documents what practitioner content omits: media inputs must be **summable**
(impressions, clicks, spend) and never rates (CTR, CPC); minimum 2 years weekly data for geo models,
3 for national; and a model can fit well in-sample while being causally biased — the docs prefer a
plausibly-overfit but confounder-complete model over a leaner confounded one.

### 3.3 Structured-data advice decays within a year — verified twice

Controller verification against Google Search Central (2026-08-01, primary source):
**FAQ rich results are fully removed**, per a May 2026 changelog entry, ceasing to appear
**2026-05-07**, docs deleted 2026-06-15, with no site category exempted. Google's current
search-gallery lists 25 supported types and **neither FAQPage nor HowTo appears**. Between August
2023 and May 2026, "add FAQ schema" went from standard advice → restricted to government/health →
producing nothing. (`Q&A` and `Education Q&A` survive and are different types — the distinction
matters.)

Paired with the market leader shipping **OKF "v0.1"** when the spec had already reached **v0.2**,
this channel produced two independent staleness specimens. The pack should ship **the check, dated**
(consult the current gallery / the spec repo) rather than **the list**.

---

### 3.4 Cross-channel convergence (noted, not claimed — other channels own these)

Two of this channel's findings were reached independently elsewhere in the run, per the controller
log. Convergence across channels that used different sources is the strongest signal available:

- **llms.txt.** Channel D's web sweep independently concluded llms.txt is folklore. This channel
  reached the same verdict from inside the spec repo and its issue tracker, and extended it to OKF
  via a first-party admission of no consumption telemetry. Three independent routes, one answer.
- **The empirical canon as persona dossier.** Channel A's deep-walk found Ehrenberg-Bass science
  present in exactly **1 file across 11 repos**, as a persona dossier. This channel found the same
  shape inside the market leader specifically: Byron Sharp exists only as
  `skills/marketing-council/references/advisors/byron-sharp.md`, racked beside Russell Brunson and
  Gary Vaynerchuk, with nothing adjudicating between a replicated law and a personality's heuristic.
  **The gap is structural across the whole genre, not one author's oversight** — which makes it a
  far more defensible wedge than "we are more rigorous than one competitor."

Channel A also reports the whitespace is "integration and discipline, not jobs" — consistent with
§7.6 here (the incumbent is a boundary-free monolith) and with §7.2 (its foundation skill has no
references at all).

## 4. Currency and maintenance flags worth carrying

- **Robyn is effectively unmaintained.** Repo metadata says pushed 2026-01-26, but the last
  substantive commit is **2025-06-27**; 114 open issues, and the five most recent (Jan–Jun 2026)
  have **zero comments**. Corroborating: `mmm-eval`, a 2026-07-28 benchmarking framework, supports
  "PyMC-Marketing and Google Meridian" and does not mention Robyn. Robyn's Python port is
  self-described in its README as LLM-translated beta. Any pack text naming Robyn as a co-equal
  current option needs hedging.
- `google/lightweight_mmm` is explicitly superseded by Meridian, by its own dated notice.
- `jmwoloso/pychattr`'s author flags his own repo as the inferior option versus the official
  package — a useful specimen of sourcing hygiene the pack can cite.
- `firecrawl/llmstxt-generator` (2025-06-17) and `krish-adi/llmstxt-site` (2025-06-15) are ~13 months
  stale despite being commonly cited GEO tooling.

---

## 5. License findings (charter rule 3)

Every repo below had its license **file** opened, not just its API label. Four repos GitHub reports
as `NOASSERTION` resolved very differently from one another:

| Repo | API label | What the file actually says |
|---|---|---|
| PostHog/posthog | NOASSERTION | **Dual**: MIT core; everything under `ee/` under a commercial PostHog Enterprise license requiring a paid subscription for production use |
| dubinc/dub | NOASSERTION | **Open-core dual**: AGPLv3 core, with `apps/web/app/(ee)` and a nested dashboard path under a separate commercial license at `apps/web/app/(ee)/LICENSE.md` |
| mautic/mautic | NOASSERTION | Plain **GPLv3** with a trademark preamble that confused the classifier; bundled third-party components carry their own MIT/Apache terms |
| uber/causalml | NOASSERTION | Plain **Apache-2.0**, short-form notice the classifier failed to match |
| mutinex/mmm-eval | NOASSERTION | Plain **Apache-2.0** (full text present; README states it) |
| postalsys/mailauth | NOASSERTION | MIT-*style* permissive grant missing the title line — **ambiguous; treated as facts-only, no verbatim** |
| DavideAltomare/ChannelAttribution | 404 on `/license` | **GPL-3.0**, declared in `R/DESCRIPTION`, not at repo root |
| thedaviddias/llms-txt-hub | "other" | File is standard MIT boilerplate, in a `LICENCE` (British spelling) file |

**NO LICENSE FOUND — all rights reserved, facts re-expressed only, zero verbatim lifts:**
`StanGirard/seo-audits-toolkit` (803★) · `maizzle/maizzle` (2,839★) · `firecrawl/llmstxt-generator`
(534★) · `krish-adi/llmstxt-site` (225★) · `imageforward-git/marketing51` ·
`coleam00/cole-medin-ai-coding` (111★) · `borghei/Claude-Skills` (439★, NOASSERTION, not opened —
treated as unlicensed) · `ninjasort/awesome-marketing` · `ronakganatra/awesome-marketing` ·
`serpapi/awesome-seo-tools` · `teles/awesome-seo`. This report and the raw files honour that.

The competitor `coreyhaines31/marketingskills` is **MIT** (`LICENSE` at root) — prose is legally
reusable with attribution; we still held the charter's 2-quote cap.

---

## 6. SOURCES table

Rung key: **1** = primary (platform docs, spec repos, OSS with real adoption) · **2** = peer-reviewed
· **3** = named practitioner · **4** = vendor/agency content · **S** = specimen. All metrics as-of
2026-07-31/08-01.

| Repo / URL | License file seen | Stars | Last push | Rung |
|---|---|---|---|---|
| github.com/google/meridian | `LICENSE` Apache-2.0 | 1,472 | 2026-07-31 | 1 |
| github.com/facebookexperimental/Robyn | `LICENSE` MIT | 1,498 | meta 2026-01-26; real commit 2025-06-27 | 1, maintenance-discounted |
| github.com/google/lightweight_mmm | `LICENSE` Apache-2.0 | 1,051 | 2025-06-17 (self-deprecated) | 1 |
| github.com/pymc-labs/pymc-marketing | `LICENSE` Apache-2.0 | 1,210 | 2026-07-31 | 1, vendor-backed |
| github.com/mutinex/mmm-eval | `LICENSE` Apache-2.0 (API said NOASSERTION) | 29 | 2026-07-28 | 1, vendor-backed |
| github.com/sibylhe/mmm_stan | `LICENSE` MIT | 402 | 2022-05-28 (stale) | 1, terminology only |
| github.com/facebookincubator/GeoLift | `LICENSE.md` MIT | 261 | 2026-06-30 | 1 |
| github.com/entropyx/murray | `LICENSE` MIT | 7 | 2026-07-01 | 1, vendor-backed |
| github.com/google/CausalImpact | `LICENSE` Apache-2.0 | 1,849 | 2026-03-31 | 1 + **2** (Brodersen et al. 2015) |
| github.com/WillianFuks/tfcausalimpact | `LICENSE` Apache-2.0 | 674 | 2025-01-13 (stale) | 1, community port |
| github.com/uber/causalml | `LICENSE` Apache-2.0 (API said NOASSERTION) | 5,938 | 2026-07-31 | 1 |
| github.com/py-why/dowhy | `LICENSE` MIT | 8,239 | 2026-07-31 | 1 |
| github.com/google-marketing-solutions/fractional_uplift | `LICENSE` Apache-2.0 | 41 | 2026-01-12 | 1 |
| github.com/eeghor/mta | `LICENSE` MIT | 129 | 2026-06-18 | 1 (no ATT caveat — gap) |
| github.com/DavideAltomare/ChannelAttribution | `R/DESCRIPTION` → GPL-3.0 | n/a | CRAN 2023-12-04 | 1 |
| github.com/jmwoloso/pychattr | `LICENSE` GPL-3.0 | 59 | 2022-09-05 | 1, author-flagged superseded |
| github.com/TasmanAnalytics/tasman-dbt-mta | `LICENSE` GPL-3.0 | 20 | 2026-06-15 | 3, documents ATT caveat |
| github.com/PostHog/posthog | `LICENSE` MIT + `ee/LICENSE` commercial | 37,412 | 2026-07-31 | 1 + vendor docs |
| github.com/plausible/analytics | `LICENSE.md` AGPL-3.0 | 28,236 | 2026-07-31 | 1 |
| github.com/matomo-org/matomo | `LICENSE` GPL-3.0 | 21,730 | 2026-07-31 | 1 + vendor docs |
| github.com/umami-software/umami | `LICENSE` MIT | 37,996 | 2026-07-30 | 1, GDPR docs 404'd (UNVERIFIED) |
| github.com/mautic/mautic | `LICENSE.txt` GPL-3.0 (API said NOASSERTION) | 10,275 | 2026-07-31 | 1 |
| github.com/knadh/listmonk | `LICENSE` AGPL-3.0 | 22,563 | 2026-07-30 | 1 |
| github.com/dubinc/dub | `LICENSE.md` AGPLv3 + `(ee)` commercial | 24,199 | 2026-07-31 | 1 |
| github.com/dubinc/docs | `LICENSE` AGPL-3.0 | n/a | n/a | 1 |
| github.com/schemaorg/schemaorg | `LICENSE` Apache-2.0 | 6,187 | 2026-07-23 | 1 |
| github.com/AnswerDotAI/llms-txt | `LICENSE` Apache-2.0 | 2,541 | 2026-07-26 | 1 |
| github.com/GoogleCloudPlatform/knowledge-catalog | `LICENSE.md` Apache-2.0 | 8,130 | 2026-07-29 | 1 (OKF v0.2) |
| github.com/ai-robots-txt/ai.robots.txt | `LICENSE` MIT | 4,022 | 2026-07-31 | 1 |
| github.com/thedaviddias/llms-txt-hub | `LICENCE` MIT (GH: "other") | 885 | 2026-07-31 | 1, directory (1,405 entries) |
| github.com/SecretiveShell/Awesome-llms-txt | MIT | 105 | 2026-07-03 | 1, directory (764 links) |
| github.com/langchain-ai/mcpdoc | MIT | 1,020 | 2026-07-17 | 1 |
| github.com/delucis/starlight-llms-txt | MIT | 107 | 2026-07-21 | 1 |
| github.com/dotenvx/llmstxt | BSD-3-Clause | 146 | 2026-03-05 | 1 |
| github.com/firecrawl/llmstxt-generator | NO LICENSE FOUND | 534 | 2025-06-17 (stale) | 1, facts-only |
| github.com/krish-adi/llmstxt-site | NO LICENSE FOUND | 225 | 2025-06-15 (stale) | 1, facts-only |
| github.com/garmeeh/next-seo | MIT | 8,496 | 2026-07-29 | 1 |
| github.com/harlan-zw/nuxt-seo | MIT | 1,417 | 2026-07-22 | 1 |
| github.com/jonasmerlin/astro-seo | MIT | 1,364 | 2026-07-31 | 1 |
| github.com/iamvishnusankar/next-sitemap | `LICENSE` MIT | 3,743 | 2026-07-28 | 1 |
| github.com/StJudeWasHere/seonaut | `LICENSE` MIT | 746 | 2026-07-31 | 1 |
| github.com/StanGirard/seo-audits-toolkit | NO LICENSE FOUND | 803 | 2026-07-31 | 1, facts-only |
| github.com/domainaware/parsedmarc | `LICENSE` Apache-2.0 | 1,270 | 2026-07-28 | 1 |
| github.com/dmarcguardhq/dmarcguard | Apache-2.0 | 181 | 2026-07-31 | 1 |
| github.com/postalsys/mailauth | `LICENSE.txt` ambiguous MIT-style | 142 | 2026-05-14 | 1, facts-only |
| github.com/Snawoot/postfix-mta-sts-resolver | MIT | 126 | 2025-10-10 | 1 |
| github.com/mjmlio/mjml | MIT | 18,177 | 2026-07-22 | 1 |
| github.com/foundation/foundation-emails | MIT | 7,791 | 2026-03-13 | 1 |
| github.com/maizzle/maizzle | NO LICENSE FOUND | 2,839 | 2026-06-16 | 1, facts-only |
| github.com/ronakganatra/awesome-developer-marketing | NO LICENSE FOUND | 397 | 2026-03-03 | 3 (links primary handbooks) |
| github.com/EdoStra/Marketing-for-Founders | `LICENSE.md` | 6,693 | 2026-07-13 | 3/4 mixed |
| github.com/goabstract/Marketing-for-Engineers | `License` CC-BY-SA-3.0 | 13,196 | **2020-10-27 (dead)** | 3 + S (historical) |
| github.com/mmccaff/PlacesToPostYourStartup | `LICENSE` CC0-1.0 | 6,829 | 2026-02-14 | directory |
| github.com/draftdev/startup-marketing-checklist | MIT stated in README only | 5,635 | **2021-11-08 (dead)** | 4 (agency) |
| github.com/shakostats/Awesome-Marketing-Science | `LICENSE` MIT | 68 | 2026-05-06 | 1/2 (points at peer-reviewed + Ehrenberg-Bass) |
| github.com/station-10/awesome-marketing-machine-learning | `LICENSE` MIT | 144 | 2024-05-01 (stale) | 1 (OSS index) |
| github.com/marketingtoolslist/awesome-marketing | `LICENSE` MIT | 421 | 2026-07-27 | 4 (affiliate-sponsored) |
| github.com/bmpi-dev/awesome-seo | `LICENSE` MIT | 2,748 | 2026-04-02 | 1 + 4 mixed |
| github.com/devrelcollective/awesome-devrel | `LICENSE.MD` CC-BY-SA-4.0 | 759 | 2025-05-09 | 3 (community) |
| github.com/LeCoupa/awesome-bootstrappers | MIT | 269 | **2023-09-16 (stale)** | 4, pre-ATT links |
| github.com/orbit-love/orbit-model | `LICENSE` MIT | 1,015 | 2026-03-07 (project declared inactive) | 3, vendor-sponsored |
| github.com/johackim/awesome-indiehackers | `LICENSE.txt` GPL-3.0 | 642 | 2026-03-27 | 3 |
| github.com/fmerian/awesome-developer-first-channels | NO LICENSE FOUND | 175 | 2026-07-17 | meta-curation |
| github.com/ronakganatra/awesome-marketing | NO LICENSE FOUND | 400 | 2025-02-24 | 3 |
| github.com/ninjasort/awesome-marketing | NO LICENSE FOUND | 234 | 2026-06-11 | 4 |
| github.com/vkoul/awesome-Marketing-Analytics | NO LICENSE FOUND | 70 | 2025-06-17 (stale) | 4 |
| github.com/Gingiris/gingiris-opensource · gingiris-launch | `LICENSE` MIT | 240 · 190 | 2026-05-07 | **S** (paid-consulting funnel) |
| **github.com/coreyhaines31/marketingskills** | `LICENSE` MIT | **42,544** | 2026-07-29 | **3 + S (competitor)** |
| github.com/ericosiu/ai-marketing-skills | MIT | 3,293 | 2026-07 | 4 + S (competitor) |
| github.com/aaron-he-zhu/aaron-marketing-skills | Apache-2.0 | 2,483 | 2026-07 | 4 + S (competitor) |
| github.com/zubair-trabzada/ai-marketing-claude | MIT | 2,246 | 2026-07 | 4 + S (competitor) |
| github.com/zubair-trabzada/geo-seo-claude | `LICENSE` MIT | 9,180 | 2026-05-27 | 4 + S (funnel-adjacent) |
| github.com/Eronred/aso-skills | `LICENSE` MIT | 1,696 | 2026-07-31 | 3 + S (ASO competitor) |
| github.com/mikiarlo3/ai-copywriter | MIT | 994 | 2026-07-31 | 4 + S |
| github.com/boraoztunc/skills | Apache-2.0 | 219 | 2026-07-30 | 4 + S |
| github.com/scaccogatto/okf-skills | MIT | 205 | 2026-07-31 | 4 |
| github.com/Cesarjoquin/Marketing-Skills | MIT | 155 | 2026-07-31 | S (reupload of the leader) |
| github.com/davidpc007/openclaw-marketing-skills | NOASSERTION | 146 | 2026-07-30 | S (renamed derivative) |
| developers.google.com/search/docs/appearance/structured-data/faqpage | Google docs | — | fetched 2026-08-01 | **1 (platform docs)** |
| developers.google.com/search/docs/appearance/structured-data/search-gallery | Google docs | — | fetched 2026-08-01 | **1 (platform docs)** |
| developers.google.com/meridian/docs/* | Google docs | — | fetched 2026-08-01 | **1 (platform docs)** |

---

## 7. Implications for the pack (for the synthesis gate, not decided here)

1. **Re-argue the wedge.** "Rigorous literature vs practitioner folklore" is weakened: the
   incumbent's attribution reference already teaches MTA/MMM/incrementality triangulation with dated
   caveats and sharp evals. What survives is narrower and better: (a) the incumbent files the
   empirical canon as **roleplay personas** — Byron Sharp racked beside Russell Brunson, with nothing
   adjudicating between a replicated law and a personality's heuristic; (b) it teaches unsourced
   GEO claims the primary sources contradict; (c) it is **primary-source-thin** — Google Search
   Central cited once across 429 files, Apple's App Store guidelines never.
2. **Flagship: positioning survives, attribution does not.** The incumbent has no `positioning`,
   `segmentation`, `brand`, or category-design skill, and its declared foundation skill
   (`product-marketing`) has **no `references/` directory at all** — the shallowest artifact in the
   repo. Attribution, by contrast, is well-defended.
3. **Deliverability is the clearest unoccupied, checkable strip.** In the incumbent: `list-unsubscribe`
   0 files, `RFC 8058` 0, `spam rate` 0, SPF/DKIM/DMARC 2 each. Meanwhile listmonk implements the
   RFC 8058 header pair in code and parsedmarc encodes the alignment ladder. Primary-source-grade
   and open.
4. **A channel taxonomy already exists in code** — Plausible's 17-channel cascade with its GA4
   deltas, including an AI-Assistants channel GA4 lacks. The pack can teach a real taxonomy with a
   citation instead of inventing one.
5. **Ship checks, not lists.** Two independent staleness specimens in one channel (FAQ schema; OKF
   v0.1→v0.2) argue for a standing anti-staleness invariant wherever the pack touches SEO/GEO —
   consistent with the ai-skill pack's precedent.
6. **Seam discipline is a real differentiator, but must be argued, not assumed.** The incumbent
   absorbs ab-testing (→growth), pricing (→product), revops/sales-enablement/prospecting/cold-email
   (→sales), onboarding/churn-prevention (→success), schema/site-architecture (→frontend). Ours is a
   member of an eleven-pack family with declared seams; theirs is a self-contained monolith. Whether
   users value that is an open question.
7. **Decide explicitly whether AEO/GEO is its own job.** `EdoStra/Marketing-for-Founders` — the
   freshest practitioner list found — gives "LLM SEO, AEO, GEO" a **dedicated top-level section
   beside classic SEO**, and the incumbent ships a separate `ai-seo` skill. The charter's candidate
   job list folds it into `seo-strategy`. Two independent 2026 sources treat it as first-class; this
   needs a deliberate ruling, not a default.
8. **A boundary-communication risk the family has not faced before.** `LeCoupa/awesome-bootstrappers`
   organises marketing around **AARRR** (acquisition → activation → retention → referral → revenue).
   Our family deliberately splits that funnel across marketing, growth, and success. Practitioners in
   the wild do not. The pack likely needs an explicit "AARRR sits across marketing + growth +
   success" note, or users who know the model will read our seams as gaps.
9. **The `developer-tool` surface is evidence-backed; treat it as a strong candidate, not a guess.**
   Two independent lists map it as a distinct discipline with its own channels, and companies'
   own public marketing handbooks (GitLab, PostHog, Resend) exist as primary sources to cite.
10. **Currency is a live differentiator in this genre.** The most-starred marketing curriculum on
    GitHub (`goabstract/Marketing-for-Engineers`, 13,196★) has not been touched since **2020-10-27**,
    and several widely-cited lists carry pre-ATT paid-social tactics. Note also a methodological
    trap worker 1 caught: GitHub's search `updatedAt` reflects any metadata change (even a star) and
    is **not** a staleness signal — `pushed_at` is. Several "active-looking" lists are dead.

---

## 8. What I did NOT cover, and why

- **Positioning, category design, brand narrative, PR, partnerships** — swept and found essentially
  absent from GitHub. This is a finding, not a gap I can close here; those jobs depend entirely on
  the web/X channels.
- **Full quality audit of the incumbent's 49 skills** (~93k words in `SKILL.md` files alone). I read
  `attribution`, `marketing-council`, `ai-seo`, and `product-marketing` structurally and used grep
  probes for the rest. Their SEO, ads, and social content is un-audited — if the synthesis gate
  leans on "we are more rigorous", that claim needs a deeper pass than I ran.
- **Whether the derivative packs literally copy the leader's content.** `Cesarjoquin/Marketing-Skills`
  reproduces 45 of the 49 skill directory names while not being a GitHub fork, and
  `davidpc007/openclaw-marketing-skills` is a renamed variant — I did not diff file contents.
- **Whether any Google product actually ingests OKF**, and the 2026-06-12 Google Cloud blog
  announcement — no repo evidence either way; needs a cloud.google.com fetch. Handed to mkt-web.
- **The August 2023 FAQ/HowTo restriction announcement** — the Search Central blog article body did
  not render on fetch. Well-corroborated across four independent repos and now moot given full
  removal, so I stopped spending on it.
- **PostHog's `ee/` in depth, Matomo's codebase, Snowplow/RudderStack/Jitsu/Keila/Countly** — either
  out of the measurement scope or judged data-pipeline territory rather than marketing.
- **Umami's and listmonk's GDPR/consent documentation** — Umami's GDPR page 404'd; both marked
  UNVERIFIED rather than asserted absent.
- **Geo-experiment design papers** surfaced via Awesome-Marketing-Science (Google Research's
  matched-markets and trimmed-match papers, the Ghost Ads SSRN paper, Kohavi/Tang/Xu) — arguably
  `growth`'s experiment-design territory; flagged, not fetched.
- **Star-forensics on the incumbent.** 42.5k stars in 6.5 months is steep; the 0.157 fork:star ratio,
  370 watchers, 86 open issues, and outside PRs read as organic, and the author had a pre-existing
  audience. I did not run a burstiness/fake-star pass — plausibility judgement, not proof.

Additional gaps from the curation sweep: `naxiaoduo/1000UserGuide` (3,914★, no license, active) is a
Chinese-language channel directory covering Xiaohongshu/WeChat surfaces — not read;
`UNVERIFIED: whether its taxonomy diverges from the Western channel-based pattern`. ASO code tools
and landing-page template repos were deliberately skipped as code rather than teaching, consistent
with the charter's code policy.

## 9. Handoffs to other channels

- **mkt-web**: confirm the 2026-06-12 Google Cloud blog post introducing OKF, and whether any Google
  product ingests OKF bundles; confirm Gmail/Yahoo bulk-sender requirements and RFC 8058 one-click
  unsubscribe mechanics against platform docs (no adequate GitHub source exists for either).
- **mkt-skills**: the competitor field is larger than one repo — `coreyhaines31/marketingskills`
  (42.5k★) plus at least four packs above 990★. My `github-competitor-marketingskills.md` covers the
  leader's architecture, coverage map, and gaps; the rest are named but un-audited.
- **Synthesis gate**: §7 items 1, 2, 7, and 8 are decisions, not findings — the wedge re-argument,
  the flagship choice, whether AEO/GEO splits out, and how to communicate the AARRR seam.
