import { useQuery } from "@tanstack/react-query";
import { getPackages, getProducts } from "../services/product_service";

export const useProducts = (options = {}) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    ...options,
  });
};
export const usePackages = (options = {}) => {
  return useQuery({
    queryKey: ["packages"],
    queryFn: getPackages,
    ...options,
  });
};
