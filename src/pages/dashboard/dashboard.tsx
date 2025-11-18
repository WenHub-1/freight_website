import React from "react";
import HeroSection from "./hero-section";
import BenefitsSection from "./benefits-section";
// import FeatureSection from "@/components/common/feature-section";
import DashboardFeatureSection from "./dashboard-feature-section";
import VehicleSection from "@/components/common/vehicle-section";
import AppDownloadBanner from "@/components/common/app-download-banner";
import Questions from "@/components/common/questions";

const Dashboard: React.FC = () => {
  return (
    <div>
      {" "}
      <HeroSection />
      <BenefitsSection />
      {/* <FeatureSection /> */}
      <DashboardFeatureSection />
      <VehicleSection />
      <AppDownloadBanner />
      <Questions />
    </div>
  );
};

export default Dashboard;
