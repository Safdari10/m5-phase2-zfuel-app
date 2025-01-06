import React from "react";
import { Store, Fuel, Car, Wind } from "lucide-react";

interface StationCardProps {
  name: string;
  address: string;
  phone: string;
  hours: {
    [key: string]: string;
  };
  services: string[];
}

const serviceIcons: { [key: string]: React.ReactElement } = {
  Shop: <Store className="text-green-500" />,
  Fuel: <Fuel className="text-green-500" />,
  "Car Wash": <Car className="text-green-500" />,
  Air: <Wind className="text-green-500" />
};

export default function StationCard({
  name,
  address,
  phone,
  hours,
  services,
}: StationCardProps) {
  return (
    <div className="relative">
      {/* Main card */}
      <div className="bg-gradient-to-r from-[#F36F21] to-[#FFC42E] p-4 rounded-xl text-white 
        relative max-w-[400px]"
      >
        {/* Content */}
        <div className="flex justify-between gap-4">
          <div className="w-[60%]">
            <h2 className="text-xl font-bold mb-1">{name}</h2>
            <p className="text-sm mb-3">{address}</p>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-2">Services Offered</p>
                <div className="flex gap-2">
                  {services.map((service) => (
                    <div key={service} 
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                    >
                      {React.cloneElement(serviceIcons[service] as React.ReactElement, {
                        className: "w-5 h-5 text-green-500"
                      })}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-semibold mb-2">Contact Store</p>
                <p className="text-sm">{phone}</p>
              </div>
            </div>
          </div>
          
          {/* Hours */}
          <div className="w-[40%] text-sm">
            <p className="font-semibold mb-2">Hours</p>
            <div className="space-y-1">
              {Object.entries(hours).map(([day, time]) => (
                <div key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}