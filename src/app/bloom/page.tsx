import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export const metadata = {
  title: "Bloom: Art Marketplace Platform — Jaden Towey",
};

export default function Bloom() {
  return (
    <div className="page">
      <SiteHeader index="04 / 05" />

      <div className="hero">
        <div className="kicker">
          Product Design &amp; Full-Stack Development · 2026 — Present
        </div>
        <h1>Bloom: Art Marketplace Platform</h1>
        <div className="statement">
          Translating an existing art advisory business into a three-sided
          digital product — without building more infrastructure than the
          business needs today.
        </div>
        <div className="stage-flag">
          Current stage — product design / prototyping
        </div>
      </div>

      <Section label="From business to product">
        <p>
          I&apos;m working directly with Bloom&apos;s founder to turn her
          existing art-advisory business into a digital prototype. My work
          started by translating business requirements into user flows,
          screens, component rules, interaction patterns, and an
          implementation plan — before touching production build. The
          product has collector, artist, and Bloom-admin experiences, and
          the current prototype is scoped to validate the idea, not become a
          full marketplace overnight.
        </p>
      </Section>

      <Section label="How it connects" flip>
        <p>
          I mapped the dependencies between the three experiences before
          designing individual screens. An artist&apos;s work passes through
          Bloom&apos;s approval workflow before reaching collectors;
          collector requests flow back into Bloom&apos;s internal sales
          pipeline.
        </p>
        <div className="flow-h">
          <span className="flow-box">06 Artist dashboard</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">07 Upload work</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box admin">11 Price Confidence (admin)</span>
        </div>
        <div className="flow-arrow" style={{ padding: "6px 0 6px 20px" }}>
          ↓ confirmed → live
        </div>
        <div className="flow-h">
          <span className="flow-box">01 Onboarding</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">02 Swipe feed</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">03 Artwork detail</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">04 Artist profile</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">05 Inquiries</span>
        </div>
        <div className="flow-arrow" style={{ padding: "6px 0 6px 130px" }}>
          ↓ request / visit
        </div>
        <div className="flow-h">
          <span className="flow-box admin">09 Sales pipeline (admin)</span>
        </div>
        <div className="caption">
          The artist chain (top) and collector chain (middle) only touch at
          two admin gates: 11 confirms a price before it can reach the feed,
          09 is where every collector request lands for Bloom to work by
          hand.
        </div>
      </Section>

      <Section label="The three surfaces">
        <div className="three-col">
          <div>
            <h4>Collector</h4>
            <ul>
              <li>Mobile-first discovery</li>
              <li>Swipe / save</li>
              <li>Artwork details</li>
              <li>Artist profiles</li>
              <li>Requests · inquiries</li>
            </ul>
          </div>
          <div>
            <h4>Artist</h4>
            <ul>
              <li>Upload work</li>
              <li>Metadata</li>
              <li>Pricing feedback</li>
              <li>Review states</li>
              <li>Engagement insights</li>
            </ul>
          </div>
          <div>
            <h4>Admin</h4>
            <ul>
              <li>Sales pipeline</li>
              <li>Artist roster</li>
              <li>Listing review</li>
              <li>Pricing confirmation</li>
            </ul>
          </div>
        </div>
        <p style={{ marginTop: 16 }}>
          One codebase, three surfaces — the ~50-collector cohort touches
          mobile; the ~10 committed artists and Logan work on desktop.
        </p>
        <div className="chips">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: ".72rem",
              color: "var(--cream-55)",
              marginRight: 4,
            }}
          >
            COLLECTOR
          </span>
          <span className="chip-num">01</span>
          <span className="chip-num">02</span>
          <span className="chip-num">03</span>
          <span className="chip-num">04</span>
          <span className="chip-num">05</span>
        </div>
        <div className="chips">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: ".72rem",
              color: "var(--cream-55)",
              marginRight: 4,
            }}
          >
            ARTIST
          </span>
          <span className="chip-num">06</span>
          <span className="chip-num">07</span>
          <span className="chip-num">08</span>
        </div>
        <div className="chips">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: ".72rem",
              color: "var(--cream-55)",
              marginRight: 4,
            }}
          >
            ADMIN
          </span>
          <span className="chip-num">09</span>
          <span className="chip-num">10</span>
          <span className="chip-num">11</span>
        </div>
        <div className="caption">
          Show one large selected screen beneath the contact sheet rather
          than all 11 at full size.
        </div>
      </Section>

      <Section label="Design system" flip>
        <p>
          I converted Bloom&apos;s existing visual language into reusable
          interface rules instead of designing each screen independently —
          frame sizes, spacing, type hierarchy, sharp-cornered components,
          restrained interaction states, one shared system across collector,
          artist, and admin. Restraint rule: the artwork brings the color,
          the UI stays slate, white, ink, and off-white.
        </p>
        <div className="swatch-strip">
          <div className="s">
            <div className="c" style={{ background: "#526372" }} />
            <div className="l">Slate #526372</div>
          </div>
          <div className="s">
            <div className="c" style={{ background: "#f5f5ef" }} />
            <div className="l">Off-white #F5F5EF</div>
          </div>
          <div className="s">
            <div className="c" style={{ background: "#ffffff" }} />
            <div className="l">White #FFFFFF</div>
          </div>
          <div className="s">
            <div className="c" style={{ background: "#1f1f1f" }} />
            <div className="l">Ink #1F1F1F</div>
          </div>
          <div className="s">
            <div className="c" style={{ background: "#4b8b6b" }} />
            <div className="l">Success #4B8B6B</div>
          </div>
          <div className="s">
            <div className="c" style={{ background: "#b8863f" }} />
            <div className="l">Warn #B8863F</div>
          </div>
        </div>
      </Section>

      <Section label="Building the right MVP">
        <p>
          Some of the most important decisions were about what{" "}
          <i>not</i> to build. Bloom&apos;s client base is deliberately
          small, so we skipped full in-app checkout, direct
          buyer↔artist messaging, tax handling, native apps, and
          ML-driven pricing for the first prototype. Instead of a payment
          layer before the workflow is validated, a collector&apos;s request
          routes back to Bloom so the founder keeps running the high-touch
          sale herself.
        </p>
        <ol
          style={{
            color: "var(--cream)",
            marginTop: 14,
            paddingLeft: 22,
            fontSize: ".92rem",
          }}
        >
          <li style={{ marginBottom: 6 }}>
            <b>Foundations</b> — palette, type ramp, one sharp-cornered
            button, one status tag
          </li>
          <li style={{ marginBottom: 6 }}>
            <b>Collector chain</b> — 01→05, the surface real collectors touch
            first
          </li>
          <li style={{ marginBottom: 6 }}>
            <b>Artist portal</b> — 06→08, wired to placeholder pricing bands
          </li>
          <li style={{ marginBottom: 6 }}>
            <b>Admin console</b> — 09→11, both gates connected end to end
          </li>
          <li style={{ marginBottom: 6 }}>
            <b>High-fidelity pass</b> — real artwork images in place of
            placeholder blocks
          </li>
        </ol>
      </Section>

      <Section label="Data / price confidence" flip>
        <p>
          The prototype intentionally uses a simple rule engine rather than
          pretending to need ML. Artist and work characteristics map to a
          suggested price range, which still requires human confirmation
          before it appears publicly. Collector saves and enquiries can
          eventually feed a longer-term demand-tracking dataset — the thing
          that differentiates Bloom from a generic marketplace.
        </p>
        <div className="flow-h">
          <span className="flow-box">
            Career stage + medium + size band + region
          </span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Price range</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box admin">Bloom review</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Confirmed price</span>
        </div>
      </Section>

      <Section label="Labeling honestly">
        <p>
          Because this is only beginning development, the page should say so
          plainly rather than reading like the whole platform already
          exists:
        </p>
        <div className="flow-h">
          <span className="flow-box">Discovery</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Figma</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Architecture</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Development</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Testing</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Launch</span>
        </div>
      </Section>

      <SiteFooter
        prev={{
          href: "/izzy",
          dir: "← Izzy MacArthur",
          title: "Artist Portfolio",
        }}
        next={{
          href: "/project-invent",
          dir: "Project Invent →",
          title: "Assistive Mobility Device",
        }}
      />
    </div>
  );
}
