import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Snowflake, Sparkles, Filter, Fan, Thermometer } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ServiceGallery = lazy(() => import("../../components/ServiceGallery"));
const VerticalScrollGallery = lazy(() =>
  import("../../components/VerticalScrollGallery")
);

const Loading = () => (
  <div className="p-4 text-center text-gray-500">Galéria betöltése...</div>
);

const GeneralService = () => {
  const evesSzervizImages = [
    "/assets/images/services/altalanos_szerviz/eves_szerviz/IMG_8749.webp",
    "/assets/images/services/altalanos_szerviz/eves_szerviz/IMG_9829.webp",
    ...Array.from(
      { length: 58 },
      (_, i) =>
        `/assets/images/services/altalanos_szerviz/eves_szerviz/alt_szerviz_eves_${i
          .toString()
          .padStart(3, "0")}.webp`
    ),
  ];

  const fekImages = Array.from(
    { length: 43 },
    (_, i) =>
      `/assets/images/services/altalanos_szerviz/fek_futomu/alt_szerviz_fek_${i
        .toString()
        .padStart(3, "0")}.webp`
  );

  const allGalleryImages = [...evesSzervizImages, ...fekImages];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/Fektetett kepek/IMG_4047.webp"
            alt="BMW Service Workshop"
            className="w-full h-full object-cover blur-[5px]"
          />
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            BMW Általános Szerviz
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Komplett BMW karbantartás és javítás professzionális eszközökkel és
            eredeti alkatrészekkel
          </p>
        </div>
      </div>

      {/* Section 1: Kötelező szerviz & Karbantartás */}
      <section className="py-32 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Vertical Gallery Strip */}
            <div className="h-full">
              <Suspense fallback={<Loading />}>
                <VerticalScrollGallery images={evesSzervizImages} />
              </Suspense>
            </div>

            {/* Right: Content */}
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Kötelező szerviz & Karbantartás
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                A BMW járművek hosszú élettartama és megbízható működése
                érdekében elengedhetetlen a megfelelő időben cserélni a
                motorolajat. Szakértő csapatunk diesel autókhoz 10–12.000 km,
                benzinesekhez 7–10.000 km olajcserét javasol.
              </p>

              <h3 className="text-xl font-bold mb-4">Szolgáltatásaink:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  {
                    text: "Motorolaj és szűrők cseréje – gyári vagy gyári minőségű BMW alkatrészekkel",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    ),
                    color: "text-bmw-blue",
                  },
                  {
                    text: "Komplett jármű átvizsgálás",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    ),
                    color: "text-bmw-blue",
                  },
                  {
                    text: "Teljes diagnoszitka gyári programokkal",
                    icon: (
                      <svg
                        className="w-5 h-5"
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
                    ),
                    color: "text-bmw-blue",
                  },
                  {
                    text: "Műszaki vizsga előkészítés",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    color: "text-bmw-blue",
                  },
                  {
                    text: "Kisebb javítások és beállítások",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ),
                    color: "text-bmw-blue",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`${item.color} mr-3 mt-1`}>
                      {item.icon}
                    </span>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-bmw-blue">
                <h4 className="text-bmw-blue font-bold mb-2">
                  Miért fontos a rendszeres szerviz?
                </h4>
                <p className="text-sm text-gray-400">
                  A BMW járművek fejlett technológiát tartalmaznak, amely
                  rendszeres karbantartást igényel. Az időben elvégzett szerviz
                  megelőzi a drága javításokat és biztosítja a jármű
                  értékállóságát.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Fék & futómű karbantartás */}
      <section className="py-32 bg-[#1c2333]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Content */}
            <div className="order-2 md:order-1 sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Fék & futómű karbantartás
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                A fék- és futóműrendszer a jármű egyik legkritikusabb biztonsági
                eleme. Szakértő csapatunk minden BMW modell karbantartását és
                javítását a legmagasabb színvonalon végzi
              </p>

              <h3 className="text-xl font-bold mb-4">
                Fékszerviz szolgáltatások:
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  {
                    text: "Féktárcsa és fékbetét csere eredeti BMW alkatrészekkel",
                    icon: (
                      <svg
                        className="w-5 h-5"
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
                      </svg>
                    ),
                    color: "text-red-500",
                  },
                  {
                    text: "Fékfolyadék csere és rendszer légtelenítés",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    ),
                    color: "text-red-500",
                  },
                  {
                    text: "Lengéscsillapítók és légrugók – csere és javítás",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ),
                    color: "text-red-500",
                  },
                  {
                    text: "Futómű elemek – lengőkar, szilentek, stabilizátorok, toronycsapágy",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    ),
                    color: "text-red-500",
                  },
                  {
                    text: "Futómű-beállítás",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    ),
                    color: "text-red-500",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`${item.color} mr-3 mt-1`}>
                      {item.icon}
                    </span>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="text-red-500 font-bold mb-2">
                    Mikor szükséges fékszerviz?
                  </h4>
                  <p className="text-sm text-gray-400">
                    Figyeljen a fékek szokatlan hangjára, a megnövekedett
                    fékezési távolságra vagy a puha fékpedálra – ezek mind azt
                    jelzik, hogy időszerű a fékrendszer ellenőrzése. Ne
                    aggódjon, BMW-je időben jelzi a fékrendszer cseréjét vagy
                    javítását!
                  </p>
                </div>

                <div className="bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="text-red-500 font-bold mb-2">
                    Mikor szükséges a futómű szerviz?
                  </h4>
                  <p className="text-sm text-gray-400">
                    Mikor felfigyel kopogó hangokra vagy ha a légrugója nem
                    emelkedik ki.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Gallery */}
            <div className="order-1 md:order-2 h-full">
              <Suspense fallback={<Loading />}>
                <VerticalScrollGallery images={fekImages} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galéria</h2>
            <p className="text-gray-400">
              Tekintse meg munkáinkat és szervizünk mindennapjait.
            </p>
          </div>
          <Suspense fallback={<Loading />}>
            <ServiceGallery images={allGalleryImages} id="main-gallery" />
          </Suspense>
        </div>
      </section>

      {/* Section 3: Futómű & Klíma */}
      <section className="py-24 bg-[#1c2333]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Futómű Javítás & Klíma Szerviz
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Komplett futómű diagnosztika, javítás és beállítás, valamint
              professzionális klíma szerviz szolgáltatások.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Futómű Card */}
            <div className="bg-[#111827] p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Futómű Javítás</h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    text: "Lengéscsillapító csere és javítás",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M22 12h-4l-3 9L9 3l-3 9H2"
                        />
                      </svg>
                    ),
                    color: "text-orange-500",
                  },
                  {
                    text: "Rugó és stabilizátor javítás",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                        />
                      </svg>
                    ),
                    color: "text-orange-500",
                  },
                  {
                    text: "Kerékcsapágy csere",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 15a3 3 0 100-6 3 3 0 000 6z"
                        />
                      </svg>
                    ),
                    color: "text-orange-500",
                  },
                  {
                    text: "Futómű geometria beállítás",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v8M8 12h8"
                        />
                      </svg>
                    ),
                    color: "text-orange-500",
                  },
                  {
                    text: "Felfüggesztés diagnosztika",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    ),
                    color: "text-orange-500",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`${item.color} mr-3 mt-1`}>
                      {item.icon}
                    </span>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Klíma Card */}
            <div className="bg-[#111827] p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                  <Snowflake className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Klíma Szerviz</h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    text: "Klíma töltés és javítás",
                    icon: <Snowflake className="w-5 h-5" />,
                    color: "text-blue-500",
                  },
                  {
                    text: "Klíma fertőtlenítés és tisztítás",
                    icon: <Sparkles className="w-5 h-5" />,
                    color: "text-blue-500",
                  },
                  {
                    text: "Pollenszűrő csere",
                    icon: <Filter className="w-5 h-5" />,
                    color: "text-blue-500",
                  },
                  {
                    text: "Klíma kompresszor javítás",
                    icon: <Fan className="w-5 h-5" />,
                    color: "text-blue-500",
                  },
                  {
                    text: "Hűtőrendszer ellenőrzés",
                    icon: <Thermometer className="w-5 h-5" />,
                    color: "text-blue-500",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`${item.color} mr-3 mt-1`}>
                      {item.icon}
                    </span>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(105deg, #ffffff 0%, #ffffff 22%, #6abbf5 22%, #6abbf5 34%, #0e4c8d 34%, #0e4c8d 46%, #e01e26 46%, #e01e26 100%)",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-md ">
            Kérjen időpontot szervizünkbe!
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 font-medium drop-shadow-sm max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot, és kérjen ajánlatot BMW-je általános
            szervizére.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-black font-bold py-4 px-10 rounded shadow-lg hover:bg-gray-100 transition duration-300 uppercase tracking-wide"
          >
            Időpontfoglalás
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralService;
