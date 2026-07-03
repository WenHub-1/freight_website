import React from "react";
import Container from "@/components/ui/container";

interface PageHeadingProps {
  title: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title }) => {
  return (
    <div className="pt-20 bg-background">
      <div className="bg-navy-mid border-b border-white/8">
        <Container className="py-12 sm:py-16">
          <h1 className="font-tajawal font-black text-3xl sm:text-4xl lg:text-5xl text-white text-center">
            {title}
          </h1>
        </Container>
      </div>
    </div>
  );
};

export default PageHeading;
