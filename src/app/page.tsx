import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ReviewCards } from "@/components/ReviewCards";
import { Section } from "@/components/Section";
import { restaurant } from "@/lib/restaurant";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-4.35rem)] overflow-hidden bg-[#3a1a12] text-white sm:min-h-[76svh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(244,189,74,0.32),transparent_28rem),radial-gradient(circle_at_82%_18%,rgba(18,107,88,0.36),transparent_28rem),linear-gradient(135deg,#35150d_0%,#5a2212_52%,#25110b_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fff3d8] to-transparent" />

        <div className="relative mx-auto grid min-h-[calc(100svh-4.35rem)] w-full max-w-6xl items-center gap-8 overflow-hidden px-4 py-10 sm:min-h-[76svh] sm:px-6 sm:py-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="mobile-safe-width min-w-0 overflow-hidden">
            <p className="mb-5 inline-flex max-w-full rounded-full bg-[#f6d58c] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#3a1a12] shadow-lg shadow-black/12 sm:tracking-[0.17em]">
              Family-run Nepali kitchen
            </p>
            <div className="mobile-safe-width mb-6 overflow-hidden rounded-[1.5rem] border border-white/14 bg-white/10 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.2)] lg:hidden">
              <Image
                src="/images/home/momo-hero.jpg"
                alt="Steamed momos in a bamboo basket"
                width={900}
                height={900}
                priority
                sizes="100vw"
                className="h-52 w-full rounded-[1.15rem] object-cover"
              />
            </div>
            <h1 className="mobile-safe-width text-4xl font-black leading-[0.96] tracking-tight sm:text-7xl">
              {restaurant.name}
            </h1>
            <p className="mobile-safe-width mt-6 text-lg font-black leading-7 text-[#fff1cf] [overflow-wrap:anywhere] sm:max-w-2xl sm:text-3xl sm:leading-10">
              Authentic Nepali & Indo-Chinese food made with passion in Tbilisi
            </p>
            <p className="mobile-safe-width mt-4 text-base font-semibold leading-7 text-[#f8dca2] [overflow-wrap:anywhere] sm:max-w-xl sm:text-lg">
              {restaurant.shortDescription}. Fresh momos, noodles and comfort
              plates for dine-in, pickup and quick QR ordering.
            </p>

            <div className="mobile-safe-width mt-8 grid gap-3 sm:flex">
              <Link
                href="/menu"
                className="premium-button w-full max-w-full rounded-full bg-[#d94f20] px-6 py-4 text-center text-base font-black text-white hover:bg-[#c54419] sm:w-auto sm:px-7"
              >
                View Menu
              </Link>
              <Link
                href="/location"
                className="premium-button w-full max-w-full rounded-full bg-white px-6 py-4 text-center text-base font-black text-[#33150d] hover:bg-[#f6d58c] sm:w-auto sm:px-7"
              >
                View Location
              </Link>
            </div>

            <div className="mt-8 hidden grid-cols-3 gap-3 text-center sm:grid sm:max-w-xl">
              {[
                ["Fresh", "made to order"],
                ["QR", "fast menu"],
                ["Local", "Tbilisi favorite"],
              ].map(([title, label]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/14 bg-white/9 px-3 py-4 backdrop-blur"
                >
                  <p className="text-lg font-black text-white">{title}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#f6d58c]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-[30rem] lg:block">
            <div className="absolute inset-8 rounded-full bg-[#f6d58c]/18 blur-3xl" />
            <div className="interactive-card absolute inset-0 overflow-hidden rounded-[2.25rem] border border-white/16 bg-white/10 p-3 shadow-[0_32px_80px_rgba(0,0,0,0.28)] backdrop-blur">
              <Image
                src="/images/home/momo-hero.jpg"
                alt="Steamed momos in a bamboo basket"
                width={900}
                height={900}
                priority
                sizes="(min-width: 1024px) 30rem, 0px"
                className="h-full w-full rounded-[1.85rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[1fr_0.82fr]">
          <div className="min-w-0">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9b341f]">
              Digital menu
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-[#33150d]">
              Scan Our Menu
            </h2>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[#775036] sm:text-lg sm:leading-8">
              Scan the QR code to instantly open our digital menu.
            </p>
            <Link
              href="/menu"
              className="premium-button mt-7 inline-flex rounded-full bg-[#33150d] px-5 py-3 text-base font-black text-white hover:bg-[#d94f20]"
            >
              Open Menu
            </Link>
          </div>

          <div className="interactive-card mx-auto w-full max-w-sm rounded-[1.6rem] border border-white/70 bg-white/90 p-5 text-center shadow-[0_16px_44px_rgba(64,29,18,0.09)] ring-1 ring-amber-950/5 backdrop-blur">
            <div className="rounded-[1.25rem] bg-[#fffaf0] p-4 ring-1 ring-amber-950/8">
              <Image
                src="/api/menu-qr"
                alt="QR code for Shanddar MoMo menu"
                width={280}
                height={280}
                unoptimized
                className="mx-auto h-auto w-full max-w-[17.5rem]"
              />
            </div>
            <p className="mt-4 text-sm font-semibold leading-6 text-[#775036]">
              Customers can scan this directly from their phone to view the menu.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9b341f]">
              Loved locally
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-[#33150d]">
              Real review highlights
            </h2>
          </div>
          <p className="max-w-md text-base font-semibold leading-7 text-[#775036]">
            Guests come back for momos, noodles, friendly service and generous
            value.
          </p>
        </div>
        <ReviewCards />
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9b341f]">
              Good to know
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-[#33150d]">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </Section>
    </>
  );
}
