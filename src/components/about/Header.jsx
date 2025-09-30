import React from "react";

const Header = () => {
  return (
    <div className="my-24">
      <div className="text-center mb-16">
        <p className="font-bold  text-[#F54748]">About us</p>
        <h2 className="font-bold text-2xl md:text-[38px]">
          Let's delve deeper into
        </h2>
        <h2 className="font-bold text-3xl md:text-[38px]">
          understanding Pizzateria
        </h2>
      </div>
      <p className="max-w-4xl px-1 mx-auto text-center font-semibold text-[#787878]">
        Pizzateria is a comfortable and friendly place, offering a wide
        selection of delicious pizzas served with a variety of fresh toppings.
        With a warm atmosphere and attractive decoration, Pizzateria is a
        suitable place to gather with friends and family while enjoying
        delicious dishes...
      </p>

      <div className="flex justify-center items-center mt-12 mx-1">
        <img src="images/About_pizza.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
