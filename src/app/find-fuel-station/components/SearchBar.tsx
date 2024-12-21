"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

interface SearchBarProps {
  onLocationSelect: (lat: number, lng: number) => void;
}

export default function SearchBar({ onLocationSelect }: SearchBarProps) {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const handleSearch = async (value: string) => {
    setAddress(value);
    
    if (value.length > 2) {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?country=NZ&access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();
      setSuggestions(data.features);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectLocation = async (feature: any) => {
    setAddress(feature.place_name);
    setSuggestions([]);
    const [lng, lat] = feature.center;
    onLocationSelect(lat, lng);
  };

  return (
    <div className="relative w-full transform transition-transform hover:-translate-y-2 hover:rotate-1">
      <div className="absolute inset-0 bg-black/20 rounded-3xl blur-xl transform scale-95 translate-y-4" />
      <Input 
        value={address}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Enter Your Location" 
        className="w-full h-20 pl-20 pr-6 text-3xl rounded-3xl border-none
          shadow-[0_8px_0_0_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] 
          hover:shadow-[0_12px_0_0_rgba(0,0,0,0.1),0_30px_40px_-5px_rgba(0,0,0,0.2)]
          transition-all duration-300 ease-out
          bg-white/95 backdrop-blur-sm
          relative"
      />
      <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={36} />
      
      {suggestions.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg z-50">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="p-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectLocation(suggestion)}
            >
              {suggestion.place_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 