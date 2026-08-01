# Channel E — `/webdesign` legacy-skill extraction (disposition of all 23 files)

**Source:** `/Users/tamas/.claude/skills/webdesign/` — SKILL.md (164 lines) + 22 references, **3,707 lines total**.
**License:** `license: MIT` declared in SKILL.md frontmatter (`SKILL.md:16`); source repo
`https://github.com/gabros20/webdesign` (`SKILL.md:18`). It is the user's own skill — verbatim lift is
permitted throughout. (No separate LICENSE *file* exists in the installed skill directory; the
frontmatter field is the only license artifact seen. Two references self-declare adaptation from
`pbakaus/impeccable`, Apache-2.0 — `design-critique.md:9`, `anti-default-catalog.md:7` — and
`frontend-build-patterns.md:302` from `bendc/frontend-guidelines`.)

**Method:** every one of the 23 files read end-to-end, no sampling. Design and frontend shipped packs
spot-checked (`design-skill/skills/design/references/`, `frontend-skill/skills/frontend/references/`)
to avoid claiming a gap that is already filled.

**Verdict up front:** roughly **13% of the skill by line count is marketing material** (~470 of 3,707
lines), and it is highly concentrated: three files — `persuasion-and-conversion.md`,
`trust-proof-and-structure.md`, `niche-and-vertical-design.md` — are ~90% of the LIFT. The other 20
files are visual craft, build code, or review gates that belong to `design`/`frontend`, most of which
the shipped packs already carry. Measured by *distinct teachable propositions* rather than lines the
share is higher (the craft files are heavy with CSS blocks), but the LIFT boundary is the same three
files plus ~40 scattered lines.

---

## (a) Per-file disposition table

| File | Lines | Disposition | Destination | Rationale |
|---|---|---|---|---|
| `SKILL.md` | 1–20 | DROP | — | Frontmatter/metadata of a skill being abandoned; version + router description have no downstream value. |
| `SKILL.md` | 22–41 | DROP | — | Scope/stack-posture prose for the old skill's own boundaries; superseded by family boundaries. |
| `SKILL.md` | 43–76 | STAYS | design | Six-stage workflow arc (Direction→Structure→Craft→Build→Art review→Critique); design owns stages 1–3+5–6, frontend stage 4. |
| `SKILL.md` | 78–105 | DROP | — | Router table pointing at the 22 references of the dying skill. |
| `SKILL.md` | 107–145 | STAYS (1 LIFT note) | design | The 7 "non-negotiable laws". Laws 1,2,3,6,7 are visual craft (design `visual-direction.md`, `surface-website.md:46-48`); law 5 (register) is verbatim in design `visual-direction.md:33`. **Law 4** (`SKILL.md:121-124`, design for the *business*, premium↔info dial) is already in design `surface-website.md:38-42` — see hazard H1. |
| `SKILL.md` | 147–164 | DROP | — | Hand-off list to other global skills (generate-image, building-components, accessibility…); the family router replaces it. |
| `persuasion-and-conversion.md` | 1–139 | **LIFT** (≈85%) with 3 STAYS carve-outs | marketing | The persuasion/conversion/pricing/ethics layer. Carve-outs: Hick/Fitts/Zeigarnik/peak-end/Miller as *interaction* laws (`29-49`, partial) → design; the 50ms halo + aesthetic-usability (`89-96`) → design; whitespace/editorial-restraint craft (`107-111`) → design. Everything else is what a page must SAY, PROVE, and OFFER. |
| `trust-proof-and-structure.md` | 1–111 | **LIFT** (≈90%) | marketing | Credibility layers, E-E-A-T, social-proof device taxonomy + placement, IA-for-scanning, SEO-aware structure, case-study anatomy. Carve-out: `72-76` Core Web Vitals (→ frontend `performance.md`, canonical) and `99-111` "dense info without killing premium" (→ design). |
| `niche-and-vertical-design.md` | 1–220 | **LIFT** (≈80%) | marketing | Eleven vertical playbooks: audience/criteria, goal, structure, proof devices, dial, pitfalls. Carve-out: every **visual register** clause (palette/type/photography) → design, which already carries a compressed version at `surface-website.md:42`. |
| `section-archetypes.md` | 1–81, 94–121, 132–211 | STAYS | design (`information-architecture.md`) + frontend (`compose.md`) | Sitemap procedure, section catalog, field shapes, nav/footer, archetype schema tables. Design's `information-architecture.md:47` already carries the preserve-vs-restructure-IA rule verbatim in compressed form. |
| `section-archetypes.md` | 82–93 | LIFT-with-note (double home) | marketing ∥ design | Copy-fidelity spectrum (verbatim / preserve+tighten / rewrite) + named copywriting frameworks + SEO-migration keyword preservation. Design `information-architecture.md:67` already has the three-level ladder → hazard H8. |
| `section-archetypes.md` | 122–130 | LIFT-with-note (double home) | marketing ∥ design | "Section sequence is IA — let the domain shape it": proof before the ask, premium→proof→action arc. → hazard H2. |
| `section-design-workflow.md` | 1–40, 60–142 | STAYS | design (`surface-website.md`, craft leaves) | The craft router, device map, quick recipes, anti-boring checklist. Design `surface-website.md:46-50` already carries the checklist and cardinal rule. |
| `section-design-workflow.md` | 41–58 | STAYS (restatement) | design | The fourth law / premium↔info dial, restated from `niche-and-vertical-design.md`. Already in design `surface-website.md:38-42`. |
| `frontend-design-principles.md` | 1–158 | STAYS | design (`visual-direction.md`) | Taste/point-of-view layer, register doctrine, real-assets rule, three AI-default looks, two-pass brainstorm process. Register doctrine already lifted to design `visual-direction.md:33`; the AI-default cluster to `visual-direction.md:86`. |
| `frontend-design-principles.md` | 159–184 | STAYS | design (`content.md`) | "More on writing in design" is **UI microcopy**, not acquisition copy (labels, errors, empty states, active voice). Design `content.md:10` explicitly routes acquisition/marketing copywriting *out* to `marketing` — so this block correctly stays. |
| `design-thinking.md` | 1–97 | STAYS | design (`visual-direction.md`, `critique.md`) | Composition process, Gestalt-adjacent principles, "why designs read templated", one-bold-move, refinement + critique frameworks. |
| `design-direction.md` | 1–178 | STAYS | design (`design-systems.md`) + tooling | `DESIGN.md` authoring, `@google/design.md` CLI, lint rules, token front-matter. Alpha-tool-specific; verify currency before reuse. |
| `design-critique.md` | 1–96 | STAYS | design (`critique.md`) + quality | Nielsen 0–40 scored rubric, cognitive-load rule, five personas, P0–P3 routing, go/no-go gate. The gate half is `quality` territory. |
| `anti-default-catalog.md` | 1–64 | STAYS | design (`visual-direction.md`) | The dated-2026 named AI tells (cream/sand OKLCH band, display clamp ceiling, reflex-reject fonts, ghost card, anti-default rebound). |
| `art-review.md` | 1–213 | STAYS | design (`critique.md`) | Art-direction review loop, capture-tooling contract, A0–A3 severities, no-first-pass-sign-off rule, convergence discipline. |
| `color-and-rhythm.md` | 1–82 | STAYS | design (`color.md`) | OKLCH palettes, light↔dark section rhythm, 60-30-10, duotone, contrast floor. One near-marketing line (`52`: owned palette beats indigo default) is craft. |
| `typography.md` | 1–114 | STAYS | design (`typography.md`) | Modular scale, `clamp()`, display type, pairing, kinetic type, watermark, body readability. |
| `layout-and-composition.md` | 1–226 | STAYS | design (`layout-composition.md`) | Breakout grids, bento, asymmetry, overlap, whitespace, F/Z patterns, Gestalt, premium-SaaS system. F/Z eye-flow (`176-181`) is cited by the CCD block but is layout doctrine. |
| `depth-and-texture.md` | 1–186 | STAYS | design (`imagery-depth-decoration.md`) | Z-planes, grain, aurora, layered shadows, glass, 3D tilt, parallax, neumorphism. Pure CSS craft. |
| `imagery.md` | 1–189 | STAYS | design (`imagery-depth-decoration.md`) | Clip/mask shapes, scrims, masonry, mockups, collage, Ken Burns, `aspect-ratio`/`object-fit`. |
| `decoration.md` | 1–105 | STAYS | design (`imagery-depth-decoration.md`) | SVG patterns, dividers, blobs, connectors, cutouts, logo-as-texture + generator toolbox. |
| `motion-and-interaction.md` | 1–129 | STAYS | design (`motion.md`) + frontend | Scroll-driven reveals, IO fallback, GSAP pinning, marquee, magnetic buttons, motion principles. |
| `experimental-and-creative.md` | 1–143 | STAYS | design (`surface-website.md:77`) | WebGL/shader, particles, custom cursors, View Transitions, Awwwards judging weights. Design already carries the compressed award tier. |
| `frontend-build-patterns.md` | 1–213, 219–473 | STAYS | frontend | Scaffold, section registry, theming, assets, visual self-check, HTML/CSS/TS craft. |
| `frontend-build-patterns.md` | 214–218 | LIFT-with-note (double home) | marketing ∥ frontend | Redirect map on IA change = "the SEO equity a rewrite is supposed to carry forward". → hazard H9. |
| `tailwind-v4-theme.md` | 1–118 | STAYS | frontend (`tailwind.md`) | Tailwind v4 namespace map, the `--spacing`/`max-w` collision, full-coverage recipe. |
| `SOURCES.md` | 1–124 | Mining input | — | Provenance table; marketing-relevant rows extracted in section (c). |

