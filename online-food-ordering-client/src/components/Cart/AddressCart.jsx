import React from 'react';
import {Button, Card} from "@mui/material";
import {Home} from "@mui/icons-material";

const AddressCart = ({item, showButton, handleSelectAddress}) => {
    return (
        <Card className={'flex gap-5 w-64 p-5'}>
            <Home></Home>
            <div className={'space-y-3 text-gray-500'}>
                <h1 className={'font-semibold text-lg text-white'}>
                    Home
                </h1>
                <p className={''}>
                    219 Nguyen Ngoc Vu, Cau Giay, Ha Noi
                </p>
                {showButton &&
                    (<Button variant={'outlined'} fullWidth onClick={() => handleSelectAddress(item)}>Select</Button>)
                }
            </div>
        </Card>
    );
};

export default AddressCart;