import React from "react";
import MenuItem from "../MenuItem";
const Menu = ({ menuName, menuItems }) => {
  return (
    <div name="menu">
      <h1>{menuName} Menu</h1>
        {menuItems.map((item) => (
          <MenuItem
            key={item.itemId}
            itemId={item.itemId}
            itemPrice={item.itemPrice}
            itemName={item.itemName}
            itemDescription={item.itemDescription}
          />
        ))}
      </div>);};
export default Menu;
