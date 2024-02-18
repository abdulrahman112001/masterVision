import { t } from "i18next";
import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";

function DropDown({ children }) {
  const [dropDown, setDropDown] = useState(false);
  const handleClickOutside = () => {
    setDropDown(false);
  };
  return (
    <div className="relative ">
      <div onClick={() => setDropDown(!dropDown)} className="cursor-pointer">{t("Actions")}
    
      </div>
      <OutsideClickHandler onOutsideClick={handleClickOutside}>
      <div>
        {dropDown && (
          <div
            className="menu menu-sub px-3   menu-sub-dropdown !w-[100px] menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary font-bold py-4 text-sm w-275 show  m-0  top-[20px] inset-[0px 0px auto auto] z-105 dark:bg-dark-tertiary"
            data-kt-menu="true"
            data-popper-placement="bottom-end"
          >
            {children}
          </div>
        )}
      </div>
      </OutsideClickHandler>
    </div>
  );
}

export default DropDown;
