import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export const metadata = {
  title: "Cyndx: Search Debugger — Jaden Towey",
};

export default function CyndxDebugger() {
  return (
    <div className="page">
      <SiteHeader index="02 / 05" />

      <div className="hero">
        <div className="kicker">Frontend Engineering · Summer 2024</div>
        <h1>Cyndx: Search Debugger</h1>
        <div className="statement">
          I built an internal debugging interface that translated messy
          search and web-scraping data into signals engineers and business
          teams could actually use.
        </div>
        <div className="meta-grid">
          <div>
            <div className="k">Role</div>
            <div className="v">Frontend Engineering Intern</div>
          </div>
          <div>
            <div className="k">Ownership</div>
            <div className="v">
              <div>End-to-end feature dev</div>
              <div>UI design</div>
              <div>Frontend implementation</div>
              <div>Internal tool integration</div>
            </div>
          </div>
          <div>
            <div className="k">Tech</div>
            <div className="v">
              <div>React · TypeScript</div>
              <div>Git / GitHub</div>
              <div>Internal search + scraping systems</div>
            </div>
          </div>
        </div>
      </div>

      <Section label="The problem">
        <p>
          Cyndx&apos;s search engine depended on large amounts of scraped and
          vectorized web data. When results behaved unexpectedly, finding
          out why meant manually inspecting the underlying data and scraping
          history. The project started with a deceptively simple question:
        </p>
        <p className="quote">
          &quot;Why doesn&apos;t Uber appear first when you search
          &apos;Uber&apos;?&quot;
        </p>
        <p>
          Investigating it exposed a broader need — engineers needed a
          faster way to spot poor scraped data, suspicious sites, stale
          information, or other data-quality issues skewing search results.
        </p>
        <div className="flow-v">
          <div className="flow-box">Search query</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">Search results</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">Admin-only debugger tab</div>
          <div className="flow-arrow">↓</div>
        </div>
        <div className="flow-h">
          <span className="flow-box">Scraped content</span>
          <span className="flow-box">Word frequency</span>
          <span className="flow-box">Scrape history</span>
          <span className="flow-box">Quality signals</span>
          <span className="flow-box">Rescrape controls</span>
          <span className="flow-box">Site / data warnings</span>
        </div>
        <div className="flow-v">
          <div className="flow-arrow">↓</div>
          <div className="flow-box">Engineering investigation</div>
        </div>
        <div className="caption">
          Simplified view of the debugging workflow. Proprietary search
          logic and internal signals omitted.
        </div>
      </Section>

      <Section label="01 — Human-readable data" flip>
        <p>
          I created an admin-only tab attached directly to the company&apos;s
          existing search interface. Any search could be opened alongside
          its debugging information, so internal users could investigate
          exactly what a customer saw, without leaving the search experience
          — bringing the tooling to the user&apos;s workflow instead of
          sending them elsewhere.
        </p>
      </Section>

      <Section label="02 — Word analysis">
        <p>
          One view surfaced the most frequently occurring words found during
          a website scrape — exposing cases where scraped content was
          unusually repetitive or dominated by terms that distorted how the
          site was represented in search.
        </p>
        <div className="word-cloud">
          <span style={{ fontSize: "1.6rem" }}>technology</span>
          <span style={{ fontSize: "1.1rem" }}>company</span>
          <span style={{ fontSize: "2rem" }}>software</span>
          <span style={{ fontSize: "1rem" }}>services</span>
          <span style={{ fontSize: "1.3rem" }}>data</span>
          <span style={{ fontSize: "1.7rem" }}>solutions</span>
          <span style={{ fontSize: "1.2rem" }}>platform</span>
          <span style={{ fontSize: "0.95rem" }}>business</span>
        </div>
        <div className="caption">
          Sanitized recreation of the word-frequency view — do not use real
          scraped/company data here.
        </div>
      </Section>

      <Section label="03 — Scrape history" flip>
        <p>
          A history view showed roughly the last 10–15 scrapes of a site,
          each represented visually so internal users could compare how well
          the site&apos;s information had been captured over time and catch
          sudden drops in quality.
        </p>
        <div className="bars">
          {[92, 88, 95, 60, 70, 65, 72, 68, 74, 40, 35, 38, 22, 18, 20].map(
            (h, i) => (
              <div className="bar" key={i} style={{ height: `${h}%` }} />
            )
          )}
        </div>
        <div className="bars-axis">
          <span>01</span>
          <span>05</span>
          <span>10</span>
          <span>15</span>
        </div>
      </Section>

      <Section label="04 — Rescraping">
        <p>
          The debugger connected directly to Cyndx&apos;s existing scraper.
          Instead of waiting for the next scheduled refresh, a user could
          trigger a new scrape from the debugger and immediately inspect the
          updated data — proof this wasn&apos;t just styled frontend cards,
          but a feature wired into production functionality.
        </p>
        <div className="flow-h">
          <span className="flow-box">Current scraped data</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box admin">[ Rescrape ]</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Existing scraper</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Updated site data</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Debugger refresh</span>
        </div>
      </Section>

      <Section label="05 — Bad signals" flip>
        <p>
          The tool also surfaced internal indicators that could flag
          suspicious or low-quality websites. Some detection logic is
          proprietary — kept intentionally vague — but the goal was making
          existing backend signals legible enough that engineers and other
          teams could spot problem sources without manually investigating
          every result.
        </p>
      </Section>

      <Section label="The Uber problem">
        <p className="quote">&quot;Why isn&apos;t Uber first?&quot;</p>
        <p>
          One investigation showed certain sites repeatedly using relevant
          terms in ways that let them compete with more legitimate results.
          The debugger made that pattern visible and helped the team flag
          sources for review or removal. What started as one strange result
          became a reusable tool for finding similar problems platform-wide.
        </p>
      </Section>

      <Section label="From debugging to fixing" flip>
        <p>
          Once the debugger exposed a problem, my work continued past the
          interface — documenting issues, sharing findings in Slack, and
          working with the teams who owned the relevant system to decide the
          next step: investigate scraper behavior, examine the data, or
          remove a problem source from search.
        </p>
      </Section>

      <Section label="The learning curve">
        <p>
          I started the internship with no prior React or TypeScript, and
          learned both while building this feature inside Cyndx&apos;s
          production codebase — also my first time using Git and pull
          requests professionally. The hardest part wasn&apos;t any one
          component; it was learning to build safely inside an unfamiliar
          system: understanding the existing codebase, finding where my
          feature belonged, and working with messy real-world data.
        </p>
      </Section>

      <Section label="Outcome" flip>
        <p>
          I demoed the completed debugger to the company at the end of the
          internship and received an offer to return the following summer.
        </p>
      </Section>

      <SiteFooter
        prev={{
          href: "/cyndx1",
          dir: "← Cyndx Dashboard",
          title: "User-Data Dashboard",
        }}
        next={{
          href: "/izzy",
          dir: "Izzy MacArthur →",
          title: "Artist Portfolio",
        }}
      />
    </div>
  );
}
