import { Dispatch, SetStateAction } from "react";
import { Edit } from "../../../atoms/icons/Edit";

type UpdateClient_TP = {
  refetch: () => void;
  setModel: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<{}>>;
  info: any;
};
function UpdateClient({
  refetch,
  setModel,
  setData,
  info,
}: UpdateClient_TP) {

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

export default UpdateClient;
