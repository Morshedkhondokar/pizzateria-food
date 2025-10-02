import React, { useContext, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoClose, IoLogInOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router";
import CartContext from "./context/CartContext";
import AuthContext from "./context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const { user,logOut } = useContext(AuthContext);
  console.log("Current user:", user.photoURL);

  const profileImg =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const links = (
    <>
      <li className="font-semibold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/menu"}>Menu</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  const handleLogOutUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logOut your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "LogOut",
          text: "Your account logout Successfully.",
          icon: "success",
        });
        logOut()
      }
    });
  };

  return (
    <div className="relative">
      {/* 🔹 Top Navbar */}
      <div className="z-50 bg-white h-14 flex justify-between items-center px-3 md:px-5 shadow-md">
        <div className="flex items-center gap-1">
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

          <img className="w-10" src="images/logo.png" alt="" />
          <h2 className="font-bold text-2xl">Pizzateria</h2>
        </div>

        <ul className="hidden md:flex gap-5">{links}</ul>

        <div className="flex justify-center gap-2.5 items-center">
          <div className="relative  ">
            <Link to={"/cart"}>
              <FaBasketShopping className="text-2xl " />
              {cart.length !== 0 ? (
                <p className="absolute -top-3 -right-1 size-4 flex justify-center items-center rounded-full text-xs text-white bg-red-500">
                  {cart.length}
                </p>
              ) : (
                ""
              )}
            </Link>
          </div>

          {/* login and profile  */}
          <div>
            {user ? (
              <div
                onClick={handleLogOutUser}
                className="w-8 h-8 bg-amber-600 rounded-full overflow-hidden"
              >
                <img src={user.photoURL || profileImg} alt="" />
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="md:py-2 p-2 md:px-3 text-xs md:text-xl bg-[#F54748] hover:bg-[#ff6149] duration-300 rounded-full cursor-pointer text-white flex items-center gap-1">
                  <IoLogInOutline className="text-xl" />
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Dropdown */}
      <div
        className={`
          absolute left-0 top-14 w-full bg-gray-100 shadow-md md:hidden
          overflow-hidden transition-all duration-700 ease-in-out z-10
          ${
            isMenuOpen
              ? "max-h-60 opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          }
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
