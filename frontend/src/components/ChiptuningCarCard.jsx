import React, { useState, useRef } from "react";

const ChiptuningCarCard = ({ car, isPlaying, onToggle, onEnded }) => {
  const audioRef = useRef(null);

  React.useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Audio play failed:", error);
          onEnded(); // Reset state if play fails
        });
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Optional: reset to start
      }
    }
  }, [isPlaying, onEnded]);

  const toggleAudio = () => {
    onToggle(car.id);
  };

  const handleAudioEnded = () => {
    onEnded();
  };

  return (
    <div className="bg-[#111827] rounded-xl overflow-hidden shadow-2xl border border-gray-800 hover:border-bmw-blue transition duration-300 group">
      {/* Header/Badge */}
      <div className="relative">
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gray-900/80 backdrop-blur-sm border border-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1">
            <svg
              className="w-3 h-3 text-bmw-blue"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {car.stage}
          </span>
        </div>
        {/* Car Image */}
        <div className="h-48 overflow-hidden bg-gray-900 relative">
          <img
            src={car.image}
            alt={`${car.make} ${car.model}`}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black/90 to-transparent w-full">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 p-1.5 rounded-full">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">
                  {car.make} {car.model}
                </h3>
                <p className="text-bmw-blue text-xs font-bold uppercase tracking-wider">
                  {car.engine}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Action Button - Only if audio exists */}
        {car.audio && (
          <div className="mb-4">
            <audio
              ref={audioRef}
              src={car.audio}
              onEnded={handleAudioEnded}
              className="hidden"
            />
            <button
              onClick={toggleAudio}
              className={`w-full ${
                isPlaying
                  ? "bg-bmw-blue text-white border-bmw-blue"
                  : "bg-bmw-blue/10 text-bmw-blue border-bmw-blue/30 hover:bg-bmw-blue/20 hover:border-bmw-blue"
              } border rounded-lg py-2 flex items-center justify-center gap-2 transition duration-300 text-sm font-bold uppercase`}
            >
              {isPlaying ? (
                <>
                  <svg
                    className="w-4 h-4 animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Lejátszás...
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Hangminta
                </>
              )}
            </button>
          </div>
        )}

        {/* Stats Grid - Only if stats exist */}
        {car.stats && (
          <>
            <div className="grid grid-cols-2 gap-2 text-sm border-t border-gray-800 pt-4">
              <div className="text-center border-r border-gray-800">
                <div className="text-gray-500 text-xs mb-1">Gyári</div>
                <div className="text-white font-bold">
                  {car.stats.factory.hp} LE{" "}
                  <span className="text-gray-600">|</span>{" "}
                  {car.stats.factory.nm} Nm
                </div>
              </div>
              <div className="text-center">
                <div className="text-bmw-blue text-xs mb-1 font-bold">
                  {car.stage}
                </div>
                <div className="text-white font-bold">
                  {car.stats.stage.hp} LE{" "}
                  <span className="text-gray-600">|</span> {car.stats.stage.nm}{" "}
                  Nm
                </div>
              </div>
            </div>

            {/* Progress Bar Visual */}
            <div className="mt-3 bg-gray-800 h-1.5 rounded-full overflow-hidden flex">
              <div
                className="bg-gray-500 h-full"
                style={{
                  width: `${
                    (car.stats.factory.hp / car.stats.stage.hp) * 100
                  }%`,
                }}
              ></div>
              <div
                className="bg-bmw-blue h-full"
                style={{
                  width: `${
                    (1 - car.stats.factory.hp / car.stats.stage.hp) * 100
                  }%`,
                }}
              ></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChiptuningCarCard;
