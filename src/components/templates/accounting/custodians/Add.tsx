import { Form, Formik } from "formik";
import { t } from "i18next";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { HandleBackErrors } from "../../../../utils/utils-components/HandleBackErrors";
import { Button } from "../../../atoms";
import { OuterFormLayout } from "../../../molecules";
import MainData from "./MainData";
import { Table_TP, initialValue_Tp } from "./Types&Validation";
import { convertToDynamicShape } from "../../../../utils/helpers";

type Add_TP = {
  refetch: () => void;
  update: any;
  data: any;
};
function Add({ refetch, update }: Add_TP) {
  const initialValues: initialValue_Tp = {
    name_ar: update?.name_ar || "",
    name_en: update?.name_en || "",
    description: update?.description || "",
    account_id: update?.account_id || "",
    additional_data: update?.additional_data || [
      { key_ar: "", key_en: "", value_ar: "", value_en: "" }, // Default structure for one item
    ],
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["accounting/custodians"],
    endpoint: `accounting/custodians`,
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
    mutationKey: ["accounting/custodians"],
    endpoint: `accounting/custodians/${update?.id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values: Table_TP) => {
    const transformedData = convertToDynamicShape(values?.additional_data);
    let finalOutput = {
      "name[ar]": values.name_ar,
      "name[en]": values.name_en,
      ...values,
      additional_data: {
        ...transformedData,
      },
    };
    const valuesToSubmit = { ...values };
    delete valuesToSubmit.name_ar;
    delete valuesToSubmit.name_en;
    const submissionData = { ...valuesToSubmit, ...finalOutput };
    if (Object.entries(update).length) {
      PostUpdate({ ...submissionData, _method: "PUT" });
    } else {
      mutate(submissionData);
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
              <MainData update={update} />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
          
    </>
  );
}

export default Add;
