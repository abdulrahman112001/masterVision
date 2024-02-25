import { Form, Formik } from "formik";
import { t } from "i18next";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { HandleBackErrors } from "../../../../utils/utils-components/HandleBackErrors";
import { Button } from "../../../atoms";
import { OuterFormLayout } from "../../../molecules";
import {
  AllEmployeesTable_TP,
  initialValue_Tp,
  validationSchema,
} from "./Types&Validation";
import EmployeesFormMainData from "./EmployeesFormMainData";

type AddEmployees_TP = {
  refetch: () => void;
  update: any;
  data: any;
};
function AddEmployees({ refetch, update }: AddEmployees_TP) {
  console.log("🚀 ~ AddEmployees ~ update:", update)
  const initialValues: initialValue_Tp = {
    name: update?.name || "",
    email: update?.email || "",
    password: update?.password || "",
    password_confirmation: update?.password_confirmation || "",
    department_id: update?.department || "",
    branch_id: update?.branch_id || "",
    role_id: update?.role?.length
      ? update?.role?.map((item: { id: string }) => item?.id)
      : [],
    status: update?.status ? +update?.status : 1,
    mobiles: [
      {
        item: "",
        main: "",
      },
    ],
    addresses: [
      {
        item: "",
        main: "",
      },
    ],
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["master-data/employees"],
    endpoint: `master-data/employees`,
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
    mutationKey: ["master-data/employees"],
    endpoint: `master-data/employees/${update?.id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values: AllEmployeesTable_TP) => {
    if (Object.entries(update).length) {
      PostUpdate({ ...values, _method: "PUT" });
    } else {
      mutate({ ...values });
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
              <EmployeesFormMainData update={update} />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
          
    </>
  );
}

export default AddEmployees;
