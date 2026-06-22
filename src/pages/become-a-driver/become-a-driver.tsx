import React from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const perks = [
  { icon: "💰", text: "Earn on your own schedule" },
  { icon: "📦", text: "Flexible delivery and ride options" },
  { icon: "🚗", text: "Use your own vehicle" },
  { icon: "📱", text: "Simple driver app" },
  { icon: "⭐", text: "Weekly payouts" },
];

const BecomeADriver: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeading
        title={t("drivers.tag", { defaultValue: "Become a Driver" })}
      />

      <section className="py-20 bg-background">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2
              className="font-tajawal font-black text-white mb-4 leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              {t("drivers.title", { defaultValue: "Drive. Earn. Grow." })}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {t("drivers.subtitle", {
                defaultValue:
                  "Join thousands of drivers on the Qaddam platform and earn money delivering goods and rides across Saudi Arabia.",
              })}
            </p>
          </div>

          <div className="max-w-md mx-auto bg-navy-mid border border-primary/20 rounded-3xl p-10 mb-10">
            <ul className="flex flex-col gap-0">
              {perks.map((perk, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 py-4 border-b border-white/5 last:border-b-0 text-muted-foreground text-sm"
                >
                  <span className="w-9 h-9 rounded-[10px] bg-primary/10 flex items-center justify-center text-base shrink-0">
                    {perk.icon}
                  </span>
                  {perk.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://apps.apple.com/sa/app/qaddam-wasal/id6759410662"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                {t("cta.appStore", { defaultValue: "Download on App Store" })}
              </Button>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.satam.qaddam"
              target="_blank"
              rel="noopener noreferrer"
            >
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

export default BecomeADriver;
