import React from "react";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { sections } from "@/data/privacy-policy";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <PageHeading bigheading={true} title="Privacy Policy" />

      <Container>
        <div className="max-w-3xl mx-auto py-10 md:py-16">
          {/* Effective date */}
          <p className="text-sm text-muted-foreground mb-10 border-l-4 border-secondary pl-4">
            <span className="font-medium">Effective Date:</span> 10th February,
            2026
          </p>

          {/* Intro */}
          <p className="text-base md:text-lg text-card-foreground mb-4">
            This Privacy Policy explains how Qaddam Wasal ("Qaddam", "we", "us")
            collects, stores, uses, and protects user data.
          </p>
          <p className="text-base md:text-lg text-card-foreground mb-2">
            This Policy applies to:
          </p>
          <ul className="list-disc list-inside text-card-foreground mb-10 space-y-1 pl-2">
            <li>Customers</li>
            <li>Drivers</li>
            <li>Visitors using the Qaddam-Wasal App or Website</li>
          </ul>

          {/* Divider */}
          <hr className="border-gray-200 mb-10" />

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>

                {section.body && (
                  <p className="text-card-foreground mb-3 text-sm md:text-base">
                    {section.body}
                  </p>
                )}

                {/* Subsections (for section 1) */}
                {"subsections" in section && section.subsections && (
                  <div className="space-y-6">
                    {section.subsections.map((sub, j) => (
                      <div key={j}>
                        <h3 className="text-sm md:text-base font-medium text-foreground mb-2">
                          {sub.subtitle}
                        </h3>
                        <ul className="list-disc list-inside text-card-foreground space-y-1 pl-2 text-sm md:text-base">
                          {sub.items.map((item, k) => (
                            <li key={k}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Items label (optional) */}
                {"itemsLabel" in section && section.itemsLabel && (
                  <p className="text-card-foreground mb-2 text-sm md:text-base">
                    {section.itemsLabel}
                  </p>
                )}

                {/* Regular items list */}
                {"items" in section &&
                  section.items &&
                  !("subsections" in section) && (
                    <ul className="list-disc list-inside text-card-foreground space-y-1 pl-2 text-sm md:text-base">
                      {section.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}

                {/* Footer note */}
                {"footer" in section && section.footer && (
                  <p className="text-card-foreground mt-3 text-sm md:text-base">
                    {section.footer}
                  </p>
                )}

                {/* Contact block */}
                {"contact" in section && section.contact && (
                  <div className="bg-gray-50 rounded-xl p-5 mt-3 space-y-1 border border-gray-100">
                    {section.contact.map((line, j) => (
                      <p
                        key={j}
                        className="text-sm md:text-base text-card-foreground"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                )}

                {i < sections.length - 1 && (
                  <hr className="border-gray-100 mt-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
