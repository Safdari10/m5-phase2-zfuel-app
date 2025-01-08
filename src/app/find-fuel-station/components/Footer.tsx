export default function Footer() {
  const productsLinks = [
    { text: "At the station", href: "/" },
    { text: "Z app", href: "/" },
    { text: "Rewards and promotions", href: "/" }
  ];

  const businessLinks = [
    { text: "Z Business fuel card", href: "/" },
    { text: "Fuels and services", href: "/" },
    { text: "Business tips and stories", href: "/" }
  ];

  const aboutLinks = [
    { text: "Our story", href: "/" },
    { text: "Our people", href: "/" },
    { text: "What we stand for", href: "/" },
    { text: "Sustainability", href: "/" },
    { text: "News", href: "/" },
    { text: "Careers at Z", href: "/" },
    { text: "Corporate Centre", href: "/" }
  ];

  return (
    <footer className="bg-[#F8F8F8] mt-auto py-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="flex items-start gap-16">
          {/* Logo Container */}
          <div className="shrink-0">
            <a href="/">
              <img
                src="/images/z_fuel_logo.png"
                alt="Z Energy Logo"
                className="h-12 sm:h-16 md:h-20 w-auto"
              />
            </a>
          </div>

          {/* Content Container */}
          <div className="flex-1 flex justify-between gap-16">
            {/* Products and Services */}
            <div>
              <h3 className="text-[#1E196B] font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-6">Products and Services</h3>
              <ul className="space-y-4">
                {productsLinks.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="hover:underline text-base sm:text-lg md:text-xl lg:text-2xl">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Businesses */}
            <div>
              <h3 className="text-[#1E196B] font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-6">For businesses</h3>
              <ul className="space-y-4">
                {businessLinks.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="hover:underline text-base sm:text-lg md:text-xl lg:text-2xl">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Z */}
            <div>
              <h3 className="text-[#1E196B] font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-6">About Z</h3>
              <ul className="space-y-4">
                {aboutLinks.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="hover:underline text-base sm:text-lg md:text-xl lg:text-2xl">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <a
              href="/contact"
              className="bg-[#FF6B00] text-white hover:bg-[#e66000] text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-10 sm:h-12 rounded-full flex items-center gap-2 sm:gap-3 md:gap-4 whitespace-nowrap font-roboto font-bold"
            >
              Contact us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}