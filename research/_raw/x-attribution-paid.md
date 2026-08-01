# X/Twitter mining — Attribution & Measurement (A) + Paid Acquisition post-ATT (B)

Worker: independent mining pass, charter-governed (`research/marketing/charter.md`), did NOT read
controller-canon.md. Method: `xrelay batch` jargon sweeps (21 broad queries + 15 `from:`-scoped
queries against 6 verified seed handles), ranked on engagement + keyword relevance, cross-checked
full (non-truncated) `.text` fields from the captured JSON rather than re-fetching threads (see GAP
note on why thread reads were curtailed). Two corpora: `corpus1` (192 tweets, broad jargon, `--product
Top`), `corpus2` (179 tweets, `from:<handle>` jargon, `--product Top`).

## Handle verification (binding per brief)

Verified via `xrelay user <handle>`: **eric_seufert** (Eric Seufert, Mobile Dev Memo analyst, 48.7K
followers — anchor source), **oliviaakory** (Olivia Akory, Chief Marketing + Strategy Officer at Haus,
an incrementality-testing vendor, 5.7K followers), **avinash** (Avinash Kaushik, Chief Strategy
Officer Human Made Machine / ex-Google, 166.9K followers), **markritson** (Mark Ritson, marketing
professor, 51.3K followers), **garjoh_canuck** (Garrett Johnson, Boston University marketing
professor researching privacy/GDPR, 4.2K followers), **marketecturetv** (Marketecture, B2B adtech
media company, 3K followers). **DROPPED — did not resolve or resolved to the wrong person**:
`mattgershoff` (null/not found), `peterjfield` (null/not found; the real Peter Field appears to have
no active X account under a discoverable handle), `LesBinet` (resolved to an unrelated fan account;
the real Les Binet's handle is `BinetLes`, largely inactive since ~2021 and focused on brand-building
econometrics rather than attribution/paid mechanics — out of partition scope, not pursued further).

---

## Experiment results with real numbers (the rarest, highest-value class — read this section first)

