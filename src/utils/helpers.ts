import { t } from "i18next";
import { CFile_TP } from "../types";
import type { GroupBase, OptionsOrGroups } from "react-select";
import { Dispatch, SetStateAction } from "react";
import { CountryPhoneCodes } from "../../public/countries/country-phone-code";

//  PDF OR IMAGE
type pdfOrImageReturn = "pdf" | "image" | "unknown";
export const pdfOrImage = (file: CFile_TP): pdfOrImageReturn => {
  const pdfWordOccurrence = file?.type?.indexOf("pdf");
  const imageWordOccurrence = file?.type?.indexOf("image");
  if (pdfWordOccurrence !== -1) {
    return "pdf";
  } else if (imageWordOccurrence !== -1) {
    return "image";
  } else {
    return "unknown";
  }
};

// translate
export const link = () =>
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
export const Must_be_only_number = () => `${t("Must be only number")}`;
export const Enter_correct_url = () => `${t("Enter correct url!")}`;
export const requiredTranslation = () => `${t("required")}`;

export const pagePaginate = 10;

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, ms);
  });
export type OptionType = {
  value: number;
  label: string;
};
export const loadOptions = async (
  search: string,
  prevOptions: OptionsOrGroups<OptionType, GroupBase<OptionType>>,
  options: any
) => {
  await sleep(1000);

  let filteredOptions: OptionType[];
  if (!search) {
    filteredOptions = options;
  } else {
    const searchLower = search.toLowerCase();

    filteredOptions = options.filter(({ label }: any) =>
      label.toLowerCase().includes(searchLower)
    );
  }

  const hasMore = filteredOptions.length > prevOptions.length + 10;
  const slicedOptions = filteredOptions.slice(
    prevOptions.length,
    prevOptions.length + 10
  );

  return {
    options: slicedOptions,
    hasMore,
  };
};

// delete string spaces
export const deleteSpaces = (str: string) => str.replace(/\s+/g, "");

export function getIDfromURL(url: any) {
  const regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

  const match = url?.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  }

  return "";
}

export const indexTable = (index: any, page: any) => {
  return index + 1 + Math.abs(page - 1) * pagePaginate;
};

export const formatPhoneNumber = (phoneCode: string, phone: string): string => {
  const dial_code =
    CountryPhoneCodes.find(
      (country) => phoneCode?.toLowerCase() == country.code.toLowerCase()
    )?.dial_code || "";
  return `${dial_code}${phone}`;
};


export function convertTo24Hour(timeString:any) {
  const match = timeString.match(/(\d{1,2}):(\d{2})\s?(AM|PM)/i);
  if (!match) {
    console.log("Invalid time format");
    return timeString; // or throw new Error("Invalid time format");
  }
  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const ampm = match[3].toUpperCase();

  if (ampm === "AM" && hours == 12) {
    hours = 0;
  } else if (ampm === "PM" && hours < 12) {
    hours += 12;
  }
  return `${hours.toString().padStart(2, '0')}:${minutes}`;
}


export function convertToDynamicShape(value) {
  return value.map(item => ({
    key: {
      ar: item.key_ar,
      en: item.key_en,
    },
    value: {
      ar: item.value_ar,
      en: item.value_en,
    }
  }));
}