---

## (b) Full LIFT extraction, organized by candidate marketing job

Provenance is `file:line`. Content is the user's own MIT-licensed prose; quoted verbatim where the
wording is load-bearing. **Every statistic below is repeated from secondary sources at the
agency/tool-content-marketing rung and is unverified** — see the credibility note at the end of this
section.

### J1 — positioning-and-messaging

**The value proposition must clear the fold, in a fixed anatomy** (`persuasion-and-conversion.md:75-77`):
> "**Value proposition above the fold** — answer 'what is this, for whom, why better' without
> scrolling. Anatomy: **Hero → UVP → Benefits → Social Proof → CTA → details/FAQ → final CTA.**
> *Pitfall:* clever-but-vague headlines ('Reimagine tomorrow') fail the 5-second test."

**Benefit-led, not feature-led** (`persuasion-and-conversion.md:78-79`): translate every feature
("256-bit encryption" → "your data stays yours"); spec dumps assume the reader translates, most won't.

**Specificity beats superlatives** (`niche-and-vertical-design.md:50-51`): named clients, exact numbers
($ verdicts, AUM, homes sold, % ROI, review counts), real photos — not broad "excellence."

**The first-screen answer set** (`niche-and-vertical-design.md:48-49`): in ~5–10 seconds the first screen
answers *who you help, what you offer, how to start, what happens next* — "one precise statement + one
confidence cue."

**The 5-second rule as a positioning test, by vertical**: agencies — "if they can't tell what you do in
~5s, they leave" (`niche-and-vertical-design.md:94`); B2B SaaS — the 5-second test rules, jargon that
fails it is the top pitfall (`niche-and-vertical-design.md:172`, `181`).

**Message match across channel and page** (`persuasion-and-conversion.md:59-61`): mirror the ad's
image/headline/palette on the landing page; visual processing is ~60,000× faster than text, so a
mismatch reads as "wrong page" before a word is read. Constrain to 2–3 colors, 2 fonts.

**Message architecture is sequenced, not blended** (`niche-and-vertical-design.md:9-19`, restated
`section-design-workflow.md:47-55`): premium (what you leave out) and proof (structured density) are a
dial set per surface and per scroll depth — restrained emotional hero → progressively denser proof as
the visitor self-qualifies → low-friction action. "First viewport earns attention; later viewports earn
the decision." **The dial position is set by stakes and emotion, not taste** — higher money/health/legal
risk → proof leads. **Note:** design already owns this (hazard H1); marketing lifts only the
*what-must-be-proven* half.

**Narrative arc for premium-creative offers** (`niche-and-vertical-design.md:38`): **Problem → Empathy →
Solution → Proof → Action**. Restated for agencies at `niche-and-vertical-design.md:96`.

**Copywriting frameworks are named but not taught** (`section-archetypes.md:90-91`): when repositioning,
"author fresh copy against a stated persona/goal and copywriting framework (**AIDA, PAS, BAB, PASTOR**,
etc.)". This is a bare name-drop — the marketing pack must actually teach these or drop them.

**Register as a message-mode decision** (`SKILL.md:125-129`, `frontend-design-principles.md:35-56`): brand
sites / landing pages / marketing = *design IS the product*, distinctiveness is the bar; dashboards and
dense daily tools = *design SERVES the product*. Named **per surface, not per project**. Already in
design `visual-direction.md:33` — marketing cites, never restates.

### J2 — audience-and-segmentation

**Design for the ideal client, not for peers** (`niche-and-vertical-design.md:69-70`, `215`): the canonical
architecture-firm trap. Step 1 of the reference's own procedure is "Name the vertical (and the *ideal
client* within it — design for them, not peers)."

**Per-vertical audience profiles** (all from `niche-and-vertical-design.md`):
- **Architecture** (`65-68`): prospective clients, high-consideration; "~9 in 10 pro-services buyers rule
  a firm out before contact, 8+ in 10 evaluate via the website first"; they need the work AND concrete
  answers — *how you work, timeframe, cost, who I'll work with*. Secondary audience: talent/peers.
- **Interior design** (`86`): premium clients buying experience/trust/emotion who want an aesthetic match.
- **Creative agencies** (`94`): B2B buyers who decide fast.
- **Luxury/hospitality** (`104`): affluent buyers expecting five-star digital service; they buy
  story/transformation/belonging.
- **Photographers/artists** (`115-116`): clients, curators, buyers judging instantly on image quality;
  "79% want background on the artist/work before buying."
- **Law** (`126`): distressed, high-stakes visitors comparison-shopping on competence + outcomes + trust.
- **Finance/wealth** (`137`): affluent, risk-averse, long cycle; decide on trust/stability/fiduciary
  alignment.
- **Healthcare** (`148`): anxious, cautious patients; 70%+ mobile.
- **Real estate** (`159`): largest-transaction buyers/sellers/investors; luxury adds lifestyle/prestige.
- **B2B SaaS** (`172-173`): a **buying committee** — technical evaluator, finance/ROI, executive — hence
  **multi-stakeholder value** content (ROI calculator / tech specs / implementation timeline /
  comparison) as a required section, and the pitfall "one stakeholder addressed" (`182`).
- **Professional services / local high-ticket** (`185-186`): high-ticket with **information asymmetry** →
  buyers judge *signals*; the halo effect (premium site → assumed expertise).

**Readiness segmentation inside one page** (`niche-and-vertical-design.md:179`): "offer trial + demo for
different readiness" — two CTAs mapped to two buying stages, not two competing CTAs.

### J3 — category-and-competitive-framing

**Comparison as an objection-handling device** (`persuasion-and-conversion.md:80-81`): comparison tables
belong "right where the doubt arises," each followed by a CTA.

**Anchoring vs decoy are different mechanisms and build different layouts**
(`persuasion-and-conversion.md:117-122`) — the reference is explicit that conflating them is a defect:
- **Anchoring** sets a reference *number* (`persuasion-and-conversion.md:30-31`: first number sets the
  frame; lead with the high tier).
