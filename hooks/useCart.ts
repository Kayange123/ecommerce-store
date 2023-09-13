import { IProduct } from "@/common.types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartProps {
  items?: IProduct[];
  addItem: (data: IProduct) => void;
  removeItem: (id: string) => void;
  removeAllItems: () => void;
}
const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      items: [],
      addItem: (data: IProduct) => {
        const currentItems = get().items;
        const existingItem = currentItems?.find((item) => item.id === data.id);
        if (existingItem) {
          return toast("item already in the cart");
        }
        //@ts-ignore
        set({ items: [...get().items, data] });
        toast.success("Item added successfully");
      },
      removeItem: (id: string) => {
        //@ts-ignore
        set({ items: [...get().items?.filter((item) => item.id !== id)] });
        toast.success("Item removed successfully");
      },
      removeAllItems: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
