import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export const metadata = {
  title: "Cyndx: User-Data Dashboard — Jaden Towey",
};

export default function CyndxDashboard() {
  return (
    <div className="page">
      <SiteHeader index="01 / 05" />

      <div className="hero">
        <div className="kicker">Software Engineering &amp; Data · Summer 2025</div>
        <h1>Cyndx: User-Data Dashboard</h1>
        <div className="statement">
          I built an analytics pipeline that turned raw product interactions
          into usable metrics for understanding how customers used Cyndx.
        </div>
        <div className="meta-grid">
          <div>
            <div className="k">Role</div>
            <div className="v">Software Engineering &amp; Data Intern</div>
          </div>
          <div>
            <div className="k">Focus</div>
            <div className="v">
              <div>Product Analytics</div>
              <div>Data Engineering</div>
              <div>Frontend Instrumentation</div>
            </div>
          </div>
          <div>
            <div className="k">Tools</div>
            <div className="v">
              <div>React / TypeScript</div>
              <div>Snowplow · SQL / BigQuery</div>
              <div>dbt · Lightdash · Python</div>
            </div>
          </div>
        </div>
      </div>

      <Section label="The problem">
        <p>
          Cyndx had product usage data flowing through its platform, but raw
          events alone did not answer the questions the team actually cared
          about: which search tools were being used, which features people
          engaged with, how behavior changed over time, and how those
          interactions tied back to users and organizations. My project was
          to turn that activity into structured, reliable product analytics.
        </p>
        <div className="flow-h">
          <span className="flow-box">Product interaction</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">React event tracking</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Snowplow event data</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">BigQuery</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">dbt transformations</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Lightdash</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Product metrics</span>
        </div>
        <div className="caption">
          Simplified data flow. Product UI omitted due to confidentiality.
        </div>
      </Section>

      <Section label="What I built — 01" flip>
        <p>
          <b>Instrumenting the product.</b> I worked in Cyndx&apos;s existing
          frontend tracking system to add and verify analytics events across
          product workflows — creating lists, uploading contacts, switching
          tabs, opening AI Insights and Deep Research, navigating results,
          filtering, exporting, pagination. Rather than tracking clicks, I
          had to decide which actions represented meaningful product
          behavior and what each event needed to carry downstream.
        </p>
      </Section>

      <Section label="What I built — 02">
        <p>
          <b>Defining the data.</b> Once events existed, I worked with
          Snowplow data in BigQuery and the existing dbt pipeline to
          transform raw activity into consistent analytics models — event
          names, page context, action types, event details — while working
          around restrictions on sensitive search information. Where raw
          search details couldn&apos;t be used, I fell back to safer fields
          like event names and page titles.
        </p>
      </Section>

      <Section label="What I built — 03" flip>
        <p>
          <b>Connecting users to organizations.</b> I worked with backend
          user and organization data so activity could be analyzed in
          context instead of as anonymous events, joining user IDs to
          organization IDs, names, and licenses.
        </p>
        <div className="flow-v">
          <div className="flow-box">EVENT · user_id</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">USER · organization_id</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">ORGANIZATION · name / license</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">Product usage by customer</div>
        </div>
      </Section>

      <Section label="What I built — 04">
        <p>
          <b>Building the analytics layer.</b> I used Lightdash to turn
          modeled data into metrics and dashboards for the team — not just
          event counts, but product behavior understandable across time
          periods and features: search usage, feature engagement,
          daily/weekly/monthly trends.
        </p>
      </Section>

      <Section label="Beyond product analytics" flip>
        <p>
          As part of the same internship, I also built internal monitoring
          pipelines collecting notification statistics and Sentry error data
          through backend APIs — Python/FastAPI services, Airflow
          scheduling, BigQuery, and dbt models feeding the same analytics
          environment.
        </p>
        <div className="flow-h">
          <span className="flow-box">Sentry / notifications</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">FastAPI</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Airflow</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">BigQuery</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">dbt</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Lightdash</span>
        </div>
      </Section>

      <Section label="What I took away">
        <p className="quote">
          &quot;This project changed the way I think about full-stack
          development. A feature doesn&apos;t end when the interface works —
          the events it generates, how those events are modeled, and whether
          someone can actually learn from that data are all part of the
          product.&quot;
        </p>
      </Section>

      <SiteFooter
        prev={{
          href: "/project-invent",
          dir: "← Project Invent",
          title: "Assistive Mobility Device",
        }}
        next={{
          href: "/cyndx2",
          dir: "Cyndx Search Debugger →",
          title: "Search Debugger",
        }}
      />
    </div>
  );
}
