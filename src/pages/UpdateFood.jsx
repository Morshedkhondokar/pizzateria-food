// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const { _id, name, price, quantity, category, description, image } =
    useLoaderData();

  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateFood = Object.fromEntries(formData.entries());
    // console.log(updateFood);

    //  updated food data to mongodb
    fetch(`http://localhost:5000/foods/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          let timerInterval;
          Swal.fire({
            title: "Update Food",
            html: "Food is updating.",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#F54748] mb-6">
          Update Product
        </h2>
        <form onSubmit={handleUpdateFood} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter product name"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              placeholder="Enter price"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
              required
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block mb-1 font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              defaultValue={quantity}
              placeholder="Enter quantity"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
              required
            />
          </div>

          {/* category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <input
              type="text"
              name="quantity"
              defaultValue={category}
              placeholder="Enter Category"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              placeholder="Enter description"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={image}
              placeholder="Enter image url"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F54748] text-white py-2 rounded-full cursor-pointer"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
