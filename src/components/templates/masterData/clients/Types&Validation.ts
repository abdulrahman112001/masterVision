import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type AllClientsTable_TP = {
  name?: string;
  email?: string;
  id?: string;
  status: number;
};
export type initialValue_Tp = {
  id?: string;
  name: string;
  email: string;
  status: number;
  password?: string | null;
  additional_data: [
    key_ar: string,
    key_en: string,
    value_ar: string,
    value_en: string
  ];
};
export type AllClientsAPI_TP = {
  data: {
    data: AllClientsTable_TP[];
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
