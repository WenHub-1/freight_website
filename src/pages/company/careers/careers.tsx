import React from "react";
import PageHeading from "@/components/common/page-heading";
import { CAREER } from "@/lib/file-image-url";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const Carrers: React.FC = () => {
  return (
    <div className="relative">
      <div className="z-20">
        <PageHeading bigheading={true} title="Find your career at Qdam " />
      </div>
      <div className="absolute top-0 w-full -z-10">
        {" "}
        <img
          className=" h-40 sm:h-64 md:h-96  lg:h-[481px] w-full"
          src={CAREER.HERO_SECTION}
          alt=""
        />
      </div>
      <Container>
        <div className="flex justify-center lg:justify-between flex-wrap gap-5 lg:gap-0  pt-24 items-center">
          <div className="pl-0 lg:pl-[39px]">
            <img
              className="  w-[358px] h-[336px] md:h-[400px] md:w-[450px]  lg:h-[450px] lg:w-[510px] xl:h-[499px] xl:w-[566px] object-contain"
              src={CAREER.CAREER_AT_QDAM}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-6  md:gap-8 lg:gap-10 max-w-[422px]  ">
            <div className="flex flex-col gap-4">
              <h1 className="flex justify-center lg:justify-start text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold inter-font">
                Career at Qdam
              </h1>
              <p className="flex text-center lg:text-start  text-sm md:text-base font-medium inter-font">
                Qdam is redefining on-demand delivery through technology,
                empowering users to send and receive with speed and confidence.
              </p>
            </div>
            <Button className=" h-14 w-52" variant="primary-shadow">
              Contact us for jobs
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Carrers;
