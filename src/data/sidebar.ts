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
            label: `${"Activity Logs"}`,
            
            link: "/masterData/activity-logs",
          },
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
            label: `${"Clients"}`,
            link: "/masterData/clients",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Branches"}`,
            link: "/masterData/branches",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Employees"}`,
            link: "/masterData/employees",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Roles"}`,
            link: "/masterData/roles",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Admins"}`,
            link: "/masterData/admins",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Suppliers"}`,
            link: "/masterData/supplier",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Settings"}`,
            link: "/masterData/settings",
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        icon: BiSolidHome,
        label: `${"Accounting"}`,
        items:[
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Cost Center"}`,
            link: "/account/coast-center",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Chart Type"}`,
            link: "/account/chart-type",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Chart Account"}`,
            link: "/account/chart-account",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Entities"}`,
            link: "/account/entities",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Payment Method"}`,
            link: "/account/payment-method",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Safes"}`,
            link: "/account/safes",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Custodians"}`,
            link: "/account/custodians",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Taxes"}`,
            link: "/account/taxes",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Invoices"}`,
            link: "/account/invoices",
          },
          {
            id: crypto.randomUUID(),
            icon: BsDash,
            label: `${"Transactions"}`,
            link: "/account/transactions",
          },
        ]
      }
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
