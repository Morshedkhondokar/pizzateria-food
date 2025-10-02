import { use } from "react";
import AuthContext from "../components/context/AuthContext";
import GoogleLoginBtn from "../components/GoogleLoginBtn";

const Signup = () => {
  const { createUser,setUser } = use(AuthContext);

  // submit handle
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    // console.log(email,password);

    if (password.length < 6) {
      return alert("Your password must be at least 6 characters long");
    }

    // create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-20">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 mx-3">
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
              placeholder="Confirm your password"
              className="w-full border-2 border-[#707070] rounded-md px-4 py-2 focus:outline-none focus:border-[#F54748]"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#F54748] text-white py-2 rounded-full font-semibold hover:bg-[#d83e3e] transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Already have account */}
        <p className="text-center text-gray-600 my-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#F54748] font-medium hover:underline"
          >
            Login
          </a>
        </p>
        {/*  login with google */}
        <GoogleLoginBtn />
      </div>
    </div>
  );
};

export default Signup;
