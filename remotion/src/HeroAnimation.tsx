import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { themes, MONO, SANS, type ThemeName, type Theme } from "./theme";

// Hero: the through-line of `marketing` — position the product, then create, capture and attribute
// demand, and grade every claim you lean on. The naive "the dashboard says it worked" claim is
// corrected into three distinct facts: what a platform number reports, the counterfactual that
// leaves no trace, and the grading duty this pack makes an operating default; eBay's own field
// experiment shows the gap between observed and incremental ROI is not marginal but a sign flip;
// the flagship image is the honesty hierarchy of measurement methods with the scale gate drawn
// across it — three rigorous methods sit above what a solo builder can reach, and four moves remain
// below it; the faceted router composes one primary job with at most one base surface plus two
// additive overlays; four of the field's most-quoted claims get graded, including one falsified
// outright; and the handoff carries copy, requirements and measurement specs to design, frontend
// and data while marketing writes no production code and claims no experiment as its own.
// ~57s, loops (opens/closes empty).
//
// Pacing model (reader-first): every scene animates its content IN, then HOLDS fully still for a
// reading beat (~2.3-3.6s) before the container fades OUT. The fade-out begins at dur - hold, so each
// scene's dur = content-in-end + reading-hold + fade. Never let the next scene start before this one
// has been readable at rest.
//
// Scene map (30fps):
//   S1 grade      0-210       reported / counterfactual / grade — the "dashboard says it worked" claim, corrected
//   S2 gap        210-500     eBay: naive ROI vs the experiment's −63% — the gap is a sign flip, not a margin
//   S3 flagship   500-840     THE centerpiece: the honesty hierarchy, and the scale gate drawn across it
//   S4 route      840-1180    the faceted router: one job x one base surface + two additive overlays
//   S5 evidence   1180-1470   four quoted claims, graded — including one falsified by four evidence classes
//   S6 handoff    1470-1710   copy, requirements, measurement specs — and what this work cannot prove

const EASE = Easing.bezier(0.16, 1, 0.3, 1);

function envelope(frame: number, dur: number, hold = 26) {
  const opIn = interpolate(frame, [0, hold], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const opOut = interpolate(frame, [dur - hold, dur], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  const y = interpolate(frame, [0, hold], [14, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE });
  return { opacity: Math.min(opIn, opOut), y };
}

const step = (frame: number, a: number, b: number, ease = false) =>
  interpolate(frame, [a, b], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease ? EASE : undefined });

const SceneTitle: React.FC<{ t: Theme; kicker: string; title: string; accent?: string }> = ({ t, kicker, title, accent }) => (
  <div style={{ textAlign: "center", marginBottom: 30 }}>
    <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600, fontSize: 17, color: accent ?? t.accent, marginBottom: 12 }}>
      {kicker}
    </div>
    <div style={{ fontFamily: MONO, fontSize: 38, color: t.ink, letterSpacing: "-0.02em" }}>{title}</div>
  </div>
);

