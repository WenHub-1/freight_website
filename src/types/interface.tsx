export interface NavItem {
  label?: string;
  link?: string;
  dropdown?: Array<{ label: string; link: string }>;
}
export interface HeaderButtons {
  language: {
    english: string;
    arabic: string;
  };
  download: string;
}
