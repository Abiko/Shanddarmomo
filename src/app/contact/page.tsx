import type { Metadata } from "next";
import { FindUsCards } from "@/components/FindUsCards";
import { Section } from "@/components/Section";
import { restaurant } from "@/lib/restaurant";

export const metadata: Metadata = { title: "Contact", description: `Contact ${restaurant.name} for orders, pickup and restaurant questions.` };

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[#24140d]/10 bg-[#20120c] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="eyebrow !text-[#e8b24e]">Contact</p>
          <h1 className="display-serif mt-4 max-w-4xl text-6xl leading-[.9] sm:text-7xl">Talk to the kitchen.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#cdbcae]">For pickup, today’s hours, table questions or help choosing from the menu, contact Shanddar MoMo directly.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
          <div>
            <p className="eyebrow">Direct</p>
            <div className="mt-5 grid gap-3">
              <a href={`tel:${restaurant.phoneHref}`} className="premium-button flex items-center justify-between border border-[#24140d]/12 bg-[#f7f0e5] p-5 text-[#24140d] hover:bg-white"><span><span className="block text-xs font-black uppercase tracking-[.14em] text-[#8a7464]">Phone</span><span className="mt-1 block text-lg font-black">{restaurant.phoneDisplay}</span></span><span className="text-xl text-[#b73d20]">↗</span></a>
              <a href={restaurant.whatsappHref} className="premium-button flex items-center justify-between border border-[#24140d]/12 bg-[#f7f0e5] p-5 text-[#24140d] hover:bg-white"><span><span className="block text-xs font-black uppercase tracking-[.14em] text-[#8a7464]">WhatsApp</span><span className="mt-1 block text-lg font-black">Message the restaurant</span></span><span className="text-xl text-[#2e5a4e]">↗</span></a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Social & delivery</p>
            <h2 className="display-serif mt-4 text-5xl leading-none">Find us online.</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#6f5a4b]">Follow for updates or order delivery through Wolt and Bolt Food.</p>
            <div className="mt-7"><FindUsCards /></div>
          </div>
        </div>
      </Section>
    </>
  );
}
