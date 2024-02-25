import { useFormikContext } from "formik";
import { t } from "i18next";
import { BaseInputField, InnerFormLayout, Radio } from "../../../molecules";
import SelectBranches from "../../../molecules/Select/SelectBranches";
import SelectDepartments from "../../../molecules/Select/SelectDepartments";
import SelectRole from "../../../molecules/Select/SelectRole";
import { AllEmployeesTable_TP } from "./Types&Validation";
import AdditionalDataEmployee from "./AdditionalDataEmployee";

function EmployeesFormMainData(update: any) {
  const { setFieldValue, values } = useFormikContext<AllEmployeesTable_TP>();
  return (
    <div>
      <InnerFormLayout
        // customStyle="Form-inside-Container"
        showpopuptitle={true}
        title={
          Object.entries(update?.update).length ? `${t("Edit")}` : `${t("Add")}`
        }
        scroll={true}
      >
        <BaseInputField
          id="name.ar"
          label={`${t("Name")}`}
          name="name"
          type="text"
          placeholder={`${t("Name")}`}
          labelProps={{ className: "mb-1 " }}
          className=" mb-3"
          required
        />

        <BaseInputField
          id="name.en"
          label={`${t("email")}`}
          name="email"
          type="email"
          placeholder={`${t("email")}`}
          labelProps={{ className: "mb-1 " }}
          className="mb-3"
          required
        />
        <BaseInputField
          id="password"
          label={`${t("Password")}`}
          name="password"
          type="password"
          placeholder={`${t("Password")}`}
          labelProps={{ className: "mb-1 " }}
          className="mb-3"
          required
        />
        <BaseInputField
          id="password"
          label={`${t("password confirmation")}`}
          name="password_confirmation"
          type="password"
          placeholder={`${t("password confirmation")}`}
          labelProps={{ className: "mb-1 " }}
          className="mb-3"
          required
        />
        <SelectDepartments
          name="department_id"
          label={`${t("department name")}`}
        />
        <SelectRole
          name="role_id"
          label={`${t("Permission Name")}`}
          placeholder={`${t("Permission Name")}`}
        />
        <SelectBranches name="branch_id" label={`${t("Branch name")}`} />

        <div className="flex gap-4  mantine-radio-style flex-col w-full text-start px-2">
          <label>{t("Activation Status")}</label>
          <div className="flex gap-5  mantine-radio-style">
            <Radio
              checked={values?.status == 1}
              label={`${t("Active")}`}
              id="status"
              name="status"
              onChange={() => {
                setFieldValue("status", 1);
              }}
            />

            <Radio
              label={`${t("Not Active")}`}
              checked={values?.status == 0}
              id="status"
              name="status"
              onChange={() => {
                setFieldValue("status", 0);
              }}
            />
          </div>
        </div>
        <div className="col-span-4">
          <AdditionalDataEmployee />
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default EmployeesFormMainData;
