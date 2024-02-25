import React from "react";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { useFormikContext } from "formik";

function DateInputMantine({ name , label }: any) {
  const { values, setFieldValue } = useFormikContext<any>();
  console.log("🚀 ~ DateInputMantine ~ values:", values)
  return (
    <div>
      {" "}
      <DateInput
        // value={new Date(values[name]) || null}
        onChange={(Date) => setFieldValue(name, Date)}
        label={label}
        placeholder="Date input"
        clearable 
      />
    </div>
  );
}

export default DateInputMantine;
