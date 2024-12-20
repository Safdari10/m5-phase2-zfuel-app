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
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gray-500 mt-1" />
          <p>{address}</p>
        </div>
        
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-gray-500 mt-1" />
          <p>{phone}</p>
        </div>
        
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-gray-500 mt-1" />
          <p>{hours}</p>
        </div>

        <div className="pt-4 border-t">
          <h3 className="font-semibold mb-2">Available Services</h3>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm"
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