import React from "react";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { sections } from "@/data/privacy-policy";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <PageHeading title="Privacy Policy" />

      <section className="py-16 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground mb-10 border-l-4 border-primary/40 pl-4">
              <span className="font-medium text-white">Effective Date:</span>{" "}
              10th February, 2026
            </p>

            <p className="text-base text-white/80 mb-4">
              This Privacy Policy explains how Qaddam Wasal ("Qaddam", "we",
              "us") collects, stores, uses, and protects user data.
            </p>
            <p className="text-base text-white/80 mb-2">
              This Policy applies to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-10 space-y-1 pl-2 text-sm">
              <li>Customers</li>
              <li>Drivers</li>
              <li>Visitors using the Qaddam-Wasal App or Website</li>
            </ul>

            <hr className="border-white/8 mb-10" />

            <div className="space-y-10">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
                    {section.title}
                  </h2>

                  {section.body && (
                    <p className="text-muted-foreground mb-3 text-sm md:text-base">
                      {section.body}
                    </p>
                  )}

                  {"subsections" in section && section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((sub, j) => (
                        <div key={j}>
                          <h3 className="text-sm md:text-base font-medium text-white/90 mb-2">
                            {sub.subtitle}
                          </h3>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2 text-sm md:text-base">
                            {sub.items.map((item, k) => (
                              <li key={k}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {"itemsLabel" in section && section.itemsLabel && (
                    <p className="text-muted-foreground mb-2 text-sm md:text-base">
                      {section.itemsLabel}
                    </p>
                  )}

                  {"items" in section &&
                    section.items &&
                    !("subsections" in section) && (
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2 text-sm md:text-base">
                        {section.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}

                  {"footer" in section && section.footer && (
                    <p className="text-muted-foreground mt-3 text-sm md:text-base">
                      {section.footer}
                    </p>
                  )}

                  {"contact" in section && section.contact && (
                    <div className="bg-navy-mid rounded-xl p-5 mt-3 space-y-1 border border-white/8">
                      {section.contact.map((line, j) => (
                        <p
                          key={j}
                          className="text-sm md:text-base text-muted-foreground"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  )}

                  {i < sections.length - 1 && (
                    <hr className="border-white/5 mt-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
