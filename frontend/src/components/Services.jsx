import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { prefetchImages } from "../utils/performance";
import { useLanguage } from "../context/LanguageContext";

const softwarePriorityImages = [
  "/assets/images/services/carplay/carplay_0.webp",
  "/assets/images/services/carplay/carplay_1.webp",
  "/assets/images/services/carplay/carplay_2.webp",
  "/assets/images/services/carplay/carplay_3.webp",
  "/assets/images/services/carplay/carplay_4.webp",
  "/assets/images/services/carplay/carplay_5.webp",
  "/assets/images/services/carplay/carplay_6.webp",
  "/assets/images/services/carplay/carplay_7.webp",
];

const transmissionPriorityImages = [
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_0.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_1.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_2.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_3.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_4.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_5.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_6.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_7.webp",
];

const generalPriorityImages = [
  "/assets/images/services/altalanos_szerviz/eves_szerviz/eves_szerviz_0.webp",
  "/assets/images/services/altalanos_szerviz/eves_szerviz/eves_szerviz_1.webp",
  "/assets/images/services/altalanos_szerviz/eves_szerviz/eves_szerviz_2.webp",
  "/assets/images/services/altalanos_szerviz/eves_szerviz/eves_szerviz_3.webp",
  "/assets/images/services/altalanos_szerviz/eves_szerviz/eves_szerviz_4.webp",
  "/assets/images/services/altalanos_szerviz/eves_szerviz/eves_szerviz_5.webp",
  "/assets/images/services/altalanos_szerviz/eves_szerviz/eves_szerviz_6.webp",
  "/assets/images/services/altalanos_szerviz/eves_szerviz/eves_szerviz_7.webp",
];

const Services = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      prefetchImages(softwarePriorityImages);
      prefetchImages(transmissionPriorityImages);
      prefetchImages(generalPriorityImages);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleMouseEnter = (link) => {
    if (!link) return;

    const imagesToPrefetch = {
      "/services/software": softwarePriorityImages,
      "/services/transmission": transmissionPriorityImages,
      "/services/general": generalPriorityImages,
    };

    if (imagesToPrefetch[link]) {
      prefetchImages(imagesToPrefetch[link]);
    }
  };

  const services = [
    {
      title: t.services.items.software.title,
      image:
        "/assets/images/fooldal_kartya_hatterkepek/elektronika_szofter.webp",
      link: "/services/software",
      items: t.services.items.software.list,
    },
    {
      title: t.services.items.transmission.title,
      image: "/assets/images/fooldal_kartya_hatterkepek/valto_hajtas.webp",
      link: "/services/transmission",
      items: t.services.items.transmission.list,
    },
    {
      title: t.services.items.general.title,
      image: "/assets/images/fooldal_kartya_hatterkepek/altalanos_szerviz.webp",
      link: "/services/general",
      items: t.services.items.general.list,
    },
    {
      title: t.services.items.tuning.title,
      image:
        "/assets/images/fooldal_kartya_hatterkepek/tuning_optimalizalas.webp",
      link: "/services/chiptuning",
      items: t.services.items.tuning.list,
    },
    {
      title: t.services.items.cosmetic.title,
      image: "/assets/images/fooldal_kartya_hatterkepek/auto_kozmetika.webp",
      link: "/services/cosmetic",
      items: t.services.items.cosmetic.list,
    },
    {
      title: t.services.items.parts.title,
      image: "https://placehold.co/400x250/111/fff?text=Alkatreszek",
      items: t.services.items.parts.list,
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.services.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-lg overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full transform hover:scale-105 transition duration-300"
            >
              <div className="p-4 pb-0">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-32 object-cover rounded-md"
                />
              </div>
              <div className="p-3 flex-grow flex flex-col items-center text-center">
                <h3 className="text-base font-bold mb-2 flex items-center justify-center gap-2">
                  {service.icon && (
                    <span className="w-8 h-8">{service.icon}</span>
                  )}
                  {service.title}
                </h3>
                <ul className="text-sm text-gray-400 mb-3 flex-grow">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="mb-0.5">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  {service.link ? (
                    <Link
                      to={service.link}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 text-sm rounded transition inline-block"
                    >
                      {t.services.moreInfo}
                    </Link>
                  ) : (
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 text-sm rounded transition">
                      {t.services.moreInfo}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
