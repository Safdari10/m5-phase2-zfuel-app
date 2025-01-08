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
  onClick?: () => void;
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
  onClick
}: StationCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-gradient-to-r from-[#F36F21] to-[#FFC42E] p-6 rounded-xl cursor-pointer shadow-lg w-[465px]"
    >
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-white/90 text-sm mb-4">{address}</p>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column - Services and Contact */}
        <div className="space-y-4">
          <div>
            <p className="text-white font-semibold mb-2 text-sm">Services Offered</p>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <div key={service} 
                  className="w-8 h-8 flex items-center justify-center"
                >
                  {serviceIcons[service]}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white font-semibold mb-2 text-sm">Contact Store</p>
            <p className="text-white/90 text-sm">{phone}</p>
          </div>
        </div>

        {/* Right Column - Hours */}
        <div>
          <div className="text-sm text-white/90">
            {Object.entries(hours).map(([day, time]) => (
              <div key={day} className="flex gap-8">
                <span className="w-8">{day}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}