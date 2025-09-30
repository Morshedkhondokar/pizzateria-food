import { FcGoogle } from "react-icons/fc";

const GoogleLoginBtn = () => {
    return (
       <button
      onClick={() => console.log("Google Login Clicked")}
      className="w-full flex items-center justify-center gap-3 border-2 border-[#707070] rounded-full py-2 font-medium hover:bg-gray-100 transition duration-300"
    >
      <FcGoogle className="text-2xl" />
      Login with Google
    </button>
    );
};

export default GoogleLoginBtn;