import React, {useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import '../../src/styles/userComponent.css';
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


export const UserComponent = ({name, username,userProfileImage}) => {

    useEffect(() => {

    },[]);

    return (
        <>
            <div className="user-component-container">
                <Avatar src={`${userProfileImage}`} sx={{ width: 66, height: 66 }} />
                <div className="user-component-container-info">
                    <p className="user-component-container-info-name">{name}</p>
                    <p className="user-component-container-info-username">{username}</p>
                </div>
                <Button className="user-component-container-button" variant="outlined" endIcon={<AddIcon/>} size="medium">Follow</Button>
            </div>
        </>
    )
}