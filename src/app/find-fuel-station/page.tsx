"use client";

import StationCard from "@/components/StationCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface ServiceIconProps {
  type: 'shop' | 'fuel' | 'carwash' | 'air';
}

export function ServiceIcon({ type }: ServiceIconProps) {
  // Add your icon SVGs or images here
  return (
    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
      {/* Add icon based on type */}
    </div>
  );
}

export default function FindFuelStation() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 px-12 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/banner.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Content */}
        <div className="max-w-[1920px] mx-auto relative z-10 mt-8">
          <h1 
            className="text-8xl font-bold tracking-wide relative"
            style={{
              color: 'white',
              textShadow: `
                2px 2px 0 #4A3F35,
                -2px -2px 0 #ffffff50,
                4px 4px 8px rgba(0,0,0,0.6)
              `
            }}
          >
            Find a fuel station near you
          </h1>
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