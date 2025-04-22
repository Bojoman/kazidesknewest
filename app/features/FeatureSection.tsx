"use client";
import * as React from "react";
import  FeatureCard  from "../../components/FeatureCard";

interface FeaturePair {
  title1: string;
  description1: string;
  image1: string;
  title2: string;
  description2: string;
  image2: string;
}
    
export const FeatureSection: React.FC<{ features: FeaturePair }> = ({
  features,
}) => {
  return (
    <div className="mt-8 w-full rounded-[30px] max-md:max-w-full">
      <FeatureCard
        title={features.title1}
        description={features.description1}
        imageSrc={features.image1}
        imageAlt={features.title1}
        isDark={true}
      />
      <div className="mt-8">
        <FeatureCard
          title={features.title2}
          description={features.description2}
          imageSrc={features.image2}
          imageAlt={features.title2}
          isReversed={true}
        />
      </div>
    </div>
  );
};
