import { t } from "i18next";
import { useFetch, useIsRTL } from "../../../hooks";
import { Select } from "..";
import { useFormikContext } from "formik";
import { OptionType } from "../../../utils/helpers";

type SelectCostCenter_tp = {
  name: string;
  label?: string;
  placeholder?: string;
};
export default function SelectCostCenter({ name, label }: SelectCostCenter_tp) {
  const isRTL = useIsRTL();
  const { data, isLoading, failureReason } = useFetch<any>({
    queryKey: ["accounting/costcenter"],
    endpoint: `accounting/costcenter?prePage=-1`,
  });
  const { values, setFieldValue } = useFormikContext<any>();

  const dataOptions = data?.data?.data?.map((item: any) => ({
    value: item.id,
    label: isRTL ? item.name_ar : item.name_en,
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