// -- S1 . reported / counterfactual / grade ----------------------------------------
const ClaimLine: React.FC<{ t: Theme; text: string; frame: number; from: number; color?: string }> = ({ t, text, frame, from, color }) => {
  const chars = Math.floor(interpolate(frame, [from, from + 46], [0, text.length], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  const typed = text.slice(0, chars);
  const caretOn = Math.floor(frame / 8) % 2 === 0 && chars < text.length && frame > from;
  const op = step(frame, from - 4, from + 6);
  return (
    <div style={{ opacity: op, color: color ?? t.ink }}>
      {typed}
      <span style={{ opacity: caretOn ? 1 : 0, color: t.accent }}>▋</span>
    </div>
  );
};

const TermRow: React.FC<{ t: Theme; label: string; body: string; owner: string; appear: number; labelColor?: string }> = ({ t, label, body, owner, appear, labelColor }) => (
  <div style={{ opacity: appear, translate: `0 ${interpolate(appear, [0, 1], [10, 0])}px`, display: "grid", gridTemplateColumns: "140px 1fr 150px", gap: 16, alignItems: "center", padding: "10px 0", borderTop: `1px solid ${t.line}` }}>
    <div style={{ fontFamily: MONO, fontSize: 15, fontWeight: 700, color: labelColor ?? t.accent }}>{label}</div>
    <div style={{ fontFamily: SANS, fontSize: 14, color: t.ink, lineHeight: 1.4 }}>{body}</div>
    <div style={{ fontFamily: MONO, fontSize: 12.5, color: t.muted, textAlign: "right" }}>{owner}</div>
  </div>
);

const SceneGrade: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 22);
  const r1 = step(frame, 96, 118, true);
  const r2 = step(frame, 112, 134, true);
  const r3 = step(frame, 128, 150, true);
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, width: 1020 }}>
        <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600, fontSize: 16, color: t.muted, marginBottom: 20, textAlign: "center" }}>
          the question the field avoids
        </div>
        <div style={{ background: t.codeBg, border: `1px solid ${t.line}`, borderRadius: 12, padding: "26px 32px", fontFamily: MONO, fontSize: 19, lineHeight: 2, color: t.ink }}>
          <ClaimLine t={t} text="✓ campaign live. the dashboard says it worked." frame={frame} from={8} color={t.good} />
          <ClaimLine t={t} text="would those conversions have happened anyway?" frame={frame} from={64} />
        </div>
        <div style={{ marginTop: 22, background: t.panel, border: `1px solid ${t.line}`, borderRadius: 12, padding: "6px 20px" }}>
          <TermRow t={t} label="reported" body="a platform number answers what fired last — never what was incremental" owner="your dashboard" appear={r1} />
          <TermRow t={t} label="counterfactual" body="a conversion that would have happened anyway looks identical to one you caused" owner="unmeasured" appear={r2} labelColor={t.bad} />
          <TermRow t={t} label="grade it" body="every claim carries its evidence tier and the point where it stops applying" owner="marketing ⭐" appear={r3} labelColor={t.good} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -- S2 . the gap is not marginal ---------------------------------------------------
// One shared linear scale across all three bars, anchored on a visible zero: the experimental
// result is a speck on the wrong side of the axis, which is the whole point. Nothing is
// rescaled to make it visible.
const ZERO_X = 74;
const PX_PER_POINT = 520 / 4100;

