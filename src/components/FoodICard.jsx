import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const FoodICard = ({food}) => {
    const {_id, name, price, quantity, description, image} = food;
    
    console.log('food card',name)

      //=========//--- handle delete operation
     const handleDelate = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // delete to the mongo db
        fetch(`http://localhost:5000/foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Food has been deleted.",
                icon: "success",
              });
              console.log(data)
            }
          });
      }
    });
  };


    return (
        <div
            key={_id}
            className="w-[300px] shadow-lg rounded-xl overflow-hidden bg-white"
          >
            {/* image section */}
            <div className="relative h-[200px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
              {/* quantity section */}
            </div>

            {/* content section */}
            <div className="px-5 pb-5">
              <h3 className="text-xl font-bold mt-3">{name}</h3>
              <p className="text-gray-600">{description}</p>
              <p className="text-[#F54748] ">Quantity: {quantity}</p>

              {/* price and rating */}
              <div className="flex justify-between items-center">
                <p className="text-[#F54748] text-xl font-bold mt-2">
                  Price: ${price}
                </p>
                {/* <p className="flex gap-2 items-center">
                  {rating} <FaStar className="text-amber-500 text-xl" />
                </p> */}
              </div>

              {/* view/edit button */}

              <div>
                <Link
                  to={`/product/${_id}`}
                  className="mt-3 inline-block px-3 py-1 bg-[#F54748] text-white rounded-md"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelate(_id)}
                  className="mt-3 cursor-pointer ml-2.5 inline-block px-3 py-1 bg-[#F54748] text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
    );
};

export default FoodICard;