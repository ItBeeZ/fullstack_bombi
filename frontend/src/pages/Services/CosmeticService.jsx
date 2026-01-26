import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LazyVideo from "../../components/LazyVideo";

const CosmeticService = () => {
  const [activeVideos, setActiveVideos] = useState([]);

  const videoFiles = [
    "1.mp4",
    "2.mp4",
    "3.mp4",
    "4.mp4",
    "5.mp4",
    "6.mp4",
    "7.mp4",
    "8.mp4",
  ];

  useEffect(() => {
    const shuffled = [...videoFiles].sort(() => 0.5 - Math.random());
    setActiveVideos(shuffled.slice(0, 3));
  }, []);

  const handleVideoEnded = (index) => {
    setActiveVideos((prevVideos) => {
      const currentVideos = [...prevVideos];

      const available = videoFiles.filter((v) => !currentVideos.includes(v));

      if (available.length > 0) {
        const randomVideo =
          available[Math.floor(Math.random() * available.length)];
        currentVideos[index] = randomVideo;
      }

      return currentVideos;
    });
  };

  return (
    <div className="bg-black text-white min-h-screen font-oswald">
      <Navbar />

      {}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/backgrounds/auto_kozmetika.webp"
            alt="BMW Cosmetic Service"
            className="w-full h-full object-cover blur-[5px]"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white uppercase tracking-wider drop-shadow-lg">
            BMW Autókozmetika
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Professzionális autómosás, polírozás és belső tisztítás prémium
            minőségben
          </p>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white uppercase">
              Autókozmetikai Szolgáltatások
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professzionális autóápolás és tisztítás a legmodernebb eszközökkel
              és anyagokkal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {}
            <div className="bg-[#1c2333] p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-800 flex flex-col">
              <div className="mb-6">
                <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Külső Mosás & Polírozás
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  Alapos külső tisztítás, viaszolás és polírozás a fényezés
                  védelmére
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span> Kézi autómosás
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span> Polírozás és
                    viaszolás
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span> Felni tisztítás
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span> Gumi ápolás
                  </li>
                </ul>
              </div>
            </div>

            {}
            <div className="bg-[#1c2333] p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-800 flex flex-col">
              <div className="mb-6">
                <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Belső Tisztítás</h3>
                <p className="text-gray-400 mb-6 text-sm">
                  Teljes belső tér tisztítása és ápolása professzionális
                  eszközökkel
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">•</span> Ülések tisztítása
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">•</span> Szőnyeg és kárpit
                    ápolás
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">•</span> Műszerfal
                    tisztítás
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">•</span> Ablaktisztítás
                    belülről
                  </li>
                </ul>
              </div>
            </div>

            {}
            <div className="bg-[#1c2333] p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-800 flex flex-col">
              <div className="mb-6">
                <div className="bg-yellow-600/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Prémium Csomag</h3>
                <p className="text-gray-400 mb-6 text-sm">
                  Komplett autóápolás külső és belső tisztítással
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500">•</span> Teljes külső és
                    belső tisztítás
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500">•</span> Motortér
                    tisztítás
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500">•</span> Védőréteg
                    felhordás
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500">•</span> Részletes
                    ellenőrzés
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase">
              Munkáink Videóban
            </h2>
            <p className="text-gray-400">
              Tekintse meg autókozmetikai szolgáltatásaink részleteit videóinkon
              keresztül. 3 videó egyszerre, automatikus váltással.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeVideos.map((videoFile, index) => (
              <div
                key={index}
                className="bg-[#1c2333] rounded-lg overflow-hidden shadow-lg border border-gray-800"
              >
                <div className="aspect-[9/16] bg-gray-900 relative group">
                  <LazyVideo
                    key={videoFile}
                    src={`/assets/images/services/auto_kozmetika/${videoFile}`}
                    className="w-full h-full"
                    autoPlay
                    muted
                    playsInline
                    loop={false}
                    onEnded={() => handleVideoEnded(index)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 text-xs text-gray-500">
            A videók automatikusan váltanak a lejátszás végén
          </div>
        </div>
      </section>

      {}
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
            Foglaljon időpontot autókozmetikára!
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 font-medium drop-shadow-sm max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot, és kérjen ajánlatot BMW-je
            professzionális ápolására.
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

export default CosmeticService;
