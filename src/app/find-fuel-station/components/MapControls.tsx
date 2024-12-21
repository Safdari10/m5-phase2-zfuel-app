"use client";

export default function MapControls() {
  return (
    <div className="absolute right-6 top-6 flex flex-col gap-3">
      <button className="bg-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-4xl">
        +
      </button>
      <button className="bg-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-4xl">
        -
      </button>
    </div>
  );
} 