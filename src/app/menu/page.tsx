import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { branches, restaurant } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Choose the QR-ready Shanddar MoMo menu for Isani or Saburtalo.",
};

export default function MenuLandingPage() {
  return (
    <Section className="min-h-[72svh]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9b341f]">
          QR menu
        </p>
        <h1 className="mt-3 text-5xl font-black tracking-tight text-[#33150d] sm:text-6xl">
          Choose your menu
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#775036]">
          Fast, clean and easy to read at the table. Pick a branch and order in
          seconds.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl gap-4">
        {Object.entries(branches).map(([slug, branch], index) => (
          <Link
            key={slug}
            href={`/menu/${slug}`}
            className="interactive-card group rounded-[1.6rem] border border-white/70 bg-white/90 p-6 text-left shadow-[0_16px_44px_rgba(64,29,18,0.09)] ring-1 ring-amber-950/5 backdrop-blur"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.17em] text-[#126b58]">
                  {restaurant.name}
                </span>
                <span className="mt-2 block text-3xl font-black tracking-tight text-[#33150d]">
                  {branch.name}
                </span>
                <span className="mt-3 block text-base font-semibold leading-7 text-[#7a4a2e]">
                  {branch.note}
                </span>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#fff1cf] text-lg font-black text-[#9b341f] group-hover:bg-[#d94f20] group-hover:text-white">
                {index + 1}
              </span>
            </div>
            <span className="mt-6 inline-flex rounded-full bg-[#33150d] px-5 py-3 text-base font-black text-white group-hover:bg-[#d94f20]">
              Open Menu
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
