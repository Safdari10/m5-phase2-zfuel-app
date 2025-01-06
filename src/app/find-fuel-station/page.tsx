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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleLocationSelect = async (lat: number, lng: number) => {
    try {
      setError(null);
      setLoading(true);
      setMapCenter([lng, lat]);
      setHasSearched(true);
      
      console.log('Fetching stations for:', { lat, lng }); // Debug log
      
      const response = await fetch(`/find-fuel-station/api/stations?lat=${lat}&lng=${lng}`);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('API Error Response:', errorData);
        throw new Error('Failed to fetch stations');
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (data.stations) {
        setStations(data.stations);
      } else {
        setStations([]);
      }
      
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch stations');
      setStations([]);
    } finally {
      setLoading(false);
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
          <h1 className="text-8xl font-bold text-white tracking-wide relative drop-shadow-[10px_24px_1px_rgba(0,0,0,0.3)]">
            Find a fuel station near you
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full px-12 py-8 relative bg-split">
        <div className="relative z-10">
          <div className="grid grid-cols-3 gap-8 h-[calc(100vh-500px)]">
            {/* Empty first column */}
            <div></div>

            {/* Search and Results - Middle Column */}
            <div className="flex flex-col">
              <div className="w-full mb-8">
                <SearchBar onLocationSelect={handleLocationSelect} />
                {error && (
                  <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-2xl">
                    {error}
                  </div>
                )}
                {loading && (
                  <div className="mt-4 text-center text-2xl">
                    Loading stations...
                  </div>
                )}
              </div>

              <div className="w-full space-y-4 overflow-y-auto">
                {stations.length > 0 ? (
                  selectedStation ? (
                    <StationCard {...selectedStation} />
                  ) : (
                    stations.map((station) => (
                      <StationCard 
                        key={station._id} 
                        {...station} 
                        onClick={() => setSelectedStation(station)}
                      />
                    ))
                  )
                ) : !loading && hasSearched && (
                  <div className="text-center p-4 text-gray-500 text-2xl">
                    No stations found in this area
                  </div>
                )}
              </div>
            </div>

            {/* Map Section - Last Column */}
            <div className="bg-gray-100 rounded-3xl relative h-[400px]"> 
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