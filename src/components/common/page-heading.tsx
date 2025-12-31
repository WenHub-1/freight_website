import React from "react";
import { Button } from "../ui/button";
import Container from "../ui/container";

interface PageHeadingProps {
  title: string;
  button?: boolean;
  icon?: string;
  bigheading?: boolean;
}

const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  button,
  icon,
  bigheading,
}) => {
  return (
    <Container className="pt-10 w-full sm:pt-14 md:pt-20 lg:pt-32">
      {bigheading ? (
        <div className="w-full h-[72px] sm:h-32 md:h-44 lg:h-56 flex bg-secondary rounded-lg md:rounded-[20px] justify-center items-center">
          <div className="flex gap-4 justify-center items-center">
            {icon && (
              <div>
                <img
                  className="object-contain w-[105] sm:w-32 md:w-40 lg:w-48 h-10 sm:h-12 md:h-14 lg:h-[75px] "
                  src={icon}
                  alt=""
                />
              </div>
            )}
            <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[52px] text-white font-semibold">
              {title}
            </h1>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center  ">
          <div className="flex gap-4 sm:gap-7 md:gap-9 lg:gap-12  items-center bg-secondary px-3.5 p-5 md:p-8 lg:p-10 rounded-lg md:rounded-xl lg:rounded-2xl">
            <h1 className=" text-2xl sm:text-3xl  md:text-4xl lg:text-[52px] text-white font-semibold">
              {title}
            </h1>
            {button && (
              <Button
                variant="primary-shadow"
                className="hide-download-button w-28 sm:w-36 md:w-44 h-8 sm:h-9 md:h-11 lg:h-14  lg:w-52 font-medium  text-[10px] sm:text-xs md:text-base lg:text-lg"
              >
                Download the app
              </Button>
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

export default PageHeading;
