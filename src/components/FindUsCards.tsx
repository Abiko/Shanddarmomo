import Image from "next/image";
import { findUsPlatforms } from "@/lib/restaurant";

export function FindUsCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {findUsPlatforms.map((platform) => (
        <a key={platform.name} href={platform.href} target="_blank" rel="noopener noreferrer" className="interactive-card group flex items-center justify-between gap-4 border border-[#24140d]/12 bg-[#f7f0e5] p-4 sm:p-5">
          <div className="flex min-w-0 items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center bg-white ring-1 ring-[#24140d]/8">
              <Image src={platform.logo} alt={`${platform.name} logo`} width={38} height={38} unoptimized className="max-h-8 max-w-9 object-contain" />
            </span>
            <span className="min-w-0"><span className="block text-base font-black text-[#24140d]">{platform.name}</span><span className="mt-1 block text-sm leading-5 text-[#6f5a4b]">{platform.label}</span></span>
          </div>
          <span className="text-lg text-[#b73d20]">↗</span>
        </a>
      ))}
    </div>
  );
}
