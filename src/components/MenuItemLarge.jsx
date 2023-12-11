import React from "react";
import '../styles/menuItemLarge.css';


export const MenuItemLarge = ({title}) => {
    return(
        <div className="menu-item-large">
            <label className="item-title">{title}</label>
        </div>
    )
}