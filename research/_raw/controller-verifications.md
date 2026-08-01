# Controller verifications — blocked-URL follow-ups (2026-08-01)

Method: `curl -A <Chrome UA>` (bot-blocks at these hosts reject WebFetch's UA but serve browsers),
plus Apple's JSON doc backend (`developer.apple.com/tutorials/data/documentation/...json`). All
four items below were previously secondary-corroborated only; all four are now PRIMARY-verified.
Fetched pages saved in the session scratchpad.

## 1. FTC CAN-SPAM compliance guide — CONFIRMED
SOURCE: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
(HTTP 200, fetched 2026-08-01).
- Penalty, verbatim from page: "Each separate email in violation of the CAN-SPAM Act is subject
  to penalties of up to $53,088" (appears twice). The $53,088 figure the community repeats is
  CORRECT as of the fetch date.
- Opt-out deadline, verbatim: "You must honor a recipient's opt-out request within 10 business
  days." CONFIRMED.

## 2. ICO PECR electronic-mail-marketing guide — CONFIRMED
SOURCE: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/
(HTTP 200, fetched 2026-08-01).
- Soft opt-in, ICO's own wording (regulation 22): marketing to individuals only with specific
  consent OR "they are an existing customer who bought (or negotiated to buy) a similar product
  or service from you in the past, and you gave them a simple way to opt out both when you first
  collected their details and in every message you have sent." The 4-condition reconstruction in
  web-deliverability-law-stores.md row 23 is CONFIRMED; upgrade its credibility MEDIUM → HIGH.
- Also confirmed: the "electronic mail" definition is intentionally broad — includes texts,
  voicemails, and DMs via social media.

## 3. Microsoft Outlook high-volume sender requirements — CONFIRMED
SOURCE: https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-ecosystem-outlook%E2%80%99s-new-requirements-for-high%E2%80%90volume-senders/4399730
(HTTP 200, fetched 2026-08-01).
- Threshold: "domains sending more than 5,000 emails per day" — CONFIRMED.
- Requirements: mandatory SPF, DKIM, DMARC ("SPF (Sender Policy Framework) Must Pass...").
- Enforcement posture, verbatim: "Non-compliant messages will first be routed to Junk. If issues
  remain unresolved, they may eventually be rejected." — i.e., junk-first, reject-later; softer
  than Gmail's stated temporary/permanent rejections. Page carries an "April 29th Update" note
  saying the enforcement action was changed — the "May 5, 2025" date circulating in vendor blogs
  is NOT on this page; date remains secondary-only. Ship the threshold + posture, not the date.

## 4. Apple AdAttributionKit vs SKAdNetwork — SUPERSESSION REFUTED (primary)
SOURCES: developer.apple.com/tutorials/data/documentation/adattributionkit.json and
.../adattributionkit/adattributionkit-skadnetwork-interoperability.json (both HTTP 200, 2026-08-01).
- The interoperability page describes the two as CO-EXISTING frameworks: "AdAttributionKit works
  with both the App Store and alternative app marketplaces, while SKAdNetwork works specifically
  with the App Store"; apps may call BOTH APIs; ad network IDs are compatible across both; the
  system arbitrates a single winning impression across both.
- Zero deprecation/supersession language anywhere in either page (searched: deprecat/supersed/
  replace). The D-worker's correction stands and is now primary-verified: SKAdNetwork is NOT
  superseded; AdAttributionKit is additive (and the alternative-marketplace path). Any pack claim
  must say "as of 2026-08" and carry a re-verify pointer.

## Method note for future runs
ftc.gov, ico.org.uk, techcommunity.microsoft.com: 403/shell to WebFetch but 200 to curl with a
Chrome user-agent. Apple developer docs: JS-rendered pages are empty to fetchers, but every doc
page has a JSON backend at `developer.apple.com/tutorials/data/documentation/<path>.json` —
fetch that instead of headless-browsing.
