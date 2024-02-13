import { BiCircle, BiData, BiFlag, BiHome, BiSolidHome } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import Test from "../components/atoms/icons/sideBar/Test";
import { BsBuilding, BsDash, BsLine, BsMenuButton, BsMenuButtonFill, BsMenuUp, BsPerson } from "react-icons/bs";
import { Menu } from "react-pro-sidebar";

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
    icon: BsBuilding,
    label: `${"Master Data1"}`,
    items: [
      {
        id: crypto.randomUUID(),
        icon: BiSolidHome,
        heading: `${"Home"}`,
        label: `${"Master Data"}`,
        items: [
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Countries"}`,
            
            link: "/masterData/countries",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Cities"}`,
            link: "/masterData/cities",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Areas"}`,
            link: "/masterData/areas",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Currencies"}`,
            link: "/masterData/currencies",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Departments"}`,
            link: "/masterData/departments",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Employees"}`,
            link: "/masterData/employees",
          },
        ],
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    icon: BsPerson,
    label: `${"Master Data1"}`,
    items: [
      {
        id: crypto.randomUUID(),
        icon: Test,
        label: `${"Master Data6"}`,
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
          {
            id: crypto.randomUUID(),
            icon: BiHome,
            label: `${"Employees"}`,
            link: "/masterData/employees",
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        icon: Test,
        label: `${"Master Data5"}`,
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
          {
            id: crypto.randomUUID(),
            icon: BiHome,
            label: `${"Employees"}`,
            link: "/masterData/employees",
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        icon: Test,
        label: `${"Master Data7"}`,
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
          {
            id: crypto.randomUUID(),
            icon: BiHome,
            label: `${"Employees"}`,
            link: "/masterData/employees",
          },
        ],
      },
    ],
  },
];
