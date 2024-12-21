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
      <div className="bg-gradient-to-r from-[#F36F21] to-[#FFC42E] p-6 rounded-[28px] text-white 
        relative max-w-[650px]"
      >
        {/* Content */}
        <div className="flex justify-between gap-4">
          <div className="w-[60%]">
            <h2 className="text-3xl font-bold mb-2">{name}</h2>
            <p className="text-lg mb-6">{address}</p>
            
            <div className="space-y-5">
              <div>
                <p className="text-xl font-semibold mb-3">Services Offered</p>
                <div className="flex gap-2">
                  {services.map((service) => (
                    <div key={service} 
                      className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center"
                    >
                      {React.cloneElement(serviceIcons[service] as React.ReactElement, {
                        className: "w-7 h-7 text-green-500"
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xl font-semibold mb-2">Contact Store</p>
                <p className="flex items-center gap-2 text-lg">
                  <span>📞</span> {phone}
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Hours */}
          <div className="w-[40%] pl-4">
            <div className="space-y-1.5">
              {Object.entries(hours).map(([day, time]) => (
                <div key={day} className="flex justify-between text-lg">
                  <span className="w-14">{day}</span>
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