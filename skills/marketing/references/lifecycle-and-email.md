# Lifecycle and Email

Purpose: Get marketing email delivered before worrying about what it says — deliverability is an
engineering precondition, then a consent-law jurisdiction problem, and only then a copywriting job.

Read when:
- Setting up or auditing sender authentication (SPF/DKIM/DMARC) for a marketing domain.
- Deciding a consent model (opt-in vs. opt-out) for a send list that spans jurisdictions.
- Designing lifecycle sequences (welcome, activation nudge, win-back, newsletter) and deciding
  where marketing's ownership ends.
- A campaign's inbox placement degraded and the cause isn't obvious.

Skip when:
- The email is in-product onboarding education after signup → `success`.
- The email is dunning/billing-failure recovery → `product`.
- You need the CRM/pipeline sequencing around a sales-qualified lead → `sales`.
- You need analytics-pipeline instrumentation for email events → `data`.

Inputs:
- Sending domain, current DNS records (or absence of them), ESP/self-hosted mail stack.
- Recipient jurisdictions in the send list (EU/EEA, UK, US, Canada, other).
- Whether transactional and marketing mail currently share a sending domain/subdomain.

Produces:
- An authentication and enforcement checklist by mailbox provider.
- A jurisdiction-segmented consent model for the send list.
- A stream-separation decision (transactional vs. marketing) with the reasoning.

## Contents

