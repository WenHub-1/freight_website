import React from "react";
import HeroSection from "./herosection";
import BenefitsSection from "./benefitsSection";
import FeatureSection from "./featureSection";
import VehicleSection from "./vehicleSection";
import AppDownloadBanner from "@/components/common/appDownloadBanner";
import Questions from "@/components/common/questions";

const Dashboard: React.FC = () => {
  return (
    <div>
      {" "}
      <HeroSection />
      <BenefitsSection />
      <FeatureSection />
      <VehicleSection />
      <AppDownloadBanner />
      <Questions />
    </div>
  );
};

export default Dashboard;
