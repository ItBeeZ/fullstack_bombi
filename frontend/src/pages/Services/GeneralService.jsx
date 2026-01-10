import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceGallery from "../../components/ServiceGallery";
import VerticalScrollGallery from "../../components/VerticalScrollGallery";

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
            BMW Általános Szerviz
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Komplett BMW karbantartás és javítás professzionális eszközökkel és
            eredeti alkatrészekkel
          </p>
        </div>
      </div>

      {/* Section 1: Éves Szerviz & Karbantartás */}
      <section className="py-32 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Vertical Gallery Strip */}
            <div className="h-full">
              <VerticalScrollGallery images={evesSzervizImages} />
            </div>

            {/* Right: Content */}
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Éves Szerviz & Karbantartás
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                A BMW járművek hosszú élettartama és megbízható működése
                érdekében elengedhetetlen a rendszeres karbantartás. Szakértő
                csapatunk minden BMW modellhez biztosítja a megfelelő szerviz
                szolgáltatásokat.
              </p>

              <h3 className="text-xl font-bold mb-4">Szolgáltatásaink:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Motorolaj és szűrők cseréje eredeti BMW alkatrészekkel",
                  "Komplett járműellenőrzés és diagnosztika",
                  "Akkumulátor és elektromos rendszer ellenőrzése",
                  "Műszaki vizsga előkészítés",
                  "Kisebb javítások és beállítások",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-bmw-blue mr-2 mt-1">
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-bmw-blue">
                <h4 className="text-bmw-blue font-bold mb-2">
                  Miért fontos a rendszeres szerviz?
                </h4>
                <p className="text-sm text-gray-400">
                  A BMW járművek komplex technológiát tartalmaznak, amely
                  rendszeres karbantartást igényel. Az időben elvégzett szerviz
                  megelőzi a drága javításokat és biztosítja a jármű
                  értékállóságát.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Fékrendszer Javítás */}
      <section className="py-32 bg-[#1c2333]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Content */}
            <div className="order-2 md:order-1 sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Fékrendszer Javítás & Karbantartás
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                A fékrendszer a jármű egyik legkritikusabb biztonsági eleme.
                Szakértő csapatunk minden BMW modell fékrendszerének javítását
                és karbantartását elvégzi a legmagasabb színvonalon.
              </p>

              <h3 className="text-xl font-bold mb-4">
                Fékszerviz szolgáltatások:
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Féktárcsa és fékbetét csere eredeti BMW alkatrészekkel",
                  "Fékfolyadék csere és rendszer légtelenítés",
                  "Féknyereg javítás és felújítás",
                  "Fékrendszer diagnosztika és hibakeresés",
                  "Kézifék beállítás és javítás",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">
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
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="text-red-500 font-bold mb-2">
                  Mikor szükséges fékszerviz?
                </h4>
                <p className="text-sm text-gray-400">
                  Figyeljen a fékek szokatlan hangjára, a fékezési távolság
                  növekedésére vagy a fékpedál "puhaságára". Ezek mind jelzik,
                  hogy időszerű a fékrendszer ellenőrzése.
                </p>
              </div>
            </div>

            {/* Right: Gallery */}
            <div className="order-1 md:order-2 h-full">
              <VerticalScrollGallery images={fekImages} />
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
          <ServiceGallery images={allGalleryImages} id="main-gallery" />
        </div>
      </section>

      {/* Section 3: Futómű & Klíma */}
      <section className="py-16 bg-[#1c2333]">
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
                <div className="bg-green-600/20 p-3 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-green-500"
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
                <h3 className="text-2xl font-bold">Futómű Javítás</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Lengéscsillapító csere és javítás",
                  "Rugó és stabilizátor javítás",
                  "Kerékcsapágy csere",
                  "Futómű geometria beállítás",
                  "Felfüggesztés diagnosztika",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Klíma Card */}
            <div className="bg-[#111827] p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Klíma Szerviz</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Klíma töltés és javítás",
                  "Klíma fertőtlenítés és tisztítás",
                  "Pollenszűrő csere",
                  "Klíma kompresszor javítás",
                  "Hűtőrendszer ellenőrzés",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-md uppercase">
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
