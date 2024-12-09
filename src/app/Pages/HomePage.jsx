import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Details from "../components/Details";
import Ingrediants from "../components/Ingrediants";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      
        <Navbar />
      

      <div className="bg-slate-100 h-[120vh] md:m-4">
        <div>
          <h1 className="text-7xl font-bold text-center color text-blue-950 pt-16">
            Essential Vitamins
          </h1>
        </div>
        <Banner />

        <div className="flex gap-3 mt-14 ml-48">
          <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        </div>

        <Details />
        <Ingrediants />
       <Blog/>
       <Footer/>
      </div>
    </>
  );
}

export default HomePage;
