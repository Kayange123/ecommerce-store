"use client";

import { MouseEventHandler } from "react";
import { IProduct } from "@/common.types";
import Image from "next/image";
import IconButton from "../ui/IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "../ui/Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/useModal";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();
  const handleClick = () => {
    router.push(`/product/${product?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(product);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(product);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl relative bg-gray-100">
        <Image
          alt="image"
          src={product?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 hidden lg:block group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-500" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-500" />}
            />
          </div>
        </div>
      </div>
      {/** Description */}
      <div className="">
        <p className="text-lg font-semibold">{product?.name}</p>
        <p className="text-sm text-gray-500">{product?.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
