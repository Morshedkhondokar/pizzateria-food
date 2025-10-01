import { useState } from "react";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    image: "",
  });

  console.log(product)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => navigate("/"));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#F54748] mb-6">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]" required />
          <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]" required />
          <input type="number" name="quantity" value={product.quantity} onChange={handleChange} placeholder="Quantity" className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]" required />
          <input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Description" className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]" />
          <input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" className="w-full border-2 border-gray-400 px-4 py-2 rounded-md focus:border-[#F54748]" />
          <button type="submit" className="w-full bg-[#F54748] text-white py-2 rounded-full">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
