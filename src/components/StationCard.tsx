"use client";

import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, ShoppingBag, Fuel, Car, Wind } from "lucide-react";

interface StationCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
}

const serviceIcons: Record<string, React.ReactNode> = {
  Shop: <ShoppingBag className="w-4 h-4" />,
  Fuel: <Fuel className="w-4 h-4" />,
  "Car Wash": <Car className="w-4 h-4" />,
  Air: <Wind className="w-4 h-4" />,
};

export default function StationCard({
  name,
  address,
  phone,
  hours,
  services,
}: StationCardProps) {
  return (
    <Card className="p-8 hover:shadow-lg transition-shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-6">{name}</h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-gray-500 mt-1" />
          <p className="text-lg">{address}</p>
        </div>
        
        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 text-gray-500 mt-1" />
          <p className="text-lg">{phone}</p>
        </div>
        
        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-gray-500 mt-1" />
          <p className="text-lg">{hours}</p>
        </div>

        <div className="pt-6 border-t">
          <h3 className="font-semibold text-xl mb-4">Available Services</h3>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-base"
              >
                {serviceIcons[service]}
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}