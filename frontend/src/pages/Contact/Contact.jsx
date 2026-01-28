import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useLanguage } from "../../context/LanguageContext";
import { contactTranslations } from "../../translations/contactTranslations";

const Contact = () => {
  const { currentLang } = useLanguage();
  const t = contactTranslations[currentLang] || contactTranslations["HU"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/[^0-9+]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await axios.post("/api/contact", {
        name: formData.name,
        email: formData.email,
        phone: formData.email,
        message: formData.message,
      });

      const data = response.data;

      if (data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("Hiba:", data.message);
        setStatus({
          loading: false,
          success: false,
          error: data.message || t.form.messages.error_default,
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      const errorMessage =
        error.response?.data?.message || t.form.messages.error_server;

      if (error.response?.data?.message) {
        console.error("Backend hiba:", error.response.data.message);
      }
      setStatus({
        loading: false,
        success: false,
        error: errorMessage,
      });
    }
  };

  return (
    <div className="text-white min-h-screen font-oswald flex flex-col relative">
      {}
      <div className="fixed inset-0 z-[-1] bg-[url('/assets/images/backgrounds/contact_bg.jpg')] bg-cover bg-center blur-[5px]"></div>

      <Navbar />

      {}
      <div className="flex-grow">
        {}
        <section className="relative py-20 overflow-hidden bg-transparent mb-24">
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white uppercase drop-shadow-xl">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16 font-normal">
              {t.hero.subtitle}
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
              {}
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
                  {t.cards.location.title}
                </h3>
                <p className="text-gray-400 text-center text-sm">
                  {t.cards.location.address}
                </p>
              </div>

              {}
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
                  {t.cards.email.title}
                </h3>
                <a
                  href="mailto:bombis.istvan@gmail.com"
                  className="text-blue-500 hover:text-white transition-colors text-sm"
                >
                  bombis.istvan@gmail.com
                </a>
              </div>

              {}
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
                  {t.cards.phone.title}
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

        {}
        <section className="py-16 bg-transparent">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-[#0f172a]/90 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col lg:flex-row h-auto lg:h-[500px]">
              {}
              <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2 text-white uppercase">
                  {t.form.title}
                </h2>
                <p className="text-gray-400 mb-6 text-sm">{t.form.subtitle}</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {status.success && (
                    <div className="bg-green-500/20 border border-green-500 text-green-200 p-4 rounded-lg mb-4">
                      {t.form.messages.success}
                    </div>
                  )}
                  {status.error && (
                    <div className="bg-red-500/20 border border-red-500 text-red-200 p-4 rounded-lg mb-4">
                      {status.error}
                    </div>
                  )}
                  <div>
                    <label className="block text-gray-300 text-xs font-bold mb-1 uppercase">
                      {t.form.labels.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t.form.placeholders.name}
                      className="w-full bg-[#1e293b] border border-gray-700 rounded-lg py-2 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-xs font-bold mb-1 uppercase">
                      {t.form.labels.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t.form.placeholders.email}
                      className="w-full bg-[#1e293b] border border-gray-700 rounded-lg py-2 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-xs font-bold mb-1 uppercase">
                      {t.form.labels.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      placeholder={t.form.placeholders.phone}
                      className="w-full bg-[#1e293b] border border-gray-700 rounded-lg py-2 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-xs font-bold mb-1 uppercase">
                      {t.form.labels.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="3"
                      placeholder={t.form.placeholders.message}
                      className="w-full bg-[#1e293b] border border-gray-700 rounded-lg py-2 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 uppercase tracking-wider shadow-lg text-sm ${
                      status.loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {status.loading
                      ? t.form.button.loading
                      : t.form.button.default}
                  </button>
                </form>
              </div>

              {}
              <div className="lg:w-1/2 h-80 lg:h-auto relative">
                <iframe
                  title="Bömbis István BMW Szerviz Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.366487563038!2d21.72403931562688!3d47.95427897920876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47389faa622f92a3%3A0x805568194480678d!2zTnnDrXJlZ3low6F6YSwgTGlsaW9tIHUuIDUzLCA0NDAw!5e0!3m2!1sen!2shu!4v1647871234567!5m2!1sen!2shu"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
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
