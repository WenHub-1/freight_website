import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/container";
import FooterTop from "./footer-top.tsx";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import SnapChat from "@/assets/svg/snapChat.tsx";
import Instagram from "@/assets/svg/instagram.tsx";
import { GLOBAL_IMAGES } from "@/lib/file-image-url";
import { APP_ROUTES } from "@/lib/constants";

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

// Map footer items to their routes based on section and item text
const getItemRoute = (sectionTitle: string, item: string): string | null => {
  const trimmedItem = item.trim();

  // Service section routes
  if (sectionTitle === "SERVICE" || sectionTitle === "الخدمات") {
    if (trimmedItem === "Ship with us" || trimmedItem === "الشحن معنا")
      return APP_ROUTES.shipWithUs;
    if (trimmedItem === "Become a driver" || trimmedItem === "انضم كسائق")
      return APP_ROUTES.becomeADriver;
    if (trimmedItem === "Partner & earn" || trimmedItem === "شارك واربح")
      return APP_ROUTES.partners;
  }

  // Company section routes
  if (sectionTitle === "COMPANY" || sectionTitle === "الشركة") {
    if (trimmedItem === "About us" || trimmedItem === "من نحن")
      return APP_ROUTES.aboutUs;
    if (trimmedItem === "Careers" || trimmedItem === "الوظائف")
      return APP_ROUTES.careers;
    if (trimmedItem === "Contact us" || trimmedItem === "تواصل معنا")
      return APP_ROUTES.contactUs;
  }

  // Legal section items don't have routes yet
  return null;
};

// Check if item is Terms & Conditions and get PDF path
const getTermsAndConditionsPdf = (
  sectionTitle: string,
  item: string,
  currentLanguage: string,
): string | null => {
  const trimmedItem = item.trim();

  // Check if it's in the legal section and is Terms & Conditions
  if (sectionTitle === "LEGAL" || sectionTitle === "القانوني") {
    if (
      trimmedItem === "Terms & Conditions" ||
      trimmedItem === "الشروط والأحكام"
    ) {
      // Return PDF path based on current language
      return currentLanguage === "ar"
        ? "/documents/Terms and Conditions Arabic.pdf"
        : "/documents/Terms and Conditions.pdf";
    }
  }

  return null;
};

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Type the translation result
  const footerData = t("footer", { returnObjects: true }) as FooterData;
  const currentLanguage = i18n.language;

  const sections: FooterSection[] = [
    footerData.service,
    footerData.company,
    footerData.legal,
  ];

  return (
    <div className=" relative">
      <FooterTop />

      <div className="bg-secondary flex items-center   pt-16 pb-5 md:pb-0 md:pt-0  h-full md:h-[50vh]">
        <Container className="text-white pb-0!">
          <div className="flex flex-col  ">
            <div className="flex  flex-col md:flex-row flex-wrap ">
              {/* LEFT logo + description */}
              <div className="flex w-full md:w-2/5  pb-10 md:pb-0 flex-col gap-6">
                <div>
                  <img
                    className="max-w-28 max-h-11 object-contain"
                    src={GLOBAL_IMAGES.LOGO_QDAM2}
                    alt="Qdam Logo"
                  />
                </div>
                <p className=" w-64 md:max-w-60 text-sm  roboto-font">
                  {footerData.description}
                </p>
              </div>
              <div className="flex w-full md:w-3/5 justify-between  flex-wrap">
                {/* Dynamic sections */}
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="flex flex-col pb-10 pr-12 md:pr-0 md:pb-0 gap-[26px]"
                  >
                    <h1 className="text-base font-medium tracking-[3px] roboto-font leading-[18px]">
                      {section.title}
                    </h1>
                    <ul className="flex flex-col gap-5">
                      {section.items.map((item, i) => {
                        const route = getItemRoute(section.title, item);
                        const pdfPath = getTermsAndConditionsPdf(
                          section.title,
                          item,
                          currentLanguage,
                        );
                        const itemContent = item.trim();

                        return (
                          <li
                            key={i}
                            className="inter-font leading-5 text-base"
                          >
                            {route ? (
                              <Link
                                to={route}
                                className="transition-colors hover:text-primary"
                              >
                                {itemContent}
                              </Link>
                            ) : pdfPath ? (
                              <a
                                href={pdfPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-primary cursor-pointer"
                              >
                                {itemContent}
                              </a>
                            ) : (
                              <span className="cursor-default">
                                {itemContent}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Instagram />
                <SnapChat />
              </div>
              <div className="flex md:gap-0 gap-4 flex-col-reverse md:flex-row justify-between">
                <h2 className="roboto-font text-sm">
                  Qdam © 2025, All Rights Reserved
                </h2>
                <div className="flex pb-1 gap-2">
                  <Globe />
                  <h1 className="font-medium  text-sm sm:text-base">
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
