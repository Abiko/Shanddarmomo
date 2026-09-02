"use client";
import { useOrder, type OrderItemInput } from "@/components/OrderProvider";

type MenuOrderControlsProps = { item: OrderItemInput };
export function MenuOrderControls({ item }: MenuOrderControlsProps) {
  const { items, addItem, decreaseItem, openOrder } = useOrder();
  const orderItem = items.find((selectedItem) => selectedItem.id === item.id);
  const quantity = orderItem?.quantity ?? 0;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2.5">
      {quantity === 0 ? (
        <button type="button" className="premium-button rounded-full border border-[#24140d]/15 px-4 py-2 text-xs font-black text-[#24140d] hover:border-[#b73d20] hover:text-[#b73d20]" onClick={() => addItem(item)}>Add to order</button>
      ) : (
        <>
          <div className="inline-grid grid-cols-[2rem_2rem_2rem] overflow-hidden rounded-full border border-[#24140d]/14 bg-[#f2e8dc]" aria-label={`Quantity for ${item.name}`}>
            <button type="button" className="grid h-8 place-items-center text-base font-black text-[#6f5a4b] hover:bg-[#e7d7c5]" aria-label={`Decrease ${item.name} quantity`} onClick={() => decreaseItem(item.id)}>−</button>
            <span className="grid h-8 place-items-center text-xs font-black tabular-nums text-[#24140d]">{quantity}</span>
            <button type="button" className="grid h-8 place-items-center text-base font-black text-[#b73d20] hover:bg-[#e7d7c5]" aria-label={`Increase ${item.name} quantity`} onClick={() => addItem(item)}>+</button>
          </div>
          <button type="button" className="text-xs font-black text-[#7b6251] hover:text-[#24140d]" onClick={openOrder}>Add note</button>
        </>
      )}
    </div>
  );
}
