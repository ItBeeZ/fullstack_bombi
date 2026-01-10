import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollToTop from "./ScrollToTop";

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
        <Outlet />
      </motion.div>
    </>
  );
};

export default AnimatedLayout;
