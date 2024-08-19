"use client";

import { IconShoppingCartFilled } from "@tabler/icons-react";
import { useProductStore } from "../store/useProductStore";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CartIcon = () => {
  const cartProducts = useProductStore((state) => state.products);
  const hasProducts = cartProducts?.length > 0;

  return (
    <AnimatePresence>
      {hasProducts && (
        <Link href={"/cart"}>
          <motion.div
            className="fixed right-10 bottom-7 z-50 p-4 flex items-center justify-center text-white bg-indigo-600 rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="relative"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                repeat: 1,
                repeatType: "reverse",
              }}
            >
              <span className=" -top-[90%] -right-[90%] absolute bg-red-600 w-6 h-6 flex items-center justify-center rounded-full">
                {cartProducts?.length}
              </span>
              <IconShoppingCartFilled />
            </motion.div>
          </motion.div>
        </Link>
      )}
    </AnimatePresence>
  );
};

export default CartIcon;
