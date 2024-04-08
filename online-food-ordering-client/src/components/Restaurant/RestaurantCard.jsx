import React from 'react';
import {Card} from "@mui/material";

const RestaurantCard = () => {
    return (
        <Card className={' w-[18rem]'}>
            <div className={`${true} ? 'cursor-pointer':'cursor-not-allowed'`}></div>
        </Card>
    );
};

export default RestaurantCard;