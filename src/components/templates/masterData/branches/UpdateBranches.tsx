import { Dispatch, SetStateAction } from "react";
import { Edit } from "../../../atoms/icons/Edit";

type UpdateBranches_TP = {
  refetch: () => void;
  setModel: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<{}>>;
  info: any;
};
function UpdateBranches({
  refetch,
  setModel,
  setData,
  info,
}: UpdateBranches_TP) {

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

export default UpdateBranches;
