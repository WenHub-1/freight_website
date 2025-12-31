import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { DASHBOARD_IMAGES } from "@/lib/file-image-url";

import Container from "@/components/ui/container";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  // Access the hero section data from translations
  const hero = t("dashboard.hero", { returnObjects: true }) as {
    title: string;
    subtitle: string;
    buttonText: string;
  };

  return (
    <section className="hero-section pt-10 md:pt-20">
      <Container>
        <div className="flex bg-secondary text-white rounded-lg md:rounded-[20px]  max-h-[538px]">
          <div className="flex flex-col p-5 sm:p-7 w-[60%]   md:p-10 gap-2.5 sm:gap-7">
            <h1 className="   font-semibold text-xl sm:text-3xl md:text-4xl lg:text-[52px] leading-[120%]  md:font-semibold">
              {hero.title}
            </h1>
            <p className="text-xs sm:text-base md:text-xl lg:text-2xl inter-font font-medium sm:font-normal max-w-[400px]">
              {hero.subtitle}
            </p>
            <Button className="hide-download-button h-7  w-32 sm:w-1/2 sm:h-10 md:h-14 text-xs  sm:text-base md:text-lg font-medium roboto-font ">
              {hero.buttonText}
            </Button>
          </div>
          <div className="w-2/5 ">
            <img
              className="rounded-lg md:rounded-2xl h-full"
              src={DASHBOARD_IMAGES.HERO_SECTION}
              alt="Hero"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
