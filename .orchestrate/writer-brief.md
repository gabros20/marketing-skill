# Shared writer brief — marketing pack composition (2026-08-01)

You are writing reference files for the `marketing` skill pack at
`/Users/tamas/Documents/Personal/Projects/marketing-skill/skills/marketing/references/`.

## Read IN THIS ORDER before writing anything
1. `research/synthesis.md` (in the repo) — **THE BINDING GATE**: wedge, rulings R1–R16, the
   cleared-facts table (§5 — the ONLY volatile numbers you may ship, with as-of dates), the
   never-ship list, licensing clauses (§6). Any conflict between a source and this file resolves
   to this file.
2. `research/charter.md` — report rules, credibility ladder, quote caps (≤2/source, <25 words).
3. `/Users/tamas/Documents/Personal/Projects/digital-product-skill/docs/high-signal-skill-authoring-standard.md`
   — the house authoring standard. Follow it.
4. Your assigned channel-report sections and `_raw/` files (per your task prompt) — your CONTENT.
5. One shipped sibling reference for style calibration:
   `/Users/tamas/.claude/skills/automation/references/` (any file) — match its density and voice.

## House rules (binding)
- Each reference: dense, 1,200–2,200 tokens target (hard warn 2,500; never exceed ~4,000).
  First 80 lines must carry `Purpose:` / `Read when:` / `Skip when:` / `Inputs:` / `Produces:`.
  Files >100 lines need a `## Contents` section.
- Volatile facts (prices, quotas, thresholds, percentages, policy values, versions): ONLY from
  synthesis §5 cleared-facts, WITH their as-of dates and a re-verify pointer. The never-ship list
  is absolute. Stable mechanisms and terminology need no gate.
- Anti-staleness (R11): teach the check, not the list, wherever platform behavior can move.
- Specimen vs evidence (R10) and honest-limits framing (R12/R13/R14) are the pack's character —
  write them into the fabric, not as disclaimers.
- Licensing (synthesis §6): verbatim quotes only from cleared sources within caps; facts-only
  sources re-expressed; book frameworks cited to the original books, never to compiler repos.
  X posts: attribute by handle + date.
- Cross-references: cite family packs by NAME and concept ("design's eight-beat landing-page
  anatomy"), never by bare invariant number. Boundaries per synthesis §3: marketing writes copy
  and requirements, not production code; design owns page composition; product owns pricing tiers;
  growth owns experiments; data owns pipelines; quality owns audits; sales owns pipeline;
  success owns onboarding education.
- Do NOT touch `SKILL.md`, `openai.yaml`, `plugin.json`, `SOURCES.md`, other writers' files, or
  `references/example.md` (integrator's cleanup). Write ONLY your assigned files.
- Every factual claim you take from a report keeps its provenance available: if a claim in your
  source carries UNVERIFIED, either drop it or ship it explicitly marked as unverified folklore
  (when the folklore itself is the teaching point).
- Style: prose-first, tables only for enumerable facts; no filler; no "in today's fast-paced
  world" register — this is an engineering-grade pack that happens to be about marketing.

## Report back (inline, <600 tokens)
Files written with line/token counts · the 3 hardest judgment calls you made and how you ruled ·
any conflict with synthesis.md you could NOT resolve (STOP and report rather than improvise) ·
claims you dropped for licensing/verification reasons.
