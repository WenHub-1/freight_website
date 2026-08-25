import React from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import AppStore from "@/assets/images/AppStore.png";
import GooglePlay from "@/assets/images/GooglePlay.png";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/links";

const Download: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeading title={t("downloadPage.pageTitle")} />

      <section className="py-20 bg-background">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
            <div className="text-center space-y-3">
              <h2 className="heading-page font-tajawal font-black text-white leading-[1.2]">
                {t("downloadPage.heading")}
              </h2>
              <p className="text-muted-foreground text-base max-w-md mx-auto">
                {t("downloadPage.subtitle")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
              <div className="flex flex-col items-center gap-2">
                <span className="text-muted-foreground text-sm font-medium">
                  For Android Phones
                </span>

                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={GooglePlay}
                    alt={t("cta.googlePlay")}
                    className="h-14 object-contain hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="text-muted-foreground text-sm font-medium">
                  For Apple Phones
                </span>

                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={AppStore}
                    alt={t("cta.appStore")}
                    className="h-14 object-contain hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Download;
