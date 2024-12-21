import SearchBar from "./components/SearchBar";
import StationCard from "./components/StationCard";
import MapControls from "./components/MapControls";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FindFuelStation() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 px-12 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/banner.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="max-w-[1920px] mx-auto relative z-10 mt-8">
          <h1 className="text-8xl font-bold text-white tracking-wide relative">
            Find a fuel station near you
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full px-12 py-8 relative bg-split">
        {/* Content Container */}
        <div className="relative z-10">
          <div className="flex gap-8 h-[calc(100vh-300px)]">
            {/* Left Section - Search and Stations (50%) */}
            <div className="w-1/2 flex flex-col items-end">
              {/* Search Bar Section (65% width of left side) */}
              <div className="w-[65%] mb-8">
                <SearchBar />
              </div>

              {/* Stations List Section (65% width of left side) */}
              <div className="w-[65%] space-y-4 overflow-y-auto">
                <StationCard
                  name="Z Kingsway Station"
                  address="26 Clevedon Road, Papakura"
                  phone="09 298 3185"
                  hours={{
                    Sun: "24 Hours",
                    Mon: "24 Hours",
                    Tue: "24 Hours",
                    Wed: "24 Hours",
                    Thu: "24 Hours",
                    Fri: "24 Hours",
                    Sat: "24 Hours"
                  }}
                  services={["Shop", "Fuel", "Car Wash", "Air"]}
                />

                <StationCard
                  name="Z Papakura North"
                  address="254 Great South Road, Takanini, Auckland"
                  phone="09 298 3185"
                  hours={{
                    Sun: "5:00am - 10pm",
                    Mon: "5:00am - 10pm",
                    Tue: "5:00am - 10pm",
                    Wed: "5:00am - 10pm",
                    Thu: "5:00am - 10pm",
                    Fri: "5:00am - 10pm",
                    Sat: "5:00am - 10pm"
                  }}
                  services={["Shop", "Fuel", "Air"]}
                />
              </div>
            </div>

            {/* Map Section */}
            <div className="w-1/2 bg-gray-100 rounded-3xl relative">
              <MapControls />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}