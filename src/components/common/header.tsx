import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../ui/container";
import type { NavItem } from "../../types/interface";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Globe, ChevronDown } from "lucide-react";
import Qadamlogo from "../../assets/images/Qdamlogo.png";
interface IHeaderButtons {
  language: {
    english: string;
    arabic: string;
  };
  download: string;
}
const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navItems = t("header.nav", { returnObjects: true }) as NavItem[];
  const buttons = t("header.buttons", {
    returnObjects: true,
  }) as IHeaderButtons;

  const currentLanguage = i18n.language;
  const languageLabels = buttons.language;

  const displayLanguageLabel =
    currentLanguage === "en" ? languageLabels.english : languageLabels.arabic;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="p-4 sticky top-0 z-50 text-white h-[90px] w-full justify-center bg-secondary ">
      <Container className="flex  justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex gap-16  items-center space-x-4">
          <Link to="/" className="">
            <img src={Qadamlogo} alt="Qadam Logo" className="cursor-pointer" />
          </Link>

          <ul className="flex gap-7 text-base items-center">
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
                        <ChevronDown />
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
                    <Link to={item.link || "#"}>{item.label}</Link>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>

        <div className="flex   gap-4 items-center space-x-4">
          {/* Language drop down */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="bg-transparent border-0 flex items-center gap-2 text-base"
              >
                <Globe size={18} />
                {displayLanguageLabel} <ChevronDown />
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
          <Button variant="default" className="text-base h-12 w-44">
            {buttons.download}
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
