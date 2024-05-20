import React from 'react';
import AdminSideBar from "./AdminSideBar";
import {Route, Routes} from "react-router-dom";
import RestaurantDashboard from "../Dashboard/RestaurantDashboard";
import Orders from "../Orders/Orders";
import Menu from "../Menu/Menu";
import FoodCategory from "../FoodCategory/FoodCategory";
import Events from "../Events/Events";
import Ingredients from "../Ingredients/Ingredients";
import RestaurantDetail from "./RestaurantDetail";

const Admin = () => {
    const handleClose = () => {

    }
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
                        <Route path={'/logout'}></Route>
                    </Routes>
                </div>

            </div>
        </div>
    );
};

export default Admin;