const RoiBar: React.FC<{
  t: Theme;
  label: string;
  sub: string;
  roi: number;
  color: string;
  grow: number;
  value: string;
}> = ({ t, label, sub, roi, color, grow, value }) => {
  const w = Math.abs(roi) * PX_PER_POINT * grow;
  const negative = roi < 0;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "230px 1fr", gap: 20, alignItems: "center", marginTop: 16 }}>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontFamily: MONO, fontSize: 14, color: t.ink, fontWeight: 600 }}>{label}</div>
        <div style={{ fontFamily: SANS, fontSize: 11.5, color: t.muted, marginTop: 2 }}>{sub}</div>
      </div>
      <div style={{ position: "relative", height: 36 }}>
        <div style={{ position: "absolute", left: ZERO_X, top: 0, bottom: 0, width: 2, background: t.line }} />
        <div
          style={{
            position: "absolute",
            top: 7,
            left: negative ? ZERO_X - w : ZERO_X,
            width: w,
            height: 22,
            background: color,
            borderRadius: negative ? "5px 0 0 5px" : "0 5px 5px 0",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 9,
            left: negative ? ZERO_X + 16 : ZERO_X + w + 12,
            fontFamily: MONO,
            fontSize: 15,
            fontWeight: 700,
            color,
            opacity: grow > 0.75 ? 1 : 0,
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

const SceneGap: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const g1 = step(frame, 34, 84, true);
  const g2 = step(frame, 68, 118, true);
  const g3 = step(frame, 116, 172, true);
  const flip = step(frame, 176, 202, true);
  const gen = step(frame, 210, 238, true);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center", width: 1060 }}>
        <SceneTitle t={t} kicker="platform-reported is not incremental" title="the gap is not marginal — it is a sign flip" />
        <div style={{ width: 940 }}>
          <RoiBar t={t} label="naive OLS, uncontrolled" sub="the observational estimate" roi={4100} color={t.glyph} grow={g1} value="+4,100% ROI" />
          <RoiBar t={t} label="naive OLS, with controls" sub="time and geo controls added" roi={1400} color={t.muted} grow={g2} value="+1,400% ROI" />
          <RoiBar t={t} label="the actual experiment" sub="ads switched off in randomized markets" roi={-63} color={t.bad} grow={g3} value="−63% ROI · 95% CI [−124%, −3%]" />
        </div>
        <div style={{ width: 940, display: "grid", gridTemplateColumns: "230px 1fr", gap: 20, opacity: g3 }}>
          <div />
          <div style={{ position: "relative", height: 16 }}>
            <div style={{ position: "absolute", left: ZERO_X - 4, fontFamily: MONO, fontSize: 11.5, color: t.muted }}>0</div>
            <div style={{ position: "absolute", left: ZERO_X + 40, fontFamily: MONO, fontSize: 11.5, color: t.muted }}>one shared scale — nothing rescaled to make it visible</div>
          </div>
        </div>
        <div style={{ marginTop: 26, opacity: flip, textAlign: "center" }}>
          <div style={{ fontFamily: MONO, fontSize: 16, color: t.ink }}>
            eBay's own paid-search field experiment · <span style={{ color: t.muted }}>Blake, Nosko &amp; Tadelis, <i>Econometrica</i> 83(1), 2015</span>
          </div>
        </div>
        <div style={{ marginTop: 18, opacity: gen, background: t.amberBg, border: `1px solid ${t.amber}`, borderRadius: 8, padding: "11px 18px", fontFamily: SANS, fontSize: 13, color: t.ink, maxWidth: 830, textAlign: "center", lineHeight: 1.5 }}>
          <b style={{ color: t.amber }}>The mechanism generalizes:</b> people clicking high-intent ads were mostly going to buy anyway — which is
          why retargeting is the format most likely to overstate its own incrementality.
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -- S3 . THE honesty hierarchy, and the scale gate ---------------------------------
const METHODS: { name: string; answers: string; reach: "in" | "out" }[] = [
  { name: "MMM", answers: "cross-channel contribution, diminishing returns", reach: "out" },
  { name: "geo-lift", answers: "market-level incrementality, survives ATT", reach: "out" },
  { name: "holdout / lift test", answers: "the true incremental effect of exposure", reach: "out" },
  { name: "self-reported", answers: "directional channel awareness, cheaply", reach: "in" },
  { name: "multi-touch attribution", answers: "a credit split across observed touchpoints", reach: "in" },
  { name: "platform-reported", answers: "which touchpoint fired last", reach: "in" },
];

const MethodRow: React.FC<{ t: Theme; name: string; answers: string; appear: number; dimmed: number }> = ({ t, name, answers, appear, dimmed }) => (
  <div
    style={{
      opacity: appear * interpolate(dimmed, [0, 1], [1, 0.32]),
      translate: `0 ${interpolate(appear, [0, 1], [8, 0])}px`,
      display: "grid",
      gridTemplateColumns: "230px 1fr",
      gap: 18,
      alignItems: "center",
      padding: "9px 16px",
      borderTop: `1px solid ${t.line}`,
    }}
  >
    <div style={{ fontFamily: MONO, fontSize: 14.5, fontWeight: 700, color: t.ink }}>{name}</div>
    <div style={{ fontFamily: SANS, fontSize: 13, color: t.muted, lineHeight: 1.4 }}>{answers}</div>
  </div>
);

const Move: React.FC<{ t: Theme; n: string; label: string; appear: number }> = ({ t, n, label, appear }) => (
  <div style={{ opacity: appear, translate: `0 ${interpolate(appear, [0, 1], [8, 0])}px`, border: `1px solid ${t.accent}`, background: t.codeBg, borderRadius: 8, padding: "8px 13px", display: "flex", alignItems: "baseline", gap: 8 }}>
    <span style={{ fontFamily: MONO, fontSize: 11, color: t.accent, fontWeight: 700 }}>{n}</span>
    <span style={{ fontFamily: MONO, fontSize: 12.5, color: t.ink }}>{label}</span>
  </div>
);

const SceneFlagship: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 24);
  const gate = step(frame, 126, 156, true);
  const moves = step(frame, 186, 214, true);
  const caption = step(frame, 246, 276, true);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center", width: 1060 }}>
        <SceneTitle t={t} kicker="attribution and measurement . the flagship" title="the honesty hierarchy, and where your scale stops" />
        <div style={{ width: 940, background: t.panel, border: `1px solid ${t.line}`, borderRadius: 12, position: "relative", paddingBottom: 4 }}>
          {METHODS.map((m, i) => {
            const ap = step(frame, 20 + i * 13, 44 + i * 13, true);
            return <MethodRow key={m.name} t={t} name={m.name} answers={m.answers} appear={ap} dimmed={m.reach === "out" ? gate : 0} />;
          })}
          {/* the scale gate: a line drawn across the ladder */}
          <div
            style={{
              position: "absolute",
              left: -14,
              right: -14,
              top: 3 * 37 + 2,
              height: 0,
              borderTop: `2px dashed ${t.bad}`,
              opacity: gate,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: -14,
              top: 3 * 37 - 22,
              fontFamily: MONO,
              fontSize: 12,
              color: t.bad,
              background: t.bg,
              padding: "2px 8px",
              opacity: gate,
              fontWeight: 700,
            }}
          >
            above this line: out of reach at n=1
          </div>
        </div>
        <div style={{ marginTop: 30, display: "flex", gap: 10, opacity: moves, flexWrap: "wrap", justifyContent: "center" }}>
          <Move t={t} n="1" label="UTM discipline" appear={moves} />
          <Move t={t} n="2" label="self-reported attribution" appear={moves} />
          <Move t={t} n="3" label="geo-split lift, where geography allows" appear={moves} />
          <Move t={t} n="4" label="a decision rule written before the result exists" appear={moves} />
        </div>
        <div style={{ marginTop: 20, opacity: caption, fontFamily: SANS, fontSize: 13.5, color: t.muted, textAlign: "center", maxWidth: 840, lineHeight: 1.55 }}>
          A valid lift test can need <b style={{ color: t.ink }}>more than 10 million person-weeks</b> (Lewis &amp; Rao, <i>QJE</i> 130(4), 2015);
          MMM's own vendors gate it at <b style={{ color: t.ink }}>two to three years of weekly data</b>. What remains at n=1 is real — and saying
          so is the job.
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -- S4 . the faceted router --------------------------------------------------------
const Chip: React.FC<{ t: Theme; label: string; on?: boolean; star?: boolean; dim?: boolean; appear: number }> = ({ t, label, on, star, dim, appear }) => {
  const bg = star || on ? t.accent : dim ? "transparent" : t.codeBg;
  const border = dim ? t.dim : star || on ? t.accent : t.line;
  const color = star || on ? t.accentInk : dim ? t.dim : t.muted;
  return (
    <div style={{ opacity: appear, scale: String(interpolate(appear, [0, 1], [0.9, 1])), fontFamily: MONO, fontSize: 12, padding: "6px 11px", borderRadius: 8, background: bg, border: `1px solid ${border}`, color, fontWeight: star || on || dim ? 700 : 400, whiteSpace: "nowrap" }}>
      {label}
    </div>
  );
};

const RLane: React.FC<{ t: Theme; label: string; sub: string; children: React.ReactNode; appear: number }> = ({ t, label, sub, children, appear }) => (
  <div style={{ opacity: appear, display: "grid", gridTemplateColumns: "180px 1fr", gap: 18, alignItems: "center", marginTop: 15 }}>
    <div style={{ textAlign: "right" }}>
      <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.09em", fontWeight: 700, fontSize: 12.5, color: t.muted }}>{label}</div>
      <div style={{ fontFamily: MONO, fontSize: 10.5, color: t.glyph, marginTop: 2 }}>{sub}</div>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>{children}</div>
  </div>
);

const JOBS = [
  "attribution-and-measurement ⭐",
  "positioning-and-messaging",
  "audience-and-segmentation",
  "marketing-science",
  "go-to-market-and-launch",
  "seo-strategy",
  "ai-search",
  "content-strategy",
  "landing-pages-and-conversion",
  "lifecycle-and-email",
  "paid-acquisition",
  "organic-social-and-community",
  "partnerships-pr-and-affiliates",
  "app-store-optimization",
];
const SURFACES = ["self-serve SaaS", "B2B sales-assisted", "developer tool"];

const SceneRoute: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 24);
  const l1 = step(frame, 20, 40);
  const l2 = step(frame, 166, 186);
  const l3 = step(frame, 208, 228);
  const compose = step(frame, 250, 274, true);
  const readset = step(frame, 272, 296, true);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, width: 1060 }}>
        <SceneTitle t={t} kicker="SKILL.md is a router, not a script" title="one job × one base surface + overlays" />
        <RLane t={t} label="① primary job" sub="exactly one, of 14" appear={l1}>
          {JOBS.map((j, i) => {
            const ap = step(frame, 40 + i * 8, 58 + i * 8, true);
            return <Chip key={j} t={t} label={j} star={i === 0} appear={ap} />;
          })}
        </RLane>
        <RLane t={t} label="② base surface" sub="at most one, of 3" appear={l2}>
          {SURFACES.map((s, i) => {
            const ap = step(frame, 186 + i * 10, 206 + i * 10, true);
            return <Chip key={s} t={t} label={s} on={i === 0} appear={ap} />;
          })}
          <div style={{ opacity: step(frame, 206, 226, true), fontFamily: MONO, fontSize: 11, color: t.muted }}>
            self-serve SaaS assumed when unstated — and said out loud
          </div>
        </RLane>
        <RLane t={t} label="③ additive overlays" sub="stack on, never instead" appear={l3}>
          <Chip t={t} label="surface-zero-audience" dim appear={step(frame, 228, 248, true)} />
          <Chip t={t} label="surface-agentic" dim appear={step(frame, 236, 256, true)} />
          <div style={{ opacity: step(frame, 244, 264, true), fontFamily: MONO, fontSize: 11, color: t.muted, border: `1px dashed ${t.line}`, borderRadius: 8, padding: "6px 11px" }}>
            no list yet · a model authors or decides at scale
          </div>
        </RLane>
        <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12, opacity: compose }}>
          <div style={{ flex: 1, height: 1, background: t.line }} />
          <div style={{ fontFamily: MONO, fontSize: 12.5, color: t.muted }}>compose →</div>
          <div style={{ flex: 1, height: 1, background: t.line }} />
        </div>
        <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 10, opacity: readset, alignItems: "center" }}>
          <div style={{ fontFamily: MONO, fontSize: 13, color: t.accent, background: t.codeBg, border: `1px solid ${t.accent}`, borderRadius: 8, padding: "7px 14px" }}>attribution-and-measurement.md</div>
          <div style={{ fontFamily: MONO, fontSize: 13, color: t.accent, background: t.codeBg, border: `1px solid ${t.accent}`, borderRadius: 8, padding: "7px 14px" }}>surface-selfserve-saas.md</div>
          <div style={{ fontFamily: MONO, fontSize: 12, color: t.muted }}><b style={{ color: t.ink }}>2 of 20</b> loaded · read fully</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -- S5 . four quoted claims, graded ------------------------------------------------
