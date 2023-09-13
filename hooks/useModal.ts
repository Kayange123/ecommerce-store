import { IProduct } from "@/common.types";
import { create } from "zustand";

interface ModalProps {
  isOpen: boolean;
  data?: IProduct;
  onOpen: (data: IProduct) => void;
  onClose: () => void;
}
const usePreviewModal = create<ModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: IProduct) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
