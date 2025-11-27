import React from "react";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import PartnerFeature from "./partner-feature";
import PartnerRequirement from "./partner-requirement";
import AppDownloadBanner from "@/components/common/app-download-banner";
import Questions from "@/components/common/questions";

const Partners: React.FC = () => {
  return (
    <Container>
      <PageHeading title="Share and earn" button={true} />
      <PartnerFeature />
      <PartnerRequirement />
      <AppDownloadBanner />
      <Questions />
    </Container>
  );
};

export default Partners;
