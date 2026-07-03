import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import AppleIcon from "@/assets/svg/apple";
import GooglePlayIcon from "@/assets/svg/google-play";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/links";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

interface CtaData {
  tag: string;
  title: string;
  subtitle: string;
  appStore: string;
  googlePlay: string;
}

const CTASection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRevealAnimation<HTMLDivElement>();

  const data = t("cta", { returnObjects: true }) as CtaData;

  return (
    <section className="py-20 bg-background" ref={sectionRef}>
      <Container>
        <div className="reveal relative bg-[linear-gradient(135deg,var(--navy-mid),rgb(30_51_71/0.8))] border border-primary/20 rounded-[36px] py-18 px-6 sm:px-16 text-center overflow-hidden">
          {/* Glows */}
          <div className="absolute -top-24 -end-24 w-[400px] h-[400px] bg-[radial-gradient(circle,rgb(var(--primary-rgb) / 0.1)_0%,transparent_65%)] pointer-events-none" />
          <div className="absolute -bottom-24 -start-24 w-[350px] h-[350px] bg-[radial-gradient(circle,rgb(var(--primary-rgb) / 0.07)_0%,transparent_65%)] pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block bg-primary/12 border border-primary/25 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              {data.tag}
            </span>
            <h2 className="heading-cta font-tajawal font-black text-white mb-4 leading-[1.2]">
              {data.title}
            </h2>
            <p className="text-muted-foreground text-base max-w-[480px] mx-auto mb-11">
              {data.subtitle}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2.5">
                  <AppleIcon />
                  {data.appStore}
                </Button>
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2.5">
                  <GooglePlayIcon />
                  {data.googlePlay}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
