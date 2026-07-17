import React from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { SECTION_TAG, STAGGER_DELAYS } from "@/constants/css";

import step1 from "@/assets/images/driver-step-1-new-order.png";
import step2 from "@/assets/images/driver-step-2-negotiate.png";
import step3 from "@/assets/images/driver-step-3-start-order.png";
import step4 from "@/assets/images/driver-step-4-head-to-pickup.png";
import step5 from "@/assets/images/driver-step-5-confirm-loading.png";
import step6 from "@/assets/images/driver-step-6-confirm-delivery.png";
import step7 from "@/assets/images/driver-step-7-rate.png";

const stepImages = [step1, step2, step3, step4, step5, step6, step7];

interface Step {
  num: string;
  title: string;
  description: string;
}

interface DriverGuideData {
  tag: string;
  title: string;
  subtitle: string;
  steps: Step[];
}

const DriverGuide: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRevealAnimation<HTMLDivElement>();

  const data = t("driverGuide", { returnObjects: true }) as DriverGuideData;

  return (
    <div>
      <PageHeading title={data.tag} />

      <section className="py-20 bg-background" ref={sectionRef}>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-20 reveal">
            <span className={SECTION_TAG}>{data.tag}</span>
            <h2 className="heading-section font-tajawal font-black text-white mb-4 leading-[1.2]">
              {data.title}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {data.steps.map((step, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal ${STAGGER_DELAYS[i % STAGGER_DELAYS.length]}`}
              >
                <div
                  className={`flex justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div className="relative">
                    <div className="absolute -inset-16 blur-2xl bg-[radial-gradient(circle,rgb(var(--primary-rgb)/0.22)_0%,rgb(var(--primary-rgb)/0.08)_40%,transparent_75%)] pointer-events-none" />
                    <img
                      src={stepImages[i]}
                      alt={step.title}
                      className="relative w-60 sm:w-[400px] drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>

                <div
                  className={`text-center md:text-start ${i % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/12 border border-primary/25 text-primary font-tajawal font-black text-xl mb-5">
                    {step.num}
                  </span>
                  <h3 className="font-tajawal font-bold text-2xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default DriverGuide;
