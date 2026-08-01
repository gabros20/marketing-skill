# Channel D worker report — Email deliverability engineering, marketing law, app-store guidelines

Scope: charter §3a/3b/3c. WebSearch calls used: 11 of 20 allotted. WebFetch used extensively on
constructed primary URLs per charter guidance (crwl not used, per instruction — reported broken).

---

## NUMBERS TABLE (pedantic — every hard number found)

| # | Fact | Value | Primary URL | As-of date | Confidence |
|---|------|-------|-------------|------------|------------|
| 1 | Gmail bulk-sender threshold | 5,000+ msgs/day to Gmail addresses | https://support.google.com/a/answer/81126 | colleague-verified, re-confirmed via https://support.google.com/a/answer/14229414 | HIGH (primary, fetched) |
| 2 | Gmail recommended unsubscribe-honor window | "within 48 hours" (stated as recommendation, not hard SLA) | https://support.google.com/a/answer/14229414 | fetched 2026-08 | HIGH (primary, fetched, exact quote below) |
| 3 | Gmail spam-rate mitigation cutoff | senders >0.3% user-reported spam rate become ineligible for mitigation, beginning June 2024 | https://support.google.com/a/answer/14229414 | fetched 2026-08 | HIGH (primary, fetched) |
| 4 | Gmail enforcement escalation | Nov 2025: moved to hard enforcement — non-compliant mail gets SMTP-level rejections (temporary/permanent) | https://support.google.com/a/answer/14229414 | fetched 2026-08 | HIGH (primary, fetched) |
| 5 | Gmail Postmaster Tools v2 | new binary "Compliance status" dashboard replacing High/Med/Low reputation | https://support.google.com/a/answer/14229414 | fetched 2026-08 | HIGH (primary, fetched) |
| 6 | Yahoo/AOL spam-rate threshold | "below 0.3%" | https://senders.yahooinc.com/best-practices/ | fetched 2026-08 | HIGH (primary, fetched) |
| 7 | Yahoo/AOL DMARC floor | p=none minimum, must pass DMARC | https://senders.yahooinc.com/best-practices/ | fetched 2026-08 | HIGH (primary, fetched) |
| 8 | Yahoo/AOL enforcement start | Feb 2024, gradual rollout through first half of year | https://senders.yahooinc.com/best-practices/ | fetched 2026-08 | HIGH (primary, fetched) |
| 9 | Yahoo/AOL bulk threshold (msgs/day) | NOT stated on the best-practices page itself | — | — | UNVERIFIED: page gives no numeric daily threshold; secondary sources assert "5,000/day" by analogy to Gmail but I could not confirm this on a Yahoo primary page |
| 10 | Microsoft Outlook.com high-volume threshold | 5,000+ msgs/day | techcommunity.microsoft.com blog (Defender for Office 365 blog, "Strengthening Email Ecosystem…") | reported 2025 | MEDIUM — WebFetch on the Microsoft URL returned only the page title 3× (JS-rendered / bot-blocked); figure corroborated identically across 5+ independent vendor sources (Braze, Mailgun, dmarcian, moosend, redsift) |
| 11 | Microsoft enforcement date | May 5, 2025 — non-compliant high-volume mail routed to Junk first; full rejection "in the future, date TBA" | same as above | reported 2025 | MEDIUM (same caveat — primary fetch blocked, strong secondary convergence) |
| 12 | DKIM minimum key length | RSA ≥1024 bits for long-lived keys (MUST) | https://www.rfc-editor.org/rfc/rfc6376 | RFC pub. Sept 2011 | HIGH (primary, fetched) |
| 13 | RFC 8058 (one-click unsubscribe) | Standards Track, pub. Jan 2017; requires `List-Unsubscribe` + `List-Unsubscribe-Post: List-Unsubscribe=One-Click` | https://www.rfc-editor.org/rfc/rfc8058 | Jan 2017 | HIGH (primary, fetched) |
| 14 | RFC 7208 (SPF) | Standards Track, pub. April 2014, obsoletes RFC 4408 | https://www.rfc-editor.org/rfc/rfc7208 | Apr 2014 | HIGH (primary, fetched) |
| 15 | RFC 6376 (DKIM) | Internet Standard (STD 76), pub. Sept 2011 | https://www.rfc-editor.org/rfc/rfc6376 | Sept 2011 | HIGH (primary, fetched) |
| 16 | RFC 7489 (DMARC, original) | Informational, pub. March 2015 — **now obsolete** | https://www.rfc-editor.org/rfc/rfc7489 | superseded, see #17 | HIGH (primary, fetched) |
| 17 | **DMARCbis — DMARC has been superseded** | RFC 7489 obsoleted by a 3-way split: **RFC 9989** (core DMARC mechanism), **RFC 9990** (aggregate reporting), **RFC 9991** (failure reporting) — all Proposed Standard, pub. **May 2026** | https://www.rfc-editor.org/rfc/rfc9989 , /rfc9990 , /rfc9991 | May 2026 | HIGH (primary, fetched all three) |
| 18 | RFC 2142 (role addresses) | Proposed Standard, pub. May 1997, not obsoleted; mandates abuse@, postmaster@, security@, etc. | https://www.rfc-editor.org/rfc/rfc2142 | May 1997 | HIGH (primary, fetched) |
| 19 | GDPR Art. 4(11) consent definition | "freely given, specific, informed and unambiguous indication…by a statement or by a clear affirmative action" | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679 | Reg. 2016/679, in force | HIGH (primary, fetched) |
| 20 | GDPR Art. 21 right to object (direct marketing) | Data subject "shall have the right to object…at any time to processing…for direct marketing purposes" | same as above | in force | HIGH (primary, fetched) |
| 21 | ePrivacy Directive Art. 13(1) | Prior consent (opt-in) required for unsolicited electronic-mail direct marketing | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32002L0058 | Directive dated 12 July 2002 | HIGH (primary, fetched) |
| 22 | ePrivacy Art. 13(2) — soft opt-in | Existing customers whose contact details were obtained "in the context of the sale of a product or service" may be marketed similar products, with opt-out offered at collection and on every message | same as above | 12 July 2002 | HIGH (primary, fetched) |
| 23 | UK PECR soft opt-in — 4 conditions | (1) address obtained in course of sale/negotiation, (2) marketing own similar products/services only, (3) opt-out offered at collection, (4) opt-out offered on every message | ico.org.uk PECR guide (URL blocked, see credibility note) | — | MEDIUM — WebFetch to ico.org.uk returned 403 every attempt (3 tries, 2 URL variants); reconstructed from convergent secondary sources incl. law-firm summaries |
| 24 | **UK PECR maximum penalty — changed** | Raised from £500,000 to **£17.5 million or 4% of global annual turnover, whichever higher** (aligned with UK GDPR) | Data (Use and Access) Act 2025 (2025 c.18), commencement via Commencement No.6 Regs 2026 | commenced **5 Feb 2026** | MEDIUM-HIGH — legislation.gov.uk fetched directly (confirms Act, c.18, Part 5/Ch.2 enforcement sections) but ICO's own statement page (ico.org.uk, Feb 2026) blocked (403); figure and date corroborated by 6+ independent law-firm trackers (Clifford Chance, DLA Piper Privacy Matters, RPC) all citing the same commencement order |
| 25 | CAN-SPAM opt-out honor deadline | 10 business days | ftc.gov CAN-SPAM compliance guide | — | MEDIUM — ftc.gov blocked WebFetch (403) on every attempt (4 tries incl. federalregister.gov which redirected to an unfetchable unblock host); figure is well-established and consistent across all secondary sources, matches known statutory text of 15 U.S.C. §7704(a)(4) |
| 26 | CAN-SPAM current max civil penalty per violation | **$53,088 per email**, set by Jan 17, 2025 Federal Register inflation adjustment; **no adjustment for 2026** (OMB Memorandum M-26-11, 17 Apr 2026, confirmed by Federal Register "No Adjustment to Civil Monetary Penalty Amounts," pub. 7 Jul 2026) | https://www.federalregister.gov/documents/2025/01/17/2025-01361/adjustments-to-civil-penalty-amounts (fetch blocked) | as of 2026 (unchanged since Jan 2025) | MEDIUM — direct fetch blocked at both ftc.gov and federalregister.gov (redirect to unfetchable host); figure and the "no 2026 adjustment" fact both independently corroborated via WebSearch snippets citing the FTC press release and Federal Register notice by number |
| 27 | CASL consent — mailing address / unsubscribe validity | Sender-identification mailing address and unsubscribe mechanism must remain valid **≥60 days** after send | https://www.crtc.gc.ca/eng/com500/faq500.htm | fetched 2026-08 | HIGH (primary, fetched) |
| 28 | CASL unsubscribe processing deadline | "without delay, and no later than 10 business days" | same as above | fetched 2026-08 | HIGH (primary, fetched) |
| 29 | CASL max Administrative Monetary Penalty | Individuals: **$1 million**; businesses/corporations: **$10 million** (per violation) | same as above | fetched 2026-08 | HIGH (primary, fetched) |
| 30 | FTC Endorsement Guides — material connection rule | 16 CFR §255.5: undisclosed connection between endorser and seller "that might materially affect the weight or credibility of the endorsement" must be disclosed | https://www.govinfo.gov/content/pkg/CFR-2011-title16-vol1/xml/CFR-2011-title16-vol1-part255.xml | govinfo CFR text (2011 codification; guides last substantively revised 2023) | HIGH (primary, fetched — note: fetched the 2011 CFR codification; the 2023 revised Guides restated this same core rule per secondary sources, not independently re-fetched at the newer citation) |
| 31 | FTC fake/deceptive reviews rule | 16 CFR Part 465, effective **Oct 21, 2024**; prohibits fake/AI-generated reviews, buying reviews conditioned on sentiment, undisclosed insider reviews, review suppression, fake social-media indicators | www.federalregister.gov/documents/2024/08/22/2024-18519 (fetch blocked, title/date confirmed via search of ftc.gov legal-library listing) | rule finalized Aug 2024, effective Oct 2024 | MEDIUM — direct fetch blocked; ftc.gov's own legal-library page title confirms citation and existence; effective date and penalty figure below from convergent secondary sources |
| 32 | FTC Part 465 max civil penalty | **$51,744 per violation** (reported) | same as above | as reported 2024-2025 | UNVERIFIED at primary rung: could not fetch ftc.gov or federalregister.gov directly; figure appears consistently across secondary sources but I could not attach a primary URL/quote myself |
| 33 | Apple app name char limit | 30 characters | https://developer.apple.com/app-store/product-page/ | fetched 2026-08 | HIGH (primary, fetched) |
| 34 | Apple subtitle char limit | 30 characters | same | fetched 2026-08 | HIGH (primary, fetched) |
| 35 | Apple promotional text char limit | 170 characters | same | fetched 2026-08 | HIGH (primary, fetched) |
| 36 | Apple keyword field char limit | 100 characters total, comma-separated, no spaces around commas | same, corroborated by App Review Guidelines §2.3.7 fetch | fetched 2026-08 | HIGH (primary, fetched from Apple's own product-page doc) |
| 37 | Apple screenshots | up to 10 images | https://developer.apple.com/app-store/product-page/ | fetched 2026-08 | HIGH (primary, fetched) |
| 38 | Apple app previews (video) | up to 3, 30 sec max each | same | fetched 2026-08 | HIGH (primary, fetched) |
| 39 | Apple App Review Guidelines §2.3.7 | app names "limited to 30 characters"; forbids keyword-stuffing metadata with trademarked/irrelevant terms "just to game the system" | https://developer.apple.com/app-store/review/guidelines/ | fetched 2026-08; doc explicitly self-describes as a "living document," no version date shown | HIGH (primary, fetched) |
| 40 | Google Play app title char limit | 30 characters | https://support.google.com/googleplay/android-developer/answer/9859152 | fetched 2026-08 | HIGH (primary, fetched) |
| 41 | Google Play short description char limit | 80 characters | same | fetched 2026-08 | HIGH (primary, fetched) |
| 42 | Google Play full description char limit | 4,000 characters | same | fetched 2026-08 | HIGH (primary, fetched) |
| 43 | Google Play keyword-stuffing prohibition | "Repetitive or irrelevant use of keywords…can create an unpleasant user experience and result in an app being suspended" | same | fetched 2026-08 | HIGH (primary, fetched) |
| 44 | Google Play store listing experiments | up to 1 default graphics experiment + up to 5 localized experiments concurrently, for default and custom listings | support.google.com/googleplay/android-developer (thread + help center, confirmed via search, not directly fetched) | 2026 | MEDIUM — content assembled via WebSearch snippet of Google's own help center, not independently WebFetched |
| 45 | Google Play custom store listings | targetable by country, pre-registration status, search keyword, inactivity, via unique URL | support.google.com/googleplay/android-developer/answer/9867158 | 2026 | MEDIUM — same as above |

---

## SOURCE-BY-SOURCE NOTES (charter schema: SOURCE / WHAT IT TEACHES / VERBATIM-WORTH-KEEPING / RELEVANCE / CREDIBILITY)

### RFC 8058 — https://www.rfc-editor.org/rfc/rfc8058
WHAT IT TEACHES: Defines the exact two-header mechanism mailbox providers now require for
one-click unsubscribe: `List-Unsubscribe` (HTTPS URI) + `List-Unsubscribe-Post` with fixed value
`List-Unsubscribe=One-Click`. Messages carrying these headers must have a DKIM signature that
covers both headers, or providers will not honor one-click behavior.
VERBATIM: "list-unsubscribe-post = 'List-Unsubscribe-Post:' 0*1WSP postarg CRLF; postarg =
'List-Unsubscribe=One-Click'" (18 words, RFC text, public domain per IETF Trust terms).
RELEVANCE: lifecycle-and-email job — this is the literal spec a marketer's ESP/dev must implement;
also feeds any "deliverability checklist" reference.
CREDIBILITY: Rung 1 (RFC, primary, fetched directly).

### RFC 7208 / 6376 / 2142 (SPF / DKIM / role addresses) — rfc-editor.org
WHAT IT TEACHES: SPF (RFC 7208, obsoletes 4408) and DKIM (RFC 6376, STD 76) are the two
authentication mechanisms Gmail/Yahoo/Microsoft all require for bulk senders; DKIM's own text sets
a hard floor ("MUST use RSA keys of at least 1024 bits for long-lived keys") — note this is lower
than the 2048-bit figure many ESPs recommend as best practice, so "≥1024" is the RFC floor, not the
practical target. RFC 2142 (still Proposed Standard, unobsoleted since 1997) is why abuse@/
postmaster@ must exist and be monitored — relevant to list-hygiene and compliance job facets.
RELEVANCE: lifecycle-and-email; also a fact any "domain setup" checklist needs (subdomain
separation guidance sits on top of this authentication baseline, not instead of it).
CREDIBILITY: Rung 1 for all three (RFCs, fetched directly).

### DMARC status — RFC 7489 superseded by RFC 9989/9990/9991
WHAT IT TEACHES: The single original DMARC RFC (7489, Informational, 2015) is now obsolete.
DMARCbis splits DMARC into three Proposed-Standard documents published **May 2026**: RFC 9989
(core mechanism, adds a "DNS Tree Walk" replacing reliance on the Public Suffix List for
organizational-domain determination), RFC 9990 (aggregate reporting), RFC 9991 (failure
reporting). This is a materially new fact relative to most existing marketing content, which still
cites RFC 7489 as current — anything the pack writes about DMARC should cite RFC 9989 as the base
spec, not 7489.
RELEVANCE: lifecycle-and-email — this is exactly the kind of "check whether superseded" question
the charter flagged, and the answer is yes, very recently (May 2026, i.e., within the last ~3
months of the current date).
CREDIBILITY: Rung 1 (RFCs, fetched directly, cross-confirmed across all three documents' own
"obsoletes" language).

### Gmail bulk sender FAQ — https://support.google.com/a/answer/14229414
WHAT IT TEACHES: Answers both of the two things the colleague could not verify. (i) Unsubscribe
timing: Google states a **recommendation**, not a hard deadline — "we recommend that you fulfill
unsubscribe requests within 48 hours" — there is no stated mandatory SLA comparable to CAN-SPAM's
10-business-day rule; the earlier "2 days" folklore traces to this recommendation, not a
compliance requirement. (ii) Tightening since Feb 2024: yes, twice — June 2024 (spam-rate
mitigation cutoff at 0.3%) and, much more significantly, **November 2025 hard enforcement**
(non-compliant bulk mail now gets SMTP-level temporary/permanent rejections, not just spam
foldering) plus a **Postmaster Tools v2** compliance-status dashboard replacing the old
High/Medium/Low reputation buckets.
VERBATIM: "Starting November 2025, Gmail is ramping up its enforcement on non-compliant traffic."
(11 words, Google support doc — facts freely re-expressible, doc itself all-rights-reserved).
RELEVANCE: lifecycle-and-email flagship fact — the pack's Gmail guidance needs updating past the
colleague's Feb-2024 baseline; "soft enforcement window is over as of Nov 2025" is the headline.
CREDIBILITY: Rung 1 (Google's own support page, fetched directly).

### Yahoo/AOL sender requirements — https://senders.yahooinc.com/best-practices/
WHAT IT TEACHES: Converges almost exactly with Gmail — same 0.3% spam-rate ceiling, same
"SPF+DKIM both, DMARC at least p=none and must pass" authentication bar, same Feb 2024 enforcement
start with gradual rollout. Divergence: Yahoo's own page does **not** state a numeric daily-volume
threshold the way Gmail's does; secondary sources assume parity with Gmail's 5,000/day by
convention, but that specific number is not on Yahoo's own primary page — flagged as gap #9 above.
Also: Yahoo "highly recommends" (not mandates) RFC 8058's POST method specifically, implying the
List-Unsubscribe header alone (without one-click POST) may satisfy Yahoo where it would not satisfy
Gmail's harder line.
RELEVANCE: lifecycle-and-email — the pack should present Gmail/Yahoo/Microsoft as *near-identical
but not identical*; the volume-threshold gap is a real one worth flagging to whoever owns the
final reference rather than silently assuming parity.
CREDIBILITY: Rung 1 (mailbox provider's own sender-requirements page, fetched directly).

### Microsoft Outlook.com high-volume sender requirements
WHAT IT TEACHES: Microsoft joined Google/Yahoo with a 5,000+/day threshold effective **May 5,
2025**, requiring SPF+DKIM+DMARC (p=none minimum, aligned to SPF or DKIM). Divergence from Gmail:
Microsoft's enforcement is **graduated by design** — non-compliant high-volume mail is routed to
Junk first, with full rejection reserved for an unannounced future date — versus Gmail's Nov 2025
move straight to SMTP-level rejection. This is the single clearest **enforcement-severity
divergence** across the three providers found in this research.
RELEVANCE: lifecycle-and-email — "Microsoft gives you a junk-folder warning period; Gmail no
longer does (since Nov 2025)" is a concrete, citable operational difference for the pack.
CREDIBILITY: Rung 3 — I could not get Microsoft's own techcommunity.microsoft.com post to render
via WebFetch (returned only the page title three separate attempts, suggesting JS-gated content or
bot-blocking); the figures are corroborated identically across five independent vendor engineering
blogs (Braze, Mailgun, dmarcian, moosend, redsift, EmailOctopus), which raises confidence despite
none of them individually clearing rung 1. Flag: `UNVERIFIED at primary rung — recommend a human
or browser-based fetch of https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-ecosystem-outlook%E2%80%99s-new-requirements-for-high%E2%80%90volume-senders/4399730`.

### GDPR (Regulation 2016/679) — eur-lex.europa.eu
WHAT IT TEACHES: Consent (Art. 4(11)) must be a "clear affirmative action" — pre-ticked boxes do
not qualify (settled ECJ case law, not re-verified here but consistent with the text). Legitimate
interest (Art. 6(1)(f), amplified by Recital 47's "may be regarded as" language for direct
marketing) is a *usable* lawful basis for marketing under GDPR generally — but Recital 47 only
supplies the GDPR-side basis; it does **not** override ePrivacy's stricter opt-in rule for email
specifically (see next entry). Art. 21 gives an absolute, unconditional right to object to direct
marketing at any time, with no balancing test — stronger than the qualified right to object under
other Art. 21 grounds.
VERBATIM (2 quotes, GDPR text is a public EU legal act, freely quotable): "any freely given,
specific, informed and unambiguous indication…by a clear affirmative action" (Art. 4(11), 16
words); "the right to object, on grounds relating to his or her particular situation, at any time"
(Art. 21, 14 words).
RELEVANCE: the practical decision rule the charter asked for — see synthesis section below.
CREDIBILITY: Rung 1 (EUR-Lex, primary legal text, fetched directly).

### ePrivacy Directive 2002/58/EC Art. 13 — eur-lex.europa.eu
WHAT IT TEACHES: This is the article that actually governs unsolicited *email* marketing in the
EU/EEA — not GDPR's legitimate-interest basis. Art. 13(1): prior opt-in consent required for
email/fax/automated-call direct marketing. Art. 13(2) "soft opt-in": an existing customer's email
address, collected in the context of a sale, may be used to market *similar* products/services
without fresh consent, provided opt-out is offered both at collection and on every subsequent
message. This is the primary-source confirmation of the exception the charter asked to locate.
VERBATIM: "may only be allowed in respect of subscribers who have given their prior consent" (Art.
13(1), 12 words, EU legal text).
RELEVANCE: lifecycle-and-email + audience-and-segmentation — this is the operative EU/EEA rule,
distinct from (and narrower than) GDPR's general legitimate-interest basis.
CREDIBILITY: Rung 1 (EUR-Lex, fetched directly). Note: Directive dates to 2002; a "Regulation on
Privacy and Electronic Communications" has been proposed for years to replace it but — as of this
research — has not been adopted; the Directive as implemented by member states remains current
law. (Not independently re-verified this cycle; flagged as `UNVERIFIED: confirm ePrivacy
Regulation has not superseded the Directive by publication date of the pack`.)

### UK PECR (soft opt-in + penalty reform)
WHAT IT TEACHES: UK PECR's soft opt-in tracks the EU's four conditions closely (obtained in course
of sale, own similar products only, opt-out at collection, opt-out on every message) — but ICO
guidance narrows "similar products" tightly by example (car insurance ≠ travel insurance) and
treats "existing customer" as time-bounded in practice (commonly 2–3 years referenced, not a fixed
statutory period). Separately — and this is the sharpest volatile-fact finding of this whole
report — **the UK just re-armed PECR enforcement**: the Data (Use and Access) Act 2025 raised the
maximum PECR fine from £500,000 to **£17.5 million or 4% of global annual turnover**, matching UK
GDPR's fine ceiling, commenced **5 February 2026** (i.e., six months before this research date).
Any pre-2026 marketing-compliance content that cites "£500,000 max PECR fine" is now stale.
RELEVANCE: lifecycle-and-email, and a fact worth surfacing prominently since it's genuinely new and
most existing web content (including much of what a marketer would find by searching) likely still
cites the old £500k cap.
CREDIBILITY: Rung 2 for the soft-opt-in conditions (ico.org.uk itself returned HTTP 403 on every
WebFetch attempt — 3 tries across 2 URL paths — so this is reconstructed from converging secondary
guidance, not ICO's own text). Rung 1-adjacent for the penalty change: legislation.gov.uk (the
Act itself, primary, fetched directly, confirms Act number 2025 c.18 and the relevant Part
5/Chapter 2 enforcement sections) + rung 3 corroboration (6 independent law-firm trackers citing
the same Commencement No.6 Regulations and 5 Feb 2026 date) for the specific £17.5m/4% figure,
since ICO's own announcement page was blocked.

### CAN-SPAM — ftc.gov (fetch blocked; reconstructed) + eCFR/Federal Register (fetch blocked)
WHAT IT TEACHES: Four operative rules a marketer must hit: no deceptive headers/subject lines,
identify the message as an advertisement (flexible format, must be clear and conspicuous), valid
physical postal address, and honor opt-out within **10 business days** without requiring a fee or
extra personal information. Civil penalty: **$53,088 per violation** as of the Jan 17, 2025
inflation adjustment, confirmed **unchanged for 2026** (OMB declined to adjust — Memorandum M-26-11,
17 Apr 2026 — reflected in a Federal Register notice, "No Adjustment to Civil Monetary Penalty
Amounts," published 7 Jul 2026).
RELEVANCE: lifecycle-and-email — this is the US-side compliance floor, structurally different from
EU/UK (opt-out model, not opt-in) — see synthesis below.
CREDIBILITY: Rung 3 by necessity — ftc.gov returned HTTP 403 on every direct WebFetch attempt (4
tries, 2 different FTC URLs), and federalregister.gov redirected to an "unblock" host that itself
could not be fetched (2 tries). All figures here are corroborated across multiple independent
citations that themselves quote the FTC press release and Federal Register document by exact
number/date, which is stronger than typical blog corroboration, but I was not able to attach my
own primary-source quote. `UNVERIFIED at primary rung — recommend gh/browser-based fetch of
https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business and
https://www.federalregister.gov/documents/2025/01/17/2025-01361/adjustments-to-civil-penalty-amounts`.

### CASL (Canada) — https://www.crtc.gc.ca/eng/com500/faq500.htm
WHAT IT TEACHES: Express consent does not expire but is revocable at any time; implied consent
arises from existing business/non-business relationships, conspicuous publication of an address,
or qualifying membership. Practical requirements: sender + on-whose-behalf identification (a
hyperlink to a webpage satisfies this if impractical inline), a mailing address valid for **≥60
days**, and an unsubscribe mechanism also valid **≥60 days**, processed "without delay, and no
later than 10 business days." Maximum Administrative Monetary Penalties: **$1 million per
violation for individuals, $10 million for businesses** — both far higher than CAN-SPAM's
per-violation figure, making Canada the strictest of the three North American/near-North-American
regimes covered here on paper (though CASL AMPs are rarely levied at the max).
RELEVANCE: audience-and-segmentation + lifecycle-and-email — this is the third distinct consent
model (after EU opt-in and US opt-out) the pack needs to represent.
CREDIBILITY: Rung 1 (CRTC's own FAQ page, fetched directly).

### FTC Endorsement Guides (16 CFR Part 255) + fake-reviews rule (16 CFR Part 465)
WHAT IT TEACHES: §255.5's core rule — any undisclosed connection between an endorser and seller
that "might materially affect the weight or credibility of the endorsement" must be disclosed
"clearly and conspicuously" — is the entire legal basis for #ad/#sponsored disclosure requirements
binding on affiliate and influencer marketing. Separately, 16 CFR Part 465 (finalized Aug 2024,
effective **Oct 21, 2024**) is a genuinely new rule — not an update to 255 — that bans fake/
AI-generated reviews, review-buying conditioned on sentiment, undisclosed insider reviews, review
suppression, and fake indicators of social-media influence (e.g., bought followers), backed by
civil penalty exposure reportedly **$51,744 per violation**.
RELEVANCE: partnerships-and-pr, organic-social-and-community — any pack guidance on influencer/
affiliate programs or review-solicitation tactics must route through both of these.
CREDIBILITY: §255.5 itself is Rung 1 (govinfo.gov CFR text, fetched directly — though I fetched the
2011 codification rather than confirming the exact 2023-revision wording verbatim; the core §255.5
rule is stable across both). Part 465's existence/citation/effective-date is Rung 2 (ftc.gov's own
legal-library listing title confirms the rule exists and its citation, but the Federal Register
notice text itself was unfetchable — same redirect-to-unblock-host problem as CAN-SPAM above).
The **$51,744 penalty figure is UNVERIFIED at primary rung** — could not attach a primary URL/quote
myself; flagged rather than asserted as confirmed.

### Apple App Store — developer.apple.com (product-page doc + App Review Guidelines §2.3)
WHAT IT TEACHES: Hard limits: app name 30 chars, subtitle 30 chars, promotional text 170 chars,
keyword field 100 chars total (comma-separated, no spaces around commas, but spaces allowed within
a keyword phrase), up to 10 screenshots, up to 3 app previews (30 sec max each). Two distinct
native experimentation surfaces exist: **Custom Product Pages** (persistent, URL-addressable,
localizable variant pages for driving different ad traffic to different pitches) and **Product
Page Optimization** (Apple's native A/B test, showing a % of eligible users an alternate icon/
screenshots/previews set, results in App Analytics) — these are different tools for different jobs
and the pack should not conflate them. Guidelines §2.3.7 explicitly bans keyword-stuffing metadata
"just to game the system" and states Apple "may modify inappropriate keywords at any time."
VERBATIM: "Keywords are limited to 100 characters total, with terms separated by commas and no
spaces" (Apple's own product-page doc, 14 words).
RELEVANCE: app-store-optimization job, mobile-app GTM surface — this is the primary numeric
backbone of that job.
CREDIBILITY: Rung 1 (developer.apple.com, fetched directly, both the product-page doc and the
Review Guidelines page). The dedicated App Store Connect Help keyword-field reference page
(developer.apple.com/help/app-store-connect/reference/keywords) 404'd twice under different
paths — the 100-char figure is nonetheless confirmed on Apple's own product-page doc, so treated
as primary-confirmed, not downgraded.

### Google Play — support.google.com/googleplay/android-developer
WHAT IT TEACHES: Hard limits: title 30 chars, short description 80 chars, full description 4,000
chars (release notes 500 chars/version, per secondary confirmation only — not independently
fetched). Metadata/spam policy explicitly states repetitive/irrelevant keywords in name or
description "will not impact ranking and provides a bad user experience" and can trigger
suspension — a materially different enforcement philosophy from Apple's (Apple polices the
dedicated keyword field; Google polices keyword presence in *visible* fields like title/description
and treats stuffing as a UX/policy violation, not merely an ineffective tactic). Store listing
experiments (native A/B testing) support up to 1 default + 5 localized concurrent experiments;
Custom Store Listings allow URL-addressable variants targeted by country, pre-registration status,
inbound search keyword, or inactivity — directly comparable to Apple's Custom Product Pages.
RELEVANCE: app-store-optimization job, mobile-app GTM surface.
CREDIBILITY: Rung 1 for the character limits and spam-policy quote (support.google.com, fetched
directly). Rung 2 for the experiments/custom-listings mechanics (assembled from WebSearch snippets
of Google's own help center rather than independently WebFetched — the underlying source is still
primary, just not directly verified by me this cycle).

---

## SYNTHESIS: the practical decision rule the pack needs (charter's explicit ask)

**Consent model by recipient jurisdiction — the one rule a solo product marketer must encode:**

1. **EU/EEA recipient** → ePrivacy Directive Art. 13 governs, not GDPR's legitimate-interest basis.
   Default is **opt-in**. The only exception is the 13(2) soft opt-in: existing customer, similar
   product, opt-out offered at collection and on every message. GDPR's Recital 47 legitimate-
   interest basis does NOT independently authorize cold email marketing — ePrivacy's opt-in rule
   sits on top of and narrows it for the email channel specifically. This is a common confusion
   worth flagging explicitly in the pack.
2. **UK recipient** → same soft-opt-in shape as the EU (PECR mirrors the ePrivacy exception), but
   now backed by GDPR-parity fines (£17.5m/4% turnover, since 5 Feb 2026) rather than the old
   £500k cap — meaning UK non-compliance risk just became materially higher than most existing
   content assumes.
3. **US recipient** → CAN-SPAM is **opt-out**, not opt-in: you may email without prior consent,
   but must identify the message as an ad, give a real postal address, and honor opt-out within 10
   business days. This is the one jurisdiction where cold outbound email is lawful by default.
4. **Canadian recipient** → CASL requires **express or implied consent** (implied being narrower
   and time-bounded via existing-relationship rules), the strictest per-violation penalty exposure
   of the four ($10m for businesses), and a 60-day minimum validity window on sender ID/unsubscribe
   mechanisms that the other three regimes don't impose.

**Net for the pack:** the "default" send behavior a marketing tool should encode differs
categorically by geography — opt-in-with-narrow-exception (EU/UK) vs. opt-out-with-disclosure
(US) vs. consent-with-long-validity-windows (Canada). A single global send list cannot be lawfully
treated the same way everywhere; segmentation by recipient jurisdiction is a compliance
requirement, not just a targeting nicety — this belongs in both lifecycle-and-email and
audience-and-segmentation job references.

**Deliverability enforcement severity, ranked (as of this research date):** Gmail (hardest — SMTP
rejection since Nov 2025) > Yahoo/AOL (spam-rate ceiling enforced since Feb 2024, no numeric volume
threshold stated on their own page) > Microsoft (softest — Junk-routing only as of May 2025, full
rejection date unannounced). A pack reference should not present these three as interchangeable.

## What I did NOT cover and why

- Did not re-verify Gmail's original Feb 2024 baseline facts (5,000/day threshold, 0.3%/0.10%
  spam rates, SPF+DKIM+DMARC p=none, ≥1024-bit DKIM keys) — explicitly out of scope per the
  colleague's prior work; I verified only the two flagged gaps plus later changes.
- Did not chase ePrivacy Regulation (the long-pending GDPR-aligned replacement for the 2002
  Directive) to confirm it still has not passed — flagged as UNVERIFIED above rather than
  asserted.
- Did not verify Apple's App Store Connect Help keyword-field reference page directly (404'd);
  relied on the product-page doc instead, which is also Apple-primary.
- Did not independently fetch Google Play's release-notes (500-char) figure, store-listing-
  experiments mechanics, or custom-store-listings mechanics — reconstructed from WebSearch
  snippets of Google's own help center rather than direct WebFetch (budget/time tradeoff; these
  are lower-stakes than the character-limit and legal figures).
- Did not attempt New Zealand/Australia spam law (Spam Act 2003 AU, Unsolicited Electronic
  Messages Act NZ) — outside the charter's named jurisdiction list (GDPR/PECR/CAN-SPAM/CASL only).
- ftc.gov, ico.org.uk, and web.archive.org were unreachable via WebFetch throughout this session
  (403s / explicit tool block on archive.org) — every FTC and ICO figure in this report that
  lacks a "fetched directly" credibility note should be treated as secondary-corroborated, not
  primary-verified, until someone with browser/gh-authenticated access confirms it.
