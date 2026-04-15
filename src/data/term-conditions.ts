type TextItem = {
  type: "text";
  value: string;
};

type HeadingItem = {
  type: "heading";
  value: string;
};

type ListItem = {
  type: "list";
  items: string[];
};

export type TermsItem = TextItem | HeadingItem | ListItem;

// DATA
export const termsContent: TermsItem[] = [
  {
    type: "text",
    value:
      "These Terms and Conditions (“Terms”) constitute a legally binding agreement between Qaddam Wasal (“Qaddam”, “Establishment ”, “we”, “our”, “us”) and the users of the Qaddam-Wasal mobile application and related services (“Customer”, “Driver”, “User”, “you”).",
  },
  {
    type: "text",
    value:
      "Qaddam Wasal is a registered entity in the Kingdom of Saudi Arabia, Office Address: Building 7718, Sub 4880, Al Talah Street, Al Khaleej District, Riyadh, Postal Code: 13224",
  },
  {
    type: "text",
    value:
      "By accessing or using the Qaddam-Wasal application (“App”), you agree to be bound by these Terms. If you do not agree, you must not use the services.",
  },
  {
    type: "text",
    value:
      "This usage agreement, the terms and conditions, and all the policies published on the Qaddam Wasal Application were developed to protect and preserve the rights of both the Qaddam Wasal Application and the user who accesses the site with or without registration. The terms and conditions are subject to the laws, legislation and regulations in force in the Kingdom of Saudi Arabia. As a user, you agree to abide by everything contained in this agreement if you use the site, access it, or register for the service. Qaddam Wasal has the right to amend this agreement at any time it is considered binding on all parties. These terms are binding on everyone who downloads the Qaddam Wasal application, as this means your agreement to all the terms and conditions stated here. When you use the Qaddam application, you agree to all of the terms and conditions stated.",
  },
  {
    type: "text",
    value:
      "It is strictly prohibited to use the Qaddam application in a way that would harm or disable it. The application does not bear any responsibility for any violation of the traffic regulations in force in the Kingdom, such as overloading, truck passage times, and security and safety violations that the driver must adhere to during the trip, and he must follow the regulations. You must not use the application in violation of the system and transporting prohibited materials or those that require a license.",
  },

  // 1
  { type: "heading", value: "1. Definitions" },
  {
    type: "list",
    items: [
      "App: The Qaddam-Wasal mobile application/platform.",
      "Customer: A user who books a vehicle for transporting goods.",
      "Driver / Partner: An independent contractor using the App to provide transportation services.",
      "Service: The digital platform that connects Customers with Drivers but does not provide transportation  services itself.",
    ],
  },

  // 2
  { type: "heading", value: "2. Nature of Service" },
  {
    type: "text",
    value:
      "Qaddam-Wasal acts solely as a technology platform enabling communication, booking, and coordination between Customers and Drivers for the transport of goods.",
  },
  {
    type: "list",
    items: [
      "Qaddam does not own, operate, or control trucks.",
      "Qaddam does not employ Drivers.",
      "All transportation services are provided exclusively by independent Drivers who are responsible for their own vehicles, permits, licenses, and safety compliance.",
    ],
  },

  // 3
  { type: "heading", value: "3. Eligibility" },
  {
    type: "list",
    items: [
      "Customers must be at least 18 years old to use the Application.",
      "Drivers must be at least 18 years old, hold a valid Saudi Arabian driving license, vehicle registration, and commercial permits where required.",
      "Drivers must complete KYC verification as required by Qaddam.",
    ],
  },

  // 4
  { type: "heading", value: "4. Booking and Pricing" },
  { type: "heading", value: "4.1 Customer–Driver Negotiation" },
  {
    type: "list",
    items: [
      "Prices are not fixed by Qaddam.",
      "The Customer and Driver mutually negotiate the price via call or in-app messaging.",
      "Once agreed, the Driver will confirm the booking in the App.",
      "The price will be determined by agreement and mutual consent between the customer and the captain. Qaddam application does not bear any damages resulting from a misunderstanding between the captain and the user.",
    ],
  },
  { type: "heading", value: "4.2 Scheduled Bookings" },
  {
    type: "text",
    value:
      "Customers may schedule trips in advance. Drivers may accept or decline based on availability.",
  },

  // 5
  { type: "heading", value: "5. Payments" },
  { type: "heading", value: "5.1 Direct Payment to Driver" },
  {
    type: "list",
    items: [
      "Customers will directly pay the Driver for each completed trip.",
      "Qaddam does not collect the transportation fare.",
    ],
  },
  { type: "heading", value: "5.2 Driver Balance & Qaddam Fee" },
  {
    type: "list",
    items: [
      "After completing trips, Drivers accumulate an in-app balance representing Qaddam’s commission share.",
      "For every 100 SAR of Qaddam’s share in a Driver’s balance, the Driver must clear this amount with Qaddam.",
      "Failure to pay Qaddam’s share may result in account suspension.",
    ],
  },

  // 6
  { type: "heading", value: "6. Responsibilities and Obligations" },
  { type: "heading", value: "6.1 Customer Responsibilities" },
  {
    type: "list",
    items: [
      "Provide accurate pickup and drop-off details.",
      "Ensure that goods are lawful and safe to transport.",
      "Review the Driver’s vehicle suitability before confirming.",
    ],
  },
  { type: "heading", value: "6.2 Driver Responsibilities" },
  {
    type: "list",
    items: [
      "Maintain valid driving and vehicle documents.",
      "Ensure truck fitness and safety at all times.",
      "Handle goods responsibly, including loading/unloading as agreed.",
      "Comply with all Saudi Arabian transport laws.",
    ],
  },

  // 7
  { type: "heading", value: "7. Prohibited Goods" },
  {
    type: "text",
    value: "The following items must not be transported via Qaddam-Wasal:",
  },
  {
    type: "list",
    items: [
      "Hazardous, explosive, or flammable materials",
      "Illegal, stolen, or contraband goods",
      "Live animals",
      "Cash, precious metals, jewelry",
      "Perishable items requiring cold chain",
      "Any item prohibited under Saudi law",
    ],
  },
  {
    type: "text",
    value: "Drivers have the right to refuse prohibited or unsafe goods.",
  },

  // 8
  { type: "heading", value: "8. Liability and Insurance" },
  { type: "heading", value: "8.1 No Company Liability" },
  {
    type: "text",
    value: "Qaddam is not liable for:",
  },
  {
    type: "list",
    items: [
      "Damage to goods",
      "Loss or theft",
      "Delays",
      "Accidents",
      "Driver behavior",
      "Vehicle condition",
      "Any disputes between Customer and Driver",
    ],
  },
  { type: "heading", value: "8.2 Driver Liability" },
  {
    type: "list",
    items: [
      "The Driver is solely responsible for the safety, transport, and handling of goods.",
      "Drivers must compensate Customers for losses or damages caused by their negligence.",
    ],
  },
  { type: "heading", value: "8.3 No Insurance Provided" },
  {
    type: "text",
    value:
      "Qaddam does not provide cargo insurance, vehicle insurance, or accident insurance.",
  },

  // 9
  { type: "heading", value: "9. User Accounts" },
  {
    type: "list",
    items: [
      "Users must provide accurate information.",
      "Drivers must complete KYC verification.",
      "Sharing or selling accounts is strictly prohibited.",
      "Qaddam may suspend or terminate accounts for violations.",
    ],
  },

  // 10
  { type: "heading", value: "10. Ratings and Reviews" },
  {
    type: "text",
    value: "Customers may rate and review Drivers.",
  },
  {
    type: "text",
    value: "Qaddam may remove reviews that contain:",
  },
  {
    type: "list",
    items: [
      "Abusive or offensive language",
      "Defamation",
      "False information",
      "Illegal content",
    ],
  },

  // 11
  { type: "heading", value: "11. Data Collection & Privacy" },
  { type: "heading", value: "11.1 Data We Collect" },
  {
    type: "list",
    items: [
      "Real-time GPS location (for both Customers & Drivers)",
      "KYC documents (Drivers only)",
      "Device information",
      "Payment-related information (not credit card storage)",
    ],
  },
  { type: "heading", value: "11.2 Data Usage" },
  {
    type: "list",
    items: [
      "To operate bookings, navigation, tracking, and support",
      "To improve safety, performance, and user experience",
      "For identity verification and fraud prevention",
    ],
  },
  { type: "heading", value: "11.3 Data Storage" },
  {
    type: "text",
    value: "All data is securely stored on Amazon AWS servers.",
  },
  { type: "heading", value: "11.4 Data Sharing" },
  {
    type: "text",
    value: "Qaddam does not share user data with third-party apps except:",
  },
  {
    type: "list",
    items: [
      "Law enforcement (when legally required)",
      "Service providers essential for app functionality (e.g., map APIs)",
    ],
  },

  // 12
  { type: "heading", value: "12. Support and Dispute Resolution" },
  {
    type: "list",
    items: [
      "Qaddam provides in-app support for resolving issues between Customers and Drivers.",
      "If disputes persist, both parties must attempt resolution via Qaddam’s support team before pursuing further action.",
    ],
  },

  // 13
  { type: "heading", value: "13. Termination" },
  {
    type: "text",
    value: "Qaddam may terminate or suspend access if:",
  },
  {
    type: "list",
    items: [
      "A user violates these Terms",
      "Fraud or misuse is suspected",
      "A Driver fails to pay outstanding commission balances",
      "Safety concerns arise",
      "Required documents expire or become invalid",
    ],
  },
  {
    type: "text",
    value: "Users may deactivate their accounts at any time via support.",
  },

  // 14
  { type: "heading", value: "14. Intellectual Property" },
  {
    type: "text",
    value:
      "All content, trademarks, logos, software, and materials within the App belong exclusively to Qaddam Wasal and may not be copied, distributed, or reused without permission.",
  },

  // 15
  { type: "heading", value: "15. Modifications to the Terms" },
  {
    type: "text",
    value:
      "Qaddam may update these Terms at any time. Continued use of the App after changes constitutes acceptance of the revised Terms.",
  },

  // 16
  { type: "heading", value: "16. Governing Law" },
  {
    type: "text",
    value:
      "These Terms shall be governed by and interpreted in accordance with the laws and regulations of the Kingdom of Saudi Arabia.",
  },

  // 17
  { type: "heading", value: "17. Contact Information" },
  {
    type: "text",
    value: "For support or legal inquiries:",
  },
  {
    type: "list",
    items: [
      "Qaddam Wasal",
      "Registered in the Kingdom of Saudi Arabia",
      "Office Address: [To Be Updated]",
      "Email: [To Be Updated]",
      "Phone: [To Be Updated]",
    ],
  },
];
