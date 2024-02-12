import { Form, Formik } from "formik";
import { t } from "i18next";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { HandleBackErrors } from "../../../../utils/utils-components/HandleBackErrors";
import { Button } from "../../../atoms";
import { OuterFormLayout } from "../../../molecules";
import {
  AllCitiesTable_TP,
  initialValue_Tp,
  validationSchema,
} from "./Types&Validation";
import CitiesFormMainData from "./CitiesFormMainData";

type AddCity_TP = {
  refetch: () => void;
  update: any;
  data: any;
};
function AddCity({ refetch, update }: AddCity_TP) {
  console.log("🚀 ~ AddCity ~ update:", update)
  const initialValues: initialValue_Tp = {
    image: [],
    status: +update?.status || 1,
    name_ar: update?.name_ar || "",
    name_en: update?.name_en || "",
    country_id:update?.country_id ||""
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["master-data/cities"],
    endpoint: `master-data/cities`,
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
    mutationKey: ["master-data/cities"],
    endpoint: `master-data/cities/${update?.id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values: AllCitiesTable_TP) => {
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
              <CitiesFormMainData update={update} />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
          
    </>
  );
}

export default AddCity;
