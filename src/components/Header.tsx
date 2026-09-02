"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { restaurant } from "@/lib/restaurant";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/location", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#2d1a10]/10 bg-[#f7f0e5]/94 backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.85rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label={`${restaurant.name} home`}>
          <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-black/8">
            <Image src={restaurant.logo} alt={`${restaurant.name} logo`} width={52} height={52} priority className="h-full w-full object-contain" />
          </span>
          <span>
            <span className="block text-[1.02rem] font-black tracking-[-0.02em] text-[#24140d]">SHANDDAR MOMO</span>
            <span className="mt-0.5 block text-[0.65rem] font-bold uppercase tracking-[0.17em] text-[#9b4027]">Nepali kitchen · Tbilisi</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} className={`nav-link px-3.5 py-2 text-sm font-bold ${active ? "text-[#b73d20]" : "text-[#5f493c] hover:text-[#24140d]"}`}>{item.label}</Link>;
          })}
          <Link href="/menu" className="premium-button ml-3 rounded-full bg-[#24140d] px-5 py-2.5 text-sm font-black text-white hover:bg-[#b73d20]">Order food</Link>
        </div>

        <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-[#24140d]/14 md:hidden" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0.5 h-[1.5px] w-5 bg-[#24140d] transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-[#24140d] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[13px] h-[1.5px] w-5 bg-[#24140d] transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div className={`overflow-hidden border-t border-[#24140d]/10 bg-[#f7f0e5] transition-[max-height] duration-300 md:hidden ${open ? "max-h-96" : "max-h-0 border-t-transparent"}`}>
        <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
          {navItems.map((item) => <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-base font-bold text-[#24140d] hover:bg-[#efe3d3]">{item.label}</Link>)}
          <Link href="/menu" className="mt-2 rounded-full bg-[#24140d] px-5 py-3.5 text-center text-sm font-black text-white">Order food</Link>
        </div>
      </div>
    </header>
  );
}
