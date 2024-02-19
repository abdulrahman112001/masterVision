import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import React from "react";
import { indexTable } from "../../../../utils/helpers";
import Activate from "../../../molecules/Activate";

import DropDown from "../../../molecules/DropDown/DropDown";
import { AllBranchesTable_TP } from "./Types&Validation";
import UpdateBranches from "./UpdateBranches";
import DeleteBranch from "./DeleteBranch";

type RefetchFunction = () => void;
type SetModalOpenFunction = React.Dispatch<React.SetStateAction<boolean>>;
type SetCountryDataFunction = React.Dispatch<React.SetStateAction<any>>; // Adjust 'any' to your specific type

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  setIsModalOpen: SetModalOpenFunction,
  setCountryData: SetCountryDataFunction
): ColumnDef<AllBranchesTable_TP>[] => {
  return [
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
    },
    {
      header: `${t("Name Branch Ar")}`,
      accessorKey: "name_ar",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Name Branch En")}`,
      accessorKey: "name_en",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("area name")}`,
      accessorKey: "area_name",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("email")}`,
      accessorKey: "email",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("mobile")}`,
      accessorKey: "mobile",
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
            <UpdateBranches
              refetch={refetch}
              setModel={setIsModalOpen}
              info={info}
              setData={setCountryData}
            />
            <DeleteBranch refetch={refetch} info={info} />
          </DropDown>
        </div>
      ),
    },
  ];
};
