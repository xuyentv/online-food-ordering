import React, {useEffect} from 'react';
import AdminSideBar from "./AdminSideBar";
import {Route, Routes} from "react-router-dom";
import RestaurantDashboard from "../Dashboard/RestaurantDashboard";
import Orders from "../Orders/Orders";
import Menu from "../Menu/Menu";
import FoodCategory from "../FoodCategory/FoodCategory";
import Events from "../Events/Events";
import Ingredients from "../Ingredients/Ingredients";
import RestaurantDetail from "./RestaurantDetail";
import CreateMenuForm from '../Menu/CreateMenuForm';
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantById, getRestaurantsCategory} from "../../components/State/Restaurant/Action";
import {getMenuItemsByRestaurantId} from "../../components/State/Menu/Action";
import {fetchRestaurantsOrder} from "../../components/State/Restaurant_Order/Action";

const Admin = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {restaurant} = useSelector(store => store);
    const handleClose = () => {
    }
    useEffect(() => {
        dispatch(getRestaurantsCategory({jwt, restaurantId: restaurant?.userRestaurant?.id}))
        dispatch(fetchRestaurantsOrder({
            jwt, restaurantId: restaurant?.userRestaurant?.id,
        }))

    }, []);
    return (
        <div>
            <div className={'lg:flex justify-between'}>
                <div>
                    <AdminSideBar handleClose={handleClose}/>
                </div>
                <div className={'lg:w-[80%]'}>
                    <Routes>
                        <Route path={'/'} element={<RestaurantDashboard/>}></Route>
                        <Route path={'/orders'} element={<Orders/>}></Route>
                        <Route path={'/menu'} element={<Menu/>}></Route>
                        <Route path={'/category'} element={<FoodCategory/>}></Route>
                        <Route path={'/ingredients'} element={<Ingredients/>}></Route>
                        <Route path={'/events'} element={<Events/>}></Route>
                        <Route path={'/details'} element={<RestaurantDetail/>}></Route>
                        <Route path={'/add-menu'} element={<CreateMenuForm/>}></Route>
                        <Route path={'/logout'}></Route>
                    </Routes>
                </div>

            </div>
        </div>
    );
};

export default Admin;