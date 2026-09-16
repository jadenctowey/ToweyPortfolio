import Link from "next/link";

type ProjectLink = {
  href: string;
  dir: string;
  title: string;
};

export default function SiteFooter({
  prev,
  next,
}: {
  prev: ProjectLink;
  next: ProjectLink;
}) {
  return (
    <div className="frame-footer">
      <div className="fn-label">Previous project · Next project</div>
      <div className="fn-row">
        <Link href={prev.href} className="fn-side">
          <div className="fn-dir">{prev.dir}</div>
          <div className="fn-title">{prev.title}</div>
        </Link>
        <Link href={next.href} className="fn-side next">
          <div className="fn-dir">{next.dir}</div>
          <div className="fn-title">{next.title}</div>
        </Link>
      </div>
      <div className="contact">
        Jaden Towey —{" "}
        <a href="https://www.linkedin.com/in/jaden-towey-315511294/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>{" "}
        /{" "}
        <a href="https://github.com/jadenctowey" target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        /{" "}
        <a href="mailto:toweyjaden@gmail.com">Email</a>
      </div>
    </div>
  );
}
