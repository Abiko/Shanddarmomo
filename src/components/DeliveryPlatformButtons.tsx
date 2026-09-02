import Image from "next/image";
import { findUsPlatforms } from "@/lib/restaurant";
const deliveryPlatforms = findUsPlatforms.filter((platform) => ["Wolt", "Bolt Food"].includes(platform.name));

export function DeliveryPlatformButtons() {
  return (
    <section className="mb-8 flex flex-col gap-4 border-b border-[#24140d]/12 pb-7 sm:flex-row sm:items-center sm:justify-between">
      <div><p className="text-sm font-black text-[#24140d]">Prefer delivery?</p><p className="mt-1 text-sm text-[#6f5a4b]">Order through your delivery app.</p></div>
      <div className="flex flex-wrap gap-2">
        {deliveryPlatforms.map((platform) => (
          <a key={platform.name} href={platform.href} target="_blank" rel="noopener noreferrer" className="premium-button inline-flex items-center gap-2.5 rounded-full border border-[#24140d]/12 bg-white/45 px-4 py-2.5 text-sm font-black text-[#24140d] hover:bg-white">
            <span className="grid h-7 w-9 place-items-center"><Image src={platform.logo} alt={`${platform.name} logo`} width={36} height={24} unoptimized className="max-h-6 max-w-8 object-contain" /></span>
            {platform.name}
          </a>
        ))}
      </div>
    </section>
  );
}
