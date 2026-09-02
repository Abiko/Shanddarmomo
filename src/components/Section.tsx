import type { ReactNode } from "react";

type SectionProps = { children: ReactNode; className?: string };
export function Section({ children, className = "" }: SectionProps) {
  return <section className={`mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 ${className}`}>{children}</section>;
}
