import React from 'react';
import {Card, Chip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Favorite} from "@mui/icons-material";

const RestaurantCard = () => {
    return (
        <Card className={' w-[18rem]'}>
            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>

                <img
                    className={'w-full h-[10rem] rounded-t-md object-cover '}
                    src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Restaurant Card"/>

                <Chip
                    size={'small'} className={'absolute top-2 left-2'}
                    color={true ? 'success' : 'error'}
                    label={true ? 'open' : 'closed'}
                />
                <div className={'p-4 textPart lg:flex w-full justify-between'}>
                    <div
                        className={'space-y-1'}
                    >
                        <p className={'font-semibold text-lg'}>Indian Fast Food</p>
                        <p className={'text-gray-500 text-sm'}>Demo</p>

                    </div>
                    <div>
                        <IconButton>
                            {true?  <Favorite></Favorite> : <Chip></Chip>}
                        </IconButton>
                    </div>
                </div>


            </div>

        </Card>
    );
};

export default RestaurantCard;