import type { MenuItem } from "@/lib/restaurant";

export type DietaryBadgeKind = "halal" | "vegetarian" | "spicy";

export type DietaryBadge = {
  kind: DietaryBadgeKind;
  label: string;
  className: string;
};

type BadgeSource = MenuItem & {
  category?: string;
};

const badgeStyles: Record<DietaryBadgeKind, string> = {
  halal: "bg-[#e9f4ee] text-[#126b58]",
  vegetarian: "bg-[#edf7df] text-[#3f6f1c]",
  spicy: "bg-[#fff1cf] text-[#9b341f]",
};

const vegetarianPattern =
  /\b(veg|vegetarian|paneer|mushroom|potato|french fries)\b/i;
const spicyPattern = /\b(chilli|chili|schezwan|achari|tandoori|jhol|65)\b/i;

function hasVegetarianSignal(item: BadgeSource) {
  return vegetarianPattern.test(`${item.category ?? ""} ${item.name} ${item.tag ?? ""}`);
}

function hasSpicySignal(item: BadgeSource) {
  return spicyPattern.test(
    `${item.category ?? ""} ${item.name} ${item.description ?? ""} ${item.tag ?? ""}`,
  );
}

export function getDietaryBadges(item: BadgeSource): DietaryBadge[] {
  const badges: DietaryBadge[] = [];
  const isHalal = item.halal ?? true;
  const isVegetarian = item.vegetarian ?? hasVegetarianSignal(item);
  const isSpicy = item.spicy ?? hasSpicySignal(item);

  if (isHalal) {
    badges.push({ kind: "halal", label: "Halal", className: badgeStyles.halal });
  }

  if (isVegetarian) {
    badges.push({
      kind: "vegetarian",
      label: "Vegetarian",
      className: badgeStyles.vegetarian,
    });
  }

  if (isSpicy) {
    badges.push({ kind: "spicy", label: "Spicy", className: badgeStyles.spicy });
  }

  return badges;
}
