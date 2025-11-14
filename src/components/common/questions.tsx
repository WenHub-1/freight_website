import React, { useState } from "react";
import Container from "../ui/Container";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
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

  const faqData = t("dashboard.faqSection", {
    returnObjects: true,
  }) as FaqSection;
  const faqs: FaqItem[] = faqData?.items ?? [];

  const [openItem, setOpenItem] = useState<string>("");

  return (
    <Container>
      <div>
        <div className="flex justify-center">
          <h1 className="text-4xl font-semibold mb-8">{faqData.title}</h1>
        </div>

        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={(value) => setOpenItem(value)}
          className="grid w-full gap-6 items-start md:grid-cols-2"
        >
          {faqs.map((faq, index) => {
            const itemValue = `item-${index + 1}`;
            const isOpen = openItem === itemValue;

            return (
              <AccordionItem
                key={index}
                value={itemValue}
                className="rounded-2xl border border-border/40 bg-white px-6 py-4 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-primary/30"
              >
                <AccordionTrigger className="flex w-full items-start justify-between gap-4 text-left">
                  <h2 className="dm-sans-font text-xl font-medium leading-7">
                    {faq.question}
                  </h2>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl shadow transition-colors duration-300 ${
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-secondary-foreground text-black"
                    }`}
                  >
                    {isOpen ? <Minus /> : <Plus />}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-1 text-base">
                  <div className="flex flex-col gap-3 pt-2">
                    {faq.answer.map((ans, i) => (
                      <p
                        key={i}
                        className="dm-sans-font leading-7 text-muted-foreground"
                      >
                        {ans}
                      </p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </Container>
  );
};

export default Questions;
