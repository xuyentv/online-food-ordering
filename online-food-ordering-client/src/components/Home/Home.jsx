import React from "react";
import "./Home.css"
import MultiItemCarousel from "./MultiItemCarousel";
import RestaurantCard from "../Restaurant/RestaurantCard";
import Auth from "../Auth/Auth";

const restaurantCards = [1, 2, 3, 4, 5, 6, 4, 7, 8, 4, 65, 3, 76, 78, 8, 3, 37, 7, 3]
const Home = () => {
    return (
        <div className={'pb-10'}>
            <section className="banner  -z-50 relative flex flex-col justify-center items-center">
                <div className="w-[50vw] z-10 text-center">
                    <p className="text-2xl lg:text-6xl font-bold z-10 py-5">Zosh Food</p>
                    <p className="z-10 text-gray-300 text-xl lg:text-4xl">
                        Taste the convenience: Food , Fast and Delivered
                    </p>
                </div>
                <div className="cover absolute top-0 left-0 right-0"></div>
                <div className="fadout">

                </div>
            </section>
            <section className={'p-10 lg:py-10 lg:px-20'}>
                <p className={'text-2xl font-semibold text-gray-400 py-3 pb-10'}>Top Meels</p>
                <MultiItemCarousel></MultiItemCarousel>
            </section>
            <section className={'px-5 lg:px-20 pt-10'}>
                <h1 className={'text-2xl font-semibold text-gray-400 pb-8'}>
                    Order From Our Handpicked Favorites
                </h1>
                <div className={'flex flex-wrap items-center justify-around gap-5'}>
                    {restaurantCards.map(item => <RestaurantCard/>)}
                </div>
            </section>

        </div>
    );
};
export default Home;
