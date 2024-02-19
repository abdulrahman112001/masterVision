import { Form, Formik } from "formik";
import { t } from "i18next";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { HandleBackErrors } from "../../../../utils/utils-components/HandleBackErrors";
import { Button } from "../../../atoms";
import { OuterFormLayout } from "../../../molecules";
import {
  AllBranchesTable_TP,
  initialValue_Tp,
  validationSchema,
} from "./Types&Validation";
import BranchesFormMainData from "./BranchesFormMainData";

type AAddBranch_TP = {
  refetch: () => void;
  update: any;
  data: any;
};
function AddBranch({ refetch, update }: AAddBranch_TP) {
  console.log("🚀 ~ AddBranch ~ update:", update);
  const initialValues: initialValue_Tp = {
    name_ar: update?.name_ar || "",
    name_en: update?.name_en || "",
    email: update?.email || "",
    mobile: update?.mobile || "",
    area_id: update?.area_id || "",
    status: update?.status ? +update?.status : 1,
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["master-data/branches"],
    endpoint: `master-data/branches`,
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
    mutationKey: ["master-data/branches"],
    endpoint: `master-data/branches/${update?.id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values: AllBranchesTable_TP) => {
    const finalOutput = {
      "name[ar]": values.name_ar,
      "name[en]": values.name_en,
      user_type: "our_branch",
      item_id: "1",
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
        validationSchema={validationSchema}
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
              <BranchesFormMainData update={update} />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
          
    </>
  );
}

export default AddBranch;
