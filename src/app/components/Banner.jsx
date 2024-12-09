import React from 'react';

function Banner() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 sm:gap-16 md:gap-20 mt-9 sm:ml-10 md:ml-28">
        <div className="text-center sm:text-left">
          <p className="text-lg sm:text-xl">Online Medical Supplies</p>
          <p className="text-2xl sm:text-3xl font-semibold">
            Get Your Vitamins
            <br />& Minerals
          </p>
          <button className="bg-blue-950 text-white text-xs sm:text-sm md:text-base h-[56px] w-[189px] p-2 rounded-3xl mt-4">
            EXPLORE
          </button>
        </div>

        <div className="relative mt-4 md:mt-0">
          {/* Tablet Image */}
          <img
            className="h-[250px] sm:h-[250px] md:h-[462px] w-[250px] sm:w-[250px] md:w-[434px] absolute z-20 inset-0 mt-[-50px] sm:mt-[-70px] md:mt-[-90px]"
            src="/tablet.png"
            alt="tablet"
          />
          
          {/* Background Image */}
          <img
            className="h-[250px] sm:h-[250px] md:h-[391px] w-[250px] sm:w-[250px] md:w-[393px] inset-0 z-10"
            src="/bg.png"
            alt="tablet background"
          />
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 mt-6 md:mt-0">
          <div className="flex items-center pb-5 sm:pb-6">
            <img className="h-14 w-auto" src="/frame1.png" alt="vitamin image" />
            <div className="pl-5">
              <p className="font-bold text-2xl sm:text-3xl md:text-3xl">Vitamins</p>
              <p className="text-sm sm:text-base md:text-base">
                Increased Vitamins and
                <br />
                minerals in your diet
              </p>
            </div>
          </div>

          <div className="flex items-center pb-5 sm:pb-6">
            <img className="h-14 w-auto" src="/frame3.png" alt="Weightmachine image" />
            <div className="pl-5">
              <p className="font-bold text-2xl sm:text-3xl md:text-3xl">Weight Loss</p>
              <p className="text-sm sm:text-base md:text-base">
                Weight Loss
                <br /> Find scientifically proven solutions
              </p>
            </div>
          </div>

          <div className="flex items-center pb-5 sm:pb-6">
            <img className="h-14 w-auto" src="/frame2.png" alt="Food image" />
            <div className="pl-5">
              <p className="font-bold text-2xl sm:text-3xl md:text-3xl">Functional Foods</p>
              <p className="text-sm sm:text-base md:text-base">
                Functional Foods
                <br /> From protein powders to baby formula
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
