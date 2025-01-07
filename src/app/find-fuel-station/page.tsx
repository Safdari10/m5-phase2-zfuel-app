"use client";

import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import StationCard from "./components/StationCard";
import MapControls from "./components/MapControls";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      
      const response = await fetch(`/find-fuel-station/api/stations?lat=${lat}&lng=${lng}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch stations');
      }

      const data = await response.json();
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

  const handleStationSelect = (station: any) => {
    setSelectedStation(station);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[200px] overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-r from-[#F36F21] to-[#FFC42E]"
        />
        <div 
          className="absolute inset-0 z-10 opacity-20"
          style={{
            backgroundImage: "url('/images/banner.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="max-w-[1280px] h-full mx-auto px-4 md:px-12 flex items-center relative z-20">
          <div className="w-full max-w-[780px] h-[75px] flex items-center">
            <h1 
              className="text-4xl md:text-6xl font-roboto font-bold text-white"
              style={{ textShadow: '24px 14px 4px rgba(0, 0, 0, 0.5)' }}
            >
              Find a fuel station near you
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div key="main-content-container" className="w-full bg-white relative">
        {/* White background with diagonal cut */}
        <div className="absolute inset-0 bg-white" />
        
        {/* Diagonal gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, #F36F21, #FFC42E)',
            clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
          }}
        />
        
        <div key="main-content" className="max-w-[1280px] mx-auto px-4 md:px-12 relative z-10 mt-24 pb-24">
          <div key="main-content-flex" className="flex justify-between items-start">
            {/* Left Column */}
            <div key="left-column" className="w-[465px]">
              {/* Search Bar Section */}
              <div key="search-section">
                <SearchBar onLocationSelect={handleLocationSelect} />
                {error && (
                  <div key="error" className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                    {error}
                  </div>
                )}
                {loading && (
                  <div key="loading" className="mt-4">
                    Loading stations...
                  </div>
                )}
              </div>

              {/* Results Section */}
              <div key="results-section" className="flex flex-col space-y-4 mt-4">
                {hasSearched ? (
                  stations.length > 0 ? (
                    selectedStation ? (
                      <StationCard 
                        key="selected-station"
                        {...selectedStation} 
                      />
                    ) : (
                      stations.map((station) => (
                        <StationCard
                          key={station.id || station._id?.toString()}
                          {...station}
                          onClick={() => handleStationSelect(station)}
                        />
                      ))
                    )
                  ) : (
                    <div key="no-results" className="text-gray-500">
                      No stations found. Try a different location.
                    </div>
                  )
                ) : null}
              </div>
            </div>

            {/* Map Section */}
            <div key="map-section" className="w-[600px] overflow-hidden h-[400px] rounded-xl border-2 border-black">
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