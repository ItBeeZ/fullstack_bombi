import React, { useMemo, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Wrench,
  Droplets,
  Activity,
  Filter,
  Cog,
  RotateCw,
  Search,
  CheckCircle,
  Timer,
  Settings,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLanguage } from "../../context/LanguageContext";
import { transmissionServiceTranslations } from "../../translations/transmissionServiceTranslations";

const priorityImages = [
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_0.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_1.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_2.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_3.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_4.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_5.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_6.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_7.webp",
];

const HorizontalScrollGallery = lazy(
  () => import("../../components/HorizontalScrollGallery"),
);
const ServiceGallery = lazy(() => import("../../components/ServiceGallery"));

const Loading = () => {
  const { currentLang } = useLanguage();
  const t =
    transmissionServiceTranslations[currentLang] ||
    transmissionServiceTranslations["HU"];
  return (
    <div className="p-4 text-center text-gray-500">{t.gallery.loading}</div>
  );
};

const TransmissionService = () => {
  const { currentLang } = useLanguage();
  const t =
    transmissionServiceTranslations[currentLang] ||
    transmissionServiceTranslations["HU"];

  const automataImages = useMemo(() => {
    return Array.from(
      { length: 78 },
      (_, i) =>
        `/assets/images/services/automata_valto_olajcsere/automata_valto_olajcsere_${i}.webp`,
    );
  }, []);

  const javitasImages = useMemo(() => {
    return Array.from(
      { length: 71 },
      (_, i) =>
        `/assets/images/services/vezerles_lanc_csapagy/vezerles_lanc_csapagy_${i}.webp`,
    );
  }, []);

  const allImages = useMemo(() => {
    return [...automataImages, ...javitasImages].sort(
      () => 0.5 - Math.random(),
    );
  }, [automataImages, javitasImages]);

  return (
    <div className="bg-black text-white min-h-screen font-oswald">
      <Helmet>
        <link
          rel="preload"
          as="video"
          href="/assets/images/backgrounds/vezerles.mp4"
          type="video/mp4"
        />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover blur-[5px]"
          >
            <source
              src="/assets/images/backgrounds/vezerles.mp4"
              type="video/mp4"
            />
            {t.hero.videoFallback}
          </video>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Transmission Service Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            {/* Gallery */}
            <div className="w-full md:w-1/2">
              <Suspense fallback={<Loading />}>
                <HorizontalScrollGallery images={automataImages} />
              </Suspense>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white ">
                {t.transmission.title}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {t.transmission.description}
              </p>

              <h3 className="text-xl font-bold mb-4 text-white">
                {t.transmission.servicesTitle}
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  <span className="text-yellow-500 font-bold">
                    {t.transmission.features.flush}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-blue mt-1">
                    <Droplets className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    {t.transmission.features.fluidChange}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-blue mt-1">
                    <Activity className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    {t.transmission.features.xDrive}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-blue mt-1">
                    <Filter className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    {t.transmission.features.filter}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-blue mt-1">
                    <Wrench className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    {t.transmission.features.differential}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-blue mt-1">
                    <Cog className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    {t.transmission.features.driveshaft}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-blue mt-1">
                    <RotateCw className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    {t.transmission.features.hardy}
                  </span>
                </li>
              </ul>

              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-bmw-blue">
                <h4 className="text-bmw-blue font-bold mb-3 uppercase text-sm">
                  {t.transmission.importance.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {t.transmission.importance.text}
                </p>
                <p className="text-gray-300 text-sm font-medium">
                  {t.transmission.importance.recommendation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timing Chain Service Section */}
      <section className="py-20 bg-[#1C2333]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-stretch">
            {/* Gallery */}
            <div className="w-full md:w-1/2">
              <Suspense fallback={<Loading />}>
                <HorizontalScrollGallery images={javitasImages} />
              </Suspense>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white ">
                {t.timing.title}
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {t.timing.description}
              </p>

              <h3 className="text-xl font-bold mb-4 text-white">
                {t.timing.servicesTitle}
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-bmw-purple mt-1">
                    <Timer className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    {t.timing.features.chain}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-purple mt-1">
                    <Settings className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    {t.timing.features.bearings}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-purple mt-1">
                    <RotateCw className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    {t.timing.features.adjustment}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-purple mt-1">
                    <Droplets className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    {t.timing.features.pump}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-purple mt-1">
                    <Wrench className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">{t.timing.features.oil}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-purple mt-1">
                    <Search className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    {t.timing.features.diagnostics}
                  </span>
                </li>
              </ul>

              <div className="bg-gray-900/50 p-6 rounded-lg border-l-4 border-bmw-purple">
                <h4 className="text-bmw-purple font-bold mb-3 uppercase text-sm">
                  {t.timing.whenNeeded.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {t.timing.whenNeeded.text}
                </p>
                <p className="text-gray-300 text-sm font-medium">
                  {t.timing.whenNeeded.documentation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white ">
            {t.gallery.title}
          </h2>
          <p className="text-center text-gray-400 mb-12">
            {t.gallery.subtitle}
          </p>

          <Suspense fallback={<Loading />}>
            <ServiceGallery
              images={allImages}
              id="transmission-gallery"
              priorityImages={priorityImages}
              loadMoreText={t.gallery.loadMore}
            />
          </Suspense>
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

export default TransmissionService;
