import React from "react";
import { usePackages } from "../api/queries/product_queries";
import PKGLoading from "../utils/pack_loading";

const PackageItem = () => {
  const { data: packages, error, isLoading } = usePackages();
  console.log(packages?.data);

  if (isLoading) return <PKGLoading />;
  if (error) return <div>Error: {error.message}</div>;
  if (!packages || packages.data.length === 0)
    return <div>No products found.</div>;
  return (
    <div className="flex flex-col gap-5">
      {packages.data?.map((el) => {
        return (
          <div
            className="h-[500px] w-full border rounded shadow-lg p-5 flex flex-col gap-5"
            key={el._id}
          >
            <div className="w-full flex">
              <div className="w-1/2 text-2xl">
                <div>{el.name}</div>
                <p className="text-sm text-gray-500">blahblah</p>
                <p>${el.price}</p>
              </div>
              <div className="w-1/2 ">
                <img
                  className=" rounded w-full h-full object-cover"
                  src="/assets/package.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h1 className="text-lg text-gray-700 hero-font mb-5">
                What are they include
              </h1>
              {el.include?.map((item) => {
                return (
                  <div className="flex justify-start " key={item.name}>
                    <div className="w-2/3 text-xl flex flex-col justify-start gap-3">
                      <div>{item.name}</div>
                      <div className="text-gray-600 text-sm">{item.description}</div>
                    </div>
                    <div className="w-1/3 ">
                      <img
                        className="w-full h-full object-cover"
                        src="/assets/pack.png"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PackageItem;
