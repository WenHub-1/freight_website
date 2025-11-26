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
      <div className="flex flex-col gap-12">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-5xl font-semibold leading-[120%]">{title}</h1>
          <p className="text-2xl inter-font text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center p-10  mx-auto rounded-[20px] bg-secondary-foreground justify-center gap-10">
          <div>
            <img src={mainImage} className="w-48 h-56 object-contain" />
          </div>

          <div className={`grid ${gridCols} gap-x-[52px] gap-y-12`}>
            {items.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <Icon className="w-6 h-6" />
                  <p className="text-2xl font-semibold">{item.label}</p>
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
