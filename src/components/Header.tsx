"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { restaurant } from "@/lib/restaurant";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/60 bg-[#fffaf0]/88 shadow-sm shadow-[#401d12]/5 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-amber-950/10 transition-transform duration-200 group-hover:scale-105">
              <Image
                src={restaurant.logo}
                alt={`${restaurant.name} logo`}
                width={48}
                height={48}
                priority
                className="h-full w-full object-contain"
              />
            </span>
            <span className="min-w-0">
              <span className="block whitespace-nowrap text-lg font-black tracking-tight text-[#4a1f12]">
                {restaurant.name}
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#9b341f] transition-colors group-hover:text-[#126b58]">
                Nepali Kitchen
              </span>
            </span>
          </Link>
          <div className="hidden rounded-full bg-white/82 p-1 shadow-[0_16px_40px_rgba(64,29,18,0.08)] ring-1 ring-amber-950/10 sm:flex sm:items-center sm:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link rounded-full px-4 py-2 text-center text-sm font-bold ${
                  pathname === item.href
                    ? "bg-[#401d12] text-white"
                    : "text-[#57311e] hover:bg-[#f6d58c] hover:text-[#3b1b11]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <nav className="fixed inset-x-2 bottom-3 z-40 grid max-w-[calc(100vw-1rem)] grid-cols-4 overflow-hidden rounded-full border border-white/70 bg-[#fffaf0]/94 p-1 shadow-[0_18px_50px_rgba(64,29,18,0.22)] backdrop-blur-xl sm:hidden">
        {navItems.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link min-w-0 rounded-full px-1 py-3 text-center text-[0.7rem] font-black ${
                active
                  ? "bg-[#401d12] text-white"
                  : "text-[#57311e] hover:bg-[#f6d58c]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
