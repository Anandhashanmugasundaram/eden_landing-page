import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#17414F] font-sans text-white pb-4">
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-evenly items-center p-4">
        <div className="bg-[#215D72] flex flex-row items-center gap-2 sm:gap-4 rounded-lg p-4 w-full sm:w-[18rem] lg:w-[20rem]">
          <img src="/phone.png" alt="phone" className="h-8 w-8" />
          <div className="flex flex-col text-sm justify-center text-nowrap">
            <div className="font-normal">Phone Number</div>
            <div className="font-semibold">+974 3118 1843</div>
          </div>
        </div>
        <div className="bg-[#215D72] flex flex-row items-center gap-2 sm:gap-4 rounded-lg p-4 w-full sm:w-[18rem] lg:w-[20rem]">
          <img src="/mail.png" alt="mail" className="h-8 w-8" />
          <div className="flex flex-col text-sm justify-center text-nowrap">
            <div className="font-normal">Email Address</div>
            <div className="font-semibold">Elbrithcqhr@gmail.com</div>
          </div>
        </div>
        <div className="bg-[#215D72] flex flex-row items-center gap-2 sm:gap-4 rounded-lg p-4 w-full sm:w-[18rem] lg:w-[20rem]">
          <img src="/location.png" alt="location" className="h-8 w-8" />
          <div className="flex flex-col text-sm justify-center text-nowrap">
            <div className="font-normal">Office Location</div>
            <div className="font-semibold w-[12rem] sm:w-[15rem] lg:w-[18rem] truncate">
              Ambassador Street, Zone 61, Chennai
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-20 lg:ml-28 items-center p-4">
        <img src="/logo1.png" alt="logo" className="bg-white p-4 w-[50%] sm:w-[25%] md:w-[20%] lg:w-[15%]" />
        <div className="font-normal text-xs sm:text-sm w-full sm:w-[18rem] md:w-[20rem] lg:w-[24rem] leading-5 text-center sm:text-left">
          Your health, physical and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </div>
      </div>

      <div className="flex flex-row gap-2 text-xs items-center text-center justify-center sm:justify-start lg:ml-28 p-4">
        <img src="/location.png" alt="location" className="w-4 h-4" />
        <div>
          Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
        </div>
      </div>
    </div>
  );
};

export default Footer;
