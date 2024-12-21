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
  Shop: <Store />,
  Fuel: <Fuel />,
  "Car Wash": <Car />,
  Air: <Wind />
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
      {/* Left Section */}
      <div className="flex justify-between">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <p className="text-lg mb-8">{address}</p>
          
          <div className="space-y-6">
            <div>
              <p className="text-xl font-semibold mb-3">Services Offered</p>
              <div className="flex gap-3">
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
              <p className="text-xl font-semibold mb-2">Contact Store</p>
              <p className="flex items-center gap-2 text-lg">
                <span>📞</span> {phone}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Hours */}
        <div className="w-1/2 pl-8">
          <div className="space-y-2">
            {Object.entries(hours).map(([day, time]) => (
              <div key={day} className="flex justify-between text-lg">
                <span className="w-16">{day}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}