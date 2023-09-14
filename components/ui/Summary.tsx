"use client";
import React, { useEffect } from "react";
import Currency from "./Currency";
import Button from "./button";
import useCart from "@/hooks/useCart";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { url } from "@/actions/actions";
import toast from "react-hot-toast";

const Summary = () => {
  const items = useCart((state) => state.items);
  const searchParams = useSearchParams();
  const removeAll = useCart((state) => state.removeAllItems);
  const totalPrice = items?.reduce(
    (total, item) => total + Number(item?.price),
    0
  );
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment successful processed");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Payment process cancelled");
    }
  }, [searchParams, removeAll]);
  const onCheckout = async () => {
    const res = await axios.post(`${url}/checkout`, {
      productIds: items?.map((item) => item?.id),
    });
    toast.loading("Redirecting to stripe...");
    window.location = res.data.url;
  };
  return (
    <div className="mt-16 rounded-md bg-gray-50 px-4 py-6 lg:col-span-5 lg:mt-0 lg:p6">
      <h2 className="text-lg text-gray-900 font-semibold">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t pt-4 border-gray-200">
          <p className="text-base font-medium text-gray-900">Total:</p>
          <Currency value={totalPrice as number} />
        </div>
        <div className="flex items-center justify-between border-t pt-4 border-gray-200">
          <p className="text-base font-medium text-gray-900">
            Number of products:
          </p>
          <p>{items?.length}</p>
        </div>
      </div>
      <Button
        disabled={items?.length === 0}
        onClick={onCheckout}
        className="w-full mt-8 text-center"
      >
        checkout
      </Button>
    </div>
  );
};

export default Summary;
