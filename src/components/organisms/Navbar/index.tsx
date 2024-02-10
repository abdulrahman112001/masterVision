import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTranslation } from "react-i18next";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/global/300-1.jpg";
import ar from "../../../assets/global/ar.svg";
import en from "../../../assets/global/en.svg";
import { useAuth } from "../../../context/auth-and-perm/AuthProvider";
import { useLanguageContext } from "../../../context/language";
import { useIsRTL } from "../../../hooks";
import { Breadcrumbs } from "../../molecules/Breadcrumbs";

const NavBar = ({
  setOpenSide,
  openSide,
  handleCollapsedSideBar,
  isSidebarCollapsed,
}: any) => {
  const [dropDown, setDropDown] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const handleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    const savedMode: any = localStorage.getItem("darkMode");

    if (!isDarkMode) {
      document.body.classList.remove("dark");
    }
    if (isDarkMode === null) {
      localStorage.setItem("darkMode", "false");
    }
    if (isDarkMode) {
      setIsDarkMode(savedMode === "true");
      document.body.classList.add("dark");
    }
  }, []);

  const { t } = useTranslation();
  const handleDropDown = () => {
    setDropDown((prevState) => !prevState);
  };

  const handleClickOutside = () => {
    setDropDown(false);
  };

  const isRTL = useIsRTL();

  const { changeLang } = useLanguageContext();


  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
    Cookies.remove("token");
  };

  const { user } = useAuth();
  useEffect(() => {}, [user]);

  return (
    <div className="w-100 flex h-16 items-center justify-between p-2">
      <div className="w-100 flex items-center py-6">
        <Breadcrumbs isSidebarCollapsed={isSidebarCollapsed} />
      </div>

      <div className="me-2 flex  items-center gap-4 relative">
        <div className="flex dark-light-mode-style">
          <DarkModeToggle
            onChange={handleDarkMode}
            checked={isDarkMode}
            size={50}
          />
        </div>

        <button
          type="button"
          onClick={(e) =>
            changeLang(
              e.currentTarget.firstElementChild?.getAttribute(
                "data-lang"
              ) as string
            )
          }
        >
          {isRTL ? (
            <img
              data-lang="en"
              src={en}
              className="ms-3 h-[25px] w-[25px] object-contain rounded-[.325rem]"
              alt="ar"
            />
          ) : (
            <img
              data-lang="ar"
              src={ar}
              className="ms-3 h-[25px] w-[25px] object-contain rounded-[.325rem]"
              alt="en"
            />
          )}
        </button>

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
          {/* drop-down */}

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
                      <span className="text-[14px]">
                        {" "}
                        {user?.name}
                      </span>
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
