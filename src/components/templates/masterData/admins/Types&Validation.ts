import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type AllAdminsTable_TP = {
  id?: string;
  name: string;
  status: number;
  email: string;
};
export type initialValue_Tp = {
  id?: string;
  name: string;
  email: string;
  password?: string | null;
  password_confirmation?: string | null;
  status: number;
  role_ids: string[];
};
export type AllAdminsAPI_TP = {
  data: {
    data: AllAdminsTable_TP[];
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
