import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMenuCategoryId, MenuCategorySection } from "@/components/MenuCategorySection";
import { DeliveryPlatformButtons } from "@/components/DeliveryPlatformButtons";
import { Section } from "@/components/Section";
import { branches, branchMenus, type BranchSlug, restaurant } from "@/lib/restaurant";

type MenuDetailPageProps = { params: Promise<{ branch: string }> };

export function generateStaticParams() { return Object.keys(branches).map((branch) => ({ branch })); }

export async function generateMetadata({ params }: MenuDetailPageProps): Promise<Metadata> {
  const { branch } = await params;
  const branchData = branches[branch as BranchSlug];
  if (!branchData) return { title: "Menu" };
  return { title: branchData.name, description: `${branchData.name} for ${restaurant.name}: momos, noodles, rice and Indo-Chinese favorites.` };
}

export default async function MenuDetailPage({ params }: MenuDetailPageProps) {
  const { branch } = await params;
  const branchData = branches[branch as BranchSlug];
  if (!branchData) notFound();
  const branchSlug = branch as BranchSlug;
  const menuSections = branchMenus[branchSlug];
  const itemCount = menuSections.reduce((total, section) => total + section.items.length, 0);

  return (
    <>
      <section className="border-b border-[#24140d]/10 bg-[#20120c] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Link href="/menu" className="text-sm font-bold text-[#d7c4b3] hover:text-white">← All menus</Link>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow !text-[#e8b24e]">{branchData.label} · {itemCount} dishes</p>
              <h1 className="display-serif mt-4 text-6xl leading-[.9] sm:text-7xl">{branchData.name}</h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#cdbcae]">{branchData.note} Prices are shown in GEL.</p>
            </div>
            <a href={`tel:${restaurant.phoneHref}`} className="premium-button rounded-full border border-white/20 px-5 py-3 text-center text-sm font-black text-white hover:bg-white hover:text-[#24140d]">Call to order</a>
          </div>
        </div>
      </section>

      <Section>
        <DeliveryPlatformButtons />

        <nav className="sticky top-[4.85rem] z-20 -mx-4 mb-10 overflow-x-auto border-y border-[#24140d]/10 bg-[#f7f0e5]/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8" aria-label="Menu categories">
          <div className="mx-auto flex w-max min-w-full max-w-7xl gap-2">
            {menuSections.map((section) => (
              <a key={section.category} href={`#${getMenuCategoryId(section.category)}`} className="nav-link whitespace-nowrap rounded-full border border-[#24140d]/12 bg-[#f7f0e5] px-4 py-2 text-sm font-bold text-[#5f493c] hover:border-[#b73d20]/35 hover:text-[#b73d20]">{section.category}</a>
            ))}
          </div>
        </nav>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
          {menuSections.map((section) => <MenuCategorySection key={section.category} category={section.category} items={section.items} branchName={branchData.label} />)}
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-[#24140d]/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-xl font-black text-[#24140d]">Need help choosing?</p><p className="mt-1 text-sm leading-6 text-[#6f5a4b]">Call the restaurant for pickup, dine-in or delivery information.</p></div>
          <a href={`tel:${restaurant.phoneHref}`} className="premium-button rounded-full bg-[#24140d] px-5 py-3 text-center text-sm font-black text-white hover:bg-[#b73d20]">{restaurant.phoneDisplay}</a>
        </div>
      </Section>
    </>
  );
}
