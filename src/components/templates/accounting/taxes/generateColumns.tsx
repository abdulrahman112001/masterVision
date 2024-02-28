import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import React from "react";
import { indexTable } from "../../../../utils/helpers";
import Activate from "../../../molecules/Activate";
import DropDown from "../../../molecules/DropDown/DropDown";
import UpdateIcon from "../../../molecules/UpdateIcon";
import DeleteMain from "./DeleteMain";
import { Table_TP } from "./Types&Validation";

type RefetchFunction = () => void;
type SetModalOpenFunction = React.Dispatch<React.SetStateAction<boolean>>;
type setMainDataFunction = React.Dispatch<React.SetStateAction<any>>; // Adjust 'any' to your specific type

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  setIsModalOpen: SetModalOpenFunction,
  setMainData: setMainDataFunction
): ColumnDef<Table_TP>[] => {
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
      header: `${t("type")}`,
      accessorKey: "type",
      cell: (info) => <div>{info.row?.original.type == 1 ? "percentage" :"fixed  "}</div>,
    },
    {
      header: `${t("index")}`,
      accessorKey: "index",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("value")}`,
      accessorKey: "value",
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
        <div className="flex justify-center ">
          <DropDown>
            <UpdateIcon
              refetch={refetch}
              setModel={setIsModalOpen}
              info={info}
              setData={setMainData}
            />
            <DeleteMain refetch={refetch} info={info} />
          </DropDown>
        </div>
      ),
    },
  ];
};
