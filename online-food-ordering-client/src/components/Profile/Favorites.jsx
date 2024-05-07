import React from 'react';
import RestaurantCard from "../Restaurant/RestaurantCard";
import {useSelector} from "react-redux";

const Favorites = () => {
    const {auth} = useSelector((state) => state);
    return (
        <div className={''}>
            <h1 className={'py-5 text-xl font-semibold text-center'}> My Favorites</h1>
            <div className={'flex flex-wrap justify-center gap-4'}>
                {auth.favorites.map((item) => <RestaurantCard item={item}/>)}

            </div>

        </div>
    );
};

export default Favorites;