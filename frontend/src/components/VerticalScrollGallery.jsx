import React from "react";

const VerticalScrollGallery = ({ images }) => {
  // Configuration: Speed in seconds per image
  // Adjust this value to control the speed of all galleries globally
  const SECONDS_PER_IMAGE = 5;

  // Shuffle images to ensure randomness
  const shuffledImages = React.useMemo(() => {
    return [...images].sort(() => 0.5 - Math.random());
  }, [images]);

  // Duplicate images to ensure seamless loop
  const loopImages = [...shuffledImages, ...shuffledImages];

  // Calculate duration based on number of images to maintain consistent speed
  const duration = Math.max(images.length * SECONDS_PER_IMAGE, 20);

  return (
    <div className="h-[600px] overflow-hidden relative w-full rounded-lg shadow-2xl bg-gray-900">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#111827] via-transparent to-[#111827] opacity-20"></div>

      {/* Moving container */}
      <div className="animate-vertical-scroll flex flex-col gap-4">
        {loopImages.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Gallery item ${index}`}
              className="w-full h-auto object-cover rounded-md shadow-md hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes vertical-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-scroll {
          animation: vertical-scroll ${duration}s linear infinite;
        }
        .animate-vertical-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default VerticalScrollGallery;
