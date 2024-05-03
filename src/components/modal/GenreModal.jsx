import * as React from "react";
import {useEffect, useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import Button from "@mui/material/Button";
import {addGenres, getGenres} from "../../api/request/GenresRequest";

import '../../styles/views/modal/genreModal.css';


export const GenreModal = (props) => {
    const [open, setOpen] = React.useState(true);
    const [genres,setGenres] = useState([]);
    const [userGenres,setUserGenres] = useState([]);
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
        getGenres()
            .then((response) => {
                if(response.ok){
                    response.json()
                        .then((data) => {
                            setGenres(data.data);
                        })
                }
            })
    },[])

    const handleClick = () => {
        addGenres(userGenres)
            .then((response) => {
                if(response.ok){
                    props.showNextModal();
                    handleClose();
                }else{
                    console.log("error")//SUSTITUIR POR ALERT
                }
            })
        props.showNextModal();
    }

    const handleGenreButtonClick = (id) => {
        toggleGenre(id);
        setButtonEnabled(true);
    };

    const toggleGenre = (id) => {
        if(document.getElementById(`genre-${id}`).classList.contains("display-no-color")) {
            document.getElementById(`genre-${id}`).classList.remove("display-no-color");
            setUserGenres([...userGenres, id])
        } else {
            document.getElementById(`genre-${id}`).classList.add("display-no-color");
            const platforms = userGenres.filter((valor, index) => valor !== id);
            setUserGenres(genres)
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
                    <div id="modal-genres" className="modal-genres">
                        <div className="modal-genres__content color-white">
                            <h1>CHOOSE YOUR GENRES</h1>
                            <div className="modal-genres__content__genres">
                                {Array.isArray(genres) && genres.length
                                    ?
                                    genres.map((genre) =>(
                                        <div onClick={() =>{handleGenreButtonClick(genre.id)}}>
                                            <Button id={`genre-${genre.id}`} className="button display-no-color" variant="outlined" size="large">{genre.name}</Button>
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