- **Decoy** adds a *dominated option* that makes the target look like obvious value.
- **Three tiers** convert ~1.4× two (4+ convert worse); **center-stage effect** pulls buyers to the
  middle — put the target there; stack signals on the target tier ("Most Popular" = social proof +
  default cue + center-stage); **charm pricing** ($X9) shifts perceived magnitude, but luxury often uses
  round prices to signal confidence. Pitfall: an insultingly-bad decoy backfires.
- **Price-anchoring for premium** (`persuasion-and-conversion.md:114-116`): a visible flagship tier
  anchors the range up; **never discount-shout** — it undercuts premium. "Minimalism sells luxury;
  clutter signals bargain — the visual register itself is a price cue."
- ⚠️ Charter says pricing *decisions* → `product`. See hazard H6.

**Curation as positioning** (`niche-and-vertical-design.md:40`): "**Curate hard** (selectivity is
positioning — show the work you want more of)." Portfolio bloat dilutes the best work
(`niche-and-vertical-design.md:83`); an over-broad portfolio muddies the signature look (`91`).

**Authority borrowing** (`persuasion-and-conversion.md:18-19`): "as seen in" logos, certifications,
expert bylines, awards — *pitfall:* "badge soup — one credible mark beats ten vague ones."

**Where each vertical sits on the brand↔info axis** — the reference's own comparison table
(`niche-and-vertical-design.md:201-212`), useful as a positioning-register map. Columns: vertical ·
brand-presence weight · info/proof weight · **signature proof device**. Rows: Luxury/hospitality
(cinematic video + heritage story) · Interior design (large editorial project photography) · Real estate
luxury (cinematic renders + track-record data) · Photographers/artists (hi-res work + statement/captions)
· Architecture (process-driven project case studies) · Professional services (case studies +
credentials/reviews) · Law ($-figure case results + rating badges) · B2B SaaS (named logos + metric case
studies + security) · Healthcare (credentials + patient video + process clarity) · Finance
(designations + AUM/tenure + fiduciary).

### J4 — landing-page requirements and copy *(charter explicitly assigns this to marketing)*

**Attention Ratio is the governing metric** (`persuasion-and-conversion.md:54-55`):
> "Governing metric: **Attention Ratio** = links-on-page ÷ intended-actions. A campaign landing page
> should approach **1:1** (one action, nothing else clickable); tightening toward 1:1 commonly lifts
> conversion ~31%."

**The ONE-goal rule** (`persuasion-and-conversion.md:69-70`): "every landing/campaign page serves a single
conversion goal (1:1). Homepages may carry a 1:many ratio (exploration) — don't confuse the two." This
homepage-vs-campaign-page distinction is the single most transferable rule in the file.

**Conversion-Centered Design, the 7 principles** (`persuasion-and-conversion.md:56-67`), verbatim structure:
1. **Create focus** — strip nav/social/competing CTAs; one primary action; secondary info in collapsibles.
2. **Build structure** — order by visitor need; F-pattern for text-heavy, Z-pattern for sparse; single
   column on mobile.
3. **Stay consistent (message match)** — mirror the ad's image/headline/palette; 2–3 colors, 2 fonts.
4. **Show benefits** — hero imagery of **real people** using the product beats product/stock shots; apply
   the **squint test** (purpose readable with the copy blurred).
5. **Draw attention** — boldest color for the CTA only; isolate in whitespace; directional cues (arrows,
   eyeline); CTA ≈2× body with hover feedback; **repeat CTA after each objection-resolving section**.
6. **Design for trust** — authentic testimonials (face/name/title/company), media/award logos, security
   seals near the form.
7. **Reduce friction** — 3–5 fields max; drop the name field where it correlates with lower conversion;
   multi-step + progress bar; fast load; accessible contrast.

**CTA copy rules** (`persuasion-and-conversion.md:82-83`):
> "first-person ('Start **my** free trial') beats second-person by 10–90%; value-specific ('Get 3 free
> templates') beats 'Submit'/'Learn more'; 2–5 words. **Test order: copy → placement → color.**"

That last clause — copy before placement before color — is a testing-priority claim that belongs in the
marketing↔growth seam.

**Objection handling as page furniture** (`persuasion-and-conversion.md:80-81`): FAQ blocks,
guarantee/refund badges, "no credit card required," comparison tables — placed **right where the doubt
arises**, each followed by a CTA. Pitfall: burying objections below the decision point.

**Urgency, honestly** (`persuasion-and-conversion.md:84-85`): real deadlines, genuine launch/seasonal
windows, true limited editions. Pitfall: re-arming "expired" timers, perpetual "ends tonight."

**Friction discipline as a vertical requirement** (`niche-and-vertical-design.md:54-56`): 3–5 form fields,
staged intake, risk-reducers ("free," "no obligation"), visible contact on every page, sub-3s load,
mobile-first (60–83% of traffic), security/compliance visible (SSL, HIPAA, SOC 2, GDPR) "as both
function and signal."

**Per-vertical page structures** — the ordered section requirements each vertical's page must satisfy
(all `niche-and-vertical-design.md`; the *visual register* clause in each is stripped out and stays with
design):
- **Architecture** (`71-74`): restrained hero (project image + what we do / who we serve) → positioning /
  philosophy → portfolio (~8–25 projects, grouped by type/scale — "the spine") → project case-study pages
  (brief → scope → challenge → solution → outcome, shown as sketches → site analysis → development →
  built photos: *show process*) → Team page (2nd most-visited: headshots, credentials, bios) →
  educational/FAQ content (cost/timeline/process; also SEO) → clear CTAs throughout. Goal: "get
  pre-screened-in → book a consult" (`70`).
- **Interior design** (`86-88`): home → curated portfolio → trust-About → services → testimonials/press →
  one strong CTA.
- **Creative agencies** (`95-98`): tight 4–6 plain-labeled nav; specific outcome-led value prop above the
  fold ("we help X brands increase Y by Z%"); social proof in the first scrolls;
  Problem→Empathy→Solution→Proof→Action; case studies as *decision tools* (challenge → approach →
  measurable result); intent-matched CTAs ("Book a discovery call").
- **Luxury / hospitality** (`105-107`): cinematic hero → mood/story → detail (product/room pages) →
  frictionless conversion; hospitality "**home → room → booking in ≤3 clicks**", multi-language/currency.
- **Photographers / artists** (`117-119`): best work top of hierarchy; categorized by series; **About with
  first-person intro + a photo of the artist's face**; per-piece context; commerce CTA. Curation:
  photographers ~15–40 (the **20-60-20 rule**: 20% best, 60% solid, 20% range); artists 10–15 pieces,
  ≤~20/gallery.
- **Law** (`127-131`): hero positioning + visible phone + "Schedule a Free Consultation" on every page
  above the fold → **one keyword-optimized page per practice area** (not a generic "Services" list) →
  attorney profiles (the "digital handshake") → **case results with specific $ figures/verdicts** →
  testimonials → resources/blog → intake.
- **Finance / wealth** (`138-142`): hero positioning + one confidence cue → who-we-serve → **process**
  ("demystify how we work") → team with credentials → proof (AUM, tenure, client count) → insights →
  fiduciary statement + disclosures → contact.
- **Healthcare** (`149-153`): a **4-stage flow** — 1) Fit & Scope (who it's for + what it addresses,
  answered in ~10s) → 2) Trust & Credibility (credentials early) → 3) Process Expectations (first-visit
  details, response timelines) → 4) Action Path (booking only after clarity). **Anxiety reducers:** state
  pre-visit expectations near the submit button; explicit response-time commitments; staged intake
  (routing-critical fields first).
- **Real estate** (`160-165`): hero (brand + search or signature listing) → property search with map +
  listings → featured listings with galleries/virtual tours → agent bio + track record → testimonials →
  buy/sell pages → contact/valuation. *Luxury variant:* emotional narrative (location → amenities →
  architecture → floor plans → specs → team) **before** the selection tool.
