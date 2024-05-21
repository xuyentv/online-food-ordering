import React from 'react';
import {Button} from "@mui/material";

const RestaurantDetail = () => {
    const handleRestaurantStatus = () => {

    }
    return (
        <div className={'lg:px-20 px-5'}>
            <div className={'py-5 flex justify-center items-center gap-5 '}>
                <h1 className={'text-2xl lg:text-7xl text-center font-black p-5'}>Indian Fast Food</h1>
                <div className={''}>
                    <Button className={'py-[1rem] px-[2rem]'} variant="contained" color="primary"
                            onClick={handleRestaurantStatus}>
                        {true ? "close" : "open"}
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default RestaurantDetail;