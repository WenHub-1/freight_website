import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { STAGGER_DELAYS } from "@/constants/css";

interface Step {
  num: string;
  title: string;
  description: string;
}

interface HowData {
  tag: string;
  title: string;
  subtitle: string;
  steps: Step[];
}

const HowItWorksSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRevealAnimation<HTMLDivElement>();

  const data = t("howItWorks", { returnObjects: true }) as HowData;

  return (
    <section
      id="how"
      className="py-24 relative overflow-hidden bg-[linear-gradient(180deg,var(--background)_0%,var(--navy-mid)_50%,var(--background)_100%)]"
      ref={sectionRef}
    >
      {/* Ambient glow */}
      <div className="absolute -top-52 -start-52 w-[600px] h-[600px] bg-[radial-gradient(circle,rgb(var(--primary-rgb) / 0.07)_0%,transparent_70%)] pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="text-center mb-18 reveal">
          <span className="inline-block bg-primary/12 border border-primary/25 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            {data.tag}
          </span>
          <h2 className="heading-section font-tajawal font-black text-white mb-4 leading-[1.2]">
            {data.title}
          </h2>
          <p className="text-muted-foreground text-base">{data.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Connecting line (desktop) */}
          <div
            // top-9 (36px) centers the line on the 72px step circles
            className="absolute hidden lg:block pointer-events-none top-9 left-[8%] right-[8%] h-px z-0 bg-[linear-gradient(90deg,transparent_0%,rgba(132,204,22,0.15)_35%,rgba(132,204,22,0.15)_65%,transparent_100%)]"
          />
          {data.steps.map((step, i) => (
            <div
              key={i}
              className={`reveal flex flex-col items-center text-center relative ${STAGGER_DELAYS[i % STAGGER_DELAYS.length]}`}
            >
              <div className="w-[72px] h-[72px] shrink-0 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--primary-dark))] flex items-center justify-center font-tajawal font-black text-3xl leading-none text-background shadow-primary-soft mb-6 relative z-10 transition-transform duration-300 hover:scale-110">
                {step.num}
              </div>
              <h4 className="font-tajawal font-bold text-lg text-white mb-2.5">
                {step.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
