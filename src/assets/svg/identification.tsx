import React from "react";

const IdentificationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 4.96997C3 3.32997 4.34 2 6 2H18C19.66 2 21 3.32997 21 4.96997V15.88C21 17.52 19.66 18.85 18 18.85H17.24C16.44 18.85 15.68 19.16 15.12 19.72L13.41 21.41C12.63 22.18 11.36 22.18 10.58 21.41L8.87 19.72C8.31 19.16 7.54 18.85 6.75 18.85H6C4.34 18.85 3 17.52 3 15.88V9.03003"
        stroke="#98C739"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9999 9.99994C13.2868 9.99994 14.33 8.95675 14.33 7.66992C14.33 6.3831 13.2868 5.33997 11.9999 5.33997C10.7131 5.33997 9.66992 6.3831 9.66992 7.66992C9.66992 8.95675 10.7131 9.99994 11.9999 9.99994Z"
        stroke="#98C739"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 15.66C16 13.86 14.21 12.4 12 12.4C9.79 12.4 8 13.86 8 15.66"
        stroke="#98C739"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IdentificationIcon;
