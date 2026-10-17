# Changelog

All notable changes to **marketing** are documented here.

The release procedure synchronizes `.codex-plugin/plugin.json`, this changelog, git tag
`v<version>`, and the matching GitHub Release. Runtime `SKILL.md` contains no version metadata.

## [Unreleased]

### Added
- Queue unreleased changes here.

## [0.3.1] — 2026-10-17

### Fixed
- `AGENTS.md`, `README.md`, and the site's family strip no longer call `growth`, `sales`, and
  `success` unshipped; the site links all three packs.

## [0.3.0] — 2026-10-17

### Added
- [lifecycle-and-email](skills/marketing/references/lifecycle-and-email.md) §4 gains "Outbound
  AI-voice calls are automated calls": the consent basis for an AI voice agent's outbound calls by
  jurisdiction — US (FCC 24-17 artificial voice; 47 CFR 64.1200 consent tiers, identification,
  automated opt-out, ten-business-day revocation, calling hours; California §2874's artificial-voice
  disclosure), EU/EEA (ePrivacy Art. 13 opt-in), UK (PECR reg. 19 opt-in with automated-call-specific
  consent) and Hungary (Grt. 6. § opt-in). Primary texts re-read 2026-10-17; legal review required
  before any campaign; per-number consent record (including revocation channels offered) as the
  evidence. Covers the emergency/exemption qualifier, greet-then-transfer as still an artificial-voice
  call, the voicemail toll-free opt-out, PECR 19(2)(b) caller-line identity, and Grt. 6. § (6)
  post-and-email revocation; ePrivacy cited to EUR-Lex.
- Router row, `sales` handoff row, SOURCES row, and one traversal eval reach the AI-voice consent rule.

## [0.2.0] — 2026-10-17

### Added
- Practitioner fold for founder-led and solo distribution:
  [organic-social-and-community](skills/marketing/references/organic-social-and-community.md) §6
  treats the founder profile as the account's landing page. It also covers what a comment gate's
  replies do and don't measure, and LinkedIn's dated engagement-bait stance (2026-03-12) beside an
  unverified X policy. The folklore list now names engagement-benchmark tables and
  connection-count thresholds.
- [surface-zero-audience](skills/marketing/references/surface-zero-audience.md): proof without
  customers is the work itself. Adds the checkable artifacts and five false-proof patterns.
- [partnerships-pr-and-affiliates](skills/marketing/references/partnerships-pr-and-affiliates.md)
  §4: the free-pilot testimonial as a §255.5 material connection, and §465.4's sentiment rule
  scoped to consumer reviews (eCFR, 2026-10-17).
- Never tag an internal link with UTMs, added to the flagship's n=1 answer and the attribution
  spec asset (Plausible docs, 2026-10-17).
- Landing brief: a "who this page is not for" line, and objections sourced from real
  conversations. Positioning: the one-surface/several-audiences rule and scope-vs-belief taglines.
  Content strategy: free tools as content, with their truth and consent checks.
- Follow-gated followers and repo stars/forks named as interest, not use (organic §6). Curated-list
  submission treated as a gated channel (developer-tool surface). Tool/vendor logos are not
  customer logos (landing §3). Two new adjudications recorded in SOURCES §4.
- Router rows reach the founder-profile and free-tool folds; 2 output evals and 1 traversal eval
  added.

## [0.1.1] — 2026-08-01

- Fix: "Diagnose a decline" router row now names `content-strategy` in its read path — the
  traffic-collapse convergence it advertises lives there, not in `seo-strategy`. Caught by the
  installed smoke test (a cold agent following the table literally dead-ended on the promised
  content).

## [0.1.0] — 2026-08-01

### Added
- Initial release: 14 jobs × 5 surfaces (3 base + 2 additive overlays) plus a handoff reference,
  covering positioning, launch, SEO/AI-search, content, landing pages, lifecycle email, paid,
  organic social, partnerships/PR, and ASO.
- Flagship [attribution-and-measurement](skills/marketing/references/attribution-and-measurement.md)
  ⭐ — the honesty hierarchy of measurement methods, why platform-reported ≠ incremental, and the
  n=1 answer for builders without an analytics team.
- 5 fill-in assets: positioning canvas, landing-page requirements brief, launch checklist,
  attribution requirements spec, email compliance checklist.
- 4 eval suites (traversal, output, activation, compression-ablation) verifying routing, artifact
  quality, and resistance to compression.
- Evidence-graded throughout: every empirical claim carries its tier and domain boundary; every
  volatile platform fact (store limits, spam thresholds, penalty amounts) ships with an as-of date
  and a re-verify pointer instead of being presented as permanent.

[0.3.1]: https://github.com/gabros20/marketing-skill/releases/tag/v0.3.1
[0.3.0]: https://github.com/gabros20/marketing-skill/releases/tag/v0.3.0
[0.2.0]: https://github.com/gabros20/marketing-skill/releases/tag/v0.2.0
[0.1.0]: https://github.com/gabros20/marketing-skill/releases/tag/v0.1.0
