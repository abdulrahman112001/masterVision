import { Form, Formik } from "formik";
import { t } from "i18next";
import { useMutate } from "../../../../hooks";
import { convertToDynamicShape } from "../../../../utils/helpers";
import { notify } from "../../../../utils/toast";
import { HandleBackErrors } from "../../../../utils/utils-components/HandleBackErrors";
import { Button } from "../../../atoms";
import { OuterFormLayout } from "../../../molecules";
import ClientsFormMainData from "./ClientsFormMainData";
import { AllClientsTable_TP, initialValue_Tp } from "./Types&Validation";

type AddClients_TP = {
  refetch: () => void;
  update: any;
  data: any;
};
function AddClients({ refetch, update }: AddClients_TP) {
  console.log("🚀 ~ AddClients ~ update:", update);
  const initialValues: initialValue_Tp = {
    status: +update?.status || 1,
    name: update?.name || "",
    email: update?.email || "",
    password: update ? null : "",
    additional_data: update?.additional_data || [
      { key_ar: "", key_en: "", value_ar: "", value_en: "" }, // Default structure for one item
    ],
    custom_fields: [
      {
        type: "",
        status: "",
        name_ar: "",
        name_en: "",
        custom_field_data: [{ status: "", value_ar: "", value_en: "" }],
      },
    ],
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["master-data/clients"],
    endpoint: `master-data/clients`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });
  const { mutate: PostUpdate, isLoading: updateLoading } = useMutate({
    mutationKey: ["master-data/clients"],
    endpoint: `master-data/clients/${update?.id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values: initialValue_Tp) => {
    const transformedData = convertToDynamicShape(values?.additional_data);
    const customFields = values.custom_fields.map((item) => ({
      "name[ar]": item?.name_ar,
      "name[en]": item?.name_en,
      custom_field_data: item?.custom_field_data?.map(
        (subItem: {
          name_ar: any;
          name_en: any;
          value_ar: any;
          value_en: any;
        }) => ({
          key: {
            ar: subItem.name_ar,
            en: subItem.name_en,
          },
          value: {
            ar: subItem.value_ar,
            en: subItem.value_en,
          },
          ...subItem,
        })
      ),

      ...item,
    }));
    console.log("🚀 ~ customFields ~ customFields:", customFields);

    const finalOutput = {
      ...values,
      type: "individual",
      additional_data: {
        ...transformedData,
      },
      customFields: {
        ...customFields,
      },
    };
    console.log("🚀 ~ handleSubmit ~ finalOutput:", finalOutput);
    const updateValue = {
      ...finalOutput,
      _method: "PUT",
    };

    if (Object.entries(update).length) {
      PostUpdate(updateValue);
    } else {
      mutate(finalOutput);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={(values: any) => handleSubmit(values)}
      >
        <Form>
          <HandleBackErrors>
            <OuterFormLayout
              header={""}
              submitComponent={
                <Button
                  type="submit"
                  className="mr-auto mx-5 mt-8"
                  loading={isLoading || updateLoading}
                >
                  {t("submit")}
                </Button>
              }
            >
              <ClientsFormMainData update={update} />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
          
    </>
  );
}

export default AddClients;
