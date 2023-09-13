"use client";
import { IProduct } from "@/common.types";
import Image from "next/image";
import React from "react";
import IconButton from "../ui/IconButton";
import { X } from "lucide-react";
import useCart from "@/hooks/useCart";

interface CartItemProps {
  item: IProduct;
}
const CartItem = ({ item }: CartItemProps) => {
  const cart = useCart();
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          alt="Image"
          src={item.images?.[0]?.url}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute top-0 right-0">
          <IconButton
            icon={<X size={15} />}
            onClick={() => cart.removeItem(item?.id)}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg text-black font-semibold">{item?.name}</p>
          </div>
          <div className="flex mt-1 text-sm">
            <p className="text-gray-500">{item?.size?.name}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
