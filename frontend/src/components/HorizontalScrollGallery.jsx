import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import LazyImage from "./LazyImage";

const HorizontalScrollGallery = ({ images }) => {
  
  
  const SECONDS_PER_IMAGE = 5;

  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: "200px 0px",
    threshold: 0,
  });

  const selectedImages = React.useMemo(() => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 15);
  }, [images]);

  const loopImages = [...selectedImages, ...selectedImages];
  const duration = Math.max(selectedImages.length * SECONDS_PER_IMAGE, 20);

  return (
    <div
      ref={ref}
      className="h-[600px] overflow-hidden relative w-full rounded-lg shadow-2xl bg-gray-900"
      style={{
        position: "relative",
        contentVisibility: "auto",
        containIntrinsicSize: "100% 600px",
      }}
    >
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#111827] via-transparent to-[#111827] opacity-20"></div>

      <div
        className={`flex flex-row h-full gap-4 items-center pl-4 animate-horizontal-scroll ${
          !inView ? "paused" : ""
        }`}
        style={{
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
      >
        {loopImages.map((src, index) => (
          <div
            key={index}
            className="h-[90%] flex-shrink-0 aspect-[4/3]"
            style={{
              contentVisibility: "auto",
              containIntrinsicSize: "400px 300px",
            }}
          >
            <LazyImage
              src={src}
              alt={`Gallery item ${index}`}
              className="w-full h-full object-cover rounded-md shadow-md hover:scale-[1.02] transition-transform duration-300"
              aspectRatio="aspect-[4/3]"
              priority={index < 10}
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes horizontal-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-horizontal-scroll {
          animation: horizontal-scroll ${duration}s linear infinite;
          width: max-content;
        }
        .animate-horizontal-scroll:hover,
        .animate-horizontal-scroll.paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HorizontalScrollGallery;
