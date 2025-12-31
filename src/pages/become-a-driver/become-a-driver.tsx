import React from "react";
import PageHeading from "@/components/common/page-heading";
import DriverFeatureSection from "./driver-feature-section";
import AppDownloadBanner from "@/components/common/app-download-banner";
import Questions from "@/components/common/questions";
import DriverRequirement from "./driver-requirement";
import { useTranslation } from "react-i18next";

const BecomeADriver: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      {" "}
      <PageHeading title={t("becomeDriver.title")} button={true} />
      <DriverFeatureSection />
      <DriverRequirement />
      <AppDownloadBanner />
      <Questions />
    </div>
  );
};

export default BecomeADriver;
