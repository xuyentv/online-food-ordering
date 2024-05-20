import {Route, Routes} from "react-router-dom";
import CreateRestaurantForm from "../AdminComponent/CreateRestaurant/CreateRestaurantForm";
import Admin from "../AdminComponent/Admin/Admin";

export const AdminRoute = () => {
    console.log('admin ; ');
    return (
        <div>
            <Routes>
                <Route path="/*" element={<Admin />}>
                </Route>
                {/*<Route path="/create" element={<CreateRestaurantForm />} />*/}
            </Routes>
        </div>
    )
}