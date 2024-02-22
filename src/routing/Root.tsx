import { useDisclosure } from "@mantine/hooks";
import { t } from "i18next";
import { useState } from "react";
//@ts-ignore
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router";
import { Outlet } from "react-router-dom";
import { Loading } from "../components/organisms/Loading/Loading";
import NavBar from "../components/organisms/Navbar";
import SideBar from "../components/organisms/Sidebar/Sidebar";
import { useAuth } from "../context/auth-and-perm/AuthProvider";

export const Root = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [opened, { toggle } ] = useDisclosure();

  const handleClickOutside = () => {
    // setCollapsed(false);
    setToggled(false);
  };

  if (!!user) {
    return (
      <div className="grid h-screen grid-cols-view grid-rows-view bg-flatWhite dark:bg-dark-primary">
        <OutsideClickHandler onOutsideClick={handleClickOutside}>
          <div className=" ">
            <SideBar
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              toggled={toggled}
              setToggled={setToggled}
            />
          </div>
        </OutsideClickHandler>
        {/* {showOverlay && <Overlay zIndex={1100} />} */}
        <main
          className={`col-start-2 col-end-3 row-start-2 row-end-3 overflow-y-scroll h-[100%]  absolute main-page genral-main bg-[#f1f4f7] ${
            collapsed && "collapsed-sidebar !w-full"
          }`}
        >
          <nav className="col-start-1 col-end-3 row-start-1 row-end-2 bg-white dark:bg-dark-tertiary dark:text-dark-textWhite">
            <NavBar
           
              // toggle={toggle}
              toggled={toggled}
              setToggled={setToggled}
              opened={opened}
              isSidebarCollapsed={collapsed}
            />
          </nav>
          <div className="mt-[45px] px-5  ">
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
