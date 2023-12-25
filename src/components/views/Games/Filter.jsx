import React from "react";
import '../../../styles/views/Games/filter.css';
export const Filter = ({title,options}) => {
    return(
        <>
            <select className="filter">
                <option className="select-title" value="" disabled selected>{title}</option>
                {options.map((option) => {
                    return(
                        <option value={option}>{option}</option>
                    )
                })}
            </select>
        </>
    )
}
