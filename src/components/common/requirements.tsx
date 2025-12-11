import React from "react";
import Container from "@/components/ui/container";

interface RequirementItem {
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // type for SVG component
}

interface RequirementsProps {
  title: string;
  subtitle: string;
  items: RequirementItem[];
  mainImage: string;
  columns?: number; // 👈 add this
}

const Requirements: React.FC<RequirementsProps> = ({
  title,
  subtitle,
  items,
  mainImage,
  columns = 2, // default = 2 columns
}) => {
  const gridCols =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
        ? "grid-cols-2"
        : "grid-cols-2";

  return (
    <Container>
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-9 lg:gap-12">
        <div className="text-center flex flex-col gap-2 md:gap-3 lg:gap-4">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[120%]">
            {title}
          </h1>
          <p className="text-xs sm:text-sm md:text-lg lg:text-2xl inter-font text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center p-5 sm:p-6 md:p-8 lg:p-10  mx-auto rounded-[20px] bg-secondary-foreground justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div>
            <img
              src={mainImage}
              className="h-[85px] w-16 sm:w-24 md:w-28 lg:w-48 sm:h-24 md:h-36 lg:h-56 object-contain"
            />
          </div>

          <div
            className={`grid ${gridCols} flex  gap-y-3 sm:gap-y-5 md:gap-y-6 lg:gap-y-12`}
          >
            {items.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:w-6 md:h-6" />
                  <p className="text-xs sm:text-sm md:text-xl lg:text-2xl font-semibold">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Requirements;