- **B2B SaaS** (`173-179`): hero (outcome headline **<8 words**, sub-head with a proof point, **product UI
  screenshot/visual demo**, primary CTA, trust bar) → problem→solution → **multi-stakeholder value** →
  social proof + case studies → feature→benefit (show transformation) → product video → secondary CTA →
  FAQ. CTA: one primary per page; first-person; risk-reducers ("No Credit Card Required"); 3–5 fields.
- **Professional services / consulting / local high-ticket** (`186-193`): five pages — Home (value + CTA)
  → Services → **Case Studies** → trust-About → Contact; content-first/authority approach (lead with
  insights).

**Per-vertical pitfall lists** are lifted with each playbook (`83`, `91`, `100-101`, `111-112`, `123`,
`134`, `144-145`, `155-156`, `168-169`, `181-182`, `194-195`) — they read as a negative-requirements
checklist for a landing-page brief.

**How to use the vertical set** (`niche-and-vertical-design.md:214-220`): name the vertical and ideal
client → set the dial → lay out the structure from the playbook → pick the **signature proof device** →
sequence premium hero → densifying proof → low-friction action.

### J5 — trust, proof, and credibility *(candidate standalone job; otherwise folds into J1+J7)*

**The three credibility layers — build all** (`trust-proof-and-structure.md:9-15`, restated
`niche-and-vertical-design.md:45-48`):
> "75% of users judge a company's credibility on website design alone (Stanford Web Credibility
> Project)."
1. **Visual** — design quality, real photography (not stock), consistent branding; the instant ~50ms halo.
2. **Content** — clarity, specificity, depth, plain language; answers in the order questions arise.
3. **Social** — reviews, testimonials, named logos, case results. *The most powerful* — third-party peer
   validation. "Trust signals lift conversion ~15–34%; 93% read reviews before buying."

**E-E-A-T as page requirements, not just an SEO abstraction**
(`trust-proof-and-structure.md:19-29`) — Google's quality framework expressed as things the page must
contain:
- **Experience (firsthand):** original photography, personal process descriptions, real case studies,
  authentic reviews, "we did this" narrative → a process/behind-the-scenes section, real project imagery.
- **Expertise:** author/team bios with **credentials, certifications, education**; bylines; topic-deep
  content → author cards, an internal-linked author/team page, designation badges.
- **Authoritativeness:** reputation + external validation — press/"as seen in" logos, awards, quality
  backlinks, consistent brand voice → a media/awards strip, recognizable identity.
- **Trustworthiness (foundational — without it the rest is diluted):** clear authorship, **HTTPS**,
  accessible privacy policy, secure forms, transparent contact info → visible security/compliance cues, a
  real address/phone, honest copy.

**Social-proof device taxonomy, and placement as the lever**
(`trust-proof-and-structure.md:33-45`):
- **Testimonials:** real quote + **full name + role + company + headshot** (face visible, shoulders in
  frame). "'Alex H.' reads as fake; specificity converts. Video testimonials feel most authentic."
- **Logo wall:** recognizable customer/client logos (**named logos outperform generic trust bars**),
  desaturated/downsized so they support rather than distract.
- **Numbers / stats:** review counts + star ratings, usage ("Join 5,000+ companies"), outcome metrics,
  years/counts ("43 years," "500+ transactions"). **Specific > superlative, always.**
- **Case studies / results:** the strongest device for high-consideration buys.
- **Trust badges:** SSL/secure-payment, certifications, compliance (SOC 2, HIPAA, GDPR, ISO), guarantees.
- **Placement is the lever:** put the strongest testimonial / rating badge / guarantee **directly next to
  the CTA or form** to neutralize last-minute hesitation; logos and ratings on pricing/contact pages;
  reviews near product CTAs. **Cluster testimonials for a bandwagon effect.**
- **Pitfall:** fabricated or stock-photo testimonials are unethical, easy to smell, and FTC-actionable.

**Cialdini's 7 as page sections** (`persuasion-and-conversion.md:12-25`) — each with its named failure mode:
- **Reciprocity** — give genuine value first (lead magnet, calculator, audit, free trial, ungated useful
  content) before the ask. *Pitfall:* "free" that's a forced data-grab reads as bait.
- **Commitment & consistency** — win a small yes, then escalate (multi-step forms: easy question first).
  *Pitfall:* don't hide the real cost behind the innocuous first step.
- **Social proof** — named+photographed testimonials, logo walls, counts, "Most Popular" badge.
  *Pitfall:* fabricated/stock testimonials.
- **Authority** — "as seen in" logos, certifications/security badges near the form, expert bylines,
  awards. *Pitfall:* badge soup.
- **Liking** — founder/brand story ("I was in your shoes"), warm human photography, audience-mirroring
  voice. *Pitfall:* over-polished/self-congratulatory tone breaks relatability.
- **Scarcity** — genuine low-stock, real seat caps, time-boxed launches, limited editions (loss aversion:
  "we weight loss ~2× gain"). *Pitfall:* "**fake countdowns / false 'only 2 left' are FTC-flagged dark
  patterns.**"
- **Unity** — shared identity ("join 10,000 builders like you"), community/membership framing. *Pitfall:*
  manufactured tribalism without a real community.

**Messaging-side cognitive biases** (`persuasion-and-conversion.md:29-38`) — the subset that is about what
the page *claims*, as opposed to how a control behaves (the interaction-law subset stays with design, see
hazard H7):
- **Anchoring** (`30-31`) — first number sets the frame; show original/premium price first.
- **Framing** (`32-33`) — same fact, different valence ("Save 30%" vs "Don't pay full"); gain-frame for
  aspiration, loss-frame to avoid a downside. *Pitfall:* "manipulative risk/health/finance framing crosses
  ethical/legal lines."
- **Loss aversion / endowment** (`34-35`) — free trials that let users build/personalize; "your cart/plan,"
  pre-filled progress. *Pitfall:* easy-in/hard-out cancellation is a dark pattern.
- **Von Restorff / isolation** (`36-38`) — reserve the single boldest color exclusively for the primary
  CTA; isolate the hero benefit in whitespace; one highlighted tier. "Spend distinctiveness once per view."

**Premium / luxury credibility mechanics** (`persuasion-and-conversion.md:107-116`): whitespace as
confidence ("generous negative space signals 'we don't need to sell hard'"); scarcity→desire via limited
editions, members-only, waitlists, "by invitation" — *pitfall:* "manufactured exclusivity without
substance is transparent."

**Compliance-shaped proof requirements**, per vertical (`niche-and-vertical-design.md`): finance —
**designations after every name** (CFP/CFA/CPA/ChFC), explicit **"fiduciary"** language, clean SEC/FINRA
disclosures, and the pitfall "vague claims tripping compliance" (`140-145`); healthcare — HIPAA-secure
forms + privacy cues, provider board certs/affiliations early (`152-153`); law — bar admissions, rating
badges (Super Lawyers, Avvo, Martindale, Best Lawyers), encrypted intake (`130-131`); consultants —
membership/cert badges on every page (ICAEW, ACCA, CPA, Xero/QuickBooks partner) and **Google reviews (25+
@ 4.5★+)** (`188-190`); contractors — licenses/insurance/warranties/financing, before/after photos, real
jobsite imagery, service-area pages (`190-192`).

**The ethical line — the mechanism-flips-sides table** (`persuasion-and-conversion.md:126-139`), which is
the strongest single candidate for a marketing pack invariant:
> "The same mechanism flips sides by truthfulness. FTC (2022→2025) blacklists fake timers, false
> scarcity, hidden subscriptions, and confirmshaming as material misrepresentations."

| Mechanism | Ethical use | Dark pattern |
|---|---|---|
| Scarcity/urgency | Real deadline/stock | Fake/re-arming timers, false "2 left" (FTC-actionable) |
| Commitment | Honest progressive steps | Hidden cost revealed late |
| Social proof | Real reviews + identity | Fabricated/stock testimonials |
| Default / Zeigarnik | Smart defaults, true progress | Forced continuity, infinite gamified bars |
| Endowment | Personalize a real trial | Easy-in / hard-out cancellation |
| Confirmshaming | Neutral decline option | Guilt-trip opt-out copy |

