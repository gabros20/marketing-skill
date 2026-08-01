# Channel D — lead's own slices (territory no worker was assigned)

**Fetched:** 2026-07-31 / 2026-08-01. All URLs below were fetched by the channel-D lead on those
dates. Volatile facts carry as-of dates inline.

**Why these exist:** the four workers cover marketing science, SEO/AI-search, deliverability+law+app
stores, and attribution+paid+GTM. The pack's candidate job list also contains **partnerships-and-pr**
and **go-to-market-and-launch**, whose primary sources (marketplace listing guidelines, launch-platform
rules) belonged to no worker. These are those sources.

**Tooling note:** `crwl` (Crawl4AI CLI) is **broken in this environment** — `ImportError: cannot import
name 'ImageResponse' from partially initialized module 'litellm'` (circular import), reproduced twice.
Per charter, fell back to WebFetch without debugging. Every finding below is `[PRIMARY]` (lead read the
actual vendor documentation page) unless marked otherwise.

---

## 1. Gmail bulk sender requirements — probe fetch (handed to the deliverability worker)

**SOURCE:** https://support.google.com/a/answer/81126 — Google Workspace Admin Help, "Email sender
guidelines". Fetched 2026-07-31. `[PRIMARY]`. No last-updated date shown on the page (noted as a
verification weakness — the numbers below are as-of the fetch date only).

**WHAT IT TEACHES.** The checkable engineering floor under every "email marketing" claim:

| Requirement | Value |
|---|---|
| Bulk-sender threshold | **5,000+ messages/day** to Gmail accounts |
| Spam rate ceiling | **below 0.3%**; Google recommends **below 0.10%** |
| Auth (all senders) | SPF **or** DKIM; valid forward + reverse DNS (PTR); TLS for transmission |
| Auth (bulk senders) | SPF **and** DKIM both; DMARC record required (policy may be `p=none`) |
| Alignment | From: header domain must align with **either** the SPF domain **or** the DKIM domain |
| DKIM key | **≥1024 bits** (2048 recommended) |
| One-click unsubscribe | RFC 8058 headers `List-Unsubscribe-Post: List-Unsubscribe=One-Click` + `List-Unsubscribe: <https://…>` |
| Format | RFC 5322 compliance |
| Enforcement from | **1 February 2024** (DKIM key requirement added December 2023) |

**RELEVANCE TO PACK JOBS.** `lifecycle-and-email` — this is the hard constraint that makes email a
*deliverability engineering* job before it is a copywriting job. A pack that teaches subject lines and
not the 0.3% ceiling is teaching the decorative half.

**CREDIBILITY NOTE.** Top rung (platform primary doc). Caveat recorded: the page carries **no visible
last-updated date**, so "current" here means "as fetched 2026-07-31". `UNVERIFIED:` whether a documented
deadline exists for *honoring* unsubscribes (Google has stated 2 days in some materials) — the fetched
page did not state one. Handed to the deliverability worker to chase in Postmaster Tools docs.

---

## 2. Google Search spam policies — probe fetch (handed to the SEO worker)

**SOURCE:** https://developers.google.com/search/docs/essentials/spam-policies — Google Search Central.
Fetched 2026-07-31. **Page states "Last updated 2026-05-15 UTC"** — a genuinely current primary source.
`[PRIMARY]`.

**WHAT IT TEACHES.** Three policies matter to a marketing pack that will be executed by agents:

- **Scaled content abuse** — the policy is about *purpose and volume*, not authorship. Verbatim (≤25 w):
  *"Scaled content abuse is when many pages are generated for the primary purpose of manipulating search
  rankings and not helping users."* Generative AI is named only as one instrument: *"Using generative AI
  tools or other similar tools to generate many pages without adding value."*
- **Site reputation abuse** — third-party content published on a host site mainly to exploit that host's
  established ranking signals (the "parasite SEO" pattern).
- **Expired domain abuse** — buying expired domains to repurpose their signals.

**RELEVANCE TO PACK JOBS.** `content-strategy-and-briefs` + the agentic overlay. The durable, citable rule
is **information gain, not "don't use AI"** — Google's own text nowhere prohibits AI authorship. This is a
folklore-killer with a top-rung citation and a 2026-05-15 date behind it.

**CREDIBILITY NOTE.** Top rung; dated by the publisher itself. Strongest single citation found in the
channel for the agentic-content question.

---

