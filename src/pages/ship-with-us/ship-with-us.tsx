import React from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/constants/links";
import { FEATURE_CARD } from "@/constants/css";

const features = [
  { icon: "⚡", text: "Same-day and express delivery options" },
  { icon: "📍", text: "Real-time tracking for every shipment" },
  { icon: "🔒", text: "Secure handling and insured deliveries" },
  { icon: "💳", text: "Easy online payment and invoicing" },
  { icon: "📞", text: "Dedicated support team" },
];

const ShipWithUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeading
        title={t("services.tag", { defaultValue: "Ship with Us" })}
      />

      <section className="py-20 bg-background">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="heading-page font-tajawal font-black text-white mb-4 leading-[1.2]">
              Fast, Reliable Shipping Across Saudi Arabia
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Send packages, freight, and cargo anywhere in Saudi Arabia with
              Qaddam's trusted fleet of professional drivers.
            </p>
          </div>

          <div className={`max-w-md mx-auto ${FEATURE_CARD} mb-10`}>
            <ul className="flex flex-col gap-0">
              {features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 py-4 border-b border-white/5 last:border-b-0 text-muted-foreground text-sm"
                >
                  <span className="w-9 h-9 rounded-[10px] bg-primary/10 flex items-center justify-center text-base shrink-0">
                    {f.icon}
                  </span>
                  {f.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                {t("cta.appStore", { defaultValue: "Download on App Store" })}
              </Button>
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                {t("cta.googlePlay", { defaultValue: "Get it on Google Play" })}
              </Button>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ShipWithUs;
