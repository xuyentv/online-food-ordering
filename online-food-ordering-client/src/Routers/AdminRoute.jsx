import {Route, Routes} from "react-router-dom";
import CreateRestaurantForm from "../AdminComponent/CreateRestaurant/CreateRestaurantForm";
import Admin from "../AdminComponent/Admin/Admin";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRestaurantByUserId} from "../components/State/Restaurant/Action";

export const AdminRoute = () => {
    const {restaurant} = useSelector(store => store);
    console.log('AdminRoute',restaurant);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRestaurantByUserId({
            jwt: localStorage.getItem("jwt"),
        }))
    }, []);
    return (
        <div>
            <Routes>
                <Route path="/*" element={!restaurant.userRestaurant ? <CreateRestaurantForm/> : <Admin/>}></Route>
            </Routes>
        </div>
    );
};
