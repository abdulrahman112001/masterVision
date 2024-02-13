import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";
//@ts-ignore
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
//@ts-ignore
import { FaBars } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { sideBarItems } from "../../../data/sidebar";
console.log("🚀 ~ sideBarItems:", sideBarItems[0].id);
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

const SideBar: React.FC<SideBarProps> = ({ collapsed, setCollapsed }) => {
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
  const [selectedItem, setSelectedItem] = useState(sideBarItems[0]?.id);
  console.log("🚀 ~ selectedItem:", selectedItem);

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
        {Item.items.map((innerItem) => generateItem(innerItem))}
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
  const handleSelectItem = (id) => {
    setSelectedItem(id);
  };
  return (
    <div className="flex relative">
      <div className="sidebarOne">
        <Sidebar
          rtl={isRTL}
          collapsed={true}
          width="265px"
          collapsedWidth="100px"
        >
          <div className="flex justify-center py-[3rem]">
            <Logo />
          </div>
          <Menu iconShape="square">
            {sideBarItems.map((item) => (
              <MenuItem
                key={item.id}
                icon={<item.icon size={30} />}
                className={selectedItem === item.id ? "active-item-class" : ""}
                onClick={() => handleSelectItem(item.id)} // تحديث الحالة عند النقر
              />
            ))}
          </Menu>
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
        className=""
      >
        <Menu>
          {sideBarItems
            .filter((item) => item.id === selectedItem)
            .flatMap((item) => item.items)
            .map((Item) => (
              <>
                  {Item?.heading && (
                <div className="mt-[20px] mx-[35px] h-[40px] flex items-center ">
                    <h1 className="text-[#7E8299] text-[0.9rem]  ">
                      {t(Item?.heading)}
                    </h1>
                </div>
                  )}
                <SubMenu
                  key={Item.id}
                  label={t(Item.label)}
                  icon={<Item.icon size={30} />}
                >
                  {Item.items.map((innerItem) => (
                    <MenuItem
                      key={innerItem.id}
                      icon={<innerItem.icon size={15} />}
                      active={location?.pathname === Item.link}
                      onClick={(e) => goTo(e, innerItem.link)}
                      className="px-3"
                    >
                      {t(innerItem.label)}
                    </MenuItem>
                  ))}
                </SubMenu>
              </>
            ))}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
