# `marketing` — channel D report: the open web (primary sources)

**Channel:** D — open web / primary-source channel. **Date of record:** 2026-07-31 → 2026-08-01.
Every URL in this document was fetched in that window. Anything marked volatile must be re-checked at
build time.

**Shape:** 1 Opus sub-orchestrator + 4 Sonnet workers on disjoint slices, plus 6 lead-run slices
covering territory no worker was assigned and closing worker gaps by reading PDFs byte-wise.

**Raw reports:**
`_raw/web-marketing-science.md` (175 lines) · `_raw/web-seo-ai-search.md` (385 lines) ·
`_raw/web-deliverability-law-stores.md` (343 lines) · `_raw/web-attribution-paid-gtm.md` (141 lines) ·
`_raw/web-lead-slices.md` (lead's own: Product Hunt, Slack Marketplace, rater-guidelines PDF).

**WebSearch spend:** 33 of the channel's 80 (workers: 13 + 8 + 11 + ~0; lead: 1). Everything else was
WebFetch, `curl`+`pdftotext`, or direct RFC text — none of which consume budget. **47 unspent.**

**Provenance convention.** `[PRIMARY]` = the lead or a worker read the actual source document
(including PDFs read via `pdftotext` after fetch tools garbled them). `[SECONDARY]` = a reputable
third party describing the primary source. `[VENDOR]` = agency/tool content marketing.
`[UNVERIFIED]` = nobody confirmed it; what was tried is recorded in §6. **Nothing here may ship at a
higher tier than it is marked.**

**Tooling note.** `crwl` (Crawl4AI CLI) is **broken in this environment** — `ImportError: cannot
import name 'ImageResponse' from partially initialized module 'litellm'`, reproduced twice. The whole
channel ran on WebFetch + curl. Relayed to the controller. Separately: `ftc.gov`, `ico.org.uk`,
`web.archive.org`, Apple's JS-rendered `developer.apple.com/documentation/*`, Meta's business help
centre, and `techcommunity.microsoft.com` **all refused WebFetch** — every figure sourced from those
hosts is secondary-corroborated, not primary-verified, and is flagged as such.

---

## 0. Read this first — the seven findings that change the build

**1. The wedge hypothesis survives, but it is sharper than "practitioners ignore the science." The
rigorous literature contradicts the folklore *and the rigorous literature's own most-quoted number is
itself folklore*.** The 95-5 rule — the single most-cited statistic in B2B marketing — is **not a
measurement**. John Dawes derives it arithmetically from an assumed average interpurchase interval
(replace a service every ~5 years → ~20% in-market per year → **~5% per quarter** → 95% not in
market *this quarter*), and disclaims it in the primary source, verbatim: *"The 95% figure is not
meant to be a precise rule. We're using it as a heuristic to get the idea across"* (Dawes, May 2021).
Two things practitioner content strips: the disclaimer, and the **quarterly time-window** without
which "95% are not in market" is meaningless. Lead-verified independently of the worker. This is the
channel's best single specimen of the pack's thesis. §3.1

**2. Marketing's most rigorous laws have never been tested on the customer this pack serves.** Every
Ehrenberg-Bass dataset located — FMCG panels, plus B2B replications in business banking, business
insurance, concrete, aviation fuel — requires **an existing, measurable buyer population with
repeat-purchase behaviour**. No SaaS/subscription-software panel dataset appears in any open-access
report found. The institute *does* publish "How B2B Tech Brands Grow" with LinkedIn, but its public
page discloses **no authors, no date, no categories, and no sample sizes** (lead-fetched); the data
sits behind a gated PDF. And the zero-audience, pre-launch, n=1 founder is **outside every dataset
surveyed, in both directions** — no evidence for, none against. The honest pack position: these laws
are the strongest empirical base in marketing *and* their domain of validity stops short of our
reader. Saying so is the differentiator. §3.1

**3. Deliverability is not a 2024 story any more, and most content is stale.** Three changes the
canon hasn't absorbed: (a) **DMARC has been superseded** — RFC 7489 is obsolete, replaced May 2026 by
**RFC 9989** (core, also obsoletes 9091), **RFC 9990** (aggregate reporting), **RFC 9991** (failure
reporting), all Standards Track. Lead-verified byte-wise from rfc-editor.org. Any pack text citing
7489 as current ships a stale spec. (b) **Gmail moved from soft to hard enforcement in November
2025** — non-compliant bulk mail now gets *"temporary and permanent rejections"* (Google's exact
words), not just spam-foldering, plus a new Postmaster Tools **Compliance status** dashboard. (c) The
**UK raised the PECR fine ceiling from £500,000 to £17.5m or 4% of global turnover**, commenced
**5 Feb 2026**. Every "max £500k" compliance article is now wrong. §3.3

**4. Google's own documentation kills the four biggest SEO folklore items — with dates on them.**
Not inference; quotable primary text. Scaled-content-abuse is **purpose-tested, not authorship-
tested** (spam policies, last updated **2026-05-15**), so "Google penalises AI content" is false as
stated. There is **no separate helpful-content algorithm** (merged into core ranking, March 2024).
Raters cannot move rankings — from the guidelines PDF itself: *"No single rating can directly impact
how a particular webpage, website, or result appears in Google Search."* And Google states there are
**no special optimisations for AI Overviews or AI Mode**. §3.2

**5. E-E-A-T is not four co-equal factors — Trust is the centre, and the other three are its
supports.** Read from the actual Search Quality Rater Guidelines PDF (lead downloaded it and ran
`pdftotext` after the worker's fetch tool returned binary): **General Guidelines, September 11, 2025,
182 pages**. Verbatim: *"The most important member at the center of the E-E-A-T family is Trust."*
Experience, Expertise and Authoritativeness are framed as evidence *for* assessing Trust, and the
required level of Trust **scales with stakes** (YMYL pages must be accurate to prevent harm; a
non-YMYL entertaining post may need little). Practitioner content near-universally teaches E-E-A-T as
an even four-item checklist. That is a correctable error with a dated primary citation. §3.2

**6. The attribution literature is the most rigorous ground in the entire domain — and both of its
headline numbers were misreported to us.** Lead re-read both papers as PDFs. eBay (Blake, Nosko &
Tadelis): naive OLS gives ROI **over 4,100%** uncontrolled and **over 1,400%** with time/geo
controls; the experiment gives **−63%, 95% CI [−124%, −3%]**. The worker reported 1,600% — the paper
says 1,400%. Lewis & Rao's headline is **"more than 10 million person-weeks"** for an informative
experiment, with the median campaign needing to be **9× larger** to separate +50% ROI from breakeven
and **62× larger** for a 10% ROI difference — *not* the "1.96 million weekly observations" the worker
reported, which does not appear in the paper. Corrected figures in §1 and §4. **This is why the pack
must teach that a solo builder cannot run a valid lift test — with the right number.** §3.4

**7. Two of the pack's assumed channels are gated by scale, and one of them is documented.** Both
open-source MMM tools state their own floor: **Robyn requires ~2 years of weekly data at a 1:10
variable:observation ratio; Meridian's docs say 2 years "is too low to estimate the model reliably"
and recommend 3.** MMM is a scale-gated tool by its vendors' own admission — not an inference.
Separately, the **Slack Marketplace requires ≥5 active workspaces and ≥10 weekly active users before
you may list** — so "list in the marketplaces your users already use" is *not* a zero-audience launch
channel, contradicting how it is routinely pitched to pre-launch founders. §3.4, §3.5

---

## 1. Verified numbers — the shippable table

Confidence: **P** = primary, read directly. **S** = secondary-corroborated (primary fetch blocked).
**U** = unverified.

### 1.1 Email deliverability

| Fact | Value | Source | As-of | Conf |
|---|---|---|---|---|
| Gmail bulk-sender threshold | 5,000+ msgs/day to Gmail addresses | support.google.com/a/answer/81126 | 2026-07-31 | P |
| Gmail spam-rate ceiling | **below 0.3%**; recommended below 0.10% | same | 2026-07-31 | P |
| Gmail spam-mitigation cutoff | >0.3% = ineligible for mitigation, from June 2024; eligible again after 7 consecutive days below 0.3% | support.google.com/a/answer/14229414 | 2026-08-01 | P |
| Gmail unsubscribe honouring | **48 hours — a recommendation, not an SLA** | same | 2026-08-01 | P |
| Gmail enforcement escalation | Nov 2025 ramp-up: *"temporary and permanent rejections"* | same | 2026-08-01 | P |
| Gmail auth (bulk) | SPF **and** DKIM; DMARC record (p=none ok); From: aligned to SPF **or** DKIM domain | support.google.com/a/answer/81126 | 2026-07-31 | P |
| DKIM key floor | **≥1024 bits** (RFC MUST for long-lived keys); 2048 recommended in practice | rfc-editor.org/rfc/rfc6376 | 2011 | P |
| Yahoo/AOL spam rate | below 0.3%; DMARC p=none minimum and must pass | senders.yahooinc.com/best-practices/ | 2026-08-01 | P |
| Yahoo/AOL daily-volume threshold | **NOT STATED on Yahoo's own page** — do not assume Gmail parity | — | 2026-08-01 | U |
| Microsoft Outlook.com high-volume | 5,000+/day, effective **5 May 2025**; **Junk-routing first**, full rejection date unannounced | techcommunity.microsoft.com (fetch blocked) | 2025 | S |
| One-click unsubscribe | RFC 8058, Standards Track, Jan 2017; needs `List-Unsubscribe` + `List-Unsubscribe-Post: List-Unsubscribe=One-Click`, DKIM-signed over both | rfc-editor.org/rfc/rfc8058 | 2017 | P |
| SPF | RFC 7208, Apr 2014 (obsoletes 4408) | rfc-editor.org/rfc/rfc7208 | 2014 | P |
| **DMARC — SUPERSEDED** | RFC 7489 obsolete. **RFC 9989** core (also obsoletes 9091) · **9990** aggregate reporting · **9991** failure reporting. Standards Track, **May 2026** | rfc-editor.org/rfc/rfc9989 /9990 /9991 | 2026-05 | P (lead) |
| Role addresses | RFC 2142, May 1997, not obsoleted — abuse@, postmaster@ | rfc-editor.org/rfc/rfc2142 | 1997 | P |

**Enforcement severity, ranked:** Gmail (hardest — rejections since Nov 2025) > Yahoo/AOL (0.3%
ceiling since Feb 2024, no stated volume threshold) > Microsoft (softest — Junk-routing only).
Do not present the three as interchangeable.

### 1.2 Law — the consent models

| Fact | Value | Source | As-of | Conf |
|---|---|---|---|---|
| GDPR consent definition | Art. 4(11): *"freely given, specific, informed and unambiguous… by a clear affirmative action"* | eur-lex, Reg. 2016/679 | in force | P |
| GDPR right to object | Art. 21: absolute for direct marketing, no balancing test | same | in force | P |
| **ePrivacy governs email, not GDPR** | Directive 2002/58/EC **Art. 13(1)**: prior opt-in consent for unsolicited email marketing | eur-lex, 32002L0058 | 2002 | P |
| EU soft opt-in | Art. 13(2): existing customer, contact obtained in context of a sale, **similar** products only, opt-out at collection **and** on every message | same | 2002 | P |
| UK PECR soft opt-in | Same four conditions; ICO reads "similar" narrowly (car insurance ≠ travel insurance) | ico.org.uk (403 — reconstructed) | — | S |
| **UK PECR penalty — RAISED** | £500,000 → **£17.5m or 4% of global annual turnover**, whichever higher; commenced **5 Feb 2026** (Data (Use and Access) Act 2025, c.18) | legislation.gov.uk (Act primary); ICO page blocked | 2026-02-05 | S/P |
| CAN-SPAM model | **Opt-out.** No prior consent needed; must identify as ad, give valid physical postal address, honour opt-out within **10 business days** | ftc.gov (403 — reconstructed); 15 U.S.C. §7704(a)(4) | — | S |
| CAN-SPAM penalty | **$53,088 per email** (17 Jan 2025 adjustment); **no 2026 adjustment** (OMB M-26-11) | federalregister.gov (fetch blocked) | 2026 | S |
| CASL consent | Express (does not expire, revocable) or implied (relationship-bounded) | crtc.gc.ca/eng/com500/faq500.htm | 2026-08-01 | P |
| CASL validity windows | Mailing address **and** unsubscribe mechanism valid **≥60 days**; unsubscribe processed "without delay, no later than 10 business days" | same | 2026-08-01 | P |
| CASL penalties | **$1m** individuals / **$10m** businesses per violation — strictest ceiling of the four regimes | same | 2026-08-01 | P |
| FTC endorsement disclosure | 16 CFR §255.5 — material connections "clearly and conspicuously" disclosed | govinfo.gov CFR Part 255 | 2011 codification | P |
| FTC fake-reviews rule | **16 CFR Part 465**, effective **21 Oct 2024** — bans fake/AI-generated reviews, incentivised-by-sentiment reviews, undisclosed insider reviews, review suppression, bought followers | ftc.gov legal library (notice text blocked) | 2024-10-21 | S |
| FTC Part 465 penalty | $51,744 per violation | — | — | U |

**The decision rule the pack needs:** EU/EEA → **opt-in** (ePrivacy Art. 13 sits on top of GDPR and
narrows it; Recital 47 legitimate interest does **not** authorise cold email). UK → same shape, now
GDPR-parity fines. US → **opt-out**, the only regime where cold outbound email is lawful by default.
Canada → consent **plus** 60-day validity windows, highest ceiling. A single global send list cannot
lawfully be treated identically everywhere — **jurisdiction segmentation is a compliance requirement,
not a targeting nicety.**

### 1.3 Store and marketplace listings

| Surface | Limits | Source | Conf |
|---|---|---|---|
| Apple App Store | name **30** chars · subtitle **30** · promotional text **170** · keyword field **100** (comma-separated, no spaces after commas) · up to **10** screenshots · up to **3** app previews, **30s** each | developer.apple.com/app-store/product-page/ | P |
| Apple metadata policy | Review Guidelines **§2.3.7** — bans keyword-stuffing with trademarked/irrelevant terms "just to game the system"; Apple may modify keywords at any time. Doc self-describes as a "living document", no version date | developer.apple.com/app-store/review/guidelines/ | P |
| Apple experimentation | **Custom Product Pages** (persistent, URL-addressable variants) ≠ **Product Page Optimization** (native A/B test). Different tools; do not conflate | same | P |
| Google Play | title **30** · short description **80** · full description **4,000** | support.google.com/googleplay/android-developer/answer/9859152 | P |
| Play metadata policy | Repetitive/irrelevant keywords "will not impact ranking", create bad UX, and can trigger suspension | same | P |
| Play experiments | up to **1 default + 5 localized** concurrent store-listing experiments; custom listings targetable by country, pre-registration, inbound keyword, inactivity | support.google.com (via search snippet) | S |
| **Slack Marketplace** | short description **max 10 words** · screenshots **1600×1000 (8:5)**, <**2MB** · video **30–90s**, public YouTube, captions on · support response **within 2 business days** · slash commands respond **<3000ms** · **minimum ≥5 active workspaces and ≥10 weekly active users to list** | docs.slack.dev/slack-marketplace/…app-guidelines-and-requirements | P (lead) |

**Enforcement-philosophy divergence worth teaching:** Apple polices a *dedicated hidden keyword
field*; Google polices keywords in *visible* fields and treats stuffing as a policy violation rather
than merely an ineffective tactic. Slack delists **without prior notice** for a broken landing page
or install flow.

### 1.4 SEO and AI search

| Fact | Value | Source | As-of | Conf |
|---|---|---|---|---|
| Rater guidelines version | **General Guidelines, 11 September 2025, 182 pages** | the PDF itself, via `pdftotext` | 2025-09-11 | P (lead) |
| Spam policies page | Last updated **2026-05-15 UTC** | developers.google.com/search/docs/essentials/spam-policies | 2026-05-15 | P |
| Ranking-systems guide | Last updated **2025-12-10 UTC**; helpful content system merged into core **March 2024** | developers.google.com/search/docs/appearance/ranking-systems-guide | 2025-12-10 | P |
| AI Overviews click impact (**best evidence**) | Pew: clicked a traditional result on **8%** of searches showing an AI summary vs **15%** without; **1%** clicked a link inside the summary; session ended **26%** vs **16%**; **58%** of searches surfaced a summary | Pew Research Center, fielded March 2025, ~900-adult observed-browsing panel | 2025-07 | S |
| AI Overviews click impact (vendor) | Ahrefs **−34.5%** clicks (300k keywords, GSC data, Mar-2024 vs Mar-2025); Semrush 93% zero-click *within AI Mode* (~500 marketing-topic queries — narrow); Similarweb 83% | vendor blogs | 2025–26 | VENDOR |
| GEO academic anchor | arXiv 2311.09735, **accepted at KDD 2024** (DOI 10.1145/3637528.3671900); "up to 40%" is best-case and domain-varying. Passes the charter's arXiv self-promotion check — authors unaffiliated with GEO vendors | arxiv.org/abs/2311.09735 | 2024 | P |
| Google's AI-feature stance | *"There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary"* | developers.google.com/search/docs/appearance/ai-features | 2025-12-10 | P |
| Google AI-traffic measurement | AI-feature traffic is **blended into the "Web" search type** in Search Console — cannot be isolated | same | 2025-12-10 | P |
| Bing diverges from Google | Bing's Feb 2026 guidelines rewrite **formally adopts "GEO"** as a named concept and documents NOARCHIVE as blocking Copilot grounding | searchenginejournal.com 2026-02-27 (Bing page unfetchable) | 2026-02 | S |
| IndexNow participants | Bing, Naver, Seznam.cz, Yandex, Yep — **Google not listed** | indexnow.org | 2026-07-31 | P |
| LLM crawler control | OpenAI: GPTBot (training) / OAI-SearchBot (ChatGPT search) / ChatGPT-User (live fetch, *"robots.txt rules may not apply"*). Anthropic: ClaudeBot / Claude-User / Claude-SearchBot, each separately blockable (doc updated **2026-04-07**). Perplexity: PerplexityBot is search-only, explicitly **"not used to crawl content for AI foundation models"**; Perplexity-User "generally ignores robots.txt" | developers.openai.com/api/docs/bots · support.claude.com/en/articles/8896518 · docs.perplexity.ai/guides/bots | 2026 | P |

### 1.5 Attribution, measurement, MMM

| Fact | Value | Source | Conf |
|---|---|---|---|
| **eBay paid-search experiment** | Naive OLS ROI **>4,100%** uncontrolled, **>1,400%** with time/geo controls. Experimental ROI **−63%, 95% CI [−124%, −3%]** — rejects positive returns | Blake, Nosko & Tadelis, *Econometrica* 83(1) 2015; read from NBER w20171 PDF | P (lead) |
| eBay mechanism | Infrequent/new users show some incremental response to non-brand ads; frequent high-intent users — who generate most spend — show near-zero | same | P (lead) |
| **Lewis & Rao power result** | Informative ad experiments "can easily require **more than 10 million person-weeks**"; median CI on ROI **over 100 percentage points wide**; individual sales coefficient of variation ~**10**; median campaign must be **9× larger** to separate +50% from 0% ROI, **62× larger** for a 10% ROI difference | *QJE* 130(4) 2015, pp.1941–1973, doi 10.1093/qje/qjv023; read from PDF | P (lead) |
| Ghost Ads | Clean control by logging a "ghost" impression the auction *would* have served — cheaper than PSA holdouts, and necessary because auto-optimised delivery invalidates naive controls | Johnson, Lewis & Nubbemeyer, *JMR* 54(6) 2017 | P |
| Geo-lift methodology | Randomise DMAs, geo-target spend, time-based regression; survives ATT/cookie loss. 2017 TBR extension works with fewer geo units | Vaver & Koehler (Google, 2011); Kerman, Wang & Vaver (2017) | P |
| **Robyn (Meta)** | **LICENSE file at repo root = MIT** ("Copyright (c) Meta Platforms, Inc."). Docs: minimum **2 years weekly data**; **1 variable : 10 observations**; calibration against experiments "strongly recommended" but accepts point estimates only. Last tagged release v3.12.0 (2024-12-19), pushed 2026-01-26 — **maintained but slow-releasing** | github.com/facebookexperimental/Robyn | P |
| **Meridian (Google)** | **LICENSE file at repo root = Apache-2.0**. Docs: geo models **≥2 years weekly**, national **≥3 years**; 104 weekly points is *"too low to estimate the model reliably"*. **"designed for causal inference, not prediction"** — cannot forecast. Pushed 2026-07-31, regular releases — more actively maintained than Robyn | github.com/google/meridian | P |
| MMM minimum spend | **Neither tool states a dollar threshold** — the gate is data history and channel variation, not budget | both doc sets | U (by absence) |
| ATT | IDFA requires opt-in prompt; without permission IDFA returns all-zeros; gate is **iOS 14.5** | developer.apple.com/app-store/user-privacy-and-data-use/ | P |
| **SKAdNetwork NOT superseded** | AdAttributionKit (WWDC 2024) is **additive and interoperable**, not a replacement; **no Apple-announced SKAdNetwork deprecation timeline**. Corrects the brief's assumption | vendor docs only; Apple's own page unfetchable | S |
| PMax auditability | Google documents controls (search themes, negatives, brand exclusions) and reporting (asset/channel/placement) but **not** search-term detail, bid amounts, audience selection, or allocation reasoning | support.google.com/google-ads/answer/10724817 | P |
| PMax/Advantage+ incrementality | **No independent or peer-reviewed study found.** Only Google's own built-in "PMax Uplift experiments" and agency single-case anecdotes | — | U |

### 1.6 Marketing science

| Fact | Value | Source | Conf |
|---|---|---|---|
| **95-5 rule** | **Not measured — derived.** From assumed ~5-year replacement cycle → ~20%/yr → **~5% in-market per quarter**. Author's own disclaimer: *"The 95% figure is not meant to be a precise rule"* | Dawes, Ehrenberg-Bass for LinkedIn B2B Institute, May 2021 | P (lead + worker) |
| Category entry points (B2B) | **Best-evidenced B2B finding located.** Datasets with disclosed n: US business insurance (606 customers, 17 products), US online-advertising decision-makers (311), UK business banking (609). Each additional CEP linked in memory lowers defection probability **~5%**, holding across **16 of 17** products | marketingscience.info, Romaniuk, July 2022 | P |
| Double jeopardy in B2B | Replicates in business banking, business insurance, concrete, aviation fuel, airplanes. **No sample sizes disclosed** | marketingscience.info, Romaniuk/Dawes/Faghidno, May 2021 | P |
| Pareto is ~60/20, not 80/20 | Heaviest 20% of buyers ≈ half of sales, not 80% — light buyers matter far more than folklore assumes | Sharp & Romaniuk 2007 (original not retrievable; SSRN/RG mirrors 403) | S |
| Binet & Field 60/40 | ~60% brand-building / 40% activation — from the **IPA Databank**, ~1,000 *self-submitted awards-competition case studies*. Structural selection bias: entrants are self-selecting winners with agency relationships | IPA (primary PDF not reached) | S |
| **B2B split is 46/54, not 60/40** | B2B-filtered analysis reverses toward activation. Three convergent secondary sources agree; **no primary PDF located, and the report is not listed in the LinkedIn B2B Institute's own research library** (lead-checked) — treat as widely-repeated but primary-unconfirmed | secondary triangulation | U |
| ESOV → share growth | **Conflicting coefficients in circulation** (0.5% vs 0.7% share growth per 10 ESOV points). Lead attempted the IPA primary page; coefficient not stated there | — | U |

---

## 2. Fact vs folklore — the verdict per area

**Area 1 — Marketing science: CHECKABLE, with a hard domain boundary.** Real peer-reviewed and
institute-published sources exist and were reached. But the ladder inside the area is steep: double
jeopardy and duplication of purchase are decades-replicated (rung 2); CEPs have disclosed B2B sample
sizes (strongest); Binet & Field is an *awards-corpus* (rung 3, structural selection bias, not
peer-reviewed); the 95-5 rule is an *arithmetic heuristic its own author disclaims*; and the ESOV
coefficient is currently unresolvable to a single number. **A live, named academic dispute exists** —
Felipe Thomaz (Saïd Business School, Oxford) argues Sharp stripped differentiation out of Keller's
brand-equity model and that "mental/physical availability" are popularisations, not established
science; and the institute's own peer-reviewed evidence for "differentiation is overrated" is
authored by the claim's originators in a mid-tier journal, i.e. not independent replication. The pack
must present the dispute, not settle it.

**Area 2 — SEO: the most checkable area, and the most folklore-dense.** Google documents its own
position clearly enough to kill four myths outright (§0.4, §0.5). The AI-search layer splits cleanly:
**mechanics and controls are documented** (crawler matrix, nosnippet/max-snippet/Google-Extended,
Search Console blending) while **impact is measured only by outsiders** — Google publishes no
first-party AI-Overview CTR data at all, which is itself a finding. **GEO has exactly one credible
anchor** (KDD 2024) and the vast bulk of GEO/AEO tactics content is vendor marketing borrowing that
paper's credibility without using its method. **llms.txt is folklore**: no statement from Google,
OpenAI, Anthropic, or Perplexity that any crawler consumes it — verified by checking all four
providers' own bot docs, not just the spec site. And the platforms **diverge**: Bing formally adopted
"GEO" in Feb 2026 while Google says no special optimisation exists. Do not flatten that.

**Area 3 — Deliverability and law: the hardest, most checkable strip in the whole domain.** RFCs,
mailbox-provider requirements, and statutes gave exact numbers with dates. This is where the pack can
be *unarguably* correct. Two caveats: several US/UK regulator sites (ftc.gov, ico.org.uk,
federalregister.gov) **refused automated fetching**, so CAN-SPAM's penalty figure, the FTC Part 465
penalty, and the ICO's soft-opt-in wording are secondary-corroborated rather than primary-verified —
flagged, not laundered. Folklore killed: "Gmail requires unsubscribes within 2 days" is a
*recommendation* (48 hours), not a compliance rule; and Yahoo's 5,000/day threshold is an assumption
by analogy that Yahoo's own page does not state.

**Area 4 — Attribution and paid: rigorous where it is academic, absent where it is commercial.** The
incrementality literature is peer-reviewed, experimental, and unusually blunt — and it says platform
numbers overstate incrementality and that most advertisers *cannot afford a valid experiment*.
Against that, **PMax and Advantage+ have no independent incrementality evidence whatsoever** — only
vendor self-measurement tools and agency anecdotes. The "60% of attributed conversions aren't
incremental" figure circulating across ad-tech blogs **traces to no named study**. Positioning
(Dunford) is honest practitioner craft — she describes deriving it by trial and error across seven
startups and claims no empirical validation; **no study testing whether her framework improves
outcomes was found**. PLG benchmarks are all self-selected convenience samples from vendor customer
bases or newsletter audiences, none with disclosed sampling methodology.

**Area 5 (lead) — launch and partnerships: checkable rules exist where practitioners assume vibes.**
Product Hunt publishes enumerated, enforceable prohibitions (dated 2025-04-11) and sanctions repeat
launching. Slack publishes a full listing bar with hard numbers. Both convert "tactics" content into
citable platform rules.

---

## 3. Area syntheses

### 3.1 Marketing science — where the evidence ends

The empirical canon is real and it is the strongest base in marketing, but its **domain of validity
is narrower than its citation pattern.** Three tiers:

- **(a) Well-evidenced in its original domain.** Double jeopardy (Ehrenberg 1959; Ehrenberg,
  Goodhardt & Barwise 1990), duplication of purchase, Pareto ~60/20, penetration-over-loyalty —
  decades of replication on FMCG repeat-purchase consumer panels across many countries.
- **(b) Plausibly transferable to B2B; actively being tested, thinner.** Institute B2B replications
  exist (banking, insurance, concrete, aviation fuel — one of which, aviation fuel, dates to 1990 and
  is 30+ years old). CEPs are the standout: real disclosed sample sizes, a named third-party
  co-sponsor, consistent direction across 16/17 products. **No SaaS/subscription panel dataset
  found**; "How B2B Tech Brands Grow" exists but publishes no methodology publicly.
- **(c) Folklore extrapolation.** Applying these laws to zero-audience, pre-launch, n=1 founders. All
  the underlying data *requires* an existing measurable buyer base with repeat-purchase behaviour —
  structurally the opposite of a pre-launch product. The adjacent entrepreneurship literature (e.g. an
  fsQCA study of 72 tech ventures on first-customer acquisition via strong vs no ties) answers a
  *different* question and must not be press-ganged into "how brands grow" claims.

Also mis-transferred: **the 60/40 split is a B2C number**, and the B2B-filtered figure reverses to
~46/54. Practitioners routinely apply the B2C ratio to B2B — but the corrected number is itself
primary-unconfirmed, so the pack should teach *"60/40 is B2C and the B2B figure differs — verify
before quoting"* rather than shipping 46/54 as fact.

### 3.2 SEO and AI search

The documented core is small and stable: create content for people not rankings; there is no separate
helpful-content algorithm; spam policy tests *purpose*, not authorship; E-E-A-T is a **Trust-centred**
rater rubric, not a per-page score; raters cannot move rankings. Google even documents its own
non-guarantee — meeting every requirement does not guarantee crawling, indexing, or serving, and
appearing in Search costs nothing.

The volatile layer is where the pack must be careful. The **strongest evidence on AI Overviews is
Pew's observed-behaviour panel** (real browsing, ~900 US adults, fielded March 2025) — clicks fall
from 15% to 8% when a summary is present and only 1% of visits click inside the summary. Vendor
studies point the same direction with much weaker sampling. Crucially, **the different vendor numbers
are not mutually reconcilable** because each defines "AI-triggered query" differently — the pack
should cite Pew and treat vendor percentages as directional.

The **enforcement story is real but reported, not Google-confirmed**: site-reputation-abuse manual
actions from May 2024, scope expanded twice in 2024, with publicly reported casualties among major
publishers' coupon/affiliate subdirectories. Google has never published a penalised-site list. This
matters beyond SEO: **renting your domain's authority to a third-party operator is now a documented,
enforced anti-pattern**, which kills a whole class of "sponsored content hub" partnership ideas.

### 3.3 Deliverability, law, stores

Deliverability is an *engineering* precondition, not a copywriting topic — and the numbers moved
recently in three places (§0.3). The three mailbox providers are near-identical but **not** identical,
and the differences are operationally meaningful: Gmail rejects, Microsoft junks-then-warns, Yahoo
publishes no volume threshold and only "highly recommends" RFC 8058's POST method where Gmail
requires it.

On law, the load-bearing correction is that **ePrivacy Art. 13 — not GDPR — governs marketing email
in the EU**, and GDPR's legitimate-interest basis (Recital 47) does not rescue cold email. The four
regimes are structurally different enough that a single global list is unlawful to treat uniformly.
The FTC's 2024 fake-reviews rule (Part 465) is genuinely new and binds review-solicitation and
influencer tactics that marketing content still recommends casually.

Store listings give the ASO job a hard numeric backbone, and — via the Slack Marketplace slice — that
craft **generalises beyond mobile** to B2B integration directories, with the important asymmetry that
those directories gate on traction.

### 3.4 Attribution, paid, GTM

The honest hierarchy the pack should teach, from the primary literature: **platform-reported
conversions answer "what fired last," never "what was incremental."** The eBay experiment shows the
gap is not marginal — over 1,400% versus −63% on the same spend. Lewis & Rao then explain why almost
nobody can just run the experiment: with sales volatility at a coefficient of variation near 10, an
informative test needs **>10 million person-weeks**, and the median campaign would need to be **62×
larger** to resolve a 10% ROI difference.

That combination produces the pack's most defensible and least-taught conclusion: **for a solo or
small-spend builder, neither platform attribution nor a valid lift test is available, and MMM is
gated at ~2–3 years of weekly multi-channel data by its own vendors' documentation.** What remains is
geo-lift (needs geographic split and enough units), self-reported attribution (cheap, biased, still
useful), and explicitly-labelled assumption. Saying that plainly is more valuable than any tool
recommendation.

Positioning: Dunford's five components (competitive alternatives → unique attributes → value →
best-fit customers → market category) come from her own published material, and she frames the method
as trial-and-error craft influenced by JTBD, claiming no empirical validation. **Present it as craft,
well-regarded and widely adopted — not as evidence-backed.**

Launch post-mortems with real numbers are thin but exist: a documented failed Product Hunt launch
(~200 upvotes, negligible signups, author's own diagnosis that he chased upvotes instead of users),
and a named claim that a single Reddit post out-drove a #1 Product Hunt finish (~1,450 vs ~800
visitors) — the latter secondary-sourced and needing re-verification before quoting.

### 3.5 Launch and partnerships (lead slices)

Product Hunt's community guidelines (self-dated **11 April 2025**) enumerate the prohibitions:
*"asking for upvotes, using bots, incentivizing upvotes, and any other form of artificially
increasing activity"*, plus a ban on self-promotion in comments and on company accounts. **You may ask
people to visit and comment; never to upvote** — the single most-violated rule in circulating launch
checklists. Enforcement includes product removal and account suspension. Product Hunt's own guidance
names 12:01am Pacific as the launch moment, explicitly declines to name a best weekday (killing the
"always launch Tuesday" rule as platform doctrine), and **sanctions relaunching** for significant
iterations — corroborating the family's "launch is repeatable, not a moment" framing from a primary
source. Its ranking algorithm is **not published**; anyone claiming to know the weighting is guessing.

Slack Marketplace supplies the partnerships job with an operational bar (§1.3) and the traction gate
that reframes marketplace listing as a post-traction channel.

---

## 4. Corrections and refutations

Recorded because a wrong number that survives into the pack is worse than a gap.

1. **Lewis & Rao's headline is not "1.96 million weekly observations."** That figure does not appear
   in the paper. The abstract says informative experiments "can easily require **more than 10 million
   person-weeks**"; the 9× and 62× campaign-size multipliers are the paper's operational numbers.
   Corrected from the PDF by the lead.
2. **The eBay controlled-OLS figure is >1,400%, not >1,600%.** Read directly from NBER w20171.
   (The −63% and its CI [−124%, −3%] were reported correctly.)
3. **SKAdNetwork has not been superseded.** The brief assumed AdAttributionKit replaced it; vendor
   documentation indicates it is additive and interoperable, with **no Apple-announced deprecation
   timeline**. The brief's framing was wrong; the correction itself is only vendor-sourced because
   Apple's docs page defeats automated fetching.
4. **Gmail's page does not say "SMTP-level" rejection.** Its words are *"temporary and permanent
   rejections"*. The stronger phrasing was the worker's inference. Lead re-fetched and corrected —
   the distinction matters because the pack should quote the platform, not paraphrase upward.
5. **OpenView wound down in December 2023, not 2024** as the brief assumed. Its 2023 SaaS Benchmarks
   report page is still live; the report tradition continues via Kyle Poyar's Growth Unhinged with
   High Alpha and Paddle.
6. **The rater-guidelines date is confirmed primary, not secondary.** Trade press said 2025-09-11 /
   182 pages; the PDF's own cover page says exactly that. The secondary sources were right, and the
   pack can now cite the document itself.
7. **"The Long and the Short of B2B" is not listed in the LinkedIn B2B Institute's own research
   library** (lead-checked). The 46/54 figure is widely repeated but its primary document was not
   locatable — downgrade accordingly.

---

## 5. SOURCES table

Rung 1 = platform/legal/RFC primary · 2 = peer-reviewed or Ehrenberg-Bass publication · 3 =
named-practitioner or industry-body report · 4 = vendor engineering blog · 5 = agency/tool content
marketing.

| URL | Rung | As-of | Note |
|---|---|---|---|
| rfc-editor.org/rfc/rfc9989, /rfc9990, /rfc9991 | 1 | 2026-05 | **DMARCbis**; lead-verified byte-wise |
| rfc-editor.org/rfc/rfc8058 · /rfc7208 · /rfc6376 · /rfc2142 | 1 | 2017 / 2014 / 2011 / 1997 | one-click unsub · SPF · DKIM · role addresses |
| support.google.com/a/answer/81126 | 1 | 2026-07-31 | Gmail sender guidelines; **no last-updated date on page** |
| support.google.com/a/answer/14229414 | 1 | 2026-08-01 | Gmail FAQ; Nov 2025 enforcement, 48h recommendation |
| senders.yahooinc.com/best-practices/ | 1 | 2026-08-01 | Yahoo/AOL; no volume threshold stated |
| techcommunity.microsoft.com (Defender for O365 blog) | 4 | 2025 | **fetch blocked**; 5 vendor sources converge |
| eur-lex.europa.eu — Reg. 2016/679 (GDPR) · Dir. 2002/58/EC (ePrivacy) | 1 | in force | Art. 4(11), 21 · Art. 13(1), 13(2) |
| legislation.gov.uk — Data (Use and Access) Act 2025 c.18 | 1 | 2026-02-05 | PECR penalty rise; ICO page 403 |
| ico.org.uk PECR guidance | 1 | — | **403 on every attempt** — reconstructed |
| ftc.gov CAN-SPAM guide; federalregister.gov penalty notices | 1 | — | **403 / unfetchable redirect** — secondary only |
| govinfo.gov CFR Part 255 (FTC Endorsement Guides) | 1 | 2011 codification | §255.5 material-connection rule |
| ftc.gov legal library — 16 CFR Part 465 | 1 | 2024-10-21 | rule existence/citation confirmed; text blocked |
| crtc.gc.ca/eng/com500/faq500.htm | 1 | 2026-08-01 | CASL; fully fetched |
| developer.apple.com/app-store/product-page/ · /review/guidelines/ | 1 | 2026-08-01 | ASO limits; §2.3.7 |
| support.google.com/googleplay/android-developer/answer/9859152 | 1 | 2026-08-01 | Play limits |
| docs.slack.dev/slack-marketplace/… | 1 | 2026-08-01 | listing bar; no last-updated date |
| producthunt.com/launch · help.producthunt.com/…/community-guidelines | 1 | 2025-04-11 | launch rules; guidelines self-dated |
| developers.google.com/search/docs/essentials/spam-policies | 1 | **2026-05-15** | scaled content abuse |
| developers.google.com/search/docs/appearance/ranking-systems-guide | 1 | 2025-12-10 | HCU merged into core, Mar 2024 |
| developers.google.com/search/docs/appearance/ai-features | 1 | 2025-12-10 | "no special optimizations" |
| developers.google.com/search/docs/essentials · /fundamentals/creating-helpful-content | 1 | 2025-12-10 | baseline |
| guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf | 1 | **2025-09-11** | 182pp; lead read via pdftotext |
| developers.openai.com/api/docs/bots · support.claude.com/en/articles/8896518 · docs.perplexity.ai/guides/bots | 1 | 2026 (Anthropic doc 2026-04-07) | crawler matrix |
| llmstxt.org | 1 | 2024-09-03 | spec; **no provider consumption confirmed** |
| indexnow.org | 1 | 2026-07-31 | Google absent from participants |
| arxiv.org/abs/2311.09735 · dl.acm.org/doi/10.1145/3637528.3671900 | 2 | KDD 2024 | GEO; passes arXiv self-promotion check |
| Pew Research Center — AI summaries / click behaviour | 2 | fielded 2025-03 | ~900-adult observed panel; **best CTR evidence** |
| ahrefs.com AI Overviews study · Semrush · Similarweb | 5 | 2025–26 | disclosed (Ahrefs) to narrow (Semrush) sampling |
| searchenginejournal.com — Bing guidelines rewrite | 5 | 2026-02-27 | Bing's own page unfetchable |
| NBER w20171 / Econometrica 83(1) 2015 — Blake, Nosko & Tadelis | 2 | 2015 | lead read PDF; figures corrected |
| QJE 130(4) 2015 doi 10.1093/qje/qjv023 — Lewis & Rao | 2 | 2015 | lead read PDF; figures corrected |
| JMR 54(6) 2017 — Johnson, Lewis & Nubbemeyer, Ghost Ads | 2 | 2017 | methodology |
| research.google — Vaver & Koehler (2011); Kerman, Wang & Vaver (2017) | 1/2 | 2011 / 2017 | geo-experiment methodology; platform-authored |
| github.com/facebookexperimental/Robyn | 1 | 2026-08-01 | **LICENSE (repo root) = MIT** |
| github.com/google/meridian + developers.google.com/meridian | 1 | 2026-08-01 | **LICENSE (repo root) = Apache-2.0** |
| developer.apple.com/app-store/user-privacy-and-data-use/ | 1 | 2026-08-01 | ATT/IDFA |
| developer.apple.com/documentation/adattributionkit | 1 | — | **unfetchable (JS)** — vendor fallback only |
| support.google.com/google-ads/answer/10724817 | 1 | 2026-08-01 | PMax controls/reporting |
| facebook.com/business/help/733979527611858 | 1 | — | **unfetchable** — Advantage+ claims unconfirmed |
| marketingscience.info — 95-5 rule (Dawes, 2021) | 2 | 2021-05 | lead + worker; author's own disclaimer |
| marketingscience.info — CEPs in B2B (Romaniuk, 2022) | 2 | 2022-07 | disclosed n; strongest B2B finding |
| marketingscience.info — Double jeopardy in B2B (2021) · How do B2B brands compete (2021) · Easy to Find (2025-11) | 2 | 2021–2025 | last one blocked (403) |
| business.linkedin.com/marketing-solutions/b2b-institute/how-b2b-tech-brands-grow | 3 | 2026-08-01 | **no authors/date/n disclosed**; data gated |
| contagious.com — Felipe Thomaz critique of Sharp | 3 | — | named academic; expert opinion, not a paper |
| Australasian Marketing Journal 15(2) 2007 — Romaniuk, Sharp & Ehrenberg | 2 | 2007 | PDF 404; originators evidencing own claim |
| aprildunford.com/post/a-quickstart-guide-to-positioning | 3 | 2026-08-01 | 5 components; craft not research |
| openviewpartners.com/2023-saas-benchmarks-report/ | 3 | still live 2026-08-01 | firm wound down Dec 2023 |
| chartmogul.com/reports · bvp.com/atlas · Growth Unhinged · Paddle | 3/5 | 2024–26 | all self-selected samples |
| indiehackers.com/post/notes-from-a-failed-product-hunt-launch-… | 3 | 2026-08-01 | named post-mortem with numbers |

**Licence note (charter rule 3).** Only two repos were mined: **Robyn — MIT**, licence file at repo
root, verified via raw.githubusercontent.com. **Meridian — Apache-2.0**, likewise. No other repository
was cloned or mined by this channel. Google/Apple/Slack/Product Hunt documentation and Google support
pages are **all-rights-reserved**: facts and numbers are freely re-expressible, prose is not — every
quote in this report is within the charter's ≤2-per-source / <25-word cap and attributed. EU legal
texts and IETF RFCs are freely quotable.

---

## 6. What I did NOT cover, and why

- **Paywalled marketing-science originals.** Ehrenberg 1959, Ehrenberg/Goodhardt/Barwise 1990, and
  the Sharp & Romaniuk 2007 Pareto report were not read — JSTOR/Sage paywalls, and SSRN/ResearchGate
  mirrors returned 403. Their findings are recorded at secondary rung. Would need institutional access.
- **The ESOV coefficient.** Two conflicting figures circulate (0.5% vs 0.7% per 10 ESOV points). The
  lead fetched the IPA's *Media in Focus* page directly; it names Binet & Field and the IPA Databank
  but **states no coefficient**. Unresolved — do not ship a number.
- **The B2B 46/54 primary document.** Not in the LinkedIn B2B Institute's own research library;
  three secondary sources agree but no primary was located.
- **US/UK regulator primary text.** ftc.gov and ico.org.uk refused every automated fetch (403).
  CAN-SPAM's $53,088, FTC Part 465's $51,744, and the ICO's soft-opt-in wording need a browser-based
  or human confirmation before shipping.
- **Apple AdAttributionKit and Meta Advantage+ official docs.** Both defeat WebFetch (JS-rendered /
  locale-redirected). Needs a headless browser or the Chrome MCP tools.
- **Shopify App Store listing limits and HARO/Connectively's status.** Shopify's docs tree appears
  reorganised (two 404s); connectively.us returned 429 and Cision's page 403. A second marketplace's
  numbers would let the pack generalise the listing pattern beyond Slack; **do not ship any named
  journalist-query service without re-verifying liveness** — that sub-domain churns.
- **Non-charter jurisdictions.** Australia's Spam Act 2003 and New Zealand's Unsolicited Electronic
  Messages Act were out of the charter's named list.
- **X/Twitter, GitHub, competitor-skill, and web-design channels.** Other channels own those; this
  report deliberately does not duplicate them.

---

## 7. Re-verify before ship (volatile)

Everything here has a date for a reason. At build time, re-check: Gmail/Yahoo/Microsoft sender
thresholds and enforcement posture · the DMARC RFC set (very recent — May 2026) · UK PECR penalty
commencement · CAN-SPAM's annually-adjusted penalty · Apple/Google/Slack character limits and the
Slack traction minimum · Google's spam-policy and AI-features pages (both carry live last-updated
stamps) · the rater guidelines version date · any AI-Overview CTR figure (all are 2025–26 vintage and
this is the fastest-moving fact in the report) · Robyn's release staleness · whether Apple has
announced an SKAdNetwork deprecation · whether the ePrivacy Regulation has finally replaced the 2002
Directive · Connectively/HARO liveness.
