import React, { useMemo, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Cpu,
  Monitor,
  Wifi,
  Settings,
  Camera,
  Eye,
  Key,
  Gauge,
  Armchair,
  Power,
  Lightbulb,
  Zap,
  Map,
  Radio,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLanguage } from "../../context/LanguageContext";
import { softwareServiceTranslations } from "../../translations/softwareServiceTranslations";

const priorityImages = [
  "/assets/images/services/carplay/carplay_0.webp",
  "/assets/images/services/carplay/carplay_1.webp",
  "/assets/images/services/carplay/carplay_2.webp",
  "/assets/images/services/carplay/carplay_3.webp",
  "/assets/images/services/carplay/carplay_4.webp",
  "/assets/images/services/szoftver_utolagos_extrak/szoftver_utolagos_extrak_0.webp",
  "/assets/images/services/szoftver_utolagos_extrak/szoftver_utolagos_extrak_1.webp",
  "/assets/images/services/szoftver_utolagos_extrak/szoftver_utolagos_extrak_2.webp",
  "/assets/images/services/szoftver_utolagos_extrak/szoftver_utolagos_extrak_3.webp",
  "/assets/images/services/szoftver_utolagos_extrak/szoftver_utolagos_extrak_4.webp",
];

const HorizontalScrollGallery = lazy(
  () => import("../../components/HorizontalScrollGallery"),
);
const ServiceGallery = lazy(() => import("../../components/ServiceGallery"));

const Loading = () => {
  const { currentLang } = useLanguage();
  const t =
    softwareServiceTranslations[currentLang] ||
    softwareServiceTranslations["HU"];
  return (
    <div className="p-4 text-center text-gray-500">{t.gallery.loading}</div>
  );
};

const SoftwareService = () => {
  const { currentLang } = useLanguage();
  const t =
    softwareServiceTranslations[currentLang] ||
    softwareServiceTranslations["HU"];

  const carplayImages = useMemo(() => {
    return Array.from(
      { length: 129 },
      (_, i) => `/assets/images/services/carplay/carplay_${i}.webp`,
    );
  }, []);

  const softwareImages = useMemo(() => {
    return Array.from(
      { length: 54 },
      (_, i) =>
        `/assets/images/services/szoftver_utolagos_extrak/szoftver_utolagos_extrak_${i}.webp`,
    );
  }, []);

  const allImages = useMemo(() => {
    return [...carplayImages, ...softwareImages];
  }, [carplayImages, softwareImages]);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      {}
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
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            {t.hero.subtitle}
          </p>
        </div>
      </div>

      {}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {}
            <div className="h-[600px] rounded-lg overflow-hidden">
              <HorizontalScrollGallery images={carplayImages} />
            </div>

            {}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.carplay.title}
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t.carplay.description}
              </p>

              <h3 className="text-xl font-bold mb-4">
                {t.carplay.servicesTitle}
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  {
                    text: t.carplay.features.activation,
                    icon: <Smartphone className="w-5 h-5" />,
                  },
                  {
                    text: t.carplay.features.retrofit,
                    icon: <Cpu className="w-5 h-5" />,
                  },
                  {
                    text: t.carplay.features.screenUpgrade,
                    icon: <Monitor className="w-5 h-5" />,
                  },
                  {
                    text: t.carplay.features.wireless,
                    icon: <Wifi className="w-5 h-5" />,
                  },
                  {
                    text: t.carplay.features.config,
                    icon: <Settings className="w-5 h-5" />,
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-bmw-blue mr-2 mt-1">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-bmw-blue">
                <h4 className="text-bmw-blue font-bold mb-2">
                  {t.carplay.whyChoose.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {t.carplay.whyChoose.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#1c2333]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.extras.title}
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t.extras.description}
              </p>

              <h3 className="text-xl font-bold mb-4">
                {t.extras.retrofitTitle}
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  {
                    text: t.extras.features.camera,
                    icon: <Camera className="w-5 h-5" />,
                  },
                  {
                    text: t.extras.features.signs,
                    icon: <Eye className="w-5 h-5" />,
                  },
                  {
                    text: t.extras.features.keyless,
                    icon: <Key className="w-5 h-5" />,
                  },
                  {
                    text: t.extras.features.acc,
                    icon: <Gauge className="w-5 h-5" />,
                  },
                  {
                    text: t.extras.features.seats,
                    icon: <Armchair className="w-5 h-5" />,
                  },
                  {
                    text: t.extras.features.id6,
                    icon: <Monitor className="w-5 h-5" />,
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">
                      {item.icon}
                    </span>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4">{t.extras.hiddenTitle}</h3>
              <ul className="space-y-3 mb-8">
                {[
                  {
                    text: t.extras.hiddenFeatures.startStop,
                    icon: <Power className="w-5 h-5" />,
                  },
                  {
                    text: t.extras.hiddenFeatures.lights,
                    icon: <Lightbulb className="w-5 h-5" />,
                  },
                  {
                    text: t.extras.hiddenFeatures.mAnim,
                    icon: <Zap className="w-5 h-5" />,
                  },
                  {
                    text: t.extras.hiddenFeatures.update,
                    icon: <Map className="w-5 h-5" />,
                  },
                  {
                    text: t.extras.hiddenFeatures.repair,
                    icon: <Radio className="w-5 h-5" />,
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">
                      {item.icon}
                    </span>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-purple-500 font-bold mb-2">
                  {t.extras.whyChoose.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {t.extras.whyChoose.text}
                </p>
              </div>
            </div>

            {}
            <div className="order-1 md:order-2 h-[600px] rounded-lg overflow-hidden">
              <Suspense fallback={<Loading />}>
                <HorizontalScrollGallery images={softwareImages} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.gallery.title}
            </h2>
            <p className="text-gray-400">{t.gallery.subtitle}</p>
          </div>
          <Suspense fallback={<Loading />}>
            <ServiceGallery
              images={allImages}
              id="software-gallery"
              priorityImages={priorityImages}
            />
          </Suspense>
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
            {t.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 font-medium drop-shadow-sm max-w-3xl mx-auto">
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

export default SoftwareService;
