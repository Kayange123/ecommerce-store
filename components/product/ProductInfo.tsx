"use client";

import { IProduct } from "@/common.types";
import Currency from "../ui/Currency";
import Button from "../ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/useCart";
import usePreviewModal from "@/hooks/useModal";

interface ProductInfoProps {
  data: IProduct;
}

const ProductInfo = ({ data }: ProductInfoProps) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  return (
    <div>
      <p className="font-bold text-gray-900 text-3xl">{data?.name}</p>
      <div className="flex items-end justify-between mt-3">
        <p className="text-gray-900 text-2xl">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Size:</h3>
        <p>{data?.size?.name}</p>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={() => {
            cart.addItem(data);
            previewModal.onClose();
          }}
          className="flex items-center gap-x-3"
        >
          <span className="mr-2">Add to cart</span>
          <ShoppingCart size={20} />{" "}
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
