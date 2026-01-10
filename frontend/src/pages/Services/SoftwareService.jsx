import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VerticalScrollGallery from "../../components/VerticalScrollGallery";
import ServiceGallery from "../../components/ServiceGallery";

const SoftwareService = () => {
  const carplayImages = useMemo(() => {
    return Array.from(
      { length: 147 },
      (_, i) =>
        `/assets/images/services/carplay/carplay_${String(i).padStart(
          3,
          "0"
        )}.webp`
    );
  }, []);

  const softwareImages = useMemo(() => {
    return Array.from(
      { length: 138 },
      (_, i) =>
        `/assets/images/services/szoftver_utolagos_extrak/software_utolagos_extra_${String(
          i
        ).padStart(3, "0")}.webp`
    );
  }, []);

  const allImages = useMemo(() => {
    return [...carplayImages, ...softwareImages];
  }, [carplayImages, softwareImages]);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/Fektetett kepek/IMG_0002.webp"
            alt="BMW Coding"
            className="w-full h-full object-cover blur-[5px]"
          />
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight text-white drop-shadow-lg">
            Szoftverfrissítés & Kódolás
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            Frissítse BMW-je szoftverét és aktiváljon rejtett funkciókat
            professzionális kódolással.
          </p>
        </div>
      </div>

      {/* Section 1: Apple CarPlay / Android Auto */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Images */}
            <div className="h-[600px] rounded-lg overflow-hidden">
              <VerticalScrollGallery images={carplayImages} />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Apple CarPlay / Android Auto
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Modernizálja BMW-jét a legújabb okostelefon-integrációs
                technológiákkal. Az Apple CarPlay és Android Auto lehetővé
                teszi, hogy biztonságosan használja telefonját vezetés közben.
              </p>

              <h3 className="text-xl font-bold mb-4">Szolgáltatásaink:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Szoftveres aktiválás meglévő rendszereken",
                  "Modullal történő beépítés régebbi járművekbe",
                  'Nagy kijelzőre való átalakítás (8.8" → 10.25" vagy 12.3")',
                  "Vezeték nélküli CarPlay/Android Auto telepítés",
                  "Teljes rendszer konfiguráció és beállítás",
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
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-bmw-blue">
                <h4 className="text-bmw-blue font-bold mb-2">
                  Miért válassza a CarPlay/Android Auto-t?
                </h4>
                <p className="text-sm text-gray-400">
                  A modern okostelefon-integráció biztonságosabbá és
                  kényelmesebbé teszi a vezetést. Használhatja kedvenc
                  alkalmazásait, navigációját és zenéjét közvetlenül a BMW
                  kijelzőjén keresztül.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Retrofit & Rejtett Extrák */}
      <section className="py-20 bg-[#1c2333]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="order-2 md:order-1">
              <p className="text-gray-400 mb-8 leading-relaxed">
                Bővítse BMW-je funkcionalitását utólagos extrák beépítésével és
                rejtett funkciók aktiválásával. Professzionális
                szoftverfrissítéssel és fejegység javítással.
              </p>

              <h3 className="text-xl font-bold mb-4">
                Retrofit / Utólagos extrák:
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Tolatókamera beépítés",
                  "Táblafelismerő rendszer",
                  "Comfort Access kulcs nélküli nyitórendszer",
                  "Távtartó tempomat (ACC)",
                  "Elektromos memóriás ülések",
                  "Nagy kijelzőre átalakítás, ID6 update",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">
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
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4">
                Rejtett funkciók & Szoftver:
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Start-stop gomb memória aktiválása",
                  "Hátsó menetfény aktiválása",
                  "M animáció és egyéb rejtett funkciók",
                  "Szoftverfrissítés, navigáció update",
                  "Fejegység javítás: CCC, CIC, NBT, NBT Evo, MGU, MGU2",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">
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
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-purple-500 font-bold mb-2">
                  Miért válassza a retrofit szolgáltatásunkat?
                </h4>
                <p className="text-sm text-gray-400">
                  Gyári minőségű beépítést és programozást biztosítunk, így
                  autója értéke nő, és olyan funkciókat is élvezhet, amelyek
                  eredetileg nem voltak benne a felszereltségben.
                </p>
              </div>
            </div>

            {/* Right: Images */}
            <div className="order-1 md:order-2 h-[600px] rounded-lg overflow-hidden">
              <VerticalScrollGallery images={softwareImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galéria</h2>
            <p className="text-gray-400">
              Tekintse meg szoftveres munkáinkat és referenciáinkat.
            </p>
          </div>
          <ServiceGallery images={allImages} id="software-gallery" />
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
            Kérjen ajánlatot kódolásra!
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 font-medium drop-shadow-sm max-w-3xl mx-auto">
            Vegye fel velünk a kapcsolatot, és kérjen személyre szabott
            ajánlatot BMW-je szoftverfrissítésére és kódolására.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-black font-bold py-4 px-10 rounded shadow-lg hover:bg-gray-100 transition duration-300 uppercase tracking-wide"
          >
            Ajánlatkérés
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareService;
