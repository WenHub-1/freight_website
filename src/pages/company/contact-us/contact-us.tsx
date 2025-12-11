import React from "react";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { useTranslation } from "react-i18next";
// SVG Icons
import Message from "@/assets/svg/message";
import WhatsApp from "@/assets/svg/whatsapp";
import Location from "@/assets/svg/location";
import { Button } from "@/components/ui/button";

const ContactUs: React.FC = () => {
  const { t } = useTranslation();

  // Get text sections from translation
  const sections = t("Company.contactUs.sections", { returnObjects: true }) as {
    title: string;
    lines: string[];
  }[];

  // Icon array (same order as translation)
  const icons = [Message, WhatsApp, Location];

  return (
    <div>
      <PageHeading bigheading={true} title="Contact us" />

      <Container>
        <div className="flex justify-between flex-col gap-10 lg:gap-0 lg:flex-row">
          {sections.map((section, index) => {
            const Icon = icons[index];

            return (
              <div
                key={index}
                className="flex flex-col inter-font gap-10 items-center"
              >
                <div className="flex flex-col  gap-3 items-center">
                  <Icon />
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    {section.title}
                  </h1>

                  {section.lines.map((line, i) => (
                    <p key={i} className="text-sm md:text-base">
                      {line}
                    </p>
                  ))}
                </div>
                {/* Add button below second div (index 1) */}
                {index === 1 && (
                  <Button
                    variant="primary-shadow"
                    className=" h-14  w-52 roboto-font text-lg "
                  >
                    WhatsApp now
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
