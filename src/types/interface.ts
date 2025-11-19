export interface NavItem {
  label?: string;
  link?: string;
  dropdown?: { label: string; link: string }[];
}
