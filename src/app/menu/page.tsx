import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { branches } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Menu",
  description: "Choose the Shanddar MoMo menu for Isani or Saburtalo.",
};

const branchImages: Record<string, string> = {
  saburtalo: "/images/menu/saburtalo/wolt/chicken-jhol-momo.jpg",
  isani: "/images/menu/saburtalo/wolt/veg-steam-momo.jpg",
};

export default function MenuLandingPage() {
  return (
    <>
      <section className="border-b border-[#24140d]/10 bg-[#20120c] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="eyebrow !text-[#e8b24e]">Shanddar MoMo</p>
          <h1 className="display-serif mt-4 max-w-4xl text-6xl leading-[.9] sm:text-7xl">Choose your kitchen.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#cdbcae]">Menus and availability differ by branch. Choose where you’re ordering from and we’ll show you the right dishes.</p>
        </div>
      </section>

      <Section className="min-h-[55svh]">
        <div className="grid gap-5 md:grid-cols-2">
          {Object.entries(branches).map(([slug, branch]) => (
            <Link key={slug} href={`/menu/${slug}`} className="group overflow-hidden border border-[#24140d]/12 bg-[#efe3d3]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={branchImages[slug]} alt={`${branch.label} menu preview`} fill sizes="(min-width: 768px) 50vw, 100vw" className="food-photo object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-[#f7f0e5] px-3.5 py-2 text-xs font-black uppercase tracking-[.13em] text-[#24140d]">{branch.label}</span>
              </div>
              <div className="flex items-end justify-between gap-5 p-5 sm:p-7">
                <div>
                  <h2 className="display-serif text-4xl leading-none text-[#24140d]">{branch.name}</h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#6f5a4b]">{branch.note}</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#24140d]/16 text-lg text-[#b73d20] transition-colors group-hover:bg-[#24140d] group-hover:text-white">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
