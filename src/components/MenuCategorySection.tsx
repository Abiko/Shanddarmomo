import Image from "next/image";
import { getDietaryBadges } from "@/lib/dietary";
import type { MenuCategory } from "@/lib/restaurant";
import { MenuOrderControls } from "@/components/MenuOrderControls";

type MenuCategorySectionProps = MenuCategory & { branchName: string };
function categoryId(category: string) { return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
export function getMenuCategoryId(category: string) { return categoryId(category); }
function orderItemId(category: string, name: string, price: number) { return `${category}-${name}-${price}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

export function MenuCategorySection({ category, items, branchName }: MenuCategorySectionProps) {
  return (
    <section id={categoryId(category)} className="scroll-mt-40">
      <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#24140d]/12 pb-4">
        <h2 className="display-serif text-4xl leading-none text-[#24140d]">{category}</h2>
        <span className="shrink-0 text-xs font-bold uppercase tracking-[.13em] text-[#8a7464]">{items.length} items</span>
      </div>

      <div className="grid gap-2">
        {items.map((item) => {
          const badges = getDietaryBadges({ ...item, category });
          return (
            <article key={`${category}-${item.name}`} className="group grid grid-cols-[5.4rem_1fr] gap-4 border-b border-[#24140d]/10 py-4 last:border-b-0 sm:grid-cols-[6.4rem_1fr]">
              {item.image ? (
                <div className="relative h-[5.4rem] w-[5.4rem] overflow-hidden bg-[#e8dac7] sm:h-[6.4rem] sm:w-[6.4rem]">
                  <Image src={item.image} alt={item.name} fill loading="lazy" sizes="102px" unoptimized className="food-photo object-cover" />
                </div>
              ) : <div className="h-[5.4rem] w-[5.4rem] bg-[#e8dac7] sm:h-[6.4rem] sm:w-[6.4rem]" />}

              <div className="min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-black leading-6 tracking-[-.015em] text-[#24140d] sm:text-lg">{item.name}</h3>
                    {badges.length ? <div className="mt-1.5 flex flex-wrap gap-1.5">{badges.map((badge) => <span key={badge.kind} className="text-[.68rem] font-black uppercase tracking-[.1em] text-[#7a6657]">{badge.label}</span>)}</div> : null}
                  </div>
                  <p className="shrink-0 text-base font-black tabular-nums text-[#b73d20]">{item.price} ₾</p>
                </div>
                {item.description ? <p className="mt-2 text-sm leading-5 text-[#6f5a4b]">{item.description}</p> : null}
                <MenuOrderControls item={{ id: orderItemId(category, item.name, item.price), name: item.name, price: item.price, category, branchName }} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
