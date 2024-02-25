import { Dispatch, SetStateAction } from "react";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { Edit } from "../../../atoms/icons/Edit";

type UpdateCoast_TP = {
  refetch: () => void;
  setModel: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<{}>>;
  info: any;
};
function UpdateCoast({
  refetch,
  setModel,
  setData,
  info,
}: UpdateCoast_TP) {

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

export default UpdateCoast;
