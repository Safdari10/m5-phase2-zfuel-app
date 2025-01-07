"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Top section with logo and buttons */}
      <div className="max-w-[1280px] mx-auto mt-2 px-4 md:px-12 h-24 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4 md:gap-20">
          <a href="/" className="flex items-center">
            <Image 
              src="/images/z_fuel_logo.png" 
              alt="Z Fuel Logo" 
              width={40}
              height={40}
              priority
              className="h-16 md:h-20 w-auto ml-2 md:ml-14"
            />
          </a>
          <Button variant="ghost" className="hidden md:block bg-[#FF6B00] text-white hover:bg-[#e66000] text-2xl px-8 h-12 rounded-lg">
            For personal
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Right side - Desktop */}
        <div className="hidden md:flex items-center gap-20">
          <a href="/" className="text-2xl font-medium">Z App</a>
          <a href="/" className="text-2xl font-medium">About Z</a>
          <a href="/" className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </a>
          <a href="/" className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </a>
          <Button className="bg-gradient-to-r from-[#1E196B] to-[#3129AB] text-white hover:from-[#161450] hover:to-[#2a2391] text-2xl px-4 h-16 rounded-lg flex items-center gap-3 mr-10">
            Login
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-white text-[#161450] rounded-full" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-white shadow-lg z-50 px-4 py-6">
          <div className="flex flex-col gap-4">
            <Button variant="ghost" className="bg-[#FF6B00] text-white hover:bg-[#e66000] text-xl w-full justify-start">
              For personal
            </Button>
            <a href="/" className="text-xl font-medium py-2">Z App</a>
            <a href="/" className="text-xl font-medium py-2">About Z</a>
            <div className="flex gap-4 py-2">
              <a href="/" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </a>
              <a href="/" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </div>
            <Button className="bg-gradient-to-r from-[#1E196B] to-[#3129AB] text-white hover:from-[#161450] hover:to-[#2a2391] text-xl h-12 rounded-lg flex items-center justify-between px-4">
              Login
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-white text-[#161450] rounded-full" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>
      )}

      {/* Bottom navigation section */}
      <div className="hidden md:block">
        <div className="max-w-[1280px] mx-auto mt-2 px-12">
          <nav className="flex gap-12 ml-14">
            <a href="/" className="py-4 text-2xl font-medium hover:text-[#FF6B00] flex items-center gap-2">
              How to enjoy Z station
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="/" className="py-4 text-2xl font-medium hover:text-[#FF6B00] flex items-center gap-2">
              Reward and promotion
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="/" className="py-4 text-2xl font-medium hover:text-[#FF6B00] flex items-center gap-2">
              Location
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}