import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Szoftverfrissítés & Kódolás",
      image:
        "/assets/images/fooldal_kartya_hatterkepek/elektronika_szofter.webp",
      link: "/services/software",
      items: [
        "Apple CarPlay / Android Auto",
        "Retrofit / Utólagos extrák",
        "Rejtett funkciók aktiválása",
        "Navigáció frissítés",
      ],
    },
    {
      title: "Vezérlés- és automata váltó olajcsere",
      image: "/assets/images/fooldal_kartya_hatterkepek/valto_hajtas.webp",
      link: "/services/transmission",
      items: [
        "Automata váltó olajcsere",
        "xDrive hajtás szerviz",
        "Vezérlés csere / nagy szerviz",
        "Lánc csapágyazás",
      ],
    },
    {
      title: "Általános Szerviz",
      image: "/assets/images/fooldal_kartya_hatterkepek/altalanos_szerviz.webp",
      link: "/services/general",
      items: [
        "Éves szerviz",
        "Olajok, szűrők cseréje",
        "Fékek javítása",
        "Futómű javítás és beállítás",
        "Klíma töltés, javítás, fertőtlenítés",
      ],
    },
    {
      title: "Tuning & Optimalizálás",
      image:
        "/assets/images/fooldal_kartya_hatterkepek/tuning_optimalizalas.webp",
      link: "/services/chiptuning",
      items: [
        "Motor- és váltóoptimalizálás",
        "Chiptuning motorhoz és váltóhoz",
        "ECU / TCU programozás, klónozás és frissítés",
        "Chiptuning – Stage 1, Stage 2, Stage 3",
      ],
    },
    {
      title: "Autókozmetika",
      image: "/assets/images/fooldal_kartya_hatterkepek/auto_kozmetika.webp",
      link: "/services/cosmetic",
      items: [
        "Belső tisztítás",
        "Külső polírozás",
        "Védőbevonat felhordás",
        "Részletes autómosás",
      ],
    },
    {
      title: "Alkatrészek & Kiegészítők",
      image: "https://placehold.co/400x250/111/fff?text=Alkatreszek",
      items: [
        "BMW alkatrészek",
        "Tuning kiegészítők",
        "Karbantartási termékek",
        "Eredeti BMW tartozékok",
      ],
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Szakértelmünk</h2>
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
                      További információk
                    </Link>
                  ) : (
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 text-sm rounded transition">
                      További információk
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
