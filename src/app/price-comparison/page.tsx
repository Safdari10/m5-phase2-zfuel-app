import Footer from "./components/Footer";
import Header from "./components/Header";
import PriceDisplay from "./components/PriceDisplay";

const PriceComparisonPage = () => {
  return (
    <div>
      <Header />
      <main className="max-w-[1280px] mx-auto px-12">
        <div className="flex flex-col justify-center align-middle gap-16 mt-2">
          <img
            src="/priceComparison/compare.png"
            alt="heading image for page"
            className="h-[200px] my-4"
          />
          <img
            src="/priceComparison/price_compare.png"
            alt="hero image for page"
            className="h-[493px] my-4"
          />
        </div>
        <h1 className="text-[#1E196B] font-bold text-[20px] my-24 ml-24">
          Compare Price Across Stations
        </h1>
        <div className="mb-96">
          <PriceDisplay />
          <PriceDisplay />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PriceComparisonPage;