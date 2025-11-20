import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";

// Import your SVG icons as React components
import VehicleIcon from "@/assets/svg/vehicle2";
import RegistrationIcon from "@/assets/svg/registration";
import LicenseIcon from "@/assets/svg/license";
import IdentificationIcon from "@/assets/svg/identification";
import SmartphoneIcon from "@/assets/svg/smartphone";
import AgeIcon from "@/assets/svg/user";

const icons = [
  VehicleIcon,
  IdentificationIcon,
  RegistrationIcon,
  SmartphoneIcon,
  LicenseIcon,
  AgeIcon,
];

const Requirements: React.FC = () => {
  const { t } = useTranslation();

  // Get the section from translation
  const section = t("becomeDriver.requirementsSection", {
    returnObjects: true,
  }) as {
    title: string;
    subtitle: string;
    items: { label: string }[];
  };

  // Map items with icons
  const requirements = section.items.map((item, index) => ({
    ...item,
    Icon: icons[index],
  }));

  return (
    <Container>
      <div className="flex flex-col gap-12">
        {/* Heading */}
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-5xl font-semibold leading-[120%]">
            {section.title}
          </h1>
          <p className="text-2xl inter-font text-muted-foreground">
            {section.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="flex items-center min-h-[304px] min-w-[936px] mx-auto rounded-[20px] bg-secondary-foreground justify-center gap-10">
          <div>
            <img
              src="https://zmsveyjhpbvqhglqhluu.supabase.co/storage/v1/object/public/dev-website/images/requirement-list.png"
              alt="Requirements Document"
              className="w-48 h-56 object-contain"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[52px] gap-y-12">
            {requirements.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <Icon className="w-6 h-6" />
                  <p className="text-2xl font-semibold">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Requirements;