const GradeRow: React.FC<{ t: Theme; claim: string; verdict: string; note: string; tier: string; tierColor: string; appear: number }> = ({ t, claim, verdict, note, tier, tierColor, appear }) => (
  <div style={{ opacity: appear, translate: `0 ${interpolate(appear, [0, 1], [10, 0])}px`, display: "grid", gridTemplateColumns: "82px 300px 1fr", gap: 16, alignItems: "flex-start", padding: "12px 0", borderTop: `1px solid ${t.line}` }}>
    <div style={{ fontFamily: MONO, fontSize: 11.5, fontWeight: 700, color: tierColor, border: `1px solid ${tierColor}`, borderRadius: 6, padding: "2px 0", textAlign: "center" }}>{tier}</div>
    <div style={{ fontFamily: MONO, fontSize: 13, color: t.ink, lineHeight: 1.4 }}>{claim}</div>
    <div>
      <div style={{ fontFamily: SANS, fontSize: 13, color: t.ink, lineHeight: 1.4 }}>{verdict}</div>
      <div style={{ fontFamily: MONO, fontSize: 11, color: t.muted, marginTop: 3 }}>{note}</div>
    </div>
  </div>
);

const SceneEvidence: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur);
  const headline = step(frame, 8, 30);
  const r1 = step(frame, 40, 62, true);
  const r2 = step(frame, 60, 82, true);
  const r3 = step(frame, 80, 102, true);
  const r4 = step(frame, 100, 122, true);
  const claim = step(frame, 156, 184, true);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, width: 1040 }}>
        <SceneTitle t={t} kicker="marketing-science . the adjudication layer" title="the field's most-quoted claims, graded" />
        <div style={{ opacity: headline, fontFamily: MONO, fontSize: 13, color: t.muted, marginBottom: 8, textAlign: "center" }}>
          replicated law · awards corpus · arithmetic heuristic · falsified — cite them differently
        </div>
        <div style={{ background: t.panel, border: `1px solid ${t.line}`, borderRadius: 12, padding: "4px 22px" }}>
          <GradeRow
            t={t}
            tier="(a)"
            tierColor={t.good}
            claim="double jeopardy"
            verdict="Decades-replicated on consumer panels, peer-reviewed — and still no SaaS dataset in it."
            note="Ehrenberg 1959 · B2B replications exist, smaller and younger"
            appear={r1}
          />
          <GradeRow
            t={t}
            tier="(a)-adj"
            tierColor={t.amber}
            claim="the 60/40 brand-vs-activation split"
            verdict="An IPA Databank number — a self-submitted awards corpus, not a panel. B2C."
            note="the B2B counterpart: no primary PDF located — verify, never quote a settled split"
            appear={r2}
          />
          <GradeRow
            t={t}
            tier="(c) at n=1"
            tierColor={t.amber}
            claim={'"95% of buyers aren\'t in market"'}
            verdict="Derived arithmetically, not measured — no dataset, category list or sample size disclosed."
            note="its own author calls it a heuristic; strip the quarterly window and it becomes a false claim"
            appear={r3}
          />
          <GradeRow
            t={t}
            tier="falsified"
            tierColor={t.bad}
            claim="publish llms.txt for AI visibility"
            verdict="Not merely unproven — falsified by four independent, non-citing evidence classes."
            note="cheap, low-risk, unverified payoff — never a recommended tactic"
            appear={r4}
          />
        </div>
        <div style={{ marginTop: 22, fontFamily: SANS, fontSize: 14.5, color: t.ink, textAlign: "center", opacity: claim, lineHeight: 1.5 }}>
          an honest <span style={{ color: t.accent, fontWeight: 700 }}>“nobody has measured this, and here is why”</span> is a deliverable, not a failure to produce one.
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -- S6 . the handoff ----------------------------------------------------------------
const NextSkillCol: React.FC<{ t: Theme; label: string; body: string; appear: number }> = ({ t, label, body, appear }) => (
  <div style={{ opacity: appear, translate: `0 ${interpolate(appear, [0, 1], [10, 0])}px`, border: `1px solid ${t.line}`, background: t.panel, borderRadius: 10, padding: "12px 16px", width: 250 }}>
    <div style={{ fontFamily: MONO, fontSize: 13.5, fontWeight: 700, color: t.ink, marginBottom: 5 }}>{label}</div>
    <div style={{ fontFamily: SANS, fontSize: 12, color: t.muted, lineHeight: 1.45 }}>{body}</div>
  </div>
);

