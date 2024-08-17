import HeroSection from "@/components/hero_section";
import MenuSection from "@/components/menu_section";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MenuSection />
    </div>
  );
};

export default App;
