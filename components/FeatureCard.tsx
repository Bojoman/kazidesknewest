import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
  isDark?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
  isDark = false,
}) => {
  const content = (
    <div className="w-full md:w-[522px]">
      <h3
        className={`text-2xl md:text-[32px] font-semibold leading-tight ${
          isDark ? "text-red-300" : "text-rose-700"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-4 text-base md:text-lg leading-8 whitespace-pre-line ${
          isDark ? "text-white" : "text-rose-950"
        }`}
      >
        {description}
      </p>
    </div>
  );

  const image = (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={360}
      height={360}
      className="object-contain w-full max-w-[360px]"
    />
  );

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } justify-between items-center gap-6 md:gap-16 px-6 md:px-20 py-10 rounded-[30px] ${
        isDark ? "bg-[#b2443d]" : "bg-white"
      }`}
    >
      {content}
      {image}
    </div>
  );
};

export default FeatureCard;
