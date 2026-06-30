"use client";

import { useOrder, type OrderItemInput } from "@/components/OrderProvider";

type MenuOrderControlsProps = {
  item: OrderItemInput;
};

export function MenuOrderControls({ item }: MenuOrderControlsProps) {
  const { items, addItem, decreaseItem, openOrder } = useOrder();
  const orderItem = items.find((selectedItem) => selectedItem.id === item.id);
  const quantity = orderItem?.quantity ?? 0;

  return (
    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
      <div
        className="inline-grid w-fit grid-cols-[2.35rem_2.5rem_2.35rem] overflow-hidden rounded-full border border-amber-950/10 bg-[#fffaf0] text-center shadow-sm"
        aria-label={`Quantity for ${item.name}`}
      >
        <button
          type="button"
          className="grid h-10 place-items-center text-lg font-black text-[#9b341f] transition-colors hover:bg-[#fff1cf] disabled:text-[#c9ad90]"
          aria-label={`Decrease ${item.name} quantity`}
          disabled={quantity === 0}
          onClick={() => decreaseItem(item.id)}
        >
          -
        </button>
        <span className="grid h-10 place-items-center text-sm font-black tabular-nums text-[#33150d]">
          {quantity}
        </span>
        <button
          type="button"
          className="grid h-10 place-items-center text-lg font-black text-[#126b58] transition-colors hover:bg-[#e9f4ee]"
          aria-label={`Increase ${item.name} quantity`}
          onClick={() => addItem(item)}
        >
          +
        </button>
      </div>

      <div className="flex flex-wrap gap-2.5 sm:gap-2">
        <button
          type="button"
          className="premium-button rounded-full bg-[#d94f20] px-4 py-2.5 text-sm font-black text-white hover:bg-[#c54419]"
          onClick={() => addItem(item)}
        >
          Add to Order
        </button>
        {quantity > 0 ? (
          <button
            type="button"
            className="nav-link rounded-full bg-white px-4 py-2.5 text-sm font-black text-[#126b58] ring-1 ring-amber-950/10 hover:bg-[#e9f4ee]"
            onClick={openOrder}
          >
            Edit Note
          </button>
        ) : null}
      </div>
    </div>
  );
}
