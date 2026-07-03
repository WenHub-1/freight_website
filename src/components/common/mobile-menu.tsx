import React from "react";
import { Link } from "react-router-dom";
import { Globe, X } from "lucide-react";
import logoImg from "@/assets/images/logo-transparent-background.png";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/types/interface";

interface MobileMenuProps {
  isClosing: boolean;
  navItems: NavItem[];
  downloadLabel: string;
  currentLanguage: string;
  english: string;
  arabic: string;
  onClose: () => void;
  onNavClick: (link: string) => void;
  onLanguageChange: (lang: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isClosing,
  navItems,
  downloadLabel,
  currentLanguage,
  english,
  arabic,
  onClose,
  onNavClick,
  onLanguageChange,
}) => {
  return (
    <div
      className={`lg:hidden fixed inset-0 z-60 bg-[#0d1820] flex flex-col overflow-hidden ${
        isClosing
          ? "animate-out fade-out slide-out-from-top-4 duration-280"
          : "animate-in fade-in slide-in-from-top-4 duration-280"
      }`}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -start-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -end-24 w-72 h-72 rounded-full bg-primary/8 blur-3xl pointer-events-none" />

      {/* Top bar: logo + close */}
      <div className="flex items-center justify-between px-6 pt-5">
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
          onClick={onClose}
        >
          <img src={logoImg} alt="Qaddam" className="h-12 w-auto" />
        </Link>
        <button
          className="text-white bg-transparent border-0 cursor-pointer p-1"
          onClick={onClose}
        >
          <X size={26} />
        </button>
      </div>

      {/* Divider */}
      <div className="mx-6 mt-5 h-px bg-white/8" />

      {/* Nav items */}
      <nav className="flex-1 flex flex-col items-center justify-center gap-2">
        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => onNavClick(item.link || "#")}
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
          onClick={() => onNavClick("/download")}
        >
          {downloadLabel}
        </Button>
        <button
          className="text-muted-foreground hover:text-white text-sm flex items-center gap-1.5 bg-transparent border-0 cursor-pointer mt-1"
          onClick={() =>
            onLanguageChange(currentLanguage === "en" ? "ar" : "en")
          }
        >
          <Globe size={14} />
          {currentLanguage === "en" ? arabic : english}
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
