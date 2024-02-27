import { Dispatch, SetStateAction } from "react";
import { Edit } from "../../../atoms/icons/Edit";

type UpdateChartAccount_TP = {
  refetch: () => void;
  setModel: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<{}>>;
  info: any;
};
function UpdateChartAccount({
  refetch,
  setModel,
  setData,
  info,
}: UpdateChartAccount_TP) {
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

export default UpdateChartAccount;
