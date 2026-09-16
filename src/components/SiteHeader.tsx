import Link from "next/link";

export default function SiteHeader({ index }: { index?: string }) {
  return (
    <div className="frame-header">
      <Link className="home" href="/">
        Jaden Towey
      </Link>
      {index && <div className="idx">{index}</div>}
    </div>
  );
}
