const Delivery = () => {
  return (
    <div className="my-24 mx-5">
      {/* Tietle */}
      <div className="text-center mb-16">
        <p className="font-bold  text-[#F54748]">Our Offerings</p>
        <h2 className="font-bold text-3xl md:text-[38px]">
          Your Preferred Food{" "}
        </h2>
        <h2 className="font-bold text-3xl md:text-[38px]">
          Delivery Companion
        </h2>
      </div>

      {/*delivery card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
         {/*delivery card 1 */}
        <div className="w-[340px] h-[370px] rounded-2xl shadow-xl p-4 text-center duration-300 hover:scale-105 border-transparent border-2 hover:border-[#ff4949]">
          <div className="w-[180px] h-[200px]  mx-auto">
            <img src="images/delivery1.png" alt="" />
          </div>
          <h4 className="font-bold text-xl my-3">Convenient Ordering</h4>
          <p className="font-medium text-[#787878]">Ordering food requires just a few simple steps</p>
        </div>
         {/*delivery card 2 */}
        <div className="w-[340px] h-[370px] rounded-2xl shadow-xl p-4 text-center duration-300 hover:scale-105 border-transparent border-2 hover:border-[#ff4949]">
          <div className="w-[180px] h-[200px]  mx-auto">
            <img src="images/delivery2.png" alt="" />
          </div>
          <h4 className="font-bold text-xl my-3">Quickest Delivery</h4>
          <p className="font-medium text-[#787878]">Consistently Timely Delivery, Even Faster</p>
        </div>
         {/*delivery card 3 */}
        <div className="w-[340px] h-[370px] rounded-2xl shadow-xl p-4 text-center duration-300 hover:scale-105 border-transparent border-2 hover:border-[#ff4949]">
          <div className="w-[180px] h-[200px]  mx-auto">
            <img src="images/delivery3.png" alt="" />
          </div>
          <h4 className="font-bold text-xl my-3">Superior Quality</h4>
          <p className="font-medium text-[#787878]">For us, quality is paramount, not just speed</p>
        </div>

      </div>
    </div>
  );
};

export default Delivery;
