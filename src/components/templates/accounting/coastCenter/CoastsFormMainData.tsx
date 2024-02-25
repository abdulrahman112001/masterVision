import { useFormikContext } from "formik";
import { t } from "i18next";
import {
  BaseInputField,
  InnerFormLayout,
  Radio,
  TextAreaField,
} from "../../../molecules";
import SelectRole from "../../../molecules/Select/SelectRole";
import { AllCoastsTable_TP } from "./Types&Validation";
import DateInputMantine from "../../../molecules/formik-fields/DateInputMantine";

function CoastsFormMainData(update: any) {
  const { setFieldValue, values } = useFormikContext<AllCoastsTable_TP>();

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
          <DateInputMantine name="start_date" label={t("start date")} />
          <DateInputMantine name="due_date" label={t("due date")} />
          <TextAreaField
            id=""
            label={t("Description")}
            name="description"
            placeholder={t("Description")}
          />
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
      </InnerFormLayout>
    </div>
  );
}

export default CoastsFormMainData;
