import React, { useState, useEffect, useCallback } from "react";
import LazyImage from "./LazyImage";
import { getOptimizedImageUrl } from "../utils/imageOptimizer";

// Inline SVG Icons
const XIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 18 18" />
  </svg>
);

const ChevronLeftIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const PlusIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

import { loadImagesInChunks } from "../utils/performance";

const ServiceGallery = ({ images, id }) => {
  const [shuffledImages, setShuffledImages] = useState(() => {
    // Initial shuffle if images are provided
    return images && images.length > 0
      ? [...images].sort(() => 0.5 - Math.random())
      : [];
  });

  // Calculate initial visible count based on screen width to show max 2 rows
  const getInitialCount = () => {
    if (typeof window === "undefined") return 8; // Default
    const width = window.innerWidth;
    if (width >= 1024) return 8; // 4 cols * 2 rows
    if (width >= 768) return 6; // 3 cols * 2 rows
    if (width >= 640) return 4; // 2 cols * 2 rows
    return 2; // 1 col * 2 rows
  };

  const [visibleCount, setVisibleCount] = useState(getInitialCount);
  const [modalIndex, setModalIndex] = useState(null);

  // Track loading of priority images
  const [priorityImagesLoadedCount, setPriorityImagesLoadedCount] = useState(0);
  const [isGalleryReady, setIsGalleryReady] = useState(false);

  useEffect(() => {
    // Shuffle images when images prop changes
    if (images && images.length > 0) {
      const shuffled = [...images].sort(() => 0.5 - Math.random());
      setShuffledImages(shuffled);

      // Reset loading state when images change
      setPriorityImagesLoadedCount(0);
      setIsGalleryReady(false);
    }
  }, [images]);

  // Check if all priority images are loaded
  useEffect(() => {
    if (shuffledImages.length > 0) {
      // We consider the gallery ready when the first 8 (or all if less than 8) images are loaded
      const priorityCount = Math.min(8, shuffledImages.length);

      if (priorityImagesLoadedCount >= priorityCount) {
        // Add a small delay to ensure the spinner is visible for at least a moment (smoother UX)
        // or to allow the browser to paint the loaded images before fading in
        const timer = setTimeout(() => {
          setIsGalleryReady(true);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [priorityImagesLoadedCount, shuffledImages.length]);

  const handleImageLoad = useCallback(() => {
    setPriorityImagesLoadedCount((prev) => prev + 1);
  }, []);

  // Progressive Chunk Preloading - PREFETCH NEXT BATCH ONLY
  // This starts loading the NEXT 10 images in the background so they are ready when user clicks "Load More"
  // But it STOPS there, respecting the user's "only 10" rule.
  useEffect(() => {
    if (shuffledImages.length === 0) return;

    // Determine the next batch to preload (exactly the amount that would be loaded on click)
    const nextBatch = shuffledImages.slice(visibleCount, visibleCount + 10);

    if (nextBatch.length === 0) return;

    // Start preloading with a small delay to prioritize current UI
    const timeoutId = setTimeout(() => {
      // Load these 10 images in small chunks to avoid blocking
      loadImagesInChunks(nextBatch, 3, 100);
    }, 2000); // Wait 2 seconds after render/visibleCount change before starting prefetch

    return () => {
      clearTimeout(timeoutId);
    };
  }, [visibleCount, shuffledImages]);

  const loadMore = useCallback(() => {
    // Load exactly 10 more images
    setVisibleCount((prev) => Math.min(prev + 10, shuffledImages.length));
  }, [shuffledImages.length]);

  const openModal = (index) => {
    setModalIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeModal = () => {
    setModalIndex(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev + 1) % shuffledImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setModalIndex(
      (prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length
    );
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight")
        setModalIndex((prev) => (prev + 1) % shuffledImages.length);
      if (e.key === "ArrowLeft")
        setModalIndex(
          (prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length
        );
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex, shuffledImages.length]);

  return (
    <div className="w-full min-h-[400px]">
      {/* Loading State */}
      {!isGalleryReady && shuffledImages.length > 0 && (
        <div className="flex flex-col items-center justify-center h-[400px] w-full animate-pulse">
          <div className="w-16 h-16 border-4 border-bmw-blue border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400 text-sm">Galéria betöltése...</p>
        </div>
      )}

      {/* Gallery Grid - Hidden until ready but rendering to trigger loads */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-opacity duration-700 ${
          isGalleryReady ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        {shuffledImages.slice(0, visibleCount).map((src, index) => (
          <div
            key={`${id}-${index}`}
            className="relative rounded-lg cursor-pointer group shadow-lg overflow-hidden"
            onClick={() => openModal(index)}
          >
            <LazyImage
              src={src}
              alt={`Gallery Image ${index + 1}`}
              aspectRatio="aspect-[4/3]"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              priority={index < 8} // Prioritize first 8 images
              onLoadComplete={index < 8 ? handleImageLoad : undefined}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
              <PlusIcon className="text-white w-8 h-8" />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button - Only show when ready */}
      {isGalleryReady && visibleCount < shuffledImages.length && (
        <div className="mt-8 flex justify-center py-4">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-bmw-blue text-white font-medium rounded-full hover:bg-bmw-blue/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            További képek betöltés
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            onClick={closeModal}
          >
            <XIcon size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-50 hidden md:block"
            onClick={prevImage}
          >
            <ChevronLeftIcon size={40} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-50 hidden md:block"
            onClick={nextImage}
          >
            <ChevronRightIcon size={40} />
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={shuffledImages[modalIndex]}
              alt="Full screen"
              className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
            />
            <div className="absolute bottom-[-40px] left-0 right-0 text-center text-white text-sm">
              {modalIndex + 1} / {shuffledImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceGallery;
