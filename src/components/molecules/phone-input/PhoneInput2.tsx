import { useFormikContext } from "formik";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormikError, Label } from "../../atoms";
import { CountryPhoneCodes } from "../../../../public/countries/country-phone-code";
// import { formatPhoneNumber } from "../../../utils/helpers";

const PhoneInput2 = ({ name, label }: any) => {
  const { setFieldValue, handleBlur, values } = useFormikContext<any>();
  console.log("🚀 ~ PhoneInput2 ~ values:", values);

  const formatPhoneNumber = (phoneCode: string, phone: string): string => {
    const dial_code =
      CountryPhoneCodes.find(
        (country) => phoneCode?.toLowerCase() == country.code.toLowerCase()
      )?.dial_code || "";
    return `${dial_code}${phone}`;
  };
  
  const [phone, setPhone] = useState(formatPhoneNumber(values?.phone_country, values.phone) || "");

  const handlePhoneChange = (value: any, selectedCountry: any) => {
    const phone = +value
      .slice(selectedCountry?.dialCode?.length)
      .trim()
      .split(" ")
      .join("");
    setFieldValue("phone", phone);
    setPhone(value);
    setFieldValue("phone_country", selectedCountry?.countryCode?.toUpperCase());
  };

  

  return (
    <div className="col-span-1">
      <div className="flex flex-col gap-1 ">
        <Label htmlFor={name} className="mb-3">
          {label}
        </Label>

        <PhoneInput
          country={ "eg"}
          // value={phone || ""}
          value={phone || ""}
          onChange={handlePhoneChange}
          enableSearch
          onBlur={handleBlur}
          // className={
          //   "dark:bg-dark-tertiary " +
          //   {
          //     error: touched[name] && !!errors.phone,
          //   }
          // }
        />
      </div>
      <FormikError name={name} />
    </div>
  );
};

export default PhoneInput2;
