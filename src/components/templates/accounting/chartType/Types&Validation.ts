import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type AllChartsTable_TP = {
  id?: string;
  name_ar?: string;
  name_en?: string;
  status: number;
  email: string;
};
export type initialValue_Tp = {
  id?: string;
  name_ar: string;
  name_en: string;
  class_id?: string ;
  status: number;

};
export type AllChartsAPI_TP = {
  data: {
    data: AllChartsTable_TP[];
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
