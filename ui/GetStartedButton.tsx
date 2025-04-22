"use client";

import * as React from "react";

interface GetStartedButtonProps {
  className?: string;
}

export const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  className = "",
}) => {
  return (
    <button
      className={`gap-2.5 px-12 py-3.5 text-xl leading-tight text-rose-700 border border-solid border-[#B3443D] rounded-[30px] hover:bg-rose-50 transition-colors max-md:px-5 ${className}`}
    >
      Get Started
    </button>
  );
};

