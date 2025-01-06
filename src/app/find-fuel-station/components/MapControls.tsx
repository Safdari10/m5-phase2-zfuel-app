"use client";
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;
interface MapProps {
 stations: any[];
 center: [number, number];
 onStationSelect: (station: any) => void;
}

export default function Map({ stations, center, onStationSelect }: MapProps) {
 const mapContainer = useRef<HTMLDivElement>(null);
 const map = useRef<mapboxgl.Map | null>(null);
 const [zoom, setZoom] = useState(12);
  useEffect(() => {
   if (!mapContainer.current) return;
    // Initialize map only once
   if (!map.current) {
     map.current = new mapboxgl.Map({
       container: mapContainer.current,
       style: 'mapbox://styles/mapbox/streets-v12',
       center: center,
       zoom: zoom
     });
      // Add zoom controls
     map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      // Add user location control
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
     // If map exists, just update the center
     map.current.setCenter(center);
   }
    // Clear existing markers
   const markers = document.getElementsByClassName('mapboxgl-marker');
   while(markers[0]) {
     markers[0].remove();
   }
    // Add markers for each station
   stations.forEach((station) => {
     // Create custom marker element
     const el = document.createElement('div');
     el.className = 'custom-marker';
     el.innerHTML = `
       <div class="w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
         <img src="/images/find_Z2.png" alt="Z Station" class="w-20 h-20 object-contain" />
       </div>
     `;
      // Create popup
     const popup = new mapboxgl.Popup({ offset: 25 })
       .setHTML(`
         <div class="p-4">
           <h3 class="font-bold text-lg">${station.name}</h3>
           <p class="text-gray-600">${station.address}</p>
         </div>
       `);
      // Add marker to map
     const marker = new mapboxgl.Marker(el)
       .setLngLat(station.location.coordinates)
       .setPopup(popup)
       .addTo(map.current!);
      // Add click event
     el.addEventListener('click', () => {
       onStationSelect(station);
     });
   });
    // Cleanup function
   return () => {
     if (map.current) {
       map.current.remove();
       map.current = null;
     }
   };
 }, [stations, center, zoom]);
  return (
   <div className="relative w-full h-full">
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
   </div>
 );
}
