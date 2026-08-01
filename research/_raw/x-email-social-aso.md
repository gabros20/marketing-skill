# X/Twitter mining — Email/lifecycle, Organic social/DevRel/community, ASO, Zero-audience cold start

Worker: mkt-x sub-worker (topic partition A–D). Method: xrelay jargon-dense queries (`--product Top`,
various `min_faves` floors) batched per sub-area, ranked offline on likes/bookmarks/author, full text
pulled from the local JSON capture (no `thread` reads were needed — single, self-contained posts
dominated the keepable finds; no truncated t.co-link posts were cited without checking full text first).
As-of date for all "current" platform/policy claims below: **2026-07-31**, unless a post itself carries
an earlier date (noted per entry).

Handle-resolution note: of the seed handles supplied, `val_geisler`, `chasedimond` (resolved to an
unrelated account), `thomaspetitapp`/`ThomasPetit`/`thomas_petit`, `marc_louvion`/`marclouvion`, and
`dannypostmaa` (typo) did not resolve to the intended practitioner (empty/dead/wrong accounts) and were
dropped. `dannypostma` (no double-a) resolved correctly and was used. `chadswhite` (Chad S. White, GVP
CRM Strategy, email deliverability author) was substituted in for the email/deliverability partition —
verified via `xrelay user`.

---

## A. Email and lifecycle (deliverability, growth, sequences, consent law)

**SOURCE:** https://x.com/zenorocha/status/1744740648283201989 · @zenorocha (Zeno Rocha, founder/CEO of
Resend) · 2024-01-09
**SPECIMEN-or-EVIDENCE:** Evidence (technical explainer, RFC-cited, from an email-infra founder)
**WHAT IT TEACHES:** The `List-Unsubscribe` one-click mechanism traces to RFC 2369, refined by RFC 8058;
it lets users unsubscribe without leaving their inbox client (the mechanism Gmail/Yahoo's 2024 bulk-sender
rules made mandatory).
**VERBATIM-WORTH-KEEPING:** "The List-Unsubscribe header, rooted in RFC 2369 and refined by RFC 8058,
introduced a one-click mechanism."
**RELEVANCE TO PACK JOBS:** lifecycle-and-email (deliverability compliance mechanics)
**CREDIBILITY NOTE:** Rung: named-practitioner / vendor-engineering-blog boundary — author runs an email
API company, so technically reliable but has a commercial stake in email-sending being seen as tractable.
RFC 8058 is a primary source; confirm current enforcement specifics against Gmail/Yahoo's own postmaster
pages (as of 2024 requirement rollout — volatile, re-check dated).

**SOURCE:** https://x.com/infinitelogins/status/2014159121000648945 · @infinitelogins · 2026-01-22
**SPECIMEN-or-EVIDENCE:** Evidence (security research citation)
**WHAT IT TEACHES:** The same one-click List-Unsubscribe header that deliverability rules mandate has a
documented attack surface: stored XSS (Horde Webmail, CVE-2025-68673) and blind SSRF (Nextcloud Mail) when
webmail clients auto-render the unsubscribe action from an untrusted header.
**VERBATIM-WORTH-KEEPING:** (none taken — paraphrase only, quote cap reserved for higher-value sources)
**RELEVANCE TO PACK JOBS:** lifecycle-and-email — a security caveat worth surfacing if the pack ever
recommends implementers self-build one-click unsubscribe handling rather than using an ESP's tested one.
**CREDIBILITY NOTE:** Names a CVE and a named researcher (@_lauritz_ full write-up linked, not fetched).
UNVERIFIED: the CVE number itself — would need the NVD entry to confirm details before citing narrowly.

