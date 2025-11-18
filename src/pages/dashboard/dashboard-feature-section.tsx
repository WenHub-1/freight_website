import React from "react";
import { useTranslation } from "react-i18next";
import FeatureSection from "@/components/common/feature-section";

import FeatureImg from "@/assets/images/FeatureSection.png";
import Img1 from "@/assets/images/discount-shape.png";
import Img2 from "@/assets/images/truck-tick.png";
import Img3 from "@/assets/images/user-tick.png";
import Img4 from "@/assets/images/routing-2.png";

const images = [Img1, Img2, Img3, Img4];

const DashboardFeatureSection: React.FC = () => {
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
    <FeatureSection
      title={section.title}
      items={itemsWithImages}
      mainImage={FeatureImg}
    />
  );
};

export default DashboardFeatureSection;
