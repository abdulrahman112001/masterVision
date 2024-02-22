import { Form, Formik } from "formik";
import { useFetch } from "../../../../hooks";
import SettingsFormMainData from "./SettingsFormMainData";
import {
  AllSettingAPI_TP,
  AllSettingTable_TP,
  initialValue_Tp,
} from "./Types&Validation";
import { HandleBackErrors } from "../../../../utils/utils-components/HandleBackErrors";
import { OuterFormLayout } from "../../../molecules";
import { Button } from "../../../atoms";
import { t } from "i18next";
import { useState } from "react";

function MainSettings() {
  const [initialValues, setInitialValues] = useState({});
  const endpoint = `master-data/settings`;
  const { data } = useFetch<AllSettingAPI_TP>({
    endpoint: endpoint,
    queryKey: [endpoint],
    onSuccess: (data) => {
      const formattedInitialValues = data.data.data.reduce(
        (
          acc: { [x: string]: any },
          item: { id: string | number; value: any }
        ) => {
          acc[item.id] = item.value;
          return acc;
        },
        {}
      );
      setInitialValues(formattedInitialValues);
    },
  });

  const handleSubmit = (values: AllSettingTable_TP) => {
    const finalOutput = {
      "name[ar]": values.name_ar,
      "name[en]": values.name_en,
    };
    const valuesToSubmit = { ...values };
    delete valuesToSubmit.name_ar;
    delete valuesToSubmit.name_en;
    const submissionData = { ...valuesToSubmit, ...finalOutput };
    // PostUpdate({ ...submissionData, _method: "PUT" });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={(values: any) => handleSubmit(values)}
      >
        <Form>
          <HandleBackErrors>
            <OuterFormLayout
              header={""}
              // submitComponent={
              //   <Button
              //     type="submit"
              //     className="mr-auto mx-5 mt-8"
              //     // loading={isLoading }
              //   >
              //     {t("submit")}
              //   </Button>
              // }
            >
              <SettingsFormMainData data={data} />
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
    </div>
  );
}

export default MainSettings;
