import React from "react";
import HeroSection from "./components/hero_section";
import MenuSection from "./components/menu_section";
import CartIcon from "./components/cart_icon";

const App = () => {
  return (
    <div className="flex flex-col relative">
      <CartIcon />
      <HeroSection />
      <MenuSection />
    </div>
  );
};

export default App;
