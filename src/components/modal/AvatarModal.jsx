import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useEffect, useState} from "react";
import {assignAvatar, initAvatars} from "../../api/request/AvatarRequest";
import {WebAvatar} from "../views/Avatars/WebAvatar";
import {CircularProgress} from "@mui/material";

import '../../styles/views/modal/avatarModal.css';



export const AvatarModal = (props) => {
    const [open, setOpen] = React.useState(true);
    const [avatars,setAvatars] = useState([]);
    const [activeElement, setActiveElement] = useState(null);
    const [buttonEnabled, setButtonEnabled] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '60%',
        bgcolor: 'background.paper',
        backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.8)), url(${props.game.background_image})`,
        backgroundSize: "100% 100%",
        border: '2px solid #000',
        borderColor: 'white',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        initAvatars()
            .then((response) => {
                if(response.ok){
                    response.json()
                        .then((data) => {
                            setAvatars(data.data);
                        })
                }
            })
    }, []);

    const handleAvatarClick = (id) => {
        setButtonEnabled(true);
        setActiveElement(id);
    };

    const handleButtonClick = () => {
        assignAvatar(activeElement)
            .then((response) => {
                if(response.ok){
                    props.showNextModal();
                    handleClose();
                } else{
                    console.log("error")//SUSTITUIR POR ALERT
                }
            })

    };
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div id="modal-avatar" className="modal-avatars">
                        <div className="modal-avatars__content color-white">
                            <h1>CHOOSE YOUR FIRST AVATAR</h1>
                            <div className="modal-avatars__content__avatars">
                                { Array.isArray(avatars) && avatars.length
                                    ?
                                    avatars.map((avatar) => (
                                        <div onClick={() =>{handleAvatarClick(avatar.id)}}>
                                            <WebAvatar name={avatar.name} slug={avatar.slug} price={avatar.price} index={`${avatar.id}-1`} backgroundImage={avatar.base64Img} displayColor={activeElement === avatar.id ? 'display-color' : 'display-no-color'} textColor={"color-white"}/>
                                        </div>
                                    ))
                                    :
                                    <CircularProgress size={50} color="inherit"/>
                                }
                            </div>
                            <Button onClick={handleButtonClick} className="button" disabled={!buttonEnabled} variant="outlined" size="large">Next</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}