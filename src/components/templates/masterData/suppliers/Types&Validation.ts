import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type AllRolesTable_TP = {
  id?: string;
  name: string;
  status: number;
  additional_data: [
    { key_ar: string; key_en: string; value_ar: string; value_en: string } 
  ];
};
export type initialValue_Tp = {
  id?: string;
  status: number;
  name: string;
  additional_data: [
    { key_ar: string; key_en: string; value_ar: string; value_en: string } 
  ];
};
export type AllRolesAPI_TP = {
  data: {
    data: AllRolesTable_TP[];
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
