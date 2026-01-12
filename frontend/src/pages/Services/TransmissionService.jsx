import React, { useMemo, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
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


const priorityImages = [
  "/assets/images/services/automata_valto_olajcsere/automata_olaj_000.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_olaj_001.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_olaj_002.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_olaj_003.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_olaj_004.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_olaj_005.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_olaj_006.webp",
  "/assets/images/services/automata_valto_olajcsere/automata_olaj_007.webp",
];

const HorizontalScrollGallery = lazy(() =>
  import("../../components/HorizontalScrollGallery")
);
const ServiceGallery = lazy(() => import("../../components/ServiceGallery"));

const Loading = () => (
  <div className="p-4 text-center text-gray-500">Galéria betöltése...</div>
);

const TransmissionService = () => {
  
  const automataImages = useMemo(() => {
    return Array.from(
      { length: 80 },
      (_, i) =>
        `/assets/images/services/automata_valto_olajcsere/automata_olaj_${String(
          i
        ).padStart(3, "0")}.webp`
    );
  }, []);

  const javitasImages = useMemo(() => {
    const images = [];
    
    for (let i = 0; i <= 47; i++) {
      images.push(
        `/assets/images/services/vezerles_lanc_csapagy/vezerles_${String(
          i
        ).padStart(3, "0")}.webp`
      );
    }
    
    const extraIndices = [
      49, 52, 55, 58, 59, 61, 63, 65, 66, 68, 70, 71, 73, 75, 77, 79, 80, 82,
      83, 85, 86, 88, 90, 94, 100, 102, 104, 106, 107, 109, 110, 112, 113, 115,
      116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 139, 140,
    ];
    extraIndices.forEach((i) => {
      images.push(
        `/assets/images/services/vezerles_lanc_csapagy/vezerles_${String(
          i
        ).padStart(3, "0")}.webp`
      );
    });
    return images;
  }, []);

  const allImages = useMemo(() => {
    return [...automataImages, ...javitasImages].sort(
      () => 0.5 - Math.random()
    );
  }, [automataImages, javitasImages]);

  return (
    <div className="bg-black text-white min-h-screen font-oswald">
      <Navbar />

      {}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/Fektetett kepek/IMG_0000.webp"
            alt="BMW Transmission Service"
            className="w-full h-full object-cover blur-[5px]"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase drop-shadow-lg">
            BMW Váltó & Hajtás Szerviz
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Professzionális automata váltó olajcsere, xDrive hajtás szerviz és
            vezérlés csere szolgáltatások
          </p>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            {}
            <div className="w-full md:w-1/2">
              <Suspense fallback={<Loading />}>
                <HorizontalScrollGallery images={automataImages} />
              </Suspense>
            </div>

            {}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white ">
                BMW vezérlés és automata váltó szervizelés
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Az automata váltó megfelelő működése kritikus fontosságú a BMW
                járművek teljesítménye és élettartama szempontjából. Rendszeres
                olajcsere és karbantartás nélkül a váltó komoly károsodást
                szenvedhet.
              </p>

              <h3 className="text-xl font-bold mb-4 text-white">
                Szolgáltatásaink:
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  <span className="text-yellow-500 font-bold">
                    Exkluzív gépi átmosás és szelepnyitás - egyedül nálunk
                    elérhető technológia egész Magyarországon
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-blue mt-1">
                    <Droplets className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    Teljes automata váltó olajcsere eredeti BMW folyadékkal
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-blue mt-1">
                    <Activity className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    xDrive összkerékhajtás rendszer diagnosztika és szerviz
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-blue mt-1">
                    <Filter className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    Váltószűrő csere és tömítések ellenőrzése
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-blue mt-1">
                    <Wrench className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    Differenciálmű olajcsere és karbantartás
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-blue mt-1">
                    <Cog className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    Hajtástengely és kardáncsukló ellenőrzése
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-blue mt-1">
                    <RotateCw className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    Hardy-tárcsák és kardántengely ellenőrzése
                  </span>
                </li>
              </ul>

              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-bmw-blue">
                <h4 className="text-bmw-blue font-bold mb-3 uppercase text-sm">
                  Miért fontos a rendszeres váltó szerviz?
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  A BMW automata váltók komplex rendszerek, amelyek speciális
                  folyadékokat és precíz karbantartást igényelnek. Az
                  elhanyagolt váltó drága javításokat eredményezhet, míg a
                  rendszeres szerviz hosszú távon biztosítja a problémamentes
                  működést és a finom kapcsolásokat.
                </p>
                <p className="text-gray-300 text-sm font-medium">
                  Általános javaslat: BMW modelleknél 60-80 000 km-enként
                  ajánlott a váltóolaj és szűrő cseréje, míg BMW M, Mercedes-AMG
                  és Audi RS modelleknél az intenzívebb igénybevétel miatt 40
                  000 km az ajánlott intervallum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#1C2333]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-stretch">
            {}
            <div className="w-full md:w-1/2">
              <Suspense fallback={<Loading />}>
                <HorizontalScrollGallery images={javitasImages} />
              </Suspense>
            </div>

            {}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white ">
                Váltó javítás
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                A BMW motorok vezérlési rendszere kritikus szerepet játszik a
                motor megfelelő működésében. A vezérlőlánc, feszítők és
                csapágyak idővel kopnak, ami komoly motorkárt okozhat, ha nem
                cseréljük őket időben.
              </p>

              <h3 className="text-xl font-bold mb-4 text-white">
                Szolgáltatásaink:
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-bmw-purple mt-1">
                    <Timer className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    Vezérlőlánc és feszítők teljes cseréje – vezérműláncok,
                    feszítők, vezetősínek, patronok, csavarok és tömítések
                    cseréje
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-purple mt-1">
                    <Settings className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    Hajtókar- és főtengelycsapágyak, valamint csavarok cseréje
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-purple mt-1">
                    <RotateCw className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    Vezérlés precíz beállítása gyári célszerszámokkal
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-purple mt-1">
                    <Droplets className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    Olajszivattyú/olajpumpa ellenőrzése, szükség esetén csere
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-purple mt-1">
                    <Wrench className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    Motor feltöltése friss olajjal
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bmw-purple mt-1">
                    <Search className="w-5 h-5" />
                  </span>
                  <span className="text-gray-300">
                    Próbakör és az elvégzett munka diagnosztikája
                  </span>
                </li>
              </ul>

              <div className="bg-gray-900/50 p-6 rounded-lg border-l-4 border-bmw-purple">
                <h4 className="text-bmw-purple font-bold mb-3 uppercase text-sm">
                  Mikor szükséges a vezérlés csere?
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  A BMW motoroknál általában 80 000-120 000 km után ajánlott a
                  vezérlőlánc cseréje. Kiemelten: M-es és B motorkódú
                  modelleknél 150-200 000 km után ajánlott a csere az üzemi
                  terhelés és igénybevétel függvényében. A korai jelek közé
                  tartozik a motorindításkor hallható csörgés, a motor
                  egyenetlen járása vagy a teljesítménycsökkenés.
                </p>
                <p className="text-gray-300 text-sm font-medium">
                  Mindent képekkel és számlákkal dokumentálunk, így az elvégzett
                  munka és a felhasznált alkatrészek átláthatóan nyomon
                  követhetők.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white ">
            Galéria
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Tekintse meg váltó és hajtás javítási munkáinkat.
          </p>

          <Suspense fallback={<Loading />}>
            <ServiceGallery
              images={allImages}
              id="transmission-gallery"
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
            Szüksége van váltó vagy hajtás szervizre?
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 font-medium drop-shadow-sm max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot, és kérjen ajánlatot BMW-je váltó
            vagy hajtás szervizére.
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

export default TransmissionService;
