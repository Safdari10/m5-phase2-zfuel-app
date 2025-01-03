import Footer from "@/components/Footer";
import Header from "@/components/Header";

import React from "react";

const PriceComparisonPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <img src="/images/compare" alt="heading image for page" />
        <img src="/images/price_compare" alt="hero image for page" />
        <h1>Compare Price Across Stations</h1>
      </main>
      <Footer />
    </div>
  );
};

export default PriceComparisonPage;
