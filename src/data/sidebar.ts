import { BiHome, BiSolidHome } from "react-icons/bi";
import { BsBuilding, BsDash, BsPerson } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import Test from "../components/atoms/icons/sideBar/Mene";
import Mene from "../components/atoms/icons/sideBar/Mene";
import Users from "../components/atoms/icons/sideBar/Users";
import statistics from "../components/atoms/icons/sideBar/statistics";

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
    icon: Mene,
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
    icon: Users,
   
    label: `${"Master Data1"}`,
    items: [
      {
        id: crypto.randomUUID(),
        icon: Test,
        heading: `${"Home"}`,
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

        ],
      },

    ],
  },
  {
    id: crypto.randomUUID(),
    icon: statistics,
    label: `${"Master Data"}`,
    items: [
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
