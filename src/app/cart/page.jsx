"use client";

import EmptyInCart from "../components/empty_in_cart";
import NavBar from "../components/nav_bar";
import { useProductStore } from "../store/useProductStore";
import ProductCard from "../utils/product_card";
import { AnimatePresence, motion } from "framer-motion";

const Cart = () => {
  const cartProducts = useProductStore((state) => state.products);

  return (
    <div className="flex flex-col ">
      <NavBar padding={"p-5"} />
      {cartProducts?.length === 0 ? (
        <EmptyInCart />
      ) : (
        <div className="p-5 flex flex-col gap-5">
          <AnimatePresence>
            {cartProducts?.map((product) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Cart;
