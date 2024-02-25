import { useFormikContext } from "formik";
import { t } from "i18next";
import { BaseInputField, InnerFormLayout, Radio } from "../../../molecules";
import AddAdditionalDataClient from "./AddAdditionalDataClient";
import { AllClientsTable_TP } from "./Types&Validation";
import AddCustomField from "./AddCustomField";

function ClientsFormMainData(update: any) {
  const { setFieldValue, values } = useFormikContext<AllClientsTable_TP>();

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
          <BaseInputField
            id="name.ar"
            label={`${t("Employee Name")}`}
            name="name"
            type="text"
            placeholder={`${t("Employee Name")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />
          <BaseInputField
            id="name.ar"
            label={`${t("Email")}`}
            name="email"
            type="email"
            placeholder={`${t("Email")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />
          <BaseInputField
            id="name.ar"
            label={`${t("Password")}`}
            name="password"
            type="password"
            placeholder={`${t("Password")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
          />
          <BaseInputField
            id="name.ar"
            label={`${t("password confirmation")}`}
            name="password_confirmation"
            type="password"
            placeholder={`${t("password confirmation")}`}
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
        <div className="col-span-12">
          <h1 className="text-start">{t("Additional Data")}</h1>
          <AddAdditionalDataClient />
        </div>
        {/* <div className="col-span-12 mt-5 w-full px-[50px]">
          <h1 className="text-start">{t("custom  field")}</h1>
          <AddCustomField />
        </div> */}

      
      </InnerFormLayout>
    </div>
  );
}

export default ClientsFormMainData;
