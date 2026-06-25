import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/lib";

interface Perk {
  icon: string;
  text: string;
}

interface DashboardRow {
  label: string;
  value: string;
}

interface DriversData {
  tag: string;
  title: string;
  subtitle: string;
  perks: Perk[];
  cta: string;
  dashboard: {
    title: string;
    trips: DashboardRow;
    distance: DashboardRow;
    bonus: DashboardRow;
    total: DashboardRow;
    badge: string;
  };
}

const DriversSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  const data = t("drivers", { returnObjects: true }) as DriversData;

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

  const rows = [
    data.dashboard.trips,
    data.dashboard.distance,
    data.dashboard.bonus,
    data.dashboard.total,
  ];

  return (
    <section id="drivers" className="py-24 bg-background" ref={sectionRef}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Earnings card */}
          <div className="reveal relative">
            <div className="relative bg-navy-mid border border-primary/20 rounded-3xl p-10 overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-10 -start-10 w-[200px] h-[200px] bg-[radial-gradient(circle,rgb(var(--primary-rgb) / 0.12)_0%,transparent_70%)] pointer-events-none" />

              <h3 className="font-tajawal font-bold text-lg text-primary mb-6">
                {data.dashboard.title}
              </h3>

              <div className="flex flex-col">
                {rows.map((row, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-4 ${
                      i < rows.length - 1 ? "border-b border-white/6" : ""
                    }`}
                  >
                    <span
                      className={`text-sm ${i === rows.length - 1 ? "font-bold text-white" : "text-muted-foreground"}`}
                    >
                      {row.label}
                    </span>
                    <span
                      className={`font-bold ${
                        i >= rows.length - 2
                          ? "text-primary text-xl"
                          : "text-white"
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5  -end-2 lg:-end-5 bg-primary text-background font-extrabold text-sm px-5 py-3.5 rounded-2xl shadow-primary-badge whitespace-nowrap">
              {data.dashboard.badge}
            </div>
          </div>

          {/* Text side */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <span className="inline-block bg-primary/12 border border-primary/25 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              {data.tag}
            </span>
            <h2
              className="font-tajawal font-black text-white mb-4 leading-[1.2]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              {data.title}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              {data.subtitle}
            </p>

            <ul className="flex flex-col mb-10 list-none">
              {data.perks.map((perk, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 py-3 border-b border-white/5 text-muted-foreground text-sm last:border-b-0"
                >
                  <span className="w-9 h-9 rounded-[10px] bg-primary/10 flex items-center justify-center text-base shrink-0">
                    {perk.icon}
                  </span>
                  {perk.text}
                </li>
              ))}
            </ul>

            <Button size="xl" onClick={() => navigate(APP_ROUTES.download)}>
              {data.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DriversSection;
