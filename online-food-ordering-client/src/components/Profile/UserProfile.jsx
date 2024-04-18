import React from 'react';
import {AccountCircle} from "@mui/icons-material";
import {Button} from "@mui/material";

const UserProfile = () => {
    const handleLogout = () => {

    }
    return (
        <div className={'min-h-[80vh] flex flex-col justify-center items-center'}>
            <div className={'flex flex-col justify-center items-center text-center'}>
                <AccountCircle sx={{fontSize: "9rem"}}></AccountCircle>
                <h1 className={'py-5 text-2xl font-semibold'}>Code With Zosh</h1>
                <p className={''}>Email: xuyentv2705@gmail.com</p>
                <Button sx={{margin: '2rem 0rem'}} onClick={handleLogout} variant={'contained'}>Logout</Button>

            </div>

        </div>
    );
};

export default UserProfile;