Closing line, worth keeping as the pack's ethical north star (`persuasion-and-conversion.md:5-6`, `139`):
honest persuasion "**reduces friction to a decision the user genuinely wants**"; a dark pattern
"**manufactures a decision against their interest**"; design for the user's **informed yes**. And
(`persuasion-and-conversion.md:6-7`) "the strongest long-term lever is a real value match, not a trick."

### J6 — seo-strategy *(strategy/outcome only, per charter)*

**Structure serves humans and crawlers with one hierarchy** (`trust-proof-and-structure.md:62-79`):
- **Semantic HTML:** `header / nav / main / article / section / footer` over generic `div`s — "gives
  search engines and assistive tech a clear structural picture and improves snippet/rich-result
  eligibility."
- **Heading hierarchy:** exactly **one `H1`**; `H2`/`H3` nested in order; don't skip levels or pick
  headings for size. *Pitfall:* "designing headings purely for visual size breaks the document outline
  for SEO and screen readers."
- **Above the fold:** H1 + value proposition + primary action visible without scrolling — "crawlers and
  users both weight it heavily."
- **Structured data (JSON-LD):** schema.org markup (Organization, LocalBusiness, Article, Product, Review,
  FAQ, BreadcrumbList…) in `<script type="application/ld+json">` — "translates visible content into
  machine-readable entities for rich results **and AI answers**. JSON-LD is Google's preferred format."
  (Charter's code policy explicitly permits structured-data examples.)
- **Internal linking + breadcrumbs:** connect related pages (**pillar → cluster**) for navigation and
  crawl depth.
- *Carve-out:* the Core Web Vitals paragraph (`72-76`) stays with frontend `performance.md` / quality.

**Content that exists for search, by vertical**: law — "one keyword-optimized page **per practice area**
(not a generic 'Services' list)" and the pitfall "generic practice pages"
(`niche-and-vertical-design.md:128`, `134`); architecture — "educational/FAQ content (cost/timeline/
process; **also SEO**)" (`niche-and-vertical-design.md:73`); contractors — **service-area pages**
(`niche-and-vertical-design.md:192`).

**SEO equity is a migration requirement, and redirects alone don't carry it**
(`section-archetypes.md:91-93`):
> "If there's an SEO migration in play, preserve the target keywords and search intent from the old
> ranking pages so the rewrite *carries* the ranking forward instead of losing it — the redirects alone
> don't do that."

Paired with the redirect obligation (`frontend-build-patterns.md:214-218`): old URLs must keep resolving
via a 301 map — "Skipping this means every legacy inbound link/bookmark/search-ranked URL 404s, which is
exactly the SEO equity a rewrite is supposed to carry forward." And the IA rule
(`section-archetypes.md:32-37`): **preserve IA** (SEO, familiarity) → keep routes 1:1, no
renaming/merging/dropping; **restructure IA** → the committed redirect target set is the authoritative
new IA.

**Scannability and progressive disclosure as content-structure rules**
(`trust-proof-and-structure.md:55-58`): people skim — headings, subheadings, bulleted lists, cards, and
buttons chunk content so a skim conveys the gist; show the routing-critical level first, reveal depth on
demand (accordions, "read more," detail pages). *Pitfall:* "deep hierarchies and creative/branded nav
labels increase scanning effort and bounce."

**Navigation label doctrine** (`trust-proof-and-structure.md:50-54`): primary nav **2–7 items**; keep the
hierarchy **flat** (any page reachable in 2–3 clicks); **plain labels beat clever ones on every usability
metric** — descriptive, parallel structure (nouns with nouns), no internal jargon; group into logical
categories (Product / Company / Resources / Support); keep nav order/placement stable across the site.
*(Double-home with design `information-architecture.md` — see hazard H3.)*

### J7 — content-strategy-and-briefs

**Case-study / proof-page anatomy** (`trust-proof-and-structure.md:83-95`) — "the highest-converting proof
format for high-consideration buyers," structured as a **scannable narrative**:
- **Top context block:** industry / year / scope / client — "so a scanning decision-maker instantly gauges
  relevance."
- **The arc:** **Challenge → Solution → Results.** Results carry the headline outcome.
- **Proof callouts:** pull key metrics into **large/bold typography** or shaded callout boxes (a graph in
  a bright accent carrying the headline number; a client pull-quote closing it out) so skimmers catch them
  without reading prose.
- **Make it scannable + immersive:** motion/animated reveals keep people moving through the story; a
  named, photographed client quote anchors authenticity.
- **Multi-asset:** "a scannable web page + a sales PDF one-pager + a 60–90s video covers different buyer
  modes."
- **Pitfall:** "burying the measurable result in a paragraph; vague outcomes ('great results') instead of
  a number, a %, a timeframe, or a $."

Vertical-specific case-study shapes: architecture project pages carry brief → scope → challenge → solution
→ outcome **with process artifacts** (sketches → site analysis → development → built photos)
(`niche-and-vertical-design.md:72-73`, `76`); agencies frame case studies as **decision tools** — challenge
→ approach → measurable result (`96-97`); consultants need **quantified** case studies (`190`).

**Copy fidelity is a spectrum — decide once, apply consistently** (`section-archetypes.md:82-93`):
- **Verbatim** (a faithful port): populate every text field with source copy word-for-word — "the existing
  copy may carry real SEO equity or be contractually the client's own IP."
- **Preserve, lightly tighten** (redesign that keeps the message): SEO-safe tightening only where a line
  is genuinely broken; keep titles, meta, and the substance of every section — never a full rewrite.
- **Rewrite** (repositioning): fresh copy against a stated persona/goal + a copywriting framework, with
  the keyword/intent preservation rule above.

**Content-first authority approach** (`niche-and-vertical-design.md:187`): for professional services,
"content-first/authority approach (lead with insights)"; finance carries an "insights" section as a
required page-tier (`139`); law carries "resources/blog" (`129`).

**Proof density is a content-sequencing decision, not a layout one**
(`section-archetypes.md:122-130`): "place proof/trust sections and CTAs where persuasion literature says
they convert best (**proof before the ask, not buried after it**)."

### J8 — attribution-and-measurement *(thin; mostly claim-level)*

The only measurement primitive in the whole skill is the **Attention Ratio** (`persuasion-and-conversion.md:54`)
— links ÷ intended actions, a page-level design metric that can be computed statically, no analytics
needed. Everything else is an effect-size claim repeated without methodology:
~31% lift from tightening to 1:1 (`54-55`); first-person CTA copy "beats second-person by 10–90%" (`82`);
trust signals lift conversion ~15–34% (`14-15` in trust-proof); visible credentials + social proof "can
lift conversion up to ~200%" (`niche-and-vertical-design.md:190`); three tiers convert ~1.4× two
(`persuasion-and-conversion.md:118`); aesthetics↔trust ~r=0.74 (`persuasion-and-conversion.md:95`).
**Treat every one of these as UNVERIFIED** — they arrive with no study, sample, or date. What would verify
them: the primary CXL/Unbounce test writeups and the underlying academic papers named in section (c).

### J9 — go-to-market-and-launch *(fragmentary)*

Only three fragments touch launch: **time-boxed launches** as legitimate scarcity
(`persuasion-and-conversion.md:22`); "genuine launch/seasonal windows" as legitimate urgency
(`persuasion-and-conversion.md:84`); **waitlists / "by invitation" / members-only** as premium demand
capture (`persuasion-and-conversion.md:112`). Also `frontend-design-principles.md:38` names "launch
microsites" as a register class. There is no launch-planning content in this skill — the marketing pack
must source it elsewhere.

### Not represented at all

The skill contains **nothing** on: lifecycle/email, paid acquisition, organic social/community,
partnerships/PR, app-store optimization, segmentation methodology (beyond the vertical profiles above),
category creation, or attribution modeling. Those jobs get zero from channel E.

