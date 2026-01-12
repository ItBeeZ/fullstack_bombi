import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Zap,
  Gauge,
  Fuel,
  Settings,
  ShieldCheck,
  Unlock,
  XCircle,
  Droplet,
  Wrench,
  Cog,
  Leaf,
  Activity,
  Trophy,
  Sliders,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ChiptuningCarCard from "../../components/ChiptuningCarCard";

const ChiptuningService = () => {
  const [playingCarId, setPlayingCarId] = React.useState(null);

  const handleToggleAudio = (id) => {
    if (playingCarId === id) {
      setPlayingCarId(null); 
    } else {
      setPlayingCarId(id); 
    }
  };

  const handleAudioEnded = () => {
    setPlayingCarId(null);
  };

  
  const cars = [
    
    {
      id: 1,
      make: "BMW",
      model: "320d G20",
      engine: "xDrive",
      image:
        "/assets/images/services/chiptuning/bmw 320d g20/bmw_g20_320d_xdrive.webp",
      stage: "Stage 1",
      audio:
        "/assets/images/services/chiptuning/bmw 320d g20/BMW G20 320d xDrive.mp3",
    },
    {
      id: 2,
      make: "AUDI",
      model: "A7 C7",
      engine: "3.0 BiTDI",
      image:
        "/assets/images/services/chiptuning/Audi a7 c7/AUDI A7 C7 3.0 BiTDI.jpg",
      stage: "Stage 1",
      audio:
        "/assets/images/services/chiptuning/Audi a7 c7/AUDI A7 C7 3.0 BiTDI.mp3",
    },
    {
      id: 3,
      make: "BMW",
      model: "F10",
      engine: "520i N20",
      image:
        "/assets/images/services/chiptuning/BMW F10 520i N20 184-270 270-420/hq720-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 184, nm: 270 },
        stage: { hp: 270, nm: 420 },
      },
      audio:
        "/assets/images/services/chiptuning/BMW F10 520i N20 184-270 270-420/bmw_f10_520i.mp3",
    },
    {
      id: 4,
      make: "BMW",
      model: "F15 X5",
      engine: "30d xDrive",
      image:
        "/assets/images/services/chiptuning/BMW F15 X5 30d xDrive 258LE-560NM 310LE-670NM/bmw_x5_30d.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 258, nm: 560 },
        stage: { hp: 310, nm: 670 },
      },
      audio:
        "/assets/images/services/chiptuning/BMW F15 X5 30d xDrive 258LE-560NM 310LE-670NM/bmw_f15_x5_30d.mp3",
    },
    {
      id: 5,
      make: "BMW",
      model: "F30",
      engine: "335i",
      image:
        "/assets/images/services/chiptuning/BMW F30 335i/BMW F30 335i.jpeg",
      stage: "Stage 1",
      audio: "/assets/images/services/chiptuning/BMW F30 335i/BMW F30 335i.mp3",
    },
    {
      id: 6,
      make: "BMW",
      model: "F90 M5",
      engine: "Competition",
      image:
        "/assets/images/services/chiptuning/BMW F90 M5 Competiton 625-750 750-900 pops and bangs/f90_m5-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 625, nm: 750 },
        stage: { hp: 750, nm: 900 },
      },
      audio:
        "/assets/images/services/chiptuning/BMW F90 M5 Competiton 625-750 750-900 pops and bangs/IMG_5173.mp3",
    },
    {
      id: 7,
      make: "BMW",
      model: "F97 X3M",
      engine: "xDrive",
      image:
        "/assets/images/services/chiptuning/BMW F97 X3M 480-600_  600-800/BMW_X3-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 480, nm: 600 },
        stage: { hp: 600, nm: 800 },
      },
      audio:
        "/assets/images/services/chiptuning/BMW F97 X3M 480-600_  600-800/IMG_4686.mp3",
    },
    {
      id: 8,
      make: "BMW",
      model: "G05 X5",
      engine: "40i xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G05 X5 40i xDrive/BMW G05 X5 40i xDrive.jpeg",
      stage: "Stage 1",
      audio:
        "/assets/images/services/chiptuning/BMW G05 X5 40i xDrive/BMW G05 X5 40i xDrive.mp3",
    },
    {
      id: 9,
      make: "BMW",
      model: "G05 X5",
      engine: "45e xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G05 X5 45e xDrive downpipe_ 560-890/IMG_9934-Photoroom.png",
      stage: "Stage 1",
      
      audio:
        "/assets/images/services/chiptuning/BMW G05 X5 45e xDrive downpipe_ 560-890/IMG_9950.mp3",
    },
    {
      id: 10,
      make: "BMW",
      model: "G20",
      engine: "330i xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G20 330i xDrive/BMW G20 330i xDrive.jpeg",
      stage: "Stage 1",
      audio:
        "/assets/images/services/chiptuning/BMW G20 330i xDrive/BMW G20 330i xDrive.mp3",
    },
    {
      id: 11,
      make: "BMW",
      model: "G32",
      engine: "640i GT xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G32 640i GT xDrive/BMW G32 640i GT xDrive.jpeg",
      stage: "Stage 1",
      audio:
        "/assets/images/services/chiptuning/BMW G32 640i GT xDrive/BMW G32 640i GT xDrive.mp3",
    },
    {
      id: 12,
      make: "Mercedes-AMG",
      model: "W205",
      engine: "C63",
      image:
        "/assets/images/services/chiptuning/Mercedes-AMG W205 C63/Mercedes AMG C63 main all W205 2025-16.jpg",
      stage: "Stage 1",
      audio:
        "/assets/images/services/chiptuning/Mercedes-AMG W205 C63/Mercedes-AMG W205 C63.mp3",
    },
    {
      id: 13,
      make: "BMW",
      model: "750i",
      engine: "F01 N63",
      image: "/assets/images/services/chiptuning/bmw 750i/2013 BMW 750i.jpeg",
      stage: "Stage 1",
      audio: "/assets/images/services/chiptuning/bmw 750i/BMW F01 750i N63.mp3",
    },
    {
      id: 14,
      make: "BMW",
      model: "F10",
      engine: "530d xDrive",
      image:
        "/assets/images/services/chiptuning/bmw f10 530d/BMW F10 530d xDrive.jpeg",
      stage: "Stage 1",
      audio:
        "/assets/images/services/chiptuning/bmw f10 530d/BMW F10 530d xDrive.mp3",
    },

    
    {
      id: 15,
      make: "AUDI",
      model: "Q8",
      engine: "50 TDI quattro",
      image:
        "/assets/images/services/chiptuning/AUDI Q8 50 TDI quattro 286-620 350-760/3c614180-6dfa-4064-b7b1-c6c7997533b9_b7022f79cca975abdc28614fb6fa153c296ff98ed4e38cb0c203dbcd5a5b8e8a-Photoroom.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 286, nm: 620 },
        stage: { hp: 350, nm: 760 },
      },
    },
    {
      id: 16,
      make: "BMW",
      model: "E70 X5",
      engine: "30d xDrive",
      image:
        "/assets/images/services/chiptuning/BMW E70 X5 30d xDrive 235-520 _ 280-600/BMW_X5-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 235, nm: 520 },
        stage: { hp: 280, nm: 600 },
      },
    },
    {
      id: 17,
      make: "BMW",
      model: "E90",
      engine: "318d M47",
      image:
        "/assets/images/services/chiptuning/BMW E90 318d M47 122-280 170-370/bmw-318d-320d-facelift-lci-102560_432357_3xl-Photoroom.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 122, nm: 280 },
        stage: { hp: 170, nm: 370 },
      },
    },
    {
      id: 18,
      make: "BMW",
      model: "E90",
      engine: "320d N47",
      image:
        "/assets/images/services/chiptuning/BMW E90 320d N47 177- 380  230-470/e90.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 177, nm: 380 },
        stage: { hp: 230, nm: 470 },
      },
    },
    {
      id: 19,
      make: "BMW",
      model: "F10",
      engine: "520d xDrive",
      image:
        "/assets/images/services/chiptuning/BMW F10 520d xDrive 190-400 _ 230-480/IMG_5364-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 190, nm: 400 },
        stage: { hp: 230, nm: 480 },
      },
    },
    {
      id: 20,
      make: "BMW",
      model: "F15 X5",
      engine: "40d xDrive",
      image:
        "/assets/images/services/chiptuning/BMW F15 X5 40d xDrive 313-630  _ 370-740/bmw_f15_x5_30d_xdrive.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 313, nm: 630 },
        stage: { hp: 370, nm: 740 },
      },
    },
    {
      id: 21,
      make: "BMW",
      model: "F15 X5",
      engine: "40e",
      image:
        "/assets/images/services/chiptuning/BMW F15 X5 40e 313-450 _ 405-660/x5-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 313, nm: 450 },
        stage: { hp: 405, nm: 660 },
      },
    },
    {
      id: 22,
      make: "BMW",
      model: "F15 X5",
      engine: "M50d xDrive",
      image:
        "/assets/images/services/chiptuning/BMW F15 X5 M50d xDrive 381LE-740NM 425LE-810NM/bmw_x5__627508324bx-Photoroom.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 381, nm: 740 },
        stage: { hp: 425, nm: 810 },
      },
    },
    {
      id: 23,
      make: "BMW",
      model: "F20",
      engine: "118d",
      image:
        "/assets/images/services/chiptuning/BMW F20 118d 150LE-320NM 210LE-450NM/bmw_f20_118d.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 150, nm: 320 },
        stage: { hp: 210, nm: 450 },
      },
    },
    {
      id: 24,
      make: "BMW",
      model: "F30",
      engine: "340i MPPSK",
      image:
        "/assets/images/services/chiptuning/BMW F30 340i MPPSK 360-500 _ 450-620/IMG_3206-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 360, nm: 500 },
        stage: { hp: 450, nm: 620 },
      },
    },
    {
      id: 25,
      make: "BMW",
      model: "F32",
      engine: "440i",
      image:
        "/assets/images/services/chiptuning/BMW F32 440i 326-450 _ 420-600/f32_440i-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 326, nm: 450 },
        stage: { hp: 420, nm: 600 },
      },
    },
    {
      id: 26,
      make: "BMW",
      model: "F34 3 GT",
      engine: "320i N20 xDrive",
      image:
        "/assets/images/services/chiptuning/BMW F34 3 GT 320i N20 xDrive 184LE-270NM 270LE-430NM/img-1736265102-112387bae9e4-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 184, nm: 270 },
        stage: { hp: 270, nm: 430 },
      },
    },
    {
      id: 27,
      make: "BMW",
      model: "F36",
      engine: "420d xDrive",
      image:
        "/assets/images/services/chiptuning/BMW F36 420d xDrive_ 190-400 _230-480/f36_420d-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 190, nm: 400 },
        stage: { hp: 230, nm: 480 },
      },
    },
    {
      id: 28,
      make: "BMW",
      model: "F36",
      engine: "430i",
      image:
        "/assets/images/services/chiptuning/BMW F36 430i 252-350 _ 310-470/f36_430i-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 252, nm: 350 },
        stage: { hp: 310, nm: 470 },
      },
    },
    {
      id: 29,
      make: "BMW",
      model: "F46",
      engine: "218d Gran Tourer",
      image:
        "/assets/images/services/chiptuning/BMW F46 218d Gran Tourer 150LE-360NM 210LE-450NM/BMW-2-Series-Gran-Tourer-9-e1431082216418-630x373-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 150, nm: 360 },
        stage: { hp: 210, nm: 450 },
      },
    },
    {
      id: 30,
      make: "BMW",
      model: "F48 X1",
      engine: "20i xDrive",
      image:
        "/assets/images/services/chiptuning/BMW F48 X1 20i xDrive 192LE-280NM 270LE-450NM/2454c998-b40f-4b32-976b-57d613552fdd-Photoroom.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 192, nm: 280 },
        stage: { hp: 270, nm: 450 },
      },
    },
    {
      id: 31,
      make: "BMW",
      model: "F80 M3",
      engine: "",
      image:
        "/assets/images/services/chiptuning/BMW F80 M3 431-550 _ 500-720/f80_m3-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 431, nm: 550 },
        stage: { hp: 500, nm: 720 },
      },
    },
    {
      id: 32,
      make: "BMW",
      model: "F87 M2",
      engine: "Competition S55",
      image:
        "/assets/images/services/chiptuning/BMW F87 M2 Competition S55 stage2 411LE-550NM 550LE-800NM/48307933041_1235dd8430_b-Photoroom.webp",
      stage: "Stage 2",
      stats: {
        factory: { hp: 411, nm: 550 },
        stage: { hp: 550, nm: 800 },
      },
    },
    {
      id: 33,
      make: "BMW",
      model: "F90 M5",
      engine: "USA modell",
      image:
        "/assets/images/services/chiptuning/BMW F90 M5 USA modell 625-750 _ 770-930/usa_model-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 625, nm: 750 },
        stage: { hp: 770, nm: 930 },
      },
    },
    {
      id: 34,
      make: "BMW",
      model: "F97 X3M",
      engine: "Competition",
      image:
        "/assets/images/services/chiptuning/BMW F97 X3M Competition 510-600 _ 630-850/f97-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 510, nm: 600 },
        stage: { hp: 630, nm: 850 },
      },
    },
    {
      id: 35,
      make: "BMW",
      model: "F97 X3M",
      engine: "xDrive",
      image:
        "/assets/images/services/chiptuning/BMW F97 X3M xDrive 480LE-600NM  630LE-820NM/bmw_f97.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 480, nm: 600 },
        stage: { hp: 630, nm: 820 },
      },
    },
    {
      id: 36,
      make: "BMW",
      model: "G02 X4",
      engine: "20d mildhybrid xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G02 X4 20d mildhybrid xDrive 190LE-400NM 230LE-510NM/bmw-x4-2021-Photoroom.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 190, nm: 400 },
        stage: { hp: 230, nm: 510 },
      },
    },
    {
      id: 37,
      make: "BMW",
      model: "G05 X5",
      engine: "45e xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G05 45e xDrive_ 394-600 _ 510-820/IMG_3928-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 394, nm: 600 },
        stage: { hp: 510, nm: 820 },
      },
    },
    {
      id: 38,
      make: "BMW",
      model: "G05 X5",
      engine: "30d xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G05 X5 30d xDrive 265LE-620NM 330LE-740NM/BMW-X5-G05-min-Photoroom.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 265, nm: 620 },
        stage: { hp: 330, nm: 740 },
      },
    },
    {
      id: 39,
      make: "BMW",
      model: "G05 X5",
      engine: "40d xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G05 X5 40d xDrive 320LE-680NM 400LE-800NM/6220550-1-Photoroom.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 320, nm: 680 },
        stage: { hp: 400, nm: 800 },
      },
    },
    {
      id: 40,
      make: "BMW",
      model: "G11",
      engine: "740d xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G11 740d xDrive 320-680 _ 400-800/IMG_3228-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 320, nm: 680 },
        stage: { hp: 400, nm: 800 },
      },
    },
    {
      id: 41,
      make: "BMW",
      model: "G12",
      engine: "740Ld xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G12 740Ld xDrive 320LE-680NM 400LE-800NM/G12-BMW-740Le-xDrive-M-Sport-5-Photoroom.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 320, nm: 680 },
        stage: { hp: 400, nm: 800 },
      },
    },
    {
      id: 42,
      make: "BMW",
      model: "G29 Z4",
      engine: "M40i",
      image:
        "/assets/images/services/chiptuning/BMW G29 Z4 M40i_ 340-500 _ 420-620/IMG_0554-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 340, nm: 500 },
        stage: { hp: 420, nm: 620 },
      },
    },
    {
      id: 43,
      make: "BMW",
      model: "G30",
      engine: "520d mildhybrid xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G30 520d mildhybrid xDrive 190LE-400NM 230LE-500NM/images_bmw_5-series_2017_20_b-Photoroom.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 190, nm: 400 },
        stage: { hp: 230, nm: 500 },
      },
    },
    {
      id: 44,
      make: "BMW",
      model: "G30",
      engine: "520d xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G30 520d xDrive 190LE-400NM 230LE-500NM/bmw_g30.png",
      stage: "Stage 1",
      stats: {
        factory: { hp: 190, nm: 400 },
        stage: { hp: 230, nm: 500 },
      },
    },
    {
      id: 45,
      make: "BMW",
      model: "G80 M3",
      engine: "Competition xDrive",
      image:
        "/assets/images/services/chiptuning/BMW G80 M3 Competition xDrive 510-650 _ 640-830/g80.jpg",
      stage: "Stage 1",
      stats: {
        factory: { hp: 510, nm: 650 },
        stage: { hp: 640, nm: 830 },
      },
    },
    {
      id: 46,
      make: "BMW",
      model: "G87 M2",
      engine: "CS tuning package",
      image:
        "/assets/images/services/chiptuning/BMW G87 M2 460-550 _ 550 650 CS tuning package/IMG_3416.JPG",
      stage: "Stage 1",
      stats: {
        factory: { hp: 460, nm: 550 },
        stage: { hp: 550, nm: 650 },
      },
    },
    {
      id: 47,
      make: "Mercedes",
      model: "X253",
      engine: "GLC350d 4Matic",
      image:
        "/assets/images/services/chiptuning/Mercedes X253 GLC350d 4Matic 258LE-620NM  305LE-720NM/Mercedes-Benz_X254_1X7A6343-Photoroom.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 258, nm: 620 },
        stage: { hp: 305, nm: 720 },
      },
    },
    {
      id: 48,
      make: "VW",
      model: "Arteon",
      engine: "2.0 TDI",
      image:
        "/assets/images/services/chiptuning/VW Arteon 2.0 TDI 200-400 _ 230-470/IMG_3839.jpg",
      stage: "Stage 1",
      stats: {
        factory: { hp: 200, nm: 400 },
        stage: { hp: 230, nm: 470 },
      },
    },
    {
      id: 49,
      make: "VW",
      model: "Arteon",
      engine: "Shooting brake 2.0TDI DSG",
      image:
        "/assets/images/services/chiptuning/VW Arteon Shooting brake 2.0TDI DSG 190LE-400NM 220LE-460NM/volkswagen-arteon-shooting-brake-2-0tdi-110kw-dsg-elegance-t-Photoroom.webp",
      stage: "Stage 1",
      stats: {
        factory: { hp: 190, nm: 400 },
        stage: { hp: 220, nm: 460 },
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      {}
      <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/Fektetett kepek/IMG_0001.webp"
            alt="BMW Chiptuning"
            className="w-full h-full object-cover filter brightness-50 blur-[5px]"
          />
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-4  tracking-tight text-white drop-shadow-lg">
            BMW Teljesítmény{" "}
            <span className="text-bmw-blue">Motoroptimalizálás</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium">
            Szabadítsa fel BMW-je rejtett teljesítményét professzionális
            motoroptimalizálással és ECU optimalizálással.
          </p>
        </div>
      </div>

      {}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {}
            <div className="bg-[#111827] p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900/20 p-3 rounded-lg mr-4">
                  <Cpu className="w-8 h-8 text-bmw-blue" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Mi a motoroptimalizálás?
                </h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Zap className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      Teljesítménynövelés
                    </strong>
                    <span className="text-gray-400">
                      ECU szoftver optimalizálás a nagyobb lóerőért, nyomatékért
                      és a motor karakterisztikájának finomhangolásáért.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Unlock className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      Gyári korlátok feloldása
                    </strong>
                    <span className="text-gray-400">
                      A konzervatív gyári beállítások biztonságos módosítása a
                      jobb hatékonyság és dinamika érdekében.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Activity className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      Finomabb vezethetőség
                    </strong>
                    <span className="text-gray-400">
                      A motor karakterisztikájának optimalizálása simább
                      gyorsulást, egyenletesebb teljesítményátadást és jobb
                      vezetési élményt biztosít.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Leaf className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      Környezettudatosság
                    </strong>
                    <span className="text-gray-400">
                      A megfelelő szoftveroptimalizálás csökkentheti a
                      felesleges üzemanyag-felhasználást és a
                      károsanyag-kibocsátást.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Sliders className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      Egyedileg szabható beállítások
                    </strong>
                    <span className="text-gray-400">
                      Stage 1–3 tuning vagy személyre szabott konfiguráció a
                      vezetési stílushoz, a jármű típusához és a mindennapi
                      használathoz.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Cog className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      Váltóoptimalizálás
                    </strong>
                    <span className="text-gray-400">
                      Gyorsabb, simább váltások, optimális
                      fordulatszám-átmenetek a motorhoz igazítva.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      Hosszú távú motorvédelem
                    </strong>
                    <span className="text-gray-400">
                      Az optimalizálás nem csak teljesítménynövelést jelent,
                      hanem a motor és a hajtáslánc élettartamát is figyelembe
                      veszi, a gyári biztonsági korlátok mellett.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Trophy className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      Versenyképesség és élmény
                    </strong>
                    <span className="text-gray-400">
                      Sportos vezetési élmény a mindennapi forgalomban vagy
                      pályán, anélkül, hogy kompromisszumot kellene kötni a
                      motor élettartamában.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {}
            <div className="bg-[#111827] p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900/20 p-3 rounded-lg mr-4">
                  <Settings className="w-8 h-8 text-bmw-blue" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Szolgáltatásaink
                </h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Gauge className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">Stage 1 tuning</strong>
                    <span className="text-gray-400">
                      Alapszintű teljesítménynövelés, 15-25% többlet
                      teljesítmény és nyomaték.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Zap className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">Stage 2 tuning</strong>
                    <span className="text-gray-400">
                      Haladó szintű optimalizálás, akár 30-40%
                      teljesítménynövelés.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Fuel className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      Gazdaságossági tuning
                    </strong>
                    <span className="text-gray-400">
                      Üzemanyag-fogyasztás csökkentése optimalizált
                      motorvezérléssel.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <XCircle className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      DPF/EGR eltávolítás
                    </strong>
                    <span className="text-gray-400">
                      Környezetvédelmi rendszerek kikapcsolása .
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Unlock className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      Sebességhatároló eltávolítás
                    </strong>
                    <span className="text-gray-400">
                      Gyári sebességkorlátozás feloldása.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Cog className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      Váltó optimalizálás
                    </strong>
                    <span className="text-gray-400">
                      Váltó karakterisztika finomhangolása a gyorsabb és simább
                      váltásokért.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Gauge className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      Olajnyomás emelés
                    </strong>
                    <span className="text-gray-400">
                      Motor és váltó olajnyomás optimalizálása a tartósabb
                      működésért.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Droplet className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">Adblue SCR</strong>
                    <span className="text-gray-400">
                      Adblue rendszer szoftveres optimalizálása és javítása.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Wrench className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">
                      NOx szenzor javítás
                    </strong>
                    <span className="text-gray-400">
                      Szenzorral kapcsolatos hibák szoftveres diagnosztikája és
                      orvoslása.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-bmw-blue mr-3 mt-1">
                    <Settings className="w-5 h-5" />
                  </span>
                  <div>
                    <strong className="text-white block">Egyedi tuning</strong>
                    <span className="text-gray-400">
                      Speciális igényekhez szabott motoroptimalizálás.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-bmw-blue">
              Motoroptimalizált Autóink
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hallgassa meg a motoroptimalizált autók lenyűgöző hangját!
              Kattintson a lejátszás gombra és élvezze a teljesítménynövelés
              eredményét.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <ChiptuningCarCard
                key={car.id}
                car={car}
                isPlaying={playingCarId === car.id}
                onToggle={handleToggleAudio}
                onEnded={handleAudioEnded}
              />
            ))}
          </div>

          {}
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
            Kérjen ajánlatot motoroptimalizálásra!
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 font-medium drop-shadow-sm max-w-3xl mx-auto">
            Szabadítsa fel BMW-je rejtett teljesítményét! Vegye fel velünk a
            kapcsolatot, és kérjen személyre szabott ajánlatot professzionális
            motoroptimalizálási szolgáltatásunkra.
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

export default ChiptuningService;
