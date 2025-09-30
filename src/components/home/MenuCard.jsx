import { useEffect, useState } from "react";
import { FaMinusCircle, FaPlus, FaPlusCircle, FaStar } from "react-icons/fa";


const MenuCard = () => {
    const [pizzas, setPizzas] = useState([]);
    const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    fetch("/pizzas.json")
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="w-[300px] shadow-lg rounded-xl overflow-hidden">
          <div className="relative h-[200px]">
            <img src={pizza.img} alt={pizza.name} className="w-full h-full" />
            {/* quantity */}
            <div className="absolute p-1 bottom-2 right-1 bg-white rounded-2xl">
              
              {
                quantity !== 0 ? <div className="flex justify-center items-center gap-2.5">
                <FaMinusCircle onClick={()=> setQuantity((prev) => prev - 1)} className="text-xl text-[#F54748] cursor-pointer"/>
                {quantity}
                <FaPlusCircle onClick={()=> setQuantity((prev) => prev + 1)} className="text-xl text-[#F54748] cursor-pointer"/>
              </div> : <FaPlus onClick={()=> setQuantity((prev) => prev + 1)} className="text-xl text-[#F54748] cursor-pointer"/>
              }
            </div>
          </div>
          {/* contentt */}
          <div className="px-5 pb-5 ">
            <h3 className="text-xl font-bold mt-3">{pizza.name}</h3>
          <p className="text-gray-600">{pizza.description}</p>
          {/* price and rating */}
         <div className="flex justify-between items-center">
           <p className="text-[#F54748] text-xl font-bold mt-2">${pizza.price}</p>
           <p className="flex gap-2 items-center">{pizza.rating} <FaStar className="text-amber-500 text-xl"/></p>
         </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;