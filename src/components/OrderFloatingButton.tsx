"use client";
import { useOrder } from "@/components/OrderProvider";

export function OrderFloatingButton() {
  const { totalItems, totalPrice, openOrder } = useOrder();
  return (
    <button type="button" className="order-floating-button premium-button" aria-label={`Open order summary with ${totalItems} items`} onClick={openOrder}>
      <span>{totalItems > 0 ? "View order" : "My order"}</span>
      <span className="order-floating-count">{totalItems}</span>
      {totalItems > 0 ? <span className="hidden text-xs font-black text-[#f0c76f] sm:inline">{totalPrice} ₾</span> : null}
    </button>
  );
}
