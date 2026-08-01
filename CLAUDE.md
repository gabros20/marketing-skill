# Claude Code repository guide

This is the released `marketing-skill` (runtime skill `marketing`, under `skills/marketing/`). Read
[AGENTS.md](AGENTS.md) for the ownership boundary and non-negotiable invariants — especially:
**grade the claim before you use it, platform-reported is not incremental, date-stamp every
volatile fact and ship its re-verify check, and never name a number in order to forbid it.** This
skill does not write production code, page composition (`design`), pricing or JTBD discovery
(`product`), the analytics pipeline (`data`), experiment design and readout (`growth`), pipeline or
cold outbound (`sales`), retention communication (`success`), a model's prompts or evals (`ai`), or
the campaign workflow's mechanics (`automation`).

Run `scripts/check-sync` before any release. Keep `SKILL.md` the router; keep versions out of it.
