"use client";
import SingleItem from "../components/single_item";
import { useProductStore } from "../store/useProductStore";

const Cart = () => {
  const cartPorducts = useProductStore((state) => state.products);
  console.log(cartPorducts);
  return (
    <div className="p-5">
      <SingleItem />
    </div>
  );
};

export default Cart;
