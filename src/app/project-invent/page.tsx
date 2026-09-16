import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export const metadata = {
  title: "Project Invent: Assistive Mobility Device — Jaden Towey",
};

export default function ProjectInvent() {
  return (
    <div className="page">
      <SiteHeader index="05 / 05" />

      <div className="hero">
        <div className="kicker">
          Team Lead · Engineering &amp; Product Design · 9 Months
        </div>
        <h1>Project Invent: Assistive Mobility Device</h1>
        <div className="statement">
          The project that made me choose computer science.
        </div>
        <div className="meta-grid">
          <div>
            <div className="k">Team</div>
            <div className="v">6 students</div>
          </div>
          <div>
            <div className="k">My role</div>
            <div className="v">
              <div>Team lead</div>
              <div>Primary family contact</div>
              <div>Arduino + controls lead</div>
              <div>Demo Day spokesperson</div>
            </div>
          </div>
          <div>
            <div className="k">Tools / methods</div>
            <div className="v">
              <div>Arduino Uno · breadboarding</div>
              <div>Potentiometer · motor control</div>
              <div>Soldering · laser cutting</div>
            </div>
          </div>
        </div>
      </div>

      <Section label="The person first">
        <p>
          We were partnered with Logan, an 11-year-old double amputee living
          in New York. Rather than a predefined engineering prompt, our
          six-person team spent time understanding where more independence
          would make the biggest difference in his everyday life. One
          recurring problem: his wheelchair storage sat behind him, so
          getting anything from it usually meant asking someone else for
          help.
        </p>
      </Section>

      <Section label="01 — Understand" flip>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 3,
            marginBottom: 14,
          }}
        >
          <img
            src="/images/meAndLogan.jpg"
            alt="Working with Logan and explaining how the mechanism works"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <div className="caption">
          Working directly with Logan and walking him through how the
          mechanism works — staying close to the person the whole way
          through, not just the engineering.
        </div>
      </Section>

      <Section label="02 — Define">
        <p className="quote">
          &quot;How could we make wheelchair storage accessible without
          requiring another person?&quot;
        </p>
        <div className="chips">
          <span className="chip-num">Accessible</span>
          <span className="chip-num">Mobile</span>
          <span className="chip-num">Stable</span>
          <span className="chip-num">Remote controlled</span>
          <span className="chip-num">Holds crutches + belongings</span>
        </div>
        <div
          className="hero-photo"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 3,
            aspectRatio: "16 / 9",
          }}
        >
          <img
            src="/images/wheelchair.jpg"
            alt="Measuring Logan's wheelchair to define real constraints"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="caption">
          Measuring the wheelchair itself to define real physical constraints
          — width, clearance, and where storage could actually attach.
        </div>
      </Section>

      <Section label="03 — Prototype" flip>
        <p>
          We iterated through several mechanical designs before landing on a
          basket system that could move around the wheelchair rather than
          staying fixed behind it. Ugly early prototypes belong here — they
          read as more honest than polished renders.
        </p>
      </Section>

      <Section label="04 — Electronics">
        <p>
          I prototyped much of the electronic control system with an Arduino
          Uno, breadboarded components, a potentiometer, and the hardware to
          drive the motorized movement — building a remote-controlled
          mechanism that could move the basket into a position Logan could
          reach on his own.
        </p>
        <div className="flow-h">
          <span className="flow-box">Remote input</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Arduino</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Motor control</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Wheels</span>
          <span className="flow-arrow">→</span>
          <span className="flow-box">Basket movement</span>
        </div>
        <div
          className="hero-photo"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 3,
            aspectRatio: "16 / 9",
            marginTop: 14,
          }}
        >
          <img
            src="/images/circuit.jpg"
            alt="Arduino Uno and breadboard control circuit"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="caption">
          Early Arduino Uno and breadboard control prototype during
          electronics development.
        </div>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 3,
            aspectRatio: "16 / 9",
            marginTop: 14,
          }}
        >
          <video
            src="/images/wheels.mp4"
            controls
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="caption">
          Testing the motorized wheels off the breadboard before mounting
          them to the basket assembly.
        </div>
      </Section>

      <Section label="05 — Fabrication" flip>
        <p>
          We used laser-cut plexiglass to fabricate the structural components
          that positioned the wheels and stabilized the basket assembly.
          Because software behavior depended directly on the physical
          construction, mechanical changes often meant re-testing the
          electronics and controls — a good demonstration that engineering
          disciplines aren&apos;t actually isolated from each other.
        </p>
        <div
          className="hero-photo"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 3,
            aspectRatio: "16 / 9",
          }}
        >
          <img
            src="/images/laser.jpg"
            alt="Laser-cut structural pieces, servos, and battery pack on the workbench"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="caption">
          Laser-cut structural pieces on the workbench alongside the servos
          and battery pack during fabrication.
        </div>
      </Section>

      <Section label="When I blew the circuit">
        <p>
          Late in the electronics process, I fed too much voltage into a
          circuit and destroyed part of the setup. Frustrating at the time —
          but it forced me to rebuild it, understand the power requirements
          more carefully, and test components incrementally instead of
          treating the electronics as a finished black box.
        </p>
      </Section>

      <Section label="06 — Iterate with the user" flip>
        <p>
          Logan stayed part of the process throughout — instead of designing
          around assumptions about what he needed, we tested ideas against
          how he actually moved through his day and adjusted the device
          accordingly.
        </p>
      </Section>

      <Section label="Leading the team" flip>
        <p>
          I led the six-person team and was the primary point of contact
          with Logan and his family throughout the nine-month project — plus
          most of the Arduino set-up and control code, while the rest of the
          team focused more on structure, fabrication, and laser-cut
          components. At our final Demo Day, with teams from schools across
          the country, I was our spokesperson for the project and the design
          process.
        </p>
      </Section>

      <Section label="Ending">
        <p className="quote">
          &quot;This was the first time I understood that engineering could
          begin with a person instead of a piece of technology.&quot;
        </p>
        <p>
          The technical work — Arduino programming, electronics,
          fabrication, prototyping — was what let us build the device. But
          figuring out what was worth building was the harder, more
          important problem. That&apos;s a large part of why I chose
          computer science, and why I&apos;m still most drawn to engineering
          roles that put me close to the people using what I build.
        </p>
      </Section>

      <SiteFooter
        prev={{
          href: "/bloom",
          dir: "← Bloom",
          title: "Art Discovery Platform",
        }}
        next={{
          href: "/cyndx1",
          dir: "Cyndx Dashboard →",
          title: "User-Data Dashboard (loop)",
        }}
      />
    </div>
  );
}
