import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // input change handle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // submit handle
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // API or backend calls can be made here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#F54748] mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F54748] text-white py-2 rounded-full font-semibold hover:bg-[#d83e3e] transition duration-300"
          >
            Login
          </button>
        </form>

        {/* No account */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#F54748] font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
