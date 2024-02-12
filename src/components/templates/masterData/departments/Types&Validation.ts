import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type AllDepartmentsTable_TP = {
  name_en?: string;
  name_ar?: string;
  id?: string;
  status: number;
};
export type initialValue_Tp = {
  name_en?: string;
  name_ar?: string;
  id?: string;
  status: number;
};
export type AllDepartmentsAPI_TP = {
  data: {
    data: AllDepartmentsTable_TP[];
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
