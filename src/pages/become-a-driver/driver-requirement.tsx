import React from "react";
import { useTranslation } from "react-i18next";
import Requirements from "@/components/common/requirements";

// Import SVG Icons
import VehicleIcon from "@/assets/svg/vehicle2";
import RegistrationIcon from "@/assets/svg/registration";
import LicenseIcon from "@/assets/svg/license";
import IdentificationIcon from "@/assets/svg/identification";
import SmartphoneIcon from "@/assets/svg/smartphone";
import AgeIcon from "@/assets/svg/user";

// Import Image
import { BECOME_DRIVER_IMAGES } from "@/components/common/constants/file-image-url";

const DriverRequirement: React.FC = () => {
  const { t } = useTranslation();

  // Fetch translation data
  const section = t("becomeDriver.requirementsSection", {
    returnObjects: true,
  }) as {
    title: string;
    subtitle: string;
    items: { label: string }[];
  };

  // Attach icons to each item
  const icons = [
    VehicleIcon,
    IdentificationIcon,
    RegistrationIcon,
    SmartphoneIcon,
    LicenseIcon,
    AgeIcon,
  ];

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
    />
  );
};

export default DriverRequirement;
