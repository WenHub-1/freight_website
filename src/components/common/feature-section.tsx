import React from "react";
import Container from "@/components/ui/container";

interface FeatureItem {
  title: string;
  subtitle: string;
  image?: string;
}

interface FeatureSectionProps {
  title: string;
  items: FeatureItem[];
  mainImage?: string;
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
      <div className="flex justify-center gap-32">
        {mainImage &&
          (bgImageStyle ? (
            <div className="p-4 h-[527px] w-[557px] flex justify-center items-center rounded-2xl shadow-sm">
              <div>
                <img
                  className="w-[375px] h-[290px] object-contain max-w-full"
                  src={mainImage}
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div>
              <img src={mainImage} alt="" />
            </div>
          ))}

        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-semibold leading-[120%] text-primary">
            {title}
          </h2>

          <div className="flex flex-col gap-11 max-w-[400px]">
            {items.map((item, index) => (
              <div key={index} className="flex flex-row gap-6 items-start">
                <div>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 object-contain"
                    />
                  )}
                </div>

                <div className="flex flex-col">
                  <h3 className="text-[28px] font-bold">{item.title}</h3>
                  <p className="text-secondary inter-font text-base">
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
