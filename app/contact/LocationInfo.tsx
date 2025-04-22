// LocationInfo

import React from "react";
import { motion } from "framer-motion";
import { LocationIcon, EmailIcon, PhoneIcon } from "./Icons";

export const LocationInfo: React.FC = () => (
  <motion.section
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="p-10 md:pt-20 md:pl-[10%] flex-1 bg-[#FEE0DA] max-sm:mt-10"
  >
    <h1 className="mb-8 text-[6vw] md:text-[4vw] font-semibold text-rose-700">
      Our <br /> location
    </h1>

    <div className="flex gap-2.5 items-center">
      <LocationIcon />
      <h2 className="text-xl font-bold text-red-950">Kenya</h2>
    </div>

    <address className="grid gap-2 mb-5 text-base md:text-lg text-red-950 not-italic">
      <p>39 Woodvale Grove, Westlands</p>
      <p>Jimkan House</p>
      <p>Nairobi, Kenya</p>
    </address>

    <h2 className="mb-4 text-xl font-bold text-rose-950">
      Contact Information
    </h2>

    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <EmailIcon />
        <a href="mailto:info@kazidesk.co.ke" className="text-base md:text-lg text-rose-950">
          info@kazidesk.co.ke
        </a>
      </div>

      <div className="flex gap-2 items-center">
        <PhoneIcon />
        <div className="text-base md:text-lg text-rose-950">
          <a href="tel:+254113306358">+254 113 306358</a>,
          <a href="tel:+254113305897">+254 113 305897</a>
        </div>
      </div>
    </div>
  </motion.section>
);