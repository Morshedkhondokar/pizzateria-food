import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaPlus, FaMinusCircle, FaPlusCircle, FaStar } from "react-icons/fa";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products (এখন json থেকে, পরে backend এ হবে)
    fetch("pizzas.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#F54748] mb-6">All Products</h2>

      <Link
        to="/add"
        className="mb-6 px-4 py-2 bg-[#F54748] text-white rounded-full"
      >
        Add New Product
      </Link>

      {/* grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((pizza) => (
          <div
            key={pizza.id}
            className="w-[300px] shadow-lg rounded-xl overflow-hidden bg-white"
          >
            {/* image section */}
            <div className="relative h-[200px]">
              <img
                src={pizza.img}
                alt={pizza.name}
                className="w-full h-full object-cover"
              />
              {/* quantity section */}
            </div>
            
            {/* content section */}
            <div className="px-5 pb-5">
              <h3 className="text-xl font-bold mt-3">{pizza.name}</h3>
              <p className="text-gray-600">{pizza.description}</p>
              <p className="text-[#F54748] ">Quantity: {pizza.quantity}</p>

              {/* price and rating */}
              <div className="flex justify-between items-center">
                <p className="text-[#F54748] text-xl font-bold mt-2">
                 Price: ${pizza.price}
                </p>
                <p className="flex gap-2 items-center">
                  {pizza.rating} <FaStar className="text-amber-500 text-xl" />
                </p>
                
              </div>

              {/* view/edit button */}
              
                <div>
                    <Link
                to={`/product/${pizza.id}`}
                className="mt-3 inline-block px-3 py-1 bg-[#F54748] text-white rounded-md"
              >
                 Edit
              </Link>

              <button className="mt-3 cursor-pointer ml-2.5 inline-block px-3 py-1 bg-[#F54748] text-white rounded-md">Delete</button>
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