**SOURCE:** https://x.com/axtalks/status/2069133321565524196 · @axtalks (Atishay, "Top 1% on Smartlead,
$60M+ pipeline generated" per bio) · 2026-06-22
**SPECIMEN-or-EVIDENCE:** Evidence (numeric, practitioner-specific cold-email deliverability heuristics),
with a specimen edge (agency operator, self-promotional bio)
**WHAT IT TEACHES:** Cold-email domain reputation heuristics: Microsoft flags new sending domains for
their first 90 days; treat 6-week-old inboxes as the floor for serious campaigns; secure email gateways
(Barracuda/Mimecast/Proofpoint) are a separate deliverability problem from inbox placement at Gmail/
Outlook; the only trustworthy live metric is reply rate holding within 25% of baseline; **burned domains
cannot be re-warmed — replace them, don't try to rescue them.**
**VERBATIM-WORTH-KEEPING:** "You cannot warm up a domain back from a negative reputation."
**RELEVANCE TO PACK JOBS:** lifecycle-and-email (cold-email domain-reputation blast radius — matches the
charter's named sub-topic almost exactly)
**CREDIBILITY NOTE:** Named practitioner, numeric and falsifiable claims, but n=1/agency-anecdotal — no
published methodology. Treat as a strong specimen of practitioner folk-knowledge, not a benchmarked study.
Reply-rate-as-truth-metric claim is his heuristic, not an industry standard.

**SOURCE:** https://x.com/thefernandocz/status/2082541758387573109 · @thefernandocz (Fernando Cao) ·
2026-07-29
**SPECIMEN-or-EVIDENCE:** Specimen (vendor-adjacent — names @smartlead_ai and its "SmartSenders"
pre-warmed-mailbox product directly)
**WHAT IT TEACHES:** Describes the domain-warming-as-a-service pattern: buying inboxes with months of
pre-existing sending history and DNS already configured, capped at 15–20 sends/inbox/day, to skip the
standard 2-week warmup window before a cold-email campaign can launch.
**VERBATIM-WORTH-KEEPING:** (none — pure specimen, product pitch)
**RELEVANCE TO PACK JOBS:** lifecycle-and-email — names the *pattern* (bought sending history as
warm-up shortcut) worth flagging as a real market practice, with the caveat that it's inherently a
reputation-laundering technique platforms are motivated to detect and penalize.
**CREDIBILITY NOTE:** Agency/tool content-marketing rung. Treat numeric specifics (30-minute setup, 3
mailboxes/domain) as vendor marketing copy, not verified fact.

**SOURCE:** https://x.com/draprints/status/2078828205893714083 · @draprints · 2026-07-19
**SPECIMEN-or-EVIDENCE:** Evidence-leaning (structured consent-law comparison), but unverified against
primary legal texts
**WHAT IT TEACHES:** A per-jurisdiction cold-email consent comparison: Germany's UWG §7 requires double
opt-in even for B2B (fines to €300k); Canada's CASL requires express-or-implied consent (fines to $10M
CAD); UK PECR permits B2B outreach to corporate addresses with a working opt-out; US CAN-SPAM is the most
permissive (no prior consent required, opt-out + real address suffice); claims France is tightening
further in August 2026.
**VERBATIM-WORTH-KEEPING:** "US: can spam is the most permissive — no prior consent, just an opt out and a
real address."
**RELEVANCE TO PACK JOBS:** lifecycle-and-email — directly the charter's "consent law differences
(GDPR/PECR vs CAN-SPAM vs CASL)" sub-topic, plus a useful France-2026 pointer to verify.
**CREDIBILITY NOTE:** Small account (6.5k followers), cold-outreach-agency bio — course-seller/agency
rung, numbers are specific enough to be checkable but NOT independently confirmed here. UNVERIFIED: every
fine figure and the "France tightens further in August 2026" claim — verify against the actual UWG text,
CASL (fightspam.gc.ca), UK ICO's PECR guidance, and CAN-SPAM (FTC) before the pack states any of these as
fact. This is exactly the kind of volatile, jurisdiction-specific legal claim the charter flags for dating.

**SOURCE:** https://x.com/jimmykim/status/1812923221986963543 · @jimmykim (18+ years DTC/SaaS email
marketing, per bio) · 2024-07-15
**SPECIMEN-or-EVIDENCE:** Evidence (named practitioner, specific numeric benchmarks)
**WHAT IT TEACHES:** Six email metrics with concrete practitioner benchmarks: target CTR 2.5–5%; track
"Unsubscribe-to-Action" (unsubscribes as % of clickers) and keep it under 20%; keep raw unsubscribe rate
under 0.5%, aim for 0.2%; segmented campaigns saw 6x higher transaction rates vs. non-segmented in his
experience; open-rate pixel tracking is now unreliable post-Apple MPP — track trendlines by top-level
domain (Gmail vs. Verizon etc.) instead of an absolute number, since divergence between TLDs signals a
deliverability problem specific to one provider.
**VERBATIM-WORTH-KEEPING:** "Segmented emails deliver 6X higher transaction rates vs non-segmented ones."
**RELEVANCE TO PACK JOBS:** lifecycle-and-email (welcome/win-back benchmarks, and a segmentation
justification the pack can cite for its lifecycle job)
**CREDIBILITY NOTE:** Named practitioner rung, but self-reported, single-account benchmarks, not an
industry study — the "6x" figure is anecdotal to his book of clients, and open-rate-by-TLD as a
diagnostic is his own heuristic, not a vendor-documented technique.

**SOURCE:** https://x.com/wesbos/status/2037180828933906863 · @wesbos (verified, 437k followers, known
web-dev educator) · 2026-03-26
**SPECIMEN-or-EVIDENCE:** Evidence (real incident, named credible source)
**WHAT IT TEACHES:** A scammer spoofed the `meta.com` domain and the email still passed SPF/DKIM checks
— i.e., SPF/DKIM alignment failures (or a misconfigured/absent DMARC enforcement policy on the spoofed
domain) let a phishing email through looking authenticated.
**VERBATIM-WORTH-KEEPING:** (none — short enough to paraphrase fully)
**RELEVANCE TO PACK JOBS:** lifecycle-and-email — a concrete negative example for why DMARC `p=reject`
(not just SPF/DKIM presence) is the actual enforcement lever; useful contrast case next to the
JoshWComeau entry below.
**CREDIBILITY NOTE:** Named, well-known, credible technical source; single anecdote, not a systemic study
of spoofing rates.

