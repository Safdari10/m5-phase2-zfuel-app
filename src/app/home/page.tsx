"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-orange-400 text-center">
        <div className="relative">
          <img
            src="/homepage-images/homebanner.png"
            alt="Z Banner"
            className="mx-auto w-full max-w-5x1"
          />
          <h1 className="absolute top-1/2 left-32 text-7xl lg:text-[8.5rem] font-bold text-white drop-shadow-lg transform -translate-y-1/2" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)' }}>
            Welcome to Z
          </h1>
        </div>
        <div className="bg-white pt-12">
          <img
            src="/homepage-images/familycar.png"
            alt="Family with car"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Find a Z Station Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-orange-400 text-center h-[200px] mt-48">
        <div className="relative w-full h-full">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E67817] to-[#F7B239] opacity-50 z-10"></div>
          
          <img
            src="/homepage-images/findzbanner.png"
            alt="findzbanner"
            className="w-full h-full object-cover"
          />
          <h2 className="absolute top-1/2 left-32 text-4xl lg:text-6xl font-bold text-white drop-shadow-lg transform -translate-y-1/2 z-20" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)' }}>
            Find a Z Station
          </h2>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 lg:px-32 py-24 lg:py-32 space-y-24">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1800px] mx-auto">
          <div className="lg:w-[700px] lg:ml-20">
            <img
              src="/homepage-images/sharetank.png"
              alt="Sharetank"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-[600px] mt-8 lg:mt-0 lg:mr-20">
            <h3 className="text-5xl lg:text-7xl font-bold text-blue-900 mb-8">Sharetank</h3>
            <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed mb-12">
              Buy fuel and share with up to 5 friends and family with Sharetank.
            </p>
            <button className="mt-8 px-12 py-6 bg-orange-500 text-white text-2xl rounded-full shadow-lg hover:bg-orange-600 transition-colors">
              Sharetank
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1800px] mx-auto">
          <div className="lg:w-[600px] mt-8 lg:mt-0 order-2 lg:order-1 lg:ml-20">
            <h3 className="text-5xl lg:text-7xl font-bold text-blue-900 mb-8">Price Comparison</h3>
            <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed mb-12">
              Compare fuel prices with nearby stations.
            </p>
            <button className="mt-8 px-12 py-6 bg-orange-500 text-white text-2xl rounded-full shadow-lg hover:bg-orange-600 transition-colors">
              Price Comparison
            </button>
          </div>
          <div className="lg:w-[700px] order-1 lg:order-2 lg:mr-20">
            <img
              src="/homepage-images/pricecomparison.png"
              alt="Price Comparison"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1800px] mx-auto">
          <div className="lg:w-[700px] lg:ml-20">
            <img
              src="/homepage-images/orderfoodonline.png"
              alt="Order Food Online"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-[600px] mt-8 lg:mt-0 lg:mr-20">
            <h3 className="text-5xl lg:text-7xl font-bold text-blue-900 mb-8">Order Food Online</h3>
            <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed mb-12">
              Order food and drinks via the app and pick up at the station.
            </p>
            <button className="mt-8 px-12 py-6 bg-orange-500 text-white text-2xl rounded-full shadow-lg hover:bg-orange-600 transition-colors">
              Order Food
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
        {/* <button className="">
          Find Your Closest Z Station
        </button> */}
export default Home;