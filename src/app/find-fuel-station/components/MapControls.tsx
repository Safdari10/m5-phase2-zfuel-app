"use client";
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Store, Fuel, Car, Wind } from "lucide-react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

interface MapProps {
  stations: any[];
  center: [number, number];
  onStationSelect: (station: any) => void;
}

const filterIcons = [
  { id: 'Shop', icon: <Store className="w-5 h-5 text-[#1e196b]" />, label: "Shop" },
  { id: 'Fuel', icon: <Fuel className="w-5 h-5 text-[#1e196b]" />, label: "Fuel" },
  { id: 'Car Wash', icon: <Car className="w-5 h-5 text-[#1e196b]" />, label: "Car Wash" },
  { id: 'Air', icon: <Wind className="w-5 h-5 text-[#1e196b]" />, label: "Air" }
];

export default function Map({ stations, center, onStationSelect }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [zoom, setZoom] = useState(12);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const updateMarkerVisibility = () => {
    stations.forEach((station) => {
      const marker = markersRef.current[station.id];
      if (marker) {
        // If no filters are active, show all markers
        if (activeFilters.length === 0) {
          marker.getElement().style.display = 'block';
          return;
        }

        // Check if station has all selected services
        const hasAllServices = activeFilters.every(filter => 
          station.services.includes(filter)
        );
        marker.getElement().style.display = hasAllServices ? 'block' : 'none';
      }
    });
  };

  useEffect(() => {
    updateMarkerVisibility();
  }, [activeFilters, stations]);

  useEffect(() => {
    if (!mapContainer.current) return;

    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: center,
        zoom: zoom
      });
      
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      map.current.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserHeading: true
        })
      );
    } else {
      map.current.setCenter(center);
    }

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    // Add markers for each station
    stations.forEach((station) => {
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.innerHTML = `
        <div class="w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
          <img src="/images/find_Z2.png" alt="Z Station" class="w-20 h-20 object-contain" />
        </div>
      `;

      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-4">
            <h3 class="font-bold text-lg">${station.name}</h3>
            <p class="text-gray-600">${station.address}</p>
          </div>
        `);

      const marker = new mapboxgl.Marker(el)
        .setLngLat(station.location.coordinates)
        .setPopup(popup)
        .addTo(map.current!);

      el.addEventListener('click', () => {
        onStationSelect(station);
      });

      markersRef.current[station.id] = marker;
    });

    updateMarkerVisibility();

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [stations, center, zoom]);

  return (
    <div className="relative w-full h-[400px]">
      <div ref={mapContainer} className="w-full h-full rounded-3xl" />
      
      {/* Zoom Controls */}
      <div className="absolute right-6 top-6 flex flex-col gap-3">
        <button 
          onClick={() => setZoom(prev => Math.min(prev + 1, 20))}
          className="bg-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-4xl"
        >
          +
        </button>
        <button 
          onClick={() => setZoom(prev => Math.max(prev - 1, 1))}
          className="bg-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-4xl"
        >
          -
        </button>
      </div>
      
      {/* Filter Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 flex gap-2">
        {filterIcons.map((filter) => (
          <button
            key={filter.id}
            className={`p-2 rounded-lg transition-colors ${
              activeFilters.includes(filter.id)
                ? 'bg-[#1e196b] bg-opacity-10'
                : 'hover:bg-gray-100'
            }`}
            title={filter.label}
            onClick={() => toggleFilter(filter.id)}
          >
            {filter.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
