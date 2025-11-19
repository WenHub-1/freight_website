import React from "react";
import { useTranslation } from "react-i18next";
import FeatureSection from "@/components/common/feature-section";

import DriverMainImg from "@/assets/images/FeatureSection.png";
import Img1 from "@/assets/svg/clock";
import Img2 from "@/assets/svg/priceTag";
import Img3 from "@/assets/svg/secure-payments";
import Img4 from "@/assets/svg/ranking";

const images = [Img1, Img2, Img3, Img4];

const DriverFeatureSection: React.FC = () => {
  const { t } = useTranslation();

  const section = t("becomeDriver.featureSection", { returnObjects: true }) as {
    title: string;
    items: { title: string; subtitle: string }[];
  };

  const itemsWithImages = section.items.map((item, index) => ({
    ...item,
    Icon: images[index],
  }));

  return (
    <FeatureSection
      title={section.title}
      items={itemsWithImages}
      mainImage={DriverMainImg}
      bgImageStyle={false}
    />
  );
};

export default DriverFeatureSection;
