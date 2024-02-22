import { Form, Formik } from "formik";
import { t } from "i18next";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { HandleBackErrors } from "../../../../utils/utils-components/HandleBackErrors";
import { Button } from "../../../atoms";
import { OuterFormLayout } from "../../../molecules";
import SupplierFormMainData from "./SupplierFormMainData";
import { AllRolesTable_TP, initialValue_Tp } from "./Types&Validation";

type AddSupplier_TP = {
  refetch: () => void;
  update: any;
  data: any;
};
function AddSupplier({ refetch, update }: AddSupplier_TP) {
  const initialValues: initialValue_Tp = {
    status: +update?.status || 1,
    name: update?.name || "",
    additional_data: update?.additional_data || [
      { key_ar: "", key_en: "", value_ar: "", value_en: "", is_default: 0 },
    ],
  };
  const { mutate, isLoading } = useMutate({
    mutationKey: ["master-data/suppliers"],
    endpoint: `master-data/suppliers`,
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
    mutationKey: ["master-data/suppliers"],
    endpoint: `master-data/suppliers/${update?.id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values: AllRolesTable_TP) => {
    const additionalData = values?.additional_data?.map((item) => ({
      key: {
        ar: item.key_ar,
        en: item.key_en,
      },
      value: {
        ar: item.value_ar,
        en: item.value_en,
      },
      ...item,
    }));
    const finalOut = { additional_data: additionalData };

    if (Object.entries(update).length) {
      PostUpdate({ ...values, ...finalOut, _method: "PUT" });
    } else {
      mutate({ ...values, ...finalOut });
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
              <SupplierFormMainData update={update} />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
          
    </>
  );
}

export default AddSupplier;
