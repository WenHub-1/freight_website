import { useTranslation } from "react-i18next";
import FeatureSection from "@/components/common/feature-section";
import Container from "@/components/ui/container";
import PageHeading from "@/components/common/page-heading";
import VehicleSection from "@/components/common/vehicle-section";
import BeniefitsSectionBoxImg from "@/assets/images/BeniefitsSectionBox.png";
// import FeatureImg from "@/assets/images/FeatureSection.png";
import AppDownloadBanner from "@/components/common/app-download-banner";
import Questions from "@/components/common/questions";
import Img1 from "@/assets/images/discount-shape.png";
import Img2 from "@/assets/images/truck-tick.png";
import Img3 from "@/assets/images/user-tick.png";
import Img4 from "@/assets/images/routing-2.png";

const images = [Img1, Img2, Img3, Img4];

const ShipWithUs: React.FC = () => {
  const { t } = useTranslation();

  const section = t("shipWithUs.featureSection", { returnObjects: true }) as {
    title: string;
    items: { title: string; subtitle: string }[];
  };

  const itemsWithImages = section.items.map((item, index) => ({
    ...item,
    image: images[index],
  }));

  return (
    <>
      <PageHeading title={t("shipWithUs.title")} button={true} />

      <Container className="pb-0!">
        <FeatureSection
          title={section.title}
          items={itemsWithImages}
          mainImage={BeniefitsSectionBoxImg}
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
