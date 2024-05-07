import React from 'react';
import {Card, Chip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToFavorite} from "../State/Authentication/Action";
import {isPresentInFavorites} from "../config/logic";

const RestaurantCard = ({item}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store => store);
    const handlerAddToFavoirite = () => {
        dispatch(addToFavorite({jwt, restaurantId: item.id}))
    }
    const handleNavigateToRestaurant = () => {
        if(item.open){
            navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`);
        }
    }

    return (
        <Card  className={' w-[18rem]'}>
            <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>

                <img
                    className={'w-full h-[10rem] rounded-t-md object-cover '}
                    src={item.images[0]}
                    alt="Restaurant Card"/>

                <Chip
                    size={'small'} className={'absolute top-2 left-2'}
                    color={item.open ? 'success' : 'error'}
                    label={item.open ? 'open' : 'closed'}
                />
                <div className={'p-4 textPart lg:flex w-full justify-between'}>
                    <div className={'space-y-1'}>
                        <p onClick={handleNavigateToRestaurant} className={'font-semibold text-lg cursor-pointer'}>{item.name}</p>
                        <p className={'text-gray-500 text-sm'}>{item.description}</p>
                    </div>
                    <div>
                        <IconButton onClick={handlerAddToFavoirite}>
                            {isPresentInFavorites(auth.favorites, item) ? <Favorite></Favorite> :
                                <FavoriteBorder></FavoriteBorder>}
                        </IconButton>
                    </div>
                </div>


            </div>

        </Card>
    );
};

export default RestaurantCard;