import React from "react";
import '../../../styles/views/Profile/menuItemSmall.css';

export const MenuItemSmall = ({title}) => {
    return(
        <div className="menu-item-small">
            <label className="item-title-small">{title}</label>
        </div>
    )
}