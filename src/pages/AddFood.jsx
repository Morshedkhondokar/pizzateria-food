import Swal from "sweetalert2";

const AddFood = () => {
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const newFood = Object.fromEntries(fromData.entries());
    console.log(newFood);

    // send Food data to server
    fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Food added Successfully.",
            icon: "success",
            draggable: true,
          });

          // form.reset()
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg mx-2">
        <h2 className="text-3xl font-bold text-center text-[#F54748] mb-6">
          Add Food
        </h2>
        <form onSubmit={handleAddFood} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter product name"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block mb-1 font-medium text-gray-700"
            >
              Price
            </label>
            <input
              id="price"
              type="text"
              name="price"
              placeholder="Enter price"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
              required
            />
          </div>

          {/* Quantity */}
          <div>
            <label
              htmlFor="quantity"
              className="block mb-1 font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
              required
            />
          </div>

          {/* category */}
          <div>
            <label
              htmlFor="description"
              className="block mb-1 font-medium text-gray-700"
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              name="category"
              placeholder="Enter category"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block mb-1 font-medium text-gray-700"
            >
              Description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              placeholder="Enter description"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="image"
              className="block mb-1 font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              id="image"
              type="text"
              name="image"
              placeholder="Enter image URL"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#F54748] text-white py-2 rounded-full font-semibold"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
