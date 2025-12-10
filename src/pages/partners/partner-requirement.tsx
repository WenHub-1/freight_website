import React from "react";
import { useTranslation } from "react-i18next";
import Requirements from "@/components/common/requirements";

// Import icons
import IdentificationIcon from "@/assets/svg/identification";
import SmartphoneIcon from "@/assets/svg/smartphone";
import AgeIcon from "@/assets/svg/user";

// Import partner main image
import { BECOME_DRIVER_IMAGES } from "@/lib/file-image-url";

const PartnerRequirement: React.FC = () => {
  const { t } = useTranslation();

  // Get translation data
  const section = t("partners.requirementsSection", {
    returnObjects: true,
  }) as {
    title: string;
    subtitle: string;
    items: { label: string }[];
  };

  // Icons for each item in order
  const icons = [IdentificationIcon, SmartphoneIcon, AgeIcon];

  // Attach icons to each item
  const itemsWithIcons = section.items.map((item, index) => ({
    ...item,
    Icon: icons[index],
  }));

  return (
    <Requirements
      title={section.title}
      subtitle={section.subtitle}
      mainImage={BECOME_DRIVER_IMAGES.REQUIREMENT_LIST}
      items={itemsWithIcons}
      columns={1}
    />
  );
};

export default PartnerRequirement;
