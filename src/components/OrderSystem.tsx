"use client";

import type { ReactNode } from "react";
import { OrderFloatingButton } from "@/components/OrderFloatingButton";
import { OrderProvider } from "@/components/OrderProvider";
import { OrderSummaryPanel } from "@/components/OrderSummaryPanel";

type OrderSystemProps = {
  children: ReactNode;
};

export function OrderSystem({ children }: OrderSystemProps) {
  return (
    <OrderProvider>
      {children}
      <OrderFloatingButton />
      <OrderSummaryPanel />
    </OrderProvider>
  );
}
