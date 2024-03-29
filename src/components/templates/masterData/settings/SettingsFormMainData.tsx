import { useFormikContext } from "formik";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { Button, Label } from "../../../atoms";
import { InnerFormLayout } from "../../../molecules";
import { DropFile } from "../../../molecules/files/DropFile";
import BaseInputRepeater from "../../../molecules/formik-fields/BaseInputRepeater";
import DateInput2 from "../../../molecules/formik-fields/DateInput2";
import { AllRolesTable_TP } from "../Roles/Types&Validation";
import { formatDate } from "../../../../utils/date";
import { DateInput } from "@mantine/dates";
import DateInputMantine from "../../../molecules/formik-fields/DateInputMantine";

function SettingsFormMainData(data: any) {
  const [idInput, setIdInput] = useState("");
  const { setFieldValue, values, initialValues } =
    useFormikContext<AllRolesTable_TP>();
  console.log("🚀 ~ SettingsFormMainData ~ values:", values);
  const [loadingButtonId, setLoadingButtonId] = useState<string | null>(null);
  const { mutate: PostUpdate, isLoading: updateLoading } = useMutate({
    mutationKey: [`master-data/settings/${idInput}`],
    endpoint: `master-data/settings/${idInput}`,
    onSuccess: () => {
      // refetch();
      notify("success");
      setLoadingButtonId(null);
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
      setLoadingButtonId(null);
    },
    formData: true,
  });
  return (
    <div>
      <InnerFormLayout
        customStyle="Form-inside-Container"
        showpopuptitle={true}
        scroll={true}
      >
        <div className="w-11/12 sm:flex flex-col md:grid grid-cols-1  gap-1 my-4">
          {data?.data?.data?.data?.map(
            (item: { id: string; value: string; key: string; type: string }) =>
              item.type == "text" ? (
                <div className="grid grid-cols-12 items-center  w-full ">
                  <div className="col-span-11">
                    <BaseInputRepeater
                      id={item?.id}
                      value={values[item?.id]}
                      label={item?.key}
                      name={item?.id}
                      type={"text"}
                      placeholder={item?.key}
                      required
                      onChange={(e) => {
                        console.log(
                          "item?.id, e.target.value===>",
                          item?.id,
                          e.target
                        );
                        setFieldValue(item?.id, e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex items-center mt-8 mx-1">
                    <Button
                      className="py-3"
                      loading={loadingButtonId === item.id}
                      action={() => {
                        setLoadingButtonId(item.id);

                        setIdInput(item?.id);
                        const formData = new FormData();
                        formData.append("value", values[item.id]);
                        formData.append("_method", "PUT");
                        PostUpdate(formData);
                      }}
                    >
                      {loadingButtonId !== item.id && <FaCheck />}
                    </Button>
                  </div>
                </div>
              ) : item.type == "file" ? (
                <div className="grid grid-cols-12 items-center  w-full ">
                  <div className="col-span-11">
                    <Label htmlFor="">{item?.key}</Label>
                    <DropFile name={`${item?.id}`} />
                  </div>
                  <div className="flex items-center mt-8 mx-1">
                    <Button
                      className="py-3"
                      loading={loadingButtonId === item.id}
                      action={() => {
                        setLoadingButtonId(item.id);
                        setIdInput(item?.id);
                        const formData = new FormData();
                        formData.append("value", values[item.id]);
                        formData.append("_method", "PUT");
                        PostUpdate(formData);
                      }}
                    >
                      {loadingButtonId !== item.id && <FaCheck />}
                    </Button>
                  </div>
                </div>
              ) : item.type == "date" ? (
                <div className="grid grid-cols-12 items-center  w-full ">
                  <div className="col-span-11">
                    <DateInputMantine name={item?.id} label={item?.key} />
                  </div>
                  <div className="flex items-center mt-7 mx-1">
                    <Button
                      className="py-3"
                      loading={loadingButtonId === item.id}
                      action={() => {
                        setLoadingButtonId(item.id);
                        setIdInput(item?.id);
                        const finalOut = {
                          value: (values[item.id]),
                          _method: "PUT",
                        };
                        PostUpdate(finalOut);
                      }}
                    >
                      {loadingButtonId !== item.id && <FaCheck />}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-12 items-center  w-full ">
                  <div className="col-span-11">
                    <BaseInputRepeater
                      type="text"
                      id={item?.id}
                      value={values[item?.id]}
                      label={item?.key}
                      name={item?.id}
                      placeholder={item?.key}
                      onChange={(e) => setFieldValue(item?.id, e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-center mt-8 mx-1">
                    <Button
                      className="py-3"
                      loading={loadingButtonId === item.id}
                      action={() => {
                        setLoadingButtonId(item.id);
                        setIdInput(item?.id);
                        const formData = new FormData();
                        formData.append("value", values[item.id]);
                        formData.append("_method", "PUT");
                        PostUpdate(formData);
                      }}
                    >
                      {loadingButtonId !== item.id && <FaCheck />}
                    </Button>
                  </div>
                </div>
              )
          )}
        </div>
      </InnerFormLayout>
    </div>
  );
}

export default SettingsFormMainData;
