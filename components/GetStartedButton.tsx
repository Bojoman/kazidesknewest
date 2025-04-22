
"use client";
import React from "react";

interface GetStartedButtonProps {
  className?: string;
}

export const GetStartedButton: React.FC<GetStartedButtonProps> = ({ className = "" }) => {
  return (
    <button className={`px-6 py-2 border border-primary text-primary rounded-full hover:bg-rose50 transition-colors ${className}`}>
      Get Started
    </button>
  );
};
