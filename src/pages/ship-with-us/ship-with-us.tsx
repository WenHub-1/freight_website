import { useTranslation } from "react-i18next";
import FeatureSection from "@/components/common/feature-section";
import Container from "@/components/ui/container";
import PageHeading from "@/components/common/page-heading";
import VehicleSection from "@/components/common/vehicle-section";
import AppDownloadBanner from "@/components/common/app-download-banner";
import Questions from "@/components/common/questions";
import Box from "@/assets/svg/box";

// SVG icons
import Img1 from "@/assets/svg/discount";
import Img2 from "@/assets/svg/truck";
import Img3 from "@/assets/svg/user-tick";
import Img4 from "@/assets/svg/routing-2";

// Centralized images
// import { SHIP_WITH_US_IMAGES } from "@/components/common/constants/file-image-url";

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

      <Container className="pb-0!">
        <FeatureSection
          title={section.title}
          items={itemsWithImages}
          // mainImage={SHIP_WITH_US_IMAGES.FEATURE_SECTION_BOX}
          mainImage={<Box />}
          bgImageStyle={true} // big image on left
        />
        <VehicleSection />
        <AppDownloadBanner />
        <Questions />
      </Container>
    </>
  );
};

export default ShipWithUs;
