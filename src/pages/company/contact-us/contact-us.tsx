import React from "react";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import MessageIcon from "@/assets/svg/message";
import WhatsAppIcon from "@/assets/svg/whatsapp";
import LocationIcon from "@/assets/svg/location";

const ContactUs: React.FC = () => {
  const { t } = useTranslation();

  const sections = t("Company.contactUs.sections", { returnObjects: true }) as {
    title: string;
    lines: string[];
  }[];

  const whatsappNumber = t("Company.contactUs.whatsappNumber");

  const icons = [MessageIcon, WhatsAppIcon, LocationIcon];

  const handleWhatsAppClick = () => {
    const cleanNumber = whatsappNumber.replace(/[\s+]/g, "");
    window.open(
      `https://wa.me/${cleanNumber}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div>
      <PageHeading title={t("Company.title")} />

      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="bg-navy-mid border border-white/8 rounded-3xl p-8 flex flex-col items-center text-center gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" />
                  </div>
                  <h3 className="font-tajawal font-bold text-white text-xl">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    {section.lines.map((line, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                  {index === 1 && (
                    <Button size="lg" onClick={handleWhatsAppClick}>
                      {t("Company.contactUs.buttonText")}
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactUs;
