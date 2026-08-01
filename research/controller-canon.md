# Controller canon — marketing (written 2026-07-31, BEFORE any stage results)

Purpose: the controller's own trained-knowledge channel, recorded before worker results land so it
cannot be contaminated by them. At synthesis, everything here competes with worker findings on
equal terms and must be independently verifiable before it ships. Anything here may be wrong or
stale — my knowledge cutoff is January 2026.

## 1. Positioning and messaging (the likely flagship)

- **April Dunford, *Obviously Awesome*** — the practitioner-canonical positioning process:
  competitive alternatives → unique attributes → value (proven) → best-fit customers → market
  category → (optional) relevant trend. Positioning is an input to messaging, not a tagline
  exercise. Her later book *Sales Pitch* extends it to the sales narrative.
- **Ries & Trout, *Positioning*** (1981) — positioning happens in the prospect's mind against what
  they already know; you position against an anchor, not into a void.
- **Category design** — *Play Bigger* (Ramadge et al.); create-your-own-category strategy. High
  variance, mostly survivorship-biased case studies; treat skeptically.
- **Geoffrey Moore, *Crossing the Chasm*** — beachhead segment, whole product, technology adoption
  life cycle. Still the standard B2B early-market frame.
- **JTBD (Christensen/Klement/Moesta)** — demand-side segmentation: segment by the job and the
  struggling moment, not demographics. `product` owns JTBD for discovery; marketing uses it for
  message-market fit.
- Messaging architecture: one core claim per audience, laddering (feature → benefit → outcome),
  message testing (five-second tests, landing-page smoke tests — the latter crosses into growth).

## 2. The empirical marketing-science canon (the folklore-falsifier)

This is the literature most practitioner content ignores or contradicts — the likely wedge.

- **Ehrenberg-Bass Institute / Byron Sharp, *How Brands Grow*** — evidence-based laws:
  - **Double jeopardy**: small brands have fewer buyers who are also less loyal. Loyalty programs
    can't escape it; growth comes from penetration, not loyalty.
  - **Duplication of purchase**: your buyers buy competitors in proportion to competitor size.
  - **Mental availability** (being thought of in buying situations — category entry points) and
    **physical availability** (being easy to find and buy) explain growth.
  - **Distinctive assets** (logos, colors, characters) beat "differentiation" messaging; buyers
    barely notice differentiation.
  - **Light and non-buyers matter most**; heavy-buyer targeting is a trap (Pareto is ~50/50 not
    80/20 in most categories).
- **The 95-5 rule** (John Dawes, Ehrenberg-Bass for LinkedIn B2B Institute) — at any moment ~95% of
  the category is not in-market; advertising mostly builds memory for future buyers, not capture of
  current ones.
- **Binet & Field, *The Long and the Short of It*** — brand building vs sales activation; ~60/40
  budget split heuristic; activation spikes decay, brand compounds; **ESOV** (excess share of
  voice) predicts share growth.
- **Category entry points (CEPs)** — Jenni Romaniuk; the buying situations a brand must be linked
  to. The rigorous replacement for persona theater.
- Tension to preserve honestly: Sharp's laws are strongest for large consumer brands; their
  application to a zero-audience B2B SaaS at n=1 is contested. The pack must say where the
  evidence's domain ends.

## 3. SEO and the AI-search shift

- **Primary source: Google Search Central documentation** (developers.google.com/search) — the
  checkable canon, equivalent role to vendor API docs in `automation`. Also: Search Quality Rater
  Guidelines (E-E-A-T lives there; it is a rater rubric, **not** a direct ranking factor), the
  spam policies, and the ranking-systems guide (helpful content system was absorbed into core
  ranking, March 2024).
- Working taxonomy: technical (crawl/render/index — mostly `frontend`/`backend`/`quality` in our
  family) · content/on-page · authority (links, digital PR). Search intent classes: informational /
  commercial / transactional / navigational. Topic clusters and internal linking as strategy-level
  concerns.
