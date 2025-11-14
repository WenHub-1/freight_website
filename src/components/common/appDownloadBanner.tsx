import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import { Button } from "../ui/button";
import PhoneImg from "@/assets/images/PhoneBanner.png";
import AppStoreImg from "@/assets/images/AppStore.png";
import PlayStoreImg from "@/assets/images/GooglePlay.png";

const AppDownloadBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="flex w-full">
        <div className="bg-secondary-foreground rounded-2xl flex items-center p-12">
          <div className="flex flex-col gap-6 w-8/12">
            <Button
              size="lg"
              className="flex text-base font-semibold inter-font gap-2 w-36"
            >
              <div className="h-1 w-1 bg-black"></div>
              {t("dashboard.appDownloadBanner.buttonText")}
            </Button>
            <h1 className="text-[40px] font-semibold leading-[140%]">
              {t("dashboard.appDownloadBanner.title")}
            </h1>
            <div className="flex gap-6 items-center">
              <div>
                <img
                  src={AppStoreImg}
                  alt={t("dashboard.appDownloadBanner.buttonText")}
                />
              </div>
              <div>
                <img
                  src={PlayStoreImg}
                  alt={t("dashboard.appDownloadBanner.buttonText")}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl w-full h-full"
            src={PhoneImg}
            alt={t("dashboard.appDownloadBanner.title")}
          />
        </div>
      </div>
    </Container>
  );
};

export default AppDownloadBanner;
