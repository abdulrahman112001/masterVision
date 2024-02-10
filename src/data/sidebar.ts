import { BiHome } from "react-icons/bi";
import { IconType } from "react-icons/lib";

export type MenuItem_TP = {
  id: string;
  icon: IconType;
  label: string;
  link?: string;
  heading?: string; // Add the heading property
  items?: {
    id: string;
    icon: IconType;
    label: string;
    link?: string;
    items?: MenuItem_TP[];
  }[];
};

export const sideBarItems: MenuItem_TP[] = [

  {
    id: crypto.randomUUID(),
    icon: BiHome,
    label: `${"Master Data"}`,
    
    items: [
      {
        id: crypto.randomUUID(),
        icon: BiHome,
        label: `${"Countries"}`,
        link: "/masterData/countries",
      },
      {
        id: crypto.randomUUID(),
        icon: BiHome,
        label: `${"Cities"}`,
        link: "/masterData/cities",
      },
    ],
  },
];
