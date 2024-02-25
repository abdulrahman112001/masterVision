import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type AllCoastsTable_TP = {
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
  description?: string | null;
  status: number;
  start_date:Date
  due_date:Date
};
export type AllCoastsAPI_TP = {
  data: {
    data: AllCoastsTable_TP[];
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
