"use client";

import { useState } from "react";
import { fetchPrices } from "@/lib/priceFetch";

const PriceDisplay = () => {
  const [address, setAddress] = useState("");
  const [prices, setPrices] = useState<{
    diesel: number;
    fuel91: number;
    fuel95: number;
  } | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setPrices(null);

    try {
      const data = await fetchPrices(address);
      setPrices(data.prices);
    } catch (err: any) {
      setError(err.message || "Error fetching fuel prices");
    }
  };

  return (
    <div className="mb-20">
      <div className="flex items-center justify-start gap-10 ml-10 sm:ml-24 mb-10">
        <input
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="p-4 bg-gray-50 w-[330px] text-[15px] font-light rounded-lg shadow-lg focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="w-[90px] text-white rounded-xl text-[16px] font-semibold text-center bg-gradient-to-r from-[#F37120] via-[#F68C19] to-[#FFDD02]"
        >
          Search
        </button>
      </div>
      {error && (
        <p className="text-[#666666] text-[15px] font-light mt-2 ml-10 sm:ml-24 mb-10">
          {error}
        </p>
      )}
      <div className="flex items-center justify-evenly flex-col sm:flex-row  sm:ml-52 mb-10">
        <div className="mb-10 sm:mb-0 w-[250px] h-[250px] rounded-xl shadow-lg bg-gradient-to-r from-[#F37120] via-[#F68C19] to-[#FFDD02]">
          <img src="/priceComparison/91.png" alt="91 logo" className="p-6 ml-3" />
          <img src="/priceComparison/Vector.png" alt="z logo" className="ml-32" />
          <div className="bg-[#00732E] w-[200px] font-semibold text-[16px] text-white text-center mt-8 mx-10 rounded-lg">
            {prices ? <span className="py-6">${prices.fuel91.toFixed(2)} per litre</span> : <span className="py-6">Price 1</span>}
          </div>
        </div>
        <div className="mb-10 sm:mb-0 w-[250px] h-[250px] rounded-xl shadow-lg bg-gradient-to-r from-[#F37120] via-[#F68C19] to-[#FFDD02]">
          <img src="/priceComparison/95.png" alt="95 logo" className="p-6 ml-3" />
          <img src="/priceComparison/Vector.png" alt="z logo" className="ml-32" />
          <div className="bg-[#E65F24] w-[200px] font-semibold text-[16px] text-white text-center mt-8 mx-10 rounded-lg">
            {prices ? <span className="py-6">${prices.fuel95.toFixed(2)} per litre</span> : <span className="py-6">Price 2</span>}
          </div>
        </div>
        <div className="mb-10 sm:mb-0 w-[250px] h-[250px] rounded-xl shadow-lg bg-gradient-to-r from-[#F37120] via-[#F68C19] to-[#FFDD02]">
          <img src="/priceComparison/D.png" alt="diesel logo" className="p-6 ml-3" />
          <img src="/priceComparison/Vector.png" alt="z logo" className="ml-32" />
          <div className="w-[200px] font-semibold text-[16px] text-white text-center mt-8 mx-10 rounded-lg bg-gradient-to-r from-[#1E196B] via-[#2C238A] to-[#3129AB]">
            {prices ? <span className="py-6">${prices.diesel.toFixed(2)} per litre</span> : <span className="py-6">Price 3</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDisplay;