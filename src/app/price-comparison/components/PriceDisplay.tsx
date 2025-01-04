"use client";

import React, { useState } from "react";

const PriceDisplay: React.FC = () => {
  const [address, setAddress] = useState("");
  const [prices, setPrices] = useState<{
    price1: number;
    price2: number;
    price3: number;
  } | null>(null);

  const handleSearch = async () => {
    // Replace with your backend API call
    const response = await fetch(
      `https://your-backend-api.com/prices?address=${address}`
    );
    const data = await response.json();
    setPrices(data);
  };

  return (
    <div>
      <div className="flex items-center justify-start gap-8 mb-10">
        <input
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border rounded px-2 py-1 bg-gray-100 w-[330px] text-[16px] font-semibold shadow-md"
        />
        <button
          onClick={handleSearch}
          className="w-[90px] text-white rounded-md text-[16px] font-semibold text-center bg-gradient-to-r from-[#F37120] via-[#F68C19] to-[#FFDD02]">
          Search
        </button>
      </div>
      <div className="flex items-center justify-around gap-2 mb-10">
        <div className="w-[209px] h-[209px]   bg-gradient-to-r from-[#F37120] via-[#F68C19] to-[#FFDD02]">
          <img
            src="/priceComparison/91.png"
            alt="91 logo"
            className="p-5 ml-2"
          />
          <img
            src="/priceComparison/Vector.png"
            alt="z logo"
            className="ml-28"
          />
          <div className="bg-[#00732E] w-[168px] font-semibold text-[14px] text-white text-center mt-6 mx-6 rounded-md">
            {prices ? (
              <span className="p-4">{prices.price1}</span>
            ) : (
              <span className="p-4">Price 1</span>
            )}
          </div>
        </div>
        <div className="w-[209px] h-[209px]  bg-gradient-to-r from-[#F37120] via-[#F68C19] to-[#FFDD02]">
          <img
            src="/priceComparison/95.png"
            alt="95 logo"
            className="p-5 ml-2"
          />
          <img
            src="/priceComparison/Vector.png"
            alt="z logo"
            className="ml-28"
          />
          Price 2:
        </div>
        <div className="w-[209px] h-[209px]   bg-gradient-to-r from-[#F37120] via-[#F68C19] to-[#FFDD02]">
          <img
            src="/priceComparison/D.png"
            alt="diesel logo"
            className="p-5 ml-2"
          />
          <img
            src="/priceComparison/Vector.png"
            alt="z logo"
            className="ml-28"
          />
          Price 3:
        </div>
      </div>
    </div>
  );
};

export default PriceDisplay;
