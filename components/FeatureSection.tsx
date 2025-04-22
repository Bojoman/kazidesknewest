"use client";


import { GetStartedButton } from "./GetStartedButton";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageOnRight?: boolean;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageUrl,
  imageOnRight = false,
}) => {
  const content = (
    <div className="flex flex-col self-stretch my-auto min-w-60 w-[377px]">
      <div className="w-full">
        <h2 className="gap-2.5 self-stretch w-full pt-8 md:pt-0 text-[24px] md:text[32px] font-semibold leading-tight text-rose-700">
          {title}
        </h2>
        <p className="gap-2.5 self-stretch mt-[20px] md:mt-[27px] max-w-full text-[16px] leading-[28px] md:leading-[32px] md:text-[18px] text-rose-950 w-[351px]">
          {description}
        </p>
      </div>
      <GetStartedButton className="self-start mt-[60px] md:mt-[117px] text-[16px] md:text-[20px] " />
    </div>
  );

  const image = (
    <img
      src={imageUrl}
      alt={title}
      className="object-contain self-stretch my-auto rounded-none aspect-[1.15] min-w-60 w-[554px] max-md:max-w-full"
    />
  );

  return (
    <section className="flex flex-col justify-center px-12 py-10 mt-14 w-full bg-white rounded-3xl min-h-[562px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div
        className={`flex flex-wrap-reverse ${imageOnRight ? "" : "md:flex-row-reverse"} justify-between max-md:max-w-full`}
      >
        {content}
        {image}
      </div>
    </section>
  );
};
