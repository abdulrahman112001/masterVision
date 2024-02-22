import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import React from "react";
import { indexTable } from "../../../../utils/helpers";
import DropDown from "../../../molecules/DropDown/DropDown";
import DeleteSupplier from "./DeleteSupplier";
import { AllRolesTable_TP } from "./Types&Validation";
import UpdateSupplier from "./UpdateSupplier";

type RefetchFunction = () => void;
type SetModalOpenFunction = React.Dispatch<React.SetStateAction<boolean>>;
type setMainDataFunction = React.Dispatch<React.SetStateAction<any>>; // Adjust 'any' to your specific type

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  setIsModalOpen: SetModalOpenFunction,
  setMainData: setMainDataFunction
): ColumnDef<AllRolesTable_TP>[] => {
  return [
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
    },
    {
      header: `${t("Name")}`,
      accessorKey: "name",
      cell: (info) => info.renderValue(),
    },

    {
      header: `${t("Actions")}`,
      accessorKey: "actions", // This might be a virtual column not directly mapping to data
      cell: (info) => (
        <div className="flex justify-center ">
          <DropDown>
            <UpdateSupplier
              refetch={refetch}
              setModel={setIsModalOpen}
              info={info}
              setData={setMainData}
            />
            <DeleteSupplier refetch={refetch} info={info} />
          </DropDown>
        </div>
      ),
    },
  ];
};
