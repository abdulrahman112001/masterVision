import { Button, Menu, MenuProps } from "@mantine/core";
import { t } from "i18next";
import React, { ReactNode } from "react";

interface DropDownProps {
  children: ReactNode;
}

function DropDown({ children }: DropDownProps) {
  return (
    <div className="relative">
      <Menu shadow="md" width={120}>
        <Menu.Target>
          <Button className="!bg-mainBlue">{t("Actions")}</Button>
        </Menu.Target>
        <Menu.Dropdown>
          {React.Children.map(children, (child, index) => (
            // Explicitly declaring child as a ReactNode
            <Menu.Item key={index}>{child}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default DropDown;
