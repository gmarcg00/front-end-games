import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import {useEffect} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

export const LoginModal = (props) => {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, 2500);
    },[]);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {
                            props.success === true
                                ? <div>  Welcome back {props.username} </div>
                                : <></>
                        }

                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {
                            props.success === true
                                ? <Alert variant="filled" severity="success"> Login successful </Alert>
                                : <Alert variant="filled" severity="error"> Invalid credentials </Alert>

                        }
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}