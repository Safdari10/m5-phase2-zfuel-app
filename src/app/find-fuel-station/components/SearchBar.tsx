"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <Input 
        placeholder="Enter Your Location" 
        className="w-full h-20 pl-20 pr-6 text-3xl rounded-3xl shadow-lg border-none"
      />
      <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={36} />
    </div>
  );
} 