import { t } from "i18next";
import { useState } from "react";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { Delete } from "../../../atoms/icons/Delete";
import showAlert from "../../../molecules/ShowAlert";

type DeleteEntities_TP = {
  refetch: () => void;
  info: any;
};
function DeleteEntities({ refetch, info }: DeleteEntities_TP) {
  const [id, setID] = useState("");
  console.log("🚀 ~ DeleteCountry ~ id:", id);
  const { mutate } = useMutate({
    mutationKey: [`accounting/entities/${id}`],
    endpoint: `accounting/entities/${id}`,
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

export default DeleteEntities;
