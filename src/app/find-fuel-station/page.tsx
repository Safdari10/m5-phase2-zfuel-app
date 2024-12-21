"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import StationCard from "@/components/StationCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FindFuelStation() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 px-12 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/banner.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="max-w-[1920px] mx-auto relative z-10 mt-8">
          <h1 className="text-8xl font-bold text-white tracking-wide relative">
            <span className="absolute top-[4px] left-[4px] text-[#4A3F35] blur-[2px]">
              Find a fuel station near you
            </span>
            Find a fuel station near you
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full px-12 py-8 relative">
        {/* Diagonal Background Split */}
        <div className="absolute inset-0">
          {/* White Background */}
          <div className="absolute inset-0 bg-white" />
          
          {/* Gradient Background */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#F36F21] to-[#FFC42E]"
            style={{
              clipPath: 'path("M0 100% Q 50% 50% 100% 0 L 100% 100% L 0 100% Z")'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          <div className="flex gap-8 h-[calc(100vh-300px)]">
            {/* Left Section - Search and Stations (50%) */}
            <div className="w-1/2 flex flex-col items-end">
              {/* Search Bar Section (50% width of left side) */}
              <div className="w-1/2 mb-8">
                <div className="relative w-full">
                  <Input 
                    placeholder="Enter Your Location" 
                    className="w-full h-20 pl-20 pr-6 text-3xl rounded-3xl shadow-lg border-none"
                  />
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={36} />
                </div>
              </div>

              {/* Stations List Section (50% width of left side) */}
              <div className="w-1/2 space-y-4 overflow-y-auto">
                <StationCard
                  name="Z Kingsway Station"
                  address="26 Clevedon Road, Papakura"
                  phone="09 298 3185"
                  hours={{
                    Sun: "24 Hours",
                    Mon: "24 Hours",
                    Tue: "24 Hours",
                    Wed: "24 Hours",
                    Thu: "24 Hours",
                    Fri: "24 Hours",
                    Sat: "24 Hours"
                  }}
                  services={["Shop", "Fuel", "Car Wash", "Air"]}
                />

                <StationCard
                  name="Z Papakura North"
                  address="254 Great South Road, Takanini, Auckland"
                  phone="09 298 3185"
                  hours={{
                    Sun: "5:00am - 10pm",
                    Mon: "5:00am - 10pm",
                    Tue: "5:00am - 10pm",
                    Wed: "5:00am - 10pm",
                    Thu: "5:00am - 10pm",
                    Fri: "5:00am - 10pm",
                    Sat: "5:00am - 10pm"
                  }}
                  services={["Shop", "Fuel", "Air"]}
                />
              </div>
            </div>

            {/* Map Section */}
            <div className="w-1/2 bg-gray-100 rounded-3xl relative">
              <div className="absolute right-6 top-6 flex flex-col gap-3">
                <button className="bg-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-4xl">
                  +
                </button>
                <button className="bg-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-4xl">
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}