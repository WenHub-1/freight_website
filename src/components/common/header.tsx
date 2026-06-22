import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Container from "@/components/ui/container";
import type { NavItem } from "@/types/interface";

interface IHeaderButtons {
  language: { english: string; arabic: string };
  download: string;
}

const QaddamLogo: React.FC = () => (
  <svg
    width="38"
    height="44"
    viewBox="0 0 120 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60 8C34 8 12 30 12 56C12 90 60 132 60 132C60 132 108 90 108 56C108 30 86 8 60 8Z"
      fill="#1A2B3C"
    />
    <path d="M60 8C34 8 12 30 12 56C12 78 36 110 60 132V8Z" fill="#7DC21E" />
    <path d="M72 28L44 68H60L48 112L84 60H66L72 28Z" fill="white" />
  </svg>
);

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const navItems = t("header.nav", { returnObjects: true }) as NavItem[];
  const buttons = t("header.buttons", {
    returnObjects: true,
  }) as IHeaderButtons;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentLanguage = i18n.language;
  const { english, arabic } = buttons.language;
  const displayLabel = currentLanguage === "en" ? english : arabic;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

  const handleNavClick = (link: string) => {
    setIsMenuOpen(false);
    if (link.startsWith("/#")) {
      const id = link.slice(2);
      if (window.location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      navigate(link);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-primary/10 backdrop-blur-[18px] ${
        scrolled
          ? "bg-[rgba(13,24,32,0.95)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-[rgba(13,24,32,0.7)]"
      }`}
    >
      <Container className="flex items-center justify-between h-[70px] sm:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <QaddamLogo />
          <span className="font-tajawal font-extrabold text-2xl text-white tracking-tight">
            قدام
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 list-none">
          {navItems.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => handleNavClick(item.link || "#")}
                className="text-muted-foreground hover:text-white text-sm font-medium transition-colors duration-200 relative group bg-transparent border-0 cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 start-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-white text-sm font-medium transition-colors bg-transparent border-0 cursor-pointer">
                <Globe size={16} />
                {displayLabel}
                <ChevronDown size={14} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="bg-secondary border-white/10 text-white"
              align="end"
            >
              {currentLanguage !== "en" && (
                <DropdownMenuItem
                  className="hover:bg-white/10 cursor-pointer"
                  onClick={() => changeLanguage("en")}
                >
                  {english}
                </DropdownMenuItem>
              )}
              {currentLanguage !== "ar" && (
                <DropdownMenuItem
                  className="hover:bg-white/10 cursor-pointer"
                  onClick={() => changeLanguage("ar")}
                >
                  {arabic}
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Download CTA */}
          <Button
            size="default"
            className="hidden lg:inline-flex"
            onClick={() => handleNavClick("/download")}
          >
            {buttons.download}
          </Button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white bg-transparent border-0 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[rgba(13,24,32,0.98)] border-t border-white/8 px-6 py-6 flex flex-col gap-5">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavClick(item.link || "#")}
              className="text-start text-muted-foreground hover:text-white text-base font-medium transition-colors bg-transparent border-0 cursor-pointer"
            >
              {item.label}
            </button>
          ))}

          <div className="flex items-center gap-3 pt-2">
            <button
              className="text-muted-foreground hover:text-white text-sm flex items-center gap-1.5 bg-transparent border-0 cursor-pointer"
              onClick={() =>
                changeLanguage(currentLanguage === "en" ? "ar" : "en")
              }
            >
              <Globe size={15} />
              {currentLanguage === "en" ? arabic : english}
            </button>
          </div>

          <Button
            size="lg"
            className="w-full"
            onClick={() => handleNavClick("/download")}
          >
            {buttons.download}
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
