import { Form, Formik } from "formik";
import { t } from "i18next";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { HandleBackErrors } from "../../../../utils/utils-components/HandleBackErrors";
import { Button } from "../../../atoms";
import { OuterFormLayout } from "../../../molecules";
import AdminsFormMainData from "./AdminsFormMainData";
import { AllAdminsTable_TP, initialValue_Tp } from "./Types&Validation";

type AddAdmin_TP = {
  refetch: () => void;
  update: any;
  data: any;
};
function AddAdmin({ refetch, update }: AddAdmin_TP) {
  console.log("🚀 ~ AddAdmin ~ update:", update)
  const initialValues: initialValue_Tp = {
    status: +update?.status || 1,
    name: update?.name || "",
    email: update?.email || "",
    password: update ? null : "",
    password_confirmation: update ? null : "",
    role_id: update.role.length ? update.role.map((item:{id:string})=>item.id) : [],
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["master-data/users"],
    endpoint: `master-data/users`,
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
    mutationKey: ["master-data/users"],
    endpoint: `master-data/users/${update?.id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values: AllAdminsTable_TP) => {


    if (Object.entries(update).length) {
      PostUpdate({ ...values, _method: "PUT" });
    } else {
      mutate({...values});
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
              <AdminsFormMainData update={update} />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
          
    </>
  );
}

export default AddAdmin;
