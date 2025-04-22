"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SendIcon } from "./Icons";
import Checkbox from "../../components/CheckButton";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
    agreement: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: wire up API call
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-1 pt-25 pb-16 px-4 md:px-16 bg-white max-md:pb-10 max-sm:px-4"
    >
      <div className="mx-auto max-w-[522px]">
        <h2 className="mb-10 text-3xl md:text-4xl font-medium text-red-900">
          Talk to our experts
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email" name="email" placeholder="Work Email Address*"
            value={formData.email} onChange={handleChange} required
            className="p-3 w-full text-base rounded-lg border border-zinc-500 placeholder-opacity-30"
          />

          <div className="flex gap-5 max-sm:flex-col">
            <input
              type="text" name="firstName" placeholder="First Name*"
              value={formData.firstName} onChange={handleChange} required
              className="flex-1 p-3 text-base rounded-xl border border-zinc-500 placeholder-opacity-30"
            />
            <input
              type="text" name="lastName" placeholder="Last Name*"
              value={formData.lastName} onChange={handleChange} required
              className="flex-1 p-3 text-base rounded-xl border border-zinc-500 placeholder-opacity-30"
            />
          </div>

          <input
            type="tel" name="phone" placeholder="Phone Number*"
            value={formData.phone} onChange={handleChange} required
            className="p-3 w-full text-base rounded-xl border border-zinc-500 placeholder-opacity-30"
          />

          <textarea
            name="message" placeholder="Message"
            value={formData.message} onChange={handleChange}
            className="p-3 w-full text-base rounded-xl border resize-none border-zinc-500 h-[217px] placeholder-opacity-30"
          />

          <div className="mt-2">
            <Checkbox
              checked={formData.agreement}
              onChange={() =>
                setFormData(prev => ({ ...prev, agreement: !prev.agreement }))
              }
              label="I agree to receive communications from Kazidesk"
            />
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="flex gap-2 justify-center items-center px-4 py-2 text-white bg-red-900 w-[133px] rounded-[30px]"
            >
              <span>Send</span>
              <SendIcon />
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};



