import React from "react";
import PageHeading from "@/components/common/page-heading";
import AppStore from "@/assets/images/AppStore.png";
import GooglePlay from "@/assets/images/GooglePlay.png";
import QRCode from "@/assets/images/QR-code.png";

const Download: React.FC = () => {
  return (
    <div>
      <PageHeading bigheading={true} title="Download App" />
      <div className="min-h-[60vh] w-full flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full flex flex-col items-center gap-12">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Download the Qadam App
            </h1>
            <p className="text-muted-foreground text-base md:text-xl max-w-xl mx-auto">
              Scan the QR code or tap a button below to download the app on your
              device.
            </p>
          </div>

          {/* QR Code + Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* QR Code */}
            <div className="flex flex-col items-center gap-4">
              <div className="border-4 border-primary rounded-2xl p-4 shadow-lg">
                <img
                  src={QRCode}
                  alt="QR Code to download Qadam app"
                  className="w-48 h-48 object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Scan with your phone camera
              </p>
            </div>

            {/* Divider */}
            <div className="flex md:flex-col items-center gap-3">
              <div className="w-16 h-px md:w-px md:h-16 bg-border" />
              <span className="text-sm text-muted-foreground font-medium">
                OR
              </span>
              <div className="w-16 h-px md:w-px md:h-16 bg-border" />
            </div>

            {/* Store Buttons */}
            <div className="flex flex-col gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.satam.qaddam
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GooglePlay}
                  alt="Download on Google Play"
                  className="h-14 object-contain hover:opacity-80 transition-opacity cursor-pointer"
                />
              </a>
              <a
                href="https://apps.apple.com/sa/app/qaddam-wasal/id6759410662"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={AppStore}
                  alt="Download on App Store"
                  className="h-14 object-contain hover:opacity-80 transition-opacity cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
