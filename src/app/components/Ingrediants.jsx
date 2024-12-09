import React from 'react';
import Link from 'next/link';

function Ingrediants() {
  return (
    <>
      <div className="flex flex-col w-[90vw] md:w-[95vw] lg:w-auto md:flex-row md:flex-wrap justify-center items-center ml-3 mt-5">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
          {/* Text Section */}
          <div className="flex flex-col w-[80vw] sm:w-[70vw] md:w-auto m-3">
            <p className="font-semibold">INGREDIANTS</p>
            <p className="font-bold text-2xl sm:text-3xl md:text-4xl">Better Ingrediants</p>
            <p className="mt-3 text-sm md:w-[540px] sm:text-base">
              Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
            </p>
          </div>

          {/* First Set of Images */}
          <div className="flex flex-col sm:flex-row justify-start items-center gap-6 sm:gap-8 mt-4 sm:mt-6 md:mt-0 w-full">
            <div className="relative w-full sm:w-[45vw] md:w-[45vw] lg:w-auto">
              <img src="/in1.png" className="h-auto w-full sm:w-60 md:w-auto" alt="in" />
              <div className="absolute inset-8 flex flex-col">
                <p className="text-lg sm:text-xl font-bold">VITAMIN C</p>
                <p className="text-sm sm:text-md font-semibold text-[#727272]">
                  Vitamin C as ascorbic acid
                </p>
                <Link className="mt-20 sm:mt-24 text-[#003569] font-bold underline underline-offset-4" href="/">
                  SEE MORE
                </Link>
              </div>
            </div>

            <div className="relative w-full sm:w-[45vw] md:w-[45vw] lg:w-auto">
              <img src="/VitaminB3.jpg" className="h-auto w-full sm:w-60 md:w-auto" alt="in" />
              <div className="absolute inset-8 flex flex-col">
                <p className="text-lg sm:text-xl font-bold">Vitamin B3</p>
                <p className="text-sm sm:text-md font-semibold text-[#727272]">
                  Niacin for healthy gut and skin
                </p>
                <Link className="mt-20 sm:mt-24 text-[#003569] font-bold underline underline-offset-4" href="/">
                  SEE MORE
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Second Set of Images */}
        <div className="flex flex-col sm:flex-row justify-start items-center gap-6 sm:gap-8 mt-6 md:mt-0 w-full">
          <div className="relative w-full sm:w-[45vw] md:w-[45vw] lg:w-auto">
            <img src="/Magnesium.jpg" className="h-auto w-full sm:w-60 md:w-auto" alt="in" />
            <div className="absolute inset-8 flex flex-col">
              <p className="text-lg sm:text-xl font-bold">Magnesium</p>
              <p className="text-sm sm:text-md font-semibold text-[#727272]">
                Boost energy and support <br /> muscle function
              </p>
              <Link className="mt-20 sm:mt-24 text-[#003569] font-bold underline underline-offset-4" href="/">
                SEE MORE
              </Link>
            </div>
          </div>

          <div className="relative w-full sm:w-[45vw] md:w-[45vw] lg:w-auto">
            <img src="/h_acid.jpg" className="h-auto w-full sm:w-60 md:w-auto" alt="in" />
            <div className="absolute inset-8 flex flex-col">
              <p className="text-lg sm:text-xl font-bold">Hyaluronic Acid</p>
              <p className="text-sm sm:text-md font-semibold text-[#727272]">
                For smooth, <br /> supple and soft skin!
              </p>
              <Link className="mt-20 sm:mt-24 text-[#003569] font-bold underline underline-offset-4" href="/">
                SEE MORE
              </Link>
            </div>
          </div>

          <div className="relative w-full sm:w-[45vw] md:w-[45vw] lg:w-auto">
            <img src="/lactobacillus.jpg" className="h-auto w-full sm:w-60 md:w-auto" alt="in" />
            <div className="absolute inset-8 flex flex-col">
              <p className="text-lg sm:text-xl font-bold">Lactobacillus</p>
              <p className="text-sm sm:text-md font-semibold text-[#727272]">
                Invigorate your gut, microbiome
              </p>
              <Link className="mt-20 sm:mt-24 text-[#003569] font-bold underline underline-offset-4" href="/">
                SEE MORE
              </Link>
            </div>
          </div>

          <img
            src="/des.png"
            className="h-[200px] sm:h-[250px] md:h-[300px] rotate-90 sm:rotate-0 md:rotate-0 mt-8 sm:mt-6 md:mt-3"
            alt="design"
          />
        </div>
      </div>
    </>
  );
}

export default Ingrediants;
