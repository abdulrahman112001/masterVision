import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type AllCitiesTable_TP = {
  name_en?: string;
  name_ar?: string;

  id?: string;
  status: number;
  image: [];
};
export type initialValue_Tp = {
  id?: string;
  country_id:string
  name_ar: string;
  name_en: string;

  status: number;
  image: [];
};
export type AllCitiesAPI_TP = {
  data: {
    data: AllCitiesTable_TP[];
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