### Credibility note on the whole LIFT body

Per the charter ladder, this material sits at rung 4–5: it is the user's own synthesis of
**agency/tool content-marketing sources** (Unbounce, CXL, HubSpot, Webflow, Format, Hinge, Torro,
Kitces, Webstacks, Discovered Labs, Genesys Growth…), with three genuinely primary anchors — the FTC dark
patterns report, Google's own helpful-content/E-E-A-T documentation, and the Lindgaard et al. 50ms paper.
The *structures* (Cialdini's 7, CCD's 7, E-E-A-T's 4, the credibility layers, the case-study arc, the
ethics table) are well-corroborated and safe to carry forward. The *numbers* are not. Recommendation for
synthesis: lift the structures wholesale, and re-verify or drop every percentage against the primary
sources in section (c).

---

## (c) External sources worth re-mining

Marketing-relevant rows from `references/SOURCES.md`, plus inline citations that have no URL there.
All URLs are as recorded in the file (no fetching performed in this channel — WebSearch budget for
mkt-webdesign is 0 per charter).

### Primary / near-primary — highest re-mining value

| Source | URL | Where cited | Why re-mine |
|---|---|---|---|
| FTC report on dark patterns (2022) | https://www.ftc.gov/news-events/news/press-releases/2022/09/ftc-report-shows-rise-sophisticated-dark-patterns-designed-trick-trap-consumers | `SOURCES.md:107` | The ethics table's legal spine. The skill claims a "2022→2025" enforcement arc (`persuasion-and-conversion.md:127`) but cites only the 2022 report — **the 2023–2025 actions (incl. the Negative Option / click-to-cancel rulemaking) need their own primary URLs and as-of dates.** |
| Google — Creating Helpful, People-First Content | https://developers.google.com/search/docs/fundamentals/creating-helpful-content | `SOURCES.md:111` | Canonical E-E-A-T source. The skill's E-E-A-T section is secondhand via SEJ; go to the primary + the Search Quality Rater Guidelines. |
| Lindgaard et al. — 50ms first impression | https://www.tandfonline.com/doi/abs/10.1080/01449290500330448 | `SOURCES.md:104` | Peer-reviewed; the one hard citation behind the halo claim. Verify the "stable at 17ms" follow-up separately. |
| NN/g — First Impressions & Automatic Processing | https://www.nngroup.com/articles/first-impressions-human-automaticity/ | `SOURCES.md:104` | NN/g is a rung above the agency sources. |
| Deceptive Design (Brignull) ch.15 | https://www.deceptive.design/book/contents/chapter-15 | `SOURCES.md:107` | The dark-pattern taxonomy's originator; better primary than the FTC summary for naming patterns. |
| Stanford Web Credibility Project | **no URL in SOURCES.md** — cited inline at `trust-proof-and-structure.md:10` and `niche-and-vertical-design.md:46` | — | Source of the load-bearing "75% judge credibility on design alone" claim. **UNVERIFIED**: needs the actual Fogg et al. paper + its date (the research is early-2000s; the figure may not survive re-checking on modern traffic). |
| Kurosu & Kashimura ATM study (aesthetic-usability) | **no URL** — `persuasion-and-conversion.md:95` | — | Named without citation; the "aesthetics↔trust r=0.74" figure attached to it is unattributed. |
| Miller 7±2 / Cowan 2001 revision | **no URL** — `persuasion-and-conversion.md:48`, `design-critique.md:31` | — | Cowan (2001) is a real, findable paper; worth a primary cite if working-memory limits inform brief length. |
| Iyengar & Lepper "jam study" (6 vs 24 options) | **no URL** — `persuasion-and-conversion.md:40` | — | Widely cited, partially failed replication — **flag as contested, not settled**, if it reaches the pack. |

### CRO / persuasion practitioner sources (rung 4–5, specimen-and-evidence mix)

| Source | URL | Where cited |
|---|---|---|
| Unbounce — The 7 Principles of Conversion-Centered Design | https://unbounce.com/conversion-centered-design/ | `SOURCES.md:101` — origin of Attention Ratio and the ~31% claim. Unbounce sells landing pages: **specimen and vendor-interested**. |
| CXL — Cialdini's Principles of Persuasion | https://cxl.com/blog/cialdinis-principles-persuasion/ | `SOURCES.md:101` |
| CXL — How to Build a High-Converting Landing Page | https://cxl.com/blog/how-to-build-a-high-converting-landing-page/ | `SOURCES.md:103` |
| CXL — Above the Fold | https://cxl.com/blog/above-the-fold/ | `SOURCES.md:103` |
| Kissmetrics — CTA Button Best Practices | https://kissmetrics.io/blog/cta-button-best-practices | `SOURCES.md:105` — source of the "first-person beats second-person by 10–90%" range; that range is suspiciously wide, verify. |
| Lyssna — Cognitive Biases in UX | https://www.lyssna.com/blog/cognitive-biases-in-ux/ | `SOURCES.md:102` |
| UX Design Institute — The 21 Laws of UX | https://www.uxdesigninstitute.com/blog/laws-of-ux/ | `SOURCES.md:102` |
| Branding Bullshit — Branding Myths: Color Psychology | https://www.brandingbullshit.com/p/branding-myths-color-psychology | `SOURCES.md:105` — the debunking source behind the skill's unusually good "color psychology is largely unsupported folklore" stance (`persuasion-and-conversion.md:98-102`). Worth keeping; it is a myth-correction the marketing pack should inherit. |
| Digital Applied — Pricing Page Psychology 2026 | https://www.digitalapplied.com/blog/subscription-pricing-page-psychology-decision-framework-2026 | `SOURCES.md:106` — source of 3-tier/decoy/center-stage/charm claims. Date-stamped 2026; **volatile, re-check**. |
| Get Therapy Birmingham — Psychology of Empty Space / minimalism sells luxury | https://gettherapybirmingham.com/the-psychology-of-empty-space-why-minimalism-sells-luxury-but-clutter-sells-bargains/ | `SOURCES.md:106` — weakest source in the set (a therapy practice blog); the claim it anchors ("clutter signals bargain") should be re-sourced or dropped. |

### Trust / proof / SEO-structure sources

| Source | URL | Where cited |
|---|---|---|
| Search Engine Journal — Google E-E-A-T: demonstrating first-hand experience | https://www.searchenginejournal.com/google-e-e-a-t-how-to-demonstrate-first-hand-experience/474446/ | `SOURCES.md:111` |
| Webstacks — 8 Trust Signals You Need on Your Website | https://www.webstacks.com/blog/trust-signals | `SOURCES.md:112` |
| Discovered Labs — Social Proof & Trust Signals for CRO | https://discoveredlabs.com/blog/social-proof-and-trust-signals-for-conversion-rate-optimization-implementation-and-impact | `SOURCES.md:112` — source of "15–34% lift" and "93% read reviews." |
| Optimal Workshop — Information Architecture vs Navigation | https://www.optimalworkshop.com/blog/information-architecture-vs-navigation-creating-a-seamless-user-experience | `SOURCES.md:113` |
| Lovable — Website Navigation Best Practices | https://lovable.dev/guides/website-navigation-best-practices-that-convert | `SOURCES.md:113` |
| Search Atlas — Semantic HTML for SEO | https://searchatlas.com/blog/semantic-html/ | `SOURCES.md:114` |
| Devtrios — HTML Heading Hierarchy (H1–H6) | https://devtrios.com/blog/html-heading-hierarchy/ | `SOURCES.md:114` |
| Wix — Structured Data for SEO | https://www.wix.com/seo/learn/resource/structured-data-for-seo | `SOURCES.md:114` — replace with **schema.org + Google Search Central structured-data docs** (primary) when building the pack. |
| Stryve — Design Better B2B Case Studies | https://www.stryvemarketing.com/blog/design-b2b-case-studies/ | `SOURCES.md:115` |
| Articulate — How to Design an Effective Case Study Section | https://www.articulatemarketing.com/blog/how-to-design-an-effective-case-study-section-for-your-website | `SOURCES.md:115` |

