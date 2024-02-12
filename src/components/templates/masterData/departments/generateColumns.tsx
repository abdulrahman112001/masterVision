import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import Activate from "../../../molecules/Activate";
import UpdateCountry from "./UpdateDepartments";
import { t } from "i18next";
import { indexTable } from "../../../../utils/helpers";
import { AllDepartmentsTable_TP } from "./Types&Validation";
import DeleteDepartment from "./DeleteDepartment";

type RefetchFunction = () => void;
type SetModalOpenFunction = React.Dispatch<React.SetStateAction<boolean>>;
type SetCountryDataFunction = React.Dispatch<React.SetStateAction<any>>; // Adjust 'any' to your specific type

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  setIsModalOpen: SetModalOpenFunction,
  setCountryData: SetCountryDataFunction
): ColumnDef<AllDepartmentsTable_TP>[] => {
  return [
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
    },
    {
      header: `${t("Name Arabic")}`,
      accessorKey: "name_ar",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("Name English")}`,
      accessorKey: "name_en",
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
          <UpdateCountry
            refetch={refetch}
            setModel={setIsModalOpen}
            info={info}
            setData={setCountryData}
          />
          <DeleteDepartment refetch={refetch} info={info} />
        </div>
      ),
    },
  ];
};
