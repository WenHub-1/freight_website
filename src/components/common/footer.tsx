import React from "react";
import Container from "../ui/container";
import FooterTop from "./footer-top.tsx";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import SnapChat from "@/assets/svg/snapChat.tsx";
import Instagram from "@/assets/svg/instagram.tsx";
// Define types for footer data
interface FooterSection {
  title: string;
  items: string[];
}

interface FooterData {
  description: string;
  service: FooterSection;
  company: FooterSection;
  legal: FooterSection;
}

const Footer: React.FC = () => {
  const { t } = useTranslation();

  // Type the translation result
  const footerData = t("footer", { returnObjects: true }) as FooterData;

  const sections: FooterSection[] = [
    footerData.service,
    footerData.company,
    footerData.legal,
  ];

  return (
    <div className="text-white relative">
      <FooterTop />

      <div className="bg-secondary flex items-center h-[50vh]">
        <Container className="pb-0!">
          <div className="flex flex-col gap-[26px]">
            <div className="flex justify-between">
              {/* LEFT logo + description */}
              <div className="flex flex-col gap-6">
                <div>
                  <img
                    src=" https://zmsveyjhpbvqhglqhluu.supabase.co/storage/v1/object/public/dev-website/images/Qdamlogo.png"
                    alt="Qdam Logo"
                  />
                </div>
                <p className="max-w-3xs text-base roboto-font">
                  {footerData.description}
                </p>
              </div>

              {/* Dynamic sections */}
              {sections.map((section, index) => (
                <div key={index} className="flex flex-col gap-[26px]">
                  <h1 className="text-base font-medium tracking-[3px] roboto-font leading-[18px]">
                    {section.title}
                  </h1>
                  <ul className="flex flex-col gap-5">
                    {section.items.map((item, i) => (
                      <li key={i} className="inter-font leading-5 text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <Instagram />
                <SnapChat />
              </div>
              <div className="flex justify-between">
                <h2 className="roboto-font text-sm">
                  Qdam © 2025, All Rights Reserved
                </h2>
                <div className="flex gap-2">
                  <Globe />
                  <h1 className="font-medium text-base">
                    Kingdom of Saudi Arabia - English
                  </h1>
                </div>
              </div>
              <div className="w-full border-b border-white" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
