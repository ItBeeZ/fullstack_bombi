import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import GeneralService from "./pages/Services/GeneralService";
import ChiptuningService from "./pages/Services/ChiptuningService";
import SoftwareService from "./pages/Services/SoftwareService";
import TransmissionService from "./pages/Services/TransmissionService";
import CosmeticService from "./pages/Services/CosmeticService";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import AnimatedLayout from "./components/AnimatedLayout";
import "./index.css";

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
