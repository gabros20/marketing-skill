# Lifecycle and Email

Purpose: Get marketing email delivered before worrying about what it says — deliverability is an
engineering precondition, then a consent-law jurisdiction problem, and only then a copywriting job.

Read when:
- Setting up or auditing sender authentication (SPF/DKIM/DMARC) for a marketing domain.
- Deciding a consent model (opt-in vs. opt-out) for a send list that spans jurisdictions.
- Deciding whether a number may be called by an AI voice agent, and on what consent basis.
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
- A jurisdiction-segmented consent model for the send list or call list.
- A stream-separation decision (transactional vs. marketing) with the reasoning.

## Contents

- [1. Deliverability is engineering, not copywriting](#1-deliverability-is-engineering-not-copywriting)
- [2. Sender authentication baseline and DMARC's supersession](#2-sender-authentication-baseline-and-dmarcs-supersession)
- [3. Provider divergence — not interchangeable](#3-provider-divergence--not-interchangeable)
- [4. The consent decision rule](#4-the-consent-decision-rule)
  - [Outbound AI-voice calls are automated calls](#outbound-ai-voice-calls-are-automated-calls)
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
- **Elsewhere → verify the jurisdiction before sending.** These four regimes do not exhaust the
  field. Any recipient outside them needs its own consent basis checked against that
  jurisdiction's current law before a send — never default to one of the four by proximity or
  assumption.

The EU/EEA opt-in rule is a directive, not a regulation — member states transpose it into national
law with their own enforcement detail, so a single "EU rule" can understate local variance. Germany's
UWG §7 is a named example of that member-state layer; verify the applicable national transposition,
not just the directive, before sending into a specific EU country.

Net: opt-in-with-narrow-exception (EU/UK) vs. opt-out-with-disclosure (US) vs.
consent-with-long-validity-windows (Canada) are structurally different defaults. Segment the send
list by recipient jurisdiction before deciding whether an address may be emailed at all.

### Outbound AI-voice calls are automated calls

A synthetic voice on an outbound call is an artificial-voice call in the US by ruling and, on the
conservative reading, an automated call elsewhere — never a live one. Decide the consent basis per
called party's jurisdiction before dialling, as for a send list.
Engineering guidance, not legal advice: get legal review before any outbound AI-calling campaign.
Primary texts re-read 2026-10-17; re-verify each before launch.

- **US → prior express consent; written for telemarketing.** FCC Declaratory Ruling 24-17
  (released 2024-02-08, docs.fcc.gov/public/attachments/FCC-24-17A1.pdf ¶5 and n.13): the TCPA's
  "artificial or prerecorded voice" covers AI-generated and cloned voices, so every such call needs
  prior express consent, and prior express *written* consent when it carries an advertisement or
  telemarketing (47 CFR 64.1200(a)(2)–(3); definition at (a)(9)). Per 64.1200(b) (eCFR, current to
  2026-10-15) the call states the registered business identity at the beginning and gives a
  callback number; for telemarketing it offers an automated voice or key-press opt-out within two
  seconds of that identification, which records the do-not-call request and ends the call.
  Revocation "by using any reasonable method" — the on-call opt-out is reasonable per se — is
  honored within ten business days, and the caller "may not designate an exclusive means"
  ((a)(10)). Solicitation stays inside 8 a.m.–9 p.m. at the called party's location and off the
  National Do-Not-Call Registry ((c)).
- **US states add disclosure on top.** California Pub. Util. Code §2874, as amended by AB 2905 (in
  effect 2025-01-01), requires an unrecorded, natural-voice announcement before an automatic
  dialing-announcing device plays, which must "Inform the person called if the prerecorded message
  uses an artificial voice" (read via the california.public.law mirror; leginfo blocked the fetch). More state AI-disclosure
  statutes arrive through 2027 — check the called party's state at launch, not a vendor's map.
- **EU/EEA → opt-in.** ePrivacy Art. 13(1) allows "automated calling and communication systems
  without human intervention (automatic calling machines)" for direct marketing "only in respect of
  subscribers or users who have given their prior consent"; the member-state transposition note
  above applies.
- **UK → opt-in, consent specific to automated calls.** PECR reg. 19 bars recorded-matter direct
  marketing by an automated calling system — one transmitting "sounds which are not live speech" —
  without prior notified consent. The ICO's telephone-marketing guidance adds that general or
  live-call consent "is not enough – it must specifically cover automated calls," and that every
  automated call carries the caller's name and a contact address or freephone number; the ICO marks
  that page under review after the Data (Use and Access) Act. Whether a generated voice is "recorded
  matter" is not settled in the texts read here, so the live-call route (opt-out plus TPS screening) is not available to an AI
  agent unless counsel says so.
- **Hungary → opt-in.** Grt. 6. § (1) (njt.hu): advertising by direct contact with a natural person,
  "in particular" by email or an equivalent individual communication tool, needs prior,
  unambiguous and express consent ("előzetesen egyértelműen és kifejezetten"); under (3) it is
  revocable at any time, free and without reasons, and the person's data is deleted at once. Whether
  a phone call is such a tool, and how the electronic-communications act's automated-calling rule
  interacts (not re-read here), is a question for Hungarian counsel.

**The consent record is the evidence:** per number, who consented, when, the exact disclosure
wording, the seller named, and every revocation with channel and timestamp. The call itself —
opening, opt-out, transfer to a human — is `sales` practice
(`references/outbound-and-prospecting.md`); agent mechanics are `ai`'s
`references/surface-voice.md`. Inbound AI support lines → `success`
`references/ai-support-policy.md`.

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
- An AI-voice call list carries a per-number consent record and the called party's jurisdiction,
  and the campaign has legal review before the first dial.
- Transactional and marketing mail send from separated domains/subdomains.
- Every volatile figure cited (thresholds, penalties, ceilings) carries its as-of date and this
  reference's re-verify pointer.

## Failure modes and handoff

- **Inbox placement degraded with no code change on your side.** Check spam-complaint rate and
  DMARC alignment reports before assuming a content problem — Gmail's enforcement (§3) can trip on
  authentication drift alone.
- **A send list mixes jurisdictions with one consent assumption.** Stop and segment per §4 before
  sending — a lawful-in-the-US list is not lawful-in-the-EU by default.
- **An AI voice agent is about to dial a list consented for email or for live calls.** Neither
  covers it: re-check the basis per jurisdiction under §4's AI-voice rule before any call.
- **The request is for actual email template code or ESP configuration** → implementation is
  outside marketing's code policy; hand off the content/requirements brief instead.
- **The question is retention-experiment design on top of a working lifecycle sequence** → `growth`.
