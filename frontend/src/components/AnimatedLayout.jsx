import React, { Suspense } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollToTop from "./ScrollToTop";

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-black text-white">
    <div className="w-16 h-16 border-4 border-bmw-blue border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AnimatedLayout = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </motion.div>
    </>
  );
};

export default AnimatedLayout;
