import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import Image from "next/image";

export const metadata = {
  title: "Izzy MacArthur: Artist Portfolio — Jaden Towey",
};

export default function Izzy() {
  return (
    <div className="page">
      <SiteHeader index="03 / 05" />

      <div className="hero">
        <div className="kicker">
          Freelance Design &amp; Full-Stack Development · 2026 — Present
        </div>
        <h1>Izzy MacArthur: Artist Portfolio</h1>
        <div className="statement">
          Building an artist&apos;s digital identity from the first Figma
          conversation through the working product.
        </div>
      </div>

      <Section label="The context">
        <p>
          I&apos;m working directly with musician Izzy MacArthur to design
          and develop a portfolio that feels like an extension of her
          artistic identity rather than a standard template. It&apos;s the
          most creatively driven development project I&apos;ve done — moving
          constantly between client conversations, visual design,
          interaction design, and implementation.
        </p>
      </Section>

      <Section label="Visual 1" flip>
        <div
          style={{
            position: "relative",
            aspectRatio: "16/9",
            marginBottom: 14,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/izzyFig.jpg"
            alt="Full Figma canvas of the Izzy MacArthur site design"
            fill
            sizes="(max-width: 760px) 100vw, 820px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="caption">
          Early interface exploration and page system developed
          collaboratively in Figma.
        </div>
      </Section>

      <Section label="From artist to interface">
        <p>
          This wasn&apos;t &quot;client sends mockup, developer codes it.&quot;
          I&apos;m part of defining what the product should actually feel
          like.
        </p>
        <div className="flow-h">
          <span className="flow-box">Artist&apos;s ideas</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Visual references</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Figma exploration</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Interaction design</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Development</span>
        </div>
      </Section>

      <Section label="Interaction design" flip>
        <p>
          Different elements get different behaviors that fit their
          function, not one hover state applied everywhere:
        </p>
        <div className="interaction-table">
          <div>
            song → <b style={{ color: "var(--cream)" }}>song ↑</b>
          </div>
          <div>poster → subtle shake</div>
          <div>icon → glow</div>
          <div>element → scale</div>
        </div>
        <div
          style={{
            position: "relative",
            aspectRatio: "16/6",
            marginTop: 6,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/hover.jpg"
            alt="Static and hover states for one interactive element"
            fill
            sizes="(max-width: 760px) 100vw, 820px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Section>

      <Section label="Songs as interface">
        <p>
          One of the central ideas reimagines Izzy&apos;s songs as apps in an
          old desktop environment. The bottom navigation behaves like an
          early Mac dock — hovering over a song bounces or enlarges it,
          turning music navigation into part of the site&apos;s visual
          concept. (Still in progress, waiting for artist's designs)
        </p>
        <div
          style={{
            position: "relative",
            aspectRatio: "21/6",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/songIcon.jpg"
            alt="The song-navigation dock"
            fill
            sizes="(max-width: 760px) 100vw, 820px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Section>

      <Section label="Figma → code" flip>
        <div className="flow-v">
          <div className="flow-box">Izzy + me</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">Figma</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">Component system</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">React / Next.js</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">Responsive interactions</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">GitHub</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-box">Deployment</div>
        </div>
        <p>
          Once a design is established in Figma, I move into development and
          rebuild the behavior as reusable React components in Next.js —
          handling implementation and source control through GitHub, with
          final hosting to be chosen with Izzy.
        </p>
      </Section>

      <Section label="In progress">
        <div className="stage-flag" style={{ marginBottom: 14 }}>
          Currently researching — Spotify integration
        </div>
        <p>
          Exploring Spotify integration so her released music lives directly
          inside the experience instead of sending visitors away from the
          site — working through API access and how that data should
          connect to the custom song interface. Unfinished, on purpose: it
          shows ongoing engineering, not a gap.
        </p>
      </Section>

      <SiteFooter
        prev={{
          href: "/cyndx2",
          dir: "← Cyndx Search Debugger",
          title: "Search Debugger",
        }}
        next={{
          href: "/bloom",
          dir: "Bloom →",
          title: "Art Discovery Platform",
        }}
      />
    </div>
  );
}
