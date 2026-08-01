# Usage reference

## Activation

`marketing` should trigger on requests to **position a product and create, capture, or attribute
demand for it** — writing positioning and messaging, planning a launch or a go-to-market motion,
diagnosing an SEO or AI-search decline, briefing a landing page's claims and proof, fixing email
deliverability or deciding whether a list is lawful to send to, deciding whether to spend on ads,
choosing a social or community strategy, pitching a partnership or press outlet, optimizing an
app-store listing, or judging whether a channel, campaign, or launch actually worked. Realistic
triggers: "write the positioning for my SaaS product against these three competitors," "plan a
Product Hunt launch," "our AI Overviews traffic collapsed and I don't know why," "brief a landing
page for this new pricing tier," "our welcome email is landing in spam," "did this ad spend
actually cause any of these signups," "should we pitch this journalist," "our app's ASO isn't
converting downloads."

It should **not** trigger on: "build the site, the JSON-LD, the sitemap, or the tracking pixel"
(`frontend` / `backend`), "design the landing page's layout or section order" (`design` —
`marketing` supplies what the page must claim and prove, not how it's composed), "set the price or
the tier structure" (`product`), "run this A/B test and tell me if it won" (`growth`), "manage the
CRM pipeline or write cold outbound" (`sales`), "write onboarding or retention emails" (`success`),
"build or certify the analytics pipeline" (`data`), "audit this live site for crawlability or
accessibility" (`quality`), "deploy this" (`operate`), or "design the model's prompt or evals"
(`ai`) — unless the request also requires the positioning, the requirement, or the measurement
specification themselves.

Use `/marketing` as documentation shorthand only. Codex explicit invocation is `$marketing`; other
clients use an `@` mention, a skill tool, or natural-language activation.

## Mission and boundary

`marketing` positions the product, then creates, captures, and attributes demand for it — what the
product is and who it's for in words a buyer believes, the launch, being found in search and AI
answers, the page that converts the visit, the email that arrives, the ad budget and whether it did
anything. The scope is the full external-demand surface: positioning, audience, launch, SEO, AI
search, content, landing pages, email and lifecycle, paid, social and community, partnerships and
PR, app-store optimization, and measurement.

The default reader is one person building a digital product, with a small budget and no analytics
team — not a simplification of enterprise practice, but a change in the answers: platform
attribution over-claims by construction, a valid lift test needs scale almost nobody has, and
marketing-mix modeling needs years of weekly data. `marketing` writes copy, requirements, briefs,
plans, and measurement specs — no production code. It works standalone when invoked alone, uses
supplied upstream artifacts without silently overriding them, recommends adjacent skills for work
it doesn't own, and never silently invokes them.

## Workflow

1. Establish the one primary job and the base surface; add an overlay only if it applies. State any
   surface you assumed — if the request names no business model, default to self-serve SaaS.
2. Name the audience by its buying situation, and the one thing this work should make happen.
3. Grade every claim, statistic, or "best practice" relied on, and state where its evidence stops.
4. Re-verify every volatile platform fact against its primary source; carry the as-of date with it.
5. Produce the artifact — brief, plan, copy, or requirements spec — with a named proof source
   behind every claim.
6. Decide how you will know whether it worked, honestly at the actual scale, and write the decision
   rule down before the result exists.
7. Check every persuasion mechanism, and any agent-generated output, against the ethics table.
8. Emit a compact handoff when downstream work is expected.

## Route by job

| User intent | Reference | Expected contribution |
|---|---|---|
| Judge whether a channel, campaign, or launch actually worked, and what your scale can support | `references/attribution-and-measurement.md` | **Flagship.** The honesty hierarchy of measurement methods; why platform-reported ≠ incremental; the n=1 answer |
| Say what the product is, who it's for, and why it beats the alternatives | `references/positioning-and-messaging.md` | Dunford's five components as craft, never as science; category and competitive framing; the messaging ladder |
| Decide who to market to, or challenge a persona that names no buying situation | `references/audience-and-segmentation.md` | Category entry points over persona theater; the JTBD seam with `product`; the consent-regime checkpoint |
| Grade a "brand science" claim, a named statistic, or a budget-split rule of thumb | `references/marketing-science.md` | The adjudication layer; the evidence ladder; the laws with their domain boundaries |
| Choose a go-to-market motion, or plan and run a launch | `references/go-to-market-and-launch.md` | Four motions and the brutal middle; launch ≠ release ≠ deploy; Product Hunt's enforceable rules |
| Decide what to rank for, or check an SEO claim against what Google actually documents | `references/seo-strategy.md` | Keyword-intent mapping; four myths Google's own dated docs kill; the structured-data requirement handed to `frontend` |
| Decide what to do about visibility inside ChatGPT, Perplexity, AI Overviews, or Copilot | `references/ai-search.md` | The platform divergence on GEO; the crawler matrix per bot; llms.txt falsified by four evidence classes |
| Decide what content to produce, brief a writer, or set an editorial cadence | `references/content-strategy.md` | Distribution beats production; what a brief must specify; the traffic-collapse convergence |
| Brief a landing, campaign, or pricing page — the claims, the proof, the objections | `references/landing-pages-and-conversion.md` | The requirements brief `design` composes against; Attention Ratio and the one-goal doctrine; the ethics table |
| Get marketing email delivered, and decide whether a list is lawful to send to | `references/lifecycle-and-email.md` | Deliverability as engineering first; the four consent regimes; where lifecycle hands off to `success` |
| Decide whether to spend on ads, which format, and when it's premature | `references/paid-acquisition.md` | What ATT changed and didn't; zero independent incrementality evidence; when paid is premature |
| Choose between a brand account, a founder account, or an owned community | `references/organic-social-and-community.md` | Brand-account reach vs. founders, stated at its real evidence tier; what stays folklore |
| Earn distribution through someone else's audience — press, marketplaces, affiliates | `references/partnerships-pr-and-affiliates.md` | The site-reputation-abuse warning; marketplace traction gates; FTC disclosure |
| Get a mobile app found and installed — listing copy, keywords, store experiments | `references/app-store-optimization.md` | Hard character limits per store; two keyword-stuffing enforcement philosophies; per-market localization |

Surface overlays (`surface-selfserve-saas`, `surface-b2b-sales-assisted`, `surface-developer-tool`,
`surface-zero-audience`, `surface-agentic`) reshape the primary job for that context.
`surface-selfserve-saas` is the default when nothing else applies. Always stack
`surface-zero-audience` and `surface-agentic` additively on top of a base surface — never in place
of it.

## Outputs and completion

| Output | Complete when |
|---|---|
| Positioning and messaging | Every claim has a named proof source and Dunford's framework is presented as craft, not science |
| Go-to-market and launch plan | The motion is named, launch is distinguished from deploy and release, and platform rules (e.g. Product Hunt) are checked |
| Attribution requirements spec | The measurement method is matched to actual scale, and a decision rule is written down before the result exists |
| Landing-page requirements brief | The one goal, every claim, its proof, and the objections it must answer are stated for `design` to compose against |
| Lifecycle/email plan | The consent basis is named per jurisdiction before any copy is written |
| SEO / AI-search strategy | Every platform claim traces to primary documentation with an as-of date |
| Paid acquisition plan | Incrementality evidence (or its absence) is stated, not assumed from platform reporting |

When downstream work is expected, provide artifact paths, owners, residual risk, and a recommended
next skill — typically `design` and `frontend` to build the page, `data` to instrument the
measurement, or `growth` to test a hypothesis marketing proposed — without duplicating the full
artifact.
