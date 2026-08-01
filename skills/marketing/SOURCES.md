# Sources, licences, and what this skill claims for itself

This pack was built into a genre that is already large and already good in places. It says what it
took, from whom, under what licence, and what it actually adds — rather than implying more.

## 1. The wedge is adjudication and integration, not discovery

**Almost every individual fact in this pack exists somewhere else in the marketing-skill ecosystem.
What does not exist anywhere is a pack that grades those facts and connects them to each other.**

Four claims, each checked against the ecosystem rather than asserted:

- **Adjudication.** Across eleven cloned marketing packs (~900+ files), the Ehrenberg-Bass canon
  appears in exactly **one** file — a roleplay advisory-board persona dossier that racks Byron Sharp
  beside a direct-response marketer with no distinction drawn between them — and never connects to
  attribution mechanics. ESOV and the 95-5 heuristic appear in **zero**. Nothing in the genre
  distinguishes a decades-replicated law from a personality's heuristic. This pack makes
  evidence-grading an operating default ([marketing-science.md](references/marketing-science.md))
  and *connects* brand science to measurement.
- **Honest limits.** The field's most-quoted numbers are folklore: the 95-5 rule is a disclaimed
  arithmetic derivation, no ESOV coefficient exists at a primary source, and the widely-repeated B2B
  brand/activation split has no locatable primary document. Meanwhile the rigorous laws' domain of
  validity stops short of this pack's default reader — no open-access Ehrenberg-Bass dataset covers
  SaaS or subscription software, and a pre-launch n=1 founder is outside every dataset in both
  directions. Nobody else in the ecosystem says "you cannot measure this at your scale."
- **Checkable primary strips.** Deliverability engineering (RFC 8058, spam-rate ceilings, sender
  requirements — zero hits in the largest incumbent), the four consent regimes, store and
  marketplace listing rules, four SEO myths killed by Google's own dated documentation, and the
  llms.txt falsification by four non-citing evidence classes.
- **Seam discipline.** All eleven surveyed packs blend marketing with sales, growth, success, or
  frontend; one ships literal UI components. This pack is the only one in the genre inside a family
  with declared seams — argued to the reader in
  [handoff.md](references/handoff.md), not assumed.

## 2. The incumbent, named with respect

