import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLanguage } from "../../context/LanguageContext";
import { aboutTranslations } from "../../translations/aboutTranslations";

const About = () => {
  const { currentLang } = useLanguage();
  const t = aboutTranslations[currentLang] || aboutTranslations["HU"];

  const icons = [
    // Unmatched Expertise
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>,
    // Genuine Parts
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>,
    // Customer Centric
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>,
    // Advanced Tech
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    </svg>,
    // Passion
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>,
    // Custom Solutions
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
      />
    </svg>,
  ];

  return (
    <div className="bg-black text-white min-h-screen font-oswald">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/backgrounds/hero_bg.jpg"
            alt="BMW M Cars on Track"
            className="w-full h-full object-cover blur-[5px]"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white uppercase drop-shadow-xl">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md tracking-wide">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Story / Journey Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase text-white leading-tight">
                {t.journey.title}
              </h2>
              <div className="space-y-6 text-gray-300 text-lg font-normal leading-relaxed">
                <p>{t.journey.p1}</p>
                <p>{t.journey.p2}</p>
                <p>{t.journey.p3}</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/assets/images/services/vezerles_lanc_csapagy/vezerles_lanc_csapagy_54.webp"
                alt="Bömbis István BMW szerelő szakértő munka közben - professzionális BMW szerviz"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-2xl transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#0b1120] py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center uppercase text-white">
            {t.values.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.values.items.map((item, index) => (
              <div
                key={index}
                className="bg-[#111827] p-10 rounded-xl shadow-lg border border-gray-800 flex flex-col items-center text-center hover:transform hover:-translate-y-2 transition duration-300"
              >
                <div className="w-20 h-20 bg-[#1f2937] rounded-full flex items-center justify-center mb-6 text-blue-500">
                  {icons[index]}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* BMW M Stripe Background Effect */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(105deg, #ffffff 0%, #ffffff 22%, #6abbf5 22%, #6abbf5 34%, #0e4c8d 34%, #0e4c8d 46%, #e01e26 46%, #e01e26 100%)",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-md ">
            {t.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 font-medium drop-shadow-sm max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-black font-bold py-4 px-10 rounded shadow-lg hover:bg-gray-100 transition duration-300 uppercase tracking-wide"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
