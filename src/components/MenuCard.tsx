import { getDietaryBadges } from "@/lib/dietary";

type MenuCardProps = {
  name: string;
  price: number;
  category?: string;
  description?: string;
  tag?: string;
  halal?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
};

export function MenuCard({
  name,
  price,
  category,
  description,
  tag,
  halal,
  vegetarian,
  spicy,
}: MenuCardProps) {
  const dietaryBadges = getDietaryBadges({
    name,
    price,
    category,
    description,
    tag,
    halal,
    vegetarian,
    spicy,
  });

  return (
    <article className="interactive-card group rounded-[1.35rem] border border-white/70 bg-white/88 p-5 shadow-[0_12px_30px_rgba(64,29,18,0.08)] ring-1 ring-amber-950/5 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {category ? (
              <span className="rounded-full bg-[#fff1cf] px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.13em] text-[#9b341f]">
                {category}
              </span>
            ) : null}
            {tag ? (
              <span className="rounded-full bg-[#e9f4ee] px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.13em] text-[#126b58]">
                {tag}
              </span>
            ) : null}
            {dietaryBadges.map((badge) => (
              <span
                key={badge.kind}
                className={`rounded-full px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.13em] ${badge.className}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-black leading-tight tracking-tight text-[#33150d]">
            {name}
          </h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#7a4a2e]">
            {description ?? "Homemade Nepali and Indo-Chinese favorite"}
          </p>
        </div>
        <p className="shrink-0 rounded-2xl bg-[#126b58] px-3.5 py-2 text-lg font-black text-white shadow-lg shadow-[#126b58]/18 group-hover:bg-[#0f5b4b]">
          GEL {price}
        </p>
      </div>
    </article>
  );
}