**[`coreyhaines31/marketingskills`](https://github.com/coreyhaines31/marketingskills)** — MIT
licensed, 42,544★ as of 2026-08-01 (GitHub API-verified), 49 skills, ~150 references, per-skill
evals. It is a serious, well-built pack and the structural peer of this one.

What we learned from it and credit accordingly: its **attribution reference is the benchmark this
pack set out to exceed** — it is the best treatment of the subject in the genre, and where ours goes
further is in three specific places (connecting the measurement question to brand-growth evidence,
gating each method by the reader's actual scale, and answering the n=1 case) rather than in general
quality. Its **ORB channel model** (owned / rented / borrowed) and five-phase rollout are cited in
[go-to-market-and-launch.md](references/go-to-market-and-launch.md) with credit.

Where it is used as a *specimen* rather than a source, that is stated as a property of the genre and
not of its authors: an unsourced llms.txt claim, and a spec version that moved after publication,
are cited in [ai-search.md](references/ai-search.md) as dated, checkable instances of the staleness
problem every pack in this genre (including this one) is exposed to. That is the argument for the
anti-staleness invariant, not a criticism of a maintainer.

## 3. Licences — five clauses

Every clause is here because a previous build in this family was caught by it.

**(1) Quotable within caps** — ≤2 quotations per source, under 25 words, attributed at the point of
use:

| Source | Licence | Used for |
|---|---|---|
| `coreyhaines31/marketingskills` | MIT | ORB model, five-phase rollout; attribution file as acknowledged benchmark |
| `google/meridian` | Apache-2.0 | MMM data-history floors, causal-not-predictive scope, calibration-prior mechanism, cited to file:line |
| `facebookexperimental/Robyn` | MIT | MMM data floors, adstock/saturation transform, lift-calibration penalty, cited to file:line |
| `plausible/analytics` | AGPLv3 | The 17-channel acquisition taxonomy, cited to its source file. Concepts and file citations only — no code vendoring |
| `orbit-love/orbit-model` | MIT | The gravity/reach/love community framework |
| `ai-robots-txt/ai.robots.txt` | MIT | The maintained AI-crawler user-agent list |
| `github/awesome-copilot` (`gtm-positioning-strategy`, Smit Patel) | MIT | Crawl-Walk-Run repositioning rollout; defensibility hierarchy |
| `aaron-marketing-skills` | Apache-2.0 | The citability-vs-surfacing distinction |
| IETF RFCs (8058, 9989/9990/9991) | IETF Trust, freely quotable | Sender-authentication and one-click-unsubscribe mechanics |
| EU/UK/US/Canada legal texts (ePrivacy Art. 13, PECR reg. 22, CAN-SPAM, CASL, 16 CFR §255.5, Part 465) | Public legal texts | The four consent regimes and disclosure requirements |
| schema.org vocabulary | Apache-2.0 | Structured-data type existence |

**(2) Facts-only, no verbatim** — sources with no licence, an ambiguous licence, or a `NOASSERTION`
row. Their facts are re-expressed in this pack's own words; nothing is lifted:
`ronakganatra/awesome-developer-marketing`, `fmerian/awesome-developer-first-channels`,
`resend/email-best-practices`, `maizzle`, `postalsys/mailauth`, `firecrawl/llmstxt-generator`,
`krish-adi/llmstxt-site`, and the remaining unlicensed curation repos surveyed during research.
**Vendor and platform documentation** (Google Search Central, Apple Developer, Google Play, Slack,
Product Hunt, Microsoft, Yahoo) is used for facts freely and quoted only within the caps above.

**(3) Thin licence on thick IP.** Several popular packs compile copyrighted books under the
compiler's own MIT licence. **A permissive licence on a repository does not relicense the book it
summarises.** Book frameworks in this pack — Dunford's positioning components, Ries & Trout on
category, Sharp's *How Brands Grow*, Binet & Field's *The Long and the Short of It* — are sourced to
the **original books and their authors**, never to a compiler repo, and no compiler's phrasing is
reused. X/Twitter posts are attributed by handle and date, quoted within caps, never reproduced as
threads.

**(4) Copyleft awareness.** GPL/AGPL projects (Plausible, listmonk, Dub, Mautic, ChannelAttribution)
are taught as concepts with file-level citations. No code is vendored — this pack ships no
production code in any case.

**(5) Liveness — archived is not recommendable.** Every source carries a last-verified date, and
sources that are dead, dormant, or slow are marked as such where they are cited:

| Source | Liveness status, as of |
|---|---|
| `facebookexperimental/Robyn` | Slow — a Jan 2026 push, but the last substantive commit predates it by ~7 months and the five most recent issues have no maintainer reply. Historically important, still technically valid, not actively evolving. 2026-08-01 |
| `orbit-love/orbit-model` | **Declared no longer developed.** Citable framework, not a maintained tool or a source of current benchmarks. 2026-03-07 |
| OpenView SaaS Benchmarks | **Wound down December 2023.** Its 2023 report page is still live and still cited as if current |
| `draftdev` startup-marketing checklist | 2021 — phase structure durable, channel specifics stale |
| Journalist-query services | Churn branding and ownership repeatedly. [partnerships-pr-and-affiliates.md](references/partnerships-pr-and-affiliates.md) requires a same-session liveness check before naming one at all |

## 4. Facts this pack teaches as its own judgment

These are not sourced claims. They are adjudications this pack makes, and a reader is entitled to
disagree with them:

- **The 95-5 rule is an idea, not a measurement.** Its arithmetic derivation and its author's own
  disclaimer travel with it everywhere in this pack, and the quarterly window is not optional —
  stripped of it, the claim becomes a different and false one.
- **No ESOV coefficient may be shipped, not even hedged.** The circulating figures conflict and no
  primary source resolves them. Naming a number in order to forbid it still ships the number.
- **60/40 is a B2C figure from a self-submitted awards corpus**, and the B2B split genuinely differs
  in direction but not by any confirmed ratio. Verify before quoting either side.
- **The Sharp/Thomaz dispute is presented, not settled.** Treating mental and physical availability
  as uncontested science is wrong; dismissing them as unevidenced folklore is equally wrong.
- **Positioning is craft.** Dunford's method has no empirical validation and she says so herself.
  This pack never dresses it as science.
- **Platform-reported conversions answer "what fired," never "what was incremental."** This is the
  load-bearing claim of the flagship, and everything in that reference is evidence for it.
- **A solo or small-spend builder can use none of the three rigorous measurement options** —
  platform attribution over-claims by construction, a valid lift test needs statistical power almost
  nobody has, and MMM is gated at years of weekly data by its own vendors' documentation. What
  remains is UTM discipline, self-reported attribution, geo-split lift where geography allows, and a
  decision rule committed to before the result exists. This is the same independence move
  `automation` reaches for when it cannot staff a second reviewer.
- **`llms.txt` is cheap, low-risk, and of unverified payoff** — falsified as an AI-visibility lever
  by four independent, non-citing evidence classes, not merely unproven. Blocking or allowing named
  crawlers by user-agent is the self-verifying alternative.
- **No disinterested third-party incrementality result was located anywhere.** Every credible
  "real experiment" report traced back to a measurement vendor citing its own book of business, or
  to a practitioner's one-off test they immediately caveated. That absence is taught explicitly
  rather than filled with a vendor number.
- **Zero-audience marketing has no evidence base**, in either direction. The thinness of
  [surface-zero-audience.md](references/surface-zero-audience.md) is its finding, not a gap left
  unfilled.

## 5. What this pack did not do

Disclosed so the next build knows where to start: a full audit of the incumbent's 49 skills was not
run; the Chinese-market channel taxonomy was not covered; paywalled primary sources (Ehrenberg 1959
and 1990, Sharp & Romaniuk 2007) were cited from secondary reporting and are marked as such;
partnerships and PR rest on web and curation research with no practitioner-social channel behind
them; and organic social was the thinnest research slice in the run — its reference says so in its
own text rather than padding around it.