- [1. Deliverability is engineering, not copywriting](#1-deliverability-is-engineering-not-copywriting)
- [2. Sender authentication baseline and DMARC's supersession](#2-sender-authentication-baseline-and-dmarcs-supersession)
- [3. Provider divergence — not interchangeable](#3-provider-divergence--not-interchangeable)
- [4. The consent decision rule](#4-the-consent-decision-rule)
- [5. Transactional/marketing stream separation](#5-transactionalmarketing-stream-separation)
- [6. The lifecycle boundary](#6-the-lifecycle-boundary)
- [7. Email-HTML reality](#7-email-html-reality)
- [Validation](#validation)
- [Failure modes and handoff](#failure-modes-and-handoff)

## 1. Deliverability is engineering, not copywriting

A pack that teaches subject lines and not the sender-reputation floor is teaching the decorative
half of the job. Every mailbox provider enforces a hard, checkable bar before content quality ever
enters the picture: authentication, spam-complaint rate, and unsubscribe handling. Get flagged on
any of those and no subject line saves the send.

## 2. Sender authentication baseline and DMARC's supersession

Bulk senders (5,000+ msgs/day to Gmail addresses, same threshold at Microsoft) need SPF **and**
DKIM, a DMARC record (`p=none` is sufficient to start), and a From: domain aligned to the SPF or
DKIM domain — the Gmail/Microsoft baseline as of 2026-07/08, re-verify at build time
(support.google.com/a/answer/81126). DKIM's own RFC floor (RFC 6376) is a 1024-bit key for long-lived keys;
2048 is the practical target ESPs recommend in current practice.

**DMARC has been superseded.** RFC 7489 is obsolete. As of May 2026, DMARCbis splits it into RFC
9989 (core mechanism), RFC 9990 (aggregate reporting), and RFC 9991 (failure reporting), all
Standards Track. Cite 9989 as the base spec, not 7489 — most existing deliverability content still
hasn't caught up.

**The escalation ladder is `p=none` → `p=quarantine` → `p=reject`**, moved through only after
aggregate reports (parsed by tools like parsedmarc, Apache-2.0) confirm alignment holds. `p=none`
monitors without affecting delivery; `p=quarantine` sends failures to spam; `p=reject` hard-blocks
unauthenticated mail outright — the lever that actually stops domain spoofing, not mere SPF/DKIM
presence. Skipping straight to `p=reject` on an unverified setup silently drops your own legitimate
mail alongside the forgeries it's meant to catch.

RFC 8058's one-click unsubscribe (`List-Unsubscribe` + `List-Unsubscribe-Post:
List-Unsubscribe=One-Click`, both covered by the DKIM signature) is now a mailbox-provider
requirement, not an optional nicety — production ESPs wire it directly into the send path rather
than merely documenting it.

## 3. Provider divergence — not interchangeable

Present Gmail, Microsoft, and Yahoo as near-identical but not the same. Ranked by enforcement
severity, as-of dates matter here — re-verify each at build time:

| Provider | Spam-rate ceiling | Enforcement posture | As-of |
|---|---|---|---|
| Gmail | <0.3% (target <0.10%) | Hardest. November 2025: Google's own words, *"temporary and permanent rejections"* for non-compliant bulk mail — no longer just spam-foldering. | 2026-07/08, P |
| Microsoft (Outlook.com) | — | Junk-routing first, may escalate to rejection later — softer by design. **No enforcement date is claimed here**: the dates circulating in deliverability content do not appear on Microsoft's own sender-requirements page. Read that page directly before asserting one. | Controller-verified, P, no date claim |
| Yahoo/AOL | <0.3% | No stated daily-volume threshold on Yahoo's own page — do not assume Gmail's 5,000/day parity by analogy. | 2026-08-01, P |

Gmail's 48-hour unsubscribe-honoring window is a **recommendation**, not an SLA — the "2 days"
folklore overstates it as a compliance rule.

## 4. The consent decision rule

Jurisdiction segmentation is a compliance requirement, not a targeting nicety — a single global
send list cannot lawfully be treated the same way everywhere.

- **EU/EEA and UK → opt-in.** ePrivacy Directive Art. 13 governs email marketing, not GDPR's
  legitimate-interest basis — **GDPR's Recital 47 legitimate interest does not rescue cold email**;
  ePrivacy's opt-in rule sits on top of and narrows it for the email channel specifically. The one
  exception is the Art. 13(2) soft opt-in: existing customer, contact obtained in the course of a
  sale, similar products only, opt-out offered both at collection and on every message. UK PECR
  mirrors the same four conditions, now backed by GDPR-parity fines: the ceiling rose from £500,000
  to **£17.5 million or 4% of global annual turnover**, commenced 2026-02-05 — any content still
  citing the old £500k cap is stale.
- **US → opt-out.** CAN-SPAM is the one regime where cold outbound email is lawful by default: no
  prior consent needed, but the message must identify itself as an ad, carry a valid physical
  postal address, and honor opt-out within **10 business days**. Penalty: **$53,088 per email**
  (primary-verified against ftc.gov).
- **Canada → consent, with validity windows.** CASL requires express or implied consent; the
  sender's mailing address and unsubscribe mechanism must both stay valid for **at least 60 days**,
  processed without delay and no later than 10 business days. Penalties reach **$1 million for
  individuals, $10 million for businesses** — the strictest ceiling of the four regimes on paper.

Net: opt-in-with-narrow-exception (EU/UK) vs. opt-out-with-disclosure (US) vs.
consent-with-long-validity-windows (Canada) are structurally different defaults. Segment the send
list by recipient jurisdiction before deciding whether an address may be emailed at all.

## 5. Transactional/marketing stream separation

Separate sending domains or subdomains for transactional mail (receipts, password resets, security
alerts) and marketing mail (campaigns, newsletters) isolate reputation risk in both directions: a
marketing campaign that trips a spam filter shouldn't take password-reset delivery down with it,
and vice versa. This is standard ESP guidance, not a volatile fact — it needs no re-verification
date.

## 6. The lifecycle boundary

Marketing owns the acquisition-side lifecycle and the newsletter: welcome sequences that convert an
address into a first action, re-engagement/win-back sends, and editorial newsletters. Two adjacent
jobs are explicitly **not** marketing's:

- **Onboarding education** (teaching a signed-up user how to use the product) → `success`.
- **Dunning** (billing-failure recovery email) → `product`.

State this boundary to the reader rather than assuming it — AARRR-literate readers will otherwise
read the seam as a gap, not a decision (see `go-to-market-and-launch` for the parallel launch
boundary with `product`).

## 7. Email-HTML reality

Email clients render HTML against a rendering floor closer to 1999 than to a modern browser: no
reliable flexbox or grid, table-based layout, inlined CSS, and Outlook desktop's Word rendering
engine as the binding compatibility target — "Even Outlook" is a real design constraint, not a
punchline. The proof is structural, not anecdotal: the email-templating ecosystem's most-adopted
tool, mjml (MIT), exists specifically because authors need a markup language that *compiles
down* to table-based HTML rather than writing it by hand. If a request needs actual template markup
production, that's implementation — write the requirements (content, hierarchy, CTA, proof), not
the markup itself.

## Validation

- Authentication (SPF, DKIM, DMARC) is confirmed live on the sending domain, not merely configured
  — check via a test send or the ESP's own verification tool.
- The send list's consent model is segmented by recipient jurisdiction, not applied uniformly.
- Transactional and marketing mail send from separated domains/subdomains.
- Every volatile figure cited (thresholds, penalties, ceilings) carries its as-of date and this
  reference's re-verify pointer.

## Failure modes and handoff

- **Inbox placement degraded with no code change on your side.** Check spam-complaint rate and
  DMARC alignment reports before assuming a content problem — Gmail's enforcement (§3) can trip on
  authentication drift alone.
- **A send list mixes jurisdictions with one consent assumption.** Stop and segment per §4 before
  sending — a lawful-in-the-US list is not lawful-in-the-EU by default.
- **The request is for actual email template code or ESP configuration** → implementation is
  outside marketing's code policy; hand off the content/requirements brief instead.
- **The question is retention-experiment design on top of a working lifecycle sequence** → `growth`.
