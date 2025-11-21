import React from "react";
import { useTranslation } from "react-i18next";
import FeatureSection from "@/components/common/feature-section";
import Img1 from "@/assets/svg/clock";
import Img2 from "@/assets/svg/priceTag";
import Img3 from "@/assets/svg/secure-payments";
import Img4 from "@/assets/svg/ranking";
import { BECOME_DRIVER_IMAGES } from "@/components/common/constants/file-image-url";

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
      mainImage={BECOME_DRIVER_IMAGES.FEATURE_SECTION}
      bgImageStyle={false}
    />
  );
};

export default DriverFeatureSection;
