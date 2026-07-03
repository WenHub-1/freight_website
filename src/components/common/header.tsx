import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import logoImg from "@/assets/images/logo-transparent-background.png";
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

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const navItems = t("header.nav", { returnObjects: true }) as NavItem[];
  const buttons = t("header.buttons", {
    returnObjects: true,
  }) as IHeaderButtons;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentLanguage = i18n.language;
  const { english, arabic } = buttons.language;
  const displayLabel = currentLanguage === "en" ? english : arabic;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 280);
  };

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

  const handleNavClick = (link: string) => {
    closeMenu();
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
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-primary/10 backdrop-blur-[18px] ${
          scrolled
            ? "bg-[rgba(13,24,32,0.95)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-[rgba(13,24,32,0.7)]"
        }`}
      >
        <Container className="flex items-center justify-between h-[70px] sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center no-underline">
            <div className="bg-white py-2 px-4 rounded-md">
              <img src={logoImg} alt="Qaddam" className="h-12 w-auto" />
            </div>{" "}
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
              onClick={() => (isMenuOpen ? closeMenu() : setIsMenuOpen(true))}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Full-screen mobile menu */}
      {(isMenuOpen || isClosing) && (
        <div
          className={`lg:hidden fixed inset-0 z-60 bg-[#0d1820] flex flex-col overflow-hidden ${isClosing ? "animate-out fade-out slide-out-from-top-4 duration-280" : "animate-in fade-in slide-in-from-top-4 duration-280"}`}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-24 -start-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -end-24 w-72 h-72 rounded-full bg-primary/8 blur-3xl pointer-events-none" />

          {/* Top bar: logo + close */}
          <div className="flex items-center justify-between px-6 pt-5">
            <Link
              to="/"
              className="flex items-center gap-3 no-underline"
              onClick={() => closeMenu()}
            >
              <img src={logoImg} alt="Qaddam" className="h-12 w-auto" />
            </Link>
            <button
              className="text-white bg-transparent border-0 cursor-pointer p-1"
              onClick={() => closeMenu()}
            >
              <X size={26} />
            </button>
          </div>

          {/* Divider */}
          <div className="mx-6 mt-5 h-px bg-white/8" />

          {/* Nav items — centered vertically in remaining space */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-2">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => handleNavClick(item.link || "#")}
                className="w-full text-center text-white text-xl font-semibold hover:text-primary transition-colors duration-200 bg-transparent border-0 cursor-pointer py-3 relative group"
              >
                {item.label}
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-16" />
              </button>
            ))}
          </nav>

          {/* Bottom actions */}
          <div className="flex flex-col items-center gap-3 px-6 pb-10">
            <div className="w-full h-px bg-white/8 mb-1" />
            <Button
              size="lg"
              className="w-full"
              onClick={() => handleNavClick("/download")}
            >
              {buttons.download}
            </Button>
            <button
              className="text-muted-foreground hover:text-white text-sm flex items-center gap-1.5 bg-transparent border-0 cursor-pointer mt-1"
              onClick={() =>
                changeLanguage(currentLanguage === "en" ? "ar" : "en")
              }
            >
              <Globe size={14} />
              {currentLanguage === "en" ? arabic : english}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
