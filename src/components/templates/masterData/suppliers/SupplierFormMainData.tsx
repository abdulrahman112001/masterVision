import { useFormikContext } from "formik";
import { t } from "i18next";
import { BaseInputField, InnerFormLayout, Radio } from "../../../molecules";
import SelectPermissions from "../../../molecules/Select/SelectPermissions";
import { AllRolesTable_TP } from "./Types&Validation";
import AddAdditionalDataSuppliers from "./AddAdditionalDataSuppliers";

function SupplierFormMainData(update: any) {
  const { setFieldValue, values } = useFormikContext<AllRolesTable_TP>();

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
            label={`${t("name")}`}
            name="name"
            type="text"
            placeholder={`${t("name")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />

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

        <AddAdditionalDataSuppliers />
      </InnerFormLayout>
    </div>
  );
}

export default SupplierFormMainData;
