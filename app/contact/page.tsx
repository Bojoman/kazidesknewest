"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { LocationInfo } from "./LocationInfo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)]">
      <motion.div
        className="flex flex-wrap w-full flex-1 font-medium leading-[1.2] max-md:max-w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />
        <LocationInfo />
        <ContactForm />
        <div className="w-full pt-14">
          <Footer />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
}
