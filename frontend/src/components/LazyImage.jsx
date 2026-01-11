import { useState } from "react";
import { useInView } from "react-intersection-observer";

const LazyImage = ({
  src,
  alt,
  className = "",
  onClick,
  onMouseEnter,
  placeholderColor = "bg-gray-800",
  placeholderSrc,
  aspectRatio = "aspect-[4/3]",
  threshold = 0.1,
  rootMargin = "200px 0px", // Load images 200px before they appear vertically
  priority = false, // If true, loads immediately without intersection observer
  srcSet, // Optional: for responsive images
  sizes, // Optional: for responsive images
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin,
    skip: priority, // Skip observer if priority is true
  });

  const shouldLoad = priority || inView;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e) => {
    // If image fails to load, we can hide it or show a placeholder
    // Here we just hide it by setting display none on the img element
    // But better to update state to maybe unmount it?
    // For now, simple approach:
    e.target.style.display = "none";
    // Also hide the parent container if possible, but that's hard from here.
    // Instead, let's set a state to render null?
    setIsError(true);
  };

  const [isError, setIsError] = useState(false);

  if (isError) return null; // Don't render anything if image failed

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {/* Skeleton / Placeholder (only if no placeholderSrc is provided) */}
      {(!shouldLoad || (!isLoaded && !placeholderSrc)) && (
        <div
          className={`absolute inset-0 ${placeholderColor} animate-pulse flex items-center justify-center`}
        >
          <svg
            className="w-10 h-10 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Progressive Placeholder Image (Blur Effect) */}
      {shouldLoad && placeholderSrc && !isLoaded && (
        <img
          src={placeholderSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-110"
        />
      )}

      {/* Actual Image */}
      {shouldLoad && (
        <img
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={priority ? "eager" : "lazy"} // Eager load if priority is set
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
            isLoaded ? "opacity-100 blur-0" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};

export default LazyImage;
