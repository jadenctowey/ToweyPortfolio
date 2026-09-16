import type { ReactNode } from "react";

export default function Section({
  label,
  flip,
  children,
}: {
  label: string;
  flip?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`section${flip ? " flip" : ""}`}>
      <div className="s-label">{label}</div>
      <div className="s-body">{children}</div>
    </div>
  );
}
