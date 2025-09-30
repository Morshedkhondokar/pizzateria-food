import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="my-20 flex flex-col md:flex-row justify-around gap-2 lg:gap-10  ">
      {/* Left Info Card */}
      <div className="lg:w-[780px] h-[380px] flex flex-col justify-center items-center bg-[#F54748] text-white rounded-2xl p-8">
       <div className=" space-y-6">
         <h2 className="text-5xl font-bold">Info</h2>

        <div className="flex items-center gap-8">
          <FaEnvelope className="text-3xl"/>
          <p>pizzateria@gmail.com</p>
        </div>

        <div className="flex items-center gap-8">
          <FaPhoneAlt className="text-3xl"/>
          <p>+62 856 1589 2983</p>
        </div>

        <div className="flex items-center gap-8">
          <FaMapMarkerAlt className="text-3xl"/>
          <p>Bandung, West Java</p>
        </div>
       </div>
      </div>

      {/* Right Form */}
      <div className="mt-14 w-full">
        <h2 className="text-5xl font-bold mb-2">Get in Touch</h2>
        <p className="text-gray-600 mb-6">Feel free to drop us a line below</p>

        <form className="space-y-5">
          {/* Name + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-2 border-[#707070]  rounded-md px-4 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-2 border-[#707070]  rounded-md px-4 py-2"
            />
          </div>

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Typing your message here..."
            className="w-full border-2 border-[#707070] rounded-md px-4 py-2"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#F54748] text-white px-6 py-2 rounded-full font-semibold"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
