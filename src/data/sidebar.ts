import { BiHome } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import Test from "../components/atoms/icons/sideBar/Test";

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
    icon: Test,
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
      {
        id: crypto.randomUUID(),
        icon: BiHome,
        label: `${"Areas"}`,
        link: "/masterData/areas",
      },
      {
        id: crypto.randomUUID(),
        icon: BiHome,
        label: `${"Currencies"}`,
        link: "/masterData/currencies",
      },
      {
        id: crypto.randomUUID(),
        icon: BiHome,
        label: `${"Departments"}`,
        link: "/masterData/departments",
      },
    ],
  },
];
