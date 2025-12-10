import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import { DASHBOARD_IMAGES } from "@/lib/file-image-url";

const images = [
  DASHBOARD_IMAGES.BENEFITS_SECTION.BOX,
  DASHBOARD_IMAGES.BENEFITS_SECTION.TRUCK,
  DASHBOARD_IMAGES.BENEFITS_SECTION.PHONE,
];
const BenefitsSection: React.FC = () => {
  const { t } = useTranslation();
  const benefits = t("dashboard.benefitsSection", { returnObjects: true }) as {
    title: string;
    items: { title: string; subtitle: string }[];
  };

  // Combine images with translation data
  const itemsWithImages = benefits.items.map((item, index) => ({
    ...item,
    image: images[index],
  }));

  return (
    <Container>
      <div className="flex flex-col gap-12">
        <h2 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          {benefits.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {itemsWithImages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-50 shadow-sm p-6 flex flex-col gap-4 relative"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-3xs h-48 object-contain"
                />
              </div>
              <div className="w-[80%]">
                <h3 className="text-base sm:text-xl md:text-[28px] font-bold">
                  {item.title}
                </h3>
                <p className=" text-card-foreground text-xs sm:text-sm md:text-base">
                  {item.subtitle}
                </p>
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BenefitsSection;
