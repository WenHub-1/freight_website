import React from "react";
import Container from "@/components/ui/container";
import PageHeading from "@/components/common/page-heading";
import DriverFeatureSection from "./driver-feature-section";
import AppDownloadBanner from "@/components/common/app-download-banner";
import Questions from "@/components/common/questions";
import Requirements from "./requirements";

const BecomeADriver: React.FC = () => {
  return (
    <Container>
      <PageHeading title="Become a driver" button={true} />
      <DriverFeatureSection />
      <Requirements />
      <AppDownloadBanner />
      <Questions />
    </Container>
  );
};

export default BecomeADriver;
