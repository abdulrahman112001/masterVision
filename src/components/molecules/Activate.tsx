import { t } from "i18next";
import React from "react";

type Activate_TP = {
  info: {
    row: {
      original: {
        status: number;
      };
    };
  };
};
function Activate(info: Activate_TP) {
  return info.info.row.original.status == 1 ? (
    <div className="bg-[#10b981] rounded-md p-1 text-white w-1/2 m-auto">
      {" "}
      {t("Active")}{" "}
    </div>
  ) : (
    <div className="bg-red-500 rounded-md p-1 text-white w-1/2 m-auto">
      {t("Not Active")}
    </div>
  );
}

export default Activate;
