import { useFormikContext } from "formik";
import { t } from "i18next";
import { BaseInputField, InnerFormLayout, Radio } from "../../../molecules";
import SelectPermissions from "../../../molecules/Select/SelectPermissions";
import { AllRolesTable_TP } from "./Types&Validation";

function RolesFormMainData(update: any) {
  const { setFieldValue, values } = useFormikContext<AllRolesTable_TP>();

  return (
    <div>
      <InnerFormLayout
        customStyle="Form-inside-Container"
        showpopuptitle={true}
        title={
          Object.entries(update?.update).length
            ? `${t("Edit")}`
            : `${t("Add")}`
        }
        scroll={true}
      >
        <div className="w-11/12 sm:flex flex-col md:grid grid-cols-3  gap-1 my-4">
          <SelectPermissions
            name="permission_ids"
            label={`${t("Permissions")}`}
            placeholder={`${t("Permissions")}`}
          />
          <BaseInputField
            id="name"
            label={`${t("Permission Name")}`}
            name="name"
            type="text"
            placeholder={`${t("Permission Name")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />
          <BaseInputField
            id="name"
            label={`${t("name ar")}`}
            name="name_ar"
            type="text"
            placeholder={`${t("name ar")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />
          <BaseInputField
            id="name"
            label={`${t("name en")}`}
            name="name_en"
            type="text"
            placeholder={`${t("name en")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />

          <BaseInputField
            id="name.en"
            label={`${t("email")}`}
            name="email"
            type="email"
            placeholder={`${t("email")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />
          <BaseInputField
            id="password"
            label={`${t("Password")}`}
            name="password"
            type="password"
            placeholder={`${t("password")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />
          <BaseInputField
            id="password_confirmation"
            label={`${t("password confirmation")}`}
            name="password_confirmation"
            type="password"
            placeholder={`${t("password confirmation")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
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

export default RolesFormMainData;
