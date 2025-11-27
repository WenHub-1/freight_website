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
    <Container className="pt-[120px]">
      {bigheading ? (
        <div className="w-full h-56 flex bg-secondary rounded-[20px] justify-center items-center">
          <div className="flex justify-center items-center">
            {icon && (
              <div>
                <img
                  className="object-contain h-[75px] w-[197px]"
                  src={icon}
                  alt=""
                />
              </div>
            )}
            <h1 className="text-[52px] text-white font-semibold">{title}</h1>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center  ">
          <div className="flex gap-12  items-center bg-secondary p-10 rounded-2xl">
            <h1 className=" text-[52px] text-white font-semibold">{title}</h1>
            {button && (
              <Button variant="primary-shadow">Download the app</Button>
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

export default PageHeading;