**SOURCE:** https://x.com/JoshWComeau/status/1781015586899660959 · @JoshWComeau (developer/educator,
123k followers) · 2024-04-18
**SPECIMEN-or-EVIDENCE:** Evidence (named practitioner describing his own DMARC configuration)
**WHAT IT TEACHES:** 20+ spoofed emails/day were being sent impersonating his own domain before he set
DMARC to reject unauthorized senders — a concrete before/after case for why domain owners (not just bulk
senders) benefit from DMARC `p=reject`.
**VERBATIM-WORTH-KEEPING:** "I use DMARC to instruct email providers to reject any emails that aren't
from an authorized sender."
**RELEVANCE TO PACK JOBS:** lifecycle-and-email (DMARC p=reject rollout sub-topic, framed from the
domain-owner side rather than the bulk-sender side)
**CREDIBILITY NOTE:** Named, credible technical source; single-domain anecdote.

**SOURCE:** https://x.com/resend/status/1767580834704572793 · @resend (company account) · 2024-03-12
**SPECIMEN-or-EVIDENCE:** Specimen (vendor tip, but technically standard practice)
**WHAT IT TEACHES:** Sending from a subdomain rather than the root/apex domain isolates deliverability
risk — if the sending subdomain's reputation degrades, the primary/root domain (website, main email) is
unaffected.
**VERBATIM-WORTH-KEEPING:** (none — truncated thread-opener, full content behind more tweets not read)
**RELEVANCE TO PACK JOBS:** lifecycle-and-email (domain/subdomain separation sub-topic, named directly in
the charter)
**CREDIBILITY NOTE:** Vendor-engineering-blog rung — Resend is a credible email-infra vendor and this is
standard, uncontested practice (also matches Google/Yahoo bulk-sender guidance in spirit), but it's still
vendor content marketing. As-of 2024-03; subdomain-separation guidance is stable/non-volatile.

