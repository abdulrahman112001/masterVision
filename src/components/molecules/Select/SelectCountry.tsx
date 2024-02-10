import { t } from "i18next";
import { useFetch } from "../../../hooks";
import { Select } from "..";
import { useFormikContext } from "formik";
import { OptionType } from "../../../utils/helpers";

type SelectCountry_tp = {
  name: string;
  label?: string;
  placeholder?: string;
};
export default function SelectCountry({ name, label }: SelectCountry_tp) {
  const { data, isLoading, failureReason } = useFetch<any>({
    queryKey: ["countries"],
    endpoint: `countries?prePage=-1`,
  });
  console.log("🚀 ~ data:", data);
  const { values, setFieldValue } = useFormikContext<any>();

  const dataOptions = data?.data?.data?.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));
  const selectedCountry = dataOptions?.find(
    (option: OptionType) => option?.value == values[name]
  );
  return (
    <div>
      <Select
        placeholder={`${t("choose country")}`}
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
