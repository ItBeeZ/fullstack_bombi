import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter blur-[5px] brightness-50"
        >
          <source
            src="/assets/images/backgrounds/kezdolap.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-medium">
          {t.hero.subtitle}
        </p>
        <Link
          to="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-lg inline-block"
        >
          {t.hero.cta}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
