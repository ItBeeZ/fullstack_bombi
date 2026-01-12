import { useInView } from "react-intersection-observer";

const LazyVideo = ({
  src,
  poster,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  onEnded,
  controls = false,
  rootMargin = "200px 0px", 
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin,
  });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {inView ? (
        <video
          src={src}
          poster={poster}
          className="w-full h-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          onEnded={onEnded}
          controls={controls}
        />
      ) : (
        
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-gray-700 border-t-gray-400 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default LazyVideo;