const SceneHandoff: React.FC<{ t: Theme; dur: number }> = ({ t, dur }) => {
  const frame = useCurrentFrame();
  const { opacity, y } = envelope(frame, dur, 22);
  const build = step(frame, 16, 38);
  const arrow = step(frame, 60, 80);
  const cols = step(frame, 78, 100);
  const cap = step(frame, 156, 182, true);

  const emitted: [string, string][] = [
    ["positioning", ": the claim a buyer believes"],
    ["page requirements", ": goal, claims, proof"],
    ["measurement spec", ": method + what it can't answer"],
    ["consent basis", ": decided before the copy"],
  ];

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ translate: `0 ${y}px`, display: "flex", flexDirection: "column", alignItems: "center", width: 1060 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <div style={{ opacity: build, border: `1px solid ${t.accent}`, background: t.codeBg, borderRadius: 10, padding: "16px 20px", fontFamily: MONO, fontSize: 12, color: t.muted, width: 400 }}>
            <div style={{ color: t.accent, fontWeight: 700, marginBottom: 8 }}>marketing writes</div>
            {emitted.map(([k, v], i) => {
              const op = step(frame, 32 + i * 9, 48 + i * 9);
              return (
                <div key={k} style={{ opacity: op, whiteSpace: "nowrap" }}>
                  <span style={{ color: t.accent }}>{k}</span><span style={{ color: t.ink }}>{v}</span>
                </div>
              );
            })}
          </div>
          <div style={{ fontFamily: MONO, fontSize: 30, color: t.accent, opacity: arrow }}>→</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, opacity: cols }}>
            <NextSkillCol t={t} label="design · frontend" body="compose the page and build it — marketing supplies what it must claim and prove, never the code" appear={cols} />
            <NextSkillCol t={t} label="data" body="instrument the measurement — marketing owns the requirements, not the pipeline or the SQL" appear={cols} />
            <NextSkillCol t={t} label="growth" body="test the hypothesis marketing proposed — and report the result, which marketing never claims as its own" appear={cols} />
          </div>
        </div>
        <div style={{ marginTop: 30, fontFamily: MONO, fontSize: 18, color: t.ink, opacity: cap, textAlign: "center", maxWidth: 920, lineHeight: 1.5 }}>
          what actually happened — and <span style={{ color: t.accent }}>what you can honestly know at your scale</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// -- persistent chrome + master timeline ----------------------------------------
