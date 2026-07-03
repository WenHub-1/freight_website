import React from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import AppStore from "@/assets/images/AppStore.png";
import GooglePlay from "@/assets/images/GooglePlay.png";
import QRCode from "@/assets/images/QR-code.jpeg";
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

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* QR Code — desktop only */}
              <div className="hidden md:flex flex-col items-center gap-4">
                <div className="border-2 border-primary/40 rounded-3xl p-5 bg-navy-mid">
                  <img
                    src={QRCode}
                    alt="QR Code to download Qaddam app"
                    className="w-44 h-44 object-contain rounded-xl"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {t("downloadPage.scanPrompt")}
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:flex flex-col items-center gap-3">
                <div className="w-px h-16 bg-white/10" />
                <span className="text-muted-foreground text-sm font-medium">
                  {t("downloadPage.or")}
                </span>
                <div className="w-px h-16 bg-white/10" />
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col items-center gap-4">
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

                {/* QR Code — mobile only */}
                <div className="flex md:hidden flex-col items-center gap-3 mt-4">
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-muted-foreground text-sm">
                      {t("downloadPage.or")}
                    </span>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>
                  <div className="border-2 border-primary/40 rounded-3xl p-4 bg-navy-mid">
                    <img
                      src={QRCode}
                      alt="QR Code to download Qaddam app"
                      className="w-36 h-36 object-contain rounded-xl"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t("downloadPage.scanPrompt")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Download;
