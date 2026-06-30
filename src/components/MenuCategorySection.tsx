import Image from "next/image";
import { getDietaryBadges } from "@/lib/dietary";
import type { MenuCategory } from "@/lib/restaurant";
import { MenuOrderControls } from "@/components/MenuOrderControls";

type MenuCategorySectionProps = MenuCategory & {
  branchName: string;
};

function categoryId(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getMenuCategoryId(category: string) {
  return categoryId(category);
}

function orderItemId(category: string, name: string, price: number) {
  return `${category}-${name}-${price}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function MenuCategorySection({
  category,
  items,
  branchName,
}: MenuCategorySectionProps) {
  return (
    <section id={categoryId(category)} className="scroll-mt-28">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#9b341f]">
            Category
          </p>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-[#33150d]">
            {category}
          </h2>
        </div>
        <span className="rounded-full bg-[#e9f4ee] px-3 py-1.5 text-xs font-black text-[#126b58]">
          {items.length} items
        </span>
      </div>

      <div className="grid gap-3.5 sm:gap-2.5">
        {items.map((item) => (
          <article
            key={`${category}-${item.name}`}
            className="interactive-card rounded-[1.15rem] border border-white/70 bg-white/90 p-4 shadow-[0_10px_26px_rgba(64,29,18,0.07)] ring-1 ring-amber-950/5 backdrop-blur"
          >
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={72}
                  loading="lazy"
                  sizes="96px"
                  unoptimized
                  className="h-[72px] w-20 shrink-0 rounded-2xl object-cover sm:w-24"
                />
              ) : null}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-black leading-6 text-[#33150d] sm:text-lg">
                    {item.name}
                  </h3>
                  {getDietaryBadges({ ...item, category }).map((badge) => (
                    <span
                      key={badge.kind}
                      className={`rounded-full px-2 py-0.5 text-[0.65rem] font-black uppercase tracking-[0.12em] ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
                {item.description ? (
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#775036]">
                    {item.description}
                  </p>
                ) : null}
                <MenuOrderControls
                  item={{
                    id: orderItemId(category, item.name, item.price),
                    name: item.name,
                    price: item.price,
                    category,
                    branchName,
                  }}
                />
              </div>
              <p className="shrink-0 rounded-2xl bg-[#126b58] px-3 py-2 text-sm font-black tabular-nums text-white shadow-lg shadow-[#126b58]/15 sm:px-3.5 sm:text-base">
                GEL {item.price}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
