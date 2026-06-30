"use client";

import { restaurant } from "@/lib/restaurant";
import { useOrder } from "@/components/OrderProvider";

function whatsappUrl(message: string) {
  const phone = restaurant.phoneHref.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function OrderSummaryPanel() {
  const {
    items,
    totalItems,
    totalPrice,
    isOpen,
    generalNote,
    addItem,
    decreaseItem,
    removeItem,
    updateItemNote,
    setGeneralNote,
    closeOrder,
    clearOrder,
  } = useOrder();

  const hasItems = items.length > 0;
  const itemNotes = items
    .filter((item) => item.note.trim())
    .map((item) => `- ${item.name}: ${item.note.trim()}`);
  const specialNotes = [
    ...itemNotes,
    ...(generalNote.trim() ? [`- ${generalNote.trim()}`] : []),
  ];
  const branchNames = Array.from(
    new Set(items.map((item) => item.branchName).filter(Boolean)),
  );
  const branchName =
    branchNames.length === 1 ? branchNames[0] : branchNames.join(" and ");
  const message = [
    "Hello!",
    "",
    `I would like to place an order from ${branchName || restaurant.name}:`,
    "",
    ...items.map((item) => `${item.name} x ${item.quantity}`),
    "",
    "Special notes:",
    ...(specialNotes.length ? specialNotes : ["- No special notes"]),
    "",
    "Please confirm my order. Thank you.",
  ].join("\n");

  return (
    <div
      className={`order-panel-shell ${isOpen ? "order-panel-shell-open" : ""}`}
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-[#2b120c]/36 backdrop-blur-[2px]"
        aria-label="Close order summary"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeOrder}
      />

      <aside
        className="order-panel"
        aria-label="Order summary"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-4 border-b border-amber-950/10 px-5 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#9b341f]">
              WhatsApp order
            </p>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-[#33150d]">
              My Order
            </h2>
          </div>
          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fff1cf] text-xl font-black text-[#9b341f] transition-colors hover:bg-[#f6d58c]"
            aria-label="Close order summary"
            onClick={closeOrder}
          >
            X
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
          {hasItems ? (
            <div className="grid gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[1.15rem] border border-white/70 bg-white/88 p-4 shadow-[0_10px_26px_rgba(64,29,18,0.07)] ring-1 ring-amber-950/5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-base font-black leading-6 text-[#33150d]">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#9b341f]">
                        {item.category}
                      </p>
                    </div>
                    <p className="shrink-0 rounded-2xl bg-[#126b58] px-3 py-2 text-sm font-black tabular-nums text-white">
                      GEL {item.price * item.quantity}
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-grid grid-cols-[2.25rem_2.5rem_2.25rem] overflow-hidden rounded-full border border-amber-950/10 bg-[#fffaf0] text-center">
                      <button
                        type="button"
                        className="grid h-9 place-items-center text-lg font-black text-[#9b341f] hover:bg-[#fff1cf]"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => decreaseItem(item.id)}
                      >
                        -
                      </button>
                      <span className="grid h-9 place-items-center text-sm font-black tabular-nums text-[#33150d]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="grid h-9 place-items-center text-lg font-black text-[#126b58] hover:bg-[#e9f4ee]"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => addItem(item)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="nav-link rounded-full px-2 py-1 text-xs font-black text-[#9b341f] hover:text-[#33150d]"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <label className="mt-3 block">
                    <span className="text-xs font-black uppercase tracking-[0.12em] text-[#775036]">
                      Item note
                    </span>
                    <input
                      value={item.note}
                      className="mt-1 w-full rounded-2xl border border-amber-950/10 bg-[#fffaf0] px-3 py-2 text-sm font-semibold text-[#33150d] outline-none transition-colors placeholder:text-[#b08b6a] focus:border-[#d94f20]"
                      placeholder="e.g. no onions, extra spicy"
                      onChange={(event) =>
                        updateItemNote(item.id, event.target.value)
                      }
                    />
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.25rem] border border-white/70 bg-white/88 p-5 text-center shadow-[0_10px_26px_rgba(64,29,18,0.07)] ring-1 ring-amber-950/5">
              <p className="text-xl font-black text-[#33150d]">
                Your order is empty
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#775036]">
                Add items from the menu, then send the order by WhatsApp.
              </p>
            </div>
          )}

          <label className="mt-4 block">
            <span className="text-xs font-black uppercase tracking-[0.12em] text-[#775036]">
              Overall notes
            </span>
            <textarea
              value={generalNote}
              className="mt-1 min-h-24 w-full resize-none rounded-[1.15rem] border border-amber-950/10 bg-[#fffaf0] px-3 py-3 text-sm font-semibold text-[#33150d] outline-none transition-colors placeholder:text-[#b08b6a] focus:border-[#d94f20]"
              placeholder="Optional message for the restaurant"
              onChange={(event) => setGeneralNote(event.target.value)}
            />
          </label>
        </div>

        <div className="border-t border-amber-950/10 bg-[#fffaf0]/96 px-5 py-4">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-sm font-black text-[#775036]">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </p>
            <p className="text-xl font-black text-[#33150d]">GEL {totalPrice}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
            <a
              href={hasItems ? whatsappUrl(message) : undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!hasItems}
              className={`premium-button rounded-full px-5 py-3 text-center text-base font-black text-white ${
                hasItems
                  ? "bg-[#126b58] hover:bg-[#0e5446]"
                  : "pointer-events-none bg-[#c9ad90]"
              }`}
            >
              Send via WhatsApp
            </a>
            {hasItems ? (
              <button
                type="button"
                className="nav-link rounded-full px-4 py-3 text-sm font-black text-[#9b341f] hover:text-[#33150d]"
                onClick={clearOrder}
              >
                Clear
              </button>
            ) : null}
          </div>
        </div>
      </aside>
    </div>
  );
}
