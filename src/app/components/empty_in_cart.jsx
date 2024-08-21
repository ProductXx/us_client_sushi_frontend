import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const EmptyInCart = () => {
  return (
    <div className="h-full flex flex-col item-center gap-10 justify-center">
      <div className=" self-center">
        <img src="/assets/empty_cart.gif" alt="cart" />
      </div>
      <div className=" self-center text-xl text-secondary flex flex-col gap-5">
        <p>There is no item in your cart.</p>
        <Link href={"/shop"} className="  primary-btn flex justify-between">
          <p>Let's get shop</p>
          <IconArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default EmptyInCart;
