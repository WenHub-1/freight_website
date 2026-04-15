import React from "react";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { termsContent } from "@/data/term-conditions";

const TermsConditions: React.FC = () => {
  return (
    <div>
      <PageHeading bigheading title="Terms & Conditions" />

      <Container>
        <div className="max-w-3xl mx-auto py-12 md:py-20 space-y-6">
          {/* Effective Date */}
          <div className="border-l-4 border-secondary pl-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">Effective Date:</span> To Be
              Updated
            </p>
          </div>

          {/* Content */}
          {termsContent.map((item, index) => {
            // 🔹 TEXT
            if (item.type === "text") {
              return (
                <p key={index} className="text-sm md:text-base leading-relaxed">
                  {item.value}
                </p>
              );
            }

            // 🔹 HEADINGS (MAIN vs SUB)
            if (item.type === "heading") {
              const isSubHeading = /^\d+\.\d+/.test(item.value);

              return isSubHeading ? (
                <h3
                  key={index}
                  className="text-base md:text-lg font-semibold text-foreground mt-4"
                >
                  {item.value}
                </h3>
              ) : (
                <h2
                  key={index}
                  className="text-xl md:text-2xl font-semibold text-foreground mt-6"
                >
                  {item.value}
                </h2>
              );
            }

            // 🔹 LISTS
            if (item.type === "list") {
              return (
                <ul
                  key={index}
                  className="list-disc list-outside pl-6 space-y-1 "
                >
                  {item.items.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>
      </Container>
    </div>
  );
};

export default TermsConditions;
