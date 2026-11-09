import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";

const projects = [
  {
    href: "/cyndx1",
    dates: "05.26.2025 – 08.01.2025",
    title: "Cyndx: User-Data Dashboard",
    badgeClass: "badge-cyndx",
    badgeText: "Cyndx",
  },
  {
    href: "/cyndx2",
    dates: "05.28.2024 – 08.02.2024",
    title: "Cyndx: Search Debugger",
    badgeClass: "badge-cyndx",
    badgeText: "Cyndx",
  },
  {
    href: "/izzy",
    dates: "07.20.2026 – Present",
    title: "Izzy MacArthur: Artist Portfolio",
    badgeClass: "badge-izzy",
    badgeText: "Izzy MacArthur",
  },
  {
    href: "/bloom",
    dates: "08.19.2026 – 11.09.2026",
    title: "Bloom: Art Marketplace Platform",
    badgeClass: "badge-bloom",
    badgeText: "bloom",
  },
  {
    href: "/project-invent",
    dates: "10.13.2021 – 05.05.2022",
    title: "Project Invent: Assistive Mobility Device",
    badgeClass: "badge-invent",
    badgeText: "PROJECT INVENT",
  },
];

export default function Home() {
  return (
    <div className="page">
      <SiteHeader />

      <div className="home-hero">
        <div>
          <div className="home-photo">
            <Image
              src="/images/headshot.jpg"
              alt="Jaden Towey"
              fill
              sizes="320px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="home-photo-caption">Jaden Towey</div>
        </div>
        <div>
          <p className="home-lede">
            I build software where product, engineering, and data meet. I like
            turning ambiguous problems into useful, working products.
          </p>
          <div className="list-label" style={{ marginBottom: 12 }}>
            A little more about me...
          </div>
          <p className="home-bio">
            I&apos;m a full-stack engineer with experience across product
            development and data; from building React interfaces to working
            with SQL, dbt, BigQuery, and production analytics pipelines.
            I&apos;m most interested in problems that require understanding
            the user, digging into the data, and building the solution end to
            end.
          </p>
        </div>
      </div>

      <div className="project-list">
        <div className="list-label">My work and projects</div>
        {projects.map((p) => (
          <div key={p.href} className="project-row-wrap">
            <div className="project-row">
              <div>
                <div className="project-dates">{p.dates}</div>
                <span className="title">{p.title}</span>
                <div>
                  <Link href={p.href} className="learn-more">
                    Learn More About This Project
                  </Link>
                </div>
              </div>
              <span className={`badge-logo ${p.badgeClass}`}>
                {p.badgeText}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="home-footer">
        <div>
          <div>Jaden Towey</div>
          <div>Copyright © 2026</div>
          <div>toweyjaden@gmail.com</div>
        </div>
        <div className="home-footer-links">
          <a href="https://www.linkedin.com/in/jaden-towey-315511294/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/jadenctowey" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
