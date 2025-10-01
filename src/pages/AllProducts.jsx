import {  Link, useLoaderData } from "react-router";
import FoodICard from "../components/FoodICard";

const AllProducts = () => {
  const foods = useLoaderData()
  console.log('All foods',foods)
  


 

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
      
         {
          foods.map(food =>  <FoodICard key={food._id} food={food}/>)
         }
        
      </div>
    </div>
  );
};

export default AllProducts;
