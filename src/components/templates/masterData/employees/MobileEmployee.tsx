import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import { SvgDelete } from "../../../atoms/icons/SvgDelete";
import { Radio } from "../../../molecules";
import BaseInputRepeater from "../../../molecules/formik-fields/BaseInputRepeater";

function MobileEmployee() {
  const { values, setFieldValue } = useFormikContext<any>();
  const handleRadioChange = (index: number, checked: boolean) => {
    const updatedMobiles = values.mobiles.map((mobile: any, idx: number) => ({
      ...mobile,
      main: idx === index ? (checked ? "1" : "0") : "0",
    }));
    setFieldValue("mobiles", updatedMobiles);
  };

  return (
    <div>
      <FieldArray name="mobiles">
        {({ push, remove }) => (
          <div className="grid grid-cols-4 col-span-full gap-8 bg-['red'] relative">
            {values?.mobiles?.map((item: any, index: any) => (
              <div className="col-span-12 flex gap-4 items-center">
                <div className="">
                  <BaseInputRepeater
                    id=""
                    label={`${t("mobile")} ${index + 1}`}
                    name={`mobiles[${index}].item`}
                    type="text"
                    placeholder={`${t("mobile")}`}
                    value={item.item}
                    onChange={(e: { target: { value: string } }) =>
                      setFieldValue(`mobiles[${index}].item`, e.target.value)
                    }
                    required
                  />
                </div>
                <div className=" mt-8">
                  <Radio
                    id=""
                    name={`mobiles[${index}].main`}
                    label={`${t("")}`}
                    checked={item.main == "1"}
                    onChange={() => handleRadioChange(index, item.main !== "1")}
                  />
                </div>

                {values?.mobiles?.length > 1 && (
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
            <button
              type="button"
              className=" bg-red-500 text-white rounded-md absolute w-10 h-10 text-2xl left-[25px] top-[60%] "
              onClick={() => {
                push({
                  item: "",
                  main: "",
                });
              }}
            >
              +
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  );
}

export default MobileEmployee;
