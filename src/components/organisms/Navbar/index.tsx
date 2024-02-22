import { t } from "i18next";
import Cookies from "js-cookie";
import { useState } from "react";
//@ts-ignore
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/global/300-1.jpg";
import { useAuth } from "../../../context/auth-and-perm/AuthProvider";
import { Breadcrumbs } from "../../molecules/Breadcrumbs";
import Setting from "../../molecules/Setting";

const NavBar = ({ isSidebarCollapsed, setToggled , toggled  , opened }: any) => {
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState(false);
  const { user } = useAuth();
  const handleDropDown = () => {
    setDropDown((prevState) => !prevState);
  };

  const handleClickOutside = () => {
    setDropDown(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
    Cookies.remove("token");
  };

  return (
    <div className="w-100 flex h-16 items-center justify-between p-2">
      <div className="w-100 flex items-center py-6">
        <Breadcrumbs isSidebarCollapsed={isSidebarCollapsed} />
      </div>
      <div className={`hidden lg-b:block absolute ${toggled ? "":""}`}>
        <Burger
          opened={opened}
          onClick={() => {
            setToggled(!toggled);
          }}
          
          aria-label="Toggle navigation"
        />
      </div>

      <div className="me-2 flex  items-center gap-4 relative">
        <Setting />
        <OutsideClickHandler onOutsideClick={handleClickOutside}>
          <div
            className="flex items-center justify-center gap-2 relative cursor-pointer"
            onClick={handleDropDown}
          >
            <img
              src={logo}
              className="w-10 h-10 rounded-lg object-contain"
              alt="logo"
            />
            <div className="user-info-navbar">
              <div className="m-0 text-[0.80rem] info-user-navbar">
                <span className="badge bg-[#43916d] text-[#f5f8fa] rounded-md font-bold text-xs px-[0.3rem] mr-2 py-[0.05rem] ml-2 info-user-name">
                  {t("Admin")}
                </span>
                <span>{user?.name}</span>
              </div>
              <a
                href="#"
                className="font-bold text-[#a1a5b7] hover:text-[#009ef7] text-xs"
              >
                {user.email}
              </a>
            </div>
          </div>

          {dropDown && (
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary font-bold py-4 text-sm w-275 show absolute m-0 left-0 top-[55px] inset-[0px 0px auto auto] z-105 dark:bg-dark-tertiary"
              data-kt-menu="true"
              data-popper-placement="bottom-end"
            >
              <div className="menu-item px-3">
                <div className="menu-content flex items-center px-3">
                  <div className="symbol symbol-50px me-5">
                    <img
                      className="w-[50px] h-[50px] rounded-md"
                      alt="avatar"
                      src={logo}
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-bold flex items-center text-base">
                      <span className="text-[14px]"> {user?.name}</span>
                      <span className="bg-[#43916d] text-[#f5f8fa] rounded-md font-bold text-[0.70rem] px-[0.3rem] mr-2 py-[0.10rem] ml-2">
                        {t("Admin")}

                        {/* {t("Super Admin")} */}
                      </span>
                    </div>

                    <a
                      href="#"
                      className="font-bold text-[#a1a5b7] hover:text-[#009ef7] text-xs "
                    >
                      {user?.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="separator my-2"></div>

              <div className="menu-item px-5 my-1">
                <Link
                  to="/setting"
                  className="menu-link inline-block w-full py-[.65rem] px-[1rem] text-[#009ef7] hover:bg-[rgba(245,248,250,.8)] hover:rounded-[.475rem] dark:!text-dark-textWhite dark:hover:bg-dark-primary"
                >
                  {t("Account Setting")}
                </Link>
              </div>

              <div className="menu-item px-5 my-1">
                <span
                  onClick={handleLogOut}
                  className="menu-link inline-block w-full py-[.65rem] px-[1rem] text-[#009ef7] hover:bg-[rgba(245,248,250,.8)] hover:rounded-[.475rem] cursor-pointer dark:!text-dark-textWhite dark:hover:bg-dark-primary"
                >
                  {t("Logout")}
                </span>
              </div>
            </div>
          )}
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default NavBar;
