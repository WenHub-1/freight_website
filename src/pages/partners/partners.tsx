import React from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: "🤝", text: "Dedicated account manager" },
  { icon: "📊", text: "Real-time delivery analytics dashboard" },
  { icon: "🚀", text: "Bulk shipment discounts" },
  { icon: "🔗", text: "API integration for your platform" },
  { icon: "🛡️", text: "Priority support & SLA guarantees" },
];

const Partners: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeading title="Partners" />

      <section className="py-20 bg-background">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2
              className="font-tajawal font-black text-white mb-4 leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              {t("services.tag", {
                defaultValue: "Grow Your Business with Qaddam",
              })}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Partner with Qaddam to power your last-mile delivery and tap into
              our growing network of professional drivers across Saudi Arabia.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-navy-mid border border-primary/20 rounded-3xl p-10 mb-10">
            <ul className="flex flex-col gap-0">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 py-4 border-b border-white/5 last:border-b-0 text-muted-foreground text-sm"
                >
                  <span className="w-9 h-9 rounded-[10px] bg-primary/10 flex items-center justify-center text-base shrink-0">
                    {b.icon}
                  </span>
                  {b.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <a href="/contact-us">
              <Button size="lg">Get in touch</Button>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Partners;
