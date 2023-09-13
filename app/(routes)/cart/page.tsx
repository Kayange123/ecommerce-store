"use client";

import CartItem from "@/components/Cart/CartItem";
import Container from "@/components/ui/Container";
import Summary from "@/components/ui/Summary";
import useCart from "@/hooks/useCart";
import { useState, useEffect } from "react";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black">Shopping cart</h2>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items?.length === 0 ? (
                <>
                  <p className="text-neutral-500">No items in the cart</p>
                </>
              ) : (
                <ul>
                  {cart.items?.map((item) => (
                    <CartItem item={item} key={item.id} />
                  ))}
                </ul>
              )}
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
