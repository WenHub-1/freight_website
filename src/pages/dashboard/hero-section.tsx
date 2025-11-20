import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
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
    <section className="hero-section pt-20">
      <Container>
        <div className="flex bg-secondary text-white rounded-[20px] justify-between min-h-[538px]">
          <div className="flex flex-col p-10 gap-7">
            <h1 className="text-[52px] leading-[120%] font-semibold">
              {hero.title}
            </h1>
            <p className="text-2xl inter-font font-normal">{hero.subtitle}</p>
            <Button className="h-14 text-lg font-medium roboto-font w-52">
              {hero.buttonText}
            </Button>
          </div>
          <div>
            <img
              className="rounded-[17px] h-full"
              src="https://zmsveyjhpbvqhglqhluu.supabase.co/storage/v1/object/public/dev-website/images/HeroSectionPicture.png"
              alt="Hero"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
