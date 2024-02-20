import { useFormikContext } from "formik";
import { t } from "i18next";
import { Select } from "..";
import { useFetch } from "../../../hooks";
type SelectRole_tp = {
  onChange?: (option: any) => void;
  name: string;
  label?: string;
  placeholder?: string;
};
export default function SelectRole({
  onChange,
  name,
  placeholder,
  label,
}: SelectRole_tp) {
  const {
    data,
    isLoading: StatusLoading,
    failureReason,
  } = useFetch<any>({
    queryKey: ["master-data/roles"],
    endpoint: "master-data/roles?active=1",
    onSuccess(data) {},
  });
  console.log("🚀 ~ data:", data);
  const { values } = useFormikContext<any>();
  const initialFormattedOptions = values[name]?.map((id: any) => {
    const option = data?.data?.data?.find((option: any) => option.id === id);
    return { value: option?.id, label: option?.name };
  });

  const dataOptions = data?.data?.data?.map((state: any) => ({
    value: state.id,
    label: state.name,
  }));

  const selectedOptions = dataOptions?.filter((option: any) =>
    initialFormattedOptions?.some(
      (initialOption: any) => initialOption.value === option.value
    )
  );

  return (
    <div className="text-start">
      <Select
        placeholder={placeholder}
        label={label}
        id="optionStatus"
        name={name}
        isDisabled={!StatusLoading && !!failureReason}
        loadingPlaceholder={`${t("loading")}`}
        loading={StatusLoading}
        options={dataOptions}
        onChange={onChange}
        value={selectedOptions}
        isMulti
      />
    </div>
  );
}
