import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/CarouselHero/herochip.jpeg",
  "/CarouselHero/IMG_5747.JPG",
  "/CarouselHero/IMG_6040.JPG",
  "/CarouselHero/IMG_5798.JPG",
  "/CarouselHero/IMG_5949.JPG",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Preload images for smoother transitions
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay - Bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-10" />

      {/* Dark Gradient Overlay - Left */}
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none z-10" />

      {/* Hero Content */}
      <div className="absolute bottom-12 md:bottom-16 left-6 md:left-12 z-20 max-w-4xl pr-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black italic tracking-tighter text-white mb-2 drop-shadow-2xl whitespace-nowrap">
          DeepTech <span className="text-[#f3292a]">BootCamp</span>
        </h1>
        <p className="text-base md:text-xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
          Design. Innovate. Dominate.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2 md:px-6 md:py-2.5 bg-[#D11333] text-white text-sm font-bold rounded-lg hover:bg-[#a30029] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
            Apply now
          </button>
          <button className="px-5 py-2 md:px-6 md:py-2.5 bg-transparent border-2 border-white text-white text-sm font-bold rounded-lg hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Download Brochure
          </button>
        </div>
      </div>

      {/* Navigation Dots (Optional, for better UX) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
