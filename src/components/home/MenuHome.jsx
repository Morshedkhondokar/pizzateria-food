import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import MenuCard from "./MenuCard";

const MenuHome = () => {
  const [activeCategory, setActiveCategory] = useState("pizza");

  const categories = [
    { name: "burger", img: "images/burger.png" },
    { name: "pizza", img: "images/pizza.png" },
    { name: "cupcake", img: "images/cupcake.png" },
    { name: "ramen", img: "images/ramen.png" },
    { name: "iceCream", img: "images/IceCream.png" },
  ];

  return (
    <div className="my-24 mx-3">
      {/* Title */}
      <div className="text-center mb-16">
        <p className="font-bold  text-[#F54748]">Our Selection</p>
        <h2 className="font-bold text-2xl md:text-[38px]">
          A Menu That Will Always
        </h2>
        <h2 className="font-bold text-3xl md:text-[38px]">
          Capture Your Heart
        </h2>
      </div>

      {/* Menu Category */}
      <div className="relative ">
        {/* scrollable buttons */}
        <div
          className="flex gap-5 items-center 
          overflow-x-auto md:overflow-x-visible   
          flex-nowrap md:flex-wrap            
          md:justify-center px-2"
          
        >
          {categories.map((cate) => (
            <div key={cate.name} className="w-38  h-14 my-2.5 flex-shrink-0">
              <button
                onClick={() => setActiveCategory(cate.name)}
                className={`w-38 h-14 text-[15px] md:text-xl cursor-pointer shadow-md font-semibold mb-7 rounded-full flex justify-center items-center gap-2 transition-colors duration-300
            ${
              activeCategory === cate.name
                ? "bg-[#F54748] text-white"
                : "bg-white text-black"
            }`}
              >
                <img src={cate.img} alt={cate.name} className="w-6 h-6" />
                {cate.name}
              </button>
            </div>
          ))}
        </div>

        {/* fixed arrow */}
        <FaArrowRight className="absolute md:hidden -top-1/10  right-2 text-[#F54748] text-xl" />
      </div>
      {/* Pizza card */}
      <MenuCard activeCategory={activeCategory}/>
    </div>
  );
};

export default MenuHome;
