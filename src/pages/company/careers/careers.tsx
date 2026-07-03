import React from "react";
import { useTranslation } from "react-i18next";
import PageHeading from "@/components/common/page-heading";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/lib";
import { useNavigate } from "react-router-dom";

const Careers: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const careers = t("Company.careers", { returnObjects: true }) as {
    title: string;
    heading: string;
    paragraph: string;
    buttonText: string;
  };

  return (
    <div>
      <PageHeading title={careers.title} />
      <section className="py-20 bg-background">
        <Container>
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center">
            <h2
              className="font-tajawal font-black text-white leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              {careers.heading}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {careers.paragraph}
            </p>

            <div className="bg-navy-mid border border-primary/20 rounded-3xl p-10 w-full">
              <p className="text-muted-foreground text-sm mb-6">
                We're always looking for passionate people to join our team. If
                you're interested in working with us, reach out via our contact
                page.
              </p>
              <Button size="lg" onClick={() => navigate(APP_ROUTES.contactUs)}>
                {careers.buttonText}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Careers;
