import {
  IconArrowRight,
  IconArrowUpRight,
  IconMenu,
  IconPlayerPlay,
} from "@tabler/icons-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full md:p-10 p-5 gap-10">
      <div className="md:h-[60vh] gap-5 md:w-full flex md:flex-row flex-col">
        {/* left section top  */}
        <div className="md:w-3/5 flex flex-col gap-5 justify-around md:px-5">
          <div className="w-full flex justify-between">
            <IconMenu />
            <button className="primary-btn">Contect</button>
          </div>
          <div className="hero-font text-secondary text-[50px] md:text-[100px]">
            Discover the Ultimate Sushi Experience!
          </div>
          <div className="flex md:justify-end md:gap-10 gap-5">
            <button className="primary-btn flex gap-2 md:gap-5">
              <IconArrowRight />
              Check menu
            </button>
            <button className="secondary-btn flex gap-2 md:gap-5">
              <IconPlayerPlay />
              How to order
            </button>
          </div>
        </div>
        {/* right section top  */}
        <div className="md:w-2/5 shadow-xl relative rounded-2xl overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="/assets/hero_section.jpg"
            alt="heroimg"
          />
          <div className=" w-full bg-third py-3 md:py-5 text-secondary px-5 md:px-10 flex justify-between items-center absolute bottom-2 md:bottom-5">
            <span className=" text-sm md:text-lg">
              Fresh ingredients sauced locally <br /> and prepard mindfully
            </span>
            <div className="p-3 transition duration-150 rounded-full bg-white text-black">
              <IconArrowUpRight />
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-[40vh] grid grid-cols-2 md:grid-cols-6 gap-5">
        <div className="p-5 col-span-2 text-secondary flex flex-col justify-around gap-5">
          <span className="text-2xl">
            Purest Sushi Experience <br />
            Focusing on Premium Quality <br />
            Ingraedients
          </span>
          <div className="flex justify-start gap-10">
            <button className="secondary-btn">Menu</button>
            <button className="secondary-btn">Reservation</button>
          </div>
        </div>
        <div className=" overflow-hidden relative shadow-lg rounded-lg col-span-2 w-full">
          <div className=" absolute right-5 bottom-5 text-black">
            <div className="text-sm items-center md:text-base flex cursor-pointer hover:bg-secondary hover:text-white px-5 py-2 transition duration-150 rounded-full bg-white text-black">
              <IconArrowUpRight />
              Our Premium Taste
            </div>
          </div>
          <img
            className=" object-cover w-full h-full"
            src="/assets/semi_hero1.jpg"
            alt="heroimg"
          />
        </div>
        <div className=" overflow-hidden relative shadow-lg rounded-lg col-span-2 w-full">
          <div className=" absolute left-5 top-5 md:top-20 text-white">
            Feel the taste of Japanese foods
          </div>
          <img
            className=" object-cover w-full h-full"
            src="/assets/semi_hero2.jpg"
            alt="heroimg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
