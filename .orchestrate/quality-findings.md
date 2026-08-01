# Quality-review findings (2026-08-01) — final fixer work order

## S-MAJOR (all three)
S1 Add the diagnostic Jobs row to SKILL.md:70-85 exactly as specified:
   `| Diagnose a decline — traffic, rankings, conversions or inbox placement fell and the cause isn't known | [seo-strategy](references/seo-strategy.md) → then the affected channel reference | Intent-and-coverage diagnosis before volume; the traffic-collapse convergence; what the available data cannot establish |`
   Keep SKILL.md ≤3,500 tokens — if the row pushes it over, trim connective prose elsewhere in
   SKILL.md (NEVER a routing fact; re-read trims for meaning).
S2 Fix the 17→19 contradiction: assets/attribution-requirements-spec.md:34 and SOURCES.md:66 →
   "19 channels (as-of 2026-08-01 — re-verify against lib/plausible/ingestion/acquisition.ex
   before citing an exact count)". Reference file already correct.
S3 Dedup pass — surfaces cite jobs, never restate. Model: surface-selfserve-saas.md:111-127's
   one-line-reshape + pointer table. Apply to:
   - Product Hunt ruleset: FULL version stays ONLY in go-to-market-and-launch.md:96-107;
     surface-zero-audience.md:46-51, surface-developer-tool.md:93-95, assets/launch-checklist.md:57-68
     → one-line + pointer (the asset may keep checkbox ITEMS but not the rule explanations).
   - CEP sample sizes: full only in marketing-science.md:100-105; surface-b2b-sales-assisted.md:94-99 → reshape+pointer.
   - 60/40 awards-corpus argument: full only in marketing-science.md:77-84; surface-b2b-sales-assisted.md:84-92 → pointer.
   - Slack ≥5-workspaces gate: full only in partnerships-pr-and-affiliates.md:64; surface-zero-audience.md:38-42 → one line + pointer.
   - 2026-05-15 spam-policy quote: verbatim quote ONLY in seo-strategy.md:85; content-strategy.md:81 and surface-agentic.md:44 → re-express + pointer.
   - b0rk 1,000+ sales: full only in organic-social-and-community.md; other two files → pointer.
   After each dedup, update that file's Contents and check inbound cross-refs still resolve.

## N-MINOR (all)
- lifecycle-and-email.md:87-111: add "Elsewhere → verify the jurisdiction before sending" row +
  one-line EU member-state divergence note (Germany's UWG §7 as the named example, no invented specifics).
- Bare sibling filenames → markdown links: marketing-science.md:20,170; audience-and-segmentation.md:21,128; positioning-and-messaging.md:177.
- Hyphen-broken link labels (stray "- " inside link text): positioning-and-messaging.md:17-18;
  marketing-science.md:110-111; audience-and-segmentation.md:15-16,83-84.
- Contents convention: add Validation/Failure-modes entries to the 8 refs missing them
  (ai-search, attribution, content-strategy, go-to-market, landing-pages, organic-social,
  paid-acquisition, seo-strategy).
- Add ONE traversal eval case exercising overlay STACKING (e.g. zero-audience founder on
  developer-tool surface → expects base surface + overlay + job ref; forbidden: none of the other
  surfaces). Follow the existing cases.json schema exactly.
- "this pack" tic (59×): reduce ONLY where the plain claim reads stronger (target the 9× in
  surface-zero-audience.md and similar "this pack's research located no X" → "no X was located");
  do not mechanically purge — keep it where it disambiguates pack vs sibling.

## Release metadata
- CHANGELOG.md: replace the 1.0.0/TODO entry with `## [0.1.0] — 2026-08-01` and a real 3–6 bullet
  initial-release summary (14 jobs × 5 surfaces + handoff, flagship attribution-and-measurement,
  5 assets, 4 eval suites; evidence-graded, anti-staleness dated facts).
- .codex-plugin/plugin.json (and any other version field check-sync tracks): 1.0.0 → 0.1.0.

## After
scripts/check-sync green; lint: SKILL.md ≤3,500 tokens; re-grep never-ship list unchanged; report
per-finding one line + final token counts for the 5 previously-over-threshold refs. Do NOT commit.
