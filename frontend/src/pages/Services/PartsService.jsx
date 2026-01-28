import React from "react";
import { Construction } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLanguage } from "../../context/LanguageContext";
import { partsServiceTranslations } from "../../translations/partsServiceTranslations";

const PartsService = () => {
  const { currentLang } = useLanguage();
  const t =
    partsServiceTranslations[currentLang] || partsServiceTranslations["HU"];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Navbar />

      <div className="relative flex-grow flex items-center justify-center text-center text-white overflow-hidden min-h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/backgrounds/hero_bg.jpg"
            alt={t.hero.title}
            className="w-full h-full object-cover blur-[5px] opacity-50"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-8 p-6 rounded-full bg-yellow-500/10 border-2 border-yellow-500/50">
            <Construction className="w-16 h-16 md:w-24 md:h-24 text-yellow-500 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight drop-shadow-lg">
            {t.construction.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200">
            {t.hero.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.construction.message}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PartsService;
