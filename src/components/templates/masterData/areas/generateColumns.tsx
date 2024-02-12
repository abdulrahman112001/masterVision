import { ColumnDef } from "@tanstack/react-table";
import { t } from "i18next";
import React from "react";
import { indexTable } from "../../../../utils/helpers";
import Activate from "../../../molecules/Activate";
import DeleteArea from "./DeleteArea";
import { AllAreasTable_TP } from "./Types&Validation";
import UpdateCountry from "./UpdateAreas";
import DropDown from "../../../molecules/DropDown/DropDown";

type RefetchFunction = () => void;
type SetModalOpenFunction = React.Dispatch<React.SetStateAction<boolean>>;
type SetCountryDataFunction = React.Dispatch<React.SetStateAction<any>>; // Adjust 'any' to your specific type

export const generateColumns = (
  page: number,
  refetch: RefetchFunction,
  setIsModalOpen: SetModalOpenFunction,
  setCountryData: SetCountryDataFunction
): ColumnDef<AllAreasTable_TP>[] => {
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
      header: `${t("City Name")}`,
      accessorKey: "city_name",
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

          <UpdateCountry
            refetch={refetch}
            setModel={setIsModalOpen}
            info={info}
            setData={setCountryData}
          />
          <DeleteArea refetch={refetch} info={info} />
          </DropDown>
        </div>
      ),
    },
  ];
};
