import React from "react";

const GooglePlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3.18 23.76a2.5 2.5 0 0 0 2.56-.12l11.34-6.55-2.55-2.55-11.35 9.22zM20.5 9.66L17.98 8.3l-2.89 2.89 2.89 2.88 2.54-1.37a1.74 1.74 0 0 0 0-3.04zM3.18.24 14.53 9.47l-2.55 2.55L2.64.47A2.53 2.53 0 0 1 3.18.24zM3.18 23.76L14.53 14.53l-2.55-2.55L3.18 23.76z" />
    </svg>
  );
};

export default GooglePlayIcon;
