export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] mt-auto py-24">
      <div className="max-w-[1920px] mx-auto px-12">
        <div className="flex items-start gap-16">
          {/* Logo Container */}
          <div className="w-[300px] flex justify-center">
            <a href="/" className="shrink-0">
              <img
                src="/images/z_fuel_logo.png"
                alt="Z Energy Logo"
                className="h-20 w-auto"
              />
            </a>
          </div>

          {/* Content Container */}
          <div className="flex-1 flex justify-between gap-16">
            {/* Products and Services */}
            <div>
              <h3 className="text-[#1E196B] font-bold text-3xl mb-8">Products and Services</h3>
              <ul className="space-y-6">
                <li><a href="/" className="hover:underline text-2xl">At the station</a></li>
                <li><a href="/" className="hover:underline text-2xl">Z app</a></li>
                <li><a href="/" className="hover:underline text-2xl">Rewards and promotions</a></li>
              </ul>
            </div>

            {/* For Businesses */}
            <div>
              <h3 className="text-[#1E196B] font-bold text-3xl mb-8">For businesses</h3>
              <ul className="space-y-6">
                <li><a href="/" className="hover:underline text-2xl">Z Business fuel card</a></li>
                <li><a href="/" className="hover:underline text-2xl">Fuels and services</a></li>
                <li><a href="/" className="hover:underline text-2xl">Business tips and stories</a></li>
              </ul>
            </div>

            {/* About Z */}
            <div>
              <h3 className="text-[#1E196B] font-bold text-3xl mb-8">About Z</h3>
              <ul className="space-y-6">
                <li><a href="/" className="hover:underline text-2xl">Our story</a></li>
                <li><a href="/" className="hover:underline text-2xl">Our people</a></li>
                <li><a href="/" className="hover:underline text-2xl">What we stand for</a></li>
                <li><a href="/" className="hover:underline text-2xl">Sustainability</a></li>
                <li><a href="/" className="hover:underline text-2xl">News</a></li>
                <li><a href="/" className="hover:underline text-2xl">Careers at Z</a></li>
                <li><a href="/" className="hover:underline text-2xl">Corporate Centre</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <a
              href="/contact"
              className="bg-[#FF6B00] text-white px-10 py-4 rounded-full hover:bg-[#e66000] transition-colors flex items-center gap-4 text-2xl self-start -mt-20"
            >
              Contact us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}