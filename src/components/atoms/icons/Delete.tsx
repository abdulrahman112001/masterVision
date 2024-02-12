import { t } from "i18next";
import { AiFillDelete } from "react-icons/ai";
type DeleteProps_TP = {
  className?: string;
  action?: () => void;
  size?: number;
};
export const Delete = ({
  className,
  action,
  size,
  ...props
}: DeleteProps_TP) => {
  return (
    <div className="flex items-center justify-between cursor-pointer mt-3" onClick={action}>
      <div>
        <AiFillDelete
          size={"25"}
          className={` fill-red-500   cursor-pointer  ${className}`}
          
          {...props}
        />
      </div>
      <div>{t("Delete")}</div>
    </div>
  );
};
