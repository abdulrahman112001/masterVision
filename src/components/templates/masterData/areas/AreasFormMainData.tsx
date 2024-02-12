import { useFormikContext } from "formik";
import { t } from "i18next";
import { BaseInputField, InnerFormLayout, Radio } from "../../../molecules";
import { AllAreasTable_TP } from "./Types&Validation";
import SelectCities from "../../../molecules/Select/SelectCities";

function AreasFormMainData(update: any) {
  const { setFieldValue, values } = useFormikContext<AllAreasTable_TP>();
  return (
    <div>
      <InnerFormLayout
        showpopuptitle={true}
        title={
          !Object.entries(update?.update).length
            ? `${t("Add Area")}`
            : `${t("Edit Area")}`
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
        <SelectCities name="city_id" label={`${t("City Name")}`} />

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

export default AreasFormMainData;
