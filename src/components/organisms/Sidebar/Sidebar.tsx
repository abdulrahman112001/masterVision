import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";
//@ts-ignore
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
//@ts-ignore
import { FaBars } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { sideBarItems } from "../../../data/sidebar";
import { useIsRTL } from "../../../hooks/useIsRTL";
import ArrowSideBar_IC from "../../atoms/icons/ArrowSideBar";
import Logo from "../../atoms/icons/Logo";

interface MenuItemType {
  id: string;
  heading?: string;
  label: string;
  icon: IconType;
  link?: string;
  items?: MenuItemType[];
}

interface OpenMenusType {
  [key: string]: boolean;
}

interface SideBarProps {
  isSidebarCollapsed: boolean;
  handleClickItem: () => void;
}

const SideBar: React.FC<SideBarProps> = ({collapsed , setCollapsed}) => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const location = useLocation();
  const isRTL = useIsRTL();
  const goTo = (e: any, link: any) => {
    e.preventDefault();
    if (e.button === 0) {
      if (e.ctrlKey) {
        window.open(link, "_blank");
      } else {
        navigate(link);
      }
    } else if (e.button === 1) {
      window.open(link, "_blank");
    }
  };
  

  const generateItem = (Item: any) => {
    if (Item?.heading) {
      return (
        <div className="text-white sidebar-heading">
          {!collapsed && t(Item.heading)}
        </div>
      );
    }
    return Item.items ? (
      <SubMenu
        // defaultOpen={isOpen(Item.id)}
        key={Item.id}
        label={t(Item.label)}
        icon={<Item.icon size={15} />}
      >
        {/* {Item.items.map((innerItem) => generateItem(innerItem))} */}
      </SubMenu>
    ) : (
      <>
        {/* <Tooltip label={t(Item?.label)} > */}
        <MenuItem
          className={
            location.pathname === Item.link
              ? `font-bold text-white rounded-[8px] px-2 mt-1`
              : "font-bold rounded-[8px] text-mainBlack px-2 mt-1"
          }
          key={Item.id}
          onClick={(e) => {
            goTo(e, Item.link);
          }}
          icon={<Item.icon size={15} className="dark:text-white" />}
          active={location?.pathname === Item.link}
        >
          <div className=" dark:text-white">{t(Item.label)}</div>
        </MenuItem>
      </>
    );
  };

  return (
    <div className="flex relative">
      <div className="sidebarOne">
      <Sidebar rtl={isRTL} collapsed={true} width="265px" collapsedWidth="90px">
        <div className="my-5 text-center">
          <Logo/>
        </div>
        <Menu iconShape="square">{sideBarItems.map(generateItem)}</Menu>
        <div className="sidebar_mobile_toggle cursor-pointer">
          <FaBars className="text-[25px] mx-5 text-mainBlue dark:text-white" />
        </div>
      </Sidebar>

      </div>
        <div
          className={`absolute z-[9] left-[-15px] bottom-[80px] bg-mainBlue w-[40px] py-[5px] rounded-md m-auto flex justify-center ${
            !collapsed
              ? " flex flex-row items-center "
              : "w-[40px] flex justify-center"
          } `}
        >
          <ArrowSideBar_IC
            className={`cursor-pointer transition-ease collapsed-button-sidebar scale-x-[-1]  ${
              collapsed && "scale-x-[1] text-[#009ef7]"
            } `}
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>

      <Sidebar
        rtl={isRTL}
        collapsed={collapsed}
        width="265px"
        collapsedWidth="0"
      >
        <Menu>
          {sideBarItems.map((Item) =>
            Item.items ? (
              <SubMenu
                // defaultOpen={isOpen(Item.id)}
                className={
                  location.pathname === Item.link
                    ? " font-bold text-white"
                    : "font-bold text-mainBlack"
                }
                key={Item.id}
                label={t(Item.label)}
                icon={<Item.icon size={15} />}
                active={location.pathname === Item.link}
              >
                {Item.items.map((innerItem) => generateItem(innerItem))}
              </SubMenu>
            ) : (
              generateItem(Item)
            )
          )}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
