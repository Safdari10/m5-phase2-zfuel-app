"use client";

import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import StationCard from "./components/StationCard";
import MapControls from "./components/MapControls";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FindFuelStation() {
  const [stations, setStations] = useState<any[]>([]);
  const [selectedStation, setSelectedStation] = useState<any>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([174.7645, -36.8509]); // Auckland

  const handleLocationSelect = async (lat: number, lng: number) => {
    setMapCenter([lng, lat]);
    
    try {
      // Fetch nearby stations
      const response = await fetch(`/api/stations?lat=${lat}&lng=${lng}`);
      if (!response.ok) {
        throw new Error('Failed to fetch stations');
      }
      const data = await response.json();
      setStations(data);
    } catch (error) {
      console.error('Error fetching stations:', error);
      // You might want to add error handling UI here
    }
  };

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
            Find a fuel station near you
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full px-12 py-8 relative bg-split">
        <div className="relative z-10">
          <div className="flex gap-8 h-[calc(100vh-300px)]">
            {/* Left Section */}
            <div className="w-1/2 flex flex-col items-end">
              <div className="w-[65%] mb-8">
                <SearchBar onLocationSelect={handleLocationSelect} />
              </div>

              <div className="w-[65%] space-y-4 overflow-y-auto">
                {selectedStation ? (
                  <StationCard {...selectedStation} />
                ) : (
                  stations.map((station) => (
                    <StationCard 
                      key={station._id} 
                      {...station} 
                      onClick={() => setSelectedStation(station)}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Map Section */}
            <div className="w-1/2 bg-gray-100 rounded-3xl relative">
              <MapControls 
                stations={stations}
                center={mapCenter}
                onStationSelect={setSelectedStation}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}