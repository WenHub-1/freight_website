import React from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { HEADING_CLAMP } from "@/constants/css";

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
      <PageHeading title={aboutUs.title} />
      <section className="py-20 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">
            <h2
              className={`font-tajawal font-black text-white leading-[1.2] ${HEADING_CLAMP}`}
            >
              {aboutUs.heading}
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-muted-foreground text-base leading-relaxed">
                {aboutUs.paragraph1}
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                {aboutUs.paragraph2}
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-6 w-full">
              {[
                { value: "2025", label: "Founded" },
                { value: "KSA", label: "Operating in" },
                { value: "24/7", label: "Available" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-navy-mid border border-white/8 rounded-2xl p-6 text-center"
                >
                  <div className="font-tajawal font-black text-primary text-2xl sm:text-3xl mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
