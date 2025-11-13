export interface NavItem {
  label?: string;
  link?: string;
  dropdown?: Array<{ label: string; link: string }>;
}
