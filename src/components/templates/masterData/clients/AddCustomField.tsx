import React from "react";
import { FieldArray, useFormikContext } from "formik";
import { t } from "i18next";
import { SvgDelete } from "../../../atoms/icons/SvgDelete";
import BaseInputRepeater from "../../../molecules/formik-fields/BaseInputRepeater";

function AddCustomField() {
  const { values, setFieldValue } = useFormikContext<any>();

  return (
    <div>
      <FieldArray name="custom_fields">
        {({ push, remove }) => (
          <div className="grid grid-cols-4 col-span-full gap-8 bg-['red'] px-5">
            {values?.custom_fields?.map((item: any, index: number) => (
              <div
                key={index}
                className="col-span-12 grid grid-cols-12 gap-4 "
              >
                <div className="col-span-3">
                  <BaseInputRepeater
                    id=""
                    label={`${t("Type")}`}
                    name={`custom_fields[${index}].[${index}].type`}
                    type="text"
                    placeholder={`${t("Type")}`}
                    value={values?.type}
                    onChange={(e: any) =>
                      setFieldValue(
                        `custom_fields[${index}].type`,
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
                <div className="col-span-3">
                  <BaseInputRepeater
                    id=""
                    label={`${t("status")}`}
                    name={`custom_fields[${index}].[${index}].status`}
                    type="text"
                    placeholder={`${t("status")}`}
                    value={values?.status}
                    onChange={(e: any) =>
                      setFieldValue(
                        `custom_fields[${index}].status`,
                        1
                      )
                    }
                    required
                  />
                </div>
                <div className="col-span-3">
                  <BaseInputRepeater
                    id=""
                    label={`${t("name ar")}`}
                    name={`custom_fields[${index}].[${index}].name_ar`}
                    type="text"
                    placeholder={`${t("name ar")}`}
                    value={values?.name_ar}
                    onChange={(e: any) =>
                      setFieldValue(
                        `custom_fields[${index}].name_ar`,
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
                <div className="col-span-3">
                  <BaseInputRepeater
                    id=""
                    label={`${t("name en")}`}
                    name={`custom_fields[${index}].[${index}].name_en`}
                    type="text"
                    placeholder={`${t("name en")}`}
                    value={values?.name_en}
                    onChange={(e: any) =>
                      setFieldValue(
                        `custom_fields[${index}].name_en`,
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
                <div className="col-span-12 border  border-dashed p-2 rounded-md">
                  {item.custom_field_data && (
                    <FieldArray
                      name={`custom_fields[${index}].custom_field_data`}
                    >
                      {({ push: pushNested, remove: removeNested }) => (
                        <div>
                          {item?.custom_field_data?.map(
                            (nestedItem: any, nestedIndex: number) => (
                              <div
                                key={nestedIndex}
                                className="grid grid-cols-3 gap-4"
                              >
                                {/* Inputs for nested array items */}
                                <BaseInputRepeater
                                  id=""
                                  label={`${t("status")}`}
                                  name={`custom_fields[${index}].custom_field_data[${nestedIndex}].status`}
                                  type="text"
                                  placeholder={`${t("status")}`}
                                  value={nestedItem.status}
                                  onChange={(e: any) =>
                                    setFieldValue(
                                      `custom_fields[${index}].custom_field_data[${nestedIndex}].status`,
                                      e.target.value
                                    )
                                  }
                                  required
                                />
                                <BaseInputRepeater
                                  id=""
                                  label={`${t("value en")}`}
                                  name={`custom_fields[${index}].custom_field_data[${nestedIndex}].values_en`}
                                  type="text"
                                  placeholder={`${t("value en")}`}
                                  value={nestedItem.values_en}
                                  onChange={(e: any) =>
                                    setFieldValue(
                                      `custom_fields[${index}].custom_field_data[${nestedIndex}].values_en`,
                                      e.target.value
                                    )
                                  }
                                  required
                                />
                                <BaseInputRepeater
                                  id=""
                                  label={`${t("value ar")}`}
                                  name={`custom_fields[${index}].custom_field_data[${nestedIndex}].values_ar`}
                                  type="text"
                                  placeholder={`${t("value ar")}`}
                                  value={nestedItem.values_ar}
                                  onChange={(e: any) =>
                                    setFieldValue(
                                      `custom_fields[${index}].custom_field_data[${nestedIndex}].values_ar`,
                                      e.target.value
                                    )
                                  }
                                  required
                                />

                                <button
                                  type="button"
                                  className="mt-[35px]"
                                  onClick={() => removeNested(nestedIndex)}
                                >
                                  <SvgDelete stroke="red" />
                                </button>
                              </div>
                            )
                          )}
                          <button
                            type="button"
                            className="mt-2 w-[200px] text-end bg-blue-500 text-white rounded p-1"
                            onClick={() =>
                              pushNested({ status: "", values_en: "" , values_ar:"" })
                            }
                          >
                            Add Nested Field
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  )}
                </div>
                <div className="col-span-12">
                  <button
                    type="button"
                    className="mt-2 w-[200px] bg-red-500 text-white rounded p-1"
                    onClick={() => remove(index)}
                  >
                    Remove Custom Field
                  </button>
                </div>
              </div>
            ))}
            <div className="col-span-12">

            <button
              type="button"
              className="bg-green-500 w-[200px] text-white bg-green rounded-md p-1"
              onClick={() =>
                push({
                  type: "",
                  status: "",
                  name_ar: "",
                  name_en: "",
                  custom_field_data: [{ status: "", name_ar: "" ,name_en:""  }],
                })
              }
            >
              {t("Add custom Field")}
            </button>
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
}

export default AddCustomField;
