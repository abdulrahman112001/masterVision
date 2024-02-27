import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type Table_TP = {
  id?: string;
  name_ar?: string;
  name_en?: string;
  account_name:string
  additional_data: [
    key_ar: string,
    key_en: string,
    value_ar: string,
    value_en: string
  ];
};
export type initialValue_Tp = {
  id?: string;
  name_ar: string;
  name_en: string;
  account_id:string
  description:string
  additional_data: [
    key_ar: string,
    key_en: string,
    value_ar: string,
    value_en: string
  ];
};
export type API_TP = {
  data: {
    data: Table_TP[];
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
