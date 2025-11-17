import React, { useState } from "react";
import Container from "../ui/container";
import { Accordion } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import FaqCard from "./faq-card";

// Types
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

  // Split FAQ array into 2 columns
  const middle = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, middle);
  const rightColumn = faqs.slice(middle);

  // Each column needs its own open state
  const [openLeft, setOpenLeft] = useState("");
  const [openRight, setOpenRight] = useState("");

  return (
    <Container>
      <div className="flex justify-center">
        <h1 className="text-4xl font-semibold mb-8">{faqData.title}</h1>
      </div>

      {/* TWO FLEX COLUMNS */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <Accordion
            type="single"
            collapsible
            value={openLeft}
            onValueChange={(v) => setOpenLeft(v)}
            className="flex flex-col gap-6"
          >
            {leftColumn.map((faq, index) => (
              <FaqCard
                key={`left-${index}`}
                faq={faq}
                value={`left-${index}`}
                isOpen={openLeft === `left-${index}`}
              />
            ))}
          </Accordion>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <Accordion
            type="single"
            collapsible
            value={openRight}
            onValueChange={(v) => setOpenRight(v)}
            className="flex flex-col gap-6"
          >
            {rightColumn.map((faq, index) => (
              <FaqCard
                key={`right-${index}`}
                faq={faq}
                value={`right-${index}`}
                isOpen={openRight === `right-${index}`}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </Container>
  );
};

export default Questions;
