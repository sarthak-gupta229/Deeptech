import { Link } from "react-router-dom";

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white hover:bg-gray-200 transition-colors rounded-full w-10 h-10 flex items-center justify-center shrink-0"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="relative bg-[#6A0017] text-white overflow-hidden font-['Montserrat']">
      {/* Background Image Overlay - kept subtle opacity */}
      <div
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: "url('/footpic/footerbackgroundavif.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-20 py-10">
        {/* TOP SECTION: Logo | Building | Links */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between mb-12">
          {/* 1. Logo & Tagline Section */}
          <div className="flex-1 flex flex-col items-center justify-center lg:items-start lg:justify-center border-b lg:border-b-0 lg:border-r border-white/20 pb-8 lg:pb-0 lg:pr-16 min-w-[250px]">
            <div className="w-48 mb-4">
              <img
                src="/logo/rishihoodlogo.avif"
                alt="Rishihood University"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-xl font-normal tracking-wider text-white">
              व्यक्ति | विचार | व्यवस्था
            </p>
          </div>

          {/* 2. Middle Building Section */}
          <div className="flex-[2] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/20 py-8 lg:py-0 px-16">
            <div className="w-full max-w-xl">
              <img
                src="/logo/rishihoodstructure.avif"
                alt="University Structure"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* 3. Links Section */}
          <div className="flex-1 flex justify-center lg:justify-start pt-8 lg:pt-0 lg:pl-20 gap-8">
            {/* Resources Column */}
            <div className="text-left">
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <a
                    href="https://rishihood.edu.in/blogs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Media
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="text-left">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/90 whitespace-nowrap">
                <li>
                  <Link to="/our-story" className="hover:underline">
                    Our Story
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Schedule Campus Visit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Mandatory Disclosures
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* HORIZONTAL DIVIDER */}
        <div className="border-t border-white/20 w-full my-4"></div>

        {/* BOTTOM SECTION: Socials | Address | Button */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-4">
          {/* Left: Social Icons */}
          <div className="flex gap-4">
            <SocialIcon href="https://www.instagram.com/rishihooduni/?hl=en">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6A0017"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/rishihood/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6A0017"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://x.com/RishihoodUni/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#6A0017"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/school/rishihood/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6A0017"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com/@Rishihood">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6A0017"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.46 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon
                  points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                  fill="#6A0017"
                  stroke="none"
                ></polygon>
              </svg>
            </SocialIcon>
          </div>

          {/* Center: Address */}
          <div className="flex items-center text-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 shrink-0"
              viewBox="0 0 24 24"
              fill="white"
              stroke="none"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="text-lg">
              NH-44 (GT Road), Delhi NCR, Sonipat, Haryana 131021
            </span>
          </div>

          {/* Right: Apply Button */}
          <a
            href="https://apply.rishihood.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/50 rounded-lg py-2 px-8 hover:bg-white/10 transition-colors text-lg"
          >
            Apply Now
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center pt-4 border-t border-white/10">
          <p className="text-sm opacity-80">
            Rishihood University is established by Rishihood Foundation, <br />a
            non-profit company under Section 8 of the Companies Act, 2013. All
            Rights Reserved, {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
