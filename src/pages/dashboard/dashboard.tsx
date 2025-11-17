import React from "react";
import HeroSection from "./hero-section";
import BenefitsSection from "./benefits-section";
import FeatureSection from "./feature-section";
import VehicleSection from "./vehicle-section";
import AppDownloadBanner from "@/components/common/app-download-banner";
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
