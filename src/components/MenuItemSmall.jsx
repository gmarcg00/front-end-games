import React from "react";
import '../styles/menuItemSmall.css';

export const MenuItemSmall = ({title}) => {
    return(
        <div className="menu-item-small">
            {title}
        </div>
    )
}