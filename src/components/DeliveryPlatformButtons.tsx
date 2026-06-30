import Image from "next/image";
import { findUsPlatforms } from "@/lib/restaurant";

const deliveryPlatforms = findUsPlatforms.filter((platform) =>
  ["Wolt", "Bolt Food"].includes(platform.name),
);

export function DeliveryPlatformButtons() {
  return (
    <section className="mb-7 w-full max-w-full overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/82 p-4 shadow-[0_12px_34px_rgba(64,29,18,0.08)] ring-1 ring-amber-950/5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9b341f]">
            Prefer delivery?
          </p>
          <p className="mt-1 text-sm font-semibold leading-6 text-[#775036]">
            Order online through a delivery app.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {deliveryPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button inline-flex min-w-0 items-center justify-center gap-3 rounded-full bg-[#fffaf0] px-4 py-3 text-sm font-black text-[#33150d] ring-1 ring-amber-950/10 hover:bg-[#f6d58c]"
            >
              <span className="grid h-8 w-11 shrink-0 place-items-center rounded-full bg-white ring-1 ring-amber-950/8">
                <Image
                  src={platform.logo}
                  alt=""
                  width={42}
                  height={28}
                  unoptimized
                  className="max-h-6 max-w-9 object-contain"
                />
              </span>
              Order on {platform.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
