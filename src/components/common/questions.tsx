import React, { useState } from "react";
import Container from "../ui/Container";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

// Define types
interface FaqItem {
  question: string;
  answer: string[];
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const Questions: React.FC = () => {
  const { t } = useTranslation();

  // Type the translation result
  const faqData = t("dashboard.faqSection", {
    returnObjects: true,
  }) as FaqSection;
  const faqs: FaqItem[] = faqData.items;

  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (itemValue: string) => {
    setOpenItem((prev) => (prev === itemValue ? null : itemValue));
  };

  return (
    <Container>
      <div>
        <div className="flex justify-center">
          <h1 className="text-4xl font-semibold mb-8">{faqData.title}</h1>
        </div>

        <Accordion
          type="single"
          collapsible
          className="flex flex-wrap w-full gap-6"
        >
          {faqs.map((faq, index) => {
            const itemValue = `item-${index + 1}`;
            const isOpen = openItem === itemValue;

            return (
              <AccordionItem
                key={index}
                value={itemValue}
                className="bg-white w-[45%] shadow-sm px-8 rounded-lg border-none"
              >
                <AccordionTrigger
                  className={`flex justify-between items-center px-4 cursor-pointer ${
                    isOpen ? "" : "min-h-32"
                  }`}
                  onClick={() => handleToggle(itemValue)}
                >
                  <h1 className="dm-sans-font font-medium text-xl">
                    {faq.question}
                  </h1>
                  <span
                    className={`flex justify-center items-center h-11 w-11 rounded-xl shadow transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-secondary-foreground text-black"
                    }`}
                  >
                    {isOpen ? <Minus /> : <Plus />}
                  </span>
                </AccordionTrigger>

                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out px-4 flex flex-col gap-[13px] ${
                    isOpen ? "max-h-[1000px]" : "max-h-0 pt-0"
                  }`}
                >
                  {faq.answer.map((ans, i) => (
                    <p
                      key={i}
                      className="text-lg dm-sans-font pb-14 pr-24 leading-8 text-muted-foreground"
                    >
                      {ans}
                    </p>
                  ))}
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </Container>
  );
};

export default Questions;
