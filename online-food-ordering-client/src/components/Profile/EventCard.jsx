import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Delete} from "@mui/icons-material";

const EventCard = () => {
    return (
        <Card sx={{width: 345}}>
            <CardMedia
                image={'https://images.pexels.com/photos/15476367/pexels-photo-15476367/free-photo-of-mon-an-nha-hang-g-th-c-an-nhanh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                sx={{height: 345}}
            />
            <CardContent>
                <Typography variant="h5">Indian Fast Food</Typography>
                <Typography variant="body2">50% off on your first order</Typography>
                <div className={'py-2 space-y-2'}>
                    <p>{"mumbai"}</p>
                    <p className={'text-sm text-blue-500'}>February 14,2024, 12:00 AM</p>
                    <p className={'text-sm text-red-500'}>February 14,2024, 12:00 AM</p>

                </div>
            </CardContent>
            {false && <CardActions>
                <IconButton>
                    <Delete></Delete>
                </IconButton>
            </CardActions>}

        </Card>
    );
};

export default EventCard;