### Vertical / niche playbook sources (`SOURCES.md:93-97`)

Architecture: Hinge Marketing https://hingemarketing.com/blog/story/5-essential-features-of-an-architecture-firms-website · Archmark https://www.archmark.co/5-website-design-tips-for-architects · ArchDaily https://www.archdaily.com/996547/5-website-design-tips-for-architects · Pixpa https://www.pixpa.com/blog/how-to-make-an-architecture-portfolio
Interiors / agency / luxury: March Branding https://marchbranding.com/design-insight/25-best-interior-designer-websites · Webflow https://webflow.com/blog/luxury-brand-websites · Theoriq https://www.theoriq.fr/en/post/high-converting-agency-website-examples · HubSpot https://blog.hubspot.com/website/luxury-websites
Photographers / artists: Format https://www.format.com/photography-portfolio · Format (fine art) https://www.format.com/magazine/fine-art-portfolio-strategies
Law / finance / healthcare: Torro https://torro.io/blog/law-firm-web-design-in-2025 · Kitces https://www.kitces.com/blog/financial-advisor-website-design-tips-marketing-conversions-trust-credibility-strategies-tinyfrog-technologyies/ · Digital Roots https://www.digitalrootsmedia.com/blog/healthcare/medical-website-design-hipaa-trust-conversions/
Real estate / SaaS / services: Vide Infra https://videinfra.com/blog/luxury-real-estate-website-design-principles-strategy-and-best-practices · Genesys Growth https://genesysgrowth.com/blog/designing-b2b-saas-landing-pages · Hinge https://hingemarketing.com/blog/story/b2b-website-design-trends-that-work-for-professional-services

Two of these are worth more than the rest: **Hinge Marketing** publishes an actual research program on
professional-services buying behaviour (the "9 in 10 rule out before contact" figure at
`niche-and-vertical-design.md:66` traces here) and **Kitces** is a named-practitioner source with a real
readership in financial advice — both are rung-3-ish rather than rung-5 content marketing. The rest are
agency SEO content and should be treated as specimen unless a claim can be traced further.

### Explicitly *not* worth re-mining for marketing

Every source under `color-and-rhythm`, `decoration`, `depth-and-texture`, `experimental-and-creative`,
`imagery`, `layout-and-composition`, `motion-and-interaction`, `typography`, `design-thinking`, and
`frontend-build-patterns` in `SOURCES.md:6-90, 117-125` — CSS technique articles (CSS-Tricks, Codrops,
Josh Comeau, Smashing, MDN, Chrome dev docs). They belong to design/frontend and were already mined for
those packs. The one borderline row is **99designs, "Visual hierarchy with F and Z patterns"**
(`SOURCES.md:75`) which the CCD principle 2 depends on — cite from design's layout reference rather than
re-mining it here.

---

## (d) Double-home hazards, with a recommended single home

