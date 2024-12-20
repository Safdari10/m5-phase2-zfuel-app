"use client";

import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="">
      <Header />
      <main className="">Welcome to the home page</main>
      <Footer />
    </div>
  );
};

export default Home;
