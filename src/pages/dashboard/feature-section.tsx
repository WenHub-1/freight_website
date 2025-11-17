import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import FeatureImg from "@/assets/images/FeatureSection.png";
import Img1 from "@/assets/images/discount-shape.png";
import Img2 from "@/assets/images/truck-tick.png";
import Img3 from "@/assets/images/user-tick.png";
import Img4 from "@/assets/images/routing-2.png";

const images = [Img1, Img2, Img3, Img4];

const FeatureSection: React.FC = () => {
  const { t } = useTranslation();
  const section = t("dashboard.featureSection", { returnObjects: true }) as {
    title: string;
    items: { title: string; subtitle: string }[];
  };

  const itemsWithImages = section.items.map((item, index) => ({
    ...item,
    image: images[index],
  }));

  return (
    <Container>
      <div className="flex justify-center gap-32">
        <div>
          <img src={FeatureImg} alt="" />
        </div>
        {/* Section Title */}
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-semibold leading-[120%] text-primary">
            {section.title}
          </h2>

          {/* Feature Items */}
          <div className="flex flex-col gap-11 max-w-[400px]">
            {itemsWithImages.map((item, index) => (
              <div key={index} className="flex flex-row gap-6 items-start">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[28px] font-bold">{item.title}</h3>
                  <p className="text-secondary  inter-font text-base">
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
