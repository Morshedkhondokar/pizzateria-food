import { useState, useContext, useEffect } from "react";
import { FaMinusCircle, FaPlus, FaPlusCircle, FaStar } from "react-icons/fa";
import CartContext from "../context/CartContext";
import { Link } from "react-router";

const MenuCard = () => {
  const [pizzas, setPizzas] = useState([]);
  const { cart, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

 
    useEffect(()=>{
      fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setPizzas(data));
    },[pizzas])
 

  // helper: find pizza quantity in cart
  const getQuantity = (id) => {
    const item = cart.find((c) => c._id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
      {pizzas.map((pizza) => (
        <div
          key={pizza._id}
          className="w-[300px] shadow-lg rounded-xl overflow-hidden"
        >
          <div className="relative h-[200px]">
            <img src={pizza.image} alt={pizza.name} className="w-full h-full" />

            {/* quantity control */}
            <div className="absolute p-1 bottom-2 right-1 bg-white rounded-2xl">
              {getQuantity(pizza._id) > 0 ? (
                <div className="flex justify-center items-center gap-2.5">
                  <FaMinusCircle
                    onClick={() => decreaseQuantity(pizza._id)}
                    className="text-xl text-[#F54748] cursor-pointer"
                  />
                  {getQuantity(pizza._id)}
                  <FaPlusCircle
                    onClick={() => increaseQuantity(pizza._id)}
                    className="text-xl text-[#F54748] cursor-pointer"
                  />
                </div>
              ) : (
                <FaPlus
                  onClick={() => addToCart(pizza)}
                  className="text-xl text-[#F54748] cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* content */}
          <div className="px-5 pb-5 ">
            <h3 className="text-xl font-bold mt-3">{pizza.name}</h3>
            <p className="text-gray-600">{pizza.description}</p>

            {/* price and rating */}
            <div className="flex justify-between items-center">
              <p className="text-[#F54748] text-xl font-bold mt-2">
                ${pizza.price}
              </p>
              <p className="flex gap-2 items-center">
                {pizza.rating} <FaStar className="text-amber-500 text-xl" />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
