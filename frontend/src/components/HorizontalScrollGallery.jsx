import React, { useEffect } from "react";
import LazyImage from "./LazyImage";
import { loadImagesInChunks } from "../utils/performance";

const HorizontalScrollGallery = ({ images }) => {
  // Configuration: Speed in seconds per image
  // Adjust this value to control the speed of all galleries globally
  const SECONDS_PER_IMAGE = 5;

  // Shuffle images and use all of them (or limit if performance is an issue, e.g. 50)
  // Currently allowing all images as LazyImage handles the loading efficiency.
  const selectedImages = React.useMemo(() => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled;
  }, [images]);

  // Preload images in background with aggressive chunking
  useEffect(() => {
    if (selectedImages.length === 0) return;

    // Wait a bit for the initial render, then start preloading
    // We load 3 images every 150ms to keep it smooth
    const timeoutId = setTimeout(() => {
      loadImagesInChunks(selectedImages, 3, 150);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [selectedImages]);

  // Duplicate images to ensure seamless loop
  const loopImages = [...selectedImages, ...selectedImages];

  // Calculate duration based on number of images to maintain consistent speed
  const duration = Math.max(selectedImages.length * SECONDS_PER_IMAGE, 20);

  return (
    <div className="h-[600px] overflow-hidden relative w-full rounded-lg shadow-2xl bg-gray-900">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#111827] via-transparent to-[#111827] opacity-20"></div>

      {/* Moving container */}
      <div className="animate-horizontal-scroll flex flex-row h-full gap-4 items-center pl-4">
        {loopImages.map((src, index) => (
          <div key={index} className="h-[90%] flex-shrink-0 aspect-[4/3]">
            <LazyImage
              src={src}
              alt={`Gallery item ${index}`}
              className="w-full h-full object-cover rounded-md shadow-md hover:scale-[1.02] transition-transform duration-300"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes horizontal-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-horizontal-scroll {
          animation: horizontal-scroll ${duration}s linear infinite;
          width: max-content;
        }
        .animate-horizontal-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HorizontalScrollGallery;
