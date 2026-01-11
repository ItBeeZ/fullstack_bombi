import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AnimatedLayout from "./components/AnimatedLayout";
import "./index.css";

const Home = lazy(() => import("./pages/Home/Home"));
const GeneralService = lazy(() => import("./pages/Services/GeneralService"));
const ChiptuningService = lazy(() => import("./pages/Services/ChiptuningService"));
const SoftwareService = lazy(() => import("./pages/Services/SoftwareService"));
const TransmissionService = lazy(() => import("./pages/Services/TransmissionService"));
const CosmeticService = lazy(() => import("./pages/Services/CosmeticService"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const router = createBrowserRouter([
  {
    element: <AnimatedLayout />,
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
