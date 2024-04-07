import React, {useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import '../../src/styles/userComponent.css';


export const UserComponent = ({name, username,userProfileImage}) => {


    useEffect(() => {

    },[]);


    return (
        <>
            <div className="user-component-container">
                <Avatar src={`${userProfileImage}`} sx={{ width: 56, height: 56 }} />
                <div className="user-component-container-info">
                    <p className="user-component-container-info-name">{name}</p>
                    <p className="user-component-container-info-username">{username}</p>
                </div>
            </div>
        </>
    )
}