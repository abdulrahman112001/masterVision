import { useFormikContext } from "formik";
import { t } from "i18next";
import { BaseInputField, InnerFormLayout, Radio } from "../../../molecules";
import { DropFile } from "../../../molecules/files/DropFile";
import { AllCitiesTable_TP } from "./Types&Validation";
import SelectCountry from "../../../molecules/Select/SelectCountry";

function CitiesFormMainData(update: any) {
  const { setFieldValue, values, errors } =
    useFormikContext<AllCitiesTable_TP>();
  return (
    <div>
      <InnerFormLayout
      customStyle="Form-inside-Container"
        showpopuptitle={true}
        title={
          Object.entries(update?.update).length
            ? `${t("Edit City")}`
            : `${t("Add City")}`
        }
        scroll={true}
      >
        <div className="w-11/12 sm:flex flex-col md:grid grid-cols-3  gap-1 my-4">
          <SelectCountry name="country_id" label={`${t("Countries")}`}/>
          <BaseInputField
            id="name.ar"
            label={`${t("Name Arabic")}`}
            name="name_ar"
            type="text"
            placeholder={`${t("Name Arabic")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
            />

          <BaseInputField
            id="name.en"
            label={`${t("Name English")}`}
            name="name_en"
            type="text"
            placeholder={`${t("Name English")}`}
            labelProps={{ className: "mb-1 " }}
            className="mb-3 text-xs"
            required
            />
          </div>

    
        <div className="w-11/12 text-right">
          <h2 className="dark:text-white"> {`${t("Image")}`}</h2>
          <DropFile name="image" />
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

export default CitiesFormMainData;
