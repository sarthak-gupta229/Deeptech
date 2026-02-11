import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Our Campus", path: "/campus" },
    { name: "Admissions", path: "/admissions" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#D2D2D2]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center -ml-2">
            <a
              href="https://rishihood.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-12 w-auto object-contain"
                src="/logo/coloredlogo.avif"
                alt="Rishihood University"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <span
                  key={link.name}
                  className="text-[#666666] hover:text-[#CC0033] px-1 py-2 text-[15px] font-medium transition-colors duration-200 cursor-default"
                >
                  {link.name}
                </span>
              ))}
            </div>

            {/* Apply Now Button */}
            <button className="group flex items-center gap-2 px-4 py-2 bg-white border border-[#CC0033] rounded-lg hover:bg-[#CC0033] transition-all duration-300 cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-[#CC0033] group-hover:bg-white transition-colors duration-80 animate-blink"></div>
              <span className="text-[#CC0033] group-hover:text-white font-semibold text-sm">
                Apply Now
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#CC0033] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="xl:hidden bg-white border-t border-gray-100"
          id="mobile-menu"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <span
                key={link.name}
                className="text-[#666666] hover:text-[#CC0033] hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium cursor-default"
              >
                {link.name}
              </span>
            ))}
            <button className="flex items-center gap-2 px-3 py-3 text-[#CC0033] font-semibold text-base hover:bg-gray-50 rounded-md cursor-pointer w-full text-left">
              <div className="w-2 h-2 rounded-full bg-[#CC0033] animate-blink"></div>
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
