import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    id: 1,
    thumbnail: "/video-thumbnails/thumb1.jpg", // Placeholder
    title: "Rishihood University's Global Study Treks Explained",
    handle: "@rishihooduni",
    videoUrl: "#", // Placeholder
  },
  {
    id: 2,
    thumbnail: "/video-thumbnails/thumb2.jpg", // Placeholder
    title: "Why students love our program on B.Sc Psychology",
    handle: "@rishihooduni",
    videoUrl: "#",
  },
  {
    id: 3,
    thumbnail: "/video-thumbnails/thumb3.jpg", // Placeholder
    title: "Rishihood University's Global Study Treks Explained",
    handle: "@rishihooduni",
    videoUrl: "#",
  },
  {
    id: 4,
    thumbnail: "/video-thumbnails/thumb4.jpg", // Placeholder
    title: "Campus Life at Rishihood",
    handle: "@rishihooduni",
    videoUrl: "#",
  },
];

const extendedVideos = [...videos, ...videos, ...videos];

const LifeAtRishihood = () => {
  const [startIndex, setStartIndex] = useState(videos.length);
  const [isResetting, setIsResetting] = useState(false);

  const nextSlide = () => {
    setStartIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setStartIndex((prev) => prev - 1);
  };

  const handleAnimationComplete = () => {
    if (startIndex >= 2 * videos.length) {
      setIsResetting(true);
      setStartIndex(startIndex - videos.length);
    } else if (startIndex < videos.length) {
      setIsResetting(true);
      setStartIndex(startIndex + videos.length);
    }
  };

  React.useEffect(() => {
    if (isResetting) {
      const timer = setTimeout(() => {
        setIsResetting(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isResetting]);

  return (
    <div className="w-full bg-[#fcf7ef] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-[40%] flex flex-col space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#D11333] leading-tight font-['Montserrat']">
            Experience life <br />
            at Rishihood University
          </h2>
          <p className="text-gray-600 text-base leading-relaxed font-light max-w-sm">
            Discover what top academics, entrepreneurs, and your fellow students
            think about Rishihood University and why they believe in our culture
            and innovation.
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all bg-[#D11333] hover:bg-[#a80623] text-white shadow-lg cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all bg-[#D11333] hover:bg-[#a80623] text-white shadow-lg cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Right Carousel */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-[60%] relative"
        >
          <div className="overflow-hidden w-full py-10 -my-10 px-4 -mx-4">
            <motion.div
              className="flex gap-6 w-full"
              initial={false}
              animate={{
                marginLeft: `calc(-${startIndex} * ((100% + 24px) / 3))`,
              }}
              transition={
                isResetting
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 300, damping: 30 }
              }
              onAnimationComplete={handleAnimationComplete}
            >
              {extendedVideos.map((video, index) => (
                <div
                  key={`${video.id}-${index}`}
                  className="w-[calc((100%-48px)/3)] aspect-9/16 relative bg-black rounded-2xl overflow-hidden shadow-xl group cursor-pointer shrink-0"
                >
                  {/* Thumbnail Image */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/360x640/900/FFF?text=Video+Thumbnail";
                    }}
                  />

                  {/* Gradient Overlay for Text Visibility */}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/80"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-white ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Handle */}
                  <div className="absolute bottom-6 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full p-0.5 overflow-hidden">
                      {/* Logo Image */}
                      <img
                        src="/logo/logo_only.avif"
                        alt="Rishihood Logo"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <span className="text-white font-medium text-sm drop-shadow-md">
                      {video.handle}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Sidebar floating text (Download Brochure) - Absolute positioned on the right edge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden 2xl:flex">
        <button className="bg-[#D11333] text-white py-8 px-2 rounded-l-lg writing-vertical font-semibold tracking-wide hover:bg-[#a80623] transition-colors shadow-lg">
          Download Brochure
        </button>
      </div>
      {/* CSS for writing-vertical if not in Tailwind standard configuration, usually writing-mode: vertical-rl */}
      <style>{`
         .writing-vertical {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(180deg);
         }
       `}</style>
    </div>
  );
};

export default LifeAtRishihood;
