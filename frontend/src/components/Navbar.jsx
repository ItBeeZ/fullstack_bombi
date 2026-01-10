import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileLanguagesOpen, setIsMobileLanguagesOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("HU");

  const languages = [
    {
      code: "HU",
      label: "Magyar",
      flag: (
        <svg viewBox="0 0 3 2" width="24" height="16">
          <rect width="3" height="2" fill="#fff" />
          <rect width="3" height="0.67" y="0" fill="#cd2a3e" />
          <rect width="3" height="0.67" y="1.33" fill="#436f4d" />
        </svg>
      ),
    },
    {
      code: "DE",
      label: "Deutsch",
      flag: (
        <svg viewBox="0 0 5 3" width="24" height="16">
          <rect width="5" height="1" y="0" fill="#000" />
          <rect width="5" height="1" y="1" fill="#dd0000" />
          <rect width="5" height="1" y="2" fill="#ffce00" />
        </svg>
      ),
    },
    {
      code: "EN",
      label: "English",
      flag: (
        <svg viewBox="0 0 60 30" width="24" height="16">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 l60,30 M60,0 l-60,30" stroke="#fff" strokeWidth="6" />
            <path
              d="M0,0 l60,30 M60,0 l-60,30"
              stroke="#c8102e"
              strokeWidth="4"
            />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6" />
          </g>
        </svg>
      ),
    },
  ];

  const currentFlag = languages.find((l) => l.code === currentLang)?.flag;

  const serviceLinks = [
    {
      to: "/services/general",
      title: "Általános szerviz",
      subtitle: "Karbantartás és javítás",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <g>
            <path d="M28.7,18.8l-1.8,2.9,1.4,1.4,2.9-1.8,1,.4L33,25h2l.8-3.3,1-.4,2.9,1.8,1.4-1.4-1.8-2.9a4.2,4.2,0,0,0,.4-1L43,17V15l-3.3-.8a4.2,4.2,0,0,0-.4-1l1.8-2.9L39.7,8.9l-2.9,1.8-1-.4L35,7H33l-.8,3.3-1,.4L28.3,8.9l-1.4,1.4,1.8,2.9a4.2,4.2,0,0,0-.4,1L25,15v2l3.3.8A4.2,4.2,0,0,0,28.7,18.8ZM34,14a2,2,0,1,1-2,2A2,2,0,0,1,34,14Z"></path>
            <path d="M42.2,28.7a5.2,5.2,0,0,0-4-1.1l-9.9,1.8a4.5,4.5,0,0,0-1.4-3.3L19.8,19H5a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2H8.3l11.2,9.1,20.4-3.7a5,5,0,0,0,2.3-8.7Zm-3,4.8L20.5,36.9,10,28.2V23h8.2l5.9,5.9a.8.8,0,0,1-1.2,1.2l-3.5-3.5a2,2,0,0,0-2.8,2.8l3.5,3.5a4.5,4.5,0,0,0,3.4,1.4,5.7,5.7,0,0,0,1.8-.3h0l13.6-2.4a1.1,1.1,0,0,1,.8.2.9.9,0,0,1,.3.7A1,1,0,0,1,39.2,33.5Z"></path>
          </g>
        </svg>
      ),
    },
    {
      to: "/services/chiptuning",
      title: "Tuning",
      subtitle: "Teljesítménynövelés",
      icon: (
        <svg
          className="w-10 h-10 text-green-400"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"
            stroke="currentColor"
            strokeWidth="1.5"
          ></path>
          <path
            d="M14 6C12.8954 6 12 5.10457 12 4C12 2.89543 12.8954 2 14 2C15.1046 2 16 2.89543 16 4C16 5.10457 15.1046 6 14 6Z"
            stroke="currentColor"
            strokeWidth="1.5"
          ></path>
          <path
            d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
          ></path>
          <path
            d="M17.5 20L19 20M12 20L14.75 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
          <path
            d="M6.5 4L5 4M12 4L9.25 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
          <path
            d="M19 12H14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
          <path
            d="M19 4L16 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
          <path
            d="M5 20L7.66667 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
          <path
            d="M10 12L7.5 12M5.5 12L5 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </svg>
      ),
    },
    {
      to: "/services/software",
      title: "Szoftver & Programozás",
      subtitle: "Navigáció, CarPlay, Extrák és Retrofit",
      icon: (
        <svg
          className="w-10 h-10 text-purple-400"
          fill="currentColor"
          viewBox="0 0 470 470"
        >
          <path d="M462.5,22.5H7.5C3.357,22.5,0,25.857,0,30v410c0,4.143,3.357,7.5,7.5,7.5h455c4.143,0,7.5-3.357,7.5-7.5V30 C470,25.857,466.643,22.5,462.5,22.5z M455,432.5H15v-395h277.5v45h-255c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h395 c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5h-125v-45H455V432.5z" />
          <circle cx="381.5" cy="60" r="7.5" />
          <circle cx="340.5" cy="60" r="7.5" />
          <circle cx="422.5" cy="60" r="7.5" />
          <path d="M235,206.676c-30.646,0-55.577,24.932-55.577,55.577S204.354,317.83,235,317.83c8.816,0,17.612-2.133,25.436-6.167 c3.682-1.898,5.127-6.422,3.229-10.104c-1.899-3.682-6.422-5.124-10.104-3.229c-5.789,2.985-12.033,4.499-18.561,4.499 c-22.374,0-40.577-18.203-40.577-40.577s18.203-40.577,40.577-40.577s40.577,18.203,40.577,40.577 c0,6.528-1.514,12.772-4.498,18.56c-1.898,3.681-0.453,8.204,3.229,10.104c3.68,1.895,8.203,0.455,10.104-3.229 c4.034-7.821,6.166-16.616,6.166-25.435C290.577,231.607,265.646,206.676,235,206.676z" />
          <path d="M358.087,234.753h-31.543c-1.851-6.15-4.322-12.095-7.387-17.767l22.324-22.323c1.406-1.407,2.196-3.314,2.196-5.304 s-0.79-3.896-2.196-5.304l-28.284-28.284c-2.93-2.928-7.678-2.928-10.607,0l-22.323,22.324c-5.672-3.064-11.616-5.536-17.767-7.387 v-31.543c0-4.143-3.357-7.5-7.5-7.5h-40c-4.143,0-7.5,3.357-7.5,7.5v31.543c-6.15,1.851-12.095,4.322-17.767,7.387l-22.323-22.324 c-2.93-2.928-7.678-2.928-10.607,0l-28.284,28.284c-1.406,1.407-2.196,3.314-2.196,5.304s0.79,3.896,2.196,5.304l22.324,22.323 c-3.064,5.672-5.536,11.616-7.387,17.767h-31.543c-4.143,0-7.5,3.357-7.5,7.5v40c0,4.143,3.357,7.5,7.5,7.5h31.544 c1.851,6.152,4.321,12.096,7.386,17.767l-22.323,22.322c-1.407,1.407-2.197,3.314-2.197,5.304s0.79,3.896,2.196,5.304 l28.284,28.284c2.929,2.927,7.678,2.929,10.606,0l22.324-22.323c5.672,3.064,11.616,5.536,17.767,7.387v31.542 c0,4.143,3.357,7.5,7.5,7.5h40c4.143,0,7.5-3.357,7.5-7.5v-31.542c6.15-1.851,12.095-4.322,17.767-7.387l22.324,22.323 c2.928,2.928,7.677,2.928,10.606,0l28.284-28.284c1.406-1.407,2.196-3.314,2.196-5.304s-0.79-3.896-2.197-5.304l-22.323-22.322 c3.064-5.672,5.535-11.615,7.386-17.767h31.544c4.143,0,7.5-3.357,7.5-7.5v-40C365.587,238.11,362.229,234.753,358.087,234.753z M350.587,274.753h-29.802c-3.486,0-6.513,2.402-7.305,5.798c-1.995,8.563-5.383,16.712-10.069,24.223 c-1.848,2.961-1.408,6.805,1.061,9.273l21.1,21.099l-17.678,17.678l-21.101-21.1c-2.468-2.467-6.31-2.906-9.272-1.06 c-7.511,4.687-15.661,8.074-24.223,10.069c-3.396,0.792-5.798,3.818-5.798,7.305v29.801h-25v-29.801 c0-3.486-2.402-6.513-5.798-7.305c-8.562-1.995-16.712-5.383-24.223-10.069c-2.962-1.847-6.807-1.406-9.272,1.06l-21.101,21.1 l-17.678-17.678l21.1-21.099c2.469-2.469,2.908-6.313,1.06-9.274c-4.685-7.508-8.072-15.657-10.068-24.222 c-0.792-3.396-3.818-5.798-7.305-5.798h-29.802v-25h29.802c3.486,0,6.513-2.402,7.305-5.798 c1.995-8.562,5.383-16.712,10.069-24.223c1.848-2.961,1.408-6.805-1.06-9.273l-21.101-21.1l17.678-17.678l21.1,21.101 c2.468,2.468,6.312,2.908,9.273,1.06c7.511-4.687,15.661-8.074,24.223-10.069c3.396-0.792,5.798-3.818,5.798-7.305v-29.802h25 v29.802c0,3.486,2.402,6.513,5.798,7.305c8.562,1.995,16.712,5.383,24.223,10.069c2.962,1.848,6.807,1.405,9.273-1.06l21.1-21.101 l17.678,17.678l-21.101,21.1c-2.468,2.469-2.907,6.313-1.06,9.273c4.687,7.511,8.074,15.661,10.069,24.223 c0.792,3.396,3.818,5.798,7.305,5.798h29.802V274.753z" />
        </svg>
      ),
    },
    {
      to: "/services/transmission",
      title: "Vezérlés- és automata váltó olajcsere",
      subtitle: "Hajtáslánc teljes körű szerviz",
      icon: (
        <svg
          className="w-10 h-10 text-red-400"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <g>
                <path d="M384,341.333c-23.526,0-42.667,19.14-42.667,42.667c0,23.526,19.14,42.667,42.667,42.667 c23.526,0,42.667-19.14,42.667-42.667C426.667,360.474,407.526,341.333,384,341.333z" />
                <path d="M503.467,349.867h-17.587c-3.191,0-6.05-1.937-7.373-5.163c-1.229-2.987-0.572-6.366,1.672-8.61l12.433-12.433 c3.328-3.337,3.328-8.738,0-12.066l-36.207-36.207c-3.2-3.2-8.866-3.2-12.066,0l-12.433,12.433 c-2.244,2.236-5.623,2.901-8.832,1.579c-2.995-1.229-4.941-4.096-4.941-7.287v-17.579c0-4.71-3.814-8.533-8.533-8.533h-51.2 c-4.719,0-8.533,3.823-8.533,8.533v17.579c0,3.191-1.946,6.059-5.154,7.373c-2.978,1.229-6.383,0.58-8.619-1.664l-12.433-12.433 c-3.2-3.2-8.866-3.2-12.066,0l-36.207,36.207c-3.328,3.328-3.328,8.73,0,12.066l12.433,12.433 c2.244,2.244,2.901,5.623,1.579,8.832c-1.229,3.004-4.087,4.941-7.279,4.941h-17.587c-4.719,0-8.533,3.823-8.533,8.533v51.2 c0,4.71,3.814,8.533,8.533,8.533h17.587c3.191,0,6.05,1.937,7.373,5.163c1.229,2.987,0.572,6.366-1.673,8.61l-12.433,12.433 c-3.328,3.337-3.328,8.738,0,12.066l36.207,36.207c3.2,3.2,8.866,3.2,12.066,0l12.433-12.433c2.227-2.236,5.606-2.91,8.832-1.579 c2.995,1.229,4.941,4.096,4.941,7.287v17.579c0,4.71,3.814,8.533,8.533,8.533h51.2c4.719,0,8.533-3.823,8.533-8.533v-17.579 c0-3.191,1.946-6.059,5.154-7.373c2.97-1.229,6.374-0.58,8.619,1.664l12.433,12.433c3.2,3.2,8.866,3.2,12.066,0l36.207-36.207 c3.328-3.328,3.328-8.73,0-12.066l-12.433-12.433c-2.244-2.244-2.901-5.623-1.579-8.832c1.229-3.004,4.087-4.941,7.279-4.941 h17.587c4.719,0,8.533-3.823,8.533-8.533v-51.2C512,353.69,508.186,349.867,503.467,349.867z M384,443.733 c-32.93,0-59.733-26.795-59.733-59.733c0-32.939,26.803-59.733,59.733-59.733c32.93,0,59.733,26.795,59.733,59.733 C443.733,416.939,416.93,443.733,384,443.733z" />
                <path d="M162.133,93.867c-37.641,0-68.267,30.626-68.267,68.267c0,37.641,30.626,68.267,68.267,68.267 c37.641,0,68.267-30.626,68.267-68.267C230.4,124.493,199.774,93.867,162.133,93.867z" />
                <path d="M294.886,258.671c1.596-1.596,2.5-3.763,2.5-6.033c0-2.261-0.905-4.429-2.5-6.033l-1.297-1.289 c-7.817-7.817-9.933-19.874-5.146-31.326c4.437-10.769,14.43-17.724,25.455-17.724h1.835c4.719,0,8.533-3.823,8.533-8.533v-51.2 c0-4.71-3.814-8.533-8.533-8.533h-1.835c-11.025,0-21.018-6.955-25.711-18.321c-4.531-10.854-2.415-22.921,5.402-30.729 l1.297-1.289c1.596-1.604,2.5-3.772,2.5-6.033c0-2.27-0.905-4.437-2.5-6.033l-36.215-36.207c-3.328-3.337-8.73-3.337-12.066,0 l-1.289,1.289c-7.808,7.817-19.857,9.941-31.326,5.154c-10.769-4.446-17.724-14.438-17.724-25.464V8.533 c0-4.71-3.814-8.533-8.533-8.533h-51.2C131.814,0,128,3.823,128,8.533v1.835c0,11.025-6.955,21.018-18.321,25.711 c-10.837,4.531-22.904,2.423-30.729-5.402l-1.289-1.289c-3.337-3.337-8.738-3.337-12.066,0L29.38,65.596 c-1.596,1.596-2.5,3.763-2.5,6.033c0,2.261,0.905,4.429,2.5,6.033l1.297,1.289c7.817,7.808,9.933,19.874,5.146,31.326 C31.386,121.045,21.393,128,10.368,128H8.533C3.814,128,0,131.823,0,136.533v51.2c0,4.71,3.814,8.533,8.533,8.533h1.835 c11.025,0,21.018,6.955,25.711,18.321c4.531,10.854,2.415,22.912-5.402,30.729l-1.297,1.289c-1.596,1.604-2.5,3.772-2.5,6.033 c0,2.27,0.905,4.437,2.5,6.033l36.216,36.207c3.328,3.337,8.73,3.337,12.066,0l1.289-1.289 c7.808-7.817,19.857-9.941,31.326-5.154C121.045,292.881,128,302.874,128,313.899v1.835c0,4.71,3.814,8.533,8.533,8.533h51.2 c4.719,0,8.533-3.823,8.533-8.533v-1.835c0-11.025,6.955-21.018,18.321-25.711c10.846-4.514,22.903-2.415,30.729,5.402 l1.289,1.289c3.337,3.337,8.738,3.337,12.066,0L294.886,258.671z M162.133,247.467c-47.053,0-85.333-38.281-85.333-85.333 S115.081,76.8,162.133,76.8s85.333,38.281,85.333,85.333S209.186,247.467,162.133,247.467z" />
              </g>
            </g>
          </g>
        </svg>
      ),
    },
    {
      to: "/services/cosmetic",
      title: "Autókozmetika",
      subtitle: "Külső és belső tisztítás",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <g>
            <path d="M28.7,18.8l-1.8,2.9,1.4,1.4,2.9-1.8,1,.4L33,25h2l.8-3.3,1-.4,2.9,1.8,1.4-1.4-1.8-2.9a4.2,4.2,0,0,0,.4-1L43,17V15l-3.3-.8a4.2,4.2,0,0,0-.4-1l1.8-2.9L39.7,8.9l-2.9,1.8-1-.4L35,7H33l-.8,3.3-1,.4L28.3,8.9l-1.4,1.4,1.8,2.9a4.2,4.2,0,0,0-.4,1L25,15v2l3.3.8A4.2,4.2,0,0,0,28.7,18.8ZM34,14a2,2,0,1,1-2,2A2,2,0,0,1,34,14Z"></path>
            <path d="M42.2,28.7a5.2,5.2,0,0,0-4-1.1l-9.9,1.8a4.5,4.5,0,0,0-1.4-3.3L19.8,19H5a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2H8.3l11.2,9.1,20.4-3.7a5,5,0,0,0,2.3-8.7Zm-3,4.8L20.5,36.9,10,28.2V23h8.2l5.9,5.9a.8.8,0,0,1-1.2,1.2l-3.5-3.5a2,2,0,0,0-2.8,2.8l3.5,3.5a4.5,4.5,0,0,0,3.4,1.4,5.7,5.7,0,0,0,1.8-.3h0l13.6-2.4a1.1,1.1,0,0,1,.8.2.9.9,0,0,1,.3.7A1,1,0,0,1,39.2,33.5Z"></path>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <nav className="bg-black text-white h-20 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto max-w-7xl h-full flex justify-between items-center px-4">
        <div className="flex items-center space-x-2 h-full">
          {/* Logo placeholder */}
          <Link to="/" className="relative w-[120px] h-full block">
            <img
              src="/assets/images/logok/logo-without-bg.webp"
              alt="Logo"
              className="absolute -top-2 left-0 w-full h-24 object-contain"
            />
          </Link>
          <span className="text-xl font-bold  tracking-wider">
            BMW Szerviz Bömbis István
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300 py-2">
              {currentFlag}
              <span>{currentLang}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {/* Language Dropdown */}
            <div className="absolute left-0 mt-0 w-32 bg-gray-900 border border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-800 transition flex items-center space-x-2"
                  >
                    {lang.flag}
                    <span>{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="flex items-center space-x-1 hover:text-bmw-blue transition"
          >
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Kezdőlap</span>
          </Link>
          <div className="relative group">
            <div className="flex items-center space-x-1 hover:text-bmw-blue transition py-2 cursor-pointer">
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <span>Szolgáltatások</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {/* Dropdown Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-72 bg-gray-900 border border-gray-700 rounded-md shadow-lg opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out z-50">
              <div className="py-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-3 px-3 py-1 hover:bg-gray-800 transition border-b border-gray-800 last:border-0"
                  >
                    <div className="shrink-0">{link.icon}</div>
                    <div className="flex flex-col">
                      <span className="font-bold text-white leading-tight">
                        {link.title}
                      </span>
                      <span className="text-xs text-gray-400">
                        {link.subtitle}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            to="/about"
            className="flex items-center space-x-1 hover:text-bmw-blue transition"
          >
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Rólunk</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-1 hover:text-bmw-blue transition"
          >
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Kapcsolat</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#000000] shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4 space-y-4">
          <Link
            to="/"
            className="flex items-center space-x-2 py-2 hover:text-bmw-blue"
          >
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Kezdőlap</span>
          </Link>
          <div className="space-y-1">
            <div
              className="flex items-center justify-between cursor-pointer py-2 hover:text-bmw-blue"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              <div className="flex items-center space-x-2">
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span>Szolgáltatások</span>
              </div>
              <button className="p-2 text-gray-300 hover:text-white focus:outline-none">
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {isMobileServicesOpen && (
              <div className="pl-4 space-y-2 bg-[#1C2A42] rounded-md py-2 mt-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-start gap-3 py-1 px-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                  >
                    {link.icon && (
                      <div className="scale-75 origin-top-left shrink-0 mt-0.5">
                        {link.icon}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="font-medium">{link.title}</span>
                      <span className="text-xs text-gray-500 mt-0.5">
                        {link.subtitle}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/about"
            className="flex items-center space-x-2 py-2 hover:text-bmw-blue"
          >
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Rólunk</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-2 py-2 hover:text-bmw-blue"
          >
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Kapcsolat</span>
          </Link>
          {/* Language Selection for Mobile */}
          <div className="pt-4 border-t border-gray-800">
            <div
              className="flex items-center justify-between cursor-pointer py-2 hover:text-bmw-blue"
              onClick={() => setIsMobileLanguagesOpen(!isMobileLanguagesOpen)}
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 overflow-hidden rounded-sm shadow-sm">
                  {currentFlag}
                </div>
                <span className="text-gray-400 font-medium">
                  Nyelv kiválasztása
                </span>
              </div>
              <button className="p-2 text-gray-300 hover:text-white focus:outline-none">
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isMobileLanguagesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {isMobileLanguagesOpen && (
              <div className="pl-4 space-y-2 bg-gray-900/50 rounded-md py-2 mt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md transition-all duration-200 ${
                      currentLang === lang.code
                        ? "bg-gray-800 text-white shadow-sm border border-gray-700"
                        : "text-gray-400 hover:text-gray-200 hover:bg-gray-900/50"
                    }`}
                  >
                    <div className="w-6 overflow-hidden rounded-sm shadow-sm">
                      {lang.flag}
                    </div>
                    <span className="font-medium text-sm">{lang.label}</span>
                    {currentLang === lang.code && (
                      <svg
                        className="w-4 h-4 ml-auto text-bmw-blue"
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
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
