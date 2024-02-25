import React from "react";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { useFormikContext } from "formik";
import { Label } from "../../atoms";
import { format, parse, isValid } from "date-fns";

type DateInputMantine_TP = {
  name: string;
  label: string;
};

function DateInputMantine({ name, label }: DateInputMantine_TP) {
  const { values, setFieldValue } = useFormikContext<any>();
  console.log("🚀 ~ DateInputMantine ~ values:", values)

  const handleDateChange = (date: Date | null) => {
    const formattedDate = date ? format(date, "dd-MM-yyyy") : "";
    setFieldValue(name, formattedDate);
  };

  // Helper function to safely parse date strings
  const safeParseDate = (dateStr: string) => {
    console.log("🚀 ~ safeParseDate ~ dateStr:", dateStr);
    if (!dateStr) return null;
    const parsedDate = parse(dateStr, "dd-MM-yyyy", new Date());
    console.log("🚀 ~ safeParseDate ~ parsedDate:", parsedDate);
    return isValid(parsedDate) ? parsedDate : null; // Use isValid from date-fns to check
  };

  return (
    <div>
      <div className="text-right">
        <Label htmlFor="" className="mb-3 text-sm">
          {label}
        </Label>
      </div>

      <DateInput
        value={safeParseDate(values[name])}
        onChange={handleDateChange}
        placeholder="Date input"
        name={name}
        valueFormat="DD/MM/YYYY"
        clearable
      />
    </div>
  );
}

export default DateInputMantine;
