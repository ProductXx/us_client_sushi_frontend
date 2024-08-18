import { useProducts } from "@/app/api/queries/product_queries";
import { IconPlus } from "@tabler/icons-react";
import React from "react";

const SingleItem = () => {
  const { data: products, error, isLoading } = useProducts();

  // console.log(products.data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!products || products.length === 0) return <div>No products found.</div>;

  return (
    <div className="w-full h-full flex flex-col gap-5">
      {products.data?.map((product) => (
        <div className="border transition duration-150 hover:text-white shadow-lg w-full py-5 px-7 rounded-2xl h-[200px] bg-gradient-to-tr to-indigo-100 from-slate-100 hover:from-secondary hover:to-zinc-900 flex justify-around items-center">
          {/* card left side  */}
          <div className=" w-1/3 flex flex-col justify-between gap-3 items-start">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <h1 className="text-2xl">{product.name}</h1>
                <span className="text-sm text-gray-500">
                  {product.description}
                </span>
              </div>
              <span className="text-2xl">$ {product.price}</span>
            </div>
            <button className="bg-black/80 shadow-lg rounded-full text-white p-2">
              <IconPlus />
            </button>
          </div>
          <div className=" rounded-2xl w-2/3 h-full overflow-hidden shadow-xl">
            <img
              className=" object-cover w-full h-full"
              src="https://plus.unsplash.com/premium_photo-1712949154611-6fd79879f884?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleItem;
