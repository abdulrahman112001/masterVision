import { useFormikContext } from "formik";
import { t } from "i18next";
import { BaseInputField, InnerFormLayout, Radio } from "../../../molecules";
import { Table_TP } from "./Types&Validation";
import SelectCurrencies from "../../../molecules/Select/SelectCurrencies";
import SelectChartAccount from "../../../molecules/Select/SelectChartAccount";
import SelectBranches from "../../../molecules/Select/SelectBranches";

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
          <BaseInputField
            id="name"
            label={`${t("account number")}`}
            name="account_number"
            type="text"
            placeholder={`${t("account number")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />
          <SelectCurrencies name="currency_id" label={`${t("Currency")}`} />
          <SelectChartAccount
            name="chart_account_origin_id"
            label={`${"General ledger account"}`}
          />
          <SelectChartAccount
            name="chart_account_expense_id"
            label={`${"Administrative expenses account (optional)"}`}
          />
          <SelectBranches name="branch_id" label={`${"Branch"}`} />

     
          <div className="flex gap-4  text-right mantine-radio-style flex-col w-11/12 ">
            <label>{t("Activation Status")}</label>
            <div className="flex gap-5  mantine-radio-style">
              <Radio
                checked={values?.status === 1}
                label={`${t("Active")}`}
                id="status"
                name="status"
                onChange={() => {
                  setFieldValue("status", 1);
                }}
              />

              <Radio
                label={`${t("Not Active")}`}
                checked={values?.status === 0}
                id="status"
                name="status"
                onChange={() => {
                  setFieldValue("status", 0);
                }}
              />
            </div>
          </div>
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default MainData;
