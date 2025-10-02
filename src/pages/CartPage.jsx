import { useContext } from "react";
import CartContext from "../components/context/CartContext";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import Swal from "sweetalert2";

const CartPage = () => {
  const { cart, setCart, removeFromCart, decreaseQuantity, increaseQuantity } =
    useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePurchase = () => {
    Swal.fire({
      title: "Payment Successfully.",
      icon: "success",
      draggable: true,
    });
    setCart([])
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#F54748] mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-4xl flex justify-center items-center h-[200px] max-w-3xl ">Cart is empty 🛒</p>
      ) : (
        <div className="w-full  max-w-2xl bg-white px-3 p-3 rounded-lg shadow-md">
          {cart.map((item) => (
            <div
              key={item._id}
              className="relative flex justify-between items-center border-b py-3"
            >
              <div className="flex gap-2 md:gap-6">
                <div className="w-38 h-24  rounded-2xl overflow-hidden">
                  <img className="w-full h-full" src={item.image} alt="" />
                </div>
                <div>
                  <h3 className=" font-semibold">{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  {/*  */}
                  <div className="flex items-center gap-2.5 mt-2.5">
                    <FaMinusCircle
                      onClick={() => decreaseQuantity(item._id)}
                      className="text-xl text-[#F54748] cursor-pointer"
                    />
                    <p className="text-red-600">{item.quantity}</p>
                    <FaPlusCircle
                      onClick={() => increaseQuantity(item._id)}
                      className="text-xl text-[#F54748] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="absolute top-5 right-2 bg-red-500 text-white p-0.5 rounded-md cursor-pointer"
              >
                <IoIosCloseCircle />
              </button>
            </div>
          ))}

          {/* total */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePurchase}
              className="bg-[#F54748] py-2 px-3 text-xl hover:bg-[#ff6149] duration-300 rounded-full cursor-pointer text-white"
            >
              Purchase
            </button>

            <h3 className="text-xl font-bold">
              Total: <span className="text-[#F54748]">${total.toFixed(2)}</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
