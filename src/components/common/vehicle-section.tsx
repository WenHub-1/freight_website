import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";
import { DASHBOARD_IMAGES } from "./constants/file-image-url";

const VehicleSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="flex flex-col gap-12 justify-center items-center rounded-lg text-center">
        <h1 className="text-5xl font-semibold">
          {t("dashboard.vehicleSection.title")}
        </h1>
        <div className="w-full">
          <img
            src={DASHBOARD_IMAGES.VEHICLE_SECTION}
            alt={t("dashboard.vehicleSection.title")}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default VehicleSection;
