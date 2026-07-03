import React from "react";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { termsContent } from "@/data/term-conditions";

const TermsConditions: React.FC = () => {
  return (
    <div>
      <PageHeading title="Terms & Conditions" />

      <section className="py-16 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-l-4 border-primary/40 pl-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-white">
                  Effective Date:
                </span>{" "}
                To Be Updated
              </p>
            </div>

            {termsContent.map((item, index) => {
              if (item.type === "text") {
                return (
                  <p
                    key={index}
                    className="text-sm md:text-base leading-relaxed text-muted-foreground"
                  >
                    {item.value}
                  </p>
                );
              }

              if (item.type === "heading") {
                const isSubHeading = /^\d+\.\d+/.test(item.value);
                return isSubHeading ? (
                  <h3
                    key={index}
                    className="text-base md:text-lg font-semibold text-white/90 mt-4"
                  >
                    {item.value}
                  </h3>
                ) : (
                  <h2
                    key={index}
                    className="text-xl md:text-2xl font-semibold text-white mt-6"
                  >
                    {item.value}
                  </h2>
                );
              }

              if (item.type === "list") {
                return (
                  <ul
                    key={index}
                    className="list-disc list-outside pl-6 space-y-1 text-muted-foreground text-sm md:text-base"
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
      </section>
    </div>
  );
};

export default TermsConditions;
