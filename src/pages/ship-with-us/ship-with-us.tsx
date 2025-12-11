import { useTranslation } from "react-i18next";
import FeatureSection from "@/components/common/feature-section";
import PageHeading from "@/components/common/page-heading";
import VehicleSection from "@/components/common/vehicle-section";
import AppDownloadBanner from "@/components/common/app-download-banner";
import Questions from "@/components/common/questions";
// SVG icons
import Img1 from "@/assets/svg/discount";
import Img2 from "@/assets/svg/truck";
import Img3 from "@/assets/svg/user-tick";
import Img4 from "@/assets/svg/routing-2";

// Centralized images
import { SHIP_WITH_US_IMAGES } from "@/lib/file-image-url";

const images = [Img1, Img2, Img3, Img4];

const ShipWithUs: React.FC = () => {
  const { t } = useTranslation();

  const section = t("shipWithUs.featureSection", { returnObjects: true }) as {
    title: string;
    items: { title: string; subtitle: string }[];
  };

  const itemsWithImages = section.items.map((item, index) => ({
    ...item,
    Icon: images[index],
  }));

  return (
    <>
      <PageHeading title={t("shipWithUs.title")} button={true} />

      <FeatureSection
        title={section.title}
        items={itemsWithImages}
        // mainImage={SHIP_WITH_US_IMAGES.FEATURE_SECTION_BOX}
        mainImage={SHIP_WITH_US_IMAGES.FEATURE_SECTION_BOX}
        bgImageStyle={true} // big image on left
      />
      <VehicleSection />
      <AppDownloadBanner />
      <Questions />
    </>
  );
};

export default ShipWithUs;