**H1 — the premium↔information dial.** Appears three times in webdesign
(`niche-and-vertical-design.md:7-26`, `section-design-workflow.md:41-58`, `SKILL.md:121-124`) and is
**already shipped in design** at `surface-website.md:36-42`. It is simultaneously a visual-register rule
("premium is signaled by what you leave out") and a message-sequencing rule ("proof leads when stakes are
high"). *Recommendation:* **design keeps it whole** — it is a page-composition decision and design owns
the surface. Marketing owns only the input to it: *what must be proven to this segment*, which is J5.
Marketing must reference design's statement, not restate the dial.

**H2 — landing-page section sequence.** webdesign has "proof before the ask"
(`section-archetypes.md:122-130`) and the per-vertical structures (J4); design already ships the **8 beats
+ question chain** (`surface-website.md:56-60`) and the SaaS sequence (`surface-website.md:71-73`).
*Recommendation:* split by artifact. **Marketing owns the landing-page *requirements brief*** — per
segment: the one goal, the attention-ratio target, the claim each beat must make, the proof each claim
carries, the objections to answer and where. **Design owns the composition** that satisfies the brief.
This is the seam the charter already implies ("landing-page requirements + copy" = marketing; "in-product
content" and page craft = design). Risk if unmanaged: two packs both teaching page section order in
different vocabularies (8 beats vs Hero→UVP→Benefits→Proof→CTA→FAQ→final-CTA) — **the synthesis gate
should pick one vocabulary and have the other cite it.**

**H3 — navigation and IA labelling** (`trust-proof-and-structure.md:49-58`). Nav item counts, flat
hierarchy, plain-vs-clever labels, progressive disclosure. Design ships `information-architecture.md`.
*Recommendation:* **design**. Marketing's legitimate interest is narrow — that the nav exposes the pages
SEO strategy requires (practice-area pages, service-area pages, resource hub) — which is J6, not IA
doctrine.

**H4 — E-E-A-T.** Splits three ways: content requirements (marketing), author-card/team-page design
(design), crawl/rich-result auditing (quality). *Recommendation:* **marketing**, framed as *what the site
must demonstrate and who must be named*. Design's contribution is already covered by its generic
credibility craft; quality audits the outcome. Marketing should not teach author-card layout.

**H5 — semantic structure, heading hierarchy, JSON-LD** (`trust-proof-and-structure.md:62-72`).
Verified gap: **neither shipped pack covers this.** frontend's `accessibility.md` covers semantic HTML for
a11y, not for rich results; grep for `json-ld|schema.org|structured data` across both packs' references
returns nothing. *Recommendation:* **marketing owns the requirement and the entity map** ("this page must
emit Organization + FAQPage + Review; these fields must match visible content"), and ships structured-data
*examples* — which the charter's code policy explicitly permits. **frontend implements** the markup;
**quality** verifies eligibility. Marketing must not drift into "how to add a script tag in Next.js."

**H6 — pricing-page psychology** (`persuasion-and-conversion.md:117-122`, `114-116`). The charter assigns
**pricing decisions → product**. But three-tier/decoy/center-stage/charm are *presentation* mechanics on a
page marketing is briefing. *Recommendation:* **product owns the price and the tier structure; marketing
owns the pricing *page's* message match, proof placement, and anchoring narrative.** The decoy tier is the
genuinely ambiguous case — recommend it lands with **product**, since adding a dominated tier is a
packaging decision with revenue consequences, not a copy decision. **Flag for the synthesis gate** — this
is the sharpest boundary question channel E surfaces.

**H7 — cognitive biases: which are messaging, which are interaction.** `persuasion-and-conversion.md:29-49`
mixes them. *Recommendation:* **marketing takes** anchoring, framing, loss aversion/endowment, von
Restorff (as "spend distinctiveness on the CTA"), scarcity, unity, social proof. **design takes** Hick's
law, Fitts's law, Zeigarnik, peak-end, Miller/cognitive load — these govern control behaviour and flow,
and design's `critique.md` already carries the working-memory rule via `design-critique.md:29-36`. Draw
the line explicitly in the pack or both sides will claim all nine.

**H8 — copy fidelity ladder** (`section-archetypes.md:82-93`). **Already shipped in design** at
`information-architecture.md:67` (verbatim / preserve+lightly-tighten / rewrite, including the
keyword-preservation clause). *Recommendation:* **design keeps the ladder** (it is a rebuild-scoping
decision); **marketing owns the SEO-migration requirement** — which keywords and intents must survive,
and how you know they did. Marketing should cite design's ladder rather than duplicate it. Note this is a
case where the extraction is **already complete** — no loss if webdesign disappears today.

**H9 — redirect maps and SEO equity** (`frontend-build-patterns.md:214-218`, `section-archetypes.md:32-37`).
*Recommendation:* **frontend/operate own the redirect implementation; marketing owns the requirement**
that a rewrite must not lose ranking, and the pre-migration inventory of ranking URLs. The load-bearing
marketing fact is the one webdesign states plainly: *redirects alone do not carry ranking* — the copy has
to keep the intent.

**H10 — "75% judge credibility on design" / the 50ms halo.** Sits in webdesign's persuasion and trust
files but is fundamentally an argument *for visual quality*. *Recommendation:* **design**, cited once by
marketing when justifying why a landing page brief demands real photography over stock. Marketing must not
build a section around it — especially given the unverified provenance (H-note in section c).

**H11 — the ethics/dark-patterns table.** Could plausibly live in marketing (it governs persuasion
claims), product (it governs pricing/subscription mechanics), or quality (it is checkable). *Recommendation:*
**marketing**, as a pack-level invariant — because marketing is the pack that teaches the mechanisms, and
the table's whole point is that the mechanism and the abuse are the same move. Quality can verify against
it; product inherits the subscription clauses.

---

## (e) "Nothing left behind" audit — line-range accounting per file

Every file's full line range is accounted for by a disposition above.

| File | Total | Accounted ranges | Complete? |
|---|---|---|---|
| `SKILL.md` | 164 | 1–20 DROP · 22–41 DROP · 43–76 STAYS · 78–105 DROP · 107–145 STAYS(+1 LIFT note) · 147–164 DROP (lines 21, 42, 77, 106, 146 are blank/separators) | ✅ |
| `persuasion-and-conversion.md` | 139 | 1–7 LIFT (ethical frame) · 12–25 LIFT (Cialdini) · 29–38 LIFT (messaging biases) · 39–49 STAYS→design (interaction laws) · 53–70 LIFT (CCD + ONE-goal) · 74–85 LIFT (copy↔design) · 89–96 STAYS→design (halo/aesthetic-usability) · 97–102 LIFT (color-psychology myth correction) · 106–113 split: `107-111` STAYS→design (whitespace/editorial), `112-113` LIFT (scarcity/exclusivity) · 114–122 LIFT (pricing, H6) · 126–139 LIFT (ethics table) | ✅ |
| `trust-proof-and-structure.md` | 111 | 1–5 LIFT (framing) · 9–15 LIFT · 19–29 LIFT · 33–45 LIFT · 49–58 LIFT-with-H3 · 62–71 LIFT · 72–76 STAYS→frontend/quality (CWV) · 77–79 LIFT (internal linking, heading pitfall) · 83–95 LIFT · 99–111 STAYS→design (dense-info-without-killing-premium) | ✅ |
| `niche-and-vertical-design.md` | 220 | 1–5 LIFT (purpose) · 7–26 STAYS→design per H1 · 30–56 LIFT (cross-cutting doctrine; register clauses at `34-36` STAYS) · 60–62 LIFT · 64–83 LIFT (architecture; `77-79` register STAYS) · 85–91 LIFT (`89-90` register STAYS) · 93–101 LIFT (`98-99` register STAYS) · 103–112 LIFT (`108-110` register STAYS) · 114–123 LIFT (`120-122` register STAYS) · 125–134 LIFT (`132-133` register STAYS) · 136–145 LIFT (`141-143` register STAYS) · 147–156 LIFT (`154-155` register STAYS) · 158–169 LIFT (`165-167` register STAYS) · 171–182 LIFT (`180-181` register STAYS) · 184–195 LIFT (`192-193` register STAYS) · 199–212 LIFT (axis table) · 214–220 LIFT (procedure) | ✅ |
| `section-archetypes.md` | 211 | 1–81 STAYS→design IA/frontend · 82–93 LIFT-with-H8 · 94–121 STAYS→design IA · 122–130 LIFT-with-H2 · 132–211 STAYS→design IA/frontend | ✅ |
| `section-design-workflow.md` | 142 | 1–40 STAYS→design · 41–58 STAYS→design (dial restatement, H1) · 60–142 STAYS→design | ✅ |
| `frontend-design-principles.md` | 183 | 1–158 STAYS→design `visual-direction.md` · 159–183 STAYS→design `content.md` (UI microcopy, explicitly not acquisition copy) | ✅ |
| `design-thinking.md` | 97 | 1–97 STAYS→design (`visual-direction.md` §B3 fixes already shipped at `visual-direction.md:86`; `critique.md` for B5/B6) | ✅ |
| `design-direction.md` | 178 | 1–178 STAYS→design `design-systems.md` + tooling | ✅ |
| `design-critique.md` | 96 | 1–68 STAYS→design `critique.md` · 70–96 STAYS→quality (go/no-go gate half) | ✅ |
| `anti-default-catalog.md` | 64 | 1–64 STAYS→design `visual-direction.md` | ✅ |
| `art-review.md` | 213 | 1–213 STAYS→design `critique.md` (capture-tooling contract `29-58` is arguably frontend/quality tooling; recommend design keeps it with the review it serves) | ✅ |
| `color-and-rhythm.md` | 82 | 1–82 STAYS→design `color.md` | ✅ |
| `typography.md` | 114 | 1–114 STAYS→design `typography.md` | ✅ |
| `layout-and-composition.md` | 226 | 1–226 STAYS→design `layout-composition.md` (`176-181` F/Z patterns referenced by CCD principle 2 — cross-reference, don't copy) | ✅ |
| `depth-and-texture.md` | 186 | 1–186 STAYS→design `imagery-depth-decoration.md` | ✅ |
| `imagery.md` | 189 | 1–189 STAYS→design `imagery-depth-decoration.md` | ✅ |
| `decoration.md` | 105 | 1–105 STAYS→design `imagery-depth-decoration.md` | ✅ |
| `motion-and-interaction.md` | 129 | 1–122 STAYS→design `motion.md` / frontend · 123–129 STAYS→design (motion principles) | ✅ |
| `experimental-and-creative.md` | 143 | 1–143 STAYS→design `surface-website.md:77` (already compressed there) | ✅ |
| `frontend-build-patterns.md` | 473 | 1–213 STAYS→frontend · 214–218 LIFT-with-H9 · 219–300 STAYS→frontend · 302–473 STAYS→frontend (bendc-derived craft appendix) | ✅ |
| `tailwind-v4-theme.md` | 118 | 1–118 STAYS→frontend `tailwind.md` | ✅ |
| `SOURCES.md` | 124 | 1–5 header · 6–90 + 117–125 not-for-marketing (craft sources, section c) · 91–116 mined into section (c) | ✅ |

**Total: 3,707 / 3,707 lines dispositioned.** No range is unassigned.

### Loss risk if webdesign is deleted today

Content that exists **only** here and in no shipped pack, ordered by what would hurt most:
1. The **ethics / dark-pattern table** and the FTC framing (`persuasion-and-conversion.md:126-139`) — no
   equivalent anywhere in design, frontend, quality, or product.
2. **Conversion-Centered Design + Attention Ratio + the ONE-goal rule**
   (`persuasion-and-conversion.md:53-70`) — design has the 8 beats but not the ratio metric or the
   homepage-vs-campaign-page distinction.
3. **Cialdini's 7 mapped to page sections with named failure modes** (`persuasion-and-conversion.md:12-25`).
4. **E-E-A-T as page requirements** + the **social-proof placement lever**
   (`trust-proof-and-structure.md:19-45`).
5. **SEO-aware structure incl. JSON-LD entity mapping** (`trust-proof-and-structure.md:62-79`) — verified
   absent from both shipped packs.
6. **Case-study anatomy** (`trust-proof-and-structure.md:83-95`).
7. The **vertical playbooks' audience/goal/proof/structure content** — design kept only the register/colour
   cues and curation counts (`surface-website.md:42`), so ~80% of `niche-and-vertical-design.md` is
   currently unhomed.
8. The **color-psychology myth correction** (`persuasion-and-conversion.md:98-102`) — a rare
   debunking that most marketing sources get wrong; worth carrying forward deliberately.

Items 1–8 are exactly the LIFT body in section (b). Nothing else in the skill would be lost that the
family does not already hold.
