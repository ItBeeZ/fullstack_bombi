import React from "react";

const ContactCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {}
      <div className="absolute inset-0 flex transform -skew-x-12 scale-110">
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[#6F95D9]"></div> {}
        <div className="flex-1 bg-[#00478F]"></div> {}
        <div className="flex-[3] bg-[#E11A2B]"></div> {}
      </div>

      {}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4  shadow-text">
          Vegye fel velünk a kapcsolatot
        </h2>
        <p className="text-xl text-white mb-8 shadow-text max-w-2xl mx-auto">
          Kérdése van, vagy szervizre van szüksége? Töltse ki az alábbi űrlapot,
          és hamarosan válaszolunk.
        </p>
        <button className="bg-white text-red-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition shadow-lg">
          Vegye fel velünk a kapcsolatot
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;
