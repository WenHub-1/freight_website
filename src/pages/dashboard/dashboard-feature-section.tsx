import React from "react";
import { useTranslation } from "react-i18next";
import FeatureSection from "@/components/common/feature-section";
import Img1 from "@/assets/svg/discount";
import Img2 from "@/assets/svg/truck";
import Img3 from "@/assets/svg/user-tick";
import Img4 from "@/assets/svg/routing-2";

const images = [Img1, Img2, Img3, Img4];

const DashboardFeatureSection: React.FC = () => {
  const { t } = useTranslation();

  const section = t("dashboard.featureSection", { returnObjects: true }) as {
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
      mainImage={
        "https://zmsveyjhpbvqhglqhluu.supabase.co/storage/v1/object/public/dev-website/images/FeatureSection.png"
      }
    />
  );
};

export default DashboardFeatureSection;
