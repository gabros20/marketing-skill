# Recipes

Use the invocation form supported by your client. The examples below use Codex's explicit
`$marketing` form.

## Write positioning against named competitors

Use when: you need to say what the product is, who it's for, and why it beats named alternatives —
before writing a single line of landing-page copy.

```text
Use $marketing to write positioning for my product against these three named competitors.
```

Route: primary job `positioning-and-messaging` — Dunford's five-component framework, presented as
craft with no empirical validation, never dressed up as science. Cross to `audience-and-
segmentation` first if the buying situation isn't already named: category entry points over persona
theater, because a positioning statement written against a demographic instead of a buying
situation collapses the first time it meets an objection. Output: a filled `positioning-canvas.md`
with every claim traced to a named proof source, ready to hand to `design`/`frontend` for the page
and to `content-strategy` for the messaging ladder downstream copy will reuse.

## Plan a Product Hunt launch

Use when: a launch date is set or wanted, and you need the motion, the tier, and the platform rules
that can get a post penalized rather than featured.

```text
Use $marketing to plan a Product Hunt launch for this release and tell me what will get it
penalized.
```

Route: primary job `go-to-market-and-launch` — launch ≠ release ≠ deploy is the load-bearing
distinction (`operate` owns the deploy; `marketing` owns when and how the already-deployed thing
gets announced), and Product Hunt's enforceable rules are named explicitly, including the ban on
soliciting upvotes. Output: a filled `launch-checklist.md` naming the launch tier (major/minor/
silent), the owned/rented/borrowed channels in play, and the failed-launch pattern checked against
before the date is locked.

## AI Overviews traffic collapsed and I don't know why

Use when: organic or AI-referred traffic dropped and the cause isn't obvious — a ranking change, a
removed rich result, or a genuine demand shift could all look the same from the outside.

```text
Use $marketing to find out why our AI Overviews and organic traffic collapsed last month.
```

Route: primary job `seo-strategy` first for intent-and-coverage diagnosis before volume — the
traffic-collapse convergence and the myths Google's own dated documentation kills. Cross to
`ai-search` for the platform-specific mechanics: the crawler matrix per bot, and llms.txt's status
as falsified-by-four-independent-evidence-classes rather than a fix to reach for reflexively.
Output: a diagnosis stating what the available data can and cannot establish, before any remediation
plan is proposed.

## Brief a landing page for a new pricing tier

Use when: a page needs to convert a specific visit, and the claims, proof, and objections it must
carry aren't written down yet.

```text
Use $marketing to brief a landing page for this new pricing tier — the claims, the proof, and the
objections it needs to answer.
```

Route: primary job `landing-pages-and-conversion` — the requirements brief marketing owns and
`design` composes against, never the other way around; the Attention Ratio and one-goal doctrine;
every persuasion mechanism (scarcity, anchoring, social proof) checked against the ethics/dark-
patterns table before it ships. Output: a filled `landing-page-requirements-brief.md` with the one
goal, every claim's proof source, and the objections list — handed to `design` for composition and
`frontend` for the structured-data requirement.

## The welcome email is landing in spam

Use when: a transactional or lifecycle email isn't reaching the inbox, and the cause could be
authentication, list hygiene, or content — three different fixes that look identical from a bounce
report.

```text
Use $marketing to find out why our welcome email is landing in spam and fix the deliverability
problem.
```

Route: primary job `lifecycle-and-email` — deliverability is treated as engineering first: SPF,
DKIM, and DMARC, with DMARC's supersession of the older two mechanisms named explicitly, and
provider-specific divergence (Gmail vs. Yahoo bulk-sender rules) checked before touching subject
lines. Before any send goes out to a wider list, the consent-regime checkpoint applies: segment by
jurisdiction, because a single global list treated uniformly is unlawful in at least one regime it
touches. Output: a deliverability diagnosis plus a filled `email-compliance-checklist.md` naming
the consent basis per segment.

## Did this ad spend actually cause any of these signups?

Use when: a dashboard reports a ROAS or CAC number, and you need to know whether to trust it before
increasing or cutting spend.

```text
Use $marketing to tell me whether last month's ad spend actually caused these signups, or whether
they'd have converted anyway.
```

Route: primary job `attribution-and-measurement` ⭐ — the flagship. Platform-reported conversions
answer "what fired," never "what was incremental" — that single sentence is the load-bearing claim
of the whole file. A published field experiment (eBay, *Econometrica* 2015) found naive paid-search
ROI estimates of over 4,100% collapse to −63% under a real randomized experiment; the same
mechanism is why retargeting is the format most likely to overstate its own incrementality. Since a
valid lift test needs scale almost nobody has and MMM needs years of weekly data, the n=1 answer
applies: UTM discipline, self-reported attribution, geo-split lift where geography allows, and a
decision rule written down *before* the number exists. Output: a filled
`attribution-requirements-spec.md` naming the measurement method actually available at this scale
and what it cannot answer — handed to `data` if and when the business crosses into MMM-viable data
history.
