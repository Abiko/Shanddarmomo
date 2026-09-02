import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Section } from "@/components/Section";
import { locationBranches, restaurant } from "@/lib/restaurant";

const signatureDishes = [
  { name: "Chicken Jhol MoMo", image: "/images/menu/saburtalo/wolt/chicken-jhol-momo.jpg", note: "Warm, fragrant jhol and handmade chicken momos." },
  { name: "Chicken Hakka Noodles", image: "/images/menu/saburtalo/wolt/chicken-hakka-noodles.jpg", note: "Wok-tossed noodles with chicken and vegetables." },
  { name: "Paneer Chilli MoMo", image: "/images/menu/saburtalo/wolt/paneer-chilli-momo.jpg", note: "Crisp-edged paneer momos with chilli sauce." },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-[#24140d]/10 bg-[#20120c] text-white">
        <div className="mx-auto grid min-h-[78svh] max-w-7xl lg:grid-cols-[1.02fr_.98fr]">
          <div className="hero-copy flex items-center px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-xl">
              <p className="eyebrow !text-[#e8b24e]">Nepal · Indo-Chinese · Tbilisi</p>
              <h1 className="display-serif mt-6 text-[clamp(3.6rem,8vw,7.6rem)] leading-[.86] text-[#fff9f0]">Momos worth coming back for.</h1>
              <p className="mt-7 max-w-lg text-base font-medium leading-7 text-[#d8cabc] sm:text-lg">{restaurant.shortDescription}. Two Tbilisi locations, easy digital ordering, and food made to arrive hot.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/menu" className="premium-button rounded-full bg-[#b73d20] px-6 py-3.5 text-sm font-black text-white hover:bg-[#d04a28]">Explore the menu</Link>
                <Link href="/location" className="premium-button rounded-full border border-white/20 px-6 py-3.5 text-sm font-black text-white hover:bg-white hover:text-[#24140d]">Find a branch</Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/12 pt-6 text-sm font-semibold text-[#bba99a]">
                <span>Saburtalo</span><span>Isani</span><span>Halal menu</span>
              </div>
            </div>
          </div>
          <div className="hero-image relative min-h-[52svh] overflow-hidden lg:min-h-full">
            <Image src="/images/home/momo-hero.jpg" alt="Steamed momos served at Shanddar MoMo" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#20120c]/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#20120c]/30 lg:via-transparent lg:to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full bg-[#f7f0e5] px-4 py-2 text-xs font-black uppercase tracking-[.14em] text-[#24140d] sm:bottom-8 sm:left-8">Handmade · served hot</div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:gap-12">
          <div className="max-w-md lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">From the kitchen</p>
            <h2 className="display-serif mt-4 text-5xl leading-[.95] sm:text-6xl">Start with the favorites.</h2>
            <p className="mt-5 text-base leading-7 text-[#6f5a4b]">A quick taste of the menu. Browse the full branch menus for prices, dietary notes and ordering.</p>
            <Link href="/menu" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#b73d20]">See the full menu <span aria-hidden>↗</span></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {signatureDishes.map((dish, index) => (
              <article key={dish.name} className={`group overflow-hidden border border-[#24140d]/10 bg-[#efe3d3] ${index === 0 ? "sm:col-span-2" : ""}`}>
                <div className={`relative overflow-hidden ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                  <Image src={dish.image} alt={dish.name} fill sizes={index === 0 ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 640px) 40vw, 100vw"} className="food-photo object-cover" />
                </div>
                <div className="flex items-end justify-between gap-5 p-5 sm:p-6">
                  <div><h3 className="text-xl font-black tracking-[-.02em] text-[#24140d]">{dish.name}</h3><p className="mt-2 max-w-md text-sm leading-6 text-[#6f5a4b]">{dish.note}</p></div>
                  <span className="text-xl text-[#b73d20]" aria-hidden>↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <section className="bg-[#eadcc8]">
        <Section>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.82fr] lg:gap-16">
            <div>
              <p className="eyebrow">Two kitchens in Tbilisi</p>
              <h2 className="display-serif mt-4 max-w-2xl text-5xl leading-[.96] sm:text-6xl">Choose your table. We’ll handle the rest.</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {locationBranches.map((branch) => (
                  <Link key={branch.id} href="/location" className="interactive-card border border-[#24140d]/12 bg-[#f7f0e5] p-5">
                    <p className="text-lg font-black text-[#24140d]">{branch.shortName}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6f5a4b]">{branch.address}</p>
                    <span className="mt-5 inline-block text-sm font-black text-[#b73d20]">Directions ↗</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="border border-[#24140d]/12 bg-[#20120c] p-6 text-white sm:p-8">
              <div className="mx-auto max-w-[16rem] bg-[#f7f0e5] p-4">
                <Image src="/api/menu-qr" alt="QR code to open the Shanddar MoMo menu" width={320} height={320} unoptimized className="h-auto w-full" />
              </div>
              <div className="mt-6 text-center">
                <p className="text-lg font-black">Scan. Pick a branch. Order.</p>
                <p className="mt-2 text-sm leading-6 text-[#cbb9aa]">The full menu is designed for fast phone browsing at the table or before you arrive.</p>
              </div>
            </div>
          </div>
        </Section>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-center">Good to know</p>
          <h2 className="display-serif mt-4 text-center text-5xl leading-none sm:text-6xl">Before you order.</h2>
          <div className="mt-8"><FaqAccordion /></div>
        </div>
      </Section>

      <section className="border-t border-[#24140d]/10 bg-[#b73d20] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div><p className="text-xs font-black uppercase tracking-[.16em] text-[#f3c56b]">Hungry?</p><p className="display-serif mt-2 text-4xl">Your next momo is a few taps away.</p></div>
          <Link href="/menu" className="premium-button shrink-0 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#24140d] hover:bg-[#f3e3cb]">Open menu</Link>
        </div>
      </section>
    </>
  );
}
