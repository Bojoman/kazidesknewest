"use client";
import * as React from "react";
import ToggleSwitch from "../pricing/ContactSwitch";

export const PricingHeader = ({
  isOn,
  onToggle,
}: {
  isOn: boolean;
  onToggle: () => void;
}) => {
  return (
    <header className="flex flex-col mt-33 max-md:mt-[70px] max-w-full leading-tight text-red-950 w-max">

     {/* <header className="flex flex-col mt-16 max-w-full leading-tight text-red-950 w-max max-md:mt-10"> */}
      <h2 className="w-full text-5xl font-semibold text-center max-md:max-w-full max-md:text-4xl">
        <span className="flex-1 shrink gap-2.5  self-stretch w-full basis-0 max-md:max-w-full max-md:text-4xl">
          Affordable Pricing
        </span>
      </h2>
      <div className="flex gap-3.5 items-center self-center mt-10 text-xl font-medium whitespace-nowrap">
        <span>Monthly</span>
        <div
          onClick={onToggle}
          className="w-[50px] p-1 bg-rose flex rounded-full"
        >
          <div
            className={`w-[20px] h-[20px] transition-all duration-700 ${isOn ? "ml-auto" : "mr-auto"} rounded-full bg-white`}
          />
        </div>
        <span>Annually</span>
      </div>
    </header>
  );
};
