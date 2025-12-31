import React from "react";
import PageHeading from "@/components/common/page-heading";
import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
const Download: React.FC = () => {
  return (
    <div>
      <PageHeading bigheading={true} title="Download Page" />
      <div className="min-h-[40vh] w-full flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            How to download the Qadam app?
          </h1>

          <p className="text-muted-foreground text-base md:text-xl">
            You can download the Qadam app easily using one of the following
            options.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {/* Google Play */}
            <Button
              className="hide-download-button h-14 px-6 text-base flex gap-2"
              onClick={() => window.open("https://play.google.com", "_blank")}
            >
              <DownloadIcon size={20} />
              Download from Google Play
            </Button>

            {/* App Store */}
            <Button
              variant="outline"
              className="hide-download-button h-14 px-6 text-base flex gap-2"
              onClick={() =>
                window.open("https://www.apple.com/app-store/", "_blank")
              }
            >
              <DownloadIcon size={20} />
              Download from App Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
