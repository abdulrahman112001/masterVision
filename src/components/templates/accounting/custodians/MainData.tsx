import { useFormikContext } from "formik";
import { t } from "i18next";
import {
  BaseInputField,
  InnerFormLayout,
  Radio,
  TextAreaField,
} from "../../../molecules";
import SelectChartAccount from "../../../molecules/Select/SelectChartAccount";
import AdditionalData from "./AdditionalData";
import { Table_TP } from "./Types&Validation";

function MainData(update: any) {
  const { setFieldValue, values } = useFormikContext<Table_TP>();

  return (
    <div>
      <InnerFormLayout
        customStyle="Form-inside-Container"
        showpopuptitle={true}
        title={
          Object.entries(update?.update).length ? `${t("Edit")}` : `${t("Add")}`
        }
        scroll={true}
      >
        <div className="w-11/12 sm:flex flex-col md:grid grid-cols-3  gap-1 my-4">
          <BaseInputField
            id="name"
            label={`${t("Name Arabic")}`}
            name="name_ar"
            type="text"
            placeholder={`${t("Name Arabic")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />
          <BaseInputField
            id="name"
            label={`${t("Name English")}`}
            name="name_en"
            type="text"
            placeholder={`${t("Name English")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />
          <SelectChartAccount name="account_id" label={`${"Account Name"}`} />
          <div className="col-span-4">
            <TextAreaField
              name="description"
              label={`${"description"}`}
              placeholder={`${"description"}`}
              id=""
            />
          </div>

          <div className="col-span-4">
            <AdditionalData />
          </div>
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
