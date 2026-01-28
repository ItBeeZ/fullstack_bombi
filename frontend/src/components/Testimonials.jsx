import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonialNames = [
    "Tóth Gábor",
    "Horváth Zoltán",
    "Kiss Mária",
    "Németh Péter",
    "Varga Judit",
    "Szabó István",
    "Kovács László",
    "Molnár Erika",
    "Fekete András",
    "Balogh Tamás",
    "Simon Attila",
    "Lakatos Zsolt",
    "Veres Ágnes",
    "Sipos Dávid",
    "Király Róbert",
    "Juhász Levente",
    "Kovács Ádám",
    "Nagy Beatrix",
    "Tóth Krisztián",
    "Szabó Anikó",
    "Horváth Gergő",
    "Varga Tímea",
    "Kiss Balázs",
    "Molnár Zsuzsanna",
    "Farkas Péter",
  ];

  const testimonials = t.testimonials.items.map((text, index) => ({
    text,
    name: testimonialNames[index] || "Ügyfél",
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const getVisibleTestimonials = () => {
    let visibleItems = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleItems.push(testimonials[index]);
    }
    return visibleItems;
  };

  return (
    <section className="py-16 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.testimonials.title}
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
            {getVisibleTestimonials().map((t, index) => (
              <div
                key={index}
                className="bg-bmw-grey p-8 rounded-lg shadow-lg relative h-full flex flex-col justify-between transform transition duration-500 hover:scale-105"
              >
                <div className="text-5xl text-gray-700 absolute top-4 left-4 font-serif">
                  "
                </div>
                <p className="text-gray-300 mb-6 italic relative z-10 pt-4">
                  {t.text}
                </p>
                <h4 className="font-bold text-white text-right">- {t.name}</h4>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-gray-800 hover:bg-bmw-blue text-white p-3 rounded-full focus:outline-none transition z-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-gray-800 hover:bg-bmw-blue text-white p-3 rounded-full focus:outline-none transition z-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-bmw-blue scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
