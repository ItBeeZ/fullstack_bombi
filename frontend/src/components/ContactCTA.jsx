import React from "react";
import { useLanguage } from "../context/LanguageContext";

const ContactCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with skewed shapes */}
      <div className="absolute inset-0 flex transform -skew-x-12 scale-110">
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[#6F95D9]"></div> {/* BMW Blue Light */}
        <div className="flex-1 bg-[#00478F]"></div> {/* BMW Blue Dark */}
        <div className="flex-[3] bg-[#E11A2B]"></div> {/* BMW Red */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4  shadow-text">
          {t.contact.title}
        </h2>
        <p className="text-xl text-white mb-8 shadow-text max-w-2xl mx-auto">
          {t.contact.subtitle}
        </p>
        <button className="bg-white text-red-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition shadow-lg">
          {t.contact.button}
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;
