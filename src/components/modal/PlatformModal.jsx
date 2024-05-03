import {useEffect, useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import {addPlatforms, getPlatforms} from "../../api/request/PlatformsRequest";

import '../../styles/views/modal/platformModal.css';



export const PlatformModal = (props) => {
    const [open, setOpen] = React.useState(true);
    const [platforms,setPlatforms] = useState([]);
    const [userPlatforms,setUserPlatforms] = useState([]);
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
        getPlatforms()
            .then((response) => {
                if(response.ok){
                    response.json()
                        .then((data) => {
                            setPlatforms(data.data);
                        })
                }
            })
    },[])

    const handleClick = () => {
        addPlatforms(userPlatforms)
            .then((response) => {
                if(response.ok) props.showNextModal();
                else console.log("error")//SUSTITUIR POR ALERT
            });
    };

    const handlePlatformButtonClick = (id) => {
        togglePlatform(id)
        setButtonEnabled(true);
    };

    const togglePlatform = (id) => {
        if(document.getElementById(`platform-${id}`).classList.contains("display-no-color")) {
            document.getElementById(`platform-${id}`).classList.remove("display-no-color");
            setUserPlatforms([...userPlatforms, id])
        } else {
            document.getElementById(`platform-${id}`).classList.add("display-no-color");
            const platforms = userPlatforms.filter((valor, index) => valor !== id);
            setUserPlatforms(platforms)
        }
    }

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
                    <div id="modal-platforms" className="modal-platforms">
                        <div className="modal-platforms__content color-white">
                            <h1>CHOOSE YOUR PLATFORMS</h1>
                            <div className="modal-platforms__content_platforms">
                                {Array.isArray(platforms) && platforms.length
                                    ?
                                    platforms.map((platform) =>(
                                        <div onClick={() =>{handlePlatformButtonClick(platform.id)}}>
                                            <Button id={`platform-${platform.id}`} className="button display-no-color" variant="outlined">{platform.name}</Button>
                                        </div>
                                    ))
                                    :
                                    <CircularProgress size={50} color="inherit"/>
                                }
                            </div>
                            <Button onClick={handleClick} className="button" disabled={!buttonEnabled} variant="outlined" size="large">Next</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );

}