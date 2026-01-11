import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import LazyImage from "./LazyImage";

const HorizontalScrollGallery = ({ images }) => {
  // Configuration: Speed in seconds per image
  // Adjust this value to control the speed of all galleries globally
  const SECONDS_PER_IMAGE = 5;

  // 1️⃣ IntersectionObserver to only activate when visible
  // 2️⃣ Conditional rendering: {visible && <Gallery />}
  const { ref, inView } = useInView({
    triggerOnce: false, // Keep tracking visibility to pause/unload if off-screen (optional, but requested "visible &&")
    rootMargin: "200px 0px", // Start rendering 200px before it enters viewport
    threshold: 0,
  });

  // State to control animation start (7️⃣ ANIMÁCIÓ INDÍTÁS EGY FRAME-MEL KÉSŐBB)
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      // Delay animation start to avoid layout thrashing
      const rafId = requestAnimationFrame(() => {
        setShouldAnimate(true);
      });
      return () => cancelAnimationFrame(rafId);
    } else {
      setShouldAnimate(false);
    }
  }, [inView]);

  // Shuffle images and use a subset (e.g. 15) for performance
  // This prevents rendering hundreds of images in the animation loop
  const selectedImages = React.useMemo(() => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 15);
  }, [images]);

  // Duplicate images to ensure seamless loop
  const loopImages = [...selectedImages, ...selectedImages];

  // Calculate duration based on number of images to maintain consistent speed
  const duration = Math.max(selectedImages.length * SECONDS_PER_IMAGE, 20);

  return (
    <div
      ref={ref}
      className="h-[600px] overflow-hidden relative w-full rounded-lg shadow-2xl bg-gray-900"
      style={{
        // 8️⃣ Prevent sticky issues if used in sticky context
        position: "relative",
        // 5️⃣ Content visibility to prevent layout shifts
        contentVisibility: "auto",
        containIntrinsicSize: "100% 600px",
      }}
    >
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#111827] via-transparent to-[#111827] opacity-20"></div>

      {/* Moving container - Only render if inView */}
      {inView && (
        <div
          className={`flex flex-row h-full gap-4 items-center pl-4 ${
            shouldAnimate ? "animate-horizontal-scroll" : ""
          }`}
          style={{
            // 3️⃣ Hardware acceleration
            willChange: "transform",
            transform: "translate3d(0,0,0)",
          }}
        >
          {loopImages.map((src, index) => (
            <div
              key={index}
              className="h-[90%] flex-shrink-0 aspect-[4/3]"
              style={{
                // 5️⃣ Prevent images from blocking scroll
                contentVisibility: "auto",
                containIntrinsicSize: "400px 300px",
              }}
            >
              <LazyImage
                src={src}
                alt={`Gallery item ${index}`}
                className="w-full h-full object-cover rounded-md shadow-md hover:scale-[1.02] transition-transform duration-300"
                aspectRatio="aspect-[4/3]"
                priority={index < 10} // Eager load first 10 images (which are random due to shuffle)
                sizes="(max-width: 768px) 100vw, 720px"
              />
            </div>
          ))}
        </div>
      )}

      {/* 4️⃣ Pure CSS Animation */}
      <style>{`
        @keyframes horizontal-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
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
