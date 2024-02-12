import { t } from "i18next";
import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router";
import { Outlet } from "react-router-dom";
import { Loading } from "../components/organisms/Loading/Loading";
import NavBar from "../components/organisms/Navbar";
import SideBar from "../components/organisms/Sidebar/Sidebar";
import { useAuth } from "../context/auth-and-perm/AuthProvider";

export const Root = () => {
  const { login, user } = useAuth();
  const [openSide, setOpenSide] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();
  const [showSignupState, setShowSignupState] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const handleClickOutside = () => {
    document.body.removeAttribute("drawer-aside-bar");
    setOpenSide(false);
  };

  useEffect(() => {
    if (user) {
      // navigate('/');
      setShowSignupState(false);
    } else setShowSignupState(true);
  }, [user]);

  useEffect(() => {
    setShowOverlay(openSide);
  }, [openSide]);

  const handleCollapsedSideBar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);

    if (!isSidebarCollapsed) {
      document.body.setAttribute("sidebar-collapsed", "true");
    } else {
      document.body.removeAttribute("sidebar-collapsed");
    }
  };

  if (!!user) {
    return (
      <div className="grid h-screen grid-cols-view grid-rows-view bg-flatWhite dark:bg-dark-primary">
        <OutsideClickHandler onOutsideClick={handleClickOutside}>
          <div className=" ">
            <SideBar
              handleClickItem={handleClickOutside}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
            />
       
          </div>
        </OutsideClickHandler>
        {showOverlay && <Overlay zIndex={1100} />}
        <main
          className={`col-start-2 col-end-3 row-start-2 row-end-3 overflow-y-scroll h-[100%]  absolute main-page genral-main  ${
            collapsed && "collapsed-sidebar !w-full"
          }`}
        >
          <nav className="col-start-1 col-end-3 row-start-1 row-end-2 bg-white dark:bg-dark-tertiary dark:text-dark-textWhite">
            <NavBar
              setOpenSide={setOpenSide}
              openSide={openSide}
              handleCollapsedSideBar={handleCollapsedSideBar}
              isSidebarCollapsed={isSidebarCollapsed}
            />
          </nav>
          <div className="mt-[45px] px-10">
            <Outlet />
          </div>
        </main>

        {/* <Footer /> */}
      </div>
    );
  } else {
    navigate("/login");
  }
  return <Loading mainTitle={t("loading")} />;
};
