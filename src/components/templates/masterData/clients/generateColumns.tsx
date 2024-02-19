import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import Activate from "../../../molecules/Activate";

import { t } from "i18next";
import { indexTable } from "../../../../utils/helpers";
import DropDown from "../../../molecules/DropDown/DropDown";
import UpdateClient from "./UpdateClient";
import DeleteClient from "./DeleteClient";
import { AllClientsTable_TP } from "./Types&Validation";

type RefetchFunction = () => void;
type SetModalOpenFunction = React.Dispatch<React.SetStateAction<boolean>>;
type SetCountryDataFunction = React.Dispatch<React.SetStateAction<any>>; // Adjust 'any' to your specific type

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  setIsModalOpen: SetModalOpenFunction,
  setCountryData: SetCountryDataFunction
): ColumnDef<AllClientsTable_TP>[] => {
  return [
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
    },
    {
      header: `${t("Employee Name")}`,
      accessorKey: "name",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("email")}`,
      accessorKey: "email",
      cell: (info) => info.renderValue(),
    },
  
    {
      header: `${t("Active")}`,
      accessorKey: "status",
      cell: (info) => <Activate info={info} />,
    },
    {
      header: `${t("Actions")}`,
      accessorKey: "actions", // This might be a virtual column not directly mapping to data
      cell: (info) => (
        <div className="flex justify-center">
          <DropDown>
            <UpdateClient
              refetch={refetch}
              setModel={setIsModalOpen}
              info={info}
              setData={setCountryData}
            />
            <DeleteClient refetch={refetch} info={info} />
          </DropDown>
        </div>
      ),
    },
  ];
};
