import type { Metadata } from "next";
import { BranchLocationSwitcher } from "@/components/BranchLocationSwitcher";
import { FindUsCards } from "@/components/FindUsCards";
import { Section } from "@/components/Section";
import { locationBranches, restaurant } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Location",
  description: `${restaurant.name} Saburtalo and Isani branch locations, maps, hours and phone number in Tbilisi.`,
};

export default function LocationPage() {
  return (
    <Section>
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9b341f]">
          Visit us
        </p>
        <h1 className="mt-3 text-5xl font-black tracking-tight text-[#33150d] sm:text-6xl">
          Location and hours
        </h1>
        <p className="mt-5 text-lg font-semibold leading-8 text-[#775036]">
          Choose the closest Shanddar MoMo branch for dine-in, pickup and
          delivery-friendly homemade food.
        </p>
      </div>

      <BranchLocationSwitcher branches={locationBranches} />

      <div className="mt-12">
        <div className="mb-5 max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9b341f]">
            Find us
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-[#33150d]">
            Follow and order online
          </h2>
          <p className="mt-4 text-base font-semibold leading-7 text-[#775036]">
            Connect with Shanddar MoMo on social platforms and delivery apps.
          </p>
        </div>
        <FindUsCards />
      </div>
    </Section>
  );
}
