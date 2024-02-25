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
import { convertToDynamicShape } from "../../../../utils/helpers";

type AddEmployees_TP = {
  refetch: () => void;
  update: any;
  data: any;
};
function AddEmployees({ refetch, update }: AddEmployees_TP) {
  const initialValues: initialValue_Tp = {
    name: update?.name || "",
    email: update?.email || "",
    password: update ? null : "",
    password_confirmation: "",
    department_id: update?.department || "",
    branch_id: update?.branch || "",
    role_id: update?.role?.length
      ? update?.role?.map((item: { id: string }) => item?.id)
      : [],
    status: update?.status ? +update?.status : 1,
    additional_data: update?.additional_data || [
      { key_ar: "", key_en: "", value_ar: "", value_en: "" }, // Default structure for one item
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

  const handleSubmit = (values: initialValue_Tp) => {
    const transformedData = convertToDynamicShape(values?.additional_data);
    let finalOutput = {
      ...values,
      type: "individual",
      additional_data: {
        ...transformedData,
      },
    };
    if (values.password && values.password.trim() !== "") {
      finalOutput = { ...finalOutput, password: values.password };
    } else {
      delete finalOutput.password;
    }
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
              <EmployeesFormMainData update={update} />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
          
    </>
  );
}

export default AddEmployees;
