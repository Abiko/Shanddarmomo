import type { Metadata } from "next";
import { BranchLocationSwitcher } from "@/components/BranchLocationSwitcher";
import { Section } from "@/components/Section";
import { locationBranches, restaurant } from "@/lib/restaurant";

export const metadata: Metadata = { title: "Locations", description: `${restaurant.name} Saburtalo and Isani locations, maps, hours and phone number in Tbilisi.` };

export default function LocationPage() {
  return (
    <>
      <section className="border-b border-[#24140d]/10 bg-[#20120c] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="eyebrow !text-[#e8b24e]">Saburtalo · Isani</p>
          <h1 className="display-serif mt-4 max-w-4xl text-6xl leading-[.9] sm:text-7xl">Two locations. Same momo obsession.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#cdbcae]">Choose a branch to see the map, opening hours and contact details.</p>
        </div>
      </section>
      <Section><BranchLocationSwitcher branches={locationBranches} /></Section>
    </>
  );
}
