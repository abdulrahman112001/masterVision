import { t } from "i18next";
import { AiFillEdit } from "react-icons/ai";
type EditProps_TP = {
  className?: string;
  action?: () => void;
  size?: number;
};
export const Edit = ({ className, action, size, ...props }: EditProps_TP) => {
  return (
    <div  onClick={action} className="flex items-center justify-between">
      <div>
        <AiFillEdit
          size={"25"}
          className={`cursor-pointer fill-primary ${className}`}
         
          {...props}
        />
      </div>
      <div>{t("Edit")}</div>
    </div>
  );
};