1. **Meta Conversion Lift Study, ~$400K test, add-to-cart optimization** — @max_rosewater,
   [2025-10-19](https://x.com/max_rosewater/status/1979780954626695618). Ran a 10%-holdout CLS on
   ~$3.9K of a $90.5K ad-set spend window. Result: 118 incremental conversions, $6,965 incremental
   revenue, **1.84x incremental ROAS**, vs. 2.33x blended in-platform ROAS on the purchase-optimized
   campaigns. He posted a same-day clarification thread
   ([2025-10-19b](https://x.com/max_rosewater/status/1980050538172751968)) walking back the scale of
   the claim — the sample was too small to generalize, and he flagged running a longer CLS or a
   proper incrementality test next. EVIDENCE. Rare because it shows the *whole arc*: raw platform
   metrics → CLS number → self-correction on statistical power. Directly teaches the pack's
   "verify-and-subtract" posture: even a genuine holdout test needs a second look at N before it's
   actionable.

2. **StockX: MTA → incrementality+MMM framework, real channel reversals** — @oliviaakory quoting
   Alex Turner (Head of Growth, StockX),
   [2026-03-04](https://x.com/oliviaakory/status/2029024535169630505). Two concrete reversals: (a)
   Meta Catalog Ads looked like ~75% of Q4'24 paid-social spend under MTA; incrementality testing
   showed "almost no lift," triggering a rebuild toward brand creative; (b) YouTube looked like it
   drove "almost zero conversions" under MTA-only measurement; incrementality testing found it was
   real and it became StockX's #2 acquisition channel after doubling spend. EVIDENCE — a named
   practitioner at a named company, quoted by a vendor (Haus) whose product produced the test, so
   note the vendor-adjacency, but the specificity (two named channels, two opposite directions) is
   what a course-seller specimen never has.

3. **OluKai: MMM vs. causal experiments disagreement, resolved by testing** — @oliviaakory,
   [2026-01-21](https://x.com/oliviaakory/status/2014007498617794659). Legacy MMM said diversify
   media mix further; a causal/experiment-calibrated MMM (Haus) said the opposite — concentrate in
   Meta + Google. Result after reallocating into Q4: CAC dropped ~20%, and the calibrated model's
   forecast matched actuals. EVIDENCE, vendor-adjacent (Haus is the measurement vendor and Olivia is
   its CMO) — this is exactly the "MMM disagreed with platform ROAS" pattern the brief asked to hunt
   for, but the resolution mechanism (experiment-calibration) is itself Haus's product, so treat the
   *pattern* as evidence and the specific number as vendor-reported, not independently audited.

4. **Haus 2025 year-in-review — aggregated stats across (their) customer experiment base** —
   @oliviaakory, [2025-12-28](https://x.com/oliviaakory/status/2005289236824473760). Selected figures:
   YouTube drives **3.4x more incremental lift than Google Ads reports**; TikTok delivers 68% more
   lift in the post-campaign window and 1.9x more value counting Amazon/retail halo; CTV efficiency
   improves 344% at Cyber Week once delayed conversions are counted; 77 of the top 100 highest-lift
   Haus experiments ran on Meta; **Advantage+ over-reports revenue by 12 percentage points vs. manual
   campaigns**; excluding brand terms from Performance Max lowered CAC in 100% of tested cases (with
   an exception for high-AOV >$238 brands). EVIDENCE but vendor-sourced aggregate (Haus is grading its
   own homework — these are all stats that flatter incrementality-testing-as-a-service). Still the
   single densest source of platform-vs-reality gap numbers in the whole corpus; use the *shape* of
   each finding (which channels/products platforms over- or under-credit) as the pack's teaching
   material, footnote the vendor origin every time a specific percentage is cited.

5. **The Meta Report — 640 experiments over 18 months** — @oliviaakory,
   [2025-07-23](https://x.com/oliviaakory/status/1948073256746889726), led by Haus analyst Tyler
   Horner. Framed around: are Meta ads incremental, does Advantage+ work vs. manual, are mid/upper-
   funnel campaigns worth it, what's the omnichannel halo, should you use Incremental Attribution.
   SPECIMEN-leaning-EVIDENCE: it is a vendor content-marketing artifact (gated report, launched via a
   podcast appearance), but the N (640) is unusually large for a public practitioner claim; the
   report itself was not fetched (would require following the t.co link, outside this worker's
   budget) so its actual findings are UNVERIFIED beyond what's summarized in-tweet.

6. **YouTube: platform-reported 0.8x ROAS vs. blended-model 2.4x** — @iamgalba,
   [2026-04-03](https://x.com/iamgalba/status/2040093720268443965). Claims a named
   measurement-company ran "190 incrementality tests across brands" and found YouTube drove 3.4x more
   incremental revenue than Google Ads reported (note: same 3.4x figure as Haus's YouTube stat above —
   possibly the same underlying study being recirculated, possibly convergent evidence; the source
   company name was behind a truncated t.co link and not independently confirmed).
   UNVERIFIED: which company ran the 190 tests; what would verify it is following the un-truncated
   link. The halo-effect mechanism described (YouTube view → 3-day-later branded search → last-click
   credits Search) is a well-known, independently plausible measurement-gap story and is corroborated
   directionally by Google's own published branded-search-lift claims, but the specific multipliers in
   this post are second-hand.

7. **Ex-Meta: ~300 conversion lift studies, confidence-interval framing** — @NateLorenzen,
   [2025-05-09](https://x.com/NateLorenzen/status/1920843037972066370). Self-identifies as having run
   ~300 CLS while at Meta. Core teaching: "your iCPA or iROAS is the midpoint of [a confidence]
   interval" — a single stat-sig lift test can still have a huge interval, so decisions should draw on
   a database of results, not one test. EVIDENCE, insider practitioner claim (unverified employment
   history, but consistent with the mechanics of how Meta's CLS product actually works).

8. **AppLovin cohort: lower ROAS, higher spend growth, via Triple Whale data** — @BryantGarvin,
   [2026-03-09](https://x.com/BryantGarvin/status/2031153287924429087), citing Triple Whale internal
   data on 483 AppLovin advertisers vs. 20K+ broader Meta cohort (Feb 2026 as-of date given in-tweet).
   Meta ROAS 1.73x (AppLovin cohort) vs. 1.96x (broader); Meta CPA $51.46 vs. $37.34; AOV $87.94 vs.
   $73.49; AppLovin advertisers hold 8pp more spend outside Meta+Google. Framed explicitly as: lower
   ROAS is not proof of a worse business if the customer is profitable over time and — his own
   caveat — "platform-reported ROAS won't tell you that... this is exactly where MMM and
   incrementality testing earn their keep." EVIDENCE, named data partner (Triple Whale), dated,
   directly on-topic for the pack's honesty flagship: diversification without incrementality proof is
   "expensive overlap... not omnipresence."

**Pattern across all seven/eight: every credible "real experiment" post either (a) comes from a
measurement vendor citing its own aggregate book of business (Haus/Triple Whale — real numbers, but
grading their own product), or (b) is a single practitioner's one-off test that the poster themselves
immediately caveats for sample size. Nobody in this corpus published a truly disinterested, third-party
incrementality result with no commercial stake in the outcome — that absence is itself a finding worth
putting in the pack: genuine, disinterested incrementality write-ups are vanishingly rare on X even
when searched for directly.**

---

## A. Attribution and measurement

### Why multi-touch/last-click attribution breaks

- **@avinash**, recurring theme across 2013–2022 (dates matter: this is a *durable* thesis, not a
  single post) — "Attribution is NOT Incrementality" is a running newsletter title
  ([2021-04-11](https://x.com/avinash/status/1513577541700780033),
  [2021-07-06](https://x.com/avinash/status/1412457624096841736),
  [2020-10-29](https://x.com/avinash/status/1321860207408902144)). Worked example
  ([2022-02-17](https://x.com/avinash/status/1494345254157250562)): a DDA (data-driven attribution)
  model shows $90 cost-per-sale against a $70 target — looks like a win — but Cost Per *Incremental*
  Sale is $1,034. EVIDENCE, primary-practitioner (ex-Google Analytics evangelist), durable framing,
  no date-sensitivity risk since it's a conceptual claim not a platform-behavior claim.
- **@markritson**, [2019-03-06](https://x.com/markritson/status/1103128281564340224) — used Tesla
  closing its showrooms (because "most sales complete online") as "a very sloppy example of last
  click attribution." EVIDENCE, named marketing professor, illustrates the *media-narrative* misuse
  of last-click, not just the ad-platform kind.
- **@noelcetaSEO**, [2026-07-14](https://x.com/noelcetaSEO/status/2077098533384008071) — "Most teams
  use last-click attribution (wrong). Some use multi-touch (better but complex)." SPECIMEN — thread-
  opener rhetorical style typical of the genre; content is a correct but generic claim, low
  incremental value beyond confirming the trope is widespread.
- **@usermaven**, [2026-07-21](https://x.com/usermaven/status/2079612644575621381) — "the channel
  that introduced the customer often gets zero credit" under last-click. SPECIMEN (a data/analytics
  tool's own account), same genre as above.
- **@EricTilbury_RTB**, [2025-01-07](https://x.com/EricTilbury_RTB/status/1876440485994352884) —
  claims the difference between a $1M and $1B adtech company is "attribution via a last click
  reporting platform." SPECIMEN, opinion/aphorism, unverifiable as stated.

### Platform-reported vs. real: the gap itself

- **@eric_seufert**, [2022-12-13](https://x.com/eric_seufert/status/1602469225691742210) — "I want to
  see the attribution model that produced the $170MM revenue metric" (885 likes, his highest-engagement
  post in this corpus). Terse but the engagement signals how strongly this skepticism resonates;
  original context (what $170MM claim it replies to) not recovered — UNVERIFIED which specific claim
  triggered it.
- **@Melanie_Balke**, [2024-05-01](https://x.com/Melanie_Balke/status/1785734293941260617) — a
  concrete instance of the "attribution platforms sum to more than total revenue" problem: Klaviyo
  reports 3x the email revenue that Google Analytics (or other attribution tools) credit to the same
  channel. EVIDENCE, ecommerce practitioner, dated example of a still-common discrepancy class
  (email ESPs self-attributing generously).
- **@borrowed_ideas**, [2026-05-09](https://x.com/borrowed_ideas/status/2053105602025717924) — Q1'26
  digital-ad industry analysis: overall spend +22.1% YoY, but nearly half of *incremental* growth
  came from Meta alone; Google Search held ~33% incremental share; Microsoft Search's incremental
  share nearly halved (2.6%→1.1%); Trade Desk's incremental share "approaching zero." EVIDENCE
  (market/financial-analyst account), as-of 2026-05, useful for the pack's category-framing job on
  concentration in digital ad spend, tangential to core attribution/incrementality partition but
  relevant to "when paid is premature" framing (diminishing options outside the duopoly+AppLovin).

### Self-reported attribution ("how did you hear about us") and dark social

- **@codyschneider**, [2024-06-04](https://x.com/codyschneider/status/1798037002446880814) — "nothing
  more real than self-reported attribution... required field on signup form 'how did you hear about
  us.'" EVIDENCE, practitioner one-liner.
- **@scottrstrang**, [2024-07-26](https://x.com/scottrstrang/status/1816896028534263921) — "Wild how
  many sites still don't have self reported attribution set up... You'll get dramatically different
  results than what Google Analytics will tell you. Usually way less Google." EVIDENCE — direct,
  practitioner-observed discrepancy between GA-reported channel share and self-reported reality.
- **@davegerhardt**, [2024-05-13](https://x.com/davegerhardt/status/1789977835471286515) — frames
  social-media ROI measurement as fundamentally self-reported ("people tell us"). EVIDENCE, named B2B
  marketing practitioner (ex-Drift/Privy CMO).
- **@LemonpieFM**, [2022-04-08](https://x.com/LemonpieFM/status/1512434969259425802) — recommends an
  open-text "how did you hear about us" field to catch podcast-attributed conversions, an
  under-measured / dark-social-adjacent channel. EVIDENCE, niche but directly on-topic.
- **@segmentstream**, [2026-05-15](https://x.com/segmentstream/status/2055200319500321088) — product
  announcement: self-reported attribution surfaced inside "User Journey" above the first tracked
  session, explicitly pitched to catch "view-driven channels, dark social." SPECIMEN — vendor feature
  marketing, useful as an example of self-reported attribution becoming a productized category, not
  independent evidence of its effectiveness.
- **@HaktanSuren**, [2026-07-31](https://x.com/HaktanSuren/status/2083202272226398615) — "A blank UTM
  field is not a diagnosis. It may be consent-related loss, late consent, a tracking failure, or a
  broken CRM handoff... Unknown is honest. Direct is a claim." EVIDENCE, pithy, directly useful
  verbatim for the pack's UTM-discipline job — teaches that "Direct" traffic is often mislabeled
  attribution loss, not a real channel.

### MMM (Robyn, Meridian) and observational-vs-experimental calibration

- **@eric_seufert**, [2025-02-01](https://x.com/eric_seufert/status/1885797279379882371) — dated
  platform fact: "Google officially graduated its open-source Meridian MMM product out of Beta last
  week (it originally launched last March). And Meta ported its open-source Robyn MMM tool to Python
  from R late last year." As-of 2025-02-01 — volatile platform-tooling fact, both products' current
  state should be re-verified before citing in the pack. EVIDENCE, primary analyst, well-sourced.
- **@eric_seufert**, [2024-06-27](https://x.com/eric_seufert/status/1806343175759356393) — "Why media
  mix modeling fails": MMM "can't be the exclusive tool," compares a poorly-integrated MMM to "an
  unsuccessful organ transplant" — the cost isn't the model, it's the organizational adaptation
  (workflow change, expectation-setting, supplementing for use-cases MMM can't serve). EVIDENCE,
  strong organizational-reality framing distinct from the purely technical MMM discourse.
- **@eric_seufert**, [2023-10-11](https://x.com/eric_seufert/status/1712116181958615379) — "One of the
  most awkward conversations any marketer will have is when they are asked by their CFO to explain
  the output of a probabilistic attribution model." EVIDENCE.
- **@eric_seufert**, [2023-10-02](https://x.com/eric_seufert/status/1708947914284757483) — argues most
  sub-scale consumer companies are better served concentrating budget in a few channels with deep
  domain expertise than building an MMM. EVIDENCE — directly informs the pack's "when is MMM
  premature" job.
- **@eric_seufert**, [2023-02-14](https://x.com/eric_seufert/status/1625566275928789008) — "Using a
  MMM or any other econometric model must invite a total overhaul of the budgeting and optimization
  process... last-click/deterministic doesn't [support a Red/Yellow/Green ROAS matrix], either — not
  really." EVIDENCE.
- **@oliviaakory**, [2026-02-25](https://x.com/oliviaakory/status/2031017904963985633) — a named
  failure mode: an analyst runs an MMM/experiment, gets a zero-or-negative-lift result, it "feels
  wrong" because they know the campaign was good, so they re-run the analysis with different
  aggregation until it looks better. EVIDENCE (vendor-adjacent but describes a methodology-integrity
  problem independent of the vendor's own product) — directly useful for the pack's "verify, don't
  p-hack your own incrementality test" teaching.
- **@garjoh_canuck**, [2021-09-28](https://x.com/garjoh_canuck/status/1442832281215897603) — "One
  consequence of ATT/iOS14.5 is marketer's renewed dependence on MMM. I die a little inside (sigh)."
  EVIDENCE — a measurement-privacy researcher's skeptical read on MMM being adopted for the wrong
  reason (forced by signal loss, not chosen on merits).
- **eric_seufert citing Julian Runge & Bill Grosso (Mobile Dev Memo guest article)**,
  [2024-10-15](https://x.com/eric_seufert/status/1846179660150829344) — "Combating Misinformation in
  Business Analytics: Experiment, Calibrate, Validate," on the shortcomings of observational causal
  inference (MMM) specifically. EVIDENCE, points to a citable companion piece (not independently
  fetched — UNVERIFIED beyond the tweet's framing).
- **@oliviaakory citing a 2023 HBR field-study finding**,
  [2026-07-10](https://x.com/oliviaakory/status/2075617535374856596) — "the process of using
  experiments to calibrate models is needed to alleviate potential imprecisions in MMM's estimates."
  EVIDENCE (secondary citation of a named peer-reviewed-adjacent field study; the underlying HBR piece
  was not independently verified — UNVERIFIED: confirm the HBR/2023 citation directly before using in
  the pack).

---

## B. Paid acquisition after ATT / signal loss / platform black boxes

### SKAdNetwork / AdAttributionKit (AAK) — history and current state (all dated; this whole thread is volatile)

- **@eric_seufert**, [2026-06-18](https://x.com/eric_seufert/status/2067592357051044253) — as of
  WWDC 2026: "SKAdNetwork is a privacy tragedy and a cautionary tale... Apple didn't even offer an
  update to the framework (now called AdAttributionKit) at this year's WW[DC]." As-of date 2026-06-18
  — must be re-verified before citing AAK's current state in the pack; platform behavior here changes
  release to release.
- **@eric_seufert**, [2024-05-29](https://x.com/eric_seufert/status/1795819146799641024) — "Why did
  SKAdNetwork fail? ... because Apple couldn't incentivize the broader mobile advertising ecosystem to
  integrate with it." EVIDENCE, retrospective causal analysis.
- **@eric_seufert**, [2024-06-12](https://x.com/eric_seufert/status/1800889110975885402) — AAK
  "unifies Apple's various advertising attribution frameworks... These are substantive improvements. But
  impediments to adoption remain: IP-based attribution is still widely viewed [as unreliable]."
  EVIDENCE, as-of 2024-06-12.
- **@eric_seufert**, [2025-05-03](https://x.com/eric_seufert/status/1918701579131133993) — names the
  self-preferencing mechanism directly: Apple's own ad network (Apple Ads, formerly ASA) gets
  exclusive access to the richer AdServices attribution API; "All other networks must use
  SKAdNetwork for attribution, which was deliberately designed to be dysfunctional [in enabling
  precision]." EVIDENCE, structural/competitive claim, as-of 2025-05-03.
- **@eric_seufert**, [2022-10-24](https://x.com/eric_seufert/status/1584633871962083328) — SKAdNetwork
  4.0 (iOS 16.1) *increased* the random postback timer to 24–48 hours (from 0–24h), a concrete
  historical detail on how Apple tightened rather than loosened the framework over time. EVIDENCE,
  dated 2022-10-24.
- **@eric_seufert**, [2021-08-30](https://x.com/eric_seufert/status/1432432215284146176) — Facebook
  admitted to advertisers it had not been receiving SKAdNetwork postbacks for iPhone 12 devices since
  February (a ~6-month silent data gap). EVIDENCE, concrete platform-reliability incident, dated
  2021-08-30 — a real historical case of signal loss compounding on top of designed-in signal loss.
- **@garjoh_canuck**, [2023-05-01](https://x.com/garjoh_canuck/status/1653139522517979136) — cites an
  AppsFlyer ATT retrospective: average opt-in rate declined from 46% after year one to 45% after year
  two across industries — flags it as "2-3X what I've seen before" and asks for confirmation.
  UNVERIFIED (the 45-46% figure itself is third-hand via AppsFlyer, not independently checked by this
  worker) but useful as a concrete opt-in-rate benchmark, dated 2023-05-01.
- **@garjoh_canuck**, [2025-10-17](https://x.com/garjoh_canuck/status/1979162568443752584) — "Google
  is largely shutting down the Privacy Sandbox. Surviving: CHIPS, FedCM, Private State Tokens. Out:
  Topics, Protected Audience API, Attribution Reporting API, Private Aggregation, Related Web
  Sites…" EVIDENCE, primary-adjacent (named privacy researcher), **high-volatility platform fact,
  as-of 2025-10-17 — re-verify before citing**, directly relevant to the pack's "what happened to the
  privacy-sandbox attribution alternatives" gap.

### Advantage+ / Performance Max as black boxes; creative-as-targeting

- **@eric_seufert**, [2024-08-05](https://x.com/eric_seufert/status/1820509617224302677) — names the
  structural incentive problem directly: "Black-box automation systems like Advantage+ and PMax are
  designed to deploy the entirety of an advertiser's budget while meeting their performance targets.
  This creates the incentive for waste." EVIDENCE, strong structural-incentive framing, as-of
  2024-08-05 (platform mechanics may have shifted since).
- **@eric_seufert**, [2025-01-22](https://x.com/eric_seufert/status/1882186974670307796) — a
  Trump-impression parody quoting industry chatter that Advantage+ is "a total fraud" and "a black
  box," used satirically to needle the discourse. SPECIMEN (commentary on the genre of black-box
  complaints, not itself a claim).
- **@eric_seufert**, [2026-06-27](https://x.com/eric_seufert/status/2070837424620454279) — concrete
  Advantage+ Creative failure mode: generated an ad for REI (a bike retailer) featuring a bike with
  two sets of handlebars; notes similar generative-image hiccups seen with True Classic, Kirruna, and
  Lectric brands. EVIDENCE, dated 2026-06-27, illustrates automated-creative risk without
  overclaiming ("amusing anecdotes and not particularly significant" per his own framing).
- **@oliverwhudson**, [2026-02-25](https://x.com/oliverwhudson/status/2026657182360678550) — from a
  Meta panel Q&A: Advantage+/ASC "aren't gimmicks, they've fundamentally changed how we structure
  accounts... Reporting still has gaps. We've had to build supplementary tools just to answer basic
  questions about incrementality." EVIDENCE, named agency practitioner, balanced strengths/weaknesses
  framing, dated 2026-02-25.
- **@michbrophy**, [2026-07-21](https://x.com/michbrophy/status/2079667995022885036) — citing
  AlphaSense channel checks: Advantage+ is gaining share of *existing* ad budgets via better CPA/ROAS
  efficiency, explicitly framed as "Reallocation, not incremental spend — yet." EVIDENCE, financial
  research-desk source, dated 2026-07-21 — useful nuance against the "Advantage+ is growing the whole
  pie" narrative.
- **@ben_kaplan23**, [2026-05-22](https://x.com/ben_kaplan23/status/2057851908425937189) — post-Meta
  "Andromeda" ranking update, argues "creative is the targeting" is true but incomplete: creative
  efficiency still depends on CAPI/data quality (Event Match Quality); if EMQ is low, the creative
  algorithm has bad signal to learn from. EVIDENCE, dated 2026-05-22, nuances the popular slogan.
- **@markbuildsbrand**, [2026-02-05](https://x.com/markbuildsbrand/status/2019430204175786399) — "the
  ad IS the product in the customer's mind until they buy... broad targeting + great creative = let
  the machine do its job. Stop overthinking audiences." SPECIMEN (self-styled scaling-guru thread,
  unverifiable claims of "8+ figures"), but a representative, well-articulated statement of the
  "creative is the new targeting / volume beats optimization" practitioner consensus circulating since
  Advantage+/PMax matured — useful to teach recognition of the genre.
- **@jagadeesh_j**, [2023-11-27](https://x.com/jagadeesh_j/status/1729050928752582949) — "Organic
  cannibalization and Paid ads incrementally are the least analyzed part of Performance Marketing...
  always check how many organic clicks you are losing in the search console" when scaling Brand
  Search or PMax. EVIDENCE, dated 2023-11-27, directly on the brand-search-cannibalization sub-topic.
- **@DennisMoons**, [2023-08-11](https://x.com/DennisMoons/status/1689971338222465024) — "Should your
  brand be excluded from Performance Max?" — flags Google's added "Brand lists" exclusion feature and
  the debate over whether to use it. EVIDENCE, dated 2023-08-11 (a volatile Google Ads feature — its
  current form should be re-checked).
- **@AndrewLolk**, [2022-06-14](https://x.com/AndrewLolk/status/1536713290713292800) — cites a Google-
  provided table on Search vs. PMax cannibalization dynamics, describing it as "more favorable than
  previously explained." EVIDENCE, but the underlying Google table was not independently re-fetched —
  UNVERIFIED beyond the tweet's paraphrase, dated 2022-06-14.

### Incremental vs. standard attribution mechanics inside Meta's own ad account tools

- **@antonioventre_**, three related posts (dated 2026-06 to 2026-07): explains the mechanic
  precisely — "Standard attribution credits Meta for any purchase from a user who saw any Meta ad in
  the lookback window... Incremental attribution only credits Meta for purchases that statistically
  would not have happened without the ad exposure." Gives a worked example: "An ad with 6x ROAS on
  standard attribution might have 0.8x ROAS on incremental" once the warm-traffic pool is exhausted at
  scale ([2026-06-13](https://x.com/antonioventre_/status/2065828796284956873),
  [2026-07-03](https://x.com/antonioventre_/status/2073170675901010025)). Also describes *why* he
  doesn't optimize the delivery objective for incremental attribution — Meta's algorithm gets less
  signal and delivery quality degrades — instead optimizing for 7-day-click and *judging* scaling
  decisions on the incremental column
  ([2026-06-14](https://x.com/antonioventre_/status/2066224904257626176)). EVIDENCE, named ecommerce
  media-buying practitioner, internally consistent and mechanically detailed (the two-different-jobs
  framing — optimization signal vs. judgment metric — is a clean, reusable teaching device for the
  pack).
- **@KanishDigital**, [2025-04-15](https://x.com/KanishDigital/status/1912016479576269281) — explains
  Meta's "Incremental conversions" reporting column as a way to separate correlation from causation
  inside the standard ads dashboard, and proposes a 2x2 (ROAS × incrementality) grid to classify ads
  into gold / undervalued / vanity / cut. EVIDENCE, practical operationalization.
- **@andyaustinads**, [2024-06-04](https://x.com/andyaustinads/status/1798126930123976834) — a client
  fired the agency because reported ROAS fell while actual profit rose (the agency had shifted
  optimization to incremental revenue, away from "vanity metrics like ROAS based on view-through
  attribution"). EVIDENCE, short but a real client-relationship consequence of the honesty gap between
  reported and incremental metrics — useful cautionary note for the pack on stakeholder communication,
  not just measurement mechanics.

### CAC / LTV / payback honesty

- **@drewfallon12**, [2026-07-30](https://x.com/drewfallon12/status/2082841518226747540) — a concrete
  underwriting heuristic: only extend LTV-duration assumptions (24mo, 36mo) if the cohort's dollar-
  based retention at 12/24 months clears 10%/5% thresholds respectively; otherwise "you are outlaying
  cash for a payback that is probably not coming." EVIDENCE, reusable rule of thumb for the pack's
  CAC-honesty teaching.
- **@samuelthompson**, [2026-07-29](https://x.com/samuelthompson/status/2082615655598317727) — a bare
  worked example (CAC $1,200 / LTV $4,200 / 20% net margin) posed as an open question with no answer
  given. SPECIMEN (engagement-bait format), still useful as a template for the pack's own CAC/LTV/
  margin worksheet framing.

---

## Full SOURCES table (url · handle · date · specimen/evidence · credibility rung)

| URL | Handle | Date | Tag | Rung |
|---|---|---|---|---|
| /max_rosewater/1979780954626695618 | max_rosewater | 2025-10-19 | evidence | named-practitioner post-mortem |
| /max_rosewater/1980050538172751968 | max_rosewater | 2025-10-19 | evidence | named-practitioner post-mortem |
| /oliviaakory/2029024535169630505 | oliviaakory | 2026-03-04 | evidence | practitioner quote via vendor |
| /oliviaakory/2014007498617794659 | oliviaakory | 2026-01-21 | evidence | vendor-adjacent |
| /oliviaakory/2005289236824473760 | oliviaakory | 2025-12-28 | evidence | vendor aggregate |
| /oliviaakory/1948073256746889726 | oliviaakory | 2025-07-23 | specimen/evidence | vendor content marketing |
| /iamgalba/2040093720268443965 | iamgalba | 2026-04-03 | evidence (partly unverified) | agency/tool content |
| /NateLorenzen/1920843037972066370 | NateLorenzen | 2025-05-09 | evidence | ex-platform insider, unverified employment |
| /BryantGarvin/2031153287924429087 | BryantGarvin | 2026-03-09 | evidence | named data partner (Triple Whale) |
| /avinash/1513577541700780033 | avinash | 2022-04-11 | evidence | named-practitioner, durable thesis |
| /avinash/1412457624096841736 | avinash | 2021-07-06 | evidence | named-practitioner |
| /avinash/1321860207408902144 | avinash | 2020-10-29 | evidence | named-practitioner |
| /avinash/1494345254157250562 | avinash | 2022-02-17 | evidence | named-practitioner, worked example |
| /markritson/1103128281564340224 | markritson | 2019-03-06 | evidence | named marketing professor |
| /noelcetaSEO/2077098533384008071 | noelcetaSEO | 2026-07-14 | specimen | course-seller-style thread |
| /usermaven/2079612644575621381 | usermaven | 2026-07-21 | specimen | tool vendor |
| /EricTilbury_RTB/1876440485994352884 | EricTilbury_RTB | 2025-01-07 | specimen | opinion/aphorism |
| /eric_seufert/1602469225691742210 | eric_seufert | 2022-12-13 | evidence | primary analyst |
| /Melanie_Balke/1785734293941260617 | Melanie_Balke | 2024-05-01 | evidence | ecommerce practitioner |
| /borrowed_ideas/2053105602025717924 | borrowed_ideas | 2026-05-09 | evidence | market/financial analyst |
| /codyschneider/1798037002446880814 | codyschneider | 2024-06-04 | evidence | practitioner |
| /scottrstrang/1816896028534263921 | scottrstrang | 2024-07-26 | evidence | practitioner |
| /davegerhardt/1789977835471286515 | davegerhardt | 2024-05-13 | evidence | named B2B practitioner |
| /LemonpieFM/1512434969259425802 | LemonpieFM | 2022-04-08 | evidence | niche practitioner |
| /segmentstream/2055200319500321088 | segmentstream | 2026-05-15 | specimen | vendor feature marketing |
| /HaktanSuren/2083202272226398615 | HaktanSuren | 2026-07-31 | evidence | practitioner, pithy |
| /eric_seufert/1885797279379882371 | eric_seufert | 2025-02-01 | evidence | primary analyst, volatile fact |
| /eric_seufert/1806343175759356393 | eric_seufert | 2024-06-27 | evidence | primary analyst |
| /eric_seufert/1712116181958615379 | eric_seufert | 2023-10-11 | evidence | primary analyst |
| /eric_seufert/1708947914284757483 | eric_seufert | 2023-10-02 | evidence | primary analyst |
| /eric_seufert/1625566275928789008 | eric_seufert | 2023-02-14 | evidence | primary analyst |
| /oliviaakory/2031017904963985633 | oliviaakory | 2026-02-25 | evidence | vendor-adjacent |
| /garjoh_canuck/1442832281215897603 | garjoh_canuck | 2021-09-28 | evidence | privacy researcher |
| /eric_seufert/1846179660150829344 | eric_seufert | 2024-10-15 | evidence (secondary cite, unverified) | primary analyst citing guest authors |
| /oliviaakory/2075617535374856596 | oliviaakory | 2026-07-10 | evidence (secondary cite, unverified) | vendor-adjacent citing HBR |
| /eric_seufert/2067592357051044253 | eric_seufert | 2026-06-18 | evidence, volatile | primary analyst |
| /eric_seufert/1795819146799641024 | eric_seufert | 2024-05-29 | evidence | primary analyst |
| /eric_seufert/1800889110975885402 | eric_seufert | 2024-06-12 | evidence, volatile | primary analyst |
| /eric_seufert/1918701579131133993 | eric_seufert | 2025-05-03 | evidence, volatile | primary analyst |
| /eric_seufert/1584633871962083328 | eric_seufert | 2022-10-24 | evidence | primary analyst |
| /eric_seufert/1432432215284146176 | eric_seufert | 2021-08-30 | evidence | primary analyst |
| /garjoh_canuck/1653139522517979136 | garjoh_canuck | 2023-05-01 | evidence, unverified figure | privacy researcher citing AppsFlyer |
| /garjoh_canuck/1979162568443752584 | garjoh_canuck | 2025-10-17 | evidence, volatile | privacy researcher |
| /eric_seufert/1820509617224302677 | eric_seufert | 2024-08-05 | evidence, volatile | primary analyst |
| /eric_seufert/1882186974670307796 | eric_seufert | 2025-01-22 | specimen | satire/commentary |
| /eric_seufert/2070837424620454279 | eric_seufert | 2026-06-27 | evidence | primary analyst |
| /oliverwhudson/2026657182360678550 | oliverwhudson | 2026-02-25 | evidence | named agency practitioner |
| /michbrophy/2079667995022885036 | michbrophy | 2026-07-21 | evidence, volatile | financial research desk |
| /ben_kaplan23/2057851908425937189 | ben_kaplan23 | 2026-05-22 | evidence | practitioner |
| /markbuildsbrand/2019430204175786399 | markbuildsbrand | 2026-02-05 | specimen | scaling-guru thread, unverifiable claims |
| /jagadeesh_j/1729050928752582949 | jagadeesh_j | 2023-11-27 | evidence | practitioner |
| /DennisMoons/1689971338222465024 | DennisMoons | 2023-08-11 | evidence, volatile | practitioner |
| /AndrewLolk/1536713290713292800 | AndrewLolk | 2022-06-14 | evidence, unverified source | practitioner citing Google table |
| /antonioventre_/2065828796284956873 | antonioventre_ | 2026-06-13 | evidence | named practitioner |
| /antonioventre_/2073170675901010025 | antonioventre_ | 2026-07-03 | evidence | named practitioner |
| /antonioventre_/2066224904257626176 | antonioventre_ | 2026-06-14 | evidence | named practitioner |
| /KanishDigital/1912016479576269281 | KanishDigital | 2025-04-15 | evidence | practitioner |
| /andyaustinads/1798126930123976834 | andyaustinads | 2024-06-04 | evidence | practitioner |
| /drewfallon12/2082841518226747540 | drewfallon12 | 2026-07-30 | evidence | practitioner |
| /samuelthompson/2082615655598317727 | samuelthompson | 2026-07-29 | specimen | engagement-bait format |
| /TaylorHoliday/1991240100966199690 | TaylorHoliday | 2025-11-19 | evidence | named CEO practitioner (Common Thread Collective) |
| /MrYoniLevy/2046963568474538214 | MrYoniLevy | 2026-04-22 | evidence | practitioner, references Taylor Holiday |
| /MrYoniLevy/1828885609924132941 | MrYoniLevy | 2024-08-28 | evidence | practitioner |
| /PrestonRuther10/1907948054973665775 | PrestonRuther10 | 2025-04-04 | evidence | named-practitioner post-mortem (Chubbies) |
| /CTtheDisrupter/1940853809284370855 | CTtheDisrupter | 2025-07-03 | specimen, unverified stat | course-seller thread citing unlinked "Meta internal data" |
| /astridwilde1/1879595382633902411 | astridwilde1 | 2025-01-15 | specimen | opinion |
| /hyros_official/2065401803508699172 | hyros_official | 2026-06-12 | specimen | attribution vendor promo |
| /lifesightdotio/2083168531185639876 | lifesightdotio | 2026-07-31 | specimen | attribution vendor promo |
| /Universal_Ads/2060079447043170657 | Universal_Ads | 2026-05-28 | specimen | CTV vendor case-study marketing |

---

## GAP: what this pass did NOT cover, and why

1. **`from:mattgershoff` and `from:peterjfield` returned nothing** (`xrelay user` gave `data: null` for
   both). Matt Gershoff runs Recast, an open-source-adjacent MMM consultancy directly relevant to the
   MMM sub-topic, and Peter Field co-authored the IPA effectiveness/long-vs-short-term studies with Les
   Binet. Neither was reachable under the handles given. **Would close the gap:** a fresh handle
   lookup (their company/LinkedIn bios likely list the correct @, if any) and a targeted `from:`
   sweep once found.
2. **Les Binet (`BinetLes`) and the brand-effectiveness/econometrics literature were deliberately
   under-mined.** His feed (confirmed via search, not `xrelay user`, since his real handle differs from
   the seed) is largely inactive since ~2021 and is about long-vs-short-term brand-building
   econometrics — adjacent to MMM but a different debate (brand vs. activation) than this partition's
   attribution/paid-post-ATT scope. Flagging for the sub-orchestrator in case the Binet/Field IPA
   corpus belongs better in a different worker's partition (e.g., positioning/GTM) than here.
3. **Search/batch endpoint degraded under session-wide concurrent load** partway through this run (per
   a sibling worker's direct notification); the second planned jargon batch (`from:markritson`,
   deeper `avinash`/`marketecturetv` combinations, additional broad-jargon variants like "dark social"
   with zero hits, "SKAdNetwork postback aggregated" with zero hits) was **not re-run**. **Would close
   the gap:** re-run `queries1.txt`/`queries2.txt` variants once the shared endpoint recovers, plus new
   variants for the two zero-hit queries with different phrasing.
4. **No `xrelay thread` calls were made this run.** All quoted text came from full (non-truncated)
   `.text` fields already captured by `search`/`batch`, which in this corpus ran 200–800+ words per
   tweet (not the usual 280-char truncation risk the charter warns about) — spot-checked manually
   against several of the longest, highest-stakes posts (Preston Ruther's Chubbies post-mortem, the
   Haus year-in-review) and found no truncation artifacts or hidden t.co redirects changing the
   claim. Reply-thread context (what other practitioners said back) was NOT read for any post —
   **would close the gap:** thread reads on the 5–6 finalists in the "experiment results" section,
   especially @max_rosewater's follow-up thread and @iamgalba's post (to identify the un-linked
   "190 incrementality tests" source).
5. **The Meta Report's actual findings (640 experiments) were not fetched** — only the announcement
   tweet was captured; the report itself sits behind a link not followed in this pass (WebFetch budget
   was reserved, not spent, since this worker prioritized xrelay-native mining per the brief). Would
   close the gap: one WebFetch on the report URL.
6. **AppLovin's incrementality/fraud discourse (Culper Research report, `$APP` short-seller claims)**
   surfaced repeatedly (eric_seufert, astridwilde1, BryantGarvin) but was only lightly mined — this
   looks like a live, contested, dated controversy (2025 Culper report, ongoing into 2026) that could
   be its own finding cluster; not fully chased down given the write-now directive.
