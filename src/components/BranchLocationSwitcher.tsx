"use client";

import { useMemo, useState } from "react";
import type { LocationBranch } from "@/lib/restaurant";

export function BranchLocationSwitcher({
  branches,
}: {
  branches: readonly LocationBranch[];
}) {
  const [activeBranchId, setActiveBranchId] = useState(branches[0]?.id);

  const activeBranch = useMemo(
    () =>
      branches.find((branch) => branch.id === activeBranchId) ?? branches[0],
    [activeBranchId, branches],
  );

  if (!activeBranch) {
    return null;
  }

  const details = [
    {
      title: "Address",
      text: activeBranch.address,
    },
    {
      title: "Opening hours",
      lines: activeBranch.openingHours,
    },
    {
      title: "Dine-in and delivery",
      text: activeBranch.serviceInfo,
    },
  ];

  return (
    <div className="grid gap-6">
      <div className="inline-grid rounded-full bg-white/82 p-1 shadow-[0_16px_40px_rgba(64,29,18,0.08)] ring-1 ring-amber-950/10 sm:w-fit sm:grid-cols-2">
        {branches.map((branch) => {
          const isActive = branch.id === activeBranch.id;

          return (
            <button
              key={branch.id}
              type="button"
              onClick={() => setActiveBranchId(branch.id)}
              className={[
                "premium-button rounded-full px-5 py-3 text-sm font-black transition-all",
                isActive
                  ? "bg-[#401d12] text-white shadow-[0_14px_32px_rgba(64,29,18,0.2)]"
                  : "bg-transparent text-[#57311e] shadow-none hover:bg-[#f6d58c]",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {branch.shortName}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
        <div
          key={`${activeBranch.id}-map`}
          className="interactive-card overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/88 p-2 shadow-[0_18px_52px_rgba(64,29,18,0.11)] ring-1 ring-amber-950/5 animate-[page-enter_260ms_cubic-bezier(0.2,0.8,0.2,1)_both]"
        >
          <iframe
            title={`Google Map to ${activeBranch.name}`}
            src={activeBranch.mapEmbed}
            className="h-[360px] w-full rounded-[1.2rem] sm:h-[470px]"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div
          key={`${activeBranch.id}-details`}
          className="grid gap-4 animate-[page-enter_260ms_cubic-bezier(0.2,0.8,0.2,1)_both]"
        >
          <article className="rounded-[1.35rem] border border-[#f6d58c]/70 bg-[#401d12] p-5 text-white shadow-[0_16px_44px_rgba(64,29,18,0.14)]">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f6d58c]">
              Selected branch
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              {activeBranch.name}
            </h2>
          </article>

          {details.map((detail) => (
            <article
              key={detail.title}
              className="interactive-card rounded-[1.35rem] border border-white/70 bg-white/88 p-5 shadow-[0_12px_30px_rgba(64,29,18,0.08)] ring-1 ring-amber-950/5"
            >
              <h3 className="text-2xl font-black text-[#33150d]">
                {detail.title}
              </h3>
              {Array.isArray(detail.lines) ? (
                <div className="mt-3 grid gap-1.5 text-sm font-bold leading-6 text-[#775036]">
                  {detail.lines.map((line) => {
                    const [day, hours] = line.split(": ");

                    return (
                      <p
                        key={line}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <span className="text-[#33150d]">{day}</span>
                        <span className="text-right tabular-nums">{hours}</span>
                      </p>
                    );
                  })}
                </div>
              ) : (
                <p className="mt-3 text-base font-bold leading-7 text-[#775036]">
                  {detail.text}
                </p>
              )}
            </article>
          ))}

          <a
            href={`tel:${activeBranch.phoneHref}`}
            className="premium-button rounded-full bg-[#d94f20] px-6 py-4 text-center text-lg font-black text-white hover:bg-[#c54419]"
          >
            Call {activeBranch.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
