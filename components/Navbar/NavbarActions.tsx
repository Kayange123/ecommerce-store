"use client";

import { useState, useEffect } from "react";
import Button from "../ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="item-center text-black rounded-full py-2 px-4"
      >
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-semibold text-white ml-2">
          {cart?.items?.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
