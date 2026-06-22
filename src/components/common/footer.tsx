import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";

interface FooterItem {
  label: string;
  link: string;
}

interface FooterSection {
  title: string;
  items: FooterItem[];
}

interface FooterData {
  description: string;
  services: FooterSection;
  company: FooterSection;
  support: FooterSection;
  copyright: string;
}

const QaddamLogo: React.FC = () => (
  <svg
    width="32"
    height="37"
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

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-[10px] bg-white/5 border border-white/8 flex items-center justify-center text-muted-foreground hover:bg-primary/15 hover:border-primary/35 hover:text-primary transition-all duration-200"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const footer = t("footer", { returnObjects: true }) as FooterData;

  const sections: FooterSection[] = [
    footer.services,
    footer.company,
    footer.support,
  ];

  const handleLink = (link: string) => {
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
    }
  };

  return (
    <footer className="bg-background border-t border-white/6">
      <Container className="py-14 sm:py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 no-underline">
              <QaddamLogo />
              <span className="font-tajawal font-extrabold text-xl text-white">
                قدام
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[260px]">
              {footer.description}
            </p>
          </div>

          {/* Link sections */}
          {sections.map((section, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h5 className="font-bold text-white text-base">
                {section.title}
              </h5>
              <ul className="flex flex-col gap-3 list-none">
                {section.items.map((item, j) => (
                  <li key={j}>
                    {item.link.startsWith("/#") ? (
                      <button
                        onClick={() => handleLink(item.link)}
                        className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 bg-transparent border-0 cursor-pointer p-0"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.link}
                        className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 no-underline"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">{footer.copyright}</p>
          <div className="flex gap-3">
            <SocialIcon href="#">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.166 8.94c-.524 1.962-1.492 4.396-2.901 7.3l1.248.515 2.449-5.87c.41.46.64 1.057.64 1.706 0 1.435-1.16 2.595-2.594 2.595-1.435 0-2.595-1.16-2.595-2.595 0-1.435 1.16-2.594 2.595-2.594.385 0 .749.084 1.078.233C11.49 8.63 9.01 4.5 12 4.5c.64 0 1.196.234 1.625.617l-.459 3.823zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.83 1.56V6.81a4.85 4.85 0 01-1.06-.12z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
