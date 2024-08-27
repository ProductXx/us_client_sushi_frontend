import React from "react";

const PKGLoading = () => {
  return (
    <div className="h-[50vh] flex justify-center items-center flex-col">
      <img className="object-cover w-[300px] h-[300px]" src="/assets/load_pack.gif" alt="" />
      <p>Loading Item Please Wait...</p>
    </div>
  );
};

export default PKGLoading;
