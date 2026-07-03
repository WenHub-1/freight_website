import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";
import logoImg from "@/assets/images/logo-transparent-background.png";
import TwitterIcon from "@/assets/svg/twitter";
import InstagramIcon from "@/assets/svg/instagram";
import FacebookIcon from "@/assets/svg/facebook";
import TiktokIcon from "@/assets/svg/tiktok";
import { SOCIAL_LINKS } from "@/constants/links";

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
            <Link to="/" className="flex items-center mb-4 no-underline">
              <div className="bg-white py-2 px-4 rounded-md">
                <img src={logoImg} alt="Qaddam" className="h-14 w-auto" />
              </div>{" "}
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
            <SocialIcon href={SOCIAL_LINKS.twitter}>
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon href={SOCIAL_LINKS.instagram}>
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href={SOCIAL_LINKS.facebook}>
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon href={SOCIAL_LINKS.tiktok}>
              <TiktokIcon />
            </SocialIcon>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
