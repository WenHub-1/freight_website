import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { FOOTER_IMAGES } from "@/lib/file-image-url";

const FooterTop: React.FC = () => {
  const { t } = useTranslation();

  const footerTop = t("footer.footerTop", { returnObjects: true }) as {
    heading: string;
    paragraph: string;
    buttonText: string;
    buttonTextShort: string;
  };

  return (
    <div className="flex h-[30vh] relative justify-center ">
      <div className="absolute -bottom-8 md:-bottom-14  ">
        <div
          className="relative  min-w-[358px] min-h-64 sm:h-full sm:min-w-[600px]   md:min-w-[700px]  lg:h-full lg:w-full  flex lg:items-center text-white rounded-2xl bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${FOOTER_IMAGES.BACKGROUND})`,
          }}
        >
          {/* Text + Button */}
          <div className="relative  p-4  sm:p-8 md:p-12 flex flex-col gap-4 sm:gap-7">
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold  text-2xl md:text-4xl">
                {footerTop.heading}
              </h1>
              <p className="inter-font text-xs sm:text-sm md:text-base max-w-60 sm:max-w-80 md:max-w-[387px]">
                {footerTop.paragraph}
              </p>
            </div>
            <Button className="hide-download-button text-base rounded md:rounded-lg  sm:text-lg h-10 w-[135px] sm:h-12 sm:w-44 md:h-14 md:w-[210px] font-semibold sm:font-medium">
              {/* Text for screens ABOVE sm */}
              <span className="hidden sm:inline">{footerTop.buttonText}</span>

              {/* Text for screens BELOW sm */}
              <span className="inline sm:hidden">
                {footerTop.buttonTextShort}
              </span>
            </Button>
          </div>

          {/* iPhone Image */}
          <div className="absolute -bottom-7  md:bottom-[-21px] right-0 lg:relative lg:bottom-0   ">
            <div className="">
              {" "}
              <img
                className="  w-72 h-60 md:w-96 md:h-72   object-contain  lg:relative lg:w-full lg:h-full "
                src={FOOTER_IMAGES.HAND_PHONE}
                alt="Hand holding iPhone"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
