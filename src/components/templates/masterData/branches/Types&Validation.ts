import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type AllBranchesTable_TP = {
  name_en?: string;
  name_ar?: string;
  id?: string;
  status: number;
  city_id: string;
};
export type initialValue_Tp = {
  name_en?: string;
  name_ar?: string;
  email: string;
  id?: string;
  status: number;
  mobile: string;
  area_id: string;
};
export type AllAreasAPI_TP = {
  data: {
    data: AllBranchesTable_TP[];
    total: number;
    currentPage: number;
    lastPage: number;
  };
};
export const validationSchema = () =>
  Yup.object({
    name_ar: Yup.string().trim().required(requiredTranslation),
    name_en: Yup.string().trim().required(requiredTranslation),
    email: Yup.string().trim().required(requiredTranslation),
    mobile: Yup.string().trim().required(requiredTranslation),
  });
