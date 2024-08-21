"use client";
import React from "react";
import MenuSection from "../components/menu_section";
import CartIcon from "../components/cart_icon";
import NavBar from "../components/nav_bar";

const Shop = () => {
  return (
    <div className="">
      <NavBar padding={"p-5"} />
      <MenuSection />
      <CartIcon />
    </div>
  );
};

export default Shop;
