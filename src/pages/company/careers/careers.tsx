import React from "react";
import PageHeading from "@/components/common/page-heading";
import { CAREER } from "@/components/common/constants/file-image-url";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const Carrers: React.FC = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${CAREER.HERO_SECTION})` }}>
        <PageHeading bigheading={true} title="Find your career at Qdam " />
      </div>
      <Container>
        <div className="flex gap-[120px] pt-24 items-center">
          <div className="">
            <img
              className="max-h-[499px] max-w-[566px] object-contain"
              src={CAREER.CAREER_AT_QDAM}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-10 max-w-[422px] mx-auto ">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold inter-font">Career at Qdam</h1>
              <p className="text-base font-medium inter-font">
                Qdam is redefining on-demand delivery through technology,
                empowering users to send and receive with speed and confidence.
              </p>
            </div>
            <Button variant="primary-shadow">Contact us for jobs</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Carrers;
