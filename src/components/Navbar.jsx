import React, { useState } from "react";
import { IoClose, IoLogInOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li className="font-semibold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/about"}>Menu</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/menu"}>About</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="relative">
      {/* 🔹 Top Navbar */}
      <div className="z-50 bg-white h-14 flex justify-between items-center px-3 md:px-5 shadow-md">
        <div className="flex items-center gap-1">
          <img className="w-10" src="images/logo.png" alt="" />
          <h2 className="font-bold text-2xl">Pizzateria</h2>
        </div>

        <ul className="hidden md:flex gap-5">{links}</ul>

        <button className="py-2 px-3 bg-[#F54748] hover:bg-[#ff6149] duration-300 rounded-full cursor-pointer text-white hidden md:flex items-center gap-1">
          <IoLogInOutline className="text-xl" />
          Login
        </button>

        {/* Menu button (small device) */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <IoClose
              className="text-2xl"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <TiThMenu
              className="text-2xl"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* 🔹 Bottom Dropdown */}
      <div
        className={`
          absolute left-0 top-14 w-full bg-[#ede6e6] shadow-md md:hidden
          overflow-hidden transition-all duration-700 ease-in-out
          ${isMenuOpen ? "max-h-60 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <ul className="flex flex-col gap-4 justify-center items-center py-4">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
