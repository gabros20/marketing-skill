# Channel D worker report — SEO primary sources and the state of AI search (as of 2026-07-31)

Scope: Google Search Central docs, spam policies/enforcement, E-E-A-T/QRG, AI Overviews/AI Mode
documentation + empirical CTR evidence, GEO/AEO academic basis, LLM-crawler primary docs, llms.txt,
Bing/Copilot/IndexNow. WebSearch calls used: 8 of 20 allotted. `crwl` not used (reported broken).

---

## 1. Google Search Central — ranking systems, essentials, helpful content

**SOURCE:** https://developers.google.com/search/docs/appearance/ranking-systems-guide — Last updated
2025-12-10 UTC.
**WHAT IT TEACHES:** Google publishes a maintained list of named ranking systems. Currently-active
systems documented: BERT, Crisis information systems, Deduplication systems, Exact match domain
system, Freshness systems, Link analysis systems/PageRank, Local news systems, MUM, Neural matching,
Original content systems, Removal-based demotion systems, Passage ranking system, RankBrain,
Reliable information systems, Reviews system, Site diversity system, Spam detection systems.
Retired/absorbed: Helpful content system (see below), Hummingbird, Panda (absorbed into core, 2015),
Penguin (integrated into core, 2016).
**VERBATIM-WORTH-KEEPING:** "In March 2024, it evolved and became part of our core ranking systems,
as our systems use a variety of signals and systems to present helpful results to users." — confirms
the helpful content system was folded into core ranking, not retained as a standalone system.
**RELEVANCE TO PACK JOBS:** seo-strategy — gives the pack a single authoritative, dated citation for
"there is no separate helpful-content algorithm anymore"; kills a widespread folklore claim (see §8).
**CREDIBILITY NOTE:** Primary source (Google Search Central), top of ladder. Date confirmed on-page.

**SOURCE:** https://developers.google.com/search/docs/essentials — Last updated 2025-12-10 UTC (same
date as above — Google appears to batch-update Search Central pages; treat identical dates across
pages as plausible but spot-check before citing precisely if it matters).
**WHAT IT TEACHES:** Search Essentials = three pillars (technical requirements, spam policies, key
best practices: helpful/people-first content, keyword placement, crawlable links, media/structured-
data/JS best practices). Explicit anti-myth line already built into the doc itself.
**VERBATIM-WORTH-KEEPING:** "It doesn't cost any money to appear in Google Search results, no matter
what anyone tries to tell you." Also: meeting all requirements "doesn't guarantee" crawling/indexing/
serving — Google documents its own non-guarantee.
**RELEVANCE:** seo-strategy baseline; good source for the pack's "here is what Google itself says you
need, nothing more" section.
**CREDIBILITY:** Primary source.

**SOURCE:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content — Last
updated 2025-12-10 UTC.
**WHAT IT TEACHES:** This specific page (unlike the ranking-systems-guide) does NOT restate the March
2024 merger explicitly — it only references "Google's automated ranking systems" generically. The
authoritative citation for the merger is the ranking-systems-guide page, not this one. Provides the
canonical self-assessment questions for people-first content: does the audience find it useful
visiting directly; does it demonstrate first-hand expertise/depth; does the site have a primary
purpose; will readers achieve their goal; will readers feel satisfied.
**VERBATIM:** "content should be created primarily for people, and not to manipulate search engine
rankings."
**RELEVANCE:** content-strategy-and-briefs, seo-strategy — the self-assessment checklist is directly
reusable as a review rubric reference.
**CREDIBILITY:** Primary source.

---

## 2. Spam policies — scaled content abuse, site reputation abuse, expired domain abuse, enforcement

**SOURCE:** https://developers.google.com/search/docs/essentials/spam-policies — Last updated
2026-05-15 UTC (per prior colleague fetch, confirmed consistent in this fetch).
**WHAT IT TEACHES — precise policy language, purpose vs. method:**
- Scaled content abuse: "many pages are generated for the primary purpose of manipulating search
  rankings and not helping users," explicitly naming "using generative AI tools or other similar
  tools to generate many pages without adding value for users" as one example alongside non-AI
  scraping tactics. **The policy's stated trigger is intent/purpose (rank manipulation, no user
  value), not the fact of AI authorship** — this is the precise, checkable answer to the charter's
  framing question.
