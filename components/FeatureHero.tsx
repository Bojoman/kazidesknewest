import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto text-center mt-16 px-4">
      <h1 className="text-[54px] md:text-[64px] font-semibold leading-tight text-rose-700">
        <span className="text-[#4F1919]">All-in-One</span> Solution for{" "}
        <span className="text-[#4F1919]">Your</span>
        <br />
        <span className="text-[#4F1919]">Business</span>{" "}
        <span className="text-[#B3443D]">Needs</span>
      </h1>
      <p className="mt-6 text-base md:text-lg text-black max-w-2xl mx-auto">
        KaziDesk is designed to simplify every aspect of your business
        operations. Below are the key modules that make KaziDesk a comprehensive
        solution tailored for Kenyan businesses:
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button className="px-6 py-3 text-rose-700 border border-[#B3443D] rounded-[35px] shadow-md">
          Get Started
        </button>
        <button className="px-6 py-3 bg-rose-500 hover:bg-rose-400 text-white rounded-[35px] shadow-md">
          Request Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;
