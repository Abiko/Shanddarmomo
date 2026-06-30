import Image from "next/image";
import { findUsPlatforms } from "@/lib/restaurant";

export function FindUsCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {findUsPlatforms.map((platform) => {
        return (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-card group rounded-[1.35rem] border border-white/70 bg-white/90 p-5 shadow-[0_14px_36px_rgba(64,29,18,0.08)] ring-1 ring-amber-950/5"
          >
            <div className="flex min-w-0 items-center gap-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#fff3d8] ring-1 ring-amber-950/8 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={platform.logo}
                  alt=""
                  width={52}
                  height={52}
                  unoptimized
                  className="max-h-11 max-w-12 object-contain"
                />
              </span>
              <span className="min-w-0">
                <span className="block text-xl font-black text-[#33150d] [overflow-wrap:anywhere]">
                  {platform.name}
                </span>
                <span className="mt-1 block text-sm font-bold leading-6 text-[#775036] [overflow-wrap:anywhere]">
                  {platform.label}
                </span>
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