const BOUNDS = [210, 500, 840, 1180, 1470, 1710];
const LABELS = ["grade", "the gap", "hierarchy", "route", "evidence", "handoff"];

const PhaseBar: React.FC<{ t: Theme; frame: number }> = ({ t, frame }) => {
  const active = Math.max(0, BOUNDS.findIndex((b) => frame < b));
  return (
    <div style={{ position: "absolute", bottom: 34, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 15 }}>
      {LABELS.map((l, i) => (
        <div key={l} style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: i === active ? t.accent : t.line, scale: String(i === active ? 1.3 : 1) }} />
          <div style={{ fontFamily: SANS, textTransform: "uppercase", letterSpacing: "0.09em", fontSize: 12, fontWeight: 600, color: i === active ? t.ink : t.muted, opacity: i === active ? 1 : 0.55 }}>{l}</div>
        </div>
      ))}
    </div>
  );
};

export const HeroAnimation: React.FC<{ theme: ThemeName }> = ({ theme }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = themes[theme];

  const intro = step(frame, 0, 14);
  const outro = interpolate(frame, [durationInFrames - 16, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const master = Math.min(intro, outro);
  const glow = interpolate(Math.sin(frame / 90), [-1, 1], [0.5, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: t.bg, fontFamily: SANS }}>
      <AbsoluteFill style={{ background: `radial-gradient(circle at 82% 16%, color-mix(in srgb, ${t.accent} 13%, transparent), transparent 44%), radial-gradient(circle at 8% 92%, color-mix(in srgb, ${t.dim} 10%, transparent), transparent 48%)`, opacity: glow }} />
      <AbsoluteFill style={{ opacity: master }}>
        <Sequence durationInFrames={210}><SceneGrade t={t} dur={210} /></Sequence>
        <Sequence from={210} durationInFrames={290}><SceneGap t={t} dur={290} /></Sequence>
        <Sequence from={500} durationInFrames={340}><SceneFlagship t={t} dur={340} /></Sequence>
        <Sequence from={840} durationInFrames={340}><SceneRoute t={t} dur={340} /></Sequence>
        <Sequence from={1180} durationInFrames={290}><SceneEvidence t={t} dur={290} /></Sequence>
        <Sequence from={1470} durationInFrames={240}><SceneHandoff t={t} dur={240} /></Sequence>
        <PhaseBar t={t} frame={frame} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
