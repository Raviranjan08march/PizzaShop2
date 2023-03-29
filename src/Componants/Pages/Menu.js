import React from "react";
import "./Menu.css";
import { menuList } from "../../MenuCard/MenuList";
import MenuListItem from "../MenuItem";
export default function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Our Menu</h1>
      <div className="menuList">
        {menuList.map((menuItem, key) => {
          return (
            <MenuListItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}
