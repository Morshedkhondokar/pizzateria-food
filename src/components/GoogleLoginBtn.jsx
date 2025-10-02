import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "./context/AuthContext";

const GoogleLoginBtn = () => {
  const {loginWithGoogle, setUser} = useContext(AuthContext)

  const handleLoginGoogle = ()=>{
    loginWithGoogle()
    .then(result => {
      const user = result.user;
      setUser(user)
    })
    .catch(error=>{
      console.log(error)
    })

  }

    return (
       <button
      onClick={handleLoginGoogle}
      className="w-full flex items-center justify-center gap-3 border-2 border-[#707070] rounded-full py-2 font-medium hover:bg-gray-100 transition duration-300 cursor-pointer"
    >
      <FcGoogle className="text-2xl" />
      Login with Google
    </button>
    );
};

export default GoogleLoginBtn;