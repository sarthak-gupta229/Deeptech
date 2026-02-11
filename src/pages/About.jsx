import { motion } from "framer-motion";
import ImageCarousel from "../components/ImageCarousel";
const About = () => {
  return (
    <div className="w-full">
      {/* Hero Carousel Section - Full Width */}
      <div className="w-full">
        <ImageCarousel />
      </div>

      {/* About Section */}
      <div className="w-full bg-[#fcf7ef] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Top Row: Info + Image (Inward Animation) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">
            {/* Left Content Card - Slides from Left */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center"
            >
              <h2 className="text-[#D11333] font-bold text-2xl md:text-3xl mb-6">
                About DeepTech Bootcamp
              </h2>
              <p className="font-bold text-gray-900 text-lg mb-4">
                Aligned with the India Semiconductor Mission (ISM) a national
                initiative to establish India as a global hub
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The Deeptech BootCamp is a 7-day, on-campus learning experience
                designed to help participants explore and engage with India's
                rapidly evolving semiconductor and emerging tech ecosystem.
              </p>
              <button className="w-max px-8 py-3 bg-[#D11333] text-white font-semibold rounded-lg hover:bg-[#a30029] transition-colors shadow-md">
                Download Brochure
              </button>
            </motion.div>

            {/* Right Image - Slides from Right */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-gray-200 rounded-2xl overflow-hidden min-h-[300px] h-full relative group"
            >
              <img
                src="/photos/Gautam-R-Desiraju-01.jpg"
                alt="DeepTech Speaker"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </motion.div>
          </div>

          {/* Middle Row: Features (Towards Right Animation) */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
                <svg
                  className="w-12 h-12 text-[#D11333] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <p className="text-gray-800 font-medium">
                  7 Days of Understanding India's Silicon Journey
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
                <svg
                  className="w-12 h-12 text-[#D11333] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <p className="text-gray-800 font-medium">
                  55+ Hours of Immersive Learning in Deeptech
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
                <svg
                  className="w-12 h-12 text-[#D11333] mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-800 font-medium">
                  10+ Industry Experts and Innovation Mentors
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Row: Date & Location (Inward Animation) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
            {/* Date - Slides from Left */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6"
            >
              <div className="shrink-0">
                <svg
                  className="w-10 h-10 text-[#D11333]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-800">
                April 2026
              </span>
            </motion.div>

            {/* Location - Slides from Right */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6"
            >
              <div className="shrink-0">
                <svg
                  className="w-10 h-10 text-[#D11333]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-800">
                Rishihood University Campus
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
