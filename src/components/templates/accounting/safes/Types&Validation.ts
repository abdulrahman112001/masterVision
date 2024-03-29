import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type Table_TP = {
  id?: string;
  name_ar?: string;
  name_en?: string;
  payment_type: string;
  status: number;
};
export type initialValue_Tp = {
  id?: string;
  name_ar: string;
  name_en: string;
  account_number:string
  payment_type?: string;
  currency_id: {
    id: string;
  };
  chart_account_expense_id: {
    id: string;
  };
  chart_account_origin_id: {
    id: string;
  };
  status: number;
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
