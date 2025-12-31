import React from "react";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import PartnerFeature from "./partner-feature";
import PartnerRequirement from "./partner-requirement";
import AppDownloadBanner from "@/components/common/app-download-banner";
import Questions from "@/components/common/questions";
import { useTranslation } from "react-i18next";

const Partners: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <PageHeading title={t("partners.title")} button={true} />
      <PartnerFeature />
      <PartnerRequirement />
      <AppDownloadBanner />
      <Questions />
    </Container>
  );
};

export default Partners;
