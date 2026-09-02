"use client";
import { useMemo, useState } from "react";
import type { LocationBranch } from "@/lib/restaurant";

export function BranchLocationSwitcher({ branches }: { branches: readonly LocationBranch[] }) {
  const [activeBranchId, setActiveBranchId] = useState(branches[0]?.id);
  const activeBranch = useMemo(() => branches.find((branch) => branch.id === activeBranchId) ?? branches[0], [activeBranchId, branches]);
  if (!activeBranch) return null;

  return (
    <div>
      <div className="mb-7 flex flex-wrap gap-2">
        {branches.map((branch) => {
          const active = branch.id === activeBranch.id;
          return <button key={branch.id} type="button" onClick={() => setActiveBranchId(branch.id)} className={`premium-button rounded-full px-5 py-2.5 text-sm font-black ${active ? "bg-[#24140d] text-white" : "border border-[#24140d]/14 text-[#5f493c] hover:bg-white"}`} aria-pressed={active}>{branch.shortName}</button>;
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.18fr_.82fr] lg:gap-8">
        <div key={`${activeBranch.id}-map`} className="overflow-hidden border border-[#24140d]/12 bg-[#eadcc8] p-2 animate-[page-enter_260ms_cubic-bezier(.2,.8,.2,1)_both]">
          <iframe title={`Google Map to ${activeBranch.name}`} src={activeBranch.mapEmbed} className="h-[390px] w-full sm:h-[560px]" loading="eager" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <div key={`${activeBranch.id}-details`} className="animate-[page-enter_260ms_cubic-bezier(.2,.8,.2,1)_both]">
          <p className="eyebrow">Selected branch</p>
          <h2 className="display-serif mt-4 text-5xl leading-none">{activeBranch.name}</h2>
          <p className="mt-5 text-base leading-7 text-[#6f5a4b]">{activeBranch.address}</p>

          <div className="mt-8 border-t border-[#24140d]/14">
            <div className="border-b border-[#24140d]/14 py-5"><p className="text-xs font-black uppercase tracking-[.14em] text-[#8a7464]">Opening hours</p><div className="mt-3 grid gap-1.5 text-sm text-[#5f493c]">{activeBranch.openingHours.map((line) => { const [day, hours] = line.split(": "); return <p key={line} className="flex justify-between gap-4"><span className="font-bold text-[#24140d]">{day}</span><span className="text-right tabular-nums">{hours}</span></p>; })}</div></div>
            <div className="border-b border-[#24140d]/14 py-5"><p className="text-xs font-black uppercase tracking-[.14em] text-[#8a7464]">Service</p><p className="mt-2 text-sm leading-6 text-[#6f5a4b]">{activeBranch.serviceInfo}</p></div>
          </div>

          <a href={`tel:${activeBranch.phoneHref}`} className="premium-button mt-7 inline-flex rounded-full bg-[#b73d20] px-5 py-3 text-sm font-black text-white hover:bg-[#8d2d18]">Call {activeBranch.phoneDisplay}</a>
        </div>
      </div>
    </div>
  );
}
