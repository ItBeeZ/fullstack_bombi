import React, { useState, useEffect, useRef, useCallback } from "react";
import LazyImage from "./LazyImage";

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

const ServiceGallery = ({ images, id }) => {
  const [shuffledImages, setShuffledImages] = useState([]);

  // Calculate initial visible count based on screen width to show max 3 rows
  const getInitialCount = () => {
    if (typeof window === "undefined") return 12; // Default
    const width = window.innerWidth;
    if (width >= 1024) return 12; // 4 cols * 3 rows
    if (width >= 768) return 9; // 3 cols * 3 rows
    if (width >= 640) return 6; // 2 cols * 3 rows
    return 3; // 1 col * 3 rows
  };

  const [visibleCount, setVisibleCount] = useState(getInitialCount);
  const [modalIndex, setModalIndex] = useState(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    // Shuffle images on mount
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    setShuffledImages(shuffled);
  }, [images]);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + 8, shuffledImages.length));
  }, [shuffledImages.length]);

  // Infinite Scroll Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && visibleCount < shuffledImages.length) {
        loadMore();
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [visibleCount, shuffledImages.length, loadMore]);

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
    <div className="w-full">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shuffledImages.slice(0, visibleCount).map((src, index) => (
          <div
            key={`${id}-${index}`}
            className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group shadow-lg"
            onClick={() => openModal(index)}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <PlusIcon className="text-white w-8 h-8" />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < shuffledImages.length && (
        <div className="mt-6 text-center">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-bmw-blue text-white rounded-md hover:bg-blue-700 transition duration-300 font-semibold text-sm uppercase tracking-wider"
          >
            További képek betöltése
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
