import React from "react";
import PageHeading from "@/components/common/page-heading";
import { GLOBAL_IMAGES } from "@/components/common/constants/file-image-url";
import Container from "@/components/ui/container";

const AboutUs: React.FC = () => {
  return (
    <div>
      <PageHeading
        title="About us"
        bigheading={true}
        icon={GLOBAL_IMAGES.LOGO_QDAM2}
      />
      <Container>
        <div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-bold inter-font">
              Trucking Made Simple
            </h1>
            <div className="flex flex-col text-base text-center font-medium inter-font gap-12 justify-center items-center">
              <p className="max-w-[67%]">
                Founded in Saudi Arabia in 2025, Qdam is an on-demand delivery
                platform built to empower communities by making logistics fast,
                simple, and affordable. With just a click, individuals, small
                businesses, and enterprises can access a wide fleet of delivery
                vehicles operated by professional driver partners.
              </p>
              <p className="max-w-2/4">
                Driven by technology, we connect people, vehicles, and goods to
                move what matters and support local communities.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
