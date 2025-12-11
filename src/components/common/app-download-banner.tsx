import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";
import { Button } from "../ui/button";
import { DASHBOARD_IMAGES } from "@/lib/file-image-url";

const AppDownloadBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="bg-secondary-foreground flex  rounded-2xl items-center  ">
        <div className="flex flex-col pl-5 pt-5 pr-5 sm:pl-8 md:pl-12 gap-2 sm:gap-4 md:gap-6  ">
          <Button
            size="lg"
            className="flex rounded-[3px] md:rounded-lg text-xs sm:text-base  font-semibold inter-font gap-2 w-24 h-7 sm:w-36 sm:h-10"
          >
            {t("dashboard.appDownloadBanner.buttonText")}
          </Button>

          <h1 className="text-base sm:text-2xl lg:text-[40px]  font-semibold leading-[140%]">
            {t("dashboard.appDownloadBanner.title")}
          </h1>

          <div className="flex gap-2 sm:gap-6 items-center">
            <img
              src={DASHBOARD_IMAGES.APP_DOWNLOAD_BANNER.APP_STORE}
              alt="AppStore"
              className="cursor-pointer w-[72] h-6 sm:w-24 sm:h-9 md:h-11 md:w-32 lg:w-40 lg:h-14 object-contain"
            />
            <img
              src={DASHBOARD_IMAGES.APP_DOWNLOAD_BANNER.GOOGLE_PLAY}
              alt="GooglePlay"
              className="cursor-pointer w-[72px] h-6 sm:w-24 sm:h-9 md:h-11 md:w-32  lg:w-60 lg:h-14  object-contain"
            />
          </div>
        </div>
        <div className="flex lg:w-full lg:h-full ">
          <img
            className="    rounded-2xl 
      h-full
     
      max-[450px]:min-w-[157px]
      max-[450px]:min-h-48   "
            src={DASHBOARD_IMAGES.APP_DOWNLOAD_BANNER.PHONE_BANNER}
            alt={t("dashboard.appDownloadBanner.title")}
          />
        </div>
      </div>
    </Container>
  );
};

export default AppDownloadBanner;
