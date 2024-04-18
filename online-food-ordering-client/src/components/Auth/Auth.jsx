import React from 'react';
import {Box, Modal} from "@mui/material";
import {useLocation} from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Auth = () => {
    const location = useLocation()
    const navigate = useLocation();
    const handleOnClose = () => {
        navigate('/')
    }

    return (
        <>
            {/*<Modal open={true}>*/}
            <Modal open={location.pathname === '/account/register' || location.pathname === '/account/login'}
                   onClose={handleOnClose}>
                <Box sx={style}>
                    {location.pathname === '/account/register' ? <RegisterForm></RegisterForm> :
                        <LoginForm></LoginForm>}
                </Box>
            </Modal>
        </>
    );
};

export default Auth;