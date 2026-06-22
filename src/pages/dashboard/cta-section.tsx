import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface CtaData {
  tag: string;
  title: string;
  subtitle: string;
  appStore: string;
  googlePlay: string;
}

const AppleIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.42.07 2.38.77 3.2.8 1.2-.24 2.35-1.05 3.67-.89 1.56.19 2.74.84 3.52 2.12-3.25 2.04-2.72 6.33.89 7.55-.51 1.3-1.17 2.59-3.28 3.28zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const GooglePlayIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76a2.5 2.5 0 0 0 2.56-.12l11.34-6.55-2.55-2.55-11.35 9.22zM20.5 9.66L17.98 8.3l-2.89 2.89 2.89 2.88 2.54-1.37a1.74 1.74 0 0 0 0-3.04zM3.18.24 14.53 9.47l-2.55 2.55L2.64.47A2.53 2.53 0 0 1 3.18.24zM3.18 23.76L14.53 14.53l-2.55-2.55L3.18 23.76z" />
  </svg>
);

const CTASection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  const data = t("cta", { returnObjects: true }) as CtaData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
            <h2
              className="font-tajawal font-black text-white mb-4 leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              {data.title}
            </h2>
            <p className="text-muted-foreground text-base max-w-[480px] mx-auto mb-11">
              {data.subtitle}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://apps.apple.com/sa/app/qaddam-wasal/id6759410662"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2.5">
                  <AppleIcon />
                  {data.appStore}
                </Button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.satam.qaddam"
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
