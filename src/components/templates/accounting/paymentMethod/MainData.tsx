import { useFormikContext } from "formik";
import { t } from "i18next";
import { BaseInputField, InnerFormLayout, Radio } from "../../../molecules";
import SelectChartType from "../../../molecules/Select/SelectChartType";
import { Table_TP } from "./Types&Validation";
import SelectChartAccount from "../../../molecules/Select/SelectChartAccount";

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
         <div className="flex gap-4  text-right mantine-radio-style flex-col w-11/12 ">
          <label>{t("payment type")}</label>
          <div className="flex gap-5  mantine-radio-style">
            <Radio
              checked={values?.payment_type == 'cash'}
              label={`${t("cash ")}`}
              id="payment_type"
              name="payment_type"
              onChange={() => {
                setFieldValue("payment_type", 'cash ');
              }}
            />

            <Radio
              label={`${t("cheque")}`}
              checked={values?.payment_type == 'cheque'}
              id="payment_type"
              name="payment_type"
              onChange={() => {
                setFieldValue("payment_type", 'cheque');
              }}
            />
          </div>
        </div>
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
