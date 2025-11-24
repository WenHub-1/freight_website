import React from "react";
import Container from "@/components/ui/container";

interface FeatureItem {
  title: string;
  subtitle: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface FeatureSectionProps {
  title: string;
  items: FeatureItem[];
  mainImage?: string | React.ReactNode;
  bgImageStyle?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  items,
  mainImage,
  bgImageStyle,
}) => {
  return (
    <Container>
      <div className="flex justify-center gap-[120px]">
        {mainImage &&
          (bgImageStyle ? (
            <div className="p-4 min-h-[527px] min-w-[557px] mx-auto flex justify-center items-center rounded-2xl shadow-sm">
              {typeof mainImage === "string" ? (
                <div>
                  <img
                    src={mainImage}
                    alt=""
                    className="w-full h-full object-contain mx-auto"
                  />
                </div>
              ) : (
                <div className="w-full  h-full flex justify-center items-center">
                  {mainImage}
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              {typeof mainImage === "string" && (
                <div className="h-full">
                  <img src={mainImage} alt="" className="w-full h-full  " />
                </div>
              )}
            </div>
          ))}

        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold leading-[120%] text-primary">
            {title}
          </h2>

          <div className="flex flex-col gap-11 max-w-[400px]">
            {items.map((item, index) => (
              <div key={index} className="flex flex-row gap-6 items-start">
                <div className="pt-1.5">
                  {item.Icon && <item.Icon className="w-12 h-12 " />}
                </div>
                <div className="flex gap-1 flex-col">
                  <h3 className="text-[28px] font-bold">{item.title}</h3>
                  <p className="text-secondary max-w-[300px]  inter-font text-base">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeatureSection;
