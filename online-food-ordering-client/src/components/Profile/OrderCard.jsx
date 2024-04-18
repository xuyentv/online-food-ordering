import React from 'react';
import {Button, Card} from "@mui/material";

const OrderCard = () => {
    return (
        <Card className={'flex justify-between items-center p-5'}>
            <div className={'flex items-center space-x-5'}>
                <img className={'h-16 w-16'}
                     src="https://images.pexels.com/photos/15476360/pexels-photo-15476360/free-photo-of-banh-hamburger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     alt=""/>
                <div>
                    <p>Biryani</p>
                    <p>$201</p>
                </div>

            </div>
            <div>
                <Button className={'cursor-not-allowed'}> completed</Button>
            </div>

        </Card>
    );
};

export default OrderCard;