import React from "react";
import PartnersPhone from "@/assets/svg/partners-phone";
import FeatureSection from "@/components/common/feature-section";
import RecieveCommisionsIcon from "@/assets/svg/recieve-commisions";
import { useTranslation } from "react-i18next";
import UserIcon from "@/assets/svg/user-plus";
import WithdrawalIcon from "@/assets/svg/withdrawl";
const images = [RecieveCommisionsIcon, UserIcon, WithdrawalIcon];

const PartnerFeature: React.FC = () => {
  const { t } = useTranslation();

  const section = t("partners.featureSection", { returnObjects: true }) as {
    title: string;
    items: { title: string; subtitle: string }[];
  };

  const itemsWithImages = section.items.map((item, index) => ({
    ...item,
    Icon: images[index],
  }));
  return (
    <div>
      <FeatureSection
        title={section.title}
        items={itemsWithImages}
        mainImage={<PartnersPhone />} // or another main image for the section
        bgImageStyle={true}
      />
    </div>
  );
};

export default PartnerFeature;
