import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import { indexTable } from "../../../../utils/helpers";
import DropDown from "../../../molecules/DropDown/DropDown";
import DeleteActivity from "./DeleteActivity";
import { AllActivityTable_TP } from "./Types&Validation";

type RefetchFunction = () => void;

export const generateColumns = (
  page: number,
  refetch: RefetchFunction
): ColumnDef<AllActivityTable_TP>[] => {
  return [
    {
      header: "#",
      accessorKey: "id",
      cell: (info) => <span>{indexTable(info.row.index, page)}</span>,
    },
    {
      header: `${t("Name")}`,
      accessorKey: "user_name",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("log name")}`,
      accessorKey: "log_name",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("description")}`,
      accessorKey: "description",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("event")}`,
      accessorKey: "event",
      cell: (info) => (
        <div
          className={
            info?.row?.original?.event == "created"
              ? "bg-lime-500 text-white rounded-md p-1"
              : "bg-orange-500 text-white rounded-md p-1"
          }
        >
          {info?.row?.original?.event}
        </div>
      ),
    },
    {
      header: `${t("New Name")}`,
      accessorKey: "new.name",
      cell: (info) => info.renderValue(),
    },
    {
      header: `${t("New Email")}`,
      accessorKey: "new.email",
      cell: (info) => (
        <div>
          {info?.row?.original?.new?.email
            ? info?.row?.original?.new?.email
            : "--"}
        </div>
      ),
    },
    {
      header: `${t("old Name")}`,
      accessorKey: "old.name",
      cell: (info) =>   <div>
      {info?.row?.original?.old?.name
        ? info?.row?.original?.old?.name
        : "--"}
    </div>,
    },
    {
      header: `${t("old Email")}`,
      accessorKey: "old.email",
      cell: (info) => (
        <div>
          {info?.row?.original?.old?.email
            ? info?.row?.original?.old?.email
            : "--"}
        </div>
      ),
    },
 
    {
      header: `${t("Actions")}`,
      accessorKey: "actions",
      cell: (info) => (
        <div className="flex justify-center">
          <DropDown>
            <DeleteActivity refetch={refetch} info={info} />
          </DropDown>
        </div>
      ),
    },
  ];
};
