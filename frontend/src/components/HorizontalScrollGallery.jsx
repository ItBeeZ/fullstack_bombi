import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "./LazyImage";

const HorizontalScrollGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Shuffle images on mount to keep randomness
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    if (images && images.length > 0) {
      setShuffledImages([...images].sort(() => 0.5 - Math.random()));
    }
  }, [images]);

  useEffect(() => {
    if (shuffledImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [shuffledImages]);

  if (!shuffledImages || shuffledImages.length === 0) return null;

  return (
    <div className="h-[600px] overflow-hidden relative w-full rounded-lg shadow-2xl bg-gray-900 flex items-center justify-center">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#111827] via-transparent to-[#111827] opacity-20"></div>

      {/* Background blur effect for immersion */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={shuffledImages[currentIndex]}
          alt="Background blur"
          className="w-full h-full object-cover blur-2xl transition-all duration-1000 ease-in-out"
        />
      </div>

      {/* Main Slideshow Image */}
      <div className="relative z-10 h-[90%] aspect-[4/3] shadow-2xl rounded-lg overflow-hidden bg-black/50">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <LazyImage
              src={shuffledImages[currentIndex]}
              alt={`Gallery item ${currentIndex}`}
              className="w-full h-full object-cover"
              aspectRatio="aspect-[4/3]"
              priority={true} // Always eager load the current slideshow image
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HorizontalScrollGallery;
