import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="bg-[#20120c] text-[#f8eee1]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 border-b border-white/12 pb-10 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-14 w-14 overflow-hidden rounded-full bg-white"><Image src={restaurant.logo} alt={`${restaurant.name} logo`} width={60} height={60} className="h-full w-full object-contain" /></span>
              <span className="text-lg font-black tracking-[-.02em]">SHANDDAR MOMO</span>
            </Link>
            <p className="mt-5 text-sm leading-6 text-[#cdbcae]">Authentic Nepali and Indo-Chinese comfort food, handmade in Tbilisi.</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[.16em] text-[#e3ae4a]">Explore</p>
            <div className="mt-4 grid gap-3 text-sm font-bold text-[#eadfd3]">
              <Link href="/menu" className="hover:text-white">Menu</Link>
              <Link href="/location" className="hover:text-white">Locations</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[.16em] text-[#e3ae4a]">Contact</p>
            <div className="mt-4 grid gap-3 text-sm font-bold text-[#eadfd3]">
              <a href={`tel:${restaurant.phoneHref}`} className="hover:text-white">{restaurant.phoneDisplay}</a>
              <a href={restaurant.whatsappHref} className="hover:text-white">WhatsApp</a>
              <a href="https://www.instagram.com/shanddarmomo/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs font-semibold text-[#9f8e81] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shanddar MoMo.</p>
          <p>Saburtalo · Isani · Tbilisi</p>
        </div>
      </div>
    </footer>
  );
}
