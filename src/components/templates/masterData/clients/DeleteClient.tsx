import { t } from "i18next";
import { Dispatch, SetStateAction, useState } from "react";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { Delete } from "../../../atoms/icons/Delete";
import showAlert from "../../../molecules/ShowAlert";

type DeleteClient_TP = {
  refetch: () => void;
  info: any;
};
function DeleteClient({ refetch, info }: DeleteClient_TP) {
  const [id, setID] = useState("");
  console.log("🚀 ~ DeleteCountry ~ id:", id);
  const { mutate } = useMutate({
    mutationKey: ["master-data/clients"],
    endpoint: `master-data/clients/${id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
    method: "delete",
  });
  return (
    <div>
      <span>
        <Delete
          action={() => {
            showAlert(
              `${t("Are you sure?")}`,
              `${t("You cannot go back in this process")}`,
              false,
              t("done"),
              true,
              "warning",
              () => {
                mutate({}); 
              }
            );
            setID(info?.row?.original?.id);
          }}
        />
      </span>
    </div>
  );
}

export default DeleteClient;
 