import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type AllEmployeesTable_TP = {
  name_en?: string;
  name_ar?: string;
  id?: string;
  status: number;
};
export type initialValue_Tp = {
  name: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
  department_id?: string;
  branch_id?: string;
  role_id?: string[];
  additional_data: [
    key_ar: string,
    key_en: string,
    value_ar: string,
    value_en: string
  ];

  id?: string;
  status: number;
};
export type AllEmployeesAPI_TP = {
  data: {
    data: AllEmployeesTable_TP[];
    total: number;
    currentPage: number;
    lastPage: number;
  };
};
export const validationSchema = () =>
  Yup.object({
    name_ar: Yup.string().trim().required(requiredTranslation),
    name_en: Yup.string().trim().required(requiredTranslation),
    status: Yup.string().trim().required(requiredTranslation),
  });
