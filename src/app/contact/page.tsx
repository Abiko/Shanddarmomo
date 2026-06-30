import type { Metadata } from "next";
import { FindUsCards } from "@/components/FindUsCards";
import { Section } from "@/components/Section";
import { restaurant } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${restaurant.name} by phone or WhatsApp-style message.`,
};

export default function ContactPage() {
  return (
    <Section className="min-h-[72svh]">
      <div className="mx-auto w-full max-w-4xl overflow-hidden">
        <div className="mx-auto w-full max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9b341f]">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#33150d] [overflow-wrap:anywhere] sm:text-6xl">
            Order, pickup or ask us anything
          </h1>
          <p className="mt-5 text-base font-semibold leading-7 text-[#775036] [overflow-wrap:anywhere] sm:text-lg sm:leading-8">
            For today&apos;s hours, table questions, pickup or delivery, contact
            the restaurant directly.
          </p>

          <div className="mt-9 grid w-full max-w-full gap-4">
            <a
              href={`tel:${restaurant.phoneHref}`}
              className="premium-button min-w-0 rounded-full bg-[#d94f20] px-5 py-4 text-base font-black text-white hover:bg-[#c54419] sm:px-6 sm:text-lg"
            >
              Call {restaurant.phoneDisplay}
            </a>
            <a
              href={restaurant.whatsappHref}
              className="premium-button min-w-0 rounded-full bg-[#126b58] px-5 py-4 text-base font-black text-white hover:bg-[#0e5446] sm:px-6 sm:text-lg"
            >
              Message on WhatsApp
            </a>
            <div className="rounded-[1.35rem] border border-white/70 bg-white/88 px-6 py-4 text-left shadow-[0_12px_30px_rgba(64,29,18,0.08)] ring-1 ring-amber-950/5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#9b341f]">
                Email
              </p>
              <p className="mt-1 text-base font-black text-[#33150d]">
                {restaurant.emailDisplay}
              </p>
            </div>
          </div>

          <div className="interactive-card mt-9 rounded-[1.6rem] border border-white/70 bg-white/88 p-6 text-left shadow-[0_16px_44px_rgba(64,29,18,0.09)] ring-1 ring-amber-950/5">
            <h2 className="text-2xl font-black text-[#33150d]">
              Homemade food, simple ordering
            </h2>
            <p className="mt-3 text-base font-semibold leading-7 text-[#775036]">
              Ask about momos, noodles, fried rice, dine-in availability or
              pickup timing. The team will help you choose something fresh and
              satisfying.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-5 text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9b341f]">
              Social and delivery
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#33150d]">
              Find us online
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base font-semibold leading-7 text-[#775036]">
              Follow Shanddar MoMo for updates or order delivery through Wolt
              and Bolt Food.
            </p>
          </div>
          <FindUsCards />
        </div>
      </div>
    </Section>
  );
}
