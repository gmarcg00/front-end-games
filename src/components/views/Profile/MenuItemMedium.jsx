import React from "react";
import '../../../styles/views/Profile/menuItemMedium.css';


export const MenuItemMedium = ({title}) => {
    return(
        <div className="menu-item-medium">
            <label className="item-title-medium">{title}</label>
        </div>
    )
}