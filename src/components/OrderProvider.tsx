"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

export type OrderItemInput = {
  id: string;
  name: string;
  price: number;
  category: string;
  branchName: string;
};

export type OrderItem = OrderItemInput & {
  quantity: number;
  note: string;
};

type OrderContextValue = {
  items: OrderItem[];
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  generalNote: string;
  addItem: (item: OrderItemInput) => void;
  decreaseItem: (id: string) => void;
  removeItem: (id: string) => void;
  updateItemNote: (id: string, note: string) => void;
  setGeneralNote: (note: string) => void;
  openOrder: () => void;
  closeOrder: () => void;
  clearOrder: () => void;
};

const OrderContext = createContext<OrderContextValue | null>(null);

type OrderProviderProps = {
  children: ReactNode;
};

export function OrderProvider({ children }: OrderProviderProps) {
  const [itemsById, setItemsById] = useState<Record<string, OrderItem>>({});
  const [isOpen, setIsOpen] = useState(false);
  const [generalNote, setGeneralNote] = useState("");

  const items = useMemo(() => Object.values(itemsById), [itemsById]);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  const value = useMemo<OrderContextValue>(
    () => ({
      items,
      totalItems,
      totalPrice,
      isOpen,
      generalNote,
      addItem: (item) => {
        setItemsById((current) => {
          const existing = current[item.id];

          return {
            ...current,
            [item.id]: existing
              ? { ...existing, quantity: existing.quantity + 1 }
              : { ...item, quantity: 1, note: "" },
          };
        });
      },
      decreaseItem: (id) => {
        setItemsById((current) => {
          const existing = current[id];

          if (!existing) {
            return current;
          }

          if (existing.quantity <= 1) {
            const rest = { ...current };
            delete rest[id];
            return rest;
          }

          return {
            ...current,
            [id]: { ...existing, quantity: existing.quantity - 1 },
          };
        });
      },
      removeItem: (id) => {
        setItemsById((current) => {
          const rest = { ...current };
          delete rest[id];
          return rest;
        });
      },
      updateItemNote: (id, note) => {
        setItemsById((current) => {
          const existing = current[id];

          if (!existing) {
            return current;
          }

          return {
            ...current,
            [id]: { ...existing, note },
          };
        });
      },
      setGeneralNote,
      openOrder: () => setIsOpen(true),
      closeOrder: () => setIsOpen(false),
      clearOrder: () => {
        setItemsById({});
        setGeneralNote("");
      },
    }),
    [generalNote, isOpen, items, totalItems, totalPrice],
  );

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrder must be used inside OrderProvider");
  }

  return context;
}
