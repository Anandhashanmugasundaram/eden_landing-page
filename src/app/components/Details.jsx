import React from "react";

function Details() {
  return (
    <>
      <div className="flex justify-center w-[95vw] items-center ml-3 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#17414F] p-4 sm:p-6 md:p-8 lg:p-12 mt-10 sm:mt-16 lg:mt-20 w-full max-w-screen-xl rounded-3xl">
          <div className="flex flex-col justify-center items-center  mt-3 sm:-mt-20 lg:-mt-24">
            <img className="h-20 sm:h-24 lg:h-28" src="/item4.png" alt="" />
            <div className="flex flex-col justify-center items-center mt-3 w-full sm:w-48 lg:w-56">
              <p className="text-white font-semibold text-lg sm:text-xl lg:text-2xl text-center">
                Clinically Studied
              </p>
              <p className="text-white font-semibold text-center text-sm sm:text-base lg:text-sm mt-3">
                All products that we offer have undergone lab and safety tests
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center   mt-1 sm:-mt-20 lg:-mt-24">
            <img className="h-20 sm:h-24 lg:h-28" src="/item1.png" alt="" />
            <div className="flex flex-col justify-center items-center  mt-3 w-full sm:w-48 lg:w-56">
              <p className="text-white font-semibold text-lg sm:text-xl lg:text-2xl text-center">
                Vegetarian Friendly
              </p>
              <p className="text-white font-semibold text-center text-sm sm:text-base lg:text-sm mt-3">
                We have a wide selection of vegetarian<br />products to meet your needs
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-1 sm:mt-10 lg:-mt-24">
            <img className="h-20 sm:h-24 lg:h-28" src="/flag.png" alt="" />
            <div className="flex flex-col justify-center items-center mt-3 w-full sm:w-48 lg:w-56">
              <p className="text-white font-semibold text-lg sm:text-xl lg:text-2xl text-center">
                Made in India
              </p>
              <p className="text-white font-semibold text-center text-sm sm:text-base lg:text-sm mt-3">
                Shop local and explore health products made right here in India
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-6 sm:mt-10 lg:mt-11">
            <img className="h-20 sm:h-24 lg:h-28" src="/item2.png" alt="" />
            <div className="flex flex-col justify-center items-center mt-3 w-full sm:w-48 lg:w-56">
              <p className="text-white font-semibold text-lg sm:text-xl lg:text-2xl text-center">
                Free shipping
              </p>
              <p className="text-white font-semibold text-center text-sm sm:text-base lg:text-sm mt-3">
                We deliver to your door with no shipping costs on your orders
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-6 sm:mt-10 lg:mt-11">
            <img className="h-20 sm:h-24 lg:h-28" src="/item3.png" alt="" />
            <div className="flex flex-col justify-center items-center mt-3 w-full sm:w-48 lg:w-56">
              <p className="text-white font-semibold text-lg sm:text-xl lg:text-2xl text-center">
                No Risk
              </p>
              <p className="text-white font-semibold text-center text-sm sm:text-base lg:text-sm mt-3">
                We ensure that all products are safe and within their use-by date
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-6 sm:mt-10 lg:mt-11">
            <img className="h-20 sm:h-24 lg:h-28" src="/item1.png" alt="" />
            <div className="flex flex-col justify-center items-center mt-3 w-full sm:w-48 lg:w-56">
              <p className="text-white font-semibold text-lg sm:text-xl lg:text-2xl text-center">
                GMO free
              </p>
              <p className="text-white font-semibold text-center text-sm sm:text-base lg:text-sm mt-3">
                Natural, no modified products and derivatives for those who need it
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
