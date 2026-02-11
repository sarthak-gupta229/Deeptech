import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [campusDropdownOpen, setCampusDropdownOpen] = useState(false);
  const aboutDropdownTimeoutRef = useRef(null);
  const campusDropdownTimeoutRef = useRef(null);

  const handleAboutMouseEnter = () => {
    if (aboutDropdownTimeoutRef.current) {
      clearTimeout(aboutDropdownTimeoutRef.current);
    }
    // Close campus dropdown when opening about
    setCampusDropdownOpen(false);
    if (campusDropdownTimeoutRef.current) {
      clearTimeout(campusDropdownTimeoutRef.current);
    }
    setAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutDropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 300);
  };

  const handleCampusMouseEnter = () => {
    if (campusDropdownTimeoutRef.current) {
      clearTimeout(campusDropdownTimeoutRef.current);
    }
    // Close about dropdown when opening campus
    setAboutDropdownOpen(false);
    if (aboutDropdownTimeoutRef.current) {
      clearTimeout(aboutDropdownTimeoutRef.current);
    }
    setCampusDropdownOpen(true);
  };

  const handleCampusMouseLeave = () => {
    campusDropdownTimeoutRef.current = setTimeout(() => {
      setCampusDropdownOpen(false);
    }, 300);
  };

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Our Campus", path: "/campus" },
    { name: "Admissions", path: "/admissions" },
  ];

  const aboutDropdownItems = [
    { name: "Our Story", href: "https://rishihood.edu.in/our-story" },
    { name: "Team", href: "https://rishihood.edu.in/rishihood-team" },
    {
      name: "Board of Founders",
      href: "https://rishihood.edu.in/board-of-founders",
    },
    { name: "Careers", href: "https://rishihood.edu.in/careers" },
  ];

  const campusDropdownItems = [
    {
      name: "Residences & Dining",
      href: "https://rishihood.edu.in/residences-and-dining",
    },
    {
      name: "Facilities & Infrastructure",
      href: "https://rishihood.edu.in/facilities",
    },
    {
      name: "Safety, Health & Accessibility",
      href: "https://rishihood.edu.in/health-and-safety",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#D2D2D2]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
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
              {navLinks.map((link) =>
                link.name === "About" ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}
                  >
                    <button className="text-[#666666] hover:text-[#CC0033] px-1 py-2 text-[15px] font-medium transition-colors duration-200 flex items-center gap-1">
                      {link.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          aboutDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {aboutDropdownOpen && (
                      <div className="absolute left-0 top-full mt-1 w-56 bg-[#ffedd2] border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                        {aboutDropdownItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-[14px] text-[#666666] hover:text-[#CC0033] transition-colors duration-200"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : link.name === "Our Campus" ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleCampusMouseEnter}
                    onMouseLeave={handleCampusMouseLeave}
                  >
                    <button className="text-[#666666] hover:text-[#CC0033] px-1 py-2 text-[15px] font-medium transition-colors duration-200 flex items-center gap-1">
                      {link.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          campusDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {campusDropdownOpen && (
                      <div className="absolute left-0 top-full mt-1 w-64 bg-[#ffedd2] border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                        {campusDropdownItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-[14px] text-[#666666] hover:text-[#CC0033] transition-colors duration-200"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : link.name === "Admissions" ? (
                  <a
                    key={link.name}
                    href="https://rishihood.edu.in/admissions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666666] hover:text-[#CC0033] px-1 py-2 text-[15px] font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ) : (
                  <span
                    key={link.name}
                    className="text-[#666666] hover:text-[#CC0033] px-1 py-2 text-[15px] font-medium transition-colors duration-200 cursor-default"
                  >
                    {link.name}
                  </span>
                ),
              )}
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
            {navLinks.map((link) =>
              link.name === "About" ? (
                <div key={link.name}>
                  <button
                    onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                    className="text-[#666666] hover:text-[#CC0033] hover:bg-gray-50 flex items-center justify-between w-full px-3 py-3 rounded-md text-base font-medium"
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        aboutDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {aboutDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      {aboutDropdownItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-2 text-sm text-[#666666] hover:text-[#CC0033] hover:bg-gray-50 rounded-md"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.name === "Our Campus" ? (
                <div key={link.name}>
                  <button
                    onClick={() => setCampusDropdownOpen(!campusDropdownOpen)}
                    className="text-[#666666] hover:text-[#CC0033] hover:bg-gray-50 flex items-center justify-between w-full px-3 py-3 rounded-md text-base font-medium"
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        campusDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {campusDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      {campusDropdownItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-2 text-sm text-[#666666] hover:text-[#CC0033] hover:bg-gray-50 rounded-md"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.name === "Admissions" ? (
                <a
                  key={link.name}
                  href="https://rishihood.edu.in/admissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#666666] hover:text-[#CC0033] hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ) : (
                <span
                  key={link.name}
                  className="text-[#666666] hover:text-[#CC0033] hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium cursor-default"
                >
                  {link.name}
                </span>
              ),
            )}
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
