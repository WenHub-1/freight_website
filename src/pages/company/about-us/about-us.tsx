import React from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "@/components/common/page-heading";
import { GLOBAL_IMAGES } from "@/lib/file-image-url";
import Container from "@/components/ui/container";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  const aboutUs = t("Company.aboutUs", { returnObjects: true }) as {
    title: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
  };

  return (
    <div>
      <PageHeading
        title={aboutUs.title}
        bigheading={true}
        icon={GLOBAL_IMAGES.LOGO_QDAM2}
      />
      <Container>
        <div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold inter-font">
              {aboutUs.heading}
            </h1>
            <div className="flex flex-col text-sm md:text-base text-center font-medium inter-font gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center items-center">
              <p className="md:max-w-[67%]">{aboutUs.paragraph1}</p>
              <p className="md:max-w-2/4">{aboutUs.paragraph2}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
