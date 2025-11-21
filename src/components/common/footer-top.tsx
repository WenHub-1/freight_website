import React from "react";
import { Button } from "../ui/button";
import { FOOTER_IMAGES } from "@/components/common/constants/file-image-url";

const FooterTop: React.FC = () => {
  return (
    <div className="flex h-[30vh] relative justify-center">
      <div className="absolute -bottom-14">
        <div
          className="w-full max-w-[1110px] h-[304px] flex items-center text-white rounded-2xl bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${FOOTER_IMAGES.BACKGROUND})`,
          }}
        >
          {/* Text + Button */}
          <div className="p-12 flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-4xl">Get started with QDAM</h1>
              <p className="inter-font text-base">
                Join us as a delivery driver or partner and start earning right
                now!
              </p>
            </div>
            <Button className="text-lg h-14 w-[210px] font-medium">
              Download the app
            </Button>
          </div>

          {/* iPhone Image */}
          <div className="h-full shrink-0">
            <img
              className="h-full object-contain"
              src={FOOTER_IMAGES.HAND_PHONE}
              alt="Hand holding iPhone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
