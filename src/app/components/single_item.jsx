import { useProducts } from "@/app/api/queries/product_queries";
import React from "react";
import ProductCard from "../utils/product_card";
import PKGLoading from "../utils/pack_loading";

const SingleItem = () => {
  const { data: products, error, isLoading } = useProducts();

  if (isLoading) return <PKGLoading />;
  if (error) return <div>Error: {error.message}</div>;
  if (!products || products.length === 0) return <div>No products found.</div>;

  return (
    <div className="w-full h-full flex flex-col gap-5">
      {products.data?.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
};

export default SingleItem;