- **The AI-search shift (volatile — must be researched fresh):** AI Overviews and LLM answers
  reduce clicks (zero-click growth); GEO/AEO ("generative/answer engine optimization") is a
  folklore-rich nascent field; `llms.txt` proposed but adoption unclear; citations-from-LLMs as an
  emerging acquisition channel. Expect heavy snake oil here.
- Programmatic SEO; the family's binding rule: **marketing owns SEO outcome/strategy and the
  keyword-intent map; implementation and verification stay with the owning packs** (canonical
  ownership table, 10 rows).

## 4. Attribution and measurement (the likely I15-class honesty zone)

- **Every ad platform's reported conversions over-claim** (view-through, double counting across
  platforms; platform sums routinely exceed total revenue).
- **MTA (multi-touch attribution) collapsed** post-ATT (iOS 14.5, 2021) and third-party-cookie
  decay; last-click remains a default lie everyone knows is wrong.
- **The triangulation consensus**: MMM (media/marketing mix modeling) for budget allocation +
  **incrementality experiments** (geo-lift, holdouts, conversion-lift) as ground truth + touch
  attribution only for directional signal. Open-source MMM: **Meta Robyn** and **Google Meridian**
  (both open source — licenses must be verified fresh).
- UTM discipline, self-reported attribution ("how did you hear about us") as a legitimate
  complement — HockeyStack/Dreamdata-style B2B evidence that dark social is under-measured.
- Family boundary: marketing writes the **attribution requirements spec**; `data` builds and
  certifies the pipeline; `growth` owns the experiment readouts.

## 5. Launch and GTM

- **`operate` I1: deploy ≠ release ≠ launch — launch belongs to marketing.** Pre-declared
  inheritance; the launch reference must exist and must connect back.
- Launch is repeatable, not a moment ("launch again" — practiced by Product Hunt culture and
  keynote-driven companies alike). Launch tiers (major/minor/silent) map to release trains.
- GTM motions: product-led (self-serve) vs sales-led vs community-led vs partner-led; the motion
  choice reshapes every downstream job — candidate **surface axis** for the pack.
- Zero-audience/pre-launch: build-in-public, waitlists, founder-led distribution, "do things that
  don't scale" (Paul Graham), first-100-users playbooks. Candidate additive overlay.

## 6. Lifecycle and email

- **Deliverability is the hard engineering constraint**: SPF, DKIM, DMARC alignment;
  **Gmail/Yahoo bulk-sender requirements (enforced from Feb 2024)** — authenticated domain,
  one-click list-unsubscribe (RFC 8058), spam-rate < 0.3% (Postmaster Tools). These are checkable
  primary sources.
- Law differs by jurisdiction and this matters: **GDPR/PECR (opt-in consent) vs CAN-SPAM (opt-out
  + honest headers + physical address) vs CASL (express or implied consent, strictest penalties)**.
  Primary legal texts are checkable.
- Transactional vs marketing mail must be separated (streams, domains/subdomains, consent basis).
- Lifecycle stages: welcome, activation nudges, win-back, dunning — **boundary hazard**: onboarding
  education likely belongs to `success`; dunning to `product`/billing; marketing owns
  acquisition-side lifecycle and the newsletter.

## 7. Paid acquisition

- Post-ATT signal loss made broad targeting + value-based bidding + **creative as the targeting**
  the dominant paradigm (Meta Advantage+, Google Performance Max — black-box campaign types that
  resist audits; ROAS reported by the platform is not incrementality).
- Channel taxonomy: search intent capture vs social demand generation vs retargeting (mostly
  incrementality-negative in mature accounts per several public experiments) vs sponsorships/
  newsletters/podcasts (dark-funnel, measured by self-reported attribution + coupon/UTM).
- The pack should teach **when paid is premature**: before message-market fit, paid amplifies an
  unconverting page; unit-economics gate (CAC payback) is `product`/business-model's number —
  marketing consumes it.

