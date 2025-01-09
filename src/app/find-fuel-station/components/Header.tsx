"use client";

import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Menu, X, Search, ShoppingCart, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/z-app", text: "Z App" },
    { href: "/about-z", text: "About Z" }
  ];

  const bottomNavLinks = [
    { href: "/how-to-enjoy", text: "How to enjoy Z station" },
    { href: "/rewards", text: "Reward and promotion" },
    { href: "/locations", text: "Location" }
  ];

  return (
    <header className="w-full relative">
      {/* Top section */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 h-24 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/z_fuel_logo.png"
              alt="Z Fuel Logo"
              width={120}
              height={40}
              priority
              className="h-12 sm:h-16 md:h-20 w-auto"
            />
          </Link>
          {/* "For personal" button - Desktop only */}
          <Button variant="ghost" className="hidden md:block bg-[#FF6B00] text-white hover:bg-[#e66000] text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-10 sm:h-12 rounded-lg whitespace-nowrap">
            For personal
          </Button>
        </div>

        {/* Right side - Desktop */}
        <div className="hidden md:flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-black hover:text-gray-600 transition-colors font-bold"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="p-2">
              <ShoppingCart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </Link>
            <Link href="/search" className="p-2">
              <Search className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </Link>
          </div>

          {/* Login Button */}
          <Button className="bg-[#1E2A78] text-white hover:bg-[#161f5c] text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-10 sm:h-12 rounded-lg flex items-center gap-2">
            Login
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 right-0 bg-white shadow-lg z-50 rounded-l-xl">
          <div className="px-8 py-6 flex flex-col gap-4 min-w-[250px]">
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-black hover:text-gray-600 transition-colors font-bold whitespace-nowrap"
              >
                {link.text}
              </Link>
            ))}
            
            {/* Icons in Mobile Menu */}
            <div className="flex items-center gap-4 py-2">
              <Link href="/cart" className="p-2">
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <Link href="/search" className="p-2">
                <Search className="h-6 w-6" />
              </Link>
            </div>

            {/* Login Button */}
            <Button className="bg-[#1E2A78] text-white hover:bg-[#161f5c] text-lg w-full rounded-lg flex items-center justify-center gap-2">
              Login
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Bottom Navigation Links */}
            <div className="mt-4 pt-4 border-t">
              {bottomNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-base sm:text-lg md:text-xl lg:text-2xl text-black hover:text-gray-600 transition-colors font-bold whitespace-nowrap"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation - Desktop */}
      <nav className="hidden md:block border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 h-14 flex items-center">
          <div className="flex items-center gap-8">
            {bottomNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-black hover:text-gray-600 transition-colors font-bold group flex items-center gap-1"
              >
                {link.text}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
