import React, { useState, useEffect, useCallback } from "react";
import LazyImage from "./LazyImage";


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

const ServiceGallery = ({ images, id, priorityImages = [] }) => {
  const [shuffledImages, setShuffledImages] = useState([]);

  
  const getInitialCount = () => {
    if (typeof window === "undefined") return 8; 
    const width = window.innerWidth;
    if (width >= 1024) return 8; 
    if (width >= 768) return 6; 
    if (width >= 640) return 4; 
    return 2; 
  };

  const [visibleCount, setVisibleCount] = useState(getInitialCount);
  const [modalIndex, setModalIndex] = useState(null);

  useEffect(() => {
    if (priorityImages && priorityImages.length > 0) {
      
      const rest = images.filter((img) => !priorityImages.includes(img));
      const shuffledRest = [...rest].sort(() => 0.5 - Math.random());
      setShuffledImages([...priorityImages, ...shuffledRest]);
    } else {
      
      const shuffled = [...images].sort(() => 0.5 - Math.random());
      setShuffledImages(shuffled);
    }
  }, [images, priorityImages]);

  const loadMore = useCallback(() => {
    
    setVisibleCount((prev) => Math.min(prev + 10, shuffledImages.length));
  }, [shuffledImages.length]);

  const openModal = (index) => {
    setModalIndex(index);
    document.body.style.overflow = "hidden"; 
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
      {}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
              priority={index < 8} 
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
              <PlusIcon className="text-white w-8 h-8" />
            </div>
          </div>
        ))}
      </div>

      {}
      {visibleCount < shuffledImages.length && (
        <div className="mt-8 flex justify-center py-4">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-bmw-blue text-white font-medium rounded-full hover:bg-bmw-blue/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            További képek betöltés
          </button>
        </div>
      )}

      {}
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
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-50"
            onClick={prevImage}
          >
            <ChevronLeftIcon size={40} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-50"
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
