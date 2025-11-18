import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto max-w-[1182px] px-4 pb-32 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
