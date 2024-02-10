import { Dispatch, SetStateAction } from "react";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { Edit } from "../../../atoms/icons/Edit";

type UpdateCity_TP = {
  refetch: () => void;
  setModel: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<{}>>;
  info: any;
};
function UpdateCity({
  refetch,
  setModel,
  setData,
  info,
}: UpdateCity_TP) {

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

export default UpdateCity;
