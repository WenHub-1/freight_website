import React from "react";
import { Plus, Minus } from "lucide-react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FaqCardProps {
  faq: {
    question: string;
    answer: string[];
  };
  isOpen: boolean;
  value: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ faq, isOpen, value }) => {
  return (
    <AccordionItem
      value={value}
      className=" rounded-lg lg:rounded-2xl border border-border/40 bg-white  shadow-sm transition-shadow hover:shadow-md"
    >
      <AccordionTrigger
        className={`flex w-full items-center justify-between text-left
   
    ${
      isOpen
        ? "px-5 pt-6 pb-0 sm:pt-6 sm:pb-0 sm:px-6 md:pt-9 md:pb-0 md:px-7 lg:pt-11 lg:pb-0 lg:px-8" // when open (smaller height)
        : " px-5 py-6 sm:py-7 sm:px-6 md:py-9 md:px-7 lg:py-11 lg:px-8" // when closed (bigger height)
    }
    gap-2 sm:gap-2.5 md:gap-3.5 lg:gap-4
    transition-all duration-300
  `}
      >
        <h2 className="dm-sans-font text-sm sm:textbase md:text-lg lg:text-xl font-medium leading-7">
          {faq.question}
        </h2>
        {/* flex w-full px-5 py-6 sm:py-7 sm:px-6 md:py-9 md:px-7 lg:py-11 lg:px-8  items-center justify-between gap-2 sm:gap-2.5 md:gap-3.5 lg:gap-4 text-left */}
        <span
          className={`flex h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 items-center justify-center  rounded lg:rounded-2xl shadow transition-all duration-300 ${
            isOpen
              ? "bg-primary text-white"
              : "bg-secondary-foreground text-black"
          }`}
        >
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </AccordionTrigger>

      <AccordionContent className=" px-5  sm:px-6 md:px-7 max-w-[420px] sm:max-w-[500px] md:max-w-[370px] lg:max-w-[420px]  lg:px-8 text-xs md:text-sm lg::text-base transition-all duration-300 ease-in-out">
        <div className="flex flex-col gap-3 pt-2">
          {faq.answer.map((ans, i) => (
            <p
              key={i}
              className="dm-sans-font   leading-[18px]  sm:leading-5 md:leading-6 lg:leading-7 text-muted-foreground"
            >
              {ans}
            </p>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqCard;
