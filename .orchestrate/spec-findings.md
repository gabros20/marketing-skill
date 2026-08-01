# Spec-review findings (2026-08-01) — fix ALL, in this order

## BLOCKER
B1 attribution-and-measurement.md:196-198 — claims "17 acquisition channels" then enumerates 19
   names. RE-COUNT against the actual source: fetch
   https://raw.githubusercontent.com/plausible/analytics/master/lib/plausible/ingestion/acquisition.ex
   and correct BOTH the number and the list (trim the enumeration to a few examples + "N channels
   total, as-of date" rather than a full list that can drift).
B2 surface-selfserve-saas.md:60-61 and :128 — DELETE the "68% / 36.4%" pair in both places; keep
   directional claim + methodology-hygiene lesson only.
B3 ai-search.md:102, :105-106 — either NAME each study with its date (SE Ranking study, 2026;
   server-log study) or drop the ~300,000 / 137,000+ / 97% magnitudes; must not contradict
   :108-109. Prefer: name + date, since the falsification evidence is load-bearing.
B4 @simonw quoted 3× (content-strategy.md:142-143, organic-social-and-community.md:98-99,
   surface-developer-tool.md:42-43) — keep verbatim ONLY in surface-developer-tool.md; re-express
   the other two.

## S-MAJOR
S1 Strip numerals shipped-to-forbid: 46/54 at marketing-science.md:86-87,91 +
   surface-b2b-sales-assisted.md:87-88,100,119 (keep only "B2B differs; verify"); "75% judge on
   design" numeral at landing-pages-and-conversion.md:73; "~32,000 organic app users" at
   surface-zero-audience.md:58-59. Mechanism + verify instruction stays; numbers go.
S2 landing-pages-and-conversion.md:134-146 — replace the vertical table's "Structure (order)"
   column with "What it must prove"; sequences belong to design (R7).
S3 Add 1-2 minimal schema.org JSON-LD examples (Organization + one page-type) to
   seo-strategy.md's structured-data section OR a new assets/structured-data-examples.md, and make
   handoff.md:38 accurate. Schema.org vocabulary is the source; keep examples tiny and dated.
S4 content-strategy.md:100-103 — name @randfish's commercial interest (sells a book on the
   zero-click thesis) at point of use; that disclosure IS the lesson.
S5 Single-home: @Prathkum quote → keep in organic-social-and-community.md:76, re-express in
   surface-developer-tool.md:81-83; simonw+b0rk counterpoints unit → home in
   organic-social-and-community.md, content-strategy.md links; Poyar ICP → home in
   audience-and-segmentation.md, surface-b2b-sales-assisted.md:107-110 points.
S6 positioning-and-messaging.md:82-86 — credit @jasonlk at first use of displace-vs-discretionary.
S7 SOURCES.md:48-50 — make true: either add the incumbent's unsourced llms.txt claim as a specimen
   in ai-search.md (cleared: it asserts AI systems parse llms.txt with no source, per research)
   or reword SOURCES.md to cite the OKF v0.1 specimen that IS there.
S8 Re-express build jargon: ai-search.md:62 "this worker" → "this pack's research";
   surface-zero-audience.md:82-84, :103-104 → reader-facing phrasing ("research for this pack
   found/could not…" without X-sweep/worker/channel vocabulary).

## N-MINOR (fix all; cheap)
- app-store-optimization.md:93-94 add "per Google's docs, as-of 2026-08" to the 1+5 experiments
  limit; :121-122 add date+handle framing (already attributed? ensure "live n=1, 2026-07").
- lifecycle-and-email.md:139-140 drop the star count; :53 DKIM 1024/2048 add "per RFC 6376 /
  practice" (also assets/email-compliance-checklist.md:13).
- IPA "roughly 1,000 case studies" → "a self-submitted awards corpus" (marketing-science.md:80,
  surface-b2b-sales-assisted.md:85). Pew "~900 US adults" keep (it IS cleared — Pew panel row) but
  add fielded date at seo-strategy.md:151 if absent. "90%+ of accounts" at
  surface-b2b-sales-assisted.md:42 → strip numeral or mark unverified-practitioner-claim.
- content-strategy.md:126-129 — stop naming design's three ladder tiers; cite the ladder by name.
- ai-search.md:45-46 — add the point-of-use softening (staleness as evidence of volatility, not
  maintainer criticism).
- attribution-and-measurement.md:204-206 — re-express the AGPL code comment; cite file path, no
  verbatim comment text.
- AARRR near-duplicate: keep SKILL.md version; compress handoff.md:49-57 to one line + pointer.

## After fixing
Run scripts/check-sync and lint; confirm no new never-ship leaks (re-grep); report per-finding
fixed/skipped with one line each. Do NOT commit.
