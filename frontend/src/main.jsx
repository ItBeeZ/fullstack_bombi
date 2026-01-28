import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AnimatedLayout from "./components/AnimatedLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import { lazyWithRetry } from "./utils/lazyWithRetry";
import { LanguageProvider } from "./context/LanguageContext";
import "./index.css";

const Home = lazyWithRetry(() => import("./pages/Home/Home"));
const GeneralService = lazyWithRetry(
  () => import("./pages/Services/GeneralService"),
);
const ChiptuningService = lazyWithRetry(
  () => import("./pages/Services/ChiptuningService"),
);
const SoftwareService = lazyWithRetry(
  () => import("./pages/Services/SoftwareService"),
);
const TransmissionService = lazyWithRetry(
  () => import("./pages/Services/TransmissionService"),
);
const CosmeticService = lazyWithRetry(
  () => import("./pages/Services/CosmeticService"),
);
const PartsService = lazyWithRetry(
  () => import("./pages/Services/PartsService"),
);
const About = lazyWithRetry(() => import("./pages/About/About"));
const Contact = lazyWithRetry(() => import("./pages/Contact/Contact"));

const router = createBrowserRouter([
  {
    element: <AnimatedLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services/general",
        element: <GeneralService />,
      },
      {
        path: "/services/chiptuning",
        element: <ChiptuningService />,
      },
      {
        path: "/services/software",
        element: <SoftwareService />,
      },
      {
        path: "/services/transmission",
        element: <TransmissionService />,
      },
      {
        path: "/services/cosmetic",
        element: <CosmeticService />,
      },
      {
        path: "/services/parts",
        element: <PartsService />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
);
