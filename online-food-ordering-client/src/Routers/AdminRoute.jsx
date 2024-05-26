import { Route, Routes } from "react-router-dom";
import CreateRestaurantForm from "../AdminComponent/CreateRestaurant/CreateRestaurantForm";
import Admin from "../AdminComponent/Admin/Admin";

export const AdminRoute = () => {
  console.log("admin ; ");
  return (
    <div>
      <Routes>
        <Route path="/*" element={false? <CreateRestaurantForm/> : <Admin/>}></Route>
      </Routes>
    </div>
  );
};
