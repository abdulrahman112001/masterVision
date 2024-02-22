import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import { SvgDelete } from "../../../atoms/icons/SvgDelete";
import BaseInputRepeater from "../../../molecules/formik-fields/BaseInputRepeater";
import { Radio } from "../../../molecules";

function AddAdditionalDataSuppliers() {
  const { values, setFieldValue, errors } = useFormikContext<any>();
  const handleRadioChange = (index: number, checked: boolean) => {
    const updatedValue = values.additional_data.map(
      (values: any, idx: number) => ({
        ...values,
        is_default: idx === index ? (checked ? "1" : "0") : "0",
      })
    );
    setFieldValue("additional_data", updatedValue);
  };

  return (
    <div>
      {" "}
      <FieldArray name="additional_data">
        {({ push, remove }) => (
          <div className="grid grid-cols-4 col-span-full gap-8 bg-['red'] relative">
            {values?.additional_data?.map((item: any, index: any) => (
              <div className="col-span-12 flex gap-4">
                <div className="">
                  <BaseInputRepeater
                    id=""
                    label={`${t("label ar")}`}
                    name={`additional_data[${index}].key_ar`}
                    type="text"
                    placeholder={`${t("label ar")}`}
                    value={item.key_ar}
                    onChange={(e: { target: { value: string } }) =>
                      setFieldValue(
                        `additional_data[${index}].key_ar`,
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
                <div className="">
                  <BaseInputRepeater
                    id=""
                    label={`${t("label en")}`}
                    name={`additional_data[${index}].key_en`}
                    type="text"
                    placeholder={`${t("label en")}`}
                    value={item.key_en}
                    onChange={(e: { target: { value: string } }) =>
                      setFieldValue(
                        `additional_data[${index}].key_en`,
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
                <div className="">
                  <BaseInputRepeater
                    id=""
                    label={`${t("value ar")}`}
                    name={`additional_data[${index}].value_ar`}
                    type="text"
                    placeholder={`${t("value ar")}`}
                    value={item.value_ar}
                    onChange={(e: { target: { value: string } }) =>
                      setFieldValue(
                        `additional_data[${index}].value_ar`,
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
                <div className="">
                  <BaseInputRepeater
                    id=""
                    label={`${t("value en")}`}
                    name={`additional_data[${index}].value_en`}
                    type="text"
                    placeholder={`${t("value en")}`}
                    value={item.value_en}
                    onChange={(e: { target: { value: string } }) =>
                      setFieldValue(
                        `additional_data[${index}].value_en`,
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
                <div className=" mt-8">
                  <Radio
                    id=""
                    name={`additional_data[${index}].is_default`}
                    label={`${t("")}`}
                    checked={item.is_default == "1"}
                    onChange={() =>
                      handleRadioChange(index, item.is_default !== "1")
                    }
                  />
                </div>
                {values?.additional_data?.length > 1 && (
                  <button
                    type="button"
                    className="mt-[35px]"
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    <SvgDelete stroke="red" />
                  </button>
                )}
              </div>
            ))}
            <div className="flex justify-end col-span-12">

            <button
              type="button"
              className=" bg-red-500 text-white rounded-md  w-20 left-[25px] top-[60%] "
              onClick={() => {
                push({
                  key_ar: "",
                  key_en: "",
                  value_ar: "",
                  value_en: "",
                  is_default: 0,
                });
              }}
            >
              {t("Add")}
            </button>
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
}

export default AddAdditionalDataSuppliers;