- Site reputation abuse: "third-party content is published on a host site mainly because of that
  host's already-established ranking signals, which it has earned primarily from its first-party
  content" — i.e., the "parasite SEO" pattern (unrelated third-party content riding a trusted
  domain's authority).
- Expired domain abuse: "an expired domain name is purchased and repurposed primarily to manipulate
  search rankings by hosting content that provides little to no value to users," e.g. an ex-medical
  domain repurposed for casino content.
**RELEVANCE:** seo-strategy — this is the single most load-bearing citation for the pack's spam/AI-
content section; use it to write the rule as "purpose-tested, not authorship-tested."
**CREDIBILITY:** Primary source, top of ladder, dated.

**SOURCE:** https://developers.google.com/search/blog/2024/03/core-update-spam-policies (publish
date: March 2024 — exact day not independently confirmed; SearchEngineJournal/industry secondary
coverage dates the policy announcement March 5, 2024).
**WHAT IT TEACHES:** Announcement of the March 2024 core update plus the three new spam policies
above, framed as reducing "content that feels like it was made to attract clicks" in favor of content
"people find useful." (Full body text could not be extracted directly via WebFetch — page returned
only an archive/navigation shell twice; the summary above is reconstructed from Google's own policy
pages plus corroborating secondary sources, not a direct quote from this specific post. Flagged as
**UNVERIFIED: exact wording of the original 2024-03 announcement post** — what would verify it: a
manual browser fetch or Wayback Machine snapshot of the live rendered page.)
**RELEVANCE:** seo-strategy, go-to-market-and-launch (site-migration/relaunch risk).
**CREDIBILITY:** Primary source in principle; this worker could not confirm exact body text, so treat
enforcement narrative below as corroborated-by-secondary-sources rather than directly quoted.

