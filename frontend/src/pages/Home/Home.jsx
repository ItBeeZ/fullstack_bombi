import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import WhyChooseUs from '../../components/WhyChooseUs';
import Testimonials from '../../components/Testimonials';
import ContactCTA from '../../components/ContactCTA';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
