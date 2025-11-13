import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import type { NavItem, HeaderButtons } from "../../types/interface";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import ArrowDown from "@/assets/svg/arrowdown";
import EarthSign from "@/assets/svg/eathsign";
import Qadamlogo from "../../assets/images/Qdamlogo.png";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navItems = t("header.nav", { returnObjects: true }) as NavItem[];
  const buttons = t("header.buttons", { returnObjects: true }) as HeaderButtons;

  const currentLanguage = i18n.language;
  const languageLabels = buttons.language;

  const displayLanguageLabel =
    currentLanguage === "en" ? languageLabels.english : languageLabels.arabic;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="p-4 font-poppins ticky top-0 z-5 font-[Poppins] font-medium  text-white h-[90px] w-full justify-center bg-secondary ">
      <Container className="flex  justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex gap-16 text-[16px] items-center space-x-4">
          <div className="">
            <img src={Qadamlogo} alt="" />
          </div>

          <ul className="flex gap-7 text-[16px] items-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.label === "Company" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="bg-transparent border-0 shadow-none "
                        variant="outline"
                      >
                        {item.label}
                        <ArrowDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                      {item.dropdown?.map((drop, idx) => (
                        <DropdownMenuItem key={idx}>
                          {drop.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <li className="inline-block mx-4 cursor-pointer">
                    <a href={item.link}>{item.label}</a>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* Right: Language dropdown + Download button */}
        <div className="flex   gap-4 items-center space-x-4">
          {/* Language dropdown using Shadcn */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-transparent border-0 text-[16px]"
              >
                <EarthSign />
                {displayLanguageLabel} <ArrowDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
              {currentLanguage !== "en" && (
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                  {languageLabels.english}
                </DropdownMenuItem>
              )}
              {currentLanguage !== "ar" && (
                <DropdownMenuItem onClick={() => changeLanguage("ar")}>
                  {languageLabels.arabic}
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Download button */}
          <Button variant="default" className="text-[16px] h-12 w-[173px]">
            {buttons.download}
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
