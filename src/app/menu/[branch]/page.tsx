import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getMenuCategoryId,
  MenuCategorySection,
} from "@/components/MenuCategorySection";
import { DeliveryPlatformButtons } from "@/components/DeliveryPlatformButtons";
import { Section } from "@/components/Section";
import {
  branches,
  branchMenus,
  type BranchSlug,
  restaurant,
} from "@/lib/restaurant";

type MenuDetailPageProps = {
  params: Promise<{
    branch: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(branches).map((branch) => ({ branch }));
}

export async function generateMetadata({
  params,
}: MenuDetailPageProps): Promise<Metadata> {
  const { branch } = await params;
  const branchData = branches[branch as BranchSlug];

  if (!branchData) {
    return {
      title: "Menu",
    };
  }

  return {
    title: branchData.name,
    description: `${branchData.name} for ${restaurant.name}: momos, chowmein and fried rice.`,
  };
}

export default async function MenuDetailPage({ params }: MenuDetailPageProps) {
  const { branch } = await params;
  const branchData = branches[branch as BranchSlug];

  if (!branchData) {
    notFound();
  }

  const branchSlug = branch as BranchSlug;
  const menuSections = branchMenus[branchSlug];
  const itemCount = menuSections.reduce(
    (total, section) => total + section.items.length,
    0,
  );
  const isSaburtalo = branchSlug === "saburtalo";

  return (
    <Section className="min-h-[72svh]">
      <div className="mb-8 w-full max-w-full overflow-hidden rounded-[1.75rem] bg-[#3a1a12] text-white shadow-[0_24px_70px_rgba(64,29,18,0.18)]">
        <div className="bg-[radial-gradient(circle_at_18%_20%,rgba(244,189,74,0.24),transparent_22rem),radial-gradient(circle_at_92%_0%,rgba(18,107,88,0.34),transparent_20rem)] px-5 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#f6d58c]">
                QR-ready menu
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
                {branchData.name}
              </h1>
              <p className="mt-4 max-w-full text-base font-semibold leading-7 text-[#ffe7aa] sm:max-w-2xl sm:text-lg sm:leading-8">
                {branchData.note} Prices are shown in GEL.
              </p>
            </div>
            <a
              href={`tel:${restaurant.phoneHref}`}
              className="premium-button rounded-full bg-white px-5 py-3 text-center text-base font-black text-[#33150d] hover:bg-[#f6d58c]"
            >
              Call to order
            </a>
          </div>
        </div>
      </div>

      <div className="mb-5 flex flex-col items-start gap-3 sm:flex-row sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9b341f]">
            {isSaburtalo ? "Saburtalo branch" : "House favorites"}
          </p>
          <h2 className="mt-1 text-2xl font-black text-[#33150d]">
            {isSaburtalo ? "Full QR menu" : "Quick scan menu"}
          </h2>
        </div>
        <span className="rounded-full bg-[#e9f4ee] px-3 py-2 text-sm font-black text-[#126b58]">
          {itemCount} items
        </span>
      </div>

      <DeliveryPlatformButtons />

      <div className="mb-7">
        <div className="flex flex-wrap gap-2">
          {menuSections.map((section) => (
            <a
              key={section.category}
              href={`#${getMenuCategoryId(section.category)}`}
              className="nav-link rounded-full bg-white/88 px-3.5 py-2 text-sm font-black text-[#57311e] shadow-sm ring-1 ring-amber-950/10 hover:bg-[#f6d58c] sm:px-4"
            >
              {section.category}
            </a>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {menuSections.map((section) => (
          <MenuCategorySection
            key={section.category}
            category={section.category}
            items={section.items}
            branchName={branchData.label}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-[1.35rem] border border-white/70 bg-[#fffaf0]/88 p-5 shadow-[0_12px_34px_rgba(64,29,18,0.08)] ring-1 ring-amber-950/5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black text-[#33150d]">Need help ordering?</p>
          <p className="mt-1 text-sm font-semibold leading-6 text-[#775036]">
            Call the restaurant for dine-in, pickup or delivery information.
          </p>
        </div>
        <a
          href={`tel:${restaurant.phoneHref}`}
          className="premium-button rounded-full bg-[#126b58] px-5 py-3 text-center text-base font-black text-white hover:bg-[#0e5446]"
        >
          {restaurant.phoneDisplay}
        </a>
      </div>

      <Link
        href="/menu"
        className="nav-link mt-6 inline-flex rounded-full px-1 py-2 text-sm font-black text-[#9b341f] hover:text-[#33150d]"
      >
        Back to all menus
      </Link>
    </Section>
  );
}
