import React from "react";
import { Button } from "../ui/button";
import Container from "../ui/container";

interface PageHeadingProps {
  title: string;
  button?: boolean;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, button }) => {
  return (
    <Container>
      <div className=" flex justify-center items-center pt-[120px] ">
        <div className="flex gap-12  items-center bg-secondary p-10 rounded-2xl">
          <h1 className=" text-[52px] text-white font-semibold">{title}</h1>
          {button && (
            <Button className="h-14 roboto-font font-medium text-[18px]  w-52">
              Download the app
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default PageHeading;
