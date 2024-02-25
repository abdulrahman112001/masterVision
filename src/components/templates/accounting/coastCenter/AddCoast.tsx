import { Form, Formik } from "formik";
import { t } from "i18next";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { HandleBackErrors } from "../../../../utils/utils-components/HandleBackErrors";
import { Button } from "../../../atoms";
import { OuterFormLayout } from "../../../molecules";
import AdminsFormMainData from "./CoastsFormMainData";
import { AllCoastsTable_TP, initialValue_Tp } from "./Types&Validation";
import CoastsFormMainData from "./CoastsFormMainData";

type AddCoast_TP = {
  refetch: () => void;
  update: any;
  data: any;
};
function AddCoast({ refetch, update }: AddCoast_TP) {
  const initialValues: initialValue_Tp = {
    name_ar: update?.name_ar || "",
    name_en: update?.name_en || "",
    description: update?.description || "",
    status: +update?.status || 1,
    start_date: update?.start_date || new Date(),
    due_date: update?.due_date || new Date(),
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["accounting/costcenter"],
    endpoint: `accounting/costcenter`,
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
    mutationKey: ["accounting/costcenter"],
    endpoint: `accounting/costcenter/${update?.id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values: AllCoastsTable_TP) => {
    const finalOutput = {
      "name[ar]": values.name_ar,
      "name[en]": values.name_en,
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
              <CoastsFormMainData update={update} />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
          
    </>
  );
}

export default AddCoast;
