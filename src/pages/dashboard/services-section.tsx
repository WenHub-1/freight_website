import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { REVEAL_CARD, SECTION_TAG, STAGGER_DELAYS } from "@/constants/css";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

interface ServicesData {
  tag: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRevealAnimation<HTMLDivElement>();

  const data = t("services", { returnObjects: true }) as ServicesData;

  return (
    <section id="services" className="py-24 bg-background" ref={sectionRef}>
      <Container>
        {/* Header */}
        <div className="text-center max-w-[600px] mx-auto mb-16 reveal">
          <span className={SECTION_TAG}>{data.tag}</span>
          <h2 className="heading-section font-tajawal font-black text-white mb-4 leading-[1.2]">
            {data.title}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item, i) => (
            <div
              key={i}
              className={`${REVEAL_CARD} ${STAGGER_DELAYS[i % STAGGER_DELAYS.length]}`}
            >
              {/* Corner glow */}
              <div className="absolute top-0 end-0 w-20 h-20 bg-[radial-gradient(circle_at_top_right,rgb(var(--primary-rgb) / 0.12),transparent_70%)] rounded-[0_24px_0_80px] transition-all duration-350 group-hover:w-28 group-hover:h-28" />

              <div className="w-14 h-14 rounded-2xl bg-primary/12 flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="font-tajawal font-bold text-xl text-white mb-2.5">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {item.description}
              </p>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
