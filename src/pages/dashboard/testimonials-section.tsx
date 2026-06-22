import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";

interface TestimonialItem {
  stars: number;
  text: string;
  name: string;
  role: string;
  initial: string;
}

interface TestimonialsData {
  tag: string;
  title: string;
  items: TestimonialItem[];
}

const Stars: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-0.5 text-primary text-base mb-4">
    {"★".repeat(count)}
  </div>
);

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  const data = t("testimonials", { returnObjects: true }) as TestimonialsData;

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
    <section id="testimonials" className="py-24 bg-navy-mid" ref={sectionRef}>
      <Container>
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-primary/12 border border-primary/25 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            {data.tag}
          </span>
          <h2
            className="font-tajawal font-black text-white leading-[1.2]"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            {data.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((item, i) => (
            <div
              key={i}
              className="reveal bg-background border border-white/6 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Stars count={item.stars} />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {item.text}
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--navy-mid))] flex items-center justify-center font-bold text-lg text-background flex-shrink-0">
                  {item.initial}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">
                    {item.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
