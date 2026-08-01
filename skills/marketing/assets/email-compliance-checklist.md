# Email Compliance and Deliverability Checklist

Two gates, in order: **can this be delivered**, then **may this lawfully be sent**. Copy is the
third question, not the first. Every figure below carries an as-of date — re-verify at build time
against the named primary source, not against this file. Source:
[`references/lifecycle-and-email.md`](../references/lifecycle-and-email.md).

## Gate 1 — Deliverability (engineering, not copywriting)

| Check | Done | Notes |
|---|---|---|
| SPF published | | |
| DKIM signing live (1024-bit RFC floor; 2048 is the practical target) | | |
| DMARC record present — `p=none` is sufficient to start | | |
| From: domain aligned to the SPF **or** DKIM domain | | |
| RFC 8058 one-click unsubscribe — `List-Unsubscribe` **and** `List-Unsubscribe-Post`, both covered by the DKIM signature | | |
| Transactional and marketing mail on **separate domains/subdomains** | | |
| Authentication confirmed **live** by test send or ESP verification — not merely configured | | |

**Cite RFC 9989 as the DMARC base spec.** RFC 7489 is obsolete: DMARCbis split it into RFC 9989
(core), 9990 (aggregate reporting), and 9991 (failure reporting), all Standards Track as of May 2026.
Most deliverability content still hasn't caught up.

**Escalation ladder:** `p=none` → `p=quarantine` → `p=reject`, moved through only after aggregate
reports confirm alignment holds. `p=reject` is the lever that actually stops domain spoofing —
skipping straight to it on an unverified setup silently drops your own legitimate mail alongside the
forgeries.

### Provider thresholds — not interchangeable

| Provider | Spam-rate ceiling | Posture | As-of |
|---|---|---|---|
| Gmail | <0.3%, target <0.10%; bulk = 5,000+/day | Hardest — escalates to rejection, not just spam-foldering | 2026-07/08 |
| Microsoft | — | Junk-routing first, may escalate later. **No enforcement date asserted** — read Microsoft's own sender-requirements page | 2026-08-01 |
| Yahoo/AOL | <0.3% | **No stated daily-volume threshold** — do not assume Gmail's 5,000/day parity by analogy | 2026-08-01 |

Gmail's 48-hour unsubscribe-honoring window is a **recommendation**, not an SLA.

## Gate 2 — The consent decision rule

Segment the send list by **recipient jurisdiction before deciding whether an address may be emailed
at all.** A single global list treated uniformly is unlawful in at least one regime it touches.

| Recipient is in | Model | What that requires |
|---|---|---|
| **EU/EEA** | **Opt-in** | ePrivacy Directive Art. 13 governs email marketing — **GDPR legitimate interest does not rescue cold email**; ePrivacy sits on top and narrows it for this channel. One exception: the Art. 13(2) soft opt-in |
| **UK** | **Opt-in** | PECR mirrors the same soft opt-in conditions. Penalty ceiling now £17.5M or 4% of global annual turnover, commenced 2026-02-05 — content citing the old £500k cap is stale |
| **US** | **Opt-out** | CAN-SPAM: cold outbound lawful by default, but the message must identify itself as an ad, carry a valid physical postal address, and honour opt-out within 10 business days. Penalty $53,088 per email (ftc.gov, primary-verified) |
| **Canada** | **Consent, with validity windows** | CASL: express or implied consent; mailing address and unsubscribe mechanism valid ≥60 days; opt-out processed without delay and no later than 10 business days. Penalties reach $1M (individuals) / $10M (businesses) |
| **Elsewhere** | **Check before sending** | Do not extend any of the above by analogy |

### The soft opt-in — all four conditions, or it does not apply

- [ ] The recipient is an **existing customer**
- [ ] Contact details were obtained **in the course of a sale** (or negotiations for one)
- [ ] Marketing is for **similar products or services only**
- [ ] An opt-out was offered **at collection and on every message since**

Three out of four is not a soft opt-in.

## Segment record — one row per jurisdiction slice

| Segment | Jurisdiction | Consent basis | Evidence of consent, and where it's stored | Cleared to send |
|---|---|---|---|---|
| | | | | |

## Gate 3 — The message

- [ ] Sender identity and a valid physical postal address present
- [ ] Unsubscribe visible, working, and honoured within the regime's window
- [ ] Renders against the real floor: no reliable flexbox or grid, table-based layout, inlined CSS,
      Outlook desktop's Word engine as the binding compatibility target
- [ ] Any persuasion mechanism passed the ethics check — a false deadline in an email is the same
      violation it is on a page
- [ ] If a model drafted this at scale, the send has a **volume ceiling enforced outside the model's
      own reasoning**, and the consent basis was checked anyway

## Boundary check

- [ ] This is acquisition-side lifecycle or the newsletter → **marketing's**
- [ ] Onboarding education after signup → `success`
- [ ] Dunning / billing-failure recovery → `product`
- [ ] Actual template markup or ESP configuration → implementation, outside marketing's code policy
      — hand off the requirements brief instead