**Enforcement track record (secondary sources, dated, converging on a consistent timeline):**
- Google Search Central policy announced 2024-03-05; manual-action enforcement against site
  reputation abuse began 2024-05-07; the policy scope was expanded twice, in September 2024 and
  November 19 2024 (per Capconvert's "18 Months In" retrospective and SEO Roundtable coverage).
- Publicly reported casualties of manual action for site-reputation-abuse (third-party coupon/
  affiliate subdirectories riding a trusted domain): CNN, USA Today, LA Times (early wave); Forbes
  Advisor, CNN Underscored, Fortune Recommends, WSJ Buyside, Men's Journal, USA Today's "Reviewed,"
  Newsweek Vault, The Sun UK Shopping section (later waves) — sites reported drops in visibility or
  outright deindexing of the offending subdirectory.
- Sites that removed the offending content or noindexed the affected sections reportedly had manual
  actions lifted.
**RELEVANCE:** seo-strategy, partnerships-and-pr (licensing-your-domain-to-a-third-party-operator is
now a documented, enforced anti-pattern, directly relevant to any "sponsored content hub" GTM idea).
**CREDIBILITY NOTE:** This entire enforcement narrative rests on SEO trade press (Search Engine
Journal, SEO Roundtable, Capconvert, gsqi.com) — vendor/agency-tier on the ladder, not primary. Google
itself has not published a named list of penalized sites; treat specific-company claims as
**reported, not Google-confirmed**. Mark as such in the pack.

---

## 3. E-E-A-T and the Search Quality Rater Guidelines

**SOURCE:** https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf (redirects to
static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf).
**WHAT COULD BE VERIFIED:** The PDF is real and hosted by Google (static.googleusercontent.com is a
Google-owned host) but this worker's WebFetch tool could not extract readable text from the binary
(returned encoded stream data). **UNVERIFIED directly: the PDF's own cover-page version date** — what
would verify it: opening the PDF in an actual PDF reader, or `pdftotext`.
**Secondary-source corroboration on version/date:** Multiple 2025–2026 SEO trade sources (SEO
Roundtable, SEOZoom, industry "2026 guide" posts) converge on: the guidelines were last substantively
updated **2025-09-11**, growing from 181 to 182 pages. Treat this specific date as
**agency/vendor-tier corroborated, not primary-source-confirmed** by this worker, since the PDF text
itself was unreadable in this session.
**On raters not directly affecting rankings** — confirmed via Google's own blog corpus (found through
search, not directly fetched in full this session): Google Search Central Blog content states rater
data "is not used directly in ranking algorithms" and is instead aggregate feedback ("like a
restaurant getting feedback cards from diners") used to judge whether ranking-system experiments are
working, not to score or promote/demote individual sites. Companion source:
https://developers.google.com/search/blog/2023/11/search-quality-rater-guidelines-update and
https://blog.google/products-and-platforms/products/search/overview-our-rater-guidelines-search/.
**This is a DOCUMENTED fact**, useful as a direct folklore-killer against "getting a low quality
score from a rater will tank your rankings" (false — no individual page is rated for live ranking
purposes at all).
**E-E-A-T history:** https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t
(publish date December 2022) is Google's own announcement that added "Experience" as a new first E to
what was E-A-T. This worker could not extract the full body text (WebFetch returned only the archive
listing, not rendered content) so the exact justification sentence is **UNVERIFIED: precise wording of
why Experience was added** — what would verify it: manual browser fetch of the rendered post.
**RELEVANCE:** seo-strategy, content-strategy-and-briefs — E-E-A-T is a rater-guideline construct, not
a ranking factor with a documented weight; the pack should present it as "quality framework Google
asks humans to apply when judging search quality in aggregate," not "a metric your page gets scored
on."
**CREDIBILITY:** Primary source (the PDF and Google's own blog) for the core facts; secondary/trade
sources for the specific 2025-09-11 date and page count.

---

## 4. AI Overviews / AI Mode — official documentation and empirical CTR evidence

**SOURCE:** https://developers.google.com/search/docs/appearance/ai-features — Last updated
2025-12-10 UTC.
**WHAT IT TEACHES:** Google's own positioning: "There are no additional requirements to appear in AI
Overviews or AI Mode, nor other special optimizations necessary" — i.e., **Google's documented
position is that GEO/AEO as a distinct discipline is unnecessary**; AI features draw from the same
index via standard crawling/indexing, using "a wider and more diverse set of helpful links" pulled
from multiple related searches. AI Overviews trigger "when deemed additive to classic Search"; AI Mode
is positioned for complex, comparison/reasoning queries. Eligibility requirement: "a page must be
indexed and eligible to be shown in Google Search with a snippet."
**Documented site-owner controls:** nosnippet, data-nosnippet, max-snippet (limit what's shown),
noindex (blocks entirely), standard robots.txt directives, and **Google-Extended**, described as
addressing "AI training and grounding in other Google systems" (i.e., a separate opt-out from
classic Search crawling/indexing).
**Measurement:** AI-features traffic surfaces inside Search Console's Performance report under the
"Web" search type — blended with normal Search data, not broken out separately. This is a real
measurement gap worth flagging for attribution-and-measurement.
**RELEVANCE:** seo-strategy (flagship distinction: Google's own doc undercuts most GEO-vendor "special
AI Overview optimization" claims), attribution-and-measurement (Search Console can't isolate AI-Overview
clicks).
**CREDIBILITY:** Primary source, dated.

**Empirical CTR impact — ranked by credibility:**
1. **Pew Research Center**, published ~2025-07 ("More Google Searches Are Ending Without a Click,"
   covered by Search Engine Land 2025-07-22 and others). **Methodology:** actual browsing-behavior
   panel of ~900 U.S. adults, observed during March 2025 (not a keyword-sampling/estimation study).
   **Findings:** users clicked a traditional web result in 8% of searches that showed an AI summary,
   vs. 15% when no summary was present; only 1% of visits clicked a link inside the AI summary itself;
   users ended their browsing session after a summary-containing search 26% of the time vs. 16%
   without one; 58% of observed searches surfaced at least one AI summary. **This is the strongest
   available evidence** — real observed user behavior, not modeled estimates — and should be the
   pack's primary citation for AI-Overview click impact. As-of date: 2025-07 (study fielded March
   2025); confirm no newer Pew wave exists before final synthesis.
2. **Ahrefs** (blog, methodology disclosed): sampled 300,000 keywords from its own Keywords Explorer
   index (150k with an AI Overview present, 150k informational-intent keywords without), used
   aggregated Google Search Console click data, compared March 2024 (pre-AI-Overview U.S. rollout) vs.
   March 2025. Reported result: **AI Overviews reduce clicks by 34.5%** on affected keywords. Vendor
   study, but methodology is disclosed and the before/after design is reasonable — rank above
   undisclosed-methodology vendor claims.
3. **Semrush** and **Similarweb** (both 2025 vintage, per secondary aggregation): Semrush reports a
   93% zero-click rate specifically within AI Mode on ~500+ sampled marketing/SEO topic queries (a
   narrow, topically-skewed sample — flag as such); Similarweb reports 83% of AI-Overview-triggering
   searches end without a click, using its desktop+mobile web panel, Jan–Apr 2026, US
   (via SparkToro's citation of Similarweb data). **These are vendor-panel estimates with narrower or
   less-disclosed sampling than Pew or Ahrefs** — usable as directional corroboration, not as the
   pack's primary evidence.
**RELEVANCE:** seo-strategy, attribution-and-measurement, go-to-market-and-launch (a "we'll drive
organic traffic via content" GTM plan needs this reality-check).
**CREDIBILITY LADDER APPLIED:** Pew (methodology study) > Ahrefs (disclosed-methodology vendor study)
> Semrush/Similarweb (narrower-sample or less-disclosed vendor studies). None are Google-published
first-party numbers — Google has not published its own CTR-impact data; this is itself a gap worth
noting in the pack (Google's AI-features doc describes mechanics and controls, not the CTR
consequence — site owners are triangulating from outside measurement).

---

## 5. GEO / AEO — academic basis, verdict

**SOURCE:** arXiv 2311.09735, "GEO: Generative Engine Optimization" — Aggarwal, Murahari, Rajpurohit,
Kalyan, Narasimhan, Deshpande. Initial submission 2023-11-16; current version (v3) 2024-06-28;
**accepted and published at KDD 2024** (ACM SIGKDD, DOI 10.1145/3637528.3671900) — i.e. this is
peer-reviewed, not a bare preprint.
**Commercial-conflict check (charter's arXiv rule):** Searched specifically for whether these authors
founded a GEO/AEO commercial product. Result: **no evidence found** that these six authors are
affiliated with a GEO-optimization SaaS company. The prominent commercial GEO/AEO platforms found in
the same search (AthenaHQ, Profound) were founded by different, unrelated people (AthenaHQ: Andrew Yan
and Alan Yao — ex-Google-Search and ex-ServiceNow, YC-backed). **Verdict: this paper passes the
charter's self-promotion check** — it appears to be genuine academic work, not disguised vendor
content, and its peer-reviewed status (KDD 2024) puts it meaningfully above the rest of the GEO/AEO
literature on the credibility ladder.
**Findings, with caveats:** black-box optimization framework tested against "GEO-bench," a
constructed benchmark of queries across domains; headline claim "up to 40% boost in visibility" in
generative-engine responses. Authors themselves caveat that "efficacy... varies across domains,
underscoring the need for domain-specific optimization methods" — i.e., **the 40% figure is a
best-case/selected-domain result, not a general expectation**, and this worker could not confirm which
generative engines/models were actually benchmarked (not disclosed in the fetched abstract page).
**UNVERIFIED: which specific generative engines GEO-bench evaluated** — what would verify it: reading
the full paper PDF, not just the abstract landing page.
**VERDICT for the pack:** GEO as a term has exactly **one credible peer-reviewed anchor** (this paper),
but the vast majority of "GEO/AEO strategy" content circulating in 2026 (checklists, "how to rank in
ChatGPT" blog posts) is **not derived from this paper's method** and has no comparable empirical basis
— it is vendor content wrapped in the GEO paper's borrowed credibility. Recommend the pack cite the
KDD paper narrowly (as evidence that *some* generative-engine-visibility optimization has been
formally studied) while treating specific GEO/AEO "10 tactics" content as folklore unless independently
sourced.
**RELEVANCE:** seo-strategy (the GEO/AEO subsection needs exactly this fact/folklore split).
**CREDIBILITY:** Peer-reviewed (KDD 2024) — above vendor blogs, below platform primary documentation.

---

## 6. Official crawler/citation documentation — OpenAI, Anthropic, Perplexity

**SOURCE:** https://developers.openai.com/api/docs/bots (redirected from platform.openai.com/docs/bots
— treat as the current canonical URL going forward).
**WHAT IT TEACHES:** Three distinct bots with different purposes and controllability:
- **GPTBot** — crawls for foundation-model training; disallowing it in robots.txt opts content out of
  training data.
- **OAI-SearchBot** — powers ChatGPT's search feature; site owners can disallow it to keep pages out
  of ChatGPT search *answers* specifically, while the doc notes opted-out pages "can still appear as
  navigational links" (verbatim, <25 words). robots.txt changes take ~24h to propagate.
- **ChatGPT-User** — handles live, user-triggered fetches inside ChatGPT/Custom GPTs; the doc states
  "robots.txt rules may not apply" for these because a human explicitly requested the fetch in the
  moment.
Each bot publishes a machine-readable IP allowlist (searchbot.json / gptbot.json / chatgpt-user.json).
**RELEVANCE:** seo-strategy, content-strategy — gives the pack an accurate, non-folkloric robots.txt
matrix per-bot-per-purpose, replacing vague "block AI bots" advice.
**CREDIBILITY:** Primary source (OpenAI's own docs).

**SOURCE:** https://support.claude.com/en/articles/8896518 (redirected from support.anthropic.com —
note the anthropic.com URL now forwards to support.claude.com; use the claude.com URL going forward).
Last updated per the article itself: **2026-04-07**.
**WHAT IT TEACHES:** Three bots — **ClaudeBot** (training-data collection), **Claude-User**
(retrieves pages live when a user asks Claude a direct question), **Claude-SearchBot** (indexes
content to improve Claude's search-result quality/relevance). Each independently blockable via
`Disallow: /` per user-agent in robots.txt; crawl-delay supported; per-subdomain blocking required
separately; IP list at claude.com/crawling/bots.json. Anthropic explicitly states IP-blocking is
unreliable and robots.txt is the recommended mechanism. Anthropic commits to transparency,
non-disruptive crawling, and respecting disallow signals.
**RELEVANCE:** seo-strategy — same as above, per-bot granularity for Claude specifically.
**CREDIBILITY:** Primary source, dated (2026-04-07).

**SOURCE:** https://docs.perplexity.ai/guides/bots.
**WHAT IT TEACHES:** **PerplexityBot** surfaces/links sites in Perplexity search results and is
explicitly stated to be "not used to crawl content for AI foundation models" — i.e. Perplexity
documents a search-only/no-training-use crawler, a materially different stance than OpenAI/Anthropic's
combined training+search bots. **Perplexity-User** handles live user-triggered fetches and "generally
ignores robots.txt rules" (same live-fetch exception pattern as OpenAI/Anthropic). The docs page also
references `https://docs.perplexity.ai/llms.txt` as an existing file on Perplexity's own docs site —
notable as Perplexity *using* the llms.txt convention for its own documentation, which is different
from a claim that PerplexityBot itself *parses* other sites' llms.txt files (not established either
way in this source).
**RELEVANCE:** seo-strategy.
**CREDIBILITY:** Primary source.

---

## 7. llms.txt — spec status and adoption verdict

**SOURCE:** https://llmstxt.org/ — authored by Jeremy Howard (fast.ai), published 2024-09-03.
**WHAT IT TEACHES:** A proposed convention: a `/llms.txt` markdown file at a site root giving a
curated, LLM-friendly index with links to markdown versions of pages, meant to address LLMs' limited
context windows and the lossiness of HTML-to-text conversion. Adoption examples cited on the spec's
own site: FastHTML, nbdev-generated projects, plugins for VitePress/Docusaurus/Drupal, and directory
sites that list known llms.txt files.
**VERDICT (fact vs. folklore):** The spec's own page contains **no statement from Google, OpenAI,
Anthropic, or Perplexity that any of their crawlers or models actually parse or prioritize llms.txt**.
Cross-referencing against the crawler docs fetched in §6: none of OpenAI's, Anthropic's, or
Perplexity's own bot-documentation pages mention llms.txt as an input their crawlers consume. **This
is folklore, not documented fact**: llms.txt is a community-proposed convention with some tooling
adoption, not a confirmed input to any major LLM provider's retrieval or training pipeline as of this
writing. Recommend the pack state this explicitly and flag any vendor claiming "llms.txt improves your
AI visibility" as unverified marketing.
**RELEVANCE:** seo-strategy — this is one of the highest-value folklore kills in the whole report,
directly requested by the brief.
**CREDIBILITY:** Primary source for the spec's own content and status; the adoption/consumption claim
is a documented **absence** of confirmation, not proof of non-use — mark as
**UNVERIFIED: whether any provider silently consumes llms.txt without documenting it** (what would
verify it: provider-side confirmation, which does not exist as of this fetch).

---

## 8. Bing / Copilot and IndexNow

**SOURCE:** Search Engine Journal, "Bing Adds GEO To Official Guidelines, Expands AI Abuse
Definitions," published **2026-02-27** — reporting on a rewrite of Bing's own webmaster guidelines
(this worker could not get readable body text directly from bing.com/webmasters/help via WebFetch;
relying on SEJ's dated secondary reporting of the primary-source change).
**WHAT IT TEACHES:** Bing's guideline rewrite (1) extends coverage to Copilot and "grounding"
results/citations as an additional eligibility outcome beyond classic web ranking; (2) spells out how
existing meta directives affect AI experiences specifically — e.g. **NOARCHIVE now documented as
preventing content from being used in Copilot responses and grounding results**, not just blocking the
cached-page link; (3) **formally names "Generative Engine Optimization (GEO)" as an official Bing
guideline concept** — Bing is the only major search platform found in this research to institutionally
adopt the GEO term, in contrast to Google's stance (§4) that no special AI-feature optimization is
needed; (4) softens the blanket stance against AI-generated content, now targeting specifically
"large-scale content generated without oversight, quality control, or editorial review" rather than
machine authorship per se — directionally consistent with Google's purpose-not-method framing in §2;
(5) adds sections on prompt injection and AI-manipulation abuse.
**RELEVANCE:** seo-strategy — worth flagging as a genuine platform divergence: Bing explicitly
endorses "GEO" as a discipline; Google explicitly says no special AI-feature optimization exists. The
pack should not flatten this into one universal "GEO" story.
**CREDIBILITY:** Secondary source (SEJ) reporting a primary-source policy change; **UNVERIFIED: exact
current text of bing.com/webmasters/help guidelines** — this worker's direct WebFetch of that URL
returned no body content (title/header only); what would verify it: a manual browser render or a
retry with a different fetch path.

**SOURCE:** https://www.indexnow.org/ (no page date shown).
**WHAT IT TEACHES:** IndexNow is an instant-URL-notification protocol. Documented participants:
Microsoft Bing, Naver, Seznam.cz, Yandex, Yep. **Google is not listed as a participant** on the
protocol's own site — Google has separately, publicly stated (outside this fetch, well-established
industry knowledge as of prior Google statements) that it does not consume IndexNow pings for regular
web-search indexing. Flag: this worker did not independently re-verify Google's non-participation with
a fresh primary-source fetch this session — **UNVERIFIED via direct 2026 Google statement**, though
the absence from IndexNow's own participant list is itself primary-source evidence of non-listing.
**RELEVANCE:** seo-strategy, operate-adjacent (indexing speed claims).
**CREDIBILITY:** Primary source (protocol's own site) for the participant list.

---

## FACT vs FOLKLORE table

| Claim | Verdict | Source URL | As-of date |
|---|---|---|---|
| The "helpful content system" is a separate, standalone algorithm distinct from core ranking | **FOLKLORE (superseded)** — it was merged into core ranking systems in March 2024 | https://developers.google.com/search/docs/appearance/ranking-systems-guide | Page updated 2025-12-10 UTC; merger dated 2024-03 |
| Google penalizes content simply for being AI-generated | **FOLKLORE** — policy targets purpose (rank manipulation, no user value), not authorship method; AI generation is one *named example* of a scaled-abuse *tactic*, not a blanket authorship ban | https://developers.google.com/search/docs/essentials/spam-policies | 2026-05-15 UTC |
| Getting a low score from a human Search Quality Rater will directly lower your page's ranking | **FOLKLORE** — raters do not score pages for live ranking; ratings are aggregated to judge whether ranking-system experiments/algorithms are working | https://developers.google.com/search/blog/2023/11/search-quality-rater-guidelines-update ; https://blog.google/products-and-platforms/products/search/overview-our-rater-guidelines-search/ | 2023-11 (blog); rater guidelines doc itself last substantively updated ~2025-09-11 per secondary sources (unverified directly) |
| E-E-A-T is a named, weighted ranking factor / "algorithm" | **FOLKLORE** — E-E-A-T is a quality-rater assessment framework used in aggregate evaluation, not a documented ranking signal with a measurable weight | https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t | 2022-12 |
| There are special on-page optimizations needed to appear in Google's AI Overviews/AI Mode | **FOLKLORE per Google's own documentation** — Google states no additional requirements/special optimizations exist beyond standard indexing eligibility | https://developers.google.com/search/docs/appearance/ai-features | Updated 2025-12-10 UTC |
| AI Overviews meaningfully reduce clicks to the open web | **DOCUMENTED (strong evidence)** — Pew's observed-behavior panel found 8% vs 15% click rate with/without an AI summary present, and only 1% of visits click within the summary itself | Pew Research Center study (fielded March 2025), reported via Search Engine Land 2025-07-22 | Study fielded 2025-03; reported 2025-07 |
| Specific numeric CTR-decline stats from Ahrefs/Semrush/Similarweb (34.5%, 93%, 83%) are as reliable as Google's own data | **CONTESTED** — these are vendor-panel/keyword-sample estimates with varying disclosed methodology; directionally consistent with Pew but not first-party Google data and not mutually reconciled (different definitions of "AI-triggered query") | ahrefs.com/blog/ai-overviews-reduce-clicks ; secondary aggregation of Semrush/Similarweb 2025-2026 figures | 2025–2026, vendor-dated |
| GEO (Generative Engine Optimization) has a peer-reviewed empirical basis | **DOCUMENTED, narrowly** — one KDD-2024-accepted paper (arXiv 2311.09735) exists, methodologically disclosed, authors unaffiliated with commercial GEO tools; but its "40% visibility boost" is a best-case, domain-varying result, not a general guarantee | arxiv.org/abs/2311.09735 ; dl.acm.org/doi/10.1145/3637528.3671900 | Published/accepted 2024 (v3 2024-06-28) |
| Most "GEO/AEO tactics" content circulating in 2026 is backed by the same rigor as the GEO paper | **FOLKLORE** — the bulk of GEO/AEO blog content is vendor marketing disconnected from the one peer-reviewed paper's actual method | (absence of citation chain observed across searched vendor content) | 2026 |
| llms.txt is consumed/prioritized by Google, OpenAI, Anthropic, or Perplexity | **FOLKLORE — no confirming statement found from any of the four** despite checking the spec's own site and each provider's crawler documentation | https://llmstxt.org/ ; developers.openai.com/api/docs/bots ; support.claude.com/en/articles/8896518 ; docs.perplexity.ai/guides/bots | Checked 2026-07-31 |
| Blocking an AI crawler's robots.txt entry reliably prevents your content from ever appearing in that provider's live chat answers | **CONTESTED/PARTIALLY FOLKLORE** — OpenAI's ChatGPT-User and Perplexity's Perplexity-User both explicitly document that robots.txt "may not apply" / "generally ignores" rules for live, user-triggered fetches (as opposed to the training/search-indexing bots, which do respect it) | developers.openai.com/api/docs/bots ; docs.perplexity.ai/guides/bots | Checked 2026-07-31 |
| Bing/Copilot treats "GEO" the same way Google treats AI-feature optimization (i.e., says it's unnecessary) | **FOLKLORE (platforms diverge)** — Bing has formally adopted "GEO" as a named guideline concept (Feb 2026 rewrite), the opposite of Google's stated "no special optimization needed" position | searchenginejournal.com (2026-02-27), Google AI-features doc (2025-12-10 UTC) | 2026-02 / 2025-12 |
| IndexNow speeds up Google indexing | **FOLKLORE** — Google is not a listed IndexNow participant; protocol is Bing/Naver/Seznam/Yandex/Yep only | https://www.indexnow.org/ | Checked 2026-07-31, no page date shown |

---

## What I did NOT cover and why

- Full verbatim body text of the March 2024 core-update announcement blog post and the Dec 2022
  E-E-A-T blog post — WebFetch returned only archive/navigation shells for both despite retries; relied
  on corroborating secondary sources and Google's other pages instead. Flagged inline as UNVERIFIED.
- The Search Quality Rater Guidelines PDF's own cover-page version date — binary was unreadable to this
  worker's tools; relied on converging secondary-source dating (~2025-09-11). A colleague or the
  synthesis stage should re-attempt with a proper PDF text extractor if the exact date matters.
- Bing's live webmaster-guidelines page body text — WebFetch returned only a header; relied on SEJ's
  dated secondary report of the same underlying change.
- Google's own first-party CTR-impact numbers for AI Overviews — do not appear to exist publicly;
  noted as a gap rather than filled with an estimate.
- Deep dive on IndexNow adoption mechanics / API contract — out of scope for a strategy-level pack;
  flagged existence and non-Google status only, per targets.
- ASO (App Store Optimization) primary sources — out of scope for this worker's brief (targets 1-7
  above); belongs to a different worker/job if not already covered elsewhere in channel D.
