'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function HeroRedesign() {
  const propsList = [
    'Elimination of operational silos',
    'Automation of workflows',
    'Improvement of efficiency',
    'Empowerment of data-driven decision-making',
  ];

  const popupVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="hero"
      className="
        relative
        bg-gradient-to-r from-rose-900 via-rose-800 to-rose-700
        min-h-[calc(100vh-6rem)]  /* fill under navbar */
        pb-8 sm:pb-12 lg:pb-16 2xl:pb-24  /* more bottom padding at 2xl */
        px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32  /* extra gutters at 2xl */
      "
    >
      <div className="
        max-w-screen-2xl  /* allow up to 1536px+ */
        mx-auto
        pt-28                /* space for navbar */
        flex flex-col-reverse lg:flex-row items-center justify-between gap-8
      ">
        {/* Text Column */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 2xl:space-y-10 ">
          <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
            font-bold leading-tight
            text-white
          ">
            All‑in‑One <span className="text-[#F1B59E]">HR</span>,<br/>
            <span className="text-[#F1B59E]">CRM</span>, &{' '}
            <span className="text-[#F1B59E]">Project Management</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 2xl:text-2xl">
            The All‑in‑One Solution for Seamless Management and Unmatched Efficiency.
          </p>

          <ul className="pl-4 space-y-2 sm:space-y-3 md:space-y-4 2xl:space-y-5">
            {propsList.map((item, i) => (
              <li className="flex items-start gap-3 text-white 2xl:gap-4" key={i}>
                <div className="p-1 border border-[#F1B59E] rounded-full 2xl:p-2">
                  <Check className="w-4 h-4 text-[#F1B59E] 2xl:w-6 2xl:h-6" />
                </div>
                <span className="text-sm sm:text-base md:text-lg 2xl:text-xl">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-4 2xl:pt-6">
            <button className="
              px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4
              text-sm sm:text-base lg:text-lg
              text-[#F1B59E]
              rounded-full
              border border-[#F1B59E]
              2xl:px-12 2xl:py-5 2xl:text-xl
            ">
              Get started
            </button>
            <button className="
              px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4
              text-sm sm:text-base lg:text-lg
              bg-[#F1B59E] text-gray-900
              rounded-full
              2xl:px-12 2xl:py-5 2xl:text-xl
            ">
              Book demo
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <img
              src="/Landing.png"
              alt="landing page illustration"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
            <motion.img
              src="/Landing-pop-up.png"
              alt="Data insight pop‑up"
              variants={popupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: 'tween', duration: 1.2, ease: 'easeOut', delay: 0.6 }}
              className="
                absolute pointer-events-none
                w-24 bottom-4 left-4
                sm:w-32 sm:bottom-6 sm:left-6
                md:w-40 md:bottom-8 md:left-8
                lg:w-52 lg:top-1/3 lg:left-[-16%] lg:bottom-auto
                xl:w-64 xl:top-[30%] xl:left-[-18%]
                2xl:w-80 2xl:top-[40%] 2xl:left-[-10%]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
