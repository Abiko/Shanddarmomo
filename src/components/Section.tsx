import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`mx-auto w-full max-w-full overflow-x-clip px-4 py-12 sm:max-w-6xl sm:px-6 sm:py-16 ${className}`}>
      {children}
    </section>
  );
}
