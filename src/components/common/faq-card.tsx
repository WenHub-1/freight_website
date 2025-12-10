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
      className="rounded-2xl border border-border/40 bg-white px-6 pt-2 sm:pt-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <AccordionTrigger className="flex w-full items-start justify-between gap-4 text-left">
        <h2 className="dm-sans-font text-sm sm:text-xl font-medium leading-7">
          {faq.question}
        </h2>

        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl shadow transition-all duration-300 ${
            isOpen
              ? "bg-primary text-white"
              : "bg-secondary-foreground text-black"
          }`}
        >
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </AccordionTrigger>

      <AccordionContent className="px-1 text-xs sm:text-base transition-all duration-300 ease-in-out">
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
