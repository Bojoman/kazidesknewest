import * as React from "react";

interface PricingFeatureProps {
  name: string;
  value?: string;
  iconUrl: string;
  highlighted?: boolean;
}

export const PricingFeature: React.FC<PricingFeatureProps> = ({
  name,
  value,
  iconUrl,
  highlighted = false,
}) => {
  return (
    <div className="flex gap-2.5  items-center mt-5 w-full text-sm md:text-base ">
      <img
        src={iconUrl}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
      <div className="self-stretch my-auto">
        {value ? (
          <>
            {name}:{" "}
            <span
              style={{
                fontWeight: 600,
                color: highlighted
                  ? "rgba(241,181,158,1)"
                  : "rgba(179,68,61,1)",
              }}
            >
              {value}
            </span>
          </>
        ) : (
          name
        )}
      </div>
    </div>
  );
};
