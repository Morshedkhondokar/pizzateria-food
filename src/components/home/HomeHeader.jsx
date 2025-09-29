import React from 'react';

const HomeHeader = () => {
    return (
        <div className='relative -z-2 w-full h-screen bg-[url("images/hero.png")] bg-cover bg-center bg-no-repeat'>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative  flex flex-col items-center justify-center h-full text-white">
        <div className="w-34 h-8 md:w-48 md:h-14 text-xs md:text-[17px] bg-[#FDD6D6] text-[#F54748] font-semibold mb-7 rounded-full flex justify-center items-center">
          Beyond Speedy 🍕
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tec text-center mb-5 md:mb-10">
          Ensure Your <span className="text-[#F54748]">Food</span> is <br />{" "}
          Delivered with Speed
        </h1>
        <p className="max-w-[450px] mx-3 md:mx-0 text-center mb-6 md:mb-12">
          Our mission is to satisfy your appetite with delectable dishes,
          delivered swiftly and at no extra cost
        </p>

        <button className=" py-2 px-5 bg-[#F54748] rounded-full cursor-pointer text-white ">Get Started</button>
      </div>
    </div>
    );
};

export default HomeHeader;