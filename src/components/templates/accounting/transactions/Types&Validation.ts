import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type Table_TP = {
  id?: string;
  name_ar?: string;
  name_en?: string;
  type:number
  status: number;
};
export type initialValue_Tp = {
  id?: string;
  reference: string;
  notes: string;
  amount: string;
  chart_account_id: string;
  currency_id: string;
  cost_center_id: number;
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
