import { Dispatch, SetStateAction } from "react";
import { Edit } from "../../../atoms/icons/Edit";

type UpdateEntities_TP = {
  refetch: () => void;
  setModel: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<{}>>;
  info: any;
};
function UpdateEntities({
  refetch,
  setModel,
  setData,
  info,
}: UpdateEntities_TP) {
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

export default UpdateEntities;
