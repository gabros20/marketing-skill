# Surface: Agentic (Additive Overlay)

Purpose: Add what changes when a model authors marketing output at scale, decides a spend or send
without a human in the loop, or when the audience being marketed *to* increasingly includes other
agents rather than only people. **This is an overlay** — it stacks on a base surface
([surface-selfserve-saas](surface-selfserve-saas.md),
[surface-b2b-sales-assisted](surface-b2b-sales-assisted.md), or
[surface-developer-tool](surface-developer-tool.md)) and never replaces one.

Read when:
- Content is being generated or published at a scale no human is individually reviewing before it
  ships.
- A model decides a spend amount, a send list, or a publish action rather than a human approving
  each one.
- The question is whether the product or brand will be found, cited, or shortlisted by an AI system
  acting on a buyer's behalf, not only by a human searching directly.

Skip when:
- A model drafts a single piece of copy that a human reviews before it ships — that is a bounded
  tool call inside the base surface's normal workflow, not this overlay.
- The question is the model's own prompt, retrieval, or evaluation quality — that is `ai`'s ground;
  this overlay only owns the deterministic envelope around a marketing action, the same split
  automation's own agentic overlay draws for workflow steps.

Inputs: the base surface already chosen, and an inventory of which marketing actions in scope are
model-decided (spend, send, publish) rather than human-approved per instance.

Produces: a spend/send ceiling for every agentic marketing action, a stated position on scaled
content per the information-gain rule below, and confirmation that the pack's ethics/dark-patterns
table was applied to the agent's output, not silently skipped because no human drafted it.

## Contents

- [Scaled content is purpose-tested, not authorship-tested](#scaled-content-is-purpose-tested-not-authorship-tested)
- [The blast radius of slop is domain reputation](#the-blast-radius-of-slop-is-domain-reputation)
- [Being marketed to by agents](#being-marketed-to-by-agents)
- [Guardrails for agent-decided spend and sends](#guardrails-for-agent-decided-spend-and-sends)
- [The ethics table binds agents identically](#the-ethics-table-binds-agents-identically)
- [Failure modes](#failure-modes)

## Scaled content is purpose-tested, not authorship-tested

Google's spam policies (developers.google.com/search/docs/essentials/spam-policies, last updated
**2026-05-15**) classify **scaled-content abuse by its purpose, not by whether AI wrote it** —
"Google penalises AI content" is false as stated, and this pack does not ship it. The durable rule
that survives the platform-behavior detail is **information gain**: content generated at scale that
adds no signal a reader couldn't already get elsewhere is the target, regardless of whether a human
or a model produced it; content that adds real information gain is not penalized for its authorship.
An agent generating marketing content at volume should be held to this rule explicitly — "did a
human write this" is not the test that matters, and treating it as the test either overclaims safety
(assuming AI content is fine because a human reviewed the prompt) or overclaims risk (assuming any
AI-generated page is inherently penalized). Neither is what the primary source says.

## The blast radius of slop is domain reputation

An agent that drafts and sends at scale without limits does not fail by erroring — it fails by
continuing, the same pattern `automation`'s own agentic overlay documents for any unbounded agentic
step. On this surface, the concrete cost of that failure mode is
**domain and sender reputation**, not just wasted spend: a scaled-content publishing agent that drifts
into low-information-gain output risks the site's crawl and ranking standing; a scaled-send agent
that drifts past deliverability thresholds risks the sending domain's reputation with mailbox
providers. See [lifecycle-and-email.md](lifecycle-and-email.md) for the specific spam-rate and
authentication mechanics this can damage — the point here is that an agentic step's blast radius on
this surface is not scoped to the single piece of content it produced; it is scoped to every future
message or page that shares the same domain.

## Being marketed to by agents

The reciprocal case matters as much as the generation case: buyers increasingly ask an LLM for a
shortlist before they visit a site directly, which means being present in the systems an agent
consults — review sites, comparison content, and structured data — is now itself a marketing surface,
not a side effect of SEO. [ai-search.md](ai-search.md) carries the crawler matrix (which bots exist,
what each is permitted to do, and how fast that list moves) and the platform-divergence detail
between engines; this overlay only names the seam — a page an AI-search crawler cannot read is
invisible to an agent doing pre-purchase research on a human's behalf, the same way an unindexed page
is invisible to a human searcher.

## Guardrails for agent-decided spend and sends

Where a model decides a paid-spend amount or a send-list scope rather than a human approving each
instance, this pack adopts the same independence move `automation`'s agentic overlay names for any
unbounded agentic step: **pre-commit the rule before the run, and enforce it structurally, not by
instruction.** A spend ceiling set in the ad platform's own account-level cap, a send-volume ceiling
tied to the sending domain's current reputation standing, and a kill switch that stops the campaign
from outside the agent's own loop are the marketing-specific instances of the same envelope
automation's overlay teaches for any agentic step — see that reference for the full mechanism (spend
ceiling in the credential itself, not a prompt asking the model to stay under budget; a wall-clock or
volume deadline independent of whether the model believes it is still making progress). This overlay
does not re-derive that mechanism; it applies it to a marketing spend or send decision specifically.

## The ethics table binds agents identically

The pack's ethics and dark-patterns table (R6) is a marketing pack-level invariant, and it applies to
agent-generated output exactly as it applies to human-drafted output — an agent is not an exemption
from the disclosure, consent, and manipulation-pattern rules the rest of the pack teaches. A
model-drafted email still needs the consent basis its jurisdiction requires; a model-drafted landing
page still needs honest claims and proof, not a persuasive pattern a human reviewer would have
rejected. If an agent's output was not checked against that table because "a human didn't write it,"
that is the gap this section exists to close.

## Failure modes

- Treating "the content was AI-generated" as either an automatic pass or an automatic fail against
  Google's spam policy — the test is purpose (information gain), not authorship.
- An agent-run content or send pipeline with no spend/volume ceiling enforced outside the agent's own
  reasoning — the ceiling has to live in the credential or the platform's own cap, not in an
  instruction the agent could reason around.
- Skipping the ethics/dark-patterns table for agent-drafted copy on the assumption that human review
  of the prompt substitutes for review of the output.
