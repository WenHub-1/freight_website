import React from "react";
import PageHeading from "@/components/common/page-heading";
import AppStore from "@/assets/images/AppStore.png";
import GooglePlay from "@/assets/images/GooglePlay.png";
import QRCode from "@/assets/images/QR-code.png";

const Download: React.FC = () => {
  return (
    <div>
      <PageHeading bigheading={true} title="Download App" />
      <div className="w-full flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
          {/* Heading */}
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Download the Qadam App
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-xl mx-auto">
              Scan the QR code or tap a button below to download the app on your
              device.
            </p>
          </div>

          {/* QR Code + Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 w-full md:w-auto md:justify-center">
            {/* QR Code — hidden on mobile, shown on md+ */}
            <div className="hidden md:flex flex-col items-center gap-4">
              <div className="border-4 border-primary rounded-2xl p-4 shadow-lg">
                <img
                  src={QRCode}
                  alt="QR Code to download Qadam app"
                  className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Scan with your phone camera
              </p>
            </div>

            {/* Divider — hidden on mobile */}
            <div className="hidden md:flex md:flex-col items-center gap-3">
              <div className="md:w-px md:h-16 bg-border" />
              <span className="text-sm text-muted-foreground font-medium">
                OR
              </span>
              <div className="md:w-px md:h-16 bg-border" />
            </div>

            {/* Store Buttons */}
            <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
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

              {/* QR Code — shown only on mobile below buttons */}
              <div className="flex md:hidden flex-col items-center gap-3 mt-4">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-sm text-muted-foreground font-medium">
                    OR
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="border-4 border-primary rounded-2xl p-3 shadow-lg">
                  <img
                    src={QRCode}
                    alt="QR Code to download Qadam app"
                    className="w-36 h-36 object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Scan with your phone camera
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
