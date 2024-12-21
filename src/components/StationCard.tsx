"use client";

import React from "react";
import { ShoppingBag, Fuel, Car, Wind } from "lucide-react";

interface StationCardProps {
  name: string;
  address: string;
  phone: string;
  hours: { [key: string]: string };
  services: string[];
}

const serviceIcons: Record<string, React.ReactNode> = {
  Shop: <ShoppingBag className="w-5 h-5 text-white" />,
  Fuel: <Fuel className="w-5 h-5 text-white" />,
  "Car Wash": <Car className="w-5 h-5 text-white" />,
  Air: <Wind className="w-5 h-5 text-white" />,
};

export default function StationCard({
  name,
  address,
  phone,
  hours,
  services,
}: StationCardProps) {
  return (
    <div className="bg-gradient-to-r from-[#F36F21] to-[#FFC42E] p-8 rounded-3xl text-white relative overflow-hidden">
      {/* Decorative corner element */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 transform rotate-45 translate-x-12 translate-y-12" />
      
      <h2 className="text-3xl font-bold mb-2">{name}</h2>
      <p className="text-lg mb-8">{address}</p>
      
      <div className="flex justify-between mb-6">
        <div>
          <p className="text-xl font-semibold mb-4">Services Offered</p>
          <div className="flex gap-4">
            {services.map((service) => (
              <div key={service} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                {React.cloneElement(serviceIcons[service] as React.ReactElement, {
                  className: "w-7 h-7 text-white"
                })}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold mb-4">Contact Store</p>
          <p className="flex items-center gap-3 text-lg">
            <span className="text-xl">📞</span> {phone}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-12 text-lg">
        <div className="space-y-2">
          {Object.entries(hours).slice(0, 4).map(([day, time]) => (
            <div key={day} className="flex justify-between">
              <span>{day}</span>
              <span>{time}</span>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {Object.entries(hours).slice(4).map(([day, time]) => (
            <div key={day} className="flex justify-between">
              <span>{day}</span>
              <span>{time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}