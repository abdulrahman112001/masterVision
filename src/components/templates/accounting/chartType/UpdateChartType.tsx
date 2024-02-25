import { Dispatch, SetStateAction } from "react";
import { Edit } from "../../../atoms/icons/Edit";

type UpdateChartType_TP = {
  refetch: () => void;
  setModel: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<{}>>;
  info: any;
};
function UpdateChartType({
  refetch,
  setModel,
  setData,
  info,
}: UpdateChartType_TP) {
  return (
    <div>
      <span>
        <Edit
          action={() => {
            setData(info?.row?.original);
            setModel(true);
          }}
        />
      </span>
    </div>
  );
}

export default UpdateChartType;