## 8. Content, social, community, DevRel

- Distribution beats production ("create once, distribute forever"; repurposing pipelines).
  Content-market fit; editorial calendar as an operating cadence, not a strategy.
- **Developer marketing is its own discipline**: developers distrust marketing; docs, tutorials,
  open source, and community are the channels; DevRel sits between marketing and product.
  Candidate surface (`developer-tool`) given this family's audience.
- Social: organic reach is near-zero for brands on most platforms; founder/personal accounts
  outperform brand accounts (practitioner consensus, weakly measured); short-video dominance.
- Community-led growth: high-cost, high-moat; owned (Slack/Discord/forum) vs rented (X, Reddit).
  Reddit's rising weight in Google results (volatile — verify fresh).

## 9. ASO (app stores)

- A genuinely different discipline: Apple App Store (100-char keyword field, no keyword stuffing
  in name/subtitle per guideline 2.3) vs Google Play (description is indexed); screenshots/preview
  video are conversion assets; ratings velocity and recency; custom product pages / store listing
  experiments (native A/B — crosses into growth); primary sources are Apple/Google official docs.

## 10. PR, partnerships, affiliates

- Earned media: digital PR as link building's respectable form; journalist-query services (HARO
  successor ecosystem — volatile, verify names fresh).
- Partnerships: integration marketplaces as acquisition (list in the platforms your users already
  use — checkable marketplace guidelines); co-marketing; affiliate mechanics (network vs in-house,
  FTC disclosure rules are a checkable primary source).

## 11. Brand (scoped)

- Canonical scope: **brand narrative for distribution** — not brand identity design (`design`
  owns visual identity). Distinctive-asset consistency (Sharp) is where brand meets marketing.
  Voice/tone: `design`'s content reference owns in-product voice; marketing owns the external one.
  This seam must be drawn explicitly.

## 12. The agentic overlay (volatile, research fresh)

- AI-generated content at scale → Google's scaled-content-abuse spam policy; "slop" penalty risk;
  the durable rule is information-gain, not "AI-written."
- Being marketed **to** by agents: buyers increasingly ask LLMs for shortlists → being present in
  training data, review sites, comparison content, and structured data matters (GEO again).
- AI SDR / outbound-automation wave (Clay etc.) — mostly `sales`'s problem, but the
  spam-at-scale/deliverability blast radius lands on marketing's domain reputation.
- Agent-authored marketing ops: the n=1 solo founder running campaigns through agents — the
  family's standing agentic surface.

## 13. Hypotheses the research should confirm or kill

1. **Wedge hypothesis**: the rigorous literature (Ehrenberg-Bass, Binet & Field, incrementality)
   contradicts the practitioner folklore that dominates all four channels — the wedge is *a defect
   in what the field believes*, `operate`-style, plus synthesis across non-citing literatures
   (marketing science ∕ SEO ∕ deliverability engineering ∕ law).
2. **Flagship hypothesis**: positioning-and-messaging (Dunford) — everything downstream degrades
   without it. Alternative: attribution honesty.
3. **Surface hypothesis**: GTM motion (self-serve PLG / sales-assisted / developer-tool /
   mobile-app) as the base surface axis; zero-audience/pre-launch and agentic as additive overlays.
4. Checkable primary sources exist in narrow strips: Google Search Central, deliverability RFCs +
   mailbox-provider rules, store guidelines, ad-platform policies, FTC/GDPR/CAN-SPAM/CASL texts,
   MMM repos' licenses. Everything else is folklore requiring convergence tests.
5. X channel special hazard: in this domain the ads ARE the subject matter — course-seller funnel
   content must be tagged as *specimen*, not *evidence*.
6. Expected kill: "marketing = growth hacking tricks" listicles; engagement-bait "hooks" threads;
   MTA tool marketing claiming attribution is solved; GEO snake oil.
