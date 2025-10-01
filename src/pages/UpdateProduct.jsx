import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    // এখন pizzas.json থেকে data নিচ্ছি (public ফোল্ডার থেকে)
    fetch(`/pizzas.json`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id == id);
        if (found) setProduct(found);
      });

    // ❌ পরে backend connect হলে এইটা ব্যবহার করবে
    /*
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    */
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ❌ এখন backend নাই তাই comment করে রাখো
    /*
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => navigate(`/allProducts`));
    */

    // ✅ UI check করার জন্য শুধু navigate করছি
    navigate("/allProducts");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#F54748] mb-6">
          Update Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name || ""}
              onChange={handleChange}
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
              value={product.price || ""}
              onChange={handleChange}
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
              value={product.quantity || ""}
              onChange={handleChange}
              placeholder="Enter quantity"
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
              value={product.description || ""}
              onChange={handleChange}
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
              value={product.img || ""}
              onChange={handleChange}
              placeholder="Enter image url"
              className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F54748] text-white py-2 rounded-full"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
