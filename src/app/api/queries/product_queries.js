import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/product_service";

export const useProducts = (options = {}) => {
  return useQuery({
    queryKey: ["products"], // Use an object to pass the key and function
    queryFn: getProducts,
    ...options,
  });
};