## 3. Product Hunt — official launch rules

**SOURCES (both `[PRIMARY]`, fetched 2026-08-01):**
- https://www.producthunt.com/launch — Product Hunt's own launch guide
- https://help.producthunt.com/en/articles/3615694-community-guidelines — **page states Last Updated
  11 April 2025**

**WHAT IT TEACHES.**
- **Timing:** Product Hunt's own guidance names **12:01 am Pacific Time** as the launch moment for makers
  planning ahead (the leaderboard day boundary). It explicitly declines to name a best weekday, saying
  there are pros and cons to each — i.e. the "always launch Tuesday" practitioner rule is **not** platform
  doctrine.
- **Prohibited, verbatim from the community guidelines (≤25 w):** *"asking for upvotes, using bots,
  incentivizing upvotes, and any other form of artificially increasing activity"*. Also: *"Self-promoting
  in comments will also be removed."* Company accounts are prohibited; profiles must be real people
  (real first/last name, personal photo, non-generic username).
- **The legal ask:** you may ask people to **visit and comment**, never to upvote. This is the single most
  violated rule in every launch checklist circulating in practitioner content.
- **Relaunch policy:** makers may launch again "as often as you have new significant product iterations
  available" — platform-sanctioned repeat launching, which corroborates the family's "launch is repeatable,
  not a moment" framing with a primary source rather than an assertion.
- **Enforcement:** account removal/suspension, product removal, loss of contribution access, reduced
  visibility for incomplete profiles, added scrutiny for suspicious accounts.
- Product Hunt states it is free and encourages **self-hunting** rather than paying third-party hunters.

**RELEVANCE TO PACK JOBS.** `go-to-market-and-launch`. Gives the launch reference a *checkable rules
surface* instead of folklore tactics, and lets the pack ship a hard invariant: **never solicit upvotes —
it is an enumerated, enforceable violation with a dated primary citation.**

**CREDIBILITY NOTE.** Top rung (platform primary), and the guidelines page is self-dated (2025-04-11).
The 12:01am PT detail comes from the marketing-flavored /launch page rather than a policy doc — treat as
platform guidance, not a rule. `UNVERIFIED:` Product Hunt's ranking algorithm — the page confirms products
compete on upvotes and engagement but publishes no weighting; anyone claiming to know it is guessing.

---

## 4. Slack Marketplace — integration-listing requirements (the partnerships primary source)

**SOURCES (both `[PRIMARY]`, fetched 2026-08-01):**
- https://docs.slack.dev/slack-marketplace/
- https://docs.slack.dev/slack-marketplace/slack-marketplace-app-guidelines-and-requirements

**WHAT IT TEACHES.** "List in the marketplaces your users already live in" is usually asserted as strategy
with no operational content. Slack publishes the actual bar, and it is high. Hard numbers:

| Requirement | Value |
|---|---|
| Short description | **max 10 words** (shown in search results and app cards) |
| Screenshots | **1600×1000 px (8:5)**, under **2 MB**, .jpg/.jpeg/.png, shown in Slack context |
| Video (strongly recommended) | **30–90 seconds**, public YouTube, captions on, ads disabled |
| Support response SLA | **within 2 business days** |
| Slash-command response | **within 3000 ms** or it times out |
| Minimum traction to list | **≥5 active workspaces and ≥10 weekly active users** (private betas ineligible) |

Also required: a **publicly accessible landing page** (not behind a login, not a PDF or repo) with a
visible "Add to Slack" button; a **support page** reachable without creating an account; and a privacy
policy that discloses what data is collected, how it is used, how long it is retained, how to request
access/transfer/deletion, and a contact method (a physical address alone is insufficient). Security floor:
TLS **1.2+**, signed-secret request verification, tokens never in logs/client code/public repos.

Explicitly disallowed, among others: **using Slack data to train LLMs**; requesting scopes for
unimplemented future features; apps that only provide "Sign in with Slack"; bulk message/file deletion or
export; crypto/NFT transactions. Notifications must never impersonate users or post to #general by
default. AI features carry their own disclosure duties (model type, data retention, tenancy, residency,
plus an accuracy disclaimer and human review for consequential decisions).

Delisting happens **without prior notice** for a broken landing page or install flow, an abandoned
appearance, or substantial functionality changes made without resubmission.

