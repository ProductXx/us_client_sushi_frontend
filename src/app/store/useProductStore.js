// src/store/useProductStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProductStore = create(
  persist(
    (set) => ({
      products: [],
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, product],
        })),
      removeProduct: (productId) =>
        set((state) => ({
          products: state.products.filter(
            (product) => product._id !== productId
          ),
        })),
      updateProduct: (updatedProduct) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          ),
        })),
    }),
    { name: "product-storage" } // unique name for storage key
  )
);
