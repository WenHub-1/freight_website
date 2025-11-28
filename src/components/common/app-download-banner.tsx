import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";
import { Button } from "../ui/button";
import { DASHBOARD_IMAGES } from "@/components/common/constants/file-image-url";

const AppDownloadBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="bg-secondary-foreground flex justify-between gap-[73px] rounded-2xl items-center  ">
        <div className="flex flex-col p-12 gap-6  ">
          <Button
            size="lg"
            className="flex text-base font-semibold inter-font gap-2 w-[30%]"
          >
            {t("dashboard.appDownloadBanner.buttonText")}
          </Button>

          <h1 className="text-[40px] font-semibold leading-[140%]">
            {t("dashboard.appDownloadBanner.title")}
          </h1>

          <div className="flex gap-6 items-center">
            <img
              src={DASHBOARD_IMAGES.APP_DOWNLOAD_BANNER.APP_STORE}
              alt="AppStore"
              className="cursor-pointer"
            />
            <img
              src={DASHBOARD_IMAGES.APP_DOWNLOAD_BANNER.GOOGLE_PLAY}
              alt="GooglePlay"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex ">
          <img
            className="rounded-2xl max-w-[528px] max-h-[519px] mx-auto  object-contain"
            src={DASHBOARD_IMAGES.APP_DOWNLOAD_BANNER.PHONE_BANNER}
            alt={t("dashboard.appDownloadBanner.title")}
          />
        </div>
      </div>
    </Container>
  );
};

export default AppDownloadBanner;
