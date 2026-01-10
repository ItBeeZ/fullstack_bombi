import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || "Hiba történt az üzenet küldésekor.",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        loading: false,
        success: false,
        error:
          "Nem sikerült csatlakozni a szerverhez. Kérjük, próbálja újra később.",
      });
    }
  };

  return (
    <div className="text-white min-h-screen font-oswald flex flex-col relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-[-1] bg-[url('/assets/images/backgrounds/contact_bg.jpg')] bg-cover bg-center blur-[5px]"></div>

      <Navbar />

      {/* Main Content Container */}
      <div className="flex-grow">
        {/* Header Section */}
        <section className="relative py-20 overflow-hidden bg-transparent mb-24">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white uppercase tracking-wider drop-shadow-xl">
              Lépjen kapcsolatba Bömbis Istvánnal
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16 font-light">
              Segítünk minden BMW szerviz igényében. Lépjen kapcsolatba szakértő
              csapatunkkal még ma!
            </p>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
              {/* M-Stripe decoration behind cards */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-24 -z-10 opacity-30 blur-2xl bg-gradient-to-r from-[#6abbf5] via-[#0e4c8d] to-[#e01e26]"></div>

              {/* Card 1: Elhelyezkedés */}
              <div className="bg-[#0f172a]/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-gray-800 flex flex-col items-center hover:transform hover:-translate-y-2 transition duration-300 group">
                <div className="mb-4 text-blue-500 group-hover:text-white transition-colors">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
                  Elhelyezkedés
                </h3>
                <p className="text-gray-400 text-center text-sm">
                  Nyíregyháza, Liliom u. 53B, 4400 Magyarország
                </p>
              </div>

              {/* Card 2: E-mail Cím */}
              <div className="bg-[#0f172a]/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-gray-800 flex flex-col items-center hover:transform hover:-translate-y-2 transition duration-300 group">
                <div className="mb-4 text-blue-500 group-hover:text-white transition-colors">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
                  E-mail Cím
                </h3>
                <a
                  href="mailto:bombis.istvan@gmail.com"
                  className="text-blue-500 hover:text-white transition-colors text-sm"
                >
                  bombis.istvan@gmail.com
                </a>
              </div>

              {/* Card 3: Telefonszám */}
              <div className="bg-[#0f172a]/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-gray-800 flex flex-col items-center hover:transform hover:-translate-y-2 transition duration-300 group">
                <div className="mb-4 text-blue-500 group-hover:text-white transition-colors">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
                  Telefonszám
                </h3>
                <a
                  href="tel:+36302774338"
                  className="text-blue-500 hover:text-white transition-colors text-sm"
                >
                  +36 30 277 4338
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 bg-transparent">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-[#0f172a]/90 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col lg:flex-row">
              {/* Left: Contact Form */}
              <div className="lg:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-2 text-white uppercase">
                  Vegye fel velünk a kapcsolatot
                </h2>
                <p className="text-gray-400 mb-8 text-sm">
                  Kérdése van, vagy szervizre van szüksége? Töltse ki az alábbi
                  űrlapot, és hamarosan válaszolunk.
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {status.success && (
                    <div className="bg-green-500/20 border border-green-500 text-green-200 p-4 rounded-lg mb-4">
                      Az üzenetet sikeresen elküldtük! Hamarosan felvesszük
                      Önnel a kapcsolatot.
                    </div>
                  )}
                  {status.error && (
                    <div className="bg-red-500/20 border border-red-500 text-red-200 p-4 rounded-lg mb-4">
                      {status.error}
                    </div>
                  )}
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2 uppercase">
                      Az Ön neve
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Teljes név"
                      className="w-full bg-[#1e293b] border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2 uppercase">
                      Az Ön e-mail címe
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@domain.com"
                      className="w-full bg-[#1e293b] border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2 uppercase">
                      Üzenet
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Mesélje el nekünk igényeit vagy kérdését..."
                      className="w-full bg-[#1e293b] border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 uppercase tracking-wider shadow-lg ${
                      status.loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {status.loading
                      ? "Küldés folyamatban..."
                      : "Üzenet küldése"}
                  </button>
                </form>
              </div>

              {/* Right: Google Map */}
              <div className="lg:w-1/2 h-70 lg:h-auto relative">
                <iframe
                  title="Bömbis István BMW Szerviz Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.366487563038!2d21.72403931562688!3d47.95427897920876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47389faa622f92a3%3A0x805568194480678d!2zTnnDrXJlZ3low6F6YSwgTGlsaW9tIHUuIDUzLCA0NDAw!5e0!3m2!1sen!2shu!4v1647871234567!5m2!1sen!2shu"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
