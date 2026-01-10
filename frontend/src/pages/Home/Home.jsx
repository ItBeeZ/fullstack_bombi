import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonials from "../../components/Testimonials";
import ContactCTA from "../../components/ContactCTA";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <section className="relative py-24 overflow-hidden">
          {/* Background with M-Stripes */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(105deg, #ffffff 0%, #ffffff 22%, #6abbf5 22%, #6abbf5 34%, #0e4c8d 34%, #0e4c8d 46%, #e01e26 46%, #e01e26 100%)",
            }}
          ></div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-md ">
              Vegye fel velünk a kapcsolatot
            </h2>
            <p className="text-lg md:text-xl text-white mb-8 font-medium drop-shadow-sm max-w-2xl mx-auto">
              Kérdése van, vagy szervizre van szüksége? Töltse ki az alábbi
              űrlapot, és hamarosan válaszolunk.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-black font-bold py-4 px-10 rounded shadow-lg hover:bg-gray-100 transition duration-300 uppercase tracking-wide"
            >
              Vegye fel velünk a kapcsolatot
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
