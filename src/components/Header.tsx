"use client";

import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top section */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 h-24 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24">
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
          {/* "For personal" button */}
          <Button variant="ghost" className="bg-[#FF6B00] text-white hover:bg-[#e66000] text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-10 sm:h-12 rounded-lg whitespace-nowrap">
            For personal
          </Button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          <Link href="/z-app" className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium hidden sm:block">Z App</Link>
          <Link href="/about-z" className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium hidden sm:block">About Z</Link>
          {/* Cart Icon */}
          <Link href="/cart" className="p-1 sm:p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
          {/* Search Icon */}
          <Link href="/search" className="p-1 sm:p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
          {/* Login Button */}
          <Link href="/login">
            <Button className="bg-[#1E196B] text-white hover:bg-[#161450] text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-10 sm:h-12 rounded-lg flex items-center gap-2 sm:gap-3 md:gap-4 whitespace-nowrap">
              Login
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom navigation section */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-2 sm:py-3 md:py-4 overflow-x-auto">
        <div className="flex justify-between items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 min-w-max">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base sm:text-lg md:text-xl whitespace-nowrap">How to enjoy Z station</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <Link href="/how-to-enjoy">Guidelines</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base sm:text-lg md:text-xl whitespace-nowrap">Reward and promotion</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <Link href="/rewards">Offers</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base sm:text-lg md:text-xl whitespace-nowrap">Location</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <Link href="/locations">Nearby Stations</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/create-account">
            <Button className="bg-[#1E196B] text-white hover:bg-[#161450] text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-10 sm:h-12 rounded-lg flex items-center gap-2 sm:gap-3 md:gap-4 whitespace-nowrap">
              Create Account
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
