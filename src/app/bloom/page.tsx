import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export const metadata = {
  title: "Bloom: Art Marketplace Platform — Jaden Towey",
};

const label = {
  fontFamily: "var(--font-mono)",
  fontSize: ".72rem",
  color: "var(--cream-55)",
  marginRight: 4,
};

export default function Bloom() {
  return (
    <div className="page">
      <SiteHeader index="04 / 05" />

      <div className="hero">
        <div className="kicker">
          Full-Stack Engineering &amp; Product Design · Aug 2026 — Present
        </div>
        <h1>Bloom: Art Marketplace Platform</h1>
        <div className="statement">
          I designed and built a three-sided art marketplace from the
          founder&apos;s brief to a live production app — collectors,
          artists, and Bloom&apos;s own team on one codebase, with real
          auth, a real database, and an admin console the founder runs
          herself.
        </div>
        <div
          className="stage-flag"
          style={{ color: "#7fc29b", borderColor: "#7fc29b" }}
        >
          Shipped — live in production · ongoing support
        </div>
        {/* TODO: add the official link once app.artforbloom.com is connected */}
        <div className="meta-grid">
          <div>
            <div className="k">Role</div>
            <div className="v">
              Sole engineer &amp; product designer, working directly with
              the founder
            </div>
          </div>
          <div>
            <div className="k">Focus</div>
            <div className="v">
              <div>Full-Stack Development</div>
              <div>Product &amp; UX Design</div>
              <div>Data Modeling &amp; Security</div>
            </div>
          </div>
          <div>
            <div className="k">Tools</div>
            <div className="v">
              <div>Next.js · React / TypeScript</div>
              <div>Supabase (Postgres, Auth, Storage)</div>
              <div>Resend · Vercel · Figma</div>
            </div>
          </div>
        </div>
      </div>

      <Section label="From business to product">
        <p>
          Bloom is an artist-first art advisory in London: artists keep
          100% of their listed price, collectors pay a buyer&apos;s premium
          for curation and advisory. The founder came to me with a business
          and a set of briefs, not a spec. I translated those into user
          flows, an 11-screen design system and blueprint, a data model,
          and a build plan — then built the whole thing, end to end.
        </p>
        <p>
          It went through three stages: a clickable prototype on mock data
          to validate the flows, a round of founder feedback (11 product
          decisions, all implemented), and then a real backend — accounts,
          database, image uploads, emails — deployed to production on
          Vercel.
        </p>
      </Section>

      <Section label="How it connects" flip>
        <p>
          The three experiences only touch at Bloom&apos;s admin gates. An
          artist&apos;s work can&apos;t reach collectors until Bloom
          approves it and confirms its price; every collector request lands
          back with Bloom, who runs the high-touch sale personally.
        </p>
        <div className="flow-h">
          <span className="flow-box">Artist applies</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box admin">Bloom approves</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Upload work</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box admin">Price confirmed</span>
        </div>
        <div className="flow-arrow" style={{ padding: "6px 0 6px 20px" }}>
          ↓ live in the feed
        </div>
        <div className="flow-h">
          <span className="flow-box">Taste onboarding</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Swipe / save / pass</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Artwork &amp; artist</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Inquiry</span>
        </div>
        <div className="flow-arrow" style={{ padding: "6px 0 6px 130px" }}>
          ↓ request / studio visit / Ask Bloom
        </div>
        <div className="flow-h">
          <span className="flow-box admin">Sales pipeline (admin)</span>
        </div>
      </Section>

      <Section label="The three surfaces">
        <div className="three-col">
          <div>
            <h4>Collector</h4>
            <ul>
              <li>Hinge-style taste onboarding</li>
              <li>Ranked discovery feed</li>
              <li>Save / pass with reasons</li>
              <li>Artwork &amp; artist profiles</li>
              <li>Inquiries with clear statuses</li>
              <li>Ask Bloom messaging</li>
              <li>Privacy choice: share / anonymous / ask first</li>
            </ul>
          </div>
          <div>
            <h4>Artist</h4>
            <ul>
              <li>Invite-only access + application</li>
              <li>Upload works with metadata</li>
              <li>Price confidence feedback</li>
              <li>Draft → review → live states</li>
              <li>Profile &amp; CV builder</li>
              <li>Engagement insights</li>
            </ul>
          </div>
          <div>
            <h4>Admin</h4>
            <ul>
              <li>Sales pipeline (Kanban)</li>
              <li>Artist roster &amp; approvals</li>
              <li>Price engine — confirm / override</li>
              <li>Buyer activity dashboard</li>
              <li>Communication inbox</li>
              <li>Site editor for public pages</li>
            </ul>
          </div>
        </div>
        <p style={{ marginTop: 16 }}>
          One Next.js codebase, three surfaces: mobile-first for
          collectors, desktop for artists and the Bloom team. Each has its
          own entry point — no role picker — so collectors get a private,
          luxurious front door and the admin console stays unlinked.
        </p>
      </Section>

      <Section label="Backend & security" flip>
        <p>
          I moved the prototype from mock data to a real Supabase backend
          and treated security as part of the product, not an afterthought.
        </p>
        <ul style={{ color: "var(--cream)", paddingLeft: 22, fontSize: ".92rem" }}>
          <li style={{ marginBottom: 6 }}>
            <b>Postgres schema</b> — 14 tables (artists, artworks, pricing,
            price history, swipes, inquiries, messages, preferences,
            applications, events, site content…) built through versioned
            SQL migrations
          </li>
          <li style={{ marginBottom: 6 }}>
            <b>Row-level security</b> — 39 policies so each role can only
            read and write its own data; artists never see collector
            identities or Bloom&apos;s premium
          </li>
          <li style={{ marginBottom: 6 }}>
            <b>Passwordless auth</b> — magic-link sign-in with branded
            email templates, plus server-side middleware that checks role
            before any protected page loads
          </li>
          <li style={{ marginBottom: 6 }}>
            <b>Image storage</b> — artwork and site photos compressed in
            the browser before upload to storage buckets
          </li>
          <li style={{ marginBottom: 6 }}>
            <b>Transactional email</b> — new inquiries and artist
            applications notify Bloom via Resend; users only ever get
            sign-in emails, never a flood
          </li>
        </ul>
      </Section>

      <Section label="Price confidence">
        <p>
          Pricing emerging artists is the founder&apos;s hardest call, so I
          built a transparent engine instead of a black box. Seven weighted
          factors produce a 0–100 score and a confidence tier; a human
          always confirms or overrides before a price goes live. Collectors
          only ever see the tier.
        </p>
        <div className="flow-h">
          <span className="flow-box">Comparables 30</span>
          <span className="flow-box">Sales history 20</span>
          <span className="flow-box">Credentials 20</span>
          <span className="flow-box">Rule band 15</span>
          <span className="flow-box">Gallery · recency · edition 5 each</span>
        </div>
        <div className="flow-arrow" style={{ padding: "6px 0 6px 20px" }}>
          ↓
        </div>
        <div className="flow-h">
          <span className="flow-box">Score → tier</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box admin">Bloom confirms</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Live price</span>
        </div>
        <p style={{ marginTop: 14 }}>
          Every swipe, save, pass reason, and inquiry is stored against the
          artwork&apos;s category — the start of the consent-based demand
          dataset that sets Bloom apart from a generic marketplace.
        </p>
      </Section>

      <Section label="Built to hand off" flip>
        <p>
          The goal was for the founder to run Bloom without needing me. The
          admin console lets her approve artists, move deals through the
          pipeline, confirm prices, answer collector messages, and edit the
          public pages&apos; copy and photos herself — changes save
          straight to the database and show up immediately. Since launch, I
          check in on how everything is running, fix anything that comes up,
          and keep helping as new needs arise.
        </p>
      </Section>

      <Section label="Design system">
        <p>
          I pulled the visual language straight from artforbloom.com so the
          app feels like a natural extension of the brand: sharp corners,
          hairline dividers, generous whitespace, and a restraint rule —
          the artwork brings the color, the UI stays quiet.
        </p>
        <div className="swatch-strip">
          <div className="s">
            <div className="c" style={{ background: "#ffffff" }} />
            <div className="l">White #FFFFFF</div>
          </div>
          <div className="s">
            <div className="c" style={{ background: "#526372" }} />
            <div className="l">Slate #526372</div>
          </div>
          <div className="s">
            <div className="c" style={{ background: "#3d3813" }} />
            <div className="l">Olive ink #3D3813</div>
          </div>
          <div className="s">
            <div className="c" style={{ background: "#f1eadd" }} />
            <div className="l">Ecru accent #F1EADD</div>
          </div>
          <div className="s">
            <div className="c" style={{ background: "#ebebeb" }} />
            <div className="l">Line #EBEBEB</div>
          </div>
        </div>
      </Section>

      <Section label="Building the right MVP" flip>
        <p>
          Some of the most important decisions were about what{" "}
          <i>not</i> to build. Bloom&apos;s client base is deliberately
          small, so we left out in-app checkout, direct buyer↔artist
          messaging, tax handling, native apps, and ML pricing. Payments
          happen outside the app, and every request routes back to Bloom so
          the founder keeps the high-touch sale — the part of the business
          she&apos;s actually selling.
        </p>
      </Section>

      <Section label="Process">
        <div className="flow-h">
          <span className="flow-box">Discovery</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Design system</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Clickable prototype</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Founder feedback</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Backend</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box admin">Launch ✓</span>
        </div>
        <div className="chips" style={{ marginTop: 12 }}>
          <span style={label}>STACK</span>
          <span className="chip-num">Next.js 14</span>
          <span className="chip-num">TypeScript</span>
          <span className="chip-num">Supabase</span>
          <span className="chip-num">Postgres + RLS</span>
          <span className="chip-num">Resend</span>
          <span className="chip-num">Vercel</span>
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
