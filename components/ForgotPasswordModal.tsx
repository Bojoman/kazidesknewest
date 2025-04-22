'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ForgotPasswordModalProps {
  onClose: () => void;
}

export default function ForgotPasswordModal({ onClose }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value);

  const handleConfirm = () => {
    if (!isValidEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }
    setError('');
    onClose();
  };

  return (
    // Overlay fades in/out
    <motion.div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Dialog scales */}
      <motion.div
        className="bg-white rounded-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] w-[90%] max-w-[450px] max-h-[700px] overflow-y-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div className="flex flex-col items-center gap-4 px-4 py-6 max-w-[430px] mx-auto">
          {/* Header */}
          <div className="w-full flex justify-between items-center">
            <h2 className="text-[32px] font-medium text-[#B3443D]">
              Forgot Password
            </h2>
            <button
              onClick={onClose}
              className="text-[#F1B59E66] hover:text-[#F1B59E99] text-2xl rounded-full p-2"
            >
              &times;
            </button>
          </div>

          {/* Illustration */}
          <div className="w-[270px] h-[270px] overflow-hidden">
            <Image
              src="/Forgot Password Illustration.png"
              alt="Forgot password illustration"
              width={270}
              height={270}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Description */}
          <p className="font-inter font-small text-base tracking-normal text-center text-[#4F1919] px-2">
            We’ll send the link for you to reset your password. Please enter your email.
          </p>

          {/* Email Input */}
          <div className="relative w-full bg-[#F1B59E66] border border-[#83443D] rounded-lg px-3 py-2">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#83443D]"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
            </svg>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              className="w-full pl-10 bg-transparent outline-none text-[#4F1919] placeholder:text-[#83443D] placeholder:opacity-70 text-base"
            />
          </div>
          {error && <p className="w-full text-sm text-red-500">{error}</p>}

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full bg-[#4F1919] text-white rounded-[18px] py-3 text-base font-medium hover:bg-[#3D1414] transition"
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
