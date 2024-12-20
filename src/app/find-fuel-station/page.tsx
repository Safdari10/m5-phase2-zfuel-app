/// <reference types="react" />
"use client";

import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import StationCard from "@/components/StationCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#F36F21] to-[#FF8F4D] py-28 px-12">
        <div className="max-w-[1920px] mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-16">
            Find a fuel station near you
          </h1>
          <div className="flex max-w-4xl mx-auto gap-6">
            <div className="relative flex-1">
              <Input 
                placeholder="Enter your location" 
                className="pl-16 h-16 bg-white text-xl rounded-2xl"
                style={{ fontSize: '1.25rem' }}
              />
              <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={28} />
            </div>
            <Button 
              className="bg-[#F36F21] hover:bg-[#E55E10] h-16 px-12 text-xl font-semibold rounded-2xl"
              style={{ fontSize: '1.25rem' }}
            >
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex flex-col lg:flex-row gap-16 max-w-[1920px] mx-auto px-12 py-24">
        <div className="flex-1 space-y-10">
          <StationCard
            name="Z Kingsway Station"
            address="26 Clevedon Road, Papakura"
            phone="09 298 3185"
            hours="Open 24/7"
            services={["Shop", "Fuel", "Car Wash", "Air"]}
          />
          <StationCard
            name="Z Papakura North"
            address="254 Great South Road, Takanini, Auckland"
            phone="09 298 3185"
            hours="Mon-Fri: 5:00am - 10pm, Sat-Sun: 6:00am - 10pm"
            services={["Shop", "Fuel", "Air"]}
          />
        </div>
        
        {/* Map Section */}
        <div className="flex-1 bg-gray-100 rounded-xl min-h-[400px] lg:min-h-[800px]">
          <div className="w-full h-full rounded-xl bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Map View</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}