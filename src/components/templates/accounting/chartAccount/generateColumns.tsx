import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import React from "react";
import { indexTable } from "../../../../utils/helpers";
import Activate from "../../../molecules/Activate";
import DropDown from "../../../molecules/DropDown/DropDown";
import { AllChartsTable_TP } from "./Types&Validation";
import UpdateChartType from "./UpdateChartAccount";
import DeleteChartType from "./DeleteChartAccount";
import UpdateChartAccount from "./UpdateChartAccount";
import DeleteChartAccount from "./DeleteChartAccount";

type RefetchFunction = () => void;
type SetModalOpenFunction = React.Dispatch<React.SetStateAction<boolean>>;
type setMainDataFunction = React.Dispatch<React.SetStateAction<any>>; // Adjust 'any' to your specific type

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  setIsModalOpen: SetModalOpenFunction,
  setMainData: setMainDataFunction
): ColumnDef<AllChartsTable_TP>[] => {
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
      header: `${t("class name")}`,
      accessorKey: "class_name",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("type name")}`,
      accessorKey: "type_name",
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
            <UpdateChartAccount
              refetch={refetch}
              setModel={setIsModalOpen}
              info={info}
              setData={setMainData}
            />
            <DeleteChartAccount refetch={refetch} info={info} />
          </DropDown>
        </div>
      ),
    },
  ];
};
