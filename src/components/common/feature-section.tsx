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
      <div className="flex justify-center flex-wrap gap-4 md:gap-10 lg:gap-0 sm:justify-center lg:justify-between lg:px-7 items-center  ">
        {mainImage &&
          (bgImageStyle ? (
            <div className="p-4  mx-auto flex justify-center items-center rounded-2xl shadow-sm">
              {typeof mainImage === "string" ? (
                <div>
                  <img src={mainImage} alt="" className="w-full h-full " />
                </div>
              ) : (
                <div className="w-[358px] h-[337px] flex justify-center items-center">
                  {mainImage}
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              {typeof mainImage === "string" && (
                <div className="h-full">
                  <img
                    src={mainImage}
                    alt=""
                    className=" h-[350px] w-[350px]  lg:w-full lg:h-full  "
                  />
                </div>
              )}
            </div>
          ))}

        <div className="flex flex-col gap-4 sm:gap-6">
          <h2 className="text-xl   sm:text-2xl md:text-3xl  lg:text-4xl font-semibold leading-[120%] text-primary">
            {title}
          </h2>

          <div className="flex flex-col gap-4 md:gap-7 lg:gap-11 max-w-[400px]">
            {items.map((item, index) => (
              <div key={index} className="flex flex-row gap-6 items-start">
                <div className="pt-1.5">
                  {item.Icon && (
                    <item.Icon className="w-9 h-9  md:w-10 md:h-10 lg:w-12 lg:h-12 " />
                  )}
                </div>
                <div className="flex gap-1 flex-col">
                  <h3 className="text-base  md:text-xl lg:text-[28px] font-bold">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-xs max-w-[300px]  inter-font  md:sm lg:text-base">
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
