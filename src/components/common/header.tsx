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
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import { GLOBAL_IMAGES } from "@/lib/file-image-url";

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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div>
      <header className="flex flex-col p-4 sticky top-0 z-50 h-[60px] sm:h-20 md:h-[90px] w-full bg-secondary">
        <Container className="flex pb-0! text-white justify-between h-full items-center">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-6">
            <Link to="/">
              <img
                src={GLOBAL_IMAGES.LOGO_QDAM}
                alt="Qadam Logo"
                className="cursor-pointer h-8 w-[71px] sm:w-full sm:h-full "
              />
            </Link>
            {/* Desktop Nav (hidden on < lg) */}
            <ul className="hidden lg:flex gap-7 text-base items-center">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.dropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          className="bg-transparent text-base font-medium border-0 shadow-none px-2"
                          variant="outline"
                        >
                          {item.label}
                          <ChevronDown />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56" align="start">
                        {item.dropdown?.map((drop, idx) => (
                          <Link to={drop.link || "#"}>
                            <DropdownMenuItem key={idx}>
                              {drop.label}
                            </DropdownMenuItem>
                          </Link>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <li className="inline-block text-base font-medium hover:pb-1 cursor-pointer">
                      <Link to={item.link || "#"}>{item.label}</Link>
                    </li>
                  )}
                </div>
              ))}
            </ul>{" "}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center   gap-3 sm:gap-6">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-transparent border-0 flex items-center gap-2 text-sm md:text-base"
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
            {/* Mobile Menu Icon (only visible < lg) */}
            <button
              className="lg:hidden hover:cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            {isMenuOpen && (
              <div className="lg:hidden absolute top-14 sm:top-20 left-0 w-full h-[30vh] bg-secondary z-40 p-6 flex flex-col gap-6 text-white overflow-y-auto">
                <ul className="flex flex-col text-sm sm:text-base gap-4 font-medium">
                  {navItems.map((item, idx) =>
                    item.dropdown ? (
                      item.dropdown.map((drop, dIdx) => (
                        <li
                          key={`${idx}-${dIdx}`}
                          className="hover:pl-1 transition-all duration-300 ease-in-out"
                        >
                          <Link
                            to={drop.link || "#"}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {drop.label}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li
                        key={idx}
                        className="hover:pl-1 transition-all duration-300 ease-in-out"
                      >
                        <Link
                          to={item.link || "#"}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}
            <Button
              variant="default"
              className="hide-download-button text-base h-12 w-44 hidden lg:block"
            >
              {buttons.download}
            </Button>
          </div>
        </Container>
        {/* BURGER MENU */}
      </header>
    </div>
  );
};

export default Header;
