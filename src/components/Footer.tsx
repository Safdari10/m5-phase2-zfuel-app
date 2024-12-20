export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] mt-auto pt-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and contact button */}
        <div className="flex justify-between items-center mb-8 px-4">
          <a href="/">
            <img
              src="/images/z_fuel_logo.png"
              alt="Z Energy Logo"
              className="h-12 w-auto"
            />
          </a>
          <a
            href="/contact"
            className="bg-[#FF6B00] text-white px-4 py-2 rounded-full hover:bg-[#e66000] transition-colors flex items-center gap-2"
          >
            Contact us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-3 gap-8 px-4">
          {/* Products and Services */}
          <div>
            <h3 className="text-[#1E196B] font-bold text-lg mb-4">Products and Services</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Fuel Products</a></li>
              <li><a href="/" className="hover:underline">Car Wash</a></li>
              <li><a href="/" className="hover:underline">Shop</a></li>
              <li><a href="/" className="hover:underline">Gift Cards</a></li>
            </ul>
          </div>

          {/* For Businesses */}
          <div>
            <h3 className="text-[#1E196B] font-bold text-lg mb-4">For Businesses</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Fleet Solutions</a></li>
              <li><a href="/" className="hover:underline">Business Accounts</a></li>
              <li><a href="/" className="hover:underline">Fuel Cards</a></li>
              <li><a href="/" className="hover:underline">Partner with Z</a></li>
            </ul>
          </div>

          {/* About Z */}
          <div>
            <h3 className="text-[#1E196B] font-bold text-lg mb-4">About Z</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Our Story</a></li>
              <li><a href="/" className="hover:underline">Sustainability</a></li>
              <li><a href="/" className="hover:underline">Careers</a></li>
              <li><a href="/" className="hover:underline">News</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}