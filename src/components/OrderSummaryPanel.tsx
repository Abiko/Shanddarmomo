"use client";
import { restaurant } from "@/lib/restaurant";
import { useOrder } from "@/components/OrderProvider";

function whatsappUrl(message: string) {
  const phone = restaurant.phoneHref.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function OrderSummaryPanel() {
  const { items, totalItems, totalPrice, isOpen, generalNote, addItem, decreaseItem, removeItem, updateItemNote, setGeneralNote, closeOrder, clearOrder } = useOrder();
  const hasItems = items.length > 0;
  const itemNotes = items.filter((item) => item.note.trim()).map((item) => `- ${item.name}: ${item.note.trim()}`);
  const specialNotes = [...itemNotes, ...(generalNote.trim() ? [`- ${generalNote.trim()}`] : [])];
  const branchNames = Array.from(new Set(items.map((item) => item.branchName).filter(Boolean)));
  const branchName = branchNames.length === 1 ? branchNames[0] : branchNames.join(" and ");
  const message = ["Hello!", "", `I would like to place an order from ${branchName || restaurant.name}:`, "", ...items.map((item) => `${item.name} x ${item.quantity}`), "", "Special notes:", ...(specialNotes.length ? specialNotes : ["- No special notes"]), "", "Please confirm my order. Thank you."].join("\n");

  return (
    <div className={`order-panel-shell ${isOpen ? "order-panel-shell-open" : ""}`} aria-hidden={!isOpen} inert={!isOpen}>
      <button type="button" className="absolute inset-0 cursor-default bg-[#160c08]/50 backdrop-blur-[2px]" aria-label="Close order summary" tabIndex={isOpen ? 0 : -1} onClick={closeOrder} />
      <aside className="order-panel" aria-label="Order summary" role="dialog" aria-modal="true">
        <div className="flex items-start justify-between gap-4 border-b border-[#24140d]/12 px-5 py-5">
          <div><p className="eyebrow">WhatsApp order</p><h2 className="display-serif mt-2 text-4xl leading-none text-[#24140d]">Your order</h2></div>
          <button type="button" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#24140d]/14 text-lg font-bold text-[#24140d] hover:bg-[#efe3d3]" aria-label="Close order summary" onClick={closeOrder}>×</button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
          {hasItems ? (
            <div className="divide-y divide-[#24140d]/10 border-y border-[#24140d]/10">
              {items.map((item) => (
                <div key={item.id} className="py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0"><p className="text-base font-black leading-6 text-[#24140d]">{item.name}</p><p className="mt-1 text-xs font-bold uppercase tracking-[.11em] text-[#8a7464]">{item.category}</p></div>
                    <p className="shrink-0 text-sm font-black tabular-nums text-[#b73d20]">{item.price * item.quantity} ₾</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="inline-grid grid-cols-[2.15rem_2.3rem_2.15rem] overflow-hidden rounded-full border border-[#24140d]/14 bg-[#efe3d3]">
                      <button type="button" className="grid h-9 place-items-center text-lg font-black text-[#6f5a4b] hover:bg-[#e3d2bf]" aria-label={`Decrease ${item.name} quantity`} onClick={() => decreaseItem(item.id)}>−</button>
                      <span className="grid h-9 place-items-center text-sm font-black tabular-nums text-[#24140d]">{item.quantity}</span>
                      <button type="button" className="grid h-9 place-items-center text-lg font-black text-[#b73d20] hover:bg-[#e3d2bf]" aria-label={`Increase ${item.name} quantity`} onClick={() => addItem(item)}>+</button>
                    </div>
                    <button type="button" className="text-xs font-black text-[#8d2d18] hover:text-[#24140d]" onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                  <label className="mt-3 block"><span className="text-[.68rem] font-black uppercase tracking-[.12em] text-[#8a7464]">Item note</span><input value={item.note} className="mt-1.5 w-full border border-[#24140d]/12 bg-[#fbf7f1] px-3 py-2.5 text-sm font-medium text-[#24140d] outline-none placeholder:text-[#a89586] focus:border-[#b73d20]" placeholder="e.g. no onions, extra spicy" onChange={(event) => updateItemNote(item.id, event.target.value)} /></label>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center"><p className="display-serif text-3xl text-[#24140d]">Nothing here yet.</p><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#6f5a4b]">Add dishes from the menu, then send your order through WhatsApp.</p></div>
          )}

          <label className="mt-5 block"><span className="text-[.68rem] font-black uppercase tracking-[.12em] text-[#8a7464]">Overall notes</span><textarea value={generalNote} className="mt-1.5 min-h-24 w-full resize-none border border-[#24140d]/12 bg-[#fbf7f1] px-3 py-3 text-sm font-medium text-[#24140d] outline-none placeholder:text-[#a89586] focus:border-[#b73d20]" placeholder="Optional message for the restaurant" onChange={(event) => setGeneralNote(event.target.value)} /></label>
        </div>

        <div className="border-t border-[#24140d]/12 bg-[#efe3d3] px-5 py-4">
          <div className="mb-3 flex items-center justify-between gap-4"><p className="text-sm font-bold text-[#6f5a4b]">{totalItems} {totalItems === 1 ? "item" : "items"}</p><p className="text-xl font-black text-[#24140d]">{totalPrice} ₾</p></div>
          <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
            <a href={hasItems ? whatsappUrl(message) : undefined} target="_blank" rel="noreferrer" aria-disabled={!hasItems} className={`premium-button rounded-full px-5 py-3 text-center text-sm font-black text-white ${hasItems ? "bg-[#2e5a4e] hover:bg-[#21453c]" : "pointer-events-none bg-[#a89484]"}`}>Send via WhatsApp</a>
            {hasItems ? <button type="button" className="px-4 py-3 text-sm font-black text-[#8d2d18] hover:text-[#24140d]" onClick={clearOrder}>Clear</button> : null}
          </div>
        </div>
      </aside>
    </div>
  );
}
