import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import FloatingBubbles from "@/components/common/floating-bubbles";
import onlyLogoImg from "@/assets/images/only-logo-transparent-background-.png";
import AppleIcon from "@/assets/svg/apple";
import GooglePlayIcon from "@/assets/svg/google-play";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/links";

interface StatItem {
  num: string;
  label: string;
}

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const hero = t("hero", { returnObjects: true }) as {
    badge: string;
    headline1: string;
    headline2: string;
    headline3: string;
    subtitle: string;
    appStore: string;
    googlePlay: string;
  };

  const stats = t("stats", { returnObjects: true }) as StatItem[];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-5 pt-28 pb-20">
      {/* Animated grid */}
      <div className="absolute inset-0 z-0 hero-grid-bg" />

      {/* Floating bubbles — right side only */}
      <FloatingBubbles />

      {/* Content */}
      <div className="relative z-10 max-w-[860px] w-full flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-5 py-2 rounded-full text-sm text-primary mb-8 animate-fade-down">
          <span className="w-2 h-2 rounded-full bg-primary animate-blink-dot" />
          {hero.badge}
        </div>

        {/* Large logo */}
        <div className="mb-8 [animation-delay:100ms]">
          <img
            src={onlyLogoImg}
            alt="Qaddam"
            className="h-36 w-auto drop-shadow-[0_0_30px_rgba(125,194,30,0.4)]"
          />
        </div>

        {/* Headline */}
        <div className="relative w-full mb-6">
          {/* Glow centered on the headline text only */}
          <div className="animate-pulse-glow pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[210%] z-0 bg-[radial-gradient(ellipse,rgba(125,194,30,0.16)_0%,transparent_70%)]" />
          <h1 className="relative z-10 font-tajawal font-black leading-[1.15] animate-fade-down text-[clamp(2.8rem,6vw,5rem)] [animation-delay:200ms]">
            {hero.headline1}{" "}
            <span className="text-primary">{hero.headline2}</span>
            <br />
            <span className="gradient-text">{hero.headline3}</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-muted-foreground text-base sm:text-lg leading-[1.8] max-w-[560px] mb-11 animate-fade-down [animation-delay:350ms]">
          {hero.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex gap-5 justify-center flex-wrap mb-16 animate-fade-down [animation-delay:450ms]">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="gap-3 px-12">
              <AppleIcon />
              {hero.appStore}
            </Button>
          </a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="xl" variant="outline" className="gap-3 px-12">
              <GooglePlayIcon />
              {hero.googlePlay}
            </Button>
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 w-full animate-fade-up [animation-delay:600ms]">
        <Container>
          <div className="flex flex-col sm:flex-row bg-white/4 border border-white/8 rounded-2xl px-6 sm:px-12 py-7 backdrop-blur-[10px] divide-y sm:divide-y-0 sm:divide-x divide-white/8">
            {stats.map((stat, i) => (
              <div key={i} className="flex-1 text-center py-4 sm:py-0">
                <span className="font-tajawal font-black text-3xl sm:text-4xl text-primary block mb-1">
                  {stat.num}
                </span>
                <span className="text-muted-foreground text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
