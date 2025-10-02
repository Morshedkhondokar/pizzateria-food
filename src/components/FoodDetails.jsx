import { useLoaderData, Link } from "react-router";

const FoodDetails = () => {
  const food = useLoaderData();  
  
  if (!food) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-4">
        {/* image section */}
            <div className="relative h-[200px]">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover"
              />
             
            </div>

        <h2 className="text-3xl font-bold text-[#F54748]">{food.name}</h2>
        <p>{food.description}</p>
        <p className="text-[#F54748] font-medium">Price: ${food.price}</p>
        <p className="text-[#F54748] font-medium">Quantity: {food.quantity}</p>
        <div className="flex space-x-4">
          <button className="flex-1 bg-red-500 text-white py-2 rounded-md">Delete</button>
          <Link 
            to={`/update/${food._id}`} 
            className="flex-1 bg-[#F54748] text-white py-2 rounded-md text-center"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
