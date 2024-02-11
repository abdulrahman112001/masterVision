import { useFormikContext } from "formik";
import { BaseInput, FormikError, Label } from "../../atoms";
import UploadImg from "../UploadImg";
import { TextAreaField } from "./TextAreaField";
import { useState } from "react";

export const BaseInputField = ({
  label,
  id,
  required,
  labelProps,
  setImgUpload,
  valueTextArear,
  labelStyle,
  Style,
  placeholder,
  type = "text",
  onChange,
  name,
  value,
  ...props
}: {
  label?: string;
  id: string;
  setImgUpload?: any;
  valueTextArear?: any;
  required?: boolean;
  labelStyle?: string;
  Style?: string;
  labelProps?: {
    [key: string]: any;
  };
  name: string;
  onChange0?: (e: React.ChangeEvent) => void;
  type: "text" | "number" | "password" | "email" | "file" | "textarea";
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
  useFormikContext<{
    [key: string]: any;
  }>();
  const [typePass, setTypePass] = useState("password");
  const changeable = () => {
    typePass === "password" ? setTypePass("text") : setTypePass("password");
  };

  return (
    <>
      <div
        className={`text-right ${
          type == "file" ? "!col-span-2 text-center" : ""
        } ${Style}`}
      >
        {label && (
          <Label
            htmlFor={id}
            {...labelProps}
            required={required}
            className={`mb-3 text-sm ${labelStyle}`}
          >
            {label}
          </Label>
        )}
        <div>
          {type == "file" ? (
            <div className="col-span-2">
              <UploadImg name={props?.name} />
            </div>
          ) : type == "textarea" ? (
            <div className="col-span-1 ">
              <TextAreaField
                //@ts-ignore
                label={props?.label}
                name={props?.name}
                //@ts-ignore

                placeholder={placeholder}
                id={id}
                //value={props.value || values[props.name]}
              />
            </div>
          ) : (
            <div className="col-span-1 mt-[2px]">
              <BaseInput
                type={type === "password" ? typePass : type}
                id={id}
                {...props}
                // value={fieldValue}
                value={values[name]}
                error={touched[name] && !!errors[name]}
                autoComplete="off"
                onBlur={() => {
                  setFieldTouched(name, true);
                }}
                placeholder={placeholder}
                onChange={(e) => {
                  setFieldValue(name, e.target.value);
                }}
              />
            </div>
          )}
          <FormikError name={name} />
        </div>
      </div>
    </>
  );
};
