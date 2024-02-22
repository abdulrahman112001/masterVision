import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type AllSettingTable_TP = {
  id?: string;
  name: string;
  status: number;
  name_ar?: string;
  name_en?: string;
};
export type initialValue_Tp = {
  id?: string;
  name: string;
  name_ar: string;
  name_en: string;
  password?: string | null;
  password_confirmation?: string | null;
  status: number;
  permission_ids: string[];
};
export type AllSettingAPI_TP = {
  data: {
    data: AllSettingTable_TP[];
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
