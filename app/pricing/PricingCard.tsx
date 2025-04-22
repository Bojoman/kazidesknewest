
import { PricingFeature } from "../pricing/PricingFeature";

interface PricingCardProps {
  title: string;
  description: string;
  monthlyPrice: number;
  annualPrice?: number;
  features: Array<{ name: string; value?: string }>;
  variant?: "default" | "highlighted" | "enterprise";
  isAnnual?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  monthlyPrice,
  features,
  variant = "default",
  annualPrice,
  isAnnual,
}) => {
  const isHighlighted = variant === "highlighted";
  const bgColor = isHighlighted ? "bg-rose-700" : "bg-white";
  const textColor = isHighlighted ? "text-white" : "text-rose-950";
  const buttonStyle = isHighlighted
    ? "text-rose-700 bg-white"
    : "text-white bg-rose-950";

  return (
    <article
    style={{
      boxShadow: "0px 0px 3.8px 0px rgba(0, 87, 184, 0.25)",
          }}
      className={` grow  shrink gap-2.5 justify-center items-start p-8 ${bgColor} rounded-3xl   min-w-[300px] max-md:px-5 ${textColor}`}
    >
      <div className="flex-1 shrink w-full basis-0 min-w-60">
        <div className="w-full">
          <div className="w-full">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-5 text-base">{description}</p>
          </div>
          <div className="mt-7 text-3xl">
            <span
              style={{
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                fontWeight: 700,
                color: isHighlighted
                  ? "rgba(255,255,255,1)"
                  : "rgba(79,25,25,1)",
              }}
            >
              $
              {isAnnual
                ? annualPrice
                  ? annualPrice
                  : monthlyPrice * 12
                : monthlyPrice}
            </span>
            <span
              style={{
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              {isAnnual ? "/year" : "/month"}
            </span>
          </div>
        </div>
        <button
          className={`gap-2.5 self-stretch  px-12 py-4 mt-7 w-full text-base ${buttonStyle} rounded-xl min-h-[49px] max-md:px-5`}
        >
          Get Started
        </button>
        <div className="mt-7 w-full text-base">
          {features.map((feature, index) => (
            <PricingFeature
              key={index}
              name={feature.name}
              value={feature.value}
              iconUrl={
                isHighlighted
                ? "/whitetick.png"
                : "/redtick.png"
            }
              highlighted={isHighlighted}
            />
          ))}
        </div>
      </div>
    </article>
  );
};
