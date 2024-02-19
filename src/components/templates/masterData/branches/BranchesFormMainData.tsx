import { useFormikContext } from "formik";
import { t } from "i18next";
import { BaseInputField, InnerFormLayout, Radio } from "../../../molecules";
import SelectCities from "../../../molecules/Select/SelectCities";
import { AllBranchesTable_TP } from "./Types&Validation";
import SelectArea from "../../../molecules/Select/SelectArea";

function BranchesFormMainData(update: any) {
  const { setFieldValue, values } = useFormikContext<AllBranchesTable_TP>();
  return (
    <div>
      <InnerFormLayout
        showpopuptitle={true}
        title={
          !Object.entries(update?.update).length
            ? `${t("Add Branch")}`
            : `${t("Edit Branch")}`
        }
        scroll={true}
      >
        <BaseInputField
          id="name.ar"
          label={`${t("Name Arabic")}`}
          name="name_ar"
          type="text"
          placeholder={`${t("Name Arabic")}`}
          labelProps={{ className: "mb-1 " }}
          className=" mb-3"
          required
        />

        <BaseInputField
          id="name.en"
          label={`${t("Name English")}`}
          name="name_en"
          type="text"
          placeholder={`${t("Name English")}`}
          labelProps={{ className: "mb-1 " }}
          className="mb-3"
          required
        />
          <BaseInputField
          id="email"
          label={`${t("email")}`}
          name="email"
          type="email"
          placeholder={`${t("email")}`}
          labelProps={{ className: "mb-1 " }}
          className="mb-3"
          required
        />
         <BaseInputField
          id="mobile"
          label={`${t("mobile")}`}
          name="mobile"
          type="text"
          placeholder={`${t("mobile")}`}
          labelProps={{ className: "mb-1 " }}
          className="mb-3"
          required
        />
        <SelectArea
          name="area_id"
          label={`${t("Area")}`}
          placeholder={`$t("Area")`}
        />

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
      </InnerFormLayout>
    </div>
  );
}

export default BranchesFormMainData;
