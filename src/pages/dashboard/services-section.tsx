import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";

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
  const sectionRef = useRef<HTMLDivElement>(null);

  const data = t("services", { returnObjects: true }) as ServicesData;

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
    <section id="services" className="py-24 bg-background" ref={sectionRef}>
      <Container>
        {/* Header */}
        <div className="text-center max-w-[600px] mx-auto mb-16 reveal">
          <span className="inline-block bg-primary/12 border border-primary/25 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            {data.tag}
          </span>
          <h2
            className="font-tajawal font-black text-white mb-4 leading-[1.2]"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
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
              className="reveal relative bg-navy-mid border border-white/7 rounded-3xl p-8 transition-all duration-350 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_0_1px_rgb(var(--primary-rgb) / 0.1)] overflow-hidden group cursor-default"
              style={{ transitionDelay: `${i * 0.1}s` }}
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
