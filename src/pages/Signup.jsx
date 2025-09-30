import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // input change handle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // submit handle
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // API or backend calls can be made here 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-20">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#F54748] mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border-2 border-[#707070] rounded-md px-4 py-2 focus:outline-none focus:border-[#F54748]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border-2 border-[#707070] rounded-md px-4 py-2 focus:outline-none focus:border-[#F54748]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border-2 border-[#707070] rounded-md px-4 py-2 focus:outline-none focus:border-[#F54748]"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full border-2 border-[#707070] rounded-md px-4 py-2 focus:outline-none focus:border-[#F54748]"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F54748] text-white py-2 rounded-full font-semibold hover:bg-[#d83e3e] transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Already have account */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#F54748] font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
