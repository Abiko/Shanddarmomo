import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#2b120c] text-[#fff8e8]">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-[1fr_auto] sm:px-6">
        <div className="flex gap-4">
          <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white ring-1 ring-white/20">
            <Image
              src={restaurant.logo}
              alt={`${restaurant.name} logo`}
              width={64}
              height={64}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="text-xl font-black">{restaurant.name}</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#f6d58c]">
              Authentic Nepali and Indo-Chinese comfort food at{" "}
              {restaurant.address}.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-bold sm:justify-end">
          <Link
            href="/menu"
            className="nav-link rounded-full px-2 py-1 hover:text-[#f6d58c]"
          >
            Menu
          </Link>
          <Link
            href="/location"
            className="nav-link rounded-full px-2 py-1 hover:text-[#f6d58c]"
          >
            Location
          </Link>
          <a
            href={`tel:${restaurant.phoneHref}`}
            className="nav-link rounded-full px-2 py-1 hover:text-[#f6d58c]"
          >
            Call
          </a>
        </div>
      </div>
    </footer>
  );
}
