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
      <AccordionTrigger className="flex w-full px-5 py-6 sm:py-7 sm:px-6 md:py-9 md:px-7 lg:py-11 lg:px-8  items-center justify-between gap-4 text-left">
        <h2 className="dm-sans-font text-sm sm:textbase md:text-lg lg:text-xl font-medium leading-7">
          {faq.question}
        </h2>

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

      <AccordionContent className="px-1 text-xs md:text-sm lg::text-base transition-all duration-300 ease-in-out">
        <div className="flex flex-col gap-3 pt-2">
          {faq.answer.map((ans, i) => (
            <p key={i} className="dm-sans-font leading-7 text-muted-foreground">
              {ans}
            </p>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqCard;