**RELEVANCE TO PACK JOBS.** `partnerships-and-pr`. Converts a vague channel into a gated one with a
**traction prerequisite** (5 workspaces / 10 WAU) — meaning marketplace listing is *not* a zero-audience
launch channel, which contradicts how it is usually recommended to pre-launch founders. That is a
shippable, sourced correction. Also feeds `app-store-optimization` by showing that "store listing" craft
generalizes beyond Apple/Google to B2B integration directories.

**CREDIBILITY NOTE.** Top rung (platform primary). The guidelines page shows **no last-updated date** and
states only that it is subject to change — so all limits above are as-of 2026-08-01. No review-timeline
SLA is published.

---

## 5. Search Quality Rater Guidelines — read from the actual PDF (closes a worker gap)

The SEO worker could not extract this PDF (its fetch tool returned encoded stream data) and fell back
to secondary trade-press dating. The lead downloaded it and ran `pdftotext`. **All three facts below
are now `[PRIMARY]`, upgraded from the worker's secondary-sourced version.**

**SOURCE:** `https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf`
(redirect target of `https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf`). Downloaded
2026-08-01, 8,969,290 bytes, `PDF document, version 1.5, 182 pages`.

**Version date — CONFIRMED PRIMARY.** The document's own cover page reads **"General Guidelines /
September 11, 2025"**, at **182 pages**. This exactly matches what the trade press claimed
(2025-09-11, 181→182 pages), so the secondary sources were right — but the pack can now cite the
document itself rather than SEO Roundtable.

**Raters cannot move rankings — CONFIRMED PRIMARY, and the wording is stronger than the folklore-kill
needs.** From §0.1 "The Purpose of Search Quality Rating", verbatim (≤25 w): *"No single rating can
directly impact how a particular webpage, website, or result appears in Google Search."* The document
gives the reason in its own voice: using ratings to position results would not be feasible because
humans could never individually rate each page on the open web. Ratings instead **measure** whether
search engines are delivering helpful content, and supply examples of helpful/unhelpful results.

**E-E-A-T is not four co-equal factors — Trust is the center. This is a real correction.** From §3.4,
verbatim (≤25 w): *"The most important member at the center of the E-E-A-T family is Trust."* The
guidelines define Trust as the extent to which a page is accurate, honest, safe, and reliable, and
then position the other three **as supports for assessing Trust**, in the document's own framing:
Experience (first-hand or life experience with the topic), Expertise (knowledge or skill for the
topic), Authoritativeness (being known as the go-to source). The document also scales the requirement
by stakes — an online store needs secure payment and reliable service; informational pages on clear
YMYL topics must be accurate to prevent harm; a non-YMYL social post made to entertain may not need
high Trust at all.

**RELEVANCE TO PACK JOBS.** `content-strategy-and-briefs`, `seo-strategy`. Practitioner content almost
universally treats E-E-A-T as a four-item checklist to be scored evenly, and treats rater judgments as
something that can penalize your page. Both are wrong, and both are now refutable from the primary
document with a date on it. The teachable reframe: **E-E-A-T is a trust rubric with three supporting
lenses, applied by humans in aggregate to evaluate Google's systems — not a per-page score.**

**CREDIBILITY NOTE.** Top rung, primary, self-dated 2025-09-11. Strongest single artifact in the
channel: read byte-wise from Google's own host, not via any intermediary.

---

## 6. Attempted and failed — recorded so the gap is visible

- **Shopify App Store listing limits.** Tried `https://shopify.dev/docs/apps/launch/app-store-listing/
  create-app-store-listing` (404) and `https://shopify.dev/docs/apps/launch/app-store-listing` (404) on
  2026-08-01. `UNVERIFIED:` Shopify's listing character limits and screenshot specs. **Would verify:** a
  working shopify.dev path (the docs tree appears to have been reorganized) or Shopify Partner Dashboard
  help pages. A second marketplace's numbers would let the pack generalize from n=1 (Slack) to a pattern.
- **HARO / Connectively status.** Tried `https://www.connectively.us/` (HTTP 429) and
  `https://www.cision.com/products/connectively/` (HTTP 403) on 2026-08-01. `UNVERIFIED:` whether
  Connectively (the HARO successor) is still operating, and what the current journalist-query ecosystem
  is. **Would verify:** a successful fetch of connectively.us after the rate limit clears, or a Cision
  press release. **Do not ship any named journalist-query service without re-verifying liveness at build
  time** — this sub-domain has churned repeatedly and a dead recommendation is worse than none.
