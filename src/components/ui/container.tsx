import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`container mx-auto max-w-[1200px] px-4 text-secondary  pb-10 sm:pb-20 md:pb-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
