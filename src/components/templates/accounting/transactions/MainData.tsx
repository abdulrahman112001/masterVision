import { useFormikContext } from "formik";
import { t } from "i18next";
import {
  BaseInputField,
  InnerFormLayout,
  Radio,
  TextAreaField,
} from "../../../molecules";
import SelectChartType from "../../../molecules/Select/SelectChartType";
import { Table_TP } from "./Types&Validation";
import SelectChartAccount from "../../../molecules/Select/SelectChartAccount";
import SelectCurrencies from "../../../molecules/Select/SelectCurrencies";
import SelectCostCenter from "../../../molecules/Select/SelectCostCenter";

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
          <SelectChartAccount name="chart_account_id" label="chart account" />
          <SelectCurrencies name="currency_id" label="currency" />
          <SelectCostCenter name="cost_center_id" label="cost center" />
          <BaseInputField
            id="name"
            label={`${t("amount")}`}
            name="amount"
            type="text"
            placeholder={`${t("amount")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />
          <BaseInputField
            id="name"
            label={`${t("reference")}`}
            name="reference"
            type="text"
            placeholder={`${t("reference")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />
          <TextAreaField name="notes" placeholder="notes" label="notes" id="" />
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