**SOURCE:** https://x.com/resend/status/2058910834202665309 · @resend · 2026-05-25
**SPECIMEN-or-EVIDENCE:** Specimen (vendor tip)
**WHAT IT TEACHES:** Putting OTP/verification codes in an email subject line can hurt deliverability
(mailbox providers' spam filters treat certain code patterns as phishing/abuse signals).
**RELEVANCE TO PACK JOBS:** lifecycle-and-email (transactional-email deliverability, adjacent to the
charter's core deliverability engineering sub-topic)
**CREDIBILITY NOTE:** Vendor content-marketing rung; plausible but not independently verified here.
UNVERIFIED: the underlying mechanism — would need a mailbox-provider filtering doc to confirm.

**SOURCE:** https://x.com/d__raptis/status/1753329986100994337 · @d__raptis · 2024-02-02
**SPECIMEN-or-EVIDENCE:** Specimen (relatable practitioner complaint, not a claim of fact)
**WHAT IT TEACHES:** Illustrates the real onboarding friction of DKIM/DMARC/SPF setup for non-specialists
— and that most teams outsource it entirely to their ESP (Sendgrid/Customer.io) rather than hand-rolling
DNS records.
**RELEVANCE TO PACK JOBS:** lifecycle-and-email — useful as a framing device for why the pack's
deliverability guidance should default to "let your ESP handle DNS auth, verify it's actually enabled"
rather than a from-scratch DNS tutorial.
**CREDIBILITY NOTE:** Anecdotal, single practitioner, but consistent with the wider deliverability
discourse in this corpus.

**SOURCE:** https://x.com/IndieHackers/status/1275826041475534848 · @IndieHackers (company/community
account) · 2020-06-24
**SPECIMEN-or-EVIDENCE:** Specimen (older community-account tip, generic)
**WHAT IT TEACHES:** Double opt-in as list-quality/engagement-rate practice — the mainstream framing (as
opposed to CASL/UWG's *legal* double-opt-in requirement covered above).
**RELEVANCE TO PACK JOBS:** lifecycle-and-email (double opt-in sub-topic) — worth pairing with the legal
framing from @draprints so the pack distinguishes "double opt-in as growth-hygiene best practice" from
"double opt-in as a legal requirement in specific jurisdictions."
**CREDIBILITY NOTE:** Community-account rung, no data cited, dated 2020 — treat framing as evergreen,
not the specific engagement-rate claim.

**SOURCE:** https://x.com/arvidkahl/status/2046922169947394308 · @arvidkahl (indie-hacker/author, 204.8k
followers) · 2026-04-22
**SPECIMEN-or-EVIDENCE:** Evidence (a named practitioner's stated reaction, useful as a trend signal)
**WHAT IT TEACHES:** A working hypothesis worth flagging for lifecycle/cold-email strategy: knowing any
inbound email might be AI-drafted appears to be eroding recipients' trust in *all* email, including
legitimate outreach — a qualitative signal, not a measured one.
**VERBATIM-WORTH-KEEPING:** "Knowing that any email I get might be researched, drafted, and sent by an AI
seems to diminish the value I assign to _all_ the emails I am getting."
**RELEVANCE TO PACK JOBS:** lifecycle-and-email / audience-and-segmentation (a forward-looking risk to
cold-email and even legitimate lifecycle email as AI-drafting becomes ambient)
**CREDIBILITY NOTE:** Single practitioner's personal reaction — an n=1 sentiment, not a study. Flag as a
directional signal worth revisiting, not a benchmarked claim.

**SOURCE:** https://x.com/levelsio/status/2053466448169685110 · @levelsio (indie-hacker, 925k followers)
· 2026-05-10
**SPECIMEN-or-EVIDENCE:** Specimen (n=1 pricing comparison, self-disclosed as unaffiliated)
**WHAT IT TEACHES:** A comparative sending-cost snapshot at 1M emails/month: Postmark $1,206/mo, Resend
$650/mo, SendGrid $600/mo, Cloudflare Email Sending $354/mo (as of 2026-05-10 — pricing is volatile,
re-verify against each vendor's current pricing page before citing).
**RELEVANCE TO PACK JOBS:** lifecycle-and-email (cost dimension when choosing an ESP — outside the
charter's named sub-topics but useful color for the audience-and-segmentation / GTM cost-modeling jobs)
**CREDIBILITY NOTE:** Named indie-hacker, explicitly discloses no vendor affiliation; still a single
point-in-time price check, not a sourced comparison chart. UNVERIFIED: exact current prices — confirm on
Cloudflare/Resend/SendGrid/Postmark's own pricing pages, dated 2026-05-10 in this post.

---

## B. Organic social, community, and DevRel

**Signal quality note:** this was the thinnest of the four partitions. Open jargon queries here ("organic
reach brand account dead", "founder led distribution", "Discord vs Slack community retention", "DevRel
measured impact") returned mostly unrelated AI/dev-tooling promotional noise (~85%+), confirming the
charter's channel hazard — DevRel/community vocabulary overlaps heavily with the AI-tooling hype cycle
on X right now, which drowns it out even with high like-floors. `from:` sweeps on seed handles fared
better but two of the four community/DevRel seeds (davidspinks) have visibly pivoted away from the topic
entirely in their current posting.

**SOURCE:** https://x.com/simonw/status/1819047183217270846 · @simonw (Simon Willison, quoted into
@b0rk's feed) · 2024-08-01
**SPECIMEN-or-EVIDENCE:** Evidence (named, widely-respected technical source, stated as a general
principle)
**WHAT IT TEACHES:** Publishing original long-form content on an owned domain is now rare enough among
developers that doing it consistently is itself a durable distribution advantage — "blog like it's 2005."
**VERBATIM-WORTH-KEEPING:** "You can have an outsized impact on the world by being one of the few people
who DO publish fresh information online on your own web pages."
**RELEVANCE TO PACK JOBS:** organic-social-and-community, content-strategy-and-briefs — supports "docs/
tutorials as a channel" and owned-vs-rented framing in the charter's B sub-topic.
**CREDIBILITY NOTE:** Named-practitioner rung, high credibility (Django co-creator, prolific
independent technical writer) — an opinion/heuristic, not a measured claim.

**SOURCE:** https://x.com/b0rk/status/1797605874581532828 and https://x.com/b0rk/status/1823445465565667715
· @b0rk (Julia Evans, "zines" creator, 192.5k followers) · 2024-06-03 / 2024-08-13
**SPECIMEN-or-EVIDENCE:** Evidence (a real, running business built on developer-education content as the
product itself, not a marketing channel for something else)
**WHAT IT TEACHES:** A working model for developer-audience monetization: technical "zines" ($12,
one-time) plus posters ($20), sold directly with no VC/ads, growth driven by free companion comics posted
publicly (git worktree, submodules, rebase explainers) that double as the marketing for the paid product.
Growth signal disclosed directly: 1,000+ zine sales at the point of that post.
**VERBATIM-WORTH-KEEPING:** "I know $12 USD is a lot of money for some people, so to celebrate 1000+
sales, I'm giving away 1000 PDF copies."
**RELEVANCE TO PACK JOBS:** organic-social-and-community (docs/tutorials/open content as the channel,
named directly in the charter's B sub-topic) — also a strong zero-audience/D crossover case (an
individual builder growing a paid product with zero ad spend via free technical content).
**CREDIBILITY NOTE:** Highest-credibility rung available on X for this claim — a named, long-track-record
practitioner disclosing her own real sales numbers, not a course-seller pitch.

**SOURCE:** https://x.com/chrisalbon/status/2082280496294490124 (quoted into @swyx's feed) · @chrisalbon
(ML/DS educator/influencer) · 2026-07-28
**SPECIMEN-or-EVIDENCE:** Evidence (named source, first-person observed comparison)
**WHAT IT TEACHES:** A first-person, longitudinal (15-year) observation that among two accounts with
similar follower counts, the one that stayed argumentative/reactive had a "middling career" while the one
that "mostly stayed positive and built" had what he calls a "monster career" — a personal-brand-longevity
claim relevant to founder-led distribution strategy.
**VERBATIM-WORTH-KEEPING:** "One HAD to tweet the zinger... The other mostly stayed positive and built."
**RELEVANCE TO PACK JOBS:** organic-social-and-community (founder/personal-account reach sub-topic)
**CREDIBILITY NOTE:** n=2 anecdote from a named, credible-in-his-field source — a personal observation
presented as a life lesson, not a study. Treat as directional, not statistical.

**SOURCE:** https://x.com/DavidSpinks/status/1899803565046059147 · @DavidSpinks (community-building
author of "The Business of Belonging," 29.3k followers) · 2025-03-12
**SPECIMEN-or-EVIDENCE:** Evidence (citing an external claim he found credible, community-design theory)
**WHAT IT TEACHES:** A community-design heuristic: the ideal size for a genuine conversation is four
people; at five or more, the dynamic splits into subgroups or turns into a speaker/audience structure —
relevant to designing Discord/Slack channel structure for actual peer interaction vs. broadcast.
**VERBATIM-WORTH-KEEPING:** "At five or more, conversations splinter or turn into an audience."
**RELEVANCE TO PACK JOBS:** organic-social-and-community (owned community design, Discord/Slack
structure sub-topic)
**CREDIBILITY NOTE:** @DavidSpinks is a genuinely credentialed community-building authority (founded
CMX), but this specific post is a retweet-endorsement of someone else's claim, not his own research —
UNVERIFIED: the original source of the "ideal group size is four" claim was not traced.

**SOURCE:** https://x.com/DavidSpinks/status/1897294067651973175 · @DavidSpinks · 2025-03-05
**SPECIMEN-or-EVIDENCE:** Evidence (a credentialed practitioner's own platform-decay observation)
**WHAT IT TEACHES:** A named community-industry veteran describes X's organic conversation quality and
his own reach as having collapsed ("5 likes is viral for me now") — directly on the charter's "organic
reach brand/personal account dead" sub-topic, though it is anecdotal to one account's experience.
**VERBATIM-WORTH-KEEPING:** "Got 5 likes on a post. That's pretty much viral for me on X at this point."
**RELEVANCE TO PACK JOBS:** organic-social-and-community (organic reach decay sub-topic)
**CREDIBILITY NOTE:** Named credentialed source, single-account anecdote — useful as a qualitative
data point, not a platform-wide reach statistic. GAP: no aggregate/platform-level organic-reach-decline
data was found in this sweep; would need a primary source (e.g., a social-analytics vendor's benchmark
report) to substantiate at scale.

**SOURCE:** https://x.com/Prathkum/status/1488037021902082049 · @Prathkum (448.7k followers) · 2022-01-31
**SPECIMEN-or-EVIDENCE:** Evidence (a clean articulation of a real practitioner distinction)
**WHAT IT TEACHES:** DevRel and developer marketing are explicitly framed as different disciplines: DevRel
is relationship/content/enablement-first, not sales-first, while developer marketing is the demand-facing
counterpart — directly useful for the pack's "why developers distrust marketing" framing.
**VERBATIM-WORTH-KEEPING:** "DevRel is not about selling products to developers... it's all about
building a good relationship with developers."
**RELEVANCE TO PACK JOBS:** organic-social-and-community (DevRel vs. developer-marketing distinction,
named directly in the charter's B sub-topic)
**CREDIBILITY NOTE:** Named practitioner, large following, but this is an assertion/framing, not backed
by data in the post itself — treat as an industry-common framing, not a unique or verified finding.

**GAP (sub-area B):** Coverage of "short-video repurposing workflow," "owned vs. rented community"
(beyond the one David Spinks/group-size tangent), and any DevRel-impact-measurement post with real
numbers was thin-to-absent — jargon queries here collided hardest with unrelated AI-tooling promotional
volume. Closing this would need: `from:` sweeps on dedicated DevRel/community handles not in the original
seed list (e.g., a Discord-vs-Slack community-ops specialist, a short-form-video repurposing agency
operator), and a retry of "DevRel measured impact metrics" / "developers distrust marketing" at a lower
`min_faves` floor combined with `-filter:replies` to cut promotional retweets.

---

## C. ASO (App Store / Google Play optimization)

**Signal quality note:** the richest of the four partitions once ranked past the top ~15 AI-tooling-noise
results — a cluster of named indie ASO practitioners posting real, numbered experiments surfaced well.

**SOURCE:** https://x.com/filippkowalski/status/1966107197747925246 · @filippkowalski · 2025-09-11
**SPECIMEN-or-EVIDENCE:** Evidence (synthesized from a multi-practitioner Slack discussion, names
co-authors, cites a specific named case — Cal AI / @zach_yadegari)
**WHAT IT TEACHES:** Screenshot A/B testing (Apple's Product Page Optimization) behaves very differently
by app size: small apps (<10k downloads/mo) see real conversion swings from screenshot changes; large
apps with heavy brand-search or paid-UA traffic (100k+ downloads/mo) see almost none, because those users
already decided to install before reaching the store page. PPO data is unstable/misleading for its first
2–3 days (Apple's adaptive algorithm needs to calibrate) — an A/A/B test first is recommended to validate
the testing environment. Iteration (small copy/color tweaks) reliably outperforms wholesale redesigns.
Recommended test duration: 3–7 weeks before calling a winner.
**VERBATIM-WORTH-KEEPING:** "It's harder to move the needle the bigger an app is... the more redownloads
or branded search downloads an app has."
**RELEVANCE TO PACK JOBS:** app-store-optimization (screenshots/preview-video as conversion assets,
"custom product pages / store-listing experiments" — matches the charter's C sub-topic precisely)
**CREDIBILITY NOTE:** Highest-credibility ASO find in this sweep — a synthesis of a real practitioner
Slack discussion (named co-authors: @designerants, @MarkLIVE, @phlpcrlsn, @alpennec, @Thomasbcn) rather
than a single anecdote, though it is still self-reported/anecdotal in aggregate, not a controlled study.
Cites Cal AI's PPO experience (a well-known, high-download app) as a concrete named case.

**SOURCE:** https://x.com/kedytcom/status/2081877300384276747 · @kedytcom · 2026-07-27
**SPECIMEN-or-EVIDENCE:** Evidence (a named practitioner's disclosed, in-progress live experiment with
country-level numbers)
**WHAT IT TEACHES:** ASO + localization (non-branded keywords, localized metadata, no repeated tokens,
country-specific search behavior) produced 399 total ranked keywords across 8 countries within days of
launch, with the ranking distribution skewed toward non-US markets (US 93, Australia 62, Portugal 25,
Greece 21) — evidence that the App Store is "many small search markets," not one global one.
**VERBATIM-WORTH-KEEPING:** "The App Store is many small search markets."
**RELEVANCE TO PACK JOBS:** app-store-optimization (custom product pages / localization experiments,
keyword-field mechanics)
**CREDIBILITY NOTE:** Named practitioner disclosing real, checkable numbers from a single (his own) app
— strong specimen of a live n=1 experiment, not an industry benchmark. Same author (@kedytcom) posted a
companion thread the same week describing sequencing Apple Search Ads only after ASO showed organic
signal in specific markets — a coherent, repeatable playbook rather than an isolated claim.

**SOURCE:** https://x.com/Tobby_scraper/status/2046525599674691723 · @Tobby_scraper · 2026-04-21
**SPECIMEN-or-EVIDENCE:** Specimen (generic tips thread, unattributed to any disclosed results)
**WHAT IT TEACHES:** Apple App Store keyword-field rules: put your primary keyword in the app **name**
(not just the subtitle/keyword field, since Apple indexes the name most heavily); use all 100 characters
of the keyword field; never repeat a keyword already present in the title; refresh keywords roughly every
30 days based on what's ranking.
**VERBATIM-WORTH-KEEPING:** "Use all 100 characters of your keyword field... Never repeat a keyword
that's already in your title."
**RELEVANCE TO PACK JOBS:** app-store-optimization (charter's "Apple App Store keyword field and naming
rules" sub-topic, close to verbatim)
**CREDIBILITY NOTE:** Course-seller/agency-tips rung — no disclosed results or app named. Cross-check
against Apple's own App Store Connect keyword-field documentation (primary source) before stating the
100-character and no-repeat rules as current fact — these are historically accurate Apple mechanics but
should be dated/re-verified, since Apple's algorithm changed how it reads the field (see next entry).

**SOURCE:** https://x.com/kedytcom/status/2068634197124685880 · @kedytcom · 2026-06-21
**SPECIMEN-or-EVIDENCE:** Evidence (a claimed algorithm-behavior change, dated and specific)
**WHAT IT TEACHES:** Claims that as of June 2026, Apple's App Store search stopped reading the keyword
field as a literal word list and began interpreting it more like natural-language intent/topic clustering
— meaning "keyword soup" (100 characters of disconnected terms) is now a worse strategy than coherent
topic clusters.
**VERBATIM-WORTH-KEEPING:** (none — reserved quote budget for the higher-confidence entries above)
**RELEVANCE TO PACK JOBS:** app-store-optimization — directly contradicts/updates the older "stuff all
100 characters" folk-wisdom in the @Tobby_scraper entry above; the pack should present ASO keyword-field
guidance as time-sensitive rather than a fixed rule.
**CREDIBILITY NOTE:** Single named practitioner's claim about a private-platform algorithm change, dated
2026-06 in the post. UNVERIFIED: no Apple primary source (App Store Connect / developer docs) confirms
this specific behavior change — this is exactly the volatile-platform-behavior category the charter
flags; do not state as fact without checking Apple's current ASO guidance as of the pack's build date.

**SOURCE:** https://x.com/xburak/status/2059266692874641583 · @xburak · 2026-05-26
**SPECIMEN-or-EVIDENCE:** Specimen (generic tips, unattributed to disclosed results)
**WHAT IT TEACHES:** Tactical keyword-field hygiene: comma-separate single keywords rather than repeating
full phrases (Apple recombines individual terms automatically — "photo,editor,avatar,maker,headshot" beats
"ai photo editor, ai avatar maker"); drop spaces after commas to save character budget; singular forms
suffice since Apple already matches plurals; skip filler words ("app," "the," "best") that carry near-zero
signal; order keywords by priority since field-order still affects weighting.
**RELEVANCE TO PACK JOBS:** app-store-optimization (keyword field mechanics, naming rules)
**CREDIBILITY NOTE:** Course-seller/agency-tips rung, no disclosed app or results. Cross-check against
Apple's own metadata guidelines before stating field-parsing mechanics (comma-splitting, plural-matching)
as current fact.

**SOURCE:** https://x.com/expo/status/2056732974050365774 · @expo (Expo/React Native tooling company
account) · 2026-05-19
**SPECIMEN-or-EVIDENCE:** Specimen citing an unsourced statistic (vendor content marketing)
**WHAT IT TEACHES:** Claims 65–70% of app downloads still come from App Store search rather than ads,
social, or influencers — used to justify ASO investment.
**VERBATIM-WORTH-KEEPING:** "65 to 70% of app downloads still come from App Store search. Not ads. Not
social. Not influencers. Search."
**RELEVANCE TO PACK JOBS:** app-store-optimization (motivates the whole ASO job/sub-topic)
**CREDIBILITY NOTE:** UNVERIFIED — no source cited in the post for the 65–70% figure. This is exactly a
"volatile fact, gets a date" case per the charter: as-of 2026-05-19 per this post, but the actual
percentage (commonly attributed historically to Apple's own investor/developer talks or Sensor
Tower/data.ai research) needs a primary citation before the pack states it as fact. Also note commercial
motive: Expo is promoting a partner's ("@imeronn") open-source ASO-skills repo in the same post.

**SOURCE:** https://x.com/illyism/status/2082826937802658222 · @illyism · 2026-07-30
**SPECIMEN-or-EVIDENCE:** Evidence (a specific, checkable SEO/ASO-crossover technique observed directly)
**WHAT IT TEACHES:** A competitor was found setting a Google Play listing's "App support URL" field to
their own marketing website — since the Play Store listing itself is a high-authority Google-domain page,
this functions as a free, high-authority backlink to the linked site, a hidden SEO benefit of an ASO
listing field.
**VERBATIM-WORTH-KEEPING:** (none — short enough to paraphrase fully)
**RELEVANCE TO PACK JOBS:** app-store-optimization (Google Play indexed-description/listing-field
sub-topic) and its SEO crossover — worth flagging to a sibling seo-strategy job as a shared surface.
**CREDIBILITY NOTE:** Named practitioner describing a first-hand audit observation — plausible and
mechanically simple to verify (any Play Store listing's support-URL field is publicly visible), but this
worker did not independently confirm a live example.

**SOURCE:** https://x.com/thekuchh/status/2077642134555914582 · @thekuchh · 2026-07-16
**SPECIMEN-or-EVIDENCE:** Specimen (secondhand retelling of someone else's numbers, not the poster's own)
**WHAT IT TEACHES:** Describes a portfolio-app builder earning $2,400/mo from an app built in 3 days with
zero paid traffic, via ASO targeting long-tail niche keywords ("bible verse," "prayer"), deliberately
skipping the competitive US market in favor of Brazil (same keyword search volume, lower competition),
then localizing title/subtitle/screenshots per country before layering Apple Search Ads on top of an
already-ranking organic base using Apple's initial $100 ad credit.
**RELEVANCE TO PACK JOBS:** app-store-optimization (localization as an ASO lever, ASA-after-organic
sequencing) and zero-audience cold start (crosses into sub-area D — a $0-marketing-spend narrative)
**CREDIBILITY NOTE:** Course-seller/build-in-public-thread rung — numbers are secondhand ("he" ranks for
X, "he" built Y), not independently verifiable, and the framing (a 9-step no-code build thread) signals
lead-gen/audience-building intent for the poster's own content, not disinterested reporting.

**SOURCE:** https://x.com/zzwitz/status/2052555574664167761 · @zzwitz · 2026-05-08
**SPECIMEN-or-EVIDENCE:** Specimen (generic advice, no disclosed results)
**WHAT IT TEACHES:** Frames app-store conversion assets (icon, screenshots, paywall, onboarding, price,
trial length) as a bundle that should be continuously tested post-launch, not fixed at launch and
forgotten — a stagnation-diagnosis framing for ASO/conversion work.
**RELEVANCE TO PACK JOBS:** app-store-optimization (screenshots as conversion assets, ratings/conversion
velocity)
**CREDIBILITY NOTE:** Generic framing rung, no numbers or named case — useful as a checklist prompt, not
as evidence.

**GAP (sub-area C):** "Ratings velocity" specifically (the charter-named sub-topic on how review-count
growth rate affects ranking/trust) did not surface a strong dedicated find in this sweep — the closest
adjacent material was the PPO/screenshot-testing thread above. Custom-product-pages *results* (vs. the
mechanism) were also thin. Closing this would need a retry of "app store ratings velocity algorithm" at
a lower `min_faves` floor plus `from:` sweeps on dedicated ASO-agency accounts (e.g., App Radar's or
SplitMetrics' practitioner-facing accounts) rather than open search.

---

## D. Zero-audience cold start (first-100-users, build-in-public, waitlists)

**GAP (sub-area D) — most significant coverage shortfall of the run:** the dedicated `D_zeroaudience.txt`
jargon-query batch (10 queries: `"first 100 users" how`, `"build in public" audience results`, `waitlist
conversion rate actual numbers`, `launching with no followers`, `"do things that don't scale" startup`,
`zero to first customer indie hacker`, `cold start marketing no audience`, `manually recruited first
users`, `"build in public" backfire`, `first paying customer story indie maker`) was still running when a
sub-orchestrator instruction (mkt-x) required this file to be written immediately rather than wait on the
in-flight batch — the batch was abandoned mid-run per that instruction rather than left to complete, and
none of its results are reflected below. No `from:` sweeps on the indie-hacker seed handles
(levelsio, tdinh_me, yongfook, arvidkahl, dannypostma) were run either — only the two entries below,
found incidentally while mining the A/C corpora for overlapping content, are available.
**What would close this gap:** re-run `xrelay batch --file D_zeroaudience.txt --out D_zero_corpus.json
--delay 3000 --product Top --limit 12`, then `xrelay user-posts <handle> --limit 25` for each of the five
named indie-hacker seeds (levelsio, tdinh_me, yongfook, arvidkahl, dannypostma), ranking offline on likes/
bookmarks exactly as A/B/C were handled above. Given the charter's own warning that this genre is "the
most engagement-inflated material on the platform," expect to need `xrelay thread <url>` reads on several
finalists specifically to check whether a high-like "first 100 users" thread cites real numbers or is pure
hook-and-no-substance — the two entries below illustrate exactly that ambiguity.

**SOURCE:** https://x.com/jurree/status/2082059924721619091 · @jurree (2,751 followers) · 2026-07-28
**SPECIMEN-or-EVIDENCE:** Specimen (headline claim only — the substantiating detail is behind an
unread external article link, not in the post itself)
**WHAT IT TEACHES:** Claims ~32,000 new app users acquired organically in one week with $0 spent; the
breakdown ("all the sauce") is behind a t.co link to an external article that was not fetched in this
pass.
**RELEVANCE TO PACK JOBS:** go-to-market-and-launch, zero-audience overlay
**CREDIBILITY NOTE:** UNVERIFIED — this is precisely the hazard the charter warns about: a compelling
zero-spend growth headline with no verification of the underlying mechanism, posted by a low-follower
account (2.7k), which itself is mildly inconsistent with a claim of 32k organic users in a week (no
visible amplification path). Do not cite the number without reading the linked article first.

**SOURCE:** https://x.com/GeorgeLampro20/status/2081979523873038368 · @GeorgeLampro20 (10.2k followers) ·
2026-07-28
**SPECIMEN-or-EVIDENCE:** Specimen (lead-magnet thread — "Growth Playbook" behind a link, framed to build
the poster's own audience)
**WHAT IT TEACHES:** Nothing substantive is verifiable from the post itself; it signals that "$0 to $50k/
month app growth compilation" is a live, currently-used hook format on X for this genre.
**RELEVANCE TO PACK JOBS:** none directly usable — recorded only to illustrate genre density for the
sub-orchestrator's synthesis pass.
**CREDIBILITY NOTE:** Course-seller/lead-magnet rung — the tightest-possible read of the charter's warning
that indie-hacker growth threads are specimens of the genre, not evidence, by default.

---

## Summary table (sources used above)

| Handle | Verified | Followers | Role in this file |
|---|---|---|---|
| zenorocha | yes | 62.6k | Resend founder — email infra, evidence |
| infinitelogins | yes | 7.5k | security research citation |
| axtalks | yes | 2.7k | cold-email agency operator |
| thefernandocz | yes | 102k | warmup-vendor specimen |
| draprints | yes | 6.5k | cold-outreach agency, consent-law claims (unverified) |
| jimmykim | yes | 16.8k | DTC email marketer, numeric benchmarks |
| wesbos | yes | 437k | web-dev educator, SPF/DKIM incident |
| JoshWComeau | no | 123k | developer/educator, DMARC case |
| resend | no (co. acct) | 32.8k | vendor, subdomain/OTP tips |
| d__raptis | yes | 31.6k | practitioner, DNS-auth friction |
| IndieHackers | yes | 149.7k | community account, double opt-in |
| arvidkahl | yes | 204.9k | indie-hacker, AI-email-trust signal |
| levelsio | yes | 925.7k | indie-hacker, ESP price snapshot |
| simonw | (quoted) | — | credible dev, "blog like it's 2005" |
| b0rk | yes | 192.5k | Julia Evans, zine/content-as-product |
| chrisalbon | (quoted) | — | ML educator, personal-brand anecdote |
| DavidSpinks | no | 29.3k | community-building author, pivoted account |
| Prathkum | yes | 448.7k | DevRel vs. dev-marketing framing |
| filippkowalski | yes | 14k | ASO practitioner-discussion synthesis |
| kedytcom | yes | 2.8k | ASO/localization live n=1 experiments |
| Tobby_scraper | yes | 4.5k | ASO keyword-field tips |
| xburak | yes | 8.3k | ASO keyword-field tips |
| expo | yes | 87.9k | tooling vendor, unsourced ASO stat |
| illyism | yes | 27.3k | ASO/SEO crossover technique |
| thekuchh | yes | 49.7k | ASO niche-app secondhand story |
| zzwitz | yes | 2.2k | ASO conversion-testing framing |
| jurree | yes | 2.8k | zero-audience headline, unverified |
| GeorgeLampro20 | yes | 10.2k | zero-audience lead-magnet specimen |

Handles verified but ultimately unused for lack of on-topic original content in this pass:
gabrielmachuret (ASO trainer — feed dominated by retweets, not original ASO content), swyx and cassidoo
(DevRel-adjacent but current feeds are AI-tooling/product-launch content, not DevRel-strategy content).
