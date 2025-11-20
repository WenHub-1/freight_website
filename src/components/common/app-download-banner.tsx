import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";
import { Button } from "../ui/button";

const AppDownloadBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="flex  justify-between ">
        <div className="bg-secondary-foreground rounded-2xl flex items-center p-12 w-[70%]">
          <div className="flex flex-col gap-6 w-11/12">
            <Button
              size="lg"
              className="flex  text-base font-semibold inter-font gap-2 w-36"
            >
              {t("dashboard.appDownloadBanner.buttonText")}
            </Button>
            <h1 className="text-[40px] font-semibold leading-[140%]">
              {t("dashboard.appDownloadBanner.title")}
            </h1>
            <div className="flex gap-6 items-center">
              <div>
                <img
                  src="https://zmsveyjhpbvqhglqhluu.supabase.co/storage/v1/object/public/dev-website/images/AppStore.png"
                  alt={t("dashboard.appDownloadBanner.buttonText")}
                  className="cursor-pointer"
                />
              </div>
              <div>
                <img
                  src="https://zmsveyjhpbvqhglqhluu.supabase.co/storage/v1/object/public/dev-website/images/GooglePlay.png"
                  alt={t("dashboard.appDownloadBanner.buttonText")}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[35%] flex justify-end">
          <img
            className="rounded-2xl w-full h-full"
            src="https://zmsveyjhpbvqhglqhluu.supabase.co/storage/v1/object/public/dev-website/images/PhoneBanner.png"
            alt={t("dashboard.appDownloadBanner.title")}
          />
        </div>
      </div>
    </Container>
  );
};

export default AppDownloadBanner;
