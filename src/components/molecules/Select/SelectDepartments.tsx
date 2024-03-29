import { t } from "i18next";
import { useFetch } from "../../../hooks";
import { Select } from "..";
import { useFormikContext } from "formik";
import { OptionType } from "../../../utils/helpers";

type SelectDepartments_tp = {
  name: string;
  label?: string;
  placeholder?: string;
};
export default function SelectDepartments({
  name,
  label,
}: SelectDepartments_tp) {
  const { data, isLoading, failureReason } = useFetch<any>({
    queryKey: ["master-data/departments"],
    endpoint: `master-data/departments?prePage=-1`,
  });
  console.log("🚀 ~ data:", data);
  const { values, setFieldValue } = useFormikContext<any>();

  const dataOptions = data?.data?.data?.map((item: any) => ({
    value: item.id,
    label: item.name_ar,
  }));
  const selectedCountry = dataOptions?.find(
    (option: OptionType) => option?.value == values[name]
  );
  return (
    /*     <div className="w-11/12 text-right mt-6">
     */ <div className="text-right text-xs">
      <Select
        placeholder={`${t("choose")}`}
        label={label}
        id="optionStatus"
        name={name}
        value={selectedCountry}
        isDisabled={!isLoading && !!failureReason}
        loadingPlaceholder={`${t("loading")}`}
        loading={isLoading}
        options={dataOptions}
        onChange={(option: OptionType) => setFieldValue(name, option?.value)}
      />
    </div>
  );
}
