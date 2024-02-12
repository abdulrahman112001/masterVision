/////////// IMPORTS
///
import { ErrorMessage, useFormikContext } from "formik";
import { t } from "i18next";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { CFile_TP, CImageFile_TP } from "../../../types";
import { pdfOrImage } from "../../../utils/helpers";
import { Button } from "../../atoms/buttons/Button";
import { UploadSvgIcon } from "../../atoms/icons";
import { FilesPreview } from "./FilesPreview";
import { FormikError } from "../../atoms";
///
/////////// Types
///
type DropFileProps_TP = {
  name: string;
  setRemoved?: any;
  isMulti?: boolean;
};
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const DropFile = ({ name, setRemoved, isMulti }: DropFileProps_TP) => {
  const { setFieldValue, values, errors } = useFormikContext<{
    [key: string]: any;
  }>();
  console.log("🚀 ~ DropFile ~ errors:", errors);

  const [images, setImages] = useState<CImageFile_TP[]>([]);
  const [pdfs, setPdfs] = useState<CFile_TP[]>([]);

  useEffect(() => {
    const imageFiles: CImageFile_TP[] =isMulti ? values[name] : [values[name]];
    const images = imageFiles?.filter((file) => pdfOrImage(file) === "image");
    setImages(images);

    // const pdfFiles: CFile_TP[] = values[name]
    // const pdfs = pdfFiles.filter((file) => pdfOrImage(file) === "pdf")
    // setPdfs(pdfs)
  }, [values[name]]);

  const handleUpload = (acceptedFiles: any) => {
    const files = acceptedFiles.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        id: crypto.randomUUID(),
      })
    );
    console.log("🚀 ~ handleUpload ~ files:", files)
    setFieldValue(name,isMulti ?  files : files[0]);
    setRemoved(false);
  };
  return (
    <div className=" grid grid-cols-4 gap-8 rounded-md bg-white dark:!bg-dark-primary py-3 px-1  w-full  ">
      <div className=" col-span-4">
        <Dropzone
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg", ".jpg"],
            "image/gif": [".gif"],
            "image/svg": [".svg"],
            "application/pdf": [".pdf"],
          }}
          onDrop={(acceptedFiles) => handleUpload(acceptedFiles)}
        >
          {({ getRootProps, getInputProps, open }) => (
            <div className="flex justify-center items-center gap-8">
              {/* from */}
              <div
                className={` ${
                  errors[name] ? " border !border-red-500" : ""
                } flex flex-col  justify-center items-center rounded-lg w-full cursor-pointer  p-4 gap-2 shadows dark:!bg-dark-primary dark:border-none dark:!shadow-none dark:!text-white bg-gray-100`}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <UploadSvgIcon stroke={"#A0A0A0"} />
                <p className="text-gray-500 dark:text-white">
                  {t("click to upload")}
                </p>
                <Button type="button">{t("upload filed")}</Button>

                <FormikError name={name} />
              </div>
              {(!!pdfs?.length || !!images?.length) && (
                <FilesPreview
                  // preview
                  formikFieldName={name}
                  pdfs={pdfs}
                  images={images}
                  setRemoved={setRemoved}
                />
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};
