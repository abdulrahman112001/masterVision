import * as Yup from "yup";
import { requiredTranslation } from "../../../../utils/helpers";

export type AllActivityTable_TP = {
  name_en?: string;
  name_ar?: string;
  id?: string;
  email:string
  event:string
  new:{
    email:string
  }
  old:{
    email:string
    name:string
  }

};
export type initialValue_Tp = {
  name_en?: string;
  name_ar?: string;
  id?: string;
  status: number;
  city_id:string
 
};
export type AllActivityAPI_TP = {
  data: {
    data: AllActivityTable_TP[];
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
    city_id: Yup.string().trim().required(requiredTranslation),